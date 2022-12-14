# Java中真的只有值传递么？
（欢迎探讨）
## 回顾值传递和引用传递

关于Java是值传递还是引用传递，网上有不一样的说法。
>1、基本类型或基本类型的包装类以及String是值传递，引用类型是引用传递。
>2、Java中只有值传递。

关于这个问题应该是存在争议的。根据测试出来的结果和我们自己的经验，以及口口相传或是上学时老师讲的，我们认为是第一种。但第二种说法的呼声也很高，渐渐地我们也认为第2中才是对的。那么下面我们就来分析一下这个问题。

在谈这个问题之前我们先了解值传递和引用传递的概念及现象。我还记得，值传递和引用传递这些概念是大学里学Java的时候老师教给我的，它们的概念是什么呢？老师是通过例子来讲解的，大概是这样的。

### 值传递

例子1：

```java
public static void main(String[] args){
	TestJavaParamPass() tjpp = new TestJavaParamPass();
    int num = 10;
    tjpp.change(num);
    System.out.println("num in main():"+i);
}
public void change(int param){
    param = 20;
    System.out.println("param in change():"+param);
}
```

控制台输出:

```bash
param in change():10
num in main():20
```

mian()方法中的int变量num传递给change()方法，change()方法接收到后将值改变为20。通过看控制台输出，main()方法中的num变量的值没有改变。

**结论：基本类型是值传递。**

### 引用传递

例子2：

```java
public static void main(String[] args){
	TestJavaParamPass() tjpp = new TestJavaParamPass();
    User user = new User();
    user.setName("Jerry");
    tjpp.change(user);
    System.out.println("user in mian():"+user);
}
public void change(User param){
    param.setName("Tom");
    System.out.println("param in change():"+param);
}
```

控制台输出：

```bash
param in change():User(name=Tom}
user in mian():User(name=Tom}
```

main()方法中的user变量传递给change()方法，change()方法改变了其name属性值。通过看控制台输出，main()方法中的user变量的name属性值发生改变。

**结论：引用类型是引用传递。**

### 特殊的值传递

例子3：

```java
public static void main(String[] args){
	TestJavaParamPass() tjpp = new TestJavaParamPass();
    String name = "Jerry";
    tjpp.change(name);
    System.out.println("name in main():"+i);
}
public void change(String param){
    param = "Tom";
    System.out.println("param in change():"+param);
}
```

控制台输出：

```bash
param in change():Tom
name in mian():Jerry
```

String也是引用类型的数据类型，为什么值没改变？因为在change()方法里`param = "Tom";`相当于`param = new String("Tom");`就相当于param被重新赋值指向了另外一个对象。所以，其实String类型传的是引用，只不过被重新赋值指向了别的对象了，没有修改原对象。即，String本质上还是引用传递，表像上是值传递。

**结论：基本类型是值传递，引用类型是引用传递，String是特殊的值传递。**

这个结论也是网络上流传的比较多的，可能大部分程序员的认知都是这样的。至于值传递和引用传递的概念，接下来便可根据上面的例子和结论推断出来，以及解释为什么大多数程序员都将String理解为是特殊的值传递。

## 概念提取

与其叫概念提取好不如叫结论总结呢。

**值传递：**基本类型的变量在被传递给方法时，传递的是该变量的值（即复制自己的值传递给方法）。

**引用传递：**引用类型的变量在被传递给方法时， 传递的是该变量的引用（即自己所指向的内存地址）。

为什么说**String是特殊的值传递**：是因为String和基本类型从表象来说表现出来的结果是一样，大概是为了便于记忆这个结果才这样说的吧。但是要知道String也是引用传递只不过它的引用被重新赋值，指向了别的对象了，所以不会影响原值。所以String不能简单的说是值传递。

## 解析Java只有值传递的说法	
### “只有值传递”的说法
网上还流传一种说法叫`Java只有值传递`。网上有文章论证了Java只有值传递的说法，其中举的例子和上面的类似。

