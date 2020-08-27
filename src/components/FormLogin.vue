<template>
    <div class="login">
    <header class="user_header">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt="" />
        <h1 class="user_title">login form</h1>
    </header>
    
    <form class="form">
        <div class="form_group">
            <input type="text" placeholder="Username" class="form_input" />
        </div>
        
        <div class="form_group">
            <input type="password" placeholder="Password" class="form_input" />
        </div>
        
        <button class="btn" @click="myFilter" :class="{'form--no': isActive}">Register</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'FormLogin',
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        myFilter() {
            this.isActive = !this.isActive
        }
    }
}
</script>

<style scoped lang="scss">
 @import '@/mixins/_formMixin.scss';
    
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.login {
    height: 72vh;
    @include formMixin;
}

</style>