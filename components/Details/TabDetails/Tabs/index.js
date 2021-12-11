import React, {useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import COLORS from '../../../../constants/colors';
import MenuList from '../MenuList';
import Reviews from '../Reviews';
import Location from '../Location';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'white'}}
    style={{backgroundColor: COLORS.TART_ORANGE, color: COLORS.BLACK}}
  />
);

export default function TabDetails({foods}) {
  const FirstRoute = () => <Reviews />;
  const SecondRoute = () => <Location />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Reviews'},
    {key: 'second', title: 'Location'},
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