分析的很透彻，解释了上面三个例子的本质。指出了上面第二个例子的错误之处，举的例子不恰当。并指出下面这样的例子才恰当，又举了钥匙和房子的例子，佐证了上面第2个例子确实不恰当。因为上面的例子的侧重点都是最后实际变量的值有没有改变。

```java
public static void main(String[] args){
	TestJavaParamPass() tjpp = new TestJavaParamPass();
    User user = new User();
    user.setName("Jerry");
    tjpp.change(user);
    System.out.println("user in mian():"+user);
}
public void change(User param){
	param = new User()
    param.setName("Tom");
    System.out.println("param in change():"+param);
}
```

输出：

```bash
param in change():User(name=Tom}
user in mian():User(name=Jerry}
```

最后文章的结论是**Java只有值传递**。引用类型大概是这样解释的（ 基本类型就不用说了 ），实际变量（实际参数）赋值一份自己的引用地址的值传给方法，方法的形式参数拿到的是实参的引用地址的值。侧重点在值，所以结论说的是引用类型也是值传递。

### 解析

我觉得论证者分析基本类型和引用类型的实参形参的变化的原理是没有问题的，但是得出的结论是不是有点不恰当。怎么说呢？请继续看。

论证者的意思是，**java只有值传递**。也就是说引用类型也是值传递，侧重点是复制一份**引用的地址的值**给形参，在于这里的值是引用的地址的值（不是引用所指向的内存里存的值），所以说是值传递。是不是有点牵强？我觉得有点偷换概念，没错，大家都知道引用类型传递的是引用的值，但你不能因为传递的是值就说是值传递，不传值还能传什么？引用是内存地址，不是也得用值表示么？

而传统的说法：**基本类型是值传递（内存里存东西所代表的值），引用类型是引用传递。**我觉得这个侧重点是：基本类型把值复制一份传递过去，引用类型把引用复制一份传递过去。侧重点是传递的东西，基本类型传递的东西叫变量的值（变量本身所代表的值），引用类型传递的东西叫引用（引用本身的值，即内存地址），而非引用所指向的内存空间内的值。所以这样理解引用类型传递的是引用也没问题啊。

所以，Java中基本类型传递的是变量所代表的自身的值（内存里存东西所代表的值），是值传递；引用类型传递的是对象的引用，是引用传递；再深一步，引用也是一个确切的值来表示的，或者你把引用看作是对象的值，那也可以说引用类型传递的是对象的值，是值传递。

文章还说了

> **无论是值传递还是引用传递，其实都是一种求值策略(Evaluation strategy)。**
>
> 在求值策略中，还有一种叫做按**共享传递**(call by sharing)。其实Java中的参数传递严格意义上说应该是按共享传递。
>
> 按共享传递，是指在调用函数时，传递给函数的是实参的地址的拷贝（如果实参在栈中，则直接拷贝该值）。在函数内部对参数进行操作时，需要先拷贝的地址寻找到具体的值，再进行操作。如果该值在栈中，那么因为是直接拷贝的值，所以函数内部对参数进行操作不会对外部变量产生影响。如果原来拷贝的是原值在堆中的地址，那么需要先根据该地址找到堆中对应的位置，再进行操作。因为传递的是地址的拷贝所以函数内对值的操作对外部变量是可见的。
>
> 简单点说，Java中的传递，是值传递，而这个值，实际上是对象的引用。 

**维基百科：求职策略-传共享对象调用**

