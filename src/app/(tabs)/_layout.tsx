import { colors, fontSize, radius, sizes } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type IconName = React.ComponentProps<typeof Ionicons>["name"];

const tabIcon =
  (name: IconName) =>
  ({ focused, size }: { focused: boolean; size: number }) => (
    <Ionicons
      name={name}
      size={size}
      color={focused ? colors.primary : colors.textPrimary}
    />
  );

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  // Gap between the floating bar and the bottom of the screen,
  const barBottom = insets.bottom;
  // Keep the FAB's center at the same height regardless of its size
  const fabBottom = barBottom + 62 - sizes.fab / 2;
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: true,
          tabBarLabelPosition: "below-icon",

          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textPrimary,
          tabBarActiveBackgroundColor: colors.tabActivePill,
          tabBarLabelStyle: {
            fontSize: fontSize.caption,
            marginTop: -2,
            marginBottom: 2,
          },
          tabBarItemStyle: {
            // borderRadius: 2,
            // marginVertical: 3,
            //marginHorizontal: 2,
          },
          tabBarStyle: {
            position: "absolute",
            left: 38,
            right: 38,
            bottom: barBottom,
            height: sizes.tabBarHeight,
            paddingBottom: 0,
            borderRadius: radius.pill,
            backgroundColor: colors.tabBar,
            borderWidth: 1,
            borderColor: colors.surface,
            elevation: 2,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{ title: "Home", tabBarIcon: tabIcon("home") }}
        />
        <Tabs.Screen
          name="documents"
          options={{
            title: "All Documents",
            tabBarIcon: tabIcon("document-text"),
          }}
        />
        <Tabs.Screen
          name="tools"
          options={{ title: "Tools", tabBarIcon: tabIcon("grid") }}
        />
        <Tabs.Screen
          name="me"
          options={{
            title: "Me",
            tabBarIcon: tabIcon("person"),
            tabBarBadge: "",
            tabBarBadgeStyle: {
              backgroundColor: colors.badge,
              minWidth: 10,
              height: 10,
              borderRadius: 5,
            },
          }}
        />
      </Tabs>

      <TouchableOpacity
        style={[styles.fab, { bottom: fabBottom }]}
        activeOpacity={0.8}
      >
        <Ionicons
          name="camera"
          size={Math.round(sizes.fab * 0.5)}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    left: "50%",
    marginLeft: -sizes.fab / 2,
    width: sizes.fab,
    height: sizes.fab,
    borderRadius: sizes.fab / 2,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
});
