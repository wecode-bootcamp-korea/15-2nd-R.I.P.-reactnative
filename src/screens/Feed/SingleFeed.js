import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import FeedHeader from "./FeedHeader";
import FeedImgText from "./FeedImgText";
import HeartAndComments from "./HeartAndComments";

export default (props) => {
  const {
    id,
    product_id,
    nickname,
    created_at,
    feed_image,
    contents,
    product_name,
    feed_like_count,
    feed_comment_list,
  } = props.feedInfos;
  const [isReportModalActive, setIsReportModalActive] = useState(false);

  return (
    <View style={styles.wholeContainer}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isReportModalActive}
        onRequestClose={() => {
          setIsReportModalActive(false);
        }}
      >
        <View style={styles.firstBottomView}></View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isReportModalActive}
        onRequestClose={() => {
          setIsReportModalActive(false);
        }}
      >
        <Pressable
          onPress={() => {
            setIsReportModalActive(false);
          }}
          style={{ flex: 1 }}
        >
          <TouchableWithoutFeedback>
            <NotifyModalView>
              <View>
                <IoniconsContainer>
                  <AntDesign name="minus" size={48} color="#D2D2D2" />
                </IoniconsContainer>
                <StyledTouchableOpacity
                  onPress={() => {
                    setIsReportModalActive(false);
                  }}
                >
                  <Text style={styles.reportText}>신고하기</Text>
                </StyledTouchableOpacity>
              </View>
            </NotifyModalView>
          </TouchableWithoutFeedback>
        </Pressable>
      </Modal>

      <FeedHeader
        style={styles.Header}
        userPhotoUrl={
          "https://images.unsplash.com/photo-1584137210279-539d7c40dddf?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
        username={nickname}
        pastTime={created_at}
        setIsReportModalActive={setIsReportModalActive}
      />
      <FeedImgText
        id={product_id}
        style={styles.ImgText}
        feedPhotoUrl={feed_image[0].url}
        reviewContent={contents}
        className={product_name}
        navigation={props.navigation}
      />

      <HeartAndComments
        reviewId={id}
        amountOfHearts={feed_like_count}
        amountOfComments={feed_comment_list}
        navigation={props.navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wholeContainer: {
    flex: 1,
    padding: 18,
    position: "relative",
  },
  firstBottomView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
  },

  reportText: { fontSize: 20 },
});

const NotifyModalView = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
  padding: 10px;
  border-top-left-radius: 20;
  border-top-right-radius: 20;
  background-color: white;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  height: 46px;
  padding-top: 11px;
  padding-left: 10px;
`;

const IoniconsContainer = styled.View`
  margin: 0 auto;
`;
