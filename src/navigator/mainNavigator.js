import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile182042Navigator from '../features/UserProfile182042/navigator';
import Tutorial182041Navigator from '../features/Tutorial182041/navigator';
import NotificationList182013Navigator from '../features/NotificationList182013/navigator';
import Settings182012Navigator from '../features/Settings182012/navigator';
import Settings182004Navigator from '../features/Settings182004/navigator';
import UserProfile182002Navigator from '../features/UserProfile182002/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile182042: { screen: UserProfile182042Navigator },
Tutorial182041: { screen: Tutorial182041Navigator },
NotificationList182013: { screen: NotificationList182013Navigator },
Settings182012: { screen: Settings182012Navigator },
Settings182004: { screen: Settings182004Navigator },
UserProfile182002: { screen: UserProfile182002Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
