<template>
    <div>
        <section class="band">
        </section>
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="head">
                            <div class="flexcol">
                                <a href="#" class="logo"></a>
                            </div>
                            <div class="flexcol column">
                                <div class="namesite">My Account</div>
                                <nav>
                                    <ul>
                                        <li>
                                            <router-link to="/">Главная</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/about">О нас</router-link>
                                        </li>
                                        <li><a href="#">Платежи</a></li>
                                        <li><a href="#">Переводы</a></li>
                                        <li><a href="#">Купля/продажа валюты</a></li>
                                        <li><a href="#">Заявки</a></li>
                                        <li><router-link to="/contact">Контакты</router-link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="main">
            <div class="container">
                <slot/>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Site.vue"
    }
</script>

<style>

</style>