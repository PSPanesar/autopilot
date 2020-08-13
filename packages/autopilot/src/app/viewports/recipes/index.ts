import { StatelessViewport } from '../../viewport';
import { helpers, clipboard } from '../../util';
import assert from 'assert';
import { PipeGroup, PipeRecipe } from '../../managers/recipe-manager';
import { MenuItemConstructorOptions } from 'electron';
import { util } from '@automationcloud/engine';

export class RecipesViewport extends StatelessViewport {
    getViewportId(): string {
        return 'recipes';
    }

    getViewportName(): string {
        return 'Recipes';
    }

    getViewportIcon(): string {
        return 'fas fa-utensils';
    }

    get pipeGroups() {
        return this.app.recipes.pipeGroups;
    }

    update() {
        // We're mostly working with data persisted by RecipesManager, hence the shortcut
        super.update();
        this.app.recipes.update();
    }

    getPipeGroupId(group: PipeGroup) {
        return 'group-' + group.name;
    }

    createPipeRecipe(groupName: string, recipeName: string, pipes: any[]) {
        assert(pipes.length, 'Recipe should include at least one pipe.');
        recipeName = recipeName.trim() || 'New Recipe';
        groupName = groupName.trim() || 'Default';
        const group = this.assertPipeGroup(groupName);
        const recipe = {
            name: recipeName.trim(),
            pipes,
        };
        this.insertPipeRecipe(group, recipe);
    }

    assertPipeGroup(newName: string): PipeGroup {
        newName = newName.trim();
        const existing = this.pipeGroups.find(_ => _.name === newName);
        if (existing) {
            return existing;
        }
        const group = {
            name: newName,
            recipes: [],
        };
        this.pipeGroups.push(group);
        this.update();
        return group;
    }

    insertPipeGroup(group: PipeGroup) {
        const newGroup = util.deepClone(group);
        const otherNames = this.pipeGroups.map(_ => _.name);
        newGroup.name = helpers.makeSafeString(group.name, otherNames);
        this.pipeGroups.push(newGroup);
        this.update();
        return newGroup;
    }

    renamePipeGroup(group: PipeGroup, newName: string) {
        const otherNames = this.pipeGroups.filter(_ => _ !== group).map(_ => _.name);
        group.name = helpers.makeSafeString(newName.trim(), otherNames);
        this.update();
    }

    deletePipeGroup(group: PipeGroup) {
        const i = this.pipeGroups.findIndex(_ => _ === group);
        if (i > -1) {
            this.pipeGroups.splice(i, 1);
        }
        this.update();
    }

    insertPipeRecipe(group: PipeGroup, recipe: PipeRecipe) {
        const newRecipe = util.deepClone(recipe);
        const otherNames = group.recipes.map(_ => _.name);
        newRecipe.name = helpers.makeSafeString(recipe.name, otherNames);
        group.recipes.push(newRecipe);
        this.update();
    }

    renamePipeRecipe(group: PipeGroup, recipe: PipeRecipe, newName: string) {
        const otherNames = group.recipes.filter(r => r !== recipe).map(r => r.name);
        recipe.name = helpers.makeSafeString(newName, otherNames);
        this.update();
    }

    deletePipeRecipe(group: PipeGroup, recipe: PipeRecipe) {
        const i = group.recipes.findIndex(_ => _ === recipe);
        if (i > -1) {
            group.recipes.splice(i, 1);
            this.update();
        }
    }

    readRecipesFromClipboard(): PipeRecipe[] {
        // Convert legacy data & basic inference
        const data = clipboard.readObjectData('pipe-recipes') || clipboard.readObjectData('pipe-recipe') || [];
        const recipes = Array.isArray(data) ? data : [data];
        return recipes.filter(_ => _ != null && _.name && Array.isArray(_.pipes));
    }

    getGroupMenu(group: PipeGroup): MenuItemConstructorOptions[] {
        return [
            {
                label: 'Copy group',
                click: () => {
                    clipboard.writeObject({
                        type: 'pipe-recipes',
                        data: group.recipes,
                    });
                },
            },
            {
                label: 'Paste group as new',
                click: () => {
                    const recipes = this.readRecipesFromClipboard();
                    this.insertPipeGroup({ name: 'New group', recipes });
                },
                enabled: clipboard.hasObjectType('pipe-recipes'),
            },
            {
                label: 'Paste recipes',
                click: () => {
                    const recipes = this.readRecipesFromClipboard();
                    for (const recipe of recipes) {
                        this.insertPipeRecipe(group, recipe);
                    }
                },
                enabled: clipboard.hasObjectType('pipe-recipes'),
            },
            {
                label: 'Delete group',
                click: () => this.deletePipeGroup(group),
            },
        ];
    }

    getRecipeMenu(group: PipeGroup, recipe: PipeRecipe): MenuItemConstructorOptions[] {
        return [
            {
                label: 'Copy recipe',
                click: () => {
                    clipboard.writeObject({
                        type: 'pipe-recipes',
                        data: [recipe],
                    });
                },
            },
            {
                label: 'Paste recipes',
                click: () => {
                    const recipes = this.readRecipesFromClipboard();
                    for (const recipe of recipes) {
                        this.insertPipeRecipe(group, recipe);
                    }
                },
                enabled: clipboard.hasObjectType('pipe-recipes') || clipboard.hasObjectType('pipe-recipe'),
            },
            {
                label: 'Delete',
                click: () => this.deletePipeRecipe(group, recipe),
            },
        ];
    }
}
