<template>
    <article class="action-notes"
        v-html="notesHtml">
    </article>
</template>

<script>
import { mdToHtml } from '../../util/helpers';

export default {

    props: {
        action: { type: Object, required: true }
    },

    computed: {

        notesHtml() {
            return (this.action.notes || '').trim() ?
                mdToHtml(this.action.notes) : '';
        }

    }

};
</script>

<style>
</style>
