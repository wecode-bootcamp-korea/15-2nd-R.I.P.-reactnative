import React, { useState, useEffect } from "react";
import { Text, View, Pressable, StyleSheet, FlatList } from "react-native";
import styled from "styled-components/native";
import Comment from "./Comment";

function Comments(props) {
  const renderItem = ({ item }) => {
    return (
      <Comment
        comments={props.comments}
        setComments={props.setComments}
        id={item.id}
        userImgUrl={item.userImgUrl}
        userName={item.userName}
        comment={item.comment}
        time={item.time}
        isLiked={item.isLiked}
      />
    );
  };

  return (
    <View style={styles.wholeContainer}>
      <FlatList
        data={props.comments}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wholeContainer: { flex: 1, padding: 15 },
});

export default Comments;
