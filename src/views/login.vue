<template>
    <div class="content">
        <div class="login">
            <img class="logo-img" src="../assets/logo_utm.png" alt="logo">
            <b-form class="login-form" @submit="onSubmit" v-if="show">
            <b-form-group id="input">
                <b-form-input
                id="input-1"
                v-model="form.username"
                placeholder="Username"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input">
                <b-form-input
                id="input-2"
                v-model="form.password"
                placeholder="Password"
                required
                ></b-form-input>
            </b-form-group>
            <div class="d-grid gap-2 buttons">            
                <b-button type="submit" class="d-md-block login-button">Login</b-button>
            </div>
            <div class="buttons">
                <a href="#" class="lost-password">Lost password?</a>
            </div>
            <div class="d-grid gap-2 buttons"> 
                <b-button type="button" class="d-md-block register-button" @click="onRegister">Register</b-button>
            </div>
            </b-form>
        </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        form: {
          username: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        alert("Login success. Username: "+this.form.username +" Password: "+this.form.password);
         // Reset our form values
        this.form.username = '';
        this.form.password = '';
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      onRegister(event) {
        event.preventDefault();
        window.open("/register", "_blank");
      }
    }
}
</script>

<style scoped>
.content{
    padding: 13vh;
}
.login{
    margin: auto;
    width: 70%;
    background-color: #FFFFFF;
    padding: 40px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
}
.logo-img{
    max-width: 100%;
    height: auto;
}
#input{
    margin: 20px;
}
.buttons{
    margin: 20px;
}
.login-button{
    background-color: #862d4b;
}
.lost-password{
    color: #862d4b;
}
.register-button{
    background-color: #e4e8eb;
    color: #000000
}
</style>