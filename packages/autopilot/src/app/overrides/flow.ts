import { FlowService, util } from '@automationcloud/engine';
import { injectable, inject } from 'inversify';
import { ProtocolController, ProjectController, DatasetsController } from '../controllers';

@injectable()
export class AutopilotFlowService extends FlowService {

    constructor(
        @inject(DatasetsController)
        protected datasets: DatasetsController,
        @inject(ProtocolController)
        protected protocol: ProtocolController,
        @inject(ProjectController)
        protected project: ProjectController,
    ) {
        super();
    }

    isInputsCached() {
        return false;
    }

    async requestInputData(key: string) {
        const data = this.datasets.getInputData(key, '');
        return util.deepClone(data);
    }

    async peekInputData(key: string) {
        const data = this.datasets.getInputData(key, '', false);
        return util.deepClone(data);
    }

    async sendOutputData(key: string, data: any) {
        const { draft } = this.project.metadata;
        const domain = this.protocol.getDomain();
        if (!domain) {
            throw new Error('Cannot access protocol for validation');
        }
        const validation = await domain.validateOutput(key, data);
        if (!validation.valid && !draft) {
            throw new Error('Output is invalid. Disable "strict validation" mode to suppress the error.');
        }
    }

    async setPnr() {}

    async unsetPnr() {}
}
