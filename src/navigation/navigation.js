import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../components/Screens/LoginScreen";
import RegisterScreen from "../components/Screens/RegisterScreen";
import ContactsScreen from "../components/Screens/ContactsScreen";
import { StyleSheet,  Text } from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { logout } from "../redux/actions/authActions";

// const Stack = createStackNavigator();
//     function AppContainer({auth, logout}){
//   return (
//     <NavigationContainer >
//         <Stack.Navigator>
//           <Stack.Screen
//             name="LoginScreen"
//             options={{header:()=>null}}
//             component={LoginScreen}
             
//           />
       
//           <Stack.Screen
//            name="Register"
//            options={{header:()=>null}}
//            component={RegisterScreen}
//           />
//           <Stack.Screen
//             name="Contacts"
//             component={ContactsScreen}
//           />
//         </Stack.Navigator>
//     </NavigationContainer>
//   );
//     }

// export default AppContainer;
  
const Stack = createStackNavigator();
function AppContainer({ auth, logout }) {
  return (
    <NavigationContainer style={styles.container}>
      {auth.login ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Contacts"
            options={{
              headerRight: () => (
                <TouchableOpacity style={{ marginRight: 20 }} onPress={logout}>
                  <Text>Log Out</Text>
                </TouchableOpacity>
              ),
            }}
            component={ContactsScreen}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Log In"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={RegisterScreen}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
 
  },
});

const mapStateToProp = (state) => {
  return { auth: state };
};

export default connect(mapStateToProp, { logout })(AppContainer);
