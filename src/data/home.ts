import { colors } from "@/constants/theme";
import { Doc } from "@/types/document";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export type MCIName = React.ComponentProps<
  typeof MaterialCommunityIcons
>["name"];

export type Tool = { label: string; icon: MCIName; color: string };

export const tools: Tool[] = [
  { label: "Smart Scan", icon: "line-scan", color: colors.green },
  { label: "PDF Tools", icon: "file-pdf-box", color: colors.red },
  { label: "Import Images", icon: "image-multiple", color: colors.blue },
  { label: "Import Files", icon: "file-document", color: colors.blue },
  { label: "ID Cards", icon: "card-account-details", color: colors.green },
  { label: "Extract Text", icon: "alpha-t-box", color: colors.green },
  { label: "ID Photo Maker", icon: "account-box", color: colors.blueLight },
  { label: "All", icon: "view-dashboard", color: colors.green },
];

export const recents: Doc[] = [
  {
    id: "1",
    title: "CamScanner 25-10-2026 15.48",
    date: "25/10/2026 15:48",
    pages: 2,
    thumbnail: require("@/assets/images/doc1.jpg"),
  },
  {
    id: "2",
    title: "CamScanner 05-07-2026 17.13",
    date: "16/10/2026 18:13",
    pages: 1,
    thumbnail: require("@/assets/images/doc2.jpg"),
  },
];
