<template>
  <div class="try-it-out">
    <div class="try-component">
      <h3>Spinner</h3>
      <Spinner/>
    </div>
    <div class="try-component">
      <h3>Checkbox</h3>
      <Checkbox title="Label"></Checkbox>
    </div>
    <div class="try-component">
      <h3>Textfield</h3>
      <TextField placeHolder="Input text." type="text"></TextField>
    </div>
    <div class="try-component"><h3>Table</h3><Table/></div>
    <div class="try-component">
      <h3>Button / ImageButton</h3>
      <Button title="Button"/>
      <IconButton label="add" />
    </div>
    <div class="try-component">
      <h3>Tooltip</h3>
      <Button title="Tooltip" id="tooltip"/>
      <Tooltip id="tooltip" label="This is a tooltip component"/>
    </div>
    <div class="try-component"><h3>Login</h3><Login/></div>
    <div class="try-component"><h3>Radio</h3><Radio :radioValue="radioValue" name="tryRadio"></Radio></div>
    <div class="try-component"><Button title="Dialog" @onClick="showDialog"/></div>
    <Dialog ref="dialog" title="Dialog" :width=500 :height=300>
      <div slot="content">
        <Table/>
        <Button title="닫기" @onClick="closeDialog"/>
      </div>
    </Dialog>
    <div class="try-component"><Button title="API GET" @onClick="getAPI"/></div>
    <div class="try-component"><Card title="Card"><div slot="content"><Button title="Close"></Button></div></Card></div>
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
import Dialog from '../foundation/dialog/Dialog';
import Spinner from '../foundation/spinner/Spinner';
import Card from '../foundation/card/Card';
import api from '../../api/Sample';

export default {
  name: 'TryItOut',
  components: {
    Checkbox,
    TextField,
    Table,
    Login,
    Button,
    IconButton,
    Tooltip,
    Radio,
    Dialog,
    Spinner,
    Card
  },
  data() {
    return {
      radioValue: [{ value: 'value', label: 'First', checked: true }, { value: 'value', label: 'Second' }]
    };
  },
  methods: {
    showDialog() {
      this.$refs.dialog.$el.showModal();
    },
    closeDialog() {
      this.$refs.dialog.$el.close();
    },
    async getAPI() {
      const response = await api.getSample();
      console.log(response);
    }
  }
};
</script>

<style>
h3 {font-size: 15px; line-height:0px; font-weight:bold}
.try-it-out { padding: 10px; background-color : beige}
.try-component {
  padding: 5px; border-top: 2px solid #a35234;
  padding-left: 15px;
  border-left: 2px solid #a35234; border-right: 2px solid #a35234;
}
</style>
