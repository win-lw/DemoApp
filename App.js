import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import { View, Text, StyleSheet, TextInput,Button,Alert } from 'react-native';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
return (
    <Tab.Navigator
    
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'หน้าแรก') {
              iconName = focused ? 'md-home' : 'md-home-outline';
            } else if (route.name === 'เกี่ยวกับเรา') {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            } else if (route.name === 'บริการของเรา') {
              iconName = focused ? 'apps' : 'apps-outline';
            } else if (route.name === 'ติดต่อเรา') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={"gray"} />;
          },
          //tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',

        })}

    >
          <Tab.Screen name="หน้าแรก" component={TabA} options={{ headerShown: false }}/>
          <Tab.Screen name="เกี่ยวกับเรา" component={TabB} options={{ headerShown: false }}/>
          <Tab.Screen name="บริการของเรา" component={TabC} options={{ headerShown: false }}/>
          <Tab.Screen name="ติดต่อเรา" component={TabD} options={{ headerShown: false }}/>
    </Tab.Navigator>
);
}


function login() {
  return (
      <Tab.Navigator
      
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: 'gray',
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'หน้าแรก') {
                iconName = focused ? 'md-home' : 'md-home-outline';
              } else if (route.name === 'เกี่ยวกับเรา') {
                iconName = focused ? 'newspaper' : 'newspaper-outline';
              } else if (route.name === 'บริการของเรา') {
                iconName = focused ? 'apps' : 'apps-outline';
              } else if (route.name === 'ติดต่อเรา') {
                iconName = focused ? 'ios-call' : 'ios-call-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={"gray"} />;
            },
            //tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
  
          })}
  
      >
            <Tab.Screen name="หน้าแรก" component={Tablogin} options={{ headerShown: false }}/>
            <Tab.Screen name="เกี่ยวกับเรา" component={TabB} options={{ headerShown: false }}/>
            <Tab.Screen name="บริการของเรา" component={TabC} options={{ headerShown: false }}/>
            <Tab.Screen name="ติดต่อเรา" component={TabD} options={{ headerShown: false }}/>
      </Tab.Navigator>
  );
  }
  function aboutsceen() {
    return (
        <Tab.Navigator
        
            screenOptions={({ route }) => ({
              tabBarActiveTintColor: 'gray',
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'หน้าแรก') {
                  iconName = focused ? 'md-home' : 'md-home-outline';
                } else if (route.name === 'เกี่ยวกับเรา') {
                  iconName = focused ? 'newspaper' : 'newspaper-outline';
                } else if (route.name === 'บริการของเรา') {
                  iconName = focused ? 'apps' : 'apps-outline';
                } else if (route.name === 'ติดต่อเรา') {
                  iconName = focused ? 'ios-call' : 'ios-call-outline';
                }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={"gray"} />;
              },
              //tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
    
            })}
    
        >
              <Tab.Screen name="หน้าแรก" component={TabA} options={{ headerShown: false }}/>
              <Tab.Screen name="เกี่ยวกับเรา" component={TabB} options={{ headerShown: false }}/>
              <Tab.Screen name="บริการของเรา" component={TabC} options={{ headerShown: false }}/>
              <Tab.Screen name="ติดต่อเรา" component={TabD} options={{ headerShown: false }}/>
        </Tab.Navigator>
    );
    }
    function servicesceen() {
      return (
          <Tab.Navigator
          
              screenOptions={({ route }) => ({
                tabBarActiveTintColor: 'gray',
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'หน้าแรก') {
                    iconName = focused ? 'md-home' : 'md-home-outline';
                  } else if (route.name === 'เกี่ยวกับเรา') {
                    iconName = focused ? 'newspaper' : 'newspaper-outline';
                  } else if (route.name === 'บริการของเรา') {
                    iconName = focused ? 'apps' : 'apps-outline';
                  } else if (route.name === 'ติดต่อเรา') {
                    iconName = focused ? 'ios-call' : 'ios-call-outline';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={"gray"} />;
                },
                //tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
      
              })}
      
          >
                <Tab.Screen name="หน้าแรก" component={TabA} options={{ headerShown: false }}/>
                <Tab.Screen name="เกี่ยวกับเรา" component={TabB} options={{ headerShown: false }}/>
                <Tab.Screen name="บริการของเรา" component={TabC} options={{ headerShown: false }}/>
                <Tab.Screen name="ติดต่อเรา" component={TabD} options={{ headerShown: false }}/>
          </Tab.Navigator>
      );
      }
      function contectsceen() {
        return (
            <Tab.Navigator
            
                screenOptions={({ route }) => ({
                  tabBarActiveTintColor: 'gray',
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                    if (route.name === 'หน้าแรก') {
                      iconName = focused ? 'md-home' : 'md-home-outline';
                    } else if (route.name === 'เกี่ยวกับเรา') {
                      iconName = focused ? 'newspaper' : 'newspaper-outline';
                    } else if (route.name === 'บริการของเรา') {
                      iconName = focused ? 'apps' : 'apps-outline';
                    } else if (route.name === 'ติดต่อเรา') {
                      iconName = focused ? 'ios-call' : 'ios-call-outline';
                    }
        
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={"gray"} />;
                  },
                  //tabBarActiveTintColor: 'tomato',
                  tabBarInactiveTintColor: 'gray',
        
                })}
        
            >
                  <Tab.Screen name="หน้าแรก" component={TabA} options={{ headerShown: false }}/>
                  <Tab.Screen name="เกี่ยวกับเรา" component={TabB} options={{ headerShown: false }}/>
                  <Tab.Screen name="บริการของเรา" component={TabC} options={{ headerShown: false }}/>
                  <Tab.Screen name="ติดต่อเรา" component={TabD} options={{ headerShown: false }}/>
            </Tab.Navigator>
        );
        }

