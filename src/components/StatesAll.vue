<template>
  <div class="all-states">
    <h1>All states in {{region}}</h1>
    <ul v-for="(state,index) in allStates" :key="index">
      <li class="item" @click="scrollToTop"><router-link :to="{name: 'StatesSingle', params: {state: state.name}}">{{state.name}} </router-link>
        <label class="container">
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
      </li>
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
<style scoped lang="scss">
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


  .container {
  display: inline-block;
  position: relative;
  margin-bottom: 1.2rem;
  margin-left: 1.5rem;
  cursor: pointer;
  font-size: 22px;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

.container input:checked ~ .checkmark {
  background-color: #369a5b;
  &:after {
    display: block;
  }
}



</style>