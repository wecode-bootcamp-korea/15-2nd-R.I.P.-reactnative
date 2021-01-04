import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import styled from "styled-components/native";
import SlidedImages from "./SlidedImages";
import TitleAndPrice from "./TitieAndPrice";
import BookedAndGrade from "./BookedAndGrade";
import HostInfo from "./HostInfo";
import Review from "./Review";
import MainContent from "./MainContent";

const FAKE_PRODUCTDETAILS = require("../../data/ProductDetail.json");

function Detail({ navigation, route }) {
  const [detailInfo, setDetailInfo] = useState(null);

  const {
    is_delivery_available,
    expiration_date,
    number_of_booked,
    host_profile_imgUrl,
    total_number_of_likes,
    user_profile_imgUrl,
    username,
    user_grade,
    written_date,
    bulletin_content,
    review_images,
    context_text,
  } = FAKE_PRODUCTDETAILS.product_detail[0];

  useEffect(() => {
    fetch(`http://13.209.17.252:8000/product/${route.params.item}`)
      .then((res) => res.json())
      .then((res) => {
        setDetailInfo(res.product_detail);
      });
  }, []);

  return (
    detailInfo && (
      <View style={styles.flex}>
        <ScrollView>
          <SlidedImages
            productImages={detailInfo.image_urls}
            navigation={navigation}
          />
          <ContentContainer style={styles.backgroundColorWhite}>
            <TitleAndPrice
              isDeliveryAvailable={is_delivery_available}
              category={detailInfo.subtitle}
              productName={detailInfo.title}
              price={detailInfo.price}
              discountRate={detailInfo.discount_percentage}
              expirationDate={expiration_date}
            />
            <BookedAndGrade
              numberOfBooked={number_of_booked}
              fripGrade={detailInfo.star_rating}
            />
            <HostInfo
              hostName={detailInfo.host.host_name}
              hostProfileImgUrl={host_profile_imgUrl}
              numberOfPosting={detailInfo.host.frip_count}
              totalNumberOfLikes={total_number_of_likes}
            />
            <Review
              userProfileImgUrl={user_profile_imgUrl}
              username={username}
              userGrade={user_grade}
              writtenDate={written_date}
              bulletinContent={bulletin_content}
              reviewImages={review_images}
            />
            <MainContent
              contextImgs={detailInfo.image_urls}
              contextText={context_text}
            />
          </ContentContainer>
        </ScrollView>
        <ButtonContainer>
          <JoinButton>
            <Text style={styles.button}>참여하기</Text>
          </JoinButton>
        </ButtonContainer>
      </View>
    )
  );
}

export default Detail;
const styles = StyleSheet.create({
  flex: { flex: 1 },
  backgroundColorWhite: { backgroundColor: "white" },
  button: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 13,
  },
});

const ContentContainer = styled.View`
  padding: 20px;
`;

const ButtonContainer = styled.View`
  background-color: white;
  height: 92px;
  padding: 20px 10px;
`;

const JoinButton = styled.Pressable`
  width: 100%;
  height: 50px;
  background-color: #0075ef;
  border-radius: 5;
`;

const ContainerForRelative = styled.View`
  position: relative;
`;
