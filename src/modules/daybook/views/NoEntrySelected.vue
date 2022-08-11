<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">No hay nada seleccionado</h1>
        <FloatingActionButton icon="fa fa-plus"></FloatingActionButton>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default{
    components:{
        FloatingActionButton: defineAsyncComponent(()=>import('@/modules/daybook/components/FloatingActionButton.vue'))
    }
}
</script>

<style lang="scss" scoped>
    div{
        height: 100%;
    }    
</style>