<template>
    <div class="row m-0 home h-100">
        <div class="col-12 dcenter">
            <div class="col-7 text-center">
                <h1 class="m-0 display-3 text-uppercase font-weight-light title">{{title}}</h1>
                <h4 class="m-0 text-secondary subtitle">Administra tus ventas de una manera sencilla, rápida y moderna.</h4>
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
    .home{
        position: relative;
    }
    .subtitle{
        font-family: 'Raleway', sans-serif;
    }
    
</style>