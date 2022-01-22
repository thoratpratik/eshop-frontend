import React, { PureComponent } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Dimensions,Image,Button } from 'react-native';

var { width } = Dimensions.get("window"); 

const ProductCard = (props) => {
    const { name,price,image,countInStock } = props;

    return(
        <View >
            <Image/>
            <View/>
        </View>
    )

} 


export default ProductCard; 