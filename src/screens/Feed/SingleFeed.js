import React from "react";
import {
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text,
} from "react-native";
import FeedHeader from "./FeedHeader";
import FeedImgText from "./FeedImgText";
import HeartAndComments from "./HeartAndComments";

export default (props) => {
  const {
    userPhotoUrl,
    username,
    pastTime,
    feedPhotoUrl,
    reviewContent,
    amountOfHearts,
    amountOfComments,
    className,
  } = props.feedInfos;

  return (
    <View style={styles.wholeContainer}>
      <FeedHeader
        style={styles.Header}
        userPhotoUrl={userPhotoUrl}
        username={username}
        pastTime={pastTime}
      />
      <FeedImgText
        style={styles.ImgText}
        feedPhotoUrl={feedPhotoUrl}
        reviewContent={reviewContent}
        className={className}
        navigation={props.navigation}
      />

      <HeartAndComments
        amountOfHearts={amountOfHearts}
        amountOfComments={amountOfComments}
        navigation={props.navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wholeContainer: {
    flex: 1,
    padding: 18,
  },
});
