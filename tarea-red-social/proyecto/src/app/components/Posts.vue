<template>
<div>
    <div>
    <textarea placeholder="Pie de foto" class="textarea" v-model="publicacion.descripcion"></textarea>
    <textarea placeholder="Link de foto" class="textarea" v-model="publicacion.imagen"></textarea>

    <button  class="button" @click="subir">Subir foto</button>

    </div>
    <div v-for="publicacion in publicaciones" :key="publicacion">
        <hr class="linea">
        <h1 class= "titulo">
           @{{publicacion.usuario}}
        </h1 >
        <img class="imagen" height= "400" width= "300" :src=publicacion.imagen>
        <p class="pie"> {{publicacion.descripcion}} </p>
        <button  class="button" @click="borrar(publicacion._id)">Borrar publicacion</button>

    </div>    
</div>

</template>

<script>
class Publicacion{
    constructor(_id, usuario, fecha, descripcion, comentario,  reacciones, publico, imagen){
        this._id=_id;
        this.usuario= usuario;
        this.comentario= comentario;
        this.fecha= fecha;
        this.reacciones= reacciones;
        this.imagen= imagen;
        this.descripcion= descripcion;
        this.publico= publico;
    }
}

export default{
    name: 'Posts-',
    data(){
        return{
            publicaciones: [],
            publicacion: new Publicacion("", "", "", "",  0, 0, "")
            
        }
    }, 
    methods:{
        mostrar(){
            fetch('/publicas')
            .then(res => res.json())
            .then(data => {
                console.log(data);  
                this.publicaciones=data;
            });
        }, 
        subir(){
            this.publicacion.usuario= "earlareck1@gmail.com";
            this.publicacion.fecha= "03/04/2022";
            this.publicacion.comentarios="1";
            this.publicacion.reacciones= 0;
            this.publicacion.publico= 0;

            fetch('/publicas', {
                method: 'POST',
                body: JSON.stringify(this.publicacion),
                headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
                }
            })

            this.publicaciones.push(this.publicacion)
        },
        borrar(){
            fetch('/publicas/'+this._id, {
            method: 'DELETE',
            body: JSON.stringify(this.publicacion),
            headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
        })
        .then(res => res.json())
        .then(data => console.log(data));
        }
    },
    beforeMount(){
        this.mostrar()
    },
} 
</script>
