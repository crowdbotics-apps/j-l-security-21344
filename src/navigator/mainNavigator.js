import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList137537Navigator from '../features/ArticleList137537/navigator';
import ArticleList137520Navigator from '../features/ArticleList137520/navigator';
import ArticleList137519Navigator from '../features/ArticleList137519/navigator';
import ArticleList137518Navigator from '../features/ArticleList137518/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList137537: { screen: ArticleList137537Navigator },
ArticleList137520: { screen: ArticleList137520Navigator },
ArticleList137519: { screen: ArticleList137519Navigator },
ArticleList137518: { screen: ArticleList137518Navigator },

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
