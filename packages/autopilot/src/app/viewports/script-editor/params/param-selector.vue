<template>
    <div class="param--selector">

        <sb v-model="value"
                :scope-el="el && el.remote"/>

    </div>
</template>

<script>
import ParamMixin from './param-mixin';

export default {

    mixins: [ParamMixin],

};
</script>
