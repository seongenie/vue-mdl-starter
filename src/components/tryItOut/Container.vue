<template>
  <div class="try-it-out">
    <Card title="Spinner"><Spinner slot="content"/></Card>
    <div class="try-component"><Checkbox title="체크박스"></Checkbox></div>
    <div class="try-component"><TextField placeHolder="입력해주세요" type="text"></TextField></div>
    <div class="try-component"><Table/></div>
    <div class="try-component">
      <Button title="버튼"/>
      <Button title="툴팁" id="tooltip"/>
      <Tooltip id="tooltip" label="This is a tooltip component"/>
      <IconButton label="add" />
    </div>
    <div class="try-component"><Login/></div>
    <div class="try-component"><Radio :radioValue="radioValue" name="tryRadio"></Radio></div>
    <div class="try-component"><Button title="Dialog" @onClick="showDialog"/></div>
    <Dialog ref="dialog" title="Dialog" :width=800 :height=500>
      <div slot="content">
        <Table/>
        <Button title="닫기" @onClick="closeDialog"/>
      </div>
    </Dialog>
    <div class="try-component"><Button title="API_GET" @onClick="getAPI"/></div>
    <Card><Button slot="content"></Button></Card>
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
.try-it-out { padding: 10px; background-color : beige}
.try-component { padding: 15px; border-bottom: 1px solid red }
</style>
