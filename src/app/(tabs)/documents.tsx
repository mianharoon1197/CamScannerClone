import DocumentsContainer from "@/components/DocumentsContainer";
import DocumentsTopBar from "@/components/DocumentsTopBar";
import QuickActions from "@/components/QuickActionsCard";
import { colors } from "@/constants/theme";
import { allDocuments, quickActions } from "@/data/documents";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function DocumentsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <DocumentsTopBar />
      <QuickActions actions={quickActions} />
      <DocumentsContainer docs={allDocuments} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    // padding: 8,
    paddingTop: 10,
  },
});
