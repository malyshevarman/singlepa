<template>
    <div id="app">
      <component :is="layout">
        <router-view/>
      </component>
    </div>
</template>

<script>

    export default {
        name: 'app',
        components: {},
        computed: {
            layout() {
                return this.$route.meta.layout || 'sitelayout'
            }
        }
    }
</script>

<style>

</style>
