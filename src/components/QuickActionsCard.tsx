import { colors, fontSize, radius, spacing } from "@/constants/theme";
import { QuickAction } from "@/data/documents";
import { MaterialCommunityIcons as MCI } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  actions: QuickAction[];
  onActionPress?: (action: QuickAction) => void;
};

export default function QuickActionCard({ actions, onActionPress }: Props) {
  return (
    <View style={styles.container}>
      {actions.map((action) => (
        <TouchableOpacity
          key={action.label}
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => onActionPress?.(action)}
        >
          <MCI name={action.icon} size={30} color={action.color} />
          <Text style={styles.label}>{action.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
  },
  card: {
    flex: 1,
    height: 108,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: colors.textPrimary,
    fontSize: fontSize.caption,
    marginTop: 14,
  },
});
