import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,FlatList,ScrollView, ImageBackground } from 'react-native';
import icon from"./json/icon.json"
//import homelist from"../homelist.json";


const myhome = ({navigation})=>{
  return(
    <View style={{flex: 1,backgroundColor:"#F9D9A6"}}>
      <View style={styles.headerContentStyle}>
        <View style={styles.headerLeft}>
          <Image source={{uri:icon.logo}}
          style={{width:71,height:30}}/>
        </View>
        <View style={styles.headerMiddle}>
        <Text style={styles.titleStyle}>首頁</Text>
      </View>
      <View style={styles.headerRight}>
        <Image source={{uri:icon.change}}
        style={{width:24,height:24}}/>
      </View>
      <View style={styles.headerRight_1}>
        <Image source={{uri:icon.assignment}}
        style={{width:24,height:24}}/>
      </View>
      </View>
    <ScrollView>
      <View style={styles.picture_setting}>
       <ImageBackground source={{uri:"https://github.com/ciel0412/mid/blob/master/img/img_cafe-1.jpg?raw=true"}}
       style={styles.image}>
         <Text style={styles.information}>最新資訊</Text>
         <View style={styles.arrow}>
         <Text style={styles.information_2}>了解更多 ></Text>
         </View>
       </ImageBackground>  
      </View>
      <View style={styles.picture_setting_2}>
        <ImageBackground source={{uri:"https://github.com/ciel0412/mid/blob/master/img/img_cafe-2.jpg?raw=true"}}
          style={styles.image}>
            <Text style={styles.information}>最新資訊</Text>
         <View style={styles.arrow}>
         <Text style={styles.information_2}>了解更多 ></Text>
         </View>
        </ImageBackground>  
      </View>
      <View style={styles.picture_setting_3}>
        <ImageBackground source={{uri:"https://github.com/ciel0412/mid/blob/master/img/img_cafe-3.jpg?raw=true"}}
          style={styles.image}>
            <Text style={styles.information}>最新資訊</Text>
         <View style={styles.arrow}>
         <Text style={styles.information_2}>了解更多 ></Text>
         </View>
        </ImageBackground>  
      </View>
    </ScrollView>
     </View>
  );
 
}
const styles=StyleSheet.create({

  headerContentStyle:{
    height:80,
    backgroundColor:"#40230D",
    justifyContent:"flex-start",
    alignItems:"center",
    flexDirection:"row",
    elevation:2,
    paddingEnd:35,
    
  },
  headerLeft:{
    width:"20%",
    paddingLeft:16,
    paddingTop:10,
  },
  headerMiddle:{
    width:"60%",
    alignItems:"center",
    paddingLeft:25,
  },
  headerRight:{
    width:"20%",
   paddingTop:10,
   paddingLeft:45,

  },
  headerRight_1:{
    width:"20%",
    paddingTop:10,
    paddingRight:5,
  },
  titleStyle:{
    color:"#FFF",
    fontSize:18,
    fontWeight:"bold",
    paddingTop:10,
  },
  picture_setting:{
    height:300,
    //paddingTop:30,
    justifyContent:"flex-start",
  },
  image:{
    height:230,
  },
  arrow:{
paddingLeft:280,
paddingTop:150,
  },
  information:{
    paddingTop:10,
    paddingLeft:10,
    fontSize:18,
    color:"#FFF",
  },
  information_2:{
   
   fontSize:18,
   color:"#FFF", 
  },
  picture_setting_2:{
    height:300,
    paddingTop:0,
    
  },
  picture_setting_3:{
    height:300,
    
  },
});
export default myhome;  

