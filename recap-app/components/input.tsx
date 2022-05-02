import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../colors";
import { TAB_WORK } from "../constants";

interface InputProp {
  tabSelected: string;
}

export default function Input({ tabSelected }: InputProp) {
  const [input, setInput] = React.useState("");
  const onSubmit = () => {};

  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        style={styles.input}
        placeholder={
          tabSelected === TAB_WORK
            ? "What do you have to do?"
            : "Where do you want to go?"
        }
        onChangeText={(text) => setInput(text)}
      />
      {/* <Button title="Done"></Button> */}
      <TouchableOpacity>
        <Text style={styles.enterBtn}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
  },
  input: {
    width: "80%",
    backgroundColor: Colors.white,
    fontSize: 20,
    marginLeft: 10,
    padding: 10,
  },
  enterBtn: {
    color: Colors.white,
    fontSize: 22,
    paddingHorizontal: 10,
    textAlignVertical: "center",
  },
});
