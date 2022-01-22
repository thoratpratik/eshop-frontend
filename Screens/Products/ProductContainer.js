import React, { useState,useEffect } from 'react';
import {View,Text,StyleSheet,ActivityIndicator,FlatList } from 'react-native';
import ProductList from './ProductList';
const data = require('../../assets/data/products.json');

const ProductContainer = ( ) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
      setProduct(data);

      return () => {
        setProduct([])
      }
    }, []);
    
    return(
        <View>
            <View style={{ marginTop:100 }}>
                <FlatList
                    horizontal
                    data = { product }
                    renderItem = { ({item}) => <ProductList key={item.id} item={item}/>}
                    keyExtractor = {item => item.name}
                />
            </View>   
        </View>
    )
}

export default ProductContainer;