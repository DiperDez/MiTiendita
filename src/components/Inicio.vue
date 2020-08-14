<template>
    <div class="row m-0 h-100">
        <div class="col-12 dcenter my-5">
            <div class="col-11 home-container h-100 dcenter p-0 overflow-hidden">
                <div class="col-6 p-0 dcenter h-100 home">
                    <div>
                        <h1 class="display-4 text-uppercase font-weight-lighter text-light">{{title}}</h1>
                    </div>
                </div>
                <div class="col-6 p-0 dcenter align-items-end h-100 p-3 bg-white">
                    <router-view></router-view>
                    <div class="col-12 p-0 menu dcenter justify-content-end">
                        <ul class="m-0 dcenter">
                            <li>
                                <router-link class="text-decoration-none" to="/login">Inicio</router-link>
                            </li>
                            <li>
                                <router-link class="text-decoration-none" to="/acerca">Acerca de</router-link>
                            </li>
                            <li>
                                <router-link class="text-decoration-none" to="/contacto">Contacto</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style>
    .home-container{
        box-shadow: 0px 0px 20px #BABAB8;
    }
    .home{
        background-color: #00C9A7;
    }
    .menu li{
        list-style: none;
        margin: 0px 10px;
    }
</style>