# Vue-mdl-starter
 > Vuejs project for start. It contains utils for rest api, spinner, toast, etc... and material designed components.

## Example code (Required import vue components)
```
<template>
<div>
  <Spinner/>
  <Checkbox title="Label" value="value" :checked="true"/>
  <TextField placeHolder="Input text." type="text">
  <Button title="Button"/>
  <IconButton label="add" />
  <Radio :radioValue="radioValue" name="name"> 
  // radioValue: [{ value: 'value', label: 'First', checked: true }, { value: 'value', label: 'Second' }]
  <Dialog ref="dialog" title="Dialog" :width=500 :height=300>
    <div slot="content"> // Dialog content
      <Table/>
      <Button title="Close" @onClick="closeDialog"/> 
      // closeDialog = () => { this.$refs.dialog.$el.close(); }
    </div>
  </Dialog>
</div>
</template>
<script>
import Checkbox from '../foundation/checkbox/Checkbox';
import TextField from '../foundation/textField/TextField';
import Button from '../foundation/button/Button';
import IconButton from '../foundation/button/IconButton';
import Tooltip from '../foundation/tooltip/Tooltip';
import Radio from '../foundation/radio/Radio';
import Dialog from '../foundation/dialog/Dialog';
import Spinner from '../foundation/spinner/Spinner';

export default {
  name: 'sample',
  components: {
    Checkbox,
    TextField,
    Button,
    IconButton,
    Tooltip,
    Radio,
    Dialog,
    Spinner
  }
}
</script>
```
## Sample image
 <img src="https://github.com/lsj234027/vue-mdl-starter/blob/development/screenshot/mdl-compoenent-1.PNG"/>
 <img src="https://github.com/lsj234027/vue-mdl-starter/blob/development/screenshot/mdl-compoenent-2.PNG"/>
 <img src="https://github.com/lsj234027/vue-mdl-starter/blob/development/screenshot/mdl-compoenent-3.PNG"/>
 <img src="https://github.com/lsj234027/vue-mdl-starter/blob/development/screenshot/mdl-compoenent-4.PNG"/>

## License

[MIT](http://opensource.org/licenses/MIT)
