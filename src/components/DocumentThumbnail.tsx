import { sizes } from "@/constants/theme";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

type Props = { source?: ImageSourcePropType };

export default function DocumentThumbnail({ source }: Props) {
  if (source) {
    return <Image source={source} style={styles.thumb} resizeMode="cover" />;
  }
  // if no img provided
  return (
    <View style={[styles.thumb, styles.placeholder]}>
      {Array.from({ length: 9 }).map((_, i) => (
        <View key={i} style={styles.line} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  thumb: {
    width: sizes.thumbnailW - 12,
    height: sizes.thumbnailH,
    borderRadius: 2,
  },
  placeholder: {
    backgroundColor: "#F2F2F2",
    padding: 5,
    justifyContent: "space-between",
  },
  line: { height: 2, backgroundColor: "#9A9A9A", borderRadius: 1 },
});
