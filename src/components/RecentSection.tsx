import { colors, fontSize, spacing } from "@/constants/theme";
import { Doc } from "@/types/document";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DocumentItem from "./DocumentItem";
import RecentActionButtons from "./RecentActionButtons";

type Props = {
  docs: Doc[];
  initialExpandedId?: string | null;
  onViewAll?: () => void;
};

export default function RecentsSection({
  docs,
  initialExpandedId = null,
  onViewAll,
}: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(
    initialExpandedId,
  );
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recents</Text>
        <TouchableOpacity
          style={styles.viewAll}
          hitSlop={10}
          onPress={onViewAll}
        >
          <Text style={styles.viewAllText}>View All</Text>
          <Ionicons
            name="chevron-forward"
            size={14}
            color={colors.textSecondary}
          />
        </TouchableOpacity>
      </View>

      {docs.map((doc) => (
        <View key={doc.id}>
          <DocumentItem
            doc={doc}
            checked={!!checked[doc.id]}
            onPress={() => setExpandedId(expandedId === doc.id ? null : doc.id)}
            onToggleCheck={() =>
              setChecked((c) => ({ ...c, [doc.id]: !c[doc.id] }))
            }
          />
          {expandedId === doc.id && <RecentActionButtons />}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },
  title: {
    color: colors.textPrimary,
    fontSize: fontSize.section,
    fontWeight: "600",
  },
  viewAll: { flexDirection: "row", alignItems: "center" },
  viewAllText: {
    color: colors.textSecondary,
    fontSize: fontSize.body,
    marginRight: 2,
  },
});
