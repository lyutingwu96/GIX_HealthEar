import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import HistoryCard from "../components/HistoryCard";
import Screen from "../components/Screen";
import colors from "../config/colors";
import navigationThemes from "../navigations/navigationThemes";

const historyData = [
  {
    date: "Oct 11th, 2020",
    time: "13:23",
    left: true,
    right: true,
  },
  {
    date: "Oct 10th, 2020",
    time: "19:33",
    left: true,
    right: false,
  },
  {
    date: "Oct 9th, 2020",
    time: "19:25",
    left: true,
    right: false,
  },
  {
    date: "Oct 8th, 2020",
    time: "18:50",
    left: false,
    right: false,
  },
];

function HistoryScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <View style={styles.SVContainer}>
        <FlatList
          data={historyData}
          keyExtractor={(item) => item.time}
          renderItem={({ item }) => (
            <HistoryCard
              history={item}
              onPress={() =>
                navigation.navigate("History Detail", {
                  item,
                })
              }
            />
            // () => alert(item.time)
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  SVContainer: {
    // backgroundColor: "white",
    height: "100%",
    paddingHorizontal: 15,
    // paddingTop: 10,
    position: "absolute",
    width: "100%",
  },
});

export default HistoryScreen;
