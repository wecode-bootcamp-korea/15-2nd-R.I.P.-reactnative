import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import CommentsModalHeader from "./CommentsModalHeader";
import InputingComments from "./InputingComment";
import Comments from "./Comments";

function FeedCommentsModal({ navigation, route }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`http://10.168.2.91:8000/board/feed/comment/${route.params.reviewId}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.FEED_COMMENT_LIST !== comments) {
          setComments(res.FEED_COMMENT_LIST);
        }
        return;
      });
  }, [comments]);

  return (
    <View style={styles.wholeContainer}>
      <CommentsModalHeader navigation={navigation} />
      <Comments comments={comments} setComments={setComments} />
      <InputingComments
        params={route.params.reviewId}
        comments={comments}
        setComments={setComments}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wholeContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
});

export default FeedCommentsModal;
