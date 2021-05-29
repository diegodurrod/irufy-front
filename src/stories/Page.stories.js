import MyPage from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Page',
  component: MyPage as unknown,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyPage: MyPaged as unknown },
  template:
    '<my-page :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />',
});

export const LoggedIn = Template.bind({});
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
LoggedIn.args = {   
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
