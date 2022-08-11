<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input
                type="text"
                class="form-control"
                placeholder="Buscar entrada"
            >
        </div>

        <div class="entry-scrollarea">
            <EntryView v-for="(item, index) in 100" :key="index" @click="goToEntryView(index)">
                
            </EntryView>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default{
    components:{
        EntryView: defineAsyncComponent(()=>import('../components/EntryComponent.vue'))
    },
    methods: {
        goToEntryView(param){
            this.$router.push({name: 'entry-view', params:{id:param}})
        }
    },
}
</script>

<style lang="scss" scoped>
    .entry-list-container{
        border-right: 1px solid #2c3e50;
        height: calc(100vh - 56px);
    }

    .entry-scrollarea{
        height: calc(100vh - 120px);
        overflow: scroll;
    }
</style>