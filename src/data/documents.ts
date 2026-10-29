import { colors } from "@/constants/theme";
import { MCIName } from "@/data/home";
import { Doc } from "@/types/document";

export type QuickAction = { label: string; icon: MCIName; color: string };

export const quickActions: QuickAction[] = [
  { label: "Import Files", icon: "file-document", color: colors.blueLight },
  { label: "Import Images", icon: "image-multiple", color: colors.skyBlue },
  { label: "Create Folder", icon: "folder-plus", color: colors.folderGreen },
];

export const allDocuments: Doc[] = [
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
    date: "05/07/2026 17:13",
    pages: 1,
    thumbnail: require("@/assets/images/doc2.jpg"),
  },
];
