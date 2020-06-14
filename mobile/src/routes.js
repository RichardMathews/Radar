import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignUp from './pages/SignUp';
import Main from './pages/Main';
import SignIn from './pages/SignIn';

const Routes = createAppContainer(
  createStackNavigator({
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        title: 'Login'
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: 'Criar conta'
      },
    },
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Radar'
      }
    },
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#FFFF00',
      },
    },
  })
);

export default Routes;