<template>
  <div class="home">
    <h1>Choose a region</h1>
    <div class="grid-container">
      <div class="card card1">
       <router-link :to="{name: 'StatesAll', params: {region: 'europe'}}">
         <div class="container">
          <h4>Europe</h4>
        </div>
       </router-link>
    </div>
    <div class="card card2">
      <router-link :to="{name: 'StatesAll', params: {region: 'americas'}}">
        <div class="container">
          <h4><b>Americas</b></h4>
        </div>
      </router-link>
    </div>
    <div class="card card3">
      <router-link :to="{name: 'StatesAll', params: {region: 'africa'}}">
        <div class="container">
          <h4><b>Africa</b></h4>
        </div>
      </router-link>
    </div>
    <div class="card card4">
      <router-link :to="{name: 'StatesAll', params: {region: 'asia'}}">
        <div class="container">
          <h4><b>Asia</b></h4>
        </div>
      </router-link>
    </div>
    <div class="card card5">
      <router-link :to="{name: 'StatesAll', params: {region: 'oceania'}}">
        <div class="container">
          <h4><b>Oceania</b></h4>
        </div>
      </router-link>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data () {
    return {
      
    }
  },
  created() {
    this.axios.get('https://restcountries.eu/rest/v2/region/europe').catch(err => {
      console.log(err);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    color: wheat;
  }
  h1 {
    margin: 2rem 0;
  }  
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 250px 250px;
    height: 69vh;
  }
  .card1,.card2,.card3 {
    grid-column: span 2;
  }
  .card4,.card5 {
    grid-column: span 3;
  }
  .card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  transition: 0.3s;
  }
  a {
    text-decoration: none;
    font-size: 2rem;
  }
  .container {
    height: 99%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

@media all and (max-width: 500px){
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .card {
    margin-bottom: 1.5rem;
  }
}
</style>
