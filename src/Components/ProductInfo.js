import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Axios} from 'axios';
import {useNavigation} from '@react-navigation/native';

const ProductInfo = props => {
  const navigation = useNavigation();
  const [getproducts, setGetProducts] = useState({productid});
  const {productid} = props.route.params;

  //   const _getProductfun = async () => {
  //     try {
  //       const ProductsUrl = await fetch(
  //         // 'https://fakestoreapi.com/products/' + productid,
  //         `https://fakestoreapi.com/products/${productid}`,
  //       );
  //       const ProductResult = await ProductsUrl.json();
  //       //   console.log(ProductResult);
  //       setGetProducts(ProductResult);
  //     } catch (error) {
  //       console.log('Error', error);
  //     }
  //   };

  //   useEffect(() => {
  //     _getProductfun();
  //   }, []);
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.leftArrow}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../assets/Images/left-arrow.png')}
          style={styles.arrowLeftImg}
        />
      </TouchableOpacity>
      <View>
        <Image source={{uri: productid?.image}} style={styles?.ProductInfo} />
        <Text style={styles.productText}>id : {productid?.id}</Text>
        <Text style={styles.productText}>title : {productid?.title}</Text>
        <Text style={styles.productText}>price : {productid?.price}</Text>
        <Text style={styles.productText}>
          description : {productid.description}
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  ProductInfo: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  productText: {
    color: '#000',
    paddingHorizontal: 10,
  },
  leftArrow: {
    width: 35,
    height: 35,
    margin: 10,
    position: 'absolute',
    zIndex: 9999,
  },
  arrowLeftImg: {
    width: 35,
    height: 35,
    tintColor: 'gray',
  },
});
