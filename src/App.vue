<template>
  <div class="container-fluid p-0 h-100">
    <router-view :title="title"></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title: 'Mi Tiendita'
    }
  }
}
</script>

<style>
  /* GENERAL */
  body,
  html{
    height: 100%;
    background: #F0F0F0;
  }
  .router-link-exact-active{
    color: #313131 !important;
  }
  /* SHORTCUTS */
  .dcenter{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  /* GENERAL CODE */
  
</style>