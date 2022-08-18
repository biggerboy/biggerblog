import {defineUserConfig} from "vuepress";
import {searchPlugin} from "@vuepress/plugin-search";
import {photoSwipePlugin} from "vuepress-plugin-photo-swipe";
import theme from "./theme";

export default defineUserConfig({
    lang: "zh-CN",
    title: "biggerboy",
    description: "北哥的技术博客",

    // base: "/",
    //打包时放开这个
    base: "/biggerblog/",

    theme,
    plugins: [
        searchPlugin({
            // 你的选项
        }),
        photoSwipePlugin ({
            // photoSwipe: true,
        })
    ],
});
