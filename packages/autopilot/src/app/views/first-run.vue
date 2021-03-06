<template>
    <div class="first-run automation-cloud">
        <div class="topbar">
            <img src="resources/ubio-robot-white.svg"
                class="topbar-logo" />
            <span>Autopilot</span>
        </div>

        <div class="main">
            <div class="hero--grad section">
                <img class="app-image"
                    src="resources/product-logos/autopilot.svg"
                    width="150"/>
                <div class="section-content" style="color: white;">
                    <h3>
                        Welcome to Autopilot and the Automation Cloud
                    </h3>
                    <p>
                        Autopilot allows you to script powerful,
                        contextually aware workflows on any website
                        or connect any API.
                    </p>

                    <span class="chromium-link">
                        <img src="resources/chromium-icon.png"
                            alt="chromium"
                            class="chromium-image">
                        Let's install Chromium so you can get scripting.
                    </span>
                </div>
            </div>

            <div class="section" style="flex: 1">
                <div class="section-content">
                    <h6>
                        1. Download and install Chromium.
                    </h6>
                    <div class="section-controls">
                        <button
                            class="button button--cta"
                            :class="{
                                'button--secondary': canInstall,
                                'button--disabled': !canInstall,
                            }"
                            @click="install()"
                            :disabled="!canInstall">
                            Install Chromium
                        </button>
                        <div class="progress">
                            <template v-if="chromeDownload.status === 'idle'">
                                <i class="progress-icon far fa-check-circle"
                                    :class="{
                                        'progress-icon--done': installed,
                                    }">
                                </i>
                            </template>
                            <template v-else>
                                <i class="progress-icon fas fa-spinner fa-spin progress-icon--progress">
                                </i>
                                <span v-if="chromeDownload.status === 'downloading'">
                                    Downloading... {{ chromeDownload.progress }}%
                                </span>
                                <span v-if="chromeDownload.status === 'extracting'">
                                    Installing... Please hold on.
                                </span>
                            </template>
                        </div>
                    </div>

                    <p>
                        Chromium will be installed with the Autopilot application.
                        We’ll then use that version of the browser for your automations with Autopilot.
                    </p>

                    <hr class="section-divider"/>

                    <h6>
                        2. Run scripts locally or <a :href="registerUrl">Register for Automation Cloud account</a> at any time.
                    </h6>
                    <div class="section-controls">
                        <button
                            class="button button--cta"
                            :class="{
                                'button--primary': installed,
                                'button--disabled': !installed,
                            }"
                            :disabled="!installed"
                            @click="continueToAutopilot()">
                            Continue to Autopilot
                        </button>
                    </div>

                    <p>
                        Note: we log anonymous usage stats (Autopilot runs, versions used) so that
                        we can continually improve Autopilot.
                    </p>
                </div>
            </div>

            <div class="section section--tray tray-bg--transparent-mid">
                <promo-robot-school style="align-self: end;"/>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    inject: [
        'acUrls',
        'chromeDownload',
        'firstRun',
    ],

    computed: {

        canInstall() {
            return !this.installed && this.chromeDownload.status === 'idle';
        },

        installed() {
            return this.chromeDownload.isInstalled();
        },

        registerUrl() {
            return this.acUrls.get('register');
        },

    },

    methods: {

        async install() {
            try {
                await this.chromeDownload.downloadAndInstall();
            } catch (err) {
                console.error(err);
                alert('Installation failed. Please report this problem to Automation Cloud support.');
            }
        },

        async continueToAutopilot() {
            try {
                await this.chromeDownload.updateChromeSettings();
                this.firstRun.setFirstRun(false);
            } catch (err) {
                console.error(err);
                alert('Failed to set up Chrome. Please report this problem to Automation Cloud support.');
            }
        },
    }
};
</script>

<style scoped>
.first-run {
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
    height: 100vh;
}

.topbar {
    flex: 0 0 auto;
    display: flex;
    flex-flow: row nowrap;

    background: var(--color-mono--800);
    color: var(--ui-color--white);

    -webkit-app-region: drag;
    user-select: none;
    justify-content: center;
    align-items: center;
    min-height: 35px;
}

.topbar-logo {
    padding: 0 var(--gap);
    user-select: none;
    -webkit-user-drag: none;
}

.main {
    overflow-y: auto;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.section {
    display: flex;
    flex-flow: column wrap;
}

.section--tray {
    padding: var(--gap);
}

.section-content {
    padding: var(--gap--large);
    margin-left: 92px;
}

.section-controls {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
}

.section h3 {
    margin-bottom: var(--gap--large);
}

.section h6 {
    color: var(--color-blue--600);
    font-weight: 400;
}

.section-divider {
    margin: var(--gap--large) 0;
}

.progress {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-left: var(--gap);
    color: var(--ui-color--blue);
}

.progress-icon {
    margin: 0 var(--gap--small);
    font-size: 1.8em;
    color: var(--color-mono--200);
}

.progress-icon--progress {
    color: var(--ui-color--blue);
}

.progress-icon--done {
    color: var(--ui-color--green);
}

.chromium-link {
    display: flex;
    align-items: center;
    margin-top: var(--gap);
}

.chromium-image {
    margin-right: var(--gap);
    width: 25px;
}

.app-image {
    padding: var(--gap);
    margin-left: 56px;
}
</style>
