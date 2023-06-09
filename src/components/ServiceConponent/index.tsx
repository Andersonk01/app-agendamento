import {
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import { Services } from "../../const/Services";

import * as S from "./styled";

export function ServiceComponent() {
  return (
    <FlatList
      style={styles.FlatList}
      data={Services}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <S.BoxService>
          <S.TextService>{item.name}</S.TextService>
          <S.PriceService>R$ {item.price}</S.PriceService>
        </S.BoxService>
      )}
    />
  );
}

const styles = StyleSheet.create({
  FlatList: {
    flex: 1,
    width: "80%",
  },
});
