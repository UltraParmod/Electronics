import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CategoryTab from './components/CategoryTab';
import Product from './components/Product';
import Config from '../../Constants/config';
import Endpoints from '../../Constants/EndPoints';
import axios, {isCancel, AxiosError} from 'axios';

const Home = () => {
  const [categories, setCategories] = useState({});
  const [loader, setloader] = useState('false');
  const [selectedTab, changeSelectedTab] = useState({
    id: 0,
    title: 'All',
    value: 'all',
  });
  const _Category = async () => {
    setloader(true);
    try {
      const Url = await axios.get(
        'https://fakestoreapi.com/products/categories',
      );
      const Request = Url.data;
      const myArray = [selectedTab];
      Request.map((item, index) => {
        obj = {
          id: index + 1,
          title: item,
          value: item,
        };
        myArray.push(obj);
      });

      setCategories(myArray);
      setloader(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    _Category();
  }, []);

  // ############### Products Call ###############
  const [products, setProducts] = useState({});

  const _getProducts = async () => {
    try {
      const ProductsUrl = await axios.get('https://fakestoreapi.com/products');
      let ProductsResult = ProductsUrl.data;
      setProducts(ProductsResult);
    } catch (error) {
      console.log(error, 'APi Error');
    }
    setloader(false);
  };
  useEffect(() => {
    if (selectedTab.value !== 'all') {
      tabmatch();
    } else {
      _getProducts();
    }
  }, [selectedTab.value]);

  const tabmatch = async () => {
    setloader(true);
    try {
      const tabmatchUrl = await axios.get(
        Config.BaseUrl + Endpoints.productByCategory + selectedTab.value,
      );
      let tabResult = tabmatchUrl.data;
      setProducts(tabResult);
    } catch (error) {
      console.log(error, 'Error Tabmatch');
    }
    setloader(false);
  };
  return (
    <View>
      <CategoryTab
        categories={categories}
        selectedTab={selectedTab}
        changeSelectedTab={changeSelectedTab}
      />
      <Product products={products} />

      {loader && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="red" />
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    opacity: 0.6,
  },
});
