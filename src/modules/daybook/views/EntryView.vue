<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">11</span>
            <span class="mx-1 fs-3">Agosto</span>
            <span class="mx-2 fs-4 fw-light">2022</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa-solid fa-trash"></i>
            </button>
            <button class="btn btn-primary mx-2">
                Subir foto
                <i class="fa-solid fa-upload"></i>
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="Que sucedio hoy?"></textarea>
    </div>
    <FloatingActionButton></FloatingActionButton>
    <img
        src="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440"
        alt="entry-picture"
        class="img-thumbnail">
</template>
<script>
import { defineAsyncComponent } from 'vue';

export default {
    components:{
        FloatingActionButton: defineAsyncComponent(()=>import('../components/FloatingActionButton.vue'))
    }
}
</script>
<style lang="scss" scoped>
    textarea{
        font-size: 20px;
        border: none;
        height: 100%;

        &:focus{
            outline: none;
        }
    }
    img{
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px, 5px, 10px,rgba($color: #000000, $alpha: 0.2);
    }
</style>