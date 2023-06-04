import { View, Text, FlatList, StyleSheet } from "react-native";
import { Designer } from "../../const/Designer";
import * as S from "./styled";

export function DesignerComponent() {
  return (
    <FlatList
      style={styles.FlatList}
      data={Designer}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <S.WrapperDesigner>
          <S.TextDesigner>{item.name}</S.TextDesigner>
        </S.WrapperDesigner>
      )}
    />
  );
}

const styles = StyleSheet.create({
  FlatList: {
    width: "90%",
    flex: 1,
  },
});
