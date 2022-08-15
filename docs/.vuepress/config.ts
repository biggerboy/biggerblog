import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "biggerboy",
  description: "北哥的技术博客",

  base: "/docs/",

  theme,
});
