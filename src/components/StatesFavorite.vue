<template>
  <div class="states-favorite">
    <h1>Your favorite states:</h1>
  </div>
</template>

<script>
export default {
  name: 'StatesFavorite',
  data () {
    return {
      
    }
  },
  computed: {
    favStates() {
      return this.$store.state.favStates;
    }
  }
}
</script>

<style scoped>
  * {
      margin-top: 2rem;
      height: 80vh;
      width: 100%;
  }
</style>