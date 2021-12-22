import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../../../constants/colors';

const SearchBar = ({cityHandler}) => {
  return (
    <View style={styles.searchContainer}>
      <GooglePlacesAutocomplete
        query={{key: 'AIzaSyD76jpwAb7XIWhNEoV7htmCaiM7LUyHB4w'}}
        onPress={(data, details = null) => {
          let city = '';
          if (data.description.includes(',')) {
            city = data.description.split(',')[0];
          } else {
            city = data.description;
          }

          cityHandler(city);
        }}
        listUnderlayColor={COLORS.BLACK}
        styles={styles.searchBar}
        placeholder="Search"
        renderLeftButton={() => (
          <View style={styles.searchIcon}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.loadingResults}>
            <AntDesign name="clockcircle" size={11} style={styles.clockIcon} />
            <Text style={styles.searchText}>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;
