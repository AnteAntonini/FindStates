<template>
  <nav class="navbar">
    <ul class="menu">
      <li class="logo"><a href="">Discover</a></li>
      <li class="item home"><router-link :to="{name: 'HomePage'}">Home</router-link></li>
      <li class="item states"><router-link :to="{name: 'StatesFavorite'}">Favorite States</router-link></li>
      <li v-show="checkCurrentPath('login')" class="item button"><router-link :to="{name: 'FormLogin'}">Log In</router-link></li>
      <li v-show="checkCurrentPath('signup')" class="item button secondary"><router-link :to="{name: 'FormSignUp'}">Sign Up</router-link></li>
      <li id="menuToggle">
        <span></span>
        <span></span>
        <span></span>
        <!-- <ul id="menu">
          <a href="#"><li>Login</li></a>
          <a href="#"><li>Sign up</li></a>
        </ul> -->
      
      </li> 
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      
    }
  },
  methods: {
    checkCurrentPath(path) {
      return this.$route.path !== "/"+path;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* Basic styling */
.navbar {
  width: 100%;
  height: 5rem;
  position: relative;
  background: brown;
  top: 0;
  padding: 0 15px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  }
  .menu {
    width: 100%;
    height: 100%;
    & li {
      display: inline-block;
      list-style-type: none;
      margin: 15px 10px;
      padding: 10px;
    }
  }
a {
  color: rgb(36, 4, 51);
  text-decoration: none;
}

.logo {
  font-size: 1.4rem;
  float: left;
}
.states {
  font-size: 1.2rem;
  position: absolute;
  left: 15rem;
}
.home {
  font-size: 1.4rem;
  position: absolute;
  left: 47%;
}
.button {
  font-size: 1.2rem;
  float: right;
}

.item:hover a:hover,
.item a:hover::after {
  color: #ccc;
}

#menuToggle
{
  display: none;
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
  & span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    
    background: #cdcdcd;
    border-radius: 3px;
  }
}



/* #menu
{
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  top: 0; 
}

#menu li
{
  padding: 10px 0;
  font-size: 1.2rem;
}  */

@media all and (max-width: 980px) {
  .item.states {
    left: 10rem;
  }
}

@media all and (max-width: 780px) {
  .logo {
    font-size: 1.2rem;
  }
  .item {
    bottom: 0.5rem;
    &.states {
    font-size: 1.2rem;
    margin: 15px;
    left: 7rem;
    }
    &.home {
    font-size: 1.2rem;
    margin: 15px;
    right: 18rem;
    }
    &.button {
    display: none;
    }
  }
  #menuToggle {
    display: block;
  }
}


@media all and (max-width: 600px) {
  .item.button {
    display: none;
  }
  .logo {
    font-size: 1.2rem;
  }
  .item {
    bottom: 0.5rem;
    &.home {
    font-size: 1.1rem;
    margin: 15px;
    right: 50px;
    }
    &.states {
    font-size: 1.1rem;
    margin: 15px;
    left: 7rem;
    }
  }
  #menuToggle {
    display: block;
  }
}

@media all and (max-width: 460px) {
  .item {
    &.home {
    margin-right: 8rem;
    }
    &.states {
    display: none;
    }
  }
}

</style>