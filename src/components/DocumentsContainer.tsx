import { colors, fontSize, spacing } from "@/constants/theme";
import { Doc } from "@/types/document";
import { Ionicons, MaterialCommunityIcons as MCI } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DocumentItem from "./DocumentItem";

type Props = {
  docs: Doc[];
  folderName?: string;
  onFilterPress?: () => void;
  onSortPress?: () => void;
  onViewTogglePress?: () => void;
  onSelectPress?: () => void;
  onFolderPress?: () => void;
  onDocPress?: (doc: Doc) => void;
};

export default function DocumentsPanel({
  docs,
  folderName = "Signed Documents",
  onFilterPress,
  onSortPress,
  onViewTogglePress,
  onSelectPress,
  onFolderPress,
  onDocPress,
}: Props) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.leftSection}
          activeOpacity={0.7}
          onPress={onFilterPress}
        >
          <Text style={styles.all}>All</Text>
          <Text style={styles.count}> ({docs.length})</Text>
          <Ionicons
            name="caret-down"
            size={10}
            color={colors.textPrimary}
            style={{ marginLeft: 6 }}
          />
        </TouchableOpacity>

        <View style={styles.rightSection}>
          <TouchableOpacity hitSlop={8} onPress={onSortPress}>
            <MCI name="sort" size={24} color={colors.textPrimary} />
          </TouchableOpacity>
          <TouchableOpacity hitSlop={8} onPress={onViewTogglePress}>
            <Ionicons
              name="grid-outline"
              size={22}
              color={colors.textPrimary}
            />
          </TouchableOpacity>
          <TouchableOpacity hitSlop={8} onPress={onSelectPress}>
            <MCI
              name="checkbox-marked-outline"
              size={24}
              color={colors.textPrimary}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.folder}
        activeOpacity={0.8}
        onPress={onFolderPress}
      >
        <MCI name="folder-edit" size={38} color={colors.folderGreen} />
        <Text style={styles.folderName}>{folderName}</Text>
      </TouchableOpacity>

      {docs.map((doc) => (
        <DocumentItem
          key={doc.id}
          doc={doc}
          checked={!!checked[doc.id]}
          onPress={() => onDocPress?.(doc)}
          onToggleCheck={() =>
            setChecked((c) => ({ ...c, [doc.id]: !c[doc.id] }))
          }
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    paddingBottom: spacing.sm,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },
  leftSection: { flexDirection: "row", alignItems: "center" },
  all: { color: colors.textPrimary, fontSize: 20, fontWeight: "600" },
  count: { color: colors.textSecondary, fontSize: 16 },
  rightSection: { flexDirection: "row", alignItems: "center", gap: 22 },

  folder: {
    flexDirection: "row",
    alignItems: "center",
    height: 64,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 6,
    backgroundColor: colors.surfaceAlt,
  },
  folderName: {
    color: colors.textPrimary,
    fontSize: fontSize.title,
    fontWeight: "600",
    marginLeft: spacing.md,
  },
});
