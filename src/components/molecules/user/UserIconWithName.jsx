import React, { memo } from "react";
import styled from "styled-components";
// import { UserContext } from "../../../providers/UserProvider";
// 値だけ（今回だとuserInfo）を参照する
import { userState } from "../../../store/userState";
import { useRecoilValue } from "recoil";

export const UserIconWithName = memo((props) => {
  console.log("UserIconWithName");

  const { image, name } = props;

  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);

  // userInfoが存在していれば左辺、していなければfalse
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImg width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集する</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
