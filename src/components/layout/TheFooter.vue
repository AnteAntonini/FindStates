<template>
  <footer class="foot">
    <ul class="footer-links">
      <li class="item"><a href="#">Privacy</a></li>
      <li class="item"><a href="#">About</a></li>
      <li class="item"><a href="#">Contact</a></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .foot {
    width: 100%;
    height: 4rem;
    position: relative;
    background: brown;
    bottom: 0;
    box-shadow: 0 -4px 8px 0 rgba(0,0,0,0.4);
  }
  .footer-links {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    & li {
      list-style-type: none;
    }
  }

  a {
    color: rgb(36, 4, 51);
    text-decoration: none;
  }

  .item:hover,a:hover,
  .item a:hover:after {
    color: #ccc;
  }
</style>