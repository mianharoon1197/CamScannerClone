import { colors, radius, spacing } from "@/constants/theme";
import { MaterialCommunityIcons as MCI } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  onShare?: () => void;
  onToWord?: () => void;
  onView?: () => void;
};

export default function RecentActions({ onShare, onToWord, onView }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.8}
        onPress={onShare}
      >
        <Text style={styles.btnText}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.8}
        onPress={onToWord}
      >
        <MCI
          name="creation"
          size={16}
          color={colors.green}
          style={{ marginRight: 4 }}
        />
        <Text style={styles.btnText}>To Word</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={onView}>
        <Text style={styles.btnText}>View</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.sm,
    gap: spacing.sm,
    marginTop: spacing.sm,
    marginBottom: spacing.sm,
  },
  btn: {
    flex: 1,
    height: 40,
    borderRadius: radius.sm - 4,
    backgroundColor: colors.surfaceAlt,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: { color: colors.textPrimary, fontSize: 15 },
});
