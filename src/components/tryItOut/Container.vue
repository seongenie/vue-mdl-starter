<template>
  <div class="try-it-out">
    <Checkbox title="체크박스"></Checkbox>
    <TextField placeHolder="입력해주세요" type="text"></TextField>
    <Table/>
    <Button title="버튼"/>
    <Login/>
  </div>
</template>

<script>
import Checkbox from '../foundation/checkbox/Checkbox';
import TextField from '../foundation/textField/TextField';
import Table from '../foundation/table/Table';
import Login from '../foundation/login/Login';
import Button from '../foundation/button/Button';

export default {
  name: 'TryItOut',
  components: { Checkbox, TextField, Table, Login, Button }
};
</script>

<style>
.try-it-out {
}
</style>
