/*
 eslint-disable
 @typescript-eslint/no-unsafe-assignment
 */
 import iButton from '../components/atoms/Button.vue';

 //👇 This default export determines where your story goes in the story list
 export default {
   title: 'iButton',
   component: iButton,
 };
 
 //👇 We create a “template” of how args map to rendering
 const Template = (args) => ({
   components: { iButton },
   setup() {
     //👇 The args will now be passed down to the template
     return { args };
   },
   template: '<i-button v-bind="args"></i-button>',
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