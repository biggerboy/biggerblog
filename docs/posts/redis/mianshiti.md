# Redis面试题
## 1. 什么是Redis？它主要用来什么的？
   Redis，英文全称是Remote Dictionary Server（远程字典服务），是一个开源的使用ANSI C语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。

   与MySQL数据库不同的是，Redis的数据是存在内存中的。它的读写速度非常快，每秒可以处理超过10万次读写操作。因此redis被广泛应用于缓存，另外，Redis也经常用来做分布式锁。除此之外，Redis支持事务、持久化、LUA 脚本、LRU 驱动事件、多种集群方案。
   ## 2.说说Redis的基本数据结构类型
   大多数小伙伴都知道，Redis有以下这五种基本类型：

   String（字符串）

   Hash（哈希）

   List（列表）

   Set（集合）

   zset（有序集合）

   它还有三种特殊的数据结构类型：

   Geospatial

   Hyperloglog

   Bitmap
   ### 2.1 Redis 的五种基本数据类型
<img :src="$withBase('/img/redis-data-type.png')" alt="微信搜索BiggerBoy">

**String（字符串）**

简介:String是Redis最基础的数据结构类型，它是二进制安全的，可以存储图片或者序列化的对象，值最大存储为512M

简单使用举例：set key value、get key等

应用场景：共享session、分布式锁，计数器、限流。

内部编码有3种，int（8字节长整型）/embstr（小于等于39字节字符串）/raw（大于39个字节字符串）

C语言的字符串是char[]实现的，而Redis使用SDS（simple dynamic string） 封装，sds源码如下：
```c++
struct sdshdr{ 
    unsigned int len; // 标记buf的长度 
    unsigned int free; //标记buf中未使用的元素个数 
    char buf[]; // 存放元素的坑 
}
```


SDS 结构图如下：

<img :src="$withBase('/img/sds-constract.png')" alt="微信搜索BiggerBoy">

Redis为什么选择SDS结构，而C语言原生的char[]不香吗？

举例其中一点，SDS中，O(1)时间复杂度，就可以获取字符串长度；而C 字符串，需要遍历整个字符串，时间复杂度为O(n)

**Hash（哈希）**

简介：在Redis中，哈希类型是指v（值）本身又是一个键值对（k-v）结构

简单使用举例：hset key field value 、hget key field

内部编码：ziplist（压缩列表） 、hashtable（哈希表）

应用场景：缓存用户信息等。

注意点：如果开发使用hgetall，哈希元素比较多的话，可能导致Redis阻塞，可以使用hscan。而如果只是获取部分field，建议使用hmget。
字符串和哈希类型对比如下图：

<img :src="$withBase('/img/string-hash-diff.png')" alt="微信搜索BiggerBoy">

**List（列表）**

简介：列表（list）类型是用来存储多个有序的字符串，一个列表最多可以存储2^32-1个元素。

简单实用举例：lpush key value [value ...] 、lrange key start end

内部编码：ziplist（压缩列表）、linkedlist（链表）

应用场景：消息队列，文章列表

<img :src="$withBase('/img/list-struct.png')" alt="微信搜索BiggerBoy">

list应用场景参考以下：

- lpush+lpop=Stack（栈）

- lpush+rpop=Queue（队列）

- lpsh+ltrim=Capped Collection（有限集合）

- lpush+brpop=Message Queue（消息队列）

**Set（集合）**

<img :src="$withBase('/img/set-struct.png')" alt="微信搜索BiggerBoy">

简介：集合（set）类型也是用来保存多个的字符串元素，但是不允许重复元素

简单使用举例：sadd key element [element ...]、smembers key

内部编码：intset（整数集合）、hashtable（哈希表）

注意点：smembers和lrange、hgetall都属于比较重的命令，如果元素过多存在阻塞Redis的可能性，可以使用sscan来完成。

应用场景：用户标签,生成随机数抽奖、社交需求。

**有序集合（zset）**

简介：已排序的字符串集合，同时元素不能重复

简单格式举例：zadd key score member [score member ...]，zrank key member

底层内部编码：ziplist（压缩列表）、skiplist（跳跃表）

应用场景：排行榜，社交需求（如用户点赞）。
### 2.2 Redis 的三种特殊数据类型
Geo：Redis3.2推出的，地理位置定位，用于存储地理位置信息，并对存储的信息进行操作。

HyperLogLog：用来做基数统计算法的数据结构，如统计网站的UV。

Bitmaps ：用一个比特位来映射某个元素的状态，在Redis中，它的底层是基于字符串类型实现的，可以把bitmaps成作一个以比特位为单位的数组

## 3. Redis为什么这么快？

<img :src="$withBase('/img/why-redis-fast.png')" alt="微信搜索BiggerBoy">

