# sharding-jdbc分库分表实战

## 一、概述

水平分库，水平分表，垂直分库，垂直分表

### 1.1 垂直分库

将数据库按业务进行拆分，把不同的表按业务的不同查分到不同的数据库中。如，商品表和店铺信息表各自保存到product_db数据库和store_db数据库。在微服务中，前期的搭建、设计时就考虑分库的思想，一个服务一个库。

### 1.2 垂直分表

将单表的字段拆分成多个表关联处理。如，商品表有很多很多字段，但是商品详情字段只有在点击商品时才会用到，使用的频率远没有商品名称，商品价格等字段高，而且商品详情是一个存储了很多内容的字段，查询缓慢。所以把这个字段拆出来单独建一个商品详情表。即大表拆成多个小表。

### 1.3 水平分库

**水平分库的概念：** 一个数据库拆成多个完全相同的数据库。

**为什么要水平分库：** 单库的性能瓶颈或单机的内存成为瓶颈。

### 1.4 水平分表

业务量大，单表数据量剧增，导致单表性能降低，此时水平分表，将一个表拆成2个或更多个完全一样的表，然后根据一定的规则对不同的表进行操作。

## 二、实践

### 2.1 前期准备

#### 2.1.1 环境搭建

技术：Spring Boot + Mybatis + Druid + ShardingSphere 

环境：Maven + Windows + MySQL + IDEA

创建Maven工程导入依赖：

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.2.2.RELEASE</version>
    <relativePath/> <!-- lookup parent from repository -->
</parent>
<!--此处省略一部分springboot的基本配置-->
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
    </dependency>
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>

    <!-- sharding jdbc依赖 -->
    <dependency>
        <groupId>org.apache.shardingsphere</groupId>
        <artifactId>sharding-jdbc-spring-boot-starter</artifactId>
        <version>4.0.0-RC1</version>
    </dependency>
    <!--mysql数据库驱动-->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>5.1.47</version>
    </dependency>
    <!--mybatis依赖-->
    <dependency>
        <groupId>org.mybatis.spring.boot</groupId>
        <artifactId>mybatis-spring-boot-starter</artifactId>
        <version>${mybatis.version}</version>
    </dependency>
    <!--数据库连接池-->
    <dependency>
        <groupId>com.alibaba</groupId>
        <artifactId>druid-spring-boot-starter</artifactId>
        <version>1.1.20</version>
    </dependency>
