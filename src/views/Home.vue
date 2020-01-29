<template>
    <div class="row">
        <div class="col-lg-10 col-md-9 col-sm-8 col-xs-12">
            <div class="flexlist">
                <template v-for="item in items" >
                    <Itemblock :title="item.name" :key="item.id"/>
                </template>
            </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
            <Asideright/>
        </div>
    </div>

</template>

<script>

    import Itemblock from '../components/Itemblock';
    import Asideright from '../components/Asideright';

    export default {
        name: "Home.vue",
        data() {
            return {
                items: [{name: 'Мои счета',id:1}, {name: 'Мои книги',id:2}, {name: 'Мои вещи',id:3}, {name: 'Мои записки',id:4}]
            }
        },
        components: {Itemblock, Asideright}
    }
</script>

<style>

</style>