function TabA({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        Lahwin 63309010068
      </Text>
    </View>
  );
}


function TabB({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
      Welcome To About
      </Text>
    </View>
  );
}

function TabC({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
      Welcome To Service
      </Text>
    </View>
  );
}

function TabD({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        Welcome To Contact
      </Text>
    </View>
  );
}

const createTwoButtonAlert = () =>
    Alert.alert(
      "ยืนยันลงทะเบียน",
      "Your User",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
        <Tab.Navigator
        
            screenOptions={({ route }) => ({
              tabBarActiveTintColor: 'gray',
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'หน้าแรก') {
                  iconName = focused ? 'md-home' : 'md-home-outline';
                } else if (route.name === 'เกี่ยวกับเรา') {
                  iconName = focused ? 'newspaper' : 'newspaper-outline';
                } else if (route.name === 'บริการของเรา') {
                  iconName = focused ? 'apps' : 'apps-outline';
                } else if (route.name === 'ติดต่อเรา') {
                  iconName = focused ? 'ios-call' : 'ios-call-outline';
                }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={"gray"} />;
              },
              //tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
    
            })}
    
        >
              <Tab.Screen name="หน้าแรก" component={TabA} options={{ headerShown: false }}/>
              <Tab.Screen name="เกี่ยวกับเรา" component={TabB} options={{ headerShown: false }}/>
              <Tab.Screen name="บริการของเรา" component={TabC} options={{ headerShown: false }}/>
              <Tab.Screen name="ติดต่อเรา" component={TabD} options={{ headerShown: false }}/>
        </Tab.Navigator>

//หน้าlogin พร้อม tab
function loginScreen() {
  return (
      <Tab.Navigator
      
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: 'gray',
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'หน้าแรก') {
                iconName = focused ? 'md-home' : 'md-home-outline';
              } else if (route.name === 'เกี่ยวกับเรา') {
                iconName = focused ? 'newspaper' : 'newspaper-outline';
              } else if (route.name === 'บริการของเรา') {
                iconName = focused ? 'apps' : 'apps-outline';
              } else if (route.name === 'ติดต่อเรา') {
                iconName = focused ? 'ios-call' : 'ios-call-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={"gray"} />;
            },
            //tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
  
          })}
  
      >
            <Tab.Screen name="หน้าแรก" component={Tablogin} options={{ headerShown: false }}/>
            <Tab.Screen name="เกี่ยวกับเรา" component={TabB} options={{ headerShown: false }}/>
            <Tab.Screen name="บริการของเรา" component={TabC} options={{ headerShown: false }}/>
            <Tab.Screen name="ติดต่อเรา" component={TabD} options={{ headerShown: false }}/>
      </Tab.Navigator>
  );
  }

