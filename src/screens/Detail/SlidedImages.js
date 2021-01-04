import React, { useState } from "react";
import { StyleSheet, Pressable, Share, RefreshControl } from "react-native";
import ImageSlider from "react-native-image-slider";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function SlidedImages({ navigation, productImages }) {
  const [isBookmarkOn, setIsBookmarkOn] = useState(false);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "https://instagram.com",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ImageContainer>
      <ButtonContainer>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons
            style={styles.return}
            name="chevron-back"
            size={28}
            color="white"
          />
        </Pressable>
        <RowContainer>
          <Pressable onPress={onShare}>
            <AntDesign
              style={styles.buttonPaddingTop}
              name="sharealt"
              size={24}
              color="white"
            />
          </Pressable>
          <Pressable
            onPress={() => {
              setIsBookmarkOn(!isBookmarkOn);
            }}
          >
            <Ionicons
              style={styles.buttonMarginLeft}
              name={isBookmarkOn ? "bookmark" : "bookmark-outline"}
              size={26}
              color={isBookmarkOn ? "#FF3F33" : "white"}
            />
          </Pressable>
        </RowContainer>
      </ButtonContainer>
      <ImageSlider
        style={styles.img}
        images={productImages.map((el) => el.image_url)}
      />
    </ImageContainer>
  );
}
export default SlidedImages;

const styles = StyleSheet.create({
  img: { width: "100%", height: "100%" },
  buttonPaddingTop: { paddingTop: 1 },
  buttonMarginLeft: { marginLeft: 16 },
});

const ImageContainer = styled.View`
  position: relative;
  height: 497px;
`;

const ButtonContainer = styled.View`
  position: absolute;
  top: 40px;
  left: 10px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  z-index: 9999;
`;

const RowContainer = styled.View`
  flex-direction: row;
  padding-right: 15px;
`;
