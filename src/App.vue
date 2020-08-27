<template>
  <div id="app">
    <TheHeader/>
    <router-view/>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader'
import TheFooter from '@/components/layout/TheFooter'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  },
  computed: {
    headerFooter() {
      return {
        header: TheHeader,
        footer: TheFooter
      }
    }
  }

}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html,body {
    position:relative;
    margin:0;
    padding:0;
    overflow:auto; 
    background: linear-gradient(90deg, #FDBB2D 0%, #3A1C71 100%);
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b0bfce;
  height: 100%;
}

</style>
