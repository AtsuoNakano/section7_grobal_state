// provider：値を提供する
// グローバルなstate管理にはcontextを使用する

import React, { createContext, useState } from "react";

// 初期化、空のオブジェクト
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState(null);

  return (
    // userInfo, setUserInfoがchildren（グローバル）で参照できる
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
