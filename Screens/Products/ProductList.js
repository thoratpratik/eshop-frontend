import React, { useState,useEffect } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
import ProductCard from './ProductCard';
var {width} = Dimensions.get("window")

const ProductList = (props) => {
    const { item } = props;
     return(
         <TouchableOpacity style={{width:'50%'}}>
             <View style={{ width : width / 2 , backgroundColor:'gainsboro'}}>
             </View>
         </TouchableOpacity>
     )
}

export default ProductList;