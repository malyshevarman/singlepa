<template>
    <div class="row">
        <div class="col-lg-10 col-md-9 col-sm-8 col-xs-12">
            <ul>
               <li v-for="user in USERS" :key="user.id">
                   {{user.name}} | {{user.phone}}
               </li>
            </ul>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
            <Asideright/>
        </div>
    </div>
</template>

<script>
    import Asideright from '../components/Asideright';
    import {mapGetters} from 'vuex';

    export default {
        name: "About",
        components: {Asideright},
        mounted(){
            this.$store.dispatch('GET_USERS');
        },
        computed: {
            ...mapGetters(['USERS']),
        }
    }
</script>

<style scoped>

</style>