</dependencies>
```

项目结构：



#### 2.1.2 数据库准备

准备数据库db_user1，创建两个表t_user0和t_user1，两个表的字段完全一样。

如下是sql脚本。

```sql
CREATE DATABASE db_user1;
use db_user1;
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_user0
-- ----------------------------
DROP TABLE IF EXISTS `t_user0`;
CREATE TABLE `t_user0`  (
  `id` bigint(20) NOT NULL,
  `name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `sex` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '性别',
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '电话',
  `email` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `create_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_user1
-- ----------------------------
DROP TABLE IF EXISTS `_user1`;
CREATE TABLE `t_user1`  (
  `id` bigint(20) NOT NULL,
  `name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `sex` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '性别',
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '电话',
  `email` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `create_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
SET FOREIGN_KEY_CHECKS = 1;
```

#### 2.1.3 Spring Boot项目配置

resource下新建application.properties文件。注意，这里是springboot项目的配置，不是sharding-jdbc的配置。

```properties
server.port=8080
spring.application.name=sharding-jdbc-demo

server.servlet.context-path=/sharding-jdbc-demo
spring.main.allow-bean-definition-overriding=true
spring.http.encoding.enabled=true
spring.http.encoding.charset=UTF-8
spring.http.encoding.force=true
#配置mybatis转map时字段驼峰命名
mybatis.configuration.map-underscore-to-camel-case=true
```

### 2.2 水平分表实践

```properties
#声明数据源
spring.shardingsphere.datasource.names=ds1
# 数据源基本配置
spring.shardingsphere.datasource.ds1.type=com.alibaba.druid.pool.DruidDataSource
spring.shardingsphere.datasource.ds1.driver-class-name=com.mysql.jdbc.Driver
spring.shardingsphere.datasource.ds1.url=jdbc:mysql://localhost:3306/db_user1?characterEncoding=utf8
spring.shardingsphere.datasource.ds1.username=root
spring.shardingsphere.datasource.ds1.password=18301633640pp,

# 分表策略
# 指定 t_user表的数据分布情况，配置数据节点 ds0.t_user0,ds0.t_user1
spring.shardingsphere.sharding.tables.t_user.actual-data-nodes=ds1.t_user$->{0..1}

# t_user表的分片策略，包括分片键和分片算法
spring.shardingsphere.sharding.tables.t_user.table-strategy.inline.sharding-column=id
spring.shardingsphere.sharding.tables.t_user.table-strategy.inline.algorithm-expression=t_user$->{id % 2}

# 指定 t_user 表的主键生成策略为 SNOWFLAKE（雪花片算法），包括主键列名和生成主键的算法
spring.shardingsphere.sharding.tables.t_user.key-generator.column=id
spring.shardingsphere.sharding.tables.t_user.key-generator.type=SNOWFLAKE
# 打印日志 默认false不打印
spring.shardingsphere.props.sql.show=true
logging.level.root=info
logging.level.org.springframework.web=info
logging.level.com.walking.shardingjdbcdemo=debug
logging.level.druid.sql=debug
```

#### 2.2.1 保存用户

##### 2.2.1.1 实体类

首先创建User实体类，字段名和数据库字段保持一致

```java
@Getter@Setter@ToString
public class User implements Serializable {
    private Long id;
    private String name;
    private String sex;
    private String phone;
    private String email;
    private Date create_time;
}
```

##### 2.2.1.2 DAO层

我们使用mybatis的注解的方式

```java
@Component
public interface UserDAO {
    @Insert("insert into t_user(name,sex,phone,email)values(#{name},#{sex},#{phone},#{email})")
    void saveUser(User user);
}
```

##### 2.2.1.3 测试类

测试包下创建测试类，注入UserDAO，testSaveUser方法测试保存用户。

如下插入10个用户数据

```java
@RunWith(SpringRunner.class)
@SpringBootTest(classes = {ShardingJdbcDemoApplication.class})
class ShardingJdbcDemoApplicationTests {
    @Autowired
    private UserDAO userDAO;

    @Test
    void testSaveUser(){
        for (int i = 0; i <10 ; i++) {
            User user = new User();
            user.setName("walking"+i);
            user.setSex("1");
            user.setPhone("18301633649");
            user.setEmail("11233@163.com");

            userDAO.saveUser(user);
        }
    }
}
```

##### 2,2.1.4 SQL路由日志

运行后控制台输出 ，只贴出来前三条记录的日志。

根据我们的配置id%2为0则插入到t_user0为1则插入到t_user1，及偶数插入到t_user0，奇数插入到t_user1。

可以看到3条依次插入到t_user1、t_user0和t_user1，id依次为413680167685193729，413680169656516608和413680169702653953。和我们配置的规则预期一样。

```bash
298   : ==>  Preparing: insert into t_user(name,sex,phone,email)values(?,?,?,?) 
375   : ==> Parameters: walking0(String), 1(String), 18301633649(String), 11233@163.com(String)
106            : Rule Type: sharding
112            : Logic SQL: insert into t_user(name,sex,phone,email)values(?,?,?,?)
113            : Actual SQL: ds1 ::: insert into t_user1 (name, sex, phone, email, id) VALUES (?, ?, ?, ?, ?) ::: [walking0, 1, 18301633649, 11233@163.com, 413680167685193729]
234   : <==    Updates: 1
248   : ==>  Preparing: insert into t_user(name,sex,phone,email)values(?,?,?,?) 
248   : ==> Parameters: walking1(String), 1(String), 18301633649(String), 11233@163.com(String)
252            : Rule Type: sharding
253            : Logic SQL: insert into t_user(name,sex,phone,email)values(?,?,?,?)
253            : Actual SQL: ds1 ::: insert into t_user0 (name, sex, phone, email, id) VALUES (?, ?, ?, ?, ?) ::: [walking1, 1, 18301633649, 11233@163.com, 413680169656516608]
261   : <==    Updates: 1
262   : ==>  Preparing: insert into t_user(name,sex,phone,email)values(?,?,?,?) 
263   : ==> Parameters: walking2(String), 1(String), 18301633649(String), 11233@163.com(String)
263            : Rule Type: sharding
264            : Logic SQL: insert into t_user(name,sex,phone,email)values(?,?,?,?)
264            : Actual SQL: ds1 ::: insert into t_user1 (name, sex, phone, email, id) VALUES (?, ?, ?, ?, ?) ::: [walking2, 1, 18301633649, 11233@163.com, 413680169702653953]
269   : <==    Updates: 1
```

