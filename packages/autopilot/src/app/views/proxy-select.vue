<template>
    <div
        v-if="roxi.isAuthenticated()"
        title="Proxy Settings"
        class="group group--merged">
        <button class="proxy-button button button--small button--flat"
            :class="{ 'button--primary': roxi.isActive() }"
            @click="roxi.popupMenu()">
            <i class="button__icon fas fa-exchange-alt"></i>
            <span>{{ roxi.selectedTag || 'No proxy' }}</span>
        </button>
    </div>
</template>

<script>
export default {

    inject: [
        'roxi',
    ],

};
</script>

<style scoped>
.proxy-button {
    font-family: var(--font-family--alt);
    font-weight: 400;
}
</style>
