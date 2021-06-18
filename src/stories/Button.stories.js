/*
 eslint-disable
 @typescript-eslint/no-unsafe-assignment
 */
 import Button from '../components/atoms/Button.vue';

 //👇 This default export determines where your story goes in the story list
 export default {
   title: 'Button',
   component: Button,
 };
 
 //👇 We create a “template” of how args map to rendering
 const Template = (args) => ({
   components: { Button },
   setup() {
     //👇 The args will now be passed down to the template
     return { args };
   },
   template: '<Button v-bind="args"></Button>',
 });
 
 // Deafult style
 export const Primary = Template.bind({}); 
 Primary.args = { label: 'Default' };


 // Bordered
 export const Bordered = Template.bind({}); 
 Bordered.args = { bordered: true,  label: 'bordered'};

 // Disabled style
export const Disabled = Template.bind({}); 
Disabled.args = { disabled: true, bordered: true, label: 'Disabled' };

// Secondary style
export const Secondary = Template.bind({}); 
Secondary.args = { secondary: true, label: 'Secondary' };