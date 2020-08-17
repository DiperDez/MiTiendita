<template>
    <div class="row m-0 h-100">
        <div class="col-12 p-0 dcenter py-5 my-5">
            <div class="col-10 p-0 bg-white shadow-sm h-100 dcenter">
                <div class="col-6 p-0 bg-danger p-4 h-100">
                    <h1>Title</h1>
                </div>
                <div class="col-6 p-0 bg-white p-4 h-100 dcenter">
                    <form class="col-7">
                        <h4 class="text-dark title text-uppercase mb-3">Registrate</h4>
                        <div class="form-group dcenter justify-content-between">
                            <input 
                                type="text" class="form-input col-5" placeholder="Nombre"
                            >
                            <input 
                                type="text" class="form-input col-6" placeholder="Apellidos"
                            >
                        </div>
                        <div class="form-group">
                            <input 
                                type="email" class="form-input" placeholder="Correo Electrónico"
                            >
                        </div>
                        <div class="form-group">
                            <input 
                                type="password" class="form-input" placeholder="Contraseña"
                            >
                        </div>
                        <div class="form-group">
                            <input 
                                type="password" class="form-input" placeholder="Repetir Contraseña"
                            >
                        </div>
                        <div class="form-group dcenter justify-content-between">
                            <button class="btn btn-sm btn-danger">Resetear</button>
                            <button class="btn btn-sm btn-primary">Registrar</button>
                        </div>
                        <div class="form-group small text-center">
                            <p class="m-0">¿Ya tienes una cuenta?</p>
                            <a href="#">Inicia Sesión.</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .form-input{
        width: 100%;
        padding: 5px 15px;
        border: none !important;
        outline: none;
        background-color: #6398E6;
        color: white !important;
    }
    .form-input::placeholder{
        color: white;
        border: none;
    }
</style>