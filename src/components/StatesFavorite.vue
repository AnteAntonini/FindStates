<template>
  <div class="states-favorite">
    <h1>Your favorite states:</h1>
    <div v-for="(state,index) in favStates" :key="index">
      {{state}}
    </div>
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
      console.log(this.$store.state.favStates);
      return this.$store.state.favStates;
    }
  }
}
</script>

<style scoped>
  * {
      margin-top: 2rem; 
      width: 100%;
  }
  .states-favorite {
    height: 100%;
    height: 83vh;
  }
</style>