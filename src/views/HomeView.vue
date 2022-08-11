<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
    <button class="btn btn-primary" @click="gotoDayBook">
      Primary
    </button>
</template>

<script>
export default {
  methods: {
    gotoDayBook(){
      this.$router.push({ name: 'no-entry' })
    }
  },
}
</script>