<template>
  <div class="Login">
    <div class="demo-card-wide mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <TextField placeHolder="Username" :floating="true"/>
      </div>
      <div class="mdl-card__title">
        <TextField type="password" placeHolder="Password" :floating="true"/>
      </div>
      <div class="mdl-card__title">
        <Button title="로그인" @click="signIn"/>
        <Button title="회원가입" @click="signUp"/>
      </div>
    </div>
  </div>
</template>
<script>
import TextField from '../textField/TextField';
import Button from '../button/Button';

export default {
  name: 'Login',
  components: { TextField, Button },
  methods: {
    signIn() {
      this.$emit('onSignIn');
    },
    signUp() {
      this.$emit('onSignUp');
    }
  }
};
</script>
<style scoped>
body {
  text-align: center;
}
.mdl-layout {
  align-items: center;
  justify-content: center;
}
.mdl-layout__content {
  padding: 24px;
  flex: none;
}
.mdl-button {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
}
</style>
