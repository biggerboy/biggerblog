import {hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
    hostname: "https://biggerboy.github.io/biggerblog",

    author: {
        name: "北哥",
        url: "https://blog.csdn.net/ibigboy",
    },
    //在这里复制出来css连接https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=3592344
    iconAssets: "//at.alicdn.com/t/c/font_3592344_oidgzjtjkr.css",

    logo: "/logo.png",

    repo: "biggerboy",

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
            Gitee: "https://gitee.com/it-wenbei",
            GitHub: "https://github.com/biggerboy/biggerblog",
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
