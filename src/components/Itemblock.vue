<template>
    <div class="itembg">
        <div class="name">
            {{title}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Itemblock",
        props: {
            title: {
                type: String,
                required: true
            },
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>