import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { Services } from "../../const/Services";

import * as S from "./styled";

// type ServiceComponentProps = {
//   id: number;
//   name: string;
// };

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

    //  {Services.map((item) => (
    //   <View style={styles.BoxServ} key={item.id}>
    //     <Text style={styles.Texto}>{item.name}</Text>
    //     <Text style={styles.Preco}>R$ {item.price}</Text>
    //   </View>
    // ))}
  );
}

const styles = StyleSheet.create({
  FlatList: {
    flex: 1,
    width: "80%",
  },
});

// children?: React.ReactNode;
// onPress?: () => void | undefined;
