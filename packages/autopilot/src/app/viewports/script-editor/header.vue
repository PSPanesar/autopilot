<template>
    <div class="script-editor-header">
        <header-context v-if="editorType === 'context'"/>
        <header-action v-if="editorType === 'action'"/>
    </div>
</template>

<script>
import HeaderContext from './header-context.vue';
import HeaderAction from './header-action.vue';

export default {

    components: {
        HeaderContext,
        HeaderAction,
    },

    computed: {

        viewport() {
            return this.app.viewports.scriptEditor;
        },

        editorType() {
            return this.viewport.getEditorType();
        }

    }

};
</script>

<style>
</style>
