<template>
    <div class="sign-up">
    <header class="user_header">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt="" />
        <h1 class="user_title">sign-up form</h1>
    </header>
    
    <form class="form">
        <div class="form_group">
            <input type="text" placeholder="Username" class="form_input" required/>
        </div>
        
        <div class="form_group">
            <input type="email" placeholder="Email" class="form_input" required/>
        </div>
        
        <div class="form_group">
            <input type="password" placeholder="Password" class="form_input" required/>
        </div>
        
        <button class="btn" @click="myFilter" :class="{'form--no': isActive}">Register</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'FormSignUp',
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
.sign-up {
    height: 81.7vh;
    width: 100%;
    overflow-y:hidden;
    @include formMixin;
}

</style>