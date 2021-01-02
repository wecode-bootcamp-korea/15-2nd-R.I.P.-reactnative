import React, { useState, useEffect } from "react";
import { Text, ScrollView, View, Pressable, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import CommentsModalHeader from "./CommentsModalHeader";
import InputingComments from "./InputingComment";
import Comments from "./Comments";

const FAKECOMMENTS = require("../../data/comments.json");

function FeedCommentsModal(props) {
  const { navigation } = props;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(FAKECOMMENTS.comments);
  }, []);

  return (
    <View style={styles.wholeContainer}>
      <CommentsModalHeader navigation={navigation} />
      <Comments comments={comments} setComments={setComments} />
      <InputingComments comments={comments} setComments={setComments} />
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
