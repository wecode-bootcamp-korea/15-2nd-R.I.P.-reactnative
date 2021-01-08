import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import CommentsModalHeader from "./CommentsModalHeader";
import InputingComments from "./InputingComment";
import Comments from "./Comments";

function FeedCommentsModal({ navigation, route }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(
      `http://13.209.17.252:8000/board/feed/comment/${route.params.reviewId}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (comments.length !== res.FEED_COMMENT_LIST.length) {
          setComments(res.FEED_COMMENT_LIST);
        }
      });
  }, [comments]);

  // const fetchCommentsData = () => {
  //   fetch(
  //     `http://13.209.17.252:8000/board/feed/comment/${route.params.reviewId}`
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (comments.length !== res.FEED_COMMENT_LIST.length) {
  //         setComments(res.FEED_COMMENT_LIST);
  //       }
  //     });
  // };

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
