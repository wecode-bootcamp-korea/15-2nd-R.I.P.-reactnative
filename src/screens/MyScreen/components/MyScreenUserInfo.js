import React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  Pressable,
  Image,
  TouchableHighlight,
  Modal,
} from "react-native";
import { useState } from "react";

const MyScreenUserInfo = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const Logout = () => {
    AsyncStorage.clear();
    navigation.navigate("SignUp");
  };

  return (
    <>
      <UserInfoView>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <CenteredView>
            <ModalView>
              <ModalAlertView>
                <ModalText>로그아웃하시겠습니까?</ModalText>
              </ModalAlertView>
              <ModalTextView>
                <SubmitBtn
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    Logout();
                  }}
                >
                  <SubmitText>네</SubmitText>
                </SubmitBtn>
                <CancelBtn
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <CancelText>아니요</CancelText>
                </CancelBtn>
              </ModalTextView>
            </ModalView>
          </CenteredView>
        </Modal>
        <UserInfo>
          <UserNickName>powerStrong</UserNickName>
          <LogoutBtn
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <MaterialCommunityIcons
              name="logout-variant"
              size={21}
              color="black"
            />
            <Text>&nbsp;로그아웃</Text>
          </LogoutBtn>
        </UserInfo>
        <UserImgView>
          <UserImg
            source={{
              uri:
                "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            }}
          />
        </UserImgView>
      </UserInfoView>
    </>
  );
};

export default MyScreenUserInfo;

const UserInfoView = styled.View`
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

// 모달관련

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  background-color: rgba(0, 0, 0, 0.6);
`;
const ModalView = styled.View`
  width: 250px;
  height: 200px;
  margin: 20px;
  background-color: white;
  border-radius: 20;
  align-items: center;
  justify-content: center;
`;
const ModalText = styled.Text`
  text-align: center;
  font-size: 20px;
`;

const ModalAlertView = styled.View`
  width: 200px;
  height: 60px;
  justify-content: center;
  border-bottom-color: #0d7dd0;
  border-bottom-width: 1px;
`;

const ModalTextView = styled.View`
  flex-direction: row;
  width: 200px;
  height: 60px;
  align-items: center;
`;

const SubmitBtn = styled.Pressable`
  width: 100px;
  height: 50px;
  justify-content: center;
`;
const SubmitText = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`;
const CancelBtn = styled.Pressable`
  width: 100px;
  height: 50px;
  justify-content: center;
  border-left-color: #0d7dd0;
  border-left-width: 1px;
`;
const CancelText = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`;

const UserInfo = styled.View`
  flex-direction: row;
`;
const UserNickName = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
`;
const LogoutBtn = styled.Pressable`
  width: 90px;
  height: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20;
  border: 1px solid black;
`;
const UserImgView = styled.View`
  width: 60px;
  height: 60px;
`;
const UserImg = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50;
`;
