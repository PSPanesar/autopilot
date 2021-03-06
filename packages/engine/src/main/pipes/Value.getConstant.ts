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

import { Pipe } from '../pipe';
import { RuntimeCtx } from '../ctx';
import { Element } from '../element';
import * as util from '../util';
import { params } from '../model';

export class ValueGetConstant extends Pipe {
    static $type = 'Value.getConstant';
    static $help = `
Returns specified constant value.

### Use For

- obtaining a constant value which never changes across script executions
  (e.g. for navigating to specific constant URL)
- quickly test actions that require a string input
`;

    @params.String()
    value: string = '';
    @params.Enum({ enum: ['string', 'number', 'boolean'] })
    dataType: 'string' | 'number' | 'boolean' = 'string';

    async apply(inputSet: Element[], _ctx: RuntimeCtx): Promise<Element[]> {
        const value = this.getValue();
        return this.map(inputSet, el => el.clone(value));
    }

    getValue(): any {
        const value = this.value;
        const dataType = this.dataType;
        return util.getConstant(dataType, value);
    }
}
