/*
 eslint-disable
 @typescript-eslint/no-unsafe-assignment
 */
import HelloWorld from '../components/HelloWorld.vue';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'HelloWorld',
  component: HelloWorld,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { HelloWorld },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<hello-world v-bind="args" />',
});

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* 👇 The args you need here will depend on your component */
};
