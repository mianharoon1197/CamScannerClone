import { colors, fontSize, spacing } from "@/constants/theme";
import { Doc } from "@/types/document";
import { Ionicons, MaterialCommunityIcons as MCI } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DocumentThumbnail from "./DocumentThumbnail";

type Props = {
  doc: Doc;
  checked: boolean;
  onPress?: () => void;
  onToggleCheck: () => void;
};

export default function DocumentItem({
  doc,
  checked,
  onPress,
  onToggleCheck,
}: Props) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.row}>
      <DocumentThumbnail source={doc.thumbnail} />

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {doc.title}
        </Text>
        <View style={styles.meta}>
          <Text style={styles.metaText}>{doc.date}</Text>
          <MCI
            name="file-multiple-outline"
            size={14}
            color={colors.textSecondary}
            style={{ marginLeft: 14 }}
          />
          <Text style={[styles.metaText, { marginLeft: 4 }]}>{doc.pages}</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={onToggleCheck}
        hitSlop={10}
        style={[
          styles.checkbox,
          checked && {
            backgroundColor: colors.primary,
            borderColor: colors.primary,
          },
        ]}
      >
        {checked && <Ionicons name="checkmark" size={14} color="#fff" />}
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  info: { flex: 1, marginLeft: spacing.md },
  title: {
    color: colors.textPrimary,
    fontSize: fontSize.title,
    fontWeight: "600",
  },
  meta: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  metaText: { color: colors.textSecondary, fontSize: 13 },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: colors.checkboxBorder,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: spacing.md,
  },
});
