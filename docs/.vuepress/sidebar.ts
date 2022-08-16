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
        icon: "java",
        collapsable: true,
        prefix: "java/",
        children: [
          {
            text: "java基础",
            icon: "note",
            collapsable: true,
            prefix: "java-base/",
            children: ["java值传递", "Java中真的是只有值传递么？"],
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
        text: "redis",
        icon: "redis",
        collapsable: true,
        prefix: "redis/",
        children: ["Java操作Redis--Jedis"],
      },
      {
        text: "mysql",
        icon: "mysql",
        collapsable: true,
        prefix: "mysql/",
        children: ["分库分表", "MySQL初始化密码修改", "解决MySQL启动时报错的一些问题"],
      },
      {
        text: "分布式",
        icon: "fenbushi",
        collapsable: true,
        prefix: "distribute/",
        children: ["Compensation-Mechanism"],
      },
      {
        text: "中间件",
        icon: "xinzhongjianjian",
        collapsable: true,
        prefix: "middleware/",
        children: [
          {
            text: "消息队列",
            icon: "MQ",
            collapsable: true,
            prefix: "mq/",
            children: ["why-mq"],
          },
        ],
      },
      {
        text: "持续集成",
        icon: "huowudui",
        collapsable: true,
        prefix: "continuous-integration/",
        children: [
          {
            text: "jenkins",
            icon: "jenkins",
            collapsable: true,
            prefix: "jenkins/",
            children: ["搭建jenkins自动部署"]
          }
        ],
      },
    ],
  },
]);
