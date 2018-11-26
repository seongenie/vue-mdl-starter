<template>
  <div class="try-it-out">
    <div class="try-component"><Checkbox title="체크박스"></Checkbox></div>
    <div class="try-component"><TextField placeHolder="입력해주세요" type="text"></TextField></div>
    <div class="try-component"><Table/></div>
    <div class="try-component">
      <Button title="버튼"/>
      <Button title="툴팁" id="tooltip"/>
      <Tooltip matchId="tooltip" label="This is a tooltip component"/>
      <IconButton label="add" />
    </div>
    <div class="try-component"><Login/></div>
    <div class="try-component"><Radio :radioValue="radioValue" name="tryRadio"></Radio></div>
  </div>
</template>

<script>
import Checkbox from '../foundation/checkbox/Checkbox';
import TextField from '../foundation/textField/TextField';
import Table from '../foundation/table/Table';
import Login from '../foundation/login/Login';
import Button from '../foundation/button/Button';
import IconButton from '../foundation/button/IconButton';
import Tooltip from '../foundation/tooltip/Tooltip';
import Radio from '../foundation/radio/Radio';

export default {
  name: 'TryItOut',
  components: { Checkbox, TextField, Table, Login, Button, IconButton, Tooltip, Radio },
  data() {
    return {
      radioValue: [{ value: 'value', label: 'First', checked: true }, { value: 'value', label: 'Second', checked: true }]
    };
  }
};
</script>

<style>
.try-it-out { padding: 10px; background-color : beige}
.try-component { padding: 15px; border-bottom: 1px solid red }
</style>
