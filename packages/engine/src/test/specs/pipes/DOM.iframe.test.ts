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

import { runtime } from'../../runtime';
import assert from 'assert';

describe('Pipes: dom/iframe', () => {

    it('returns iframe document', async () => {
        await runtime.goto('/iframes/top.html');
        // Note: we run the pipeline without retry, so let's wait for the page to load
        await runtime.page.waitForLoad();
        const results = await runtime.runPipes([
            {
                type: 'DOM.queryOne',
                selector: '#frame1',
            },
            {
                type: 'DOM.iframe',
            },
        ]);
        assert.equal(results.length, 1);
        assert.equal(results[0].description, '#document');
    });

    it('throws if element is not iframe', async () => {
        await runtime.goto('/iframes/top.html');
        await runtime.assertError('PlaybackError', async () => {
            await runtime.runPipes([
                {
                    type: 'DOM.queryOne',
                    selector: 'html',
                },
                {
                    type: 'DOM.iframe',
                },
            ]);
        });
    });
});
