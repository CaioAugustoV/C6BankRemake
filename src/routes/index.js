import { createAppContainer } from 'react-navigation';
import { FluidNavigator } from 'react-navigation-fluid-transitions';

import ScreenInitial from '../pages/Initial';

const transitionConfig = {
  duration: 1000,
};

const defaultStack = FluidNavigator(
  {
    Initial: {
      screen: ScreenInitial,
    }
  },
  {
    initialRouteName: 'Initial',
    transitionConfig
  }
);

const Routes = createAppContainer(defaultStack);

export default Routes;