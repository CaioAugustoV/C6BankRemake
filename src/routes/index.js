import { createAppContainer } from 'react-navigation';
import { FluidNavigator } from 'react-navigation-fluid-transitions';

import ScreenInitial from '../pages/Initial';
import ScreenLogin from '../pages/Login';

const transitionConfig = {
  duration: 1000,
};

const defaultStack = FluidNavigator(
  {
    Initial: {
      screen: ScreenInitial,
    },
    Login: {
      screen: ScreenLogin,
    },
  },
  {
    initialRouteName: 'Initial',
    transitionConfig
  }
);

const Routes = createAppContainer(defaultStack);

export default Routes;