import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  View,
  TextInput,
  ScrollView,
  Alert,
  Platform,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "./colors";

const STORAGE_KEY = "@toDos";
const WORK_OR_TRAVEL = "@tab";

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  useEffect(() => {
    loadToDos();
    loadTab();
  }, []);
  const travel = async () => {
    setWorking(false);
    saveTab(false);
  };
  const work = async () => {
    setWorking(true);
    saveTab(true);
  };
  const onChangeText = (payload) => setText(payload);
  const saveTab = async (isworking) => {
    await AsyncStorage.setItem(WORK_OR_TRAVEL, isworking.toString());
  };
  const loadTab = async () => {
    const isworking = await AsyncStorage.getItem(WORK_OR_TRAVEL);
    setWorking(JSON.parse(isworking));
  };
  const saveToDos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };
  const loadToDos = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    if (s) {
      setToDos(JSON.parse(s));
    }
  };
  const addTodo = async () => {
    if (text === "") {
      return;
    }
    // save to do
    const newToDos = {
      ...toDos,
      [Date.now()]: { text, working, completed: false },
    };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  };
  const completeTodo = async (key) => {
    let newToDos = { ...toDos };
    const newObject = { ...newToDos[key], completed: !newToDos[key].completed };
    newToDos[key] = newObject;
    setToDos(newToDos);
    saveToDos(newToDos);
  };
  const deleteToDo = (key) => {
    if (Platform.OS === "web") {
      const ok = confirm("Do you want to delete this Todo?");
      if (ok) {
        const newToDos = { ...toDos };
        delete newToDos[key];
        setToDos(newToDos);
        saveToDos(newToDos);
      }
    } else {
      Alert.alert("Delete To Do", "Are you sure?", [
        { text: "Cancel" },
        {
          text: "I'm sure",
          style: "destructive",
          onPress: () => {
            const newToDos = { ...toDos };
            delete newToDos[key];
            setToDos(newToDos);
            saveToDos(newToDos);
          },
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{
              fontSize: 38,
              fontWeight: "600",
              color: working ? "white" : theme.grey,
            }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{
              fontSize: 38,
              fontWeight: "600",
              color: !working ? "white" : theme.grey,
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        onSubmitEditing={addTodo}
        onChangeText={onChangeText}
        returnKeyType="done"
        value={text}
        placeholder={working ? "Add a To Do" : "Where do you want to go?"}
        style={styles.input}
      />
      <ScrollView>
        {Object.keys(toDos).map((key) =>
          toDos[key].working === working ? (
            <View style={styles.toDo} key={key}>
              <View style={styles.toDoLeft}>
                <TouchableOpacity
                  style={styles.toDoCheck}
                  onPress={() => completeTodo(key)}
                >
                  {toDos[key].completed === false ? (
                    <MaterialCommunityIcons
                      name="checkbox-blank-outline"
                      size={20}
                      color="white"
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="checkbox-marked"
                      size={20}
                      color={theme.grey}
                    />
                  )}
                </TouchableOpacity>
                <Text
                  style={{
                    ...styles.toDoText,
                    color:
                      toDos[key].completed === false ? "white" : theme.grey,
                    textDecorationLine:
                      toDos[key].completed === false ? "none" : "line-through",
                  }}
                >
                  {toDos[key].text}
                </Text>
              </View>
              <TouchableOpacity onPress={() => deleteToDo(key)}>
                <Fontisto name="trash" size={18} color={theme.grey} />
              </TouchableOpacity>
            </View>
          ) : null
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100,
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  toDoCheck: {
    marginRight: 5,
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
