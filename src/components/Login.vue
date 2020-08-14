<template>
    <div class="col-7">
     
        <form class="form" v-if="vista == 1">
            <h5 class="text-dark font-weight-light">Inicia Sesión</h5>
            <div class="form-group" :class="{'form-group--error' : $v.name.$error}">
                <input type="text" class="form-control" placeholder="Usuario">
            </div>
            
            <div class="form-group">
                <input type="password" class="form-control" placeholder="Contraseña">
            </div>
            
            <div class="form-group dcenter justify-content-between">
                <div class="small font-weight-light">
                    <p class="m-0">¿Aún no tienes cuenta?</p>
                    <a @click="vista++" href="#">Registrate</a>
                </div>
                <button class="btn btn-primary btn-sm">Ingresar</button>
            </div>
        </form>
        <form class="form" v-if="vista === 2">
            <h5 class="text-dark font-weight-light">Registrate</h5>
            <div class="form-group dcenter justify-content-between">
                <input 
                    type="text" 
                    class="form-control rounded-0 col-5" placeholder="Nombre(s)"
                    
                >
                <div class="invalid-feedback">
                    
                </div>
                <input 
                    type="text" 
                    class="form-control rounded-0 col-6" placeholder="Apellidos"
                    
                >
                <div class="valid-feedback">Tú nombre es valido!</div>
                <div class="invalid-feedback">
                    
                </div>
            </div>
            <div class="form-group">
                <input 
                    type="text"
                    class="form-control rounded-0" placeholder="Usuario"
                    v-model="usuario"
                >
            </div>
            <div class="form-group">
                <input 
                    type="password" 
                    class="form-control rounded-0" placeholder="Contraseña"
                    v-model="contraseña"
                >
            </div>
            <div class="form-group">
                <input 
                    type="password" 
                    class="form-control rounded-0" placeholder="Repetir Contraseña"
                    v-model="repetirContraseña"
                >
            </div>
            
            <div class="form-group dcenter justify-content-between">
                <div class="small font-weight-light">
                    <p class="m-0">¿Ya tienes cuenta?</p>
                    <a @click="vista--" href="#">Inicia Sesión</a>
                </div>
                <button class="btn btn-primary btn-sm font-weight-light">Registrar</button>
            </div>
        </form>
        
    </div>
</template>

<script>
import { required, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'


export default {
    data(){
        return{
            vista: 2,
            formulario:{
                nombre: '',
                apellidos: '',
                contraseña: '',
                repetirContraseña: ''
            }
        }
    },
    validations:{
        formulario:{
            nombre:{
                required,
                minLength: minLength(4),
                maxLength: maxLength(10)
            },
            apellidos:{
                required,
                minLength: minLength(8),
                maxLength: maxLength(16)
            },
            password:{
                required,
                minLength: minLength(8),
                maxLength: maxLength(16)
            },
            repeatPassword:{
                required,
                sameAsPassword: sameAs('password')z
            }
        }
    },
    methods:{
        
    }
}
</script>