>传共享对象调用（Call by sharing）[[编辑](https://zh.wikipedia.org/w/index.php?title=求值策略&action=edit&section=5)]
>
>此方式由Barbara Liskov命名[[1\]](https://zh.wikipedia.org/wiki/求值策略#cite_note-CLU_Reference_Manual-1)，并被Python、Java（对象类型）、JavaScript、Scheme、OCaml等语言使用。
>
>与传引用调用不同，对于调用者而言在被调用函数里修改参数是没有影响的。如果要达成传引用调用的效果就需要传一个共享对象，一旦被调用者修改了对象，调用者就可以看到变化（因为对象是共享的，没有拷贝）。比如这段Python代码：
>
>```Python
>def f(l):
>    l.append(1)
>    l = [2]
>m = []
>f(m)
>print(m)
>```

> 会输出[1]而不是[2]。因为列表是可变的，append方法改变了m。而赋值局部变量l的行为对外面作用域没有影响（在这类语言中赋值是给变量绑定一个新对象，而不是改变对象）。

使用C/C++语言的程序员可能因不能用指针等使函数返回多个值而感到不便，但是像Python这样的语言提供了替代方案：函数能方便的返回多个值，比C++11的std::tie更加简单。

这里的意思是，不论是基本类型还是引用类型传给函数的是实参的地址拷贝，也就是内存地址，可以说是引用，只不过基本类型在栈中，函数内对参数操作时直接拷贝的值，引用类型的值在堆中，需要先找到它的位置，即地址、引用。最后说java是值传递，而这个值是对象的引用。

看到这明白了么？

地址就是引用，那是不是可以说java是引用传递了？传递的是引用的值，计算机中不全是值吗，不是值还能是什么，说是引用传递是侧重点不同传，传过去的就是地址就是引用，引用不用值表示用啥

这里说的值不是一个概念，说基本类型传的是值，这个是值变量本身的值，说对象传的也是值，这个值说的是引用是地址，而说对象说是引用传递，侧重点在于说是传的地址，指向对象所代表的内部的属性的地址，非对象所表示的内部的属性的值，为的是和基本类型直接传值区分开。

>维基百科：**[引用 (程序设计)](https://zh.wikipedia.org/wiki/%E5%8F%83%E7%85%A7)**
>
>在[计算机科学](https://zh.wikipedia.org/wiki/電腦科學)中，**引用**（英语：reference）是指一个可以让程序间接访问于[电脑存储器](https://zh.wikipedia.org/wiki/電腦記憶體)或其他[存储设备](https://zh.wikipedia.org/wiki/儲存裝置)中一特定数据的[值](https://zh.wikipedia.org/wiki/值_(電腦科學))，该数据可以为[变量](https://zh.wikipedia.org/wiki/變數_(程序設計))或[记录](https://zh.wikipedia.org/w/index.php?title=記錄_(電腦科學)&action=edit&redlink=1)。
>引用和数据本身不同。一般而言，引用会是数据存储于存储器或存储设备中的[物理地址](https://zh.wikipedia.org/wiki/實體位址)。因此，引用亦常被称为该数据的**指针**或**地址**。

看看引用的定义，**引用是指一个XXX数据的值。**好吧，引用本身就是一个值。但不是值还能是什么呢？计算机中不都是值么？

说值传递还是引用传递都没有错，关键是你怎么定义和解释值传递、引用传递的概念以及值所表示的东西。

计算机中一切皆值，如果从这点出发，那全都是传的值啊，只不过细化到java中，基本类型传递的是自身的值，引用类型传递的是引用的值，而非对象内属性的值。

所以如果武断的说只有值传递也是没问题的，因为在计算机中只能用值来表示啊，但觉得有点投机取巧，就和说世界上只有\*\*\*，那还区分\*\*和\*\*干嘛，道理差不多。（暂时想不到好的例子哈哈）

还是刚才说的那句，说是引用传递，侧重点在于说是传的是引用是地址，而非对象所表示的内部的属性值，为的是和基本类型直接传值区分开，便于记忆.
## 最后
最后，大家理解现象的原理即可，没必要追的那么深，或玩文字游戏，钻牛角尖。

如果有人问你，你可以这么说，基本类型和他们的包装类是值传递，引用类型传递的是对象的引用即地址值，String传递的也是地址值，只不过在函数内地址值被修改了，所以不会影响到实参，因表现上和基本类型一样， 所以可能为了便于记住这个现象才说String是值传递的吧。归根到底传的都是值只不过值的含义不同，所以才有Java只有值传递的说法吧。 

（欢迎探讨）



关注公众号@BiggerBoy，让我们一起成长吧！

<img :src="$withBase('/img/qcode.jpg')" alt="微信搜索BiggerBoy">