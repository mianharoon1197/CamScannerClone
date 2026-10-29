import { colors, fontSize, sizes, spacing } from "@/constants/theme";
import { Tool } from "@/data/home";
import { MaterialCommunityIcons as MCI } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = { tools: Tool[]; onToolPress?: (tool: Tool) => void };

export default function ToolsGrid({ tools, onToolPress }: Props) {
  return (
    <View style={styles.container}>
      {tools.map((tool) => (
        <TouchableOpacity
          key={tool.label}
          activeOpacity={0.7}
          style={styles.item}
          onPress={() => onToolPress?.(tool)}
        >
          <View style={styles.circle}>
            <MCI name={tool.icon} size={28} color={tool.color} />
          </View>
          <Text style={styles.label}>{tool.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: spacing.sm,
    marginTop: spacing.xl,
    marginBottom: spacing.lg,
  },
  item: {
    width: "25%",
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  circle: {
    width: sizes.toolCircle,
    height: sizes.toolCircle,
    borderRadius: sizes.toolCircle / 2,
    backgroundColor: colors.toolCircle,
    borderWidth: 1.5,
    borderColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: colors.textPrimary,
    fontSize: fontSize.caption,
    marginTop: 6,
    textAlign: "center",
    paddingHorizontal: 4,
  },
});
