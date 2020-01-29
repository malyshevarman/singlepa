<template>
    <div class="row">
        <div class="col-lg-10 col-md-9 col-sm-8 col-xs-12">
            <yandexMap :settings="settings" :zoom="13" :coords="[43.21655482905377,76.92052843732398]">
                <ymapMarker hint-content="МЕГА парк" :coords="[43.20245339198784,76.8916910620025]"
                            :balloon="{header:'Мегапарк'}"/>
                <ymapMarker :icon="icontype" hint-content="НУРЛЫ ТАУ" :coords="[43.23085501559641,76.94616136267693]"
                            :balloon="{header:'НУРЛЫ ТАУ'}" :balloon-template="balloontemp"/>

            </yandexMap>


        </div>
        <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
            <Asideright/>
        </div>
    </div>
</template>

<script>
    import Asideright from "@/components/Asideright";
    import {yandexMap, ymapMarker} from 'vue-yandex-maps'

    const settings = {
        apiKey: '',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
    };

    export default {
        name: "Contact",
        components: {Asideright, yandexMap, ymapMarker},
        computed: {
            balloontemp() {
                return `<div style="background:red;">НУРЛЫ ТАУ</div>`
            }
        },
        data() {
            return {
                settings,
                icontype:{
                    layout: 'default#image',
                    imageHref: 'https://image.flaticon.com/icons/png/512/33/33447.png',
                    imageSize: [43, 43],
                    imageOffset: [0, 0],
                }
            }
        }
    }
</script>

<style>
    .ymap-container {
        height: 500px;
    }
</style>