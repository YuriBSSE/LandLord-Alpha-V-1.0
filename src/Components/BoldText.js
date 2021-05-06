import React, {useEffect, useState,useRef} from 'react';
import {
    View,Text
 } from 'react-native';

 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 const BoldText = ({Label, color}) => {
    return(   
        <View style={{flexDirection: 'row', justifyContent:"center", margin: 20}}>
               <Text  style={{color: color, fontFamily: 'Poppins-SemiBold',fontSize: hp('1.7%'), textAlign:'center'}}>
                   {Label}
                </Text>
        </View>     
    )
 }
 export default BoldText;
