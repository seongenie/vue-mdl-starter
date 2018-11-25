<template>
  <div class="Login">
    <div class="mdl-cell--2-col">
      <TextField placeHolder="Username" :floating="true"/>
    </div>
    <div class="mdl-cell--2-col">
      <TextField type="password" placeHolder="Password" :floating="true"/>
    </div>
    <Button title="SIGN IN" buttonStyle="mdl-cell--1-col"/>
    <Button title="SIGN UP" buttonStyle="mdl-cell--1-col"/>
  </div>
</template>
<script>
import TextField from '../textField/TextField';
import Button from '../button/Button';

export default {
  name: 'Login',
  components: { TextField, Button }
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
