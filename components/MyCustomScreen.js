import React from "react";
import {View, Text} from "react-native"; 
 
const MyCustomScreen = props => (
   <View 
     style={{flex: 1, justifyContent: "center", alignItems: "center"}}
   > 
     <Text>Your best you is waiting inside</Text>
     <Text>
       We'll start by asking you a few questions so we can provide you with simple and personalized self-care practices
     </Text>
   </View>
);
 
export default MyCustomScreen;