//หน้า tab Login
function Tablogin({navigation}) {
  return (
    
    <View style={{flexDirection: "column", flex: 1, padding: 20, justifyContent: 'center',  alignItems: 'center' }}>
     <View style={{ flex: 10, backgroundColor: "white",alignItems: 'center',justifyContent: 'center' }}></View> 
      <Text>
      ล็อกอินเพื่อเข้าสู่ระบบ
      </Text>
      <Text>    </Text>
      <Text>    </Text>
      <Text style={{color: "#000000"}}>อีเมลล์</Text>
      <TextInput style = {styles.TextInput}></TextInput>
      <Text >    </Text>
      <Text style={{color: "#000000"}}>รหัสผ่าน</Text>
      <TextInput style = {styles.TextInput}></TextInput>
      <Text>    </Text>
      
      <View style={[styles.container, {
      // Try setting flexDirection to "row".
      flexDirection: "row",
      flex: 3,
    }]}>
      <View style={{ flex: 6 ,  alignItems: 'flex-end' ,justifyContent: 'center'}}>
      <Button
    title = "register"
    style = {styles.Btn}
    onPress = {registerScreen}
    />
      </View>
      <View style={{ flex: 1,alignItems: 'center' ,justifyContent: 'center'}}>
      <Text style={[styles.TextWhite]}>|</Text>
      </View>
      <View style={{ flex: 6,  alignItems: 'flex-start' ,justifyContent: 'center'}}>
      <Button
    title = "forget Password"
    style = {styles.Btn}
    onPress = { createTwoButtonAlert}
    />
      </View>
      </View>
      <Text>    </Text>
      <Button
    title = "login"
    style = {styles.Btn}
    onPress = { createTwoButtonAlert}
    />
      <Text>    </Text>
      <Text>    </Text>
      <Text>    </Text>
      <Text>    </Text>
      <Text>    </Text>
      <Text>    </Text>
      <Text>    </Text>

    </View>
    
  );
}

//หน้าต่างพร้อม tab
function registerScreen() {
  return (
      <Tab.Navigator
      
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: 'gray',
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'หน้าแรก') {
                iconName = focused ? 'md-home' : 'md-home-outline';
              } else if (route.name === 'เกี่ยวกับเรา') {
                iconName = focused ? 'newspaper' : 'newspaper-outline';
              } else if (route.name === 'บริการของเรา') {
                iconName = focused ? 'apps' : 'apps-outline';
              } else if (route.name === 'ติดต่อเรา') {
                iconName = focused ? 'ios-call' : 'ios-call-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={"gray"} />;
            },
            //tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
  
          })}
  
      >
            <Tab.Screen name="หน้าแรก" component={Tabregister} options={{ headerShown: false }}/>
            <Tab.Screen name="เกี่ยวกับเรา" component={TabB} options={{ headerShown: false }}/>
            <Tab.Screen name="บริการของเรา" component={TabC} options={{ headerShown: false }}/>
            <Tab.Screen name="ติดต่อเรา" component={TabD} options={{ headerShown: false }}/>
      </Tab.Navigator>
  );
  }


//tabสมัครสมาชิก
function Tabregister({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 
      <Text style={{color: "#000000"}}>ชื่อ</Text>
      <TextInput style = {styles.TextInput}></TextInput>
      <Text >    </Text>
      <Text style={{color: "#000000"}}>อีเมล</Text>
      <TextInput style = {styles.TextInput}></TextInput>
      <Text>    </Text>
      <Text style={{color: "#000000"}}>รหัสผ่าน</Text>
      <TextInput style = {styles.TextInput}></TextInput>
      <Text>    </Text>
      <Text style={{color: "#000000"}}>กรอกรหัสผ่านอีกครั้ง</Text>
      <TextInput style = {styles.TextInput}></TextInput>
      <Text>    </Text>

      <Button 
    title = "Resgister"
    style = {styles.Btn}
    onPress = { TabA}
    /><Text>    </Text>
    <Button
    title = "Cancel"
    style = {styles.btnCancle}
    onPress = { TabA}
    />
    </View>
  );
}




export default function App() {
return(

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home Page" component={HomeScreen}  />
        <Drawer.Screen name="เกี่ยวกับเรา" component={aboutsceen}  />
        <Drawer.Screen name="บริการของเรา" component={servicesceen}  />
        <Drawer.Screen name="ติดต่อเรา" component={contectsceen}  />
        <Drawer.Screen name="เข้าสู่ระบบ" component={loginScreen}  />
        <Drawer.Screen name="สมัครสมาชิก" component={registerScreen}  />
      </Drawer.Navigator>
    </NavigationContainer>

  /*
    <NavigationContainer>
    <HomeScreen />
  </NavigationContainer>
  */
);
}
//Style
const styles = StyleSheet.create(
  {
  Container:{
    backgroundColor: '#000033',
    flex:1,
    justifyContent: 'center',
    alignItems : 'center',
   },
   TextInput:{
     backgroundColor: '#FFF',
     width : 200,
     borderRadius : 0,
     padding : 2,
   },
   Btn:{
    backgroundColor: "blue" ,
    borderRadius:50,
    width:50,
  },
  btnCancle:{
    backgroundColor: "red" ,
    borderRadius:50,
    width:50,
  }
  }
);