import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../colors";
import { TAB_TRAVEL, TAB_WORK } from "../constants";

interface HeaderProP {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  tabSelected: string;
}

export default function Header({ setTab, tabSelected }: HeaderProP) {
  const onTab = (selected: string) => {
    setTab(selected);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onTab(TAB_WORK)}>
        <Text
          style={{
            fontSize: 30,
            color: tabSelected === TAB_WORK ? Colors.white : Colors.grey,
          }}
        >
          Work
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onTab(TAB_TRAVEL)}>
        <Text
          style={{
            fontSize: 30,
            color: tabSelected === TAB_TRAVEL ? Colors.white : Colors.grey,
          }}
        >
          Travel
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 50,
    paddingVertical: 20,
  },
  text: {
    color: Colors.white,
    fontSize: 30,
  },
});
