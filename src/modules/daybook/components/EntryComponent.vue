<template>
    <div class="mb-3 pointer p-2 entry-container">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, jueves</span>
        </div>
        <div class="entry-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare, urna sit amet tincidunt varius, diam nisl mattis erat, sed auctor neque diam nec odio. Suspendisse at malesuada nisl. Quisque consectetur molestie efficitur. Integer at congue est, suscipit mollis metus. Praesent pulvinar dictum iaculis. Curabitur ac posuere sapien, non egestas purus. Phasellus laoreet vitae nibh a faucibus.
        </div>
    </div>
</template>

<script>
export default{

}
</script>

<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;

        &:hover{
            background-color: lighten($color: grey, $amount: 45);
        }
        .entry-description{
            font-size: 12px;
        }
    }
</style>