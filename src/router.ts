import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Screens
import StartScreen from './screens/0_Start';
import MatchersScreen from './screens/1_Matchers';
import AsyncScreen from './screens/2_Async';
import LifecycleScreen from './screens/3_Lifecycle';
import MockScreen from './screens/4_Mock';

const AppNavigator = createStackNavigator(
  {
    Start: StartScreen,
    Matchers: MatchersScreen,
    Async: AsyncScreen,
    Lifecycle: LifecycleScreen,
    Mock: MockScreen,
  },
  {
    initialRouteName: 'Start',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
