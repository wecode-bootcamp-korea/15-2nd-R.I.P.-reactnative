import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

function marginSetter(a, b, c, d) {
  return { marginTop: a, marginRight: b, marginBottom: c, marginLeft: d };
}

function paddingSetter(a, b, c, d) {
  return { paddingTop: a, paddingRight: b, paddingBottom: c, paddingLeft: d };
}

function HeartAndComments(props) {
  const { amountOfHearts, amountOfComments, navigation } = props;
  return (
    <View style={styles.heartAndComments}>
      <AntDesign name="hearto" size={24} color="black" paddingRight={16} />
      <Text style={styles.text}>{amountOfHearts}</Text>
      <FontAwesome5
        name="comment-alt"
        size={24}
        color="black"
        onPress={() => {
          navigation.navigate("FeedCommentsModal");
        }}
      />
      <Text style={styles.text}>{amountOfComments}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heartAndComments: {
    flexDirection: "row",
    marginTop: 8,
  },
  text: marginSetter(2, 8, 0, 8),
});

export default HeartAndComments;
