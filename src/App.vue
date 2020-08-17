<template>
  <div class="container-fluid p-0 h-100">
    <header>
      <div class="col-12 menu dcenter justify-content-end p-3">
        <ul class="m-0 dcenter">
          <li>
            <router-link class="text-decoration-none dcenter" to="/">Inicio</router-link>
          </li>
          <li>
            <router-link class="text-decoration-none dcenter" to="/login">Iniciar Sesión</router-link>
          </li>
          <li>
            <router-link class="text-decoration-none dcenter" to="/acercade">Acerca De</router-link>
          </li>
          <li>
            <router-link class="text-decoration-none dcenter" to="/contacto">Contacto</router-link>
          </li>
        </ul>
      </div>
    </header>
    <main class="h-100">
      <transition name="fade">
        <router-view :title="title"></router-view>
      </transition>
    </main>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Ventast'
    }
  }
}
</script>

<style>
  /* GENERAL */
  body,
  html {
    height: 100%;
    background-color: #F1F1F1;
  }
  .router-link-exact-active {
    color: #2a2a2a !important;
    position: relative;
    transition: all ease-out .5s;
  }
  .router-link-exact-active::before{
    content: '';
    position: absolute;
    width: 50%;
    height: 3px;
    bottom: -7px;
    border-radius: 40px;
    background: rgba(0,0,0,0.6);
    transition: all ease-in .5s;
  }  
  /* SHORTCUTS */
  .dcenter {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  /* GENERAL CODE */
  .title {
    font-family: "Baskervville", serif;
  }
  .menu{
    position: absolute;
    z-index: 2;
  }
  .menu li{
    list-style: none;
    margin: 0 10px;
    font-family: 'Comfortaa', cursive;
    font-size: 14px;
  }
  .menu a{
    color: #BABAB8;
    transition: all ease-out .5s;
  }
  .menu a:hover{
    transition: all ease-in .5s;
    color: #2a2a2a;
  }

  /* TRANSITIONS */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>