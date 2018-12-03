# Vue-mdl-starter
 > Vuejs project for start. It contains utils for rest api, spinner, toast, etc... and material designed components.

## Example code (Required import vue components)
<pre><code>
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
</code></pre>
## Sample image
 <img src="https://github.com/lsj234027/vue-mdl-starter/blob/development/screenshot/mdl-compoenent-1.PNG"/>
 <img src="https://github.com/lsj234027/vue-mdl-starter/blob/development/screenshot/mdl-compoenent-2.PNG"/>
 <img src="https://github.com/lsj234027/vue-mdl-starter/blob/development/screenshot/mdl-compoenent-3.PNG"/>
 <img src="https://github.com/lsj234027/vue-mdl-starter/blob/development/screenshot/mdl-compoenent-4.PNG"/>

## License

[MIT](http://opensource.org/licenses/MIT)
