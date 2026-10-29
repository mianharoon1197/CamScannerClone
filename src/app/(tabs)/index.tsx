import RecentsSection from "@/components/RecentSection";
import SearchBar from "@/components/SearchBar";
import ToolsGrid from "@/components/ToolsGrid";
import { colors, spacing } from "@/constants/theme";
import { recents, tools } from "@/data/home";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <SafeAreaView edges={["top"]} style={styles.header}>
        <SearchBar />
      </SafeAreaView>

      <View style={styles.body}>
        <ToolsGrid tools={tools} />
        <RecentsSection docs={recents} initialExpandedId="1" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    backgroundColor: colors.headerBg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.xl,
  },
  body: { flex: 1 },
});
