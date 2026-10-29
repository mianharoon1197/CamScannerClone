import { colors, fontSize, spacing } from "@/constants/theme";
import { Ionicons, MaterialCommunityIcons as MCI } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  placeholder?: string;
  onPress?: () => void;
  onCrownPress?: () => void;
};

export default function SearchBar({
  placeholder = 'Search for tools, like "To Text"',
  onPress,
  onCrownPress,
}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.searchBar}
        onPress={onPress}
      >
        <Ionicons name="search-outline" size={20} color={colors.textPrimary} />
        <Text style={styles.text} numberOfLines={1}>
          {placeholder}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        hitSlop={10}
        style={styles.crownIcon}
        onPress={onCrownPress}
      >
        <MCI name="crown" size={26} color={colors.gold} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderRadius: 22,
    backgroundColor: colors.surface,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },
  text: {
    marginLeft: 8,
    color: colors.textSecondary,
    fontSize: fontSize.body,
    flex: 1,
  },
  crownIcon: { marginLeft: 14, marginRight: 4 },
});