### 3.1 基于内存存储实现
我们都知道内存读写是比在磁盘快很多的，Redis基于内存存储实现的数据库，相对于数据存在磁盘的MySQL数据库，省去磁盘I/O的消耗。

### 3.2 高效的数据结构
我们知道，Mysql索引为了提高效率，选择了B+树的数据结构。其实合理的数据结构，就是可以让你的应用/程序更快。先看下Redis的数据结构&内部编码图：

<img :src="$withBase('/img/redis-data-struct.png')" alt="微信搜索BiggerBoy">

SDS简单动态字符串

<img :src="$withBase('/img/sds-dynamic-string.png')" alt="微信搜索BiggerBoy">

>- 字符串长度处理：Redis获取字符串长度，时间复杂度为O(1)，而C语言中，需要从头开始遍历，复杂度为O（n）;
>- 空间预分配：字符串修改越频繁的话，内存分配越频繁，就会消耗性能，而SDS修改和空间扩充，会额外分配未使用的空间，减少性能损耗。
>- 惰性空间释放：SDS 缩短时，不是回收多余的内存空间，而是free记录下多余的空间，后续有变更，直接使用free中记录的空间，减少分配。
>- 二进制安全：Redis可以存储一些二进制数据，在C语言中字符串遇到'\0'会结束，而 SDS中标志字符串结束的是len属性。


**字典**

Redis 作为 K-V 型内存数据库，所有的键值就是用字典来存储。字典就是哈希表，比如HashMap，通过key就可以直接获取到对应的value。而哈希表的特性，在O（1）时间复杂度就可以获得对应的值。

跳跃表

<img :src="$withBase('/img/skip-table.png')" alt="微信搜索BiggerBoy">

- 跳跃表是Redis特有的数据结构，就是在链表的基础上，增加多级索引提升查找效率。
- 跳跃表支持平均 O（logN）,最坏 O（N）复杂度的节点查找，还可以通过顺序性操作批量处理节点。

### 3.3 合理的数据编码
Redis 支持多种数据数据类型，每种基本类型，可能对多种数据结构。什么时候,使用什么样数据结构，使用什么样编码，是redis设计者总结优化的结果。

- String：如果存储数字的话，是用int类型的编码;如果存储非数字，小于等于39字节的字符串，是embstr；大于39个字节，则是raw编码。
- List：如果列表的元素个数小于512个，列表每个元素的值都小于64字节（默认），使用ziplist编码，否则使用linkedlist编码
- Hash：哈希类型元素个数小于512个，所有值小于64字节的话，使用ziplist编码,否则使用hashtable编码。
- Set：如果集合中的元素都是整数且元素个数小于512个，使用intset编码，否则使用hashtable编码。
- Zset：当有序集合的元素个数小于128个，每个元素的值小于64字节时，使用ziplist编码，否则使用skiplist（跳跃表）编码

### 3.4 合理的线程模型

I/O 多路复用

<img :src="$withBase('/img/io-muti-route.png')" alt="微信搜索BiggerBoy">

**I/O 多路复用**

多路I/O复用技术可以让单个线程高效的处理多个连接请求，而Redis使用用epoll作为I/O多路复用技术的实现。并且，Redis自身的事件处理模型将epoll中的连接、读写、关闭都转换为事件，不在网络I/O上浪费过多的时间。

**什么是I/O多路复用？**

I/O ：网络 I/O

多路 ：多个网络连接

复用：复用同一个线程。

IO多路复用其实就是一种同步IO模型，它实现了一个线程可以监视多个文件句柄；一旦某个文件句柄就绪，就能够通知应用程序进行相应的读写操作；而没有文件句柄就绪时,就会阻塞应用程序，交出cpu。

**单线程模型**

Redis是单线程模型的，而单线程避免了CPU不必要的上下文切换和竞争锁的消耗。也正因为是单线程，如果某个命令执行过长（如hgetall命令），会造成阻塞。Redis是面向快速执行场景的数据库。，所以要慎用如smembers和lrange、hgetall等命令。
Redis 6.0 引入了多线程提速，它的执行命令操作内存的仍然是个单线程。
### 3.5 虚拟内存机制

Redis直接自己构建了VM机制 ，不会像一般的系统会调用系统函数处理，会浪费一定的时间去移动和请求。

**Redis的虚拟内存机制是啥呢？**

虚拟内存机制就是暂时把不经常访问的数据(冷数据)从内存交换到磁盘中，从而腾出宝贵的内存空间用于其它需要访问的数据(热数据)。通过VM功能可以实现冷热数据分离，使热数据仍在内存中、冷数据保存到磁盘。这样就可以避免因为内存不足而造成访问速度下降的问题。
