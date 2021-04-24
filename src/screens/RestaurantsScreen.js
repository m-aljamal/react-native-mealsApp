import React from "react";
import { Searchbar } from "react-native-paper";
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
} from "react-native";
import { RestaurantInfo } from "../components/restaurants/RestaurantCard";
import styled from "styled-components";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const resInfo = {
    name: "altaip",
    photos:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    rating: 4,
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar onChangeText={onChangeSearch} value={searchQuery} />
      </View>
      <View style={styles.list}>
        <RestList
          data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
          renderItem={() => <RestaurantInfo restaurant={resInfo} />}
          keyExtractor={(item) => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 20,
  },
  list: {
    padding: 20,
    flex: 1,
  },
});

const RestList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10,
  },
})``;
