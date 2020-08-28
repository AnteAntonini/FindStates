<template>
  <div class="single-state">
    <h1>Details about {{ state }}</h1>
    <div v-for="(state,index) in singleState.slice(0,1)" :key="index">
        <img :src="state.flag" alt="" class="image">
        <h2>capital: {{ state.capital}}</h2>
        <h2>population: {{ state.population}}</h2>
        <div>
          <span>language: </span>
          <span v-for="language in state.languages" :key="language.iso639_1">
            {{ language.name}}
        </span>
        </div>
        <div>
          <span>currencie: </span>
          <span v-for="currencie in state.currencies" :key="currencie.code">
              {{ currencie.name }}
          </span>
        </div>
        <div>
          <span>timezone: </span>
          <span v-for="(timezone,index) in state.timezones" :key="index">
              {{ timezone }}
          </span>
        </div>
        <button class="button button-one" @click="goBack">Back to all states</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatesSingle',
  props: {
    state: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      singleState: []
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    this.axios.get(`https://restcountries.eu/rest/v2/name/${this.state}`).then(res => {
      this.singleState = res.data;
    })
  }
}
</script>

<style scoped lang="scss">
  .single-state {
      height: 100vh;
  }
  .image {
    height: 100px;
    width: 200px;
  }
  * {
    margin: 20px 0;
  }
  .button {
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
    &-one {
    background-color: darkgreen; 
    color: black; 
    border: 2px solid darkgreen;
    border-radius: 10px;
      &:hover {
        background-color: #4CAF50;
        color: white;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
      }
    }
}
span {
  font-size: 1.5rem;
}

</style>