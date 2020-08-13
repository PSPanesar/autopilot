import { ApiViewport } from '.';
import { ApiScript } from '../../controllers/api';
import throttle from 'promise-smart-throttle';
import { ScriptDiffController } from '../../controllers/script-diff';

export class ScriptsController {
    viewport: ApiViewport;

    loading: boolean = false;
    hasMore: boolean = false;
    scripts: ApiScript[] = [];

    constructor(viewport: ApiViewport) {
        this.viewport = viewport;

        const oldRefresh = this.refresh;
        this.refresh = throttle(() => oldRefresh.apply(this), 200);
    }

    get app() { return this.viewport.app; }
    get api() { return this.app.api; }
    get diff() { return this.app.get(ScriptDiffController); }

    async refresh() {
        this.hasMore = false;
        this.scripts = [];
        await this.loadMore();
    }

    async loadMore() {
        try {
            this.loading = true;
            const service = this.viewport.selectedService;
            if (!service) {
                return;
            }
            const scripts = await this.api.getScripts({
                serviceId: service.id,
                limit: 101,
                offset: this.scripts.length,
            });
            this.hasMore = scripts.length > 100;
            this.scripts.push(...scripts.slice(0, 100));
        } catch (err) {
            this.viewport.error = err;
        } finally {
            this.loading = false;
        }
    }

    async loadScript(script: ApiScript) {
        try {
            this.loading = true;
            await this.app.tools.loadScriptService(script.id, script.serviceId);
            this.app.viewports.scriptFlow.activateViewport();
            this.app.viewports.scriptFlow.clearSelection();
            this.app.ui.expandable.collapseAll();
        } finally {
            this.loading = false;
        }
    }

    async loadAsDiffBase(script: ApiScript) {
        try {
            this.loading = true;
            await this.app.tools.loadScriptAsDiffBase(script.id);
            this.app.viewports.scriptFlow.activateViewport();
        } finally {
            this.loading = false;
        }
    }

    async publish(script: ApiScript) {
        try {
            this.loading = true;
            await this.api.publishScript(script.id);
            await this.viewport.refresh();
        } finally {
            this.loading = false;
        }
    }

    async createNewScript(spec: { fullVersion: string; note: string; workerTag: string }) {
        try {
            this.loading = true;
            const service = this.viewport.selectedService;
            if (!service) {
                return;
            }
            const { fullVersion, note, workerTag } = spec;
            const data = this.app.project.serializeProjectState();
            await this.app.api.createScript({
                serviceId: service.id,
                fullVersion,
                note,
                workerTag,
                content: data,
            });
            this.diff.setNewBase(this.app.project.script);
        } catch (err) {
            this.viewport.error = err;
        } finally {
            await this.refresh();
        }
    }
}
