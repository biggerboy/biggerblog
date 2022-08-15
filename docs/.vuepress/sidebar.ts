import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
  "/home",
  {
    text: "文章",
    icon: "note",
    prefix: "/posts/",
    children: [
      {
        text: "Java",
        icon: "note",
        collapsable: true,
        prefix: "java/",
        children: [
		{
		    text: "java基础",
		    icon: "note",
		    collapsable: true,
		    prefix: "java-base/",
		    children: [],
		},
		{
		    text: "JVM",
		    icon: "note",
		    collapsable: true,
		    prefix: "JVM/",
		    children: ["gc"],
		},
	],
      },
      {
        text: "分布式",
        icon: "note",
        collapsable: true,
        prefix: "distribute/",
        children: ["Compensation-Mechanism"],
      },
    ],
  },
]);
