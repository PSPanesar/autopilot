// Copyright 2020 UBIO Limited
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { injectable, inject } from 'inversify';
import {
    ChromeLauncher,
    BrowserService,
    ProxyService,
    Configuration,
    stringConfig,
    booleanConfig,
    numberConfig,
} from '@automationcloud/engine';

const CHROME_ADDITIONAL_ARGS = stringConfig('CHROME_ADDITIONAL_ARGS', '');
const CHROME_PATH = stringConfig('CHROME_PATH');
const CHROME_USER_DIR = stringConfig('CHROME_USER_DIR', `${process.cwd()}/.tmp/chrome/user`);
const CHROME_CACHE_DIR = stringConfig('CHROME_CACHE_DIR', `${process.cwd()}/.tmp/chrome/cache`);
const CHROME_HEADLESS = booleanConfig('CHROME_HEADLESS', false);
const CHROME_STDIO = stringConfig('CHROME_STDIO', 'ignore');
const CHROME_SHUTDOWN_TIMEOUT = numberConfig('CHROME_SHUTDOWN_TIMEOUT', 5000);
// To obtain SHA256 SPKI signature fingerprint of certificate:
// openssl x509 -noout -in ./mycert.crt -pubkey | openssl asn1parse -noout -inform pem -out ./mycert.key
// openssl dgst -sha256 -binary ./mycert.key | openssl enc -base64
const CHROME_CA_SPKI = stringConfig('CHROME_CA_SPKI', [
    'hMHyzUhJwWbOEUX/mbxS1p15qpou3qTrCgzasXyrELE=', // UBIO CA
    '+BV7LvDL+CT6iq4RpgEpBQWLbjms3UyFfIdN0WUOfk8=', // VGS sandbox
    'duNwCVgxuLb+901jd6ui3qfljU55KiwgMJB1EuueDB0=', // VGS production
].join(','));

@injectable()
export class ChromeLaunchService {
    launcher: ChromeLauncher;

    constructor(
        @inject(Configuration)
        protected config: Configuration,
        @inject(BrowserService)
        protected browser: BrowserService,
        @inject(ProxyService)
        protected proxy: ProxyService,
    ) {
        this.config = config;
        this.launcher = new ChromeLauncher({
            chromePort: browser.getChromePort(),
            chromePath: this.getPath(),
            userDataDir: this.getUserDir(),
            additionalArgs: [
                // '--single-process',
                // '--ipc-connection-timeout=10000',
                // '--disable-kill-after-bad-ipc',
                // '--no-zygote',
                // '--nacl-dangerous-no-sandbox-nonsfi',
                // '--disable-namespace-sandbox',
                // '--disable-seccomp-filter-sandbox',
                `--disk-cache-dir=${this.getCacheDir()}`,
                '--disk-cache-size=104857600', // 100MB
                `--proxy-server=http://127.0.0.1:${this.proxy.getProxyPort()}`,
                '--ignore-certificate-errors',
                '--window-size=1280,800',
                `--ignore-certificate-errors-spki-list=${config.get(CHROME_CA_SPKI)}`,
                'about:blank',
                config.get(CHROME_HEADLESS) ? '--headless' : null,
                ...this.getAdditionalArgs(),
            ].filter(Boolean),
            terminateProcessOnExit: true,
            stdio: config.get(CHROME_STDIO),
        });
    }

    getPath() {
        return this.config.get(CHROME_PATH);
    }

    getCacheDir() {
        return this.config.get(CHROME_CACHE_DIR);
    }

    getUserDir() {
        return this.config.get(CHROME_USER_DIR);
    }

    getAdditionalArgs() {
        return this.config.get(CHROME_ADDITIONAL_ARGS).split(/\s+/);
    }

    async launch() {
        await this.launcher.launch();
    }

    async shutdown() {
        const timeout = this.config.get(CHROME_SHUTDOWN_TIMEOUT);
        await this.launcher.shutdown(timeout);
    }
}
