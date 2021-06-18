/*
 eslint-disable
 @typescript-eslint/no-unsafe-assignment
 */
 import RoundButton from '../components/atoms/RoundButton.vue';

 //👇 This default export determines where your story goes in the story list
 export default {
   title: 'RoundButton',
   component: RoundButton,
 };
 
 //👇 We create a “template” of how args map to rendering
 const Template = (args) => ({
   components: { RoundButton },
   setup() {
     //👇 The args will now be passed down to the template
     return { args };
   },
   template: '<round-button v-bind="args"></Button>',
 });
 
 // Deafult style
 export const PrimaryDefault = Template.bind({}); 
 PrimaryDefault.args = { icon: 'fas fa-play' };

 // Disabled style
export const PrimaryDisabled = Template.bind({}); 
PrimaryDisabled.args = { icon: 'fas fa-play', disabled: true };

 // Small size
 export const PrimarySmall = Template.bind({}); 
 PrimarySmall.args = { icon: 'fas fa-play', size: 'small' };

 // Large size
export const PrimaryLarge = Template.bind({}); 
PrimaryLarge.args = { icon: 'fas fa-play', size: 'large' };

// Secondary style
export const Secondary = Template.bind({}); 
Secondary.args = { icon: 'fas fa-play', secondary: true };

// Secondary disabled style
export const SecondaryDisabled = Template.bind({}); 
SecondaryDisabled.args = { icon: 'fas fa-play', secondary: true, disabled: true };

 // Without icon
 export const WithoutIcon = Template.bind({}); 
 WithoutIcon.args = { size: 'large' };

