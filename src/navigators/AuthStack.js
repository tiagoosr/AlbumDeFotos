import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';

const AuthStack = createStackNavigator({
    LoginScreen: {
        screen: LoginScreen,
    }
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

export default AuthStack;