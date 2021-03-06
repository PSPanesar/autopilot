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

import { FlowDeleteCommand } from './cmd-delete';
import { clipboard } from '../../util';
import { ActionList, ContextList } from '@automationcloud/engine';

export class FlowCutCommand extends FlowDeleteCommand {
    dataType: string = '';

    static title = 'Cut';

    protected async apply() {
        const list = this.viewport.getSelectedList()!;
        this.dataType = list instanceof ActionList ? 'actions' : list instanceof ContextList ? 'contexts' : 'unknown';
        await super.apply();
        clipboard.writeObject({
            type: this.dataType,
            data: this.removedSpecs,
        });
    }
}
