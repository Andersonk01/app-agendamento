import {
  StyleSheet,
  Text,
  FlatList,
  Image,
  View,
  ListRenderItemInfo,
} from "react-native";
import React from "react";
import { FeedContainer } from "./styled";
import { CardFeed, CardFeedProps } from "./components/Card";
import { FeedData } from "./image/Data";
import { BannerFeed } from "./components/Banner";

// const NextPage = () => {
//   // const [image, setImage] = useState(null);
//   // setImage(getSelectedImageUri());
//   const [image, setImage] = useState<string | null>(null);
//   const imageUri = getSelectedImageUri();

//   useEffect(() => {
//     setImage(imageUri);
//   }, [imageUri]);

//   // Verifica se há uma URI válida antes de renderizar a imagem
//   if (!imageUri) {
//     return <Text>Nenhuma imagem selecionada.</Text>;
//   }

//   return (
//     <Image source={{ uri: image ?? "" }} style={{ width: 300, height: 300 }} />
//   );
// };

const ItemSeparator = () => <View style={styles.itemSeparator} />;

export const FeedPage = () => {
  function renderItem({ item }: ListRenderItemInfo<CardFeedProps>) {
    return (
      <>
        <CardFeed {...item} src={item.src} />
        {/* <Image source={item.src} /> */}
      </>
    );
  }

  return (
    <FeedContainer>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        ListHeaderComponent={BannerFeed}
        data={FeedData}
        numColumns={2}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        // contentContainerStyle={styles.contentContainer}
      />
    </FeedContainer>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    padding: 10,
  },

  itemSeparator: {
    height: 5,
    backgroundColor: "transparent",
  },
});
