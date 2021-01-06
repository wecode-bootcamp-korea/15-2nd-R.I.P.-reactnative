import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import styled from "styled-components/native";
import Comment from "./Comment";

function Comments({ comments, setComments }) {
  const renderItem = ({ item }) => {
    return (
      <Comment
        comments={comments}
        setComments={setComments}
        id={item.id}
        userImgUrl={
          "https://images.unsplash.com/photo-1596697612480-e1b6615aec10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        }
        userName={item.author}
        comment={item.contents}
        time={item.created_at}
        isLiked={false}
      />
    );
  };

  return (
    <View style={styles.wholeContainer}>
      <FlatList
        data={comments}
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
