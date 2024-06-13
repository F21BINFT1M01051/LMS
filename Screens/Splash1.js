import React from "react";
import { View,} from "react-native";
import {PrimaryText, SecondaryText, Images, Dot, Buttons, Skip} from "../Components";


const img1 = require("../assets/img1.jpg");

export const Splash1 = (props)=>{
    return(
        <View style={{flex:1, backgroundColor:'white'}}>
            <Skip btnTitle="SKIP" onPress={()=> props.navigation.navigate("Join")} />
            <View>
                   <Images Imgsrc = {img1}  />
            </View>
            <View style = {{marginTop:25}}>
                <PrimaryText  text = {'Welcome To IT Group'} />
                <PrimaryText  text = {'where learning meets Innovation!'} />
                <SecondaryText text = {'Empowering your journey through'} />
                <SecondaryText text = {'cutting edge IT education and'} />
                <SecondaryText text = {'expertise'} />
            </View>
            <View style={{flexDirection:'row', alignSelf:'center', marginTop:30}}>
              <Dot style={{backgroundColor:'black'}} />
              <Dot />
              <Dot />
              <Dot />
            </View>
            <Buttons btnTitle="CONTINUE" onPress={()=> props.navigation.navigate("Splash2")} />
        </View>
    )
}


