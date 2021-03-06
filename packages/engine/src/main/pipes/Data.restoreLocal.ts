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

import { params } from '../model';
import { Pipe } from '../pipe';
import { RuntimeCtx } from '../ctx';
import { Element } from '../element';

export class DataLocalRestore extends Pipe {
    static $type = 'Data.restoreLocal';
    static $help = `
Restores a set saved with Local Save pipe.
Input set is discared.
`;

    @params.String({ source: 'locals', showInHeader: true })
    key: string = '';

    async apply(inputSet: Element[], ctx: RuntimeCtx): Promise<Element[]> {
        return ctx.getLocal(this.key);
    }
}
