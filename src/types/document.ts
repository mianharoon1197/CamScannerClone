import { ImageSourcePropType } from "react-native";

export type Doc = {
  id: string;
  title: string;
  date: string;
  pages: number;
  thumbnail?: ImageSourcePropType;
};
