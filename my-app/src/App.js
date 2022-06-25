import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Pressable,
  Linking,
} from "react-native";

const gitHub = "#010409";
const colorFontGit = "#C9D1D9";
const colorDarkFontGit = "#4F565E";
const imgProfile = "https://avatars.githubusercontent.com/u/89056548?v=4";
const linkProfile = "https://github.com/ThieresCA";

export default function App() {
  const handlePress = async () => {
    const res = await Linking.canOpenURL(linkProfile);
    if (res) {
      Linking.openURL(linkProfile);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle="light-content" backgroundColor={gitHub} />
      <View style={style.content}>
        <Image
          accessibilityLabel="Thieres em um fundo de folhas com uma camisa braca"
          style={style.avatar}
          source={{ uri: imgProfile }}
        />
        <Text
          accessibilityLabel="Nome: Thieres Caetano"
          style={[style.defaultText, style.name]}
        >
          Thieres Caetano
        </Text>
        <Text
          accessibilityLabel="Nickname: ThieresCA"
          style={[style.defaultText, style.nickname]}
        >
          ThieresCA
        </Text>
        <Text
          accessibilityLabel="Descrição: Estudante de Análise e desenvolvimento de sistemas"
          style={[style.defaultText, style.description]}
        >
          Estudante de Análise e desenvolvimento de sistemas
        </Text>
        <Pressable onPress={handlePress}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    //Column
    backgroundColor: gitHub,
    flex: 1,
    justifyContent: "center",
  },

  content: {
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderColor: "white",
    overflow: "hidden",
    borderWidth: 2,
  },

  defaultText: {
    color: colorFontGit,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGit,
  },
  description: {
    fontSize: 14,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: colorDarkFontGit,
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
