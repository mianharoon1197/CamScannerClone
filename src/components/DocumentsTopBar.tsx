import { colors, fontSize, radius, spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  onBenefitsPress?: () => void;
  onSearchPress?: () => void;
};

export default function DocumentsTopBar({
  onBenefitsPress,
  onSearchPress,
}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.benefitsBtn}
        activeOpacity={0.8}
        onPress={onBenefitsPress}
      >
        <View style={styles.avatar}>
          <Ionicons name="cloud" size={20} color={colors.blueLight} />
        </View>
        <Text style={styles.benefitsBtnText}>Get Benefits</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.searchBar}
        activeOpacity={0.8}
        onPress={onSearchPress}
      >
        <Ionicons
          name="search-outline"
          size={18}
          color={colors.textSecondary}
        />
        <Text style={styles.searchBarText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
  },
  benefitsBtn: { flexDirection: "row", alignItems: "center", flex: 1 },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.avatarBg,
    alignItems: "center",
    justifyContent: "center",
  },
  benefitsBtnText: {
    color: colors.textPrimary,
    fontSize: fontSize.caption,
    marginLeft: spacing.sm,
  },
  searchBar: {
    width: "45%",
    height: 36,
    borderRadius: radius.sm,
    backgroundColor: colors.surface,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
  },
  searchBarText: {
    color: colors.textSecondary,
    fontSize: fontSize.body,
    marginLeft: spacing.sm,
  },
});
