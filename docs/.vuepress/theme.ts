import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "北哥",
    url: "https://blog.csdn.net/ibigboy",
  },

  iconAssets: "iconfont",

  logo: "/logo.png",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "Java领域技术分享",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "Java coder",
    intro: "/intro.html",
    medias: {
      Gitee: "https://example.com",
      GitHub: "https://github.com/biggerboy",
      Zhihu: "https://www.zhihu.com/people/wei-he-bu-shi-meng",
    },
  },

  encrypt: {
    config: {
      "/posts/article12.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: false,
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
