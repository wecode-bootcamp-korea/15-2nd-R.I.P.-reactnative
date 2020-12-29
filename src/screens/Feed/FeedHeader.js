import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

function FeedHeader(props) {
  const { username, userPhotoUrl, pastTime } = props;

  return (
    <View style={styles.feedContainer}>
      <View style={styles.userInfo}>
        <Image
          style={styles.img}
          source={{
            uri: userPhotoUrl,
          }}
        />
        <View>
          <Text>{username}</Text>
          <Text>{pastTime}</Text>
        </View>
      </View>
      <Feather
        style={styles.feather}
        name="more-vertical"
        size={24}
        color="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  feedContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  img: { width: 40, height: 40, borderRadius: 50, marginRight: 10 },
  userInfo: { flexDirection: "row" },
  feather: { marginTop: 8 },
});

export default FeedHeader;
