import TabNavigator from './TabNavigator';
import AuthStack from './AuthStack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const Navigator = createSwitchNavigator({
    AuthStack,
    TabNavigator
},
    {
        defaultNavigationOptions: () => {
            return {
                headerTitleAlign: 'center',
                headerTransparent: true,
                header: null
            }
        },
    }

);

const AppContainer = createAppContainer(Navigator);

export default AppContainer;