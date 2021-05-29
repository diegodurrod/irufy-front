import MyHeader from './Header';

export default {
  title: 'Example/Header',
  component: MyHeader as unknown,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyHeader: MyHeader as unknown },
  template:
    '<my-header :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
