<template>
  <div class="all-states">
    <h1>All states in {{region}}</h1>
    <ul v-for="(state,index) in allStates" :key="index">
      <li class="item" @click="scrollToTop"><router-link :to="{name: 'StatesSingle', params: {state: state.name}}">{{state.name}} </router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StatesAll',
  props: {
    region: {
      type: String,
      required: true
/*       validator: function (value) {
        return [
          'syncing',
          'synced',
          'version-conflict',
          'error'
        ].indexOf(value) !== -1
      } */
    }
  },
  data () {
    return {
      allStates: []
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  },
  created() {
    this.axios.get(`https://restcountries.eu/rest/v2/region/${this.region}`).then(res => {
      this.allStates = res.data;
    }).
    catch(err => {
      console.log(err);
    }); 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    list-style-type: none;
  }
  h1 {
    margin: 2rem 0;
  }
  * {
    color: wheat;
  }
  a {
    text-decoration: none;
  }
  .item:hover a:hover,
  .item a:hover::after {
  color: #ccc;
}
</style>