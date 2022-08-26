import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,a as e,e as i,d as l}from"./app.66950d66.js";const d={},r=i('<h1 id="redis\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#redis\u9762\u8BD5\u9898" aria-hidden="true">#</a> Redis\u9762\u8BD5\u9898</h1><h2 id="_1-\u4EC0\u4E48\u662Fredis-\u5B83\u4E3B\u8981\u7528\u6765\u4EC0\u4E48\u7684" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662Fredis-\u5B83\u4E3B\u8981\u7528\u6765\u4EC0\u4E48\u7684" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662FRedis\uFF1F\u5B83\u4E3B\u8981\u7528\u6765\u4EC0\u4E48\u7684\uFF1F</h2><p>Redis\uFF0C\u82F1\u6587\u5168\u79F0\u662FRemote Dictionary Server\uFF08\u8FDC\u7A0B\u5B57\u5178\u670D\u52A1\uFF09\uFF0C\u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u4F7F\u7528ANSI C\u8BED\u8A00\u7F16\u5199\u3001\u652F\u6301\u7F51\u7EDC\u3001\u53EF\u57FA\u4E8E\u5185\u5B58\u4EA6\u53EF\u6301\u4E45\u5316\u7684\u65E5\u5FD7\u578B\u3001Key-Value\u6570\u636E\u5E93\uFF0C\u5E76\u63D0\u4F9B\u591A\u79CD\u8BED\u8A00\u7684API\u3002</p><p>\u4E0EMySQL\u6570\u636E\u5E93\u4E0D\u540C\u7684\u662F\uFF0CRedis\u7684\u6570\u636E\u662F\u5B58\u5728\u5185\u5B58\u4E2D\u7684\u3002\u5B83\u7684\u8BFB\u5199\u901F\u5EA6\u975E\u5E38\u5FEB\uFF0C\u6BCF\u79D2\u53EF\u4EE5\u5904\u7406\u8D85\u8FC710\u4E07\u6B21\u8BFB\u5199\u64CD\u4F5C\u3002\u56E0\u6B64redis\u88AB\u5E7F\u6CDB\u5E94\u7528\u4E8E\u7F13\u5B58\uFF0C\u53E6\u5916\uFF0CRedis\u4E5F\u7ECF\u5E38\u7528\u6765\u505A\u5206\u5E03\u5F0F\u9501\u3002\u9664\u6B64\u4E4B\u5916\uFF0CRedis\u652F\u6301\u4E8B\u52A1\u3001\u6301\u4E45\u5316\u3001LUA \u811A\u672C\u3001LRU \u9A71\u52A8\u4E8B\u4EF6\u3001\u591A\u79CD\u96C6\u7FA4\u65B9\u6848\u3002</p><h2 id="_2-\u8BF4\u8BF4redis\u7684\u57FA\u672C\u6570\u636E\u7ED3\u6784\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-\u8BF4\u8BF4redis\u7684\u57FA\u672C\u6570\u636E\u7ED3\u6784\u7C7B\u578B" aria-hidden="true">#</a> 2.\u8BF4\u8BF4Redis\u7684\u57FA\u672C\u6570\u636E\u7ED3\u6784\u7C7B\u578B</h2><p>\u5927\u591A\u6570\u5C0F\u4F19\u4F34\u90FD\u77E5\u9053\uFF0CRedis\u6709\u4EE5\u4E0B\u8FD9\u4E94\u79CD\u57FA\u672C\u7C7B\u578B\uFF1A</p><p>String\uFF08\u5B57\u7B26\u4E32\uFF09</p><p>Hash\uFF08\u54C8\u5E0C\uFF09</p><p>List\uFF08\u5217\u8868\uFF09</p><p>Set\uFF08\u96C6\u5408\uFF09</p><p>zset\uFF08\u6709\u5E8F\u96C6\u5408\uFF09</p><p>\u5B83\u8FD8\u6709\u4E09\u79CD\u7279\u6B8A\u7684\u6570\u636E\u7ED3\u6784\u7C7B\u578B\uFF1A</p><p>Geospatial</p><p>Hyperloglog</p><p>Bitmap</p><h3 id="_2-1-redis-\u7684\u4E94\u79CD\u57FA\u672C\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-1-redis-\u7684\u4E94\u79CD\u57FA\u672C\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> 2.1 Redis \u7684\u4E94\u79CD\u57FA\u672C\u6570\u636E\u7C7B\u578B</h3>',16),p=["src"],o=i(`<p><strong>String\uFF08\u5B57\u7B26\u4E32\uFF09</strong></p><p>\u7B80\u4ECB:String\u662FRedis\u6700\u57FA\u7840\u7684\u6570\u636E\u7ED3\u6784\u7C7B\u578B\uFF0C\u5B83\u662F\u4E8C\u8FDB\u5236\u5B89\u5168\u7684\uFF0C\u53EF\u4EE5\u5B58\u50A8\u56FE\u7247\u6216\u8005\u5E8F\u5217\u5316\u7684\u5BF9\u8C61\uFF0C\u503C\u6700\u5927\u5B58\u50A8\u4E3A512M</p><p>\u7B80\u5355\u4F7F\u7528\u4E3E\u4F8B\uFF1Aset key value\u3001get key\u7B49</p><p>\u5E94\u7528\u573A\u666F\uFF1A\u5171\u4EABsession\u3001\u5206\u5E03\u5F0F\u9501\uFF0C\u8BA1\u6570\u5668\u3001\u9650\u6D41\u3002</p><p>\u5185\u90E8\u7F16\u7801\u67093\u79CD\uFF0Cint\uFF088\u5B57\u8282\u957F\u6574\u578B\uFF09/embstr\uFF08\u5C0F\u4E8E\u7B49\u4E8E39\u5B57\u8282\u5B57\u7B26\u4E32\uFF09/raw\uFF08\u5927\u4E8E39\u4E2A\u5B57\u8282\u5B57\u7B26\u4E32\uFF09</p><p>C\u8BED\u8A00\u7684\u5B57\u7B26\u4E32\u662Fchar[]\u5B9E\u73B0\u7684\uFF0C\u800CRedis\u4F7F\u7528SDS\uFF08simple dynamic string\uFF09\xA0\u5C01\u88C5\uFF0Csds\u6E90\u7801\u5982\u4E0B\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>struct sdshdr{ 
    unsigned int len; // \u6807\u8BB0buf\u7684\u957F\u5EA6 
    unsigned int free; //\u6807\u8BB0buf\u4E2D\u672A\u4F7F\u7528\u7684\u5143\u7D20\u4E2A\u6570 
    char buf[]; // \u5B58\u653E\u5143\u7D20\u7684\u5751 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SDS \u7ED3\u6784\u56FE\u5982\u4E0B\uFF1A</p>`,8),h=["src"],c=e("p",null,"Redis\u4E3A\u4EC0\u4E48\u9009\u62E9SDS\u7ED3\u6784\uFF0C\u800CC\u8BED\u8A00\u539F\u751F\u7684char[]\u4E0D\u9999\u5417\uFF1F",-1),u=e("p",null,"\u4E3E\u4F8B\u5176\u4E2D\u4E00\u70B9\uFF0CSDS\u4E2D\uFF0CO(1)\u65F6\u95F4\u590D\u6742\u5EA6\uFF0C\u5C31\u53EF\u4EE5\u83B7\u53D6\u5B57\u7B26\u4E32\u957F\u5EA6\uFF1B\u800CC \u5B57\u7B26\u4E32\uFF0C\u9700\u8981\u904D\u5386\u6574\u4E2A\u5B57\u7B26\u4E32\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(n)",-1),_=e("p",null,[e("strong",null,"Hash\uFF08\u54C8\u5E0C\uFF09")],-1),g=e("p",null,"\u7B80\u4ECB\uFF1A\u5728Redis\u4E2D\uFF0C\u54C8\u5E0C\u7C7B\u578B\u662F\u6307v\uFF08\u503C\uFF09\u672C\u8EAB\u53C8\u662F\u4E00\u4E2A\u952E\u503C\u5BF9\uFF08k-v\uFF09\u7ED3\u6784",-1),m=e("p",null,"\u7B80\u5355\u4F7F\u7528\u4E3E\u4F8B\uFF1Ahset key field value\xA0\u3001hget key field",-1),B=e("p",null,"\u5185\u90E8\u7F16\u7801\uFF1Aziplist\uFF08\u538B\u7F29\u5217\u8868\uFF09\xA0\u3001hashtable\uFF08\u54C8\u5E0C\u8868\uFF09",-1),b=e("p",null,"\u5E94\u7528\u573A\u666F\uFF1A\u7F13\u5B58\u7528\u6237\u4FE1\u606F\u7B49\u3002",-1),R=e("p",null,"\u6CE8\u610F\u70B9\uFF1A\u5982\u679C\u5F00\u53D1\u4F7F\u7528hgetall\uFF0C\u54C8\u5E0C\u5143\u7D20\u6BD4\u8F83\u591A\u7684\u8BDD\uFF0C\u53EF\u80FD\u5BFC\u81F4Redis\u963B\u585E\uFF0C\u53EF\u4EE5\u4F7F\u7528hscan\u3002\u800C\u5982\u679C\u53EA\u662F\u83B7\u53D6\u90E8\u5206field\uFF0C\u5EFA\u8BAE\u4F7F\u7528hmget\u3002 \u5B57\u7B26\u4E32\u548C\u54C8\u5E0C\u7C7B\u578B\u5BF9\u6BD4\u5982\u4E0B\u56FE\uFF1A",-1),y=["src"],f=e("p",null,[e("strong",null,"List\uFF08\u5217\u8868\uFF09")],-1),S=e("p",null,"\u7B80\u4ECB\uFF1A\u5217\u8868\uFF08list\uFF09\u7C7B\u578B\u662F\u7528\u6765\u5B58\u50A8\u591A\u4E2A\u6709\u5E8F\u7684\u5B57\u7B26\u4E32\uFF0C\u4E00\u4E2A\u5217\u8868\u6700\u591A\u53EF\u4EE5\u5B58\u50A82^32-1\u4E2A\u5143\u7D20\u3002",-1),v=e("p",null,"\u7B80\u5355\u5B9E\u7528\u4E3E\u4F8B\uFF1Alpush key value [value ...] \u3001lrange key start end",-1),k=e("p",null,"\u5185\u90E8\u7F16\u7801\uFF1Aziplist\uFF08\u538B\u7F29\u5217\u8868\uFF09\u3001linkedlist\uFF08\u94FE\u8868\uFF09",-1),O=e("p",null,"\u5E94\u7528\u573A\u666F\uFF1A\u6D88\u606F\u961F\u5217\uFF0C\u6587\u7AE0\u5217\u8868",-1),w=["src"],I=e("p",null,"list\u5E94\u7528\u573A\u666F\u53C2\u8003\u4EE5\u4E0B\uFF1A",-1),$=e("ul",null,[e("li",null,[e("p",null,"lpush+lpop=Stack\uFF08\u6808\uFF09")]),e("li",null,[e("p",null,"lpush+rpop=Queue\uFF08\u961F\u5217\uFF09")]),e("li",null,[e("p",null,"lpsh+ltrim=Capped Collection\uFF08\u6709\u9650\u96C6\u5408\uFF09")]),e("li",null,[e("p",null,"lpush+brpop=Message Queue\uFF08\u6D88\u606F\u961F\u5217\uFF09")])],-1),z=e("p",null,[e("strong",null,"Set\uFF08\u96C6\u5408\uFF09")],-1),C=["src"],D=i('<p>\u7B80\u4ECB\uFF1A\u96C6\u5408\uFF08set\uFF09\u7C7B\u578B\u4E5F\u662F\u7528\u6765\u4FDD\u5B58\u591A\u4E2A\u7684\u5B57\u7B26\u4E32\u5143\u7D20\uFF0C\u4F46\u662F\u4E0D\u5141\u8BB8\u91CD\u590D\u5143\u7D20</p><p>\u7B80\u5355\u4F7F\u7528\u4E3E\u4F8B\uFF1Asadd key element [element ...]\u3001smembers key</p><p>\u5185\u90E8\u7F16\u7801\uFF1Aintset\uFF08\u6574\u6570\u96C6\u5408\uFF09\u3001hashtable\uFF08\u54C8\u5E0C\u8868\uFF09</p><p>\u6CE8\u610F\u70B9\uFF1Asmembers\u548Clrange\u3001hgetall\u90FD\u5C5E\u4E8E\u6BD4\u8F83\u91CD\u7684\u547D\u4EE4\uFF0C\u5982\u679C\u5143\u7D20\u8FC7\u591A\u5B58\u5728\u963B\u585ERedis\u7684\u53EF\u80FD\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528sscan\u6765\u5B8C\u6210\u3002</p><p>\u5E94\u7528\u573A\u666F\uFF1A\u7528\u6237\u6807\u7B7E,\u751F\u6210\u968F\u673A\u6570\u62BD\u5956\u3001\u793E\u4EA4\u9700\u6C42\u3002</p><p><strong>\u6709\u5E8F\u96C6\u5408\uFF08zset\uFF09</strong></p><p>\u7B80\u4ECB\uFF1A\u5DF2\u6392\u5E8F\u7684\u5B57\u7B26\u4E32\u96C6\u5408\uFF0C\u540C\u65F6\u5143\u7D20\u4E0D\u80FD\u91CD\u590D</p><p>\u7B80\u5355\u683C\u5F0F\u4E3E\u4F8B\uFF1Azadd key score member [score member ...]\uFF0Czrank key member</p><p>\u5E95\u5C42\u5185\u90E8\u7F16\u7801\uFF1Aziplist\uFF08\u538B\u7F29\u5217\u8868\uFF09\u3001skiplist\uFF08\u8DF3\u8DC3\u8868\uFF09</p><p>\u5E94\u7528\u573A\u666F\uFF1A\u6392\u884C\u699C\uFF0C\u793E\u4EA4\u9700\u6C42\uFF08\u5982\u7528\u6237\u70B9\u8D5E\uFF09\u3002</p><h3 id="_2-2-redis-\u7684\u4E09\u79CD\u7279\u6B8A\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-2-redis-\u7684\u4E09\u79CD\u7279\u6B8A\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> 2.2 Redis \u7684\u4E09\u79CD\u7279\u6B8A\u6570\u636E\u7C7B\u578B</h3><p>Geo\uFF1ARedis3.2\u63A8\u51FA\u7684\uFF0C\u5730\u7406\u4F4D\u7F6E\u5B9A\u4F4D\uFF0C\u7528\u4E8E\u5B58\u50A8\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u5E76\u5BF9\u5B58\u50A8\u7684\u4FE1\u606F\u8FDB\u884C\u64CD\u4F5C\u3002</p><p>HyperLogLog\uFF1A\u7528\u6765\u505A\u57FA\u6570\u7EDF\u8BA1\u7B97\u6CD5\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u5982\u7EDF\u8BA1\u7F51\u7AD9\u7684UV\u3002</p><p>Bitmaps \uFF1A\u7528\u4E00\u4E2A\u6BD4\u7279\u4F4D\u6765\u6620\u5C04\u67D0\u4E2A\u5143\u7D20\u7684\u72B6\u6001\uFF0C\u5728Redis\u4E2D\uFF0C\u5B83\u7684\u5E95\u5C42\u662F\u57FA\u4E8E\u5B57\u7B26\u4E32\u7C7B\u578B\u5B9E\u73B0\u7684\uFF0C\u53EF\u4EE5\u628Abitmaps\u6210\u4F5C\u4E00\u4E2A\u4EE5\u6BD4\u7279\u4F4D\u4E3A\u5355\u4F4D\u7684\u6570\u7EC4</p><h2 id="_3-redis\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u5FEB" tabindex="-1"><a class="header-anchor" href="#_3-redis\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u5FEB" aria-hidden="true">#</a> 3. Redis\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u5FEB\uFF1F</h2>',15),L=["src"],M=e("h3",{id:"_3-1-\u57FA\u4E8E\u5185\u5B58\u5B58\u50A8\u5B9E\u73B0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-1-\u57FA\u4E8E\u5185\u5B58\u5B58\u50A8\u5B9E\u73B0","aria-hidden":"true"},"#"),l(" 3.1 \u57FA\u4E8E\u5185\u5B58\u5B58\u50A8\u5B9E\u73B0")],-1),V=e("p",null,"\u6211\u4EEC\u90FD\u77E5\u9053\u5185\u5B58\u8BFB\u5199\u662F\u6BD4\u5728\u78C1\u76D8\u5FEB\u5F88\u591A\u7684\uFF0CRedis\u57FA\u4E8E\u5185\u5B58\u5B58\u50A8\u5B9E\u73B0\u7684\u6570\u636E\u5E93\uFF0C\u76F8\u5BF9\u4E8E\u6570\u636E\u5B58\u5728\u78C1\u76D8\u7684MySQL\u6570\u636E\u5E93\uFF0C\u7701\u53BB\u78C1\u76D8I/O\u7684\u6D88\u8017\u3002",-1),H=e("h3",{id:"_3-2-\u9AD8\u6548\u7684\u6570\u636E\u7ED3\u6784",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-2-\u9AD8\u6548\u7684\u6570\u636E\u7ED3\u6784","aria-hidden":"true"},"#"),l(" 3.2 \u9AD8\u6548\u7684\u6570\u636E\u7ED3\u6784")],-1),N=e("p",null,"\u6211\u4EEC\u77E5\u9053\uFF0CMysql\u7D22\u5F15\u4E3A\u4E86\u63D0\u9AD8\u6548\u7387\uFF0C\u9009\u62E9\u4E86B+\u6811\u7684\u6570\u636E\u7ED3\u6784\u3002\u5176\u5B9E\u5408\u7406\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u5C31\u662F\u53EF\u4EE5\u8BA9\u4F60\u7684\u5E94\u7528/\u7A0B\u5E8F\u66F4\u5FEB\u3002\u5148\u770B\u4E0BRedis\u7684\u6570\u636E\u7ED3\u6784&\u5185\u90E8\u7F16\u7801\u56FE\uFF1A",-1),x=["src"],Q=e("p",null,"SDS\u7B80\u5355\u52A8\u6001\u5B57\u7B26\u4E32",-1),U=["src"],q=e("blockquote",null,[e("ul",null,[e("li",null,"\u5B57\u7B26\u4E32\u957F\u5EA6\u5904\u7406\uFF1ARedis\u83B7\u53D6\u5B57\u7B26\u4E32\u957F\u5EA6\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(1)\uFF0C\u800CC\u8BED\u8A00\u4E2D\uFF0C\u9700\u8981\u4ECE\u5934\u5F00\u59CB\u904D\u5386\uFF0C\u590D\u6742\u5EA6\u4E3AO\uFF08n\uFF09;"),e("li",null,"\u7A7A\u95F4\u9884\u5206\u914D\uFF1A\u5B57\u7B26\u4E32\u4FEE\u6539\u8D8A\u9891\u7E41\u7684\u8BDD\uFF0C\u5185\u5B58\u5206\u914D\u8D8A\u9891\u7E41\uFF0C\u5C31\u4F1A\u6D88\u8017\u6027\u80FD\uFF0C\u800CSDS\u4FEE\u6539\u548C\u7A7A\u95F4\u6269\u5145\uFF0C\u4F1A\u989D\u5916\u5206\u914D\u672A\u4F7F\u7528\u7684\u7A7A\u95F4\uFF0C\u51CF\u5C11\u6027\u80FD\u635F\u8017\u3002"),e("li",null,"\u60F0\u6027\u7A7A\u95F4\u91CA\u653E\uFF1ASDS \u7F29\u77ED\u65F6\uFF0C\u4E0D\u662F\u56DE\u6536\u591A\u4F59\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u800C\u662Ffree\u8BB0\u5F55\u4E0B\u591A\u4F59\u7684\u7A7A\u95F4\uFF0C\u540E\u7EED\u6709\u53D8\u66F4\uFF0C\u76F4\u63A5\u4F7F\u7528free\u4E2D\u8BB0\u5F55\u7684\u7A7A\u95F4\uFF0C\u51CF\u5C11\u5206\u914D\u3002"),e("li",null,"\u4E8C\u8FDB\u5236\u5B89\u5168\uFF1ARedis\u53EF\u4EE5\u5B58\u50A8\u4E00\u4E9B\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u5728C\u8BED\u8A00\u4E2D\u5B57\u7B26\u4E32\u9047\u5230'\\0'\u4F1A\u7ED3\u675F\uFF0C\u800C SDS\u4E2D\u6807\u5FD7\u5B57\u7B26\u4E32\u7ED3\u675F\u7684\u662Flen\u5C5E\u6027\u3002")])],-1),A=e("p",null,[e("strong",null,"\u5B57\u5178")],-1),G=e("p",null,"Redis \u4F5C\u4E3A K-V \u578B\u5185\u5B58\u6570\u636E\u5E93\uFF0C\u6240\u6709\u7684\u952E\u503C\u5C31\u662F\u7528\u5B57\u5178\u6765\u5B58\u50A8\u3002\u5B57\u5178\u5C31\u662F\u54C8\u5E0C\u8868\uFF0C\u6BD4\u5982HashMap\uFF0C\u901A\u8FC7key\u5C31\u53EF\u4EE5\u76F4\u63A5\u83B7\u53D6\u5230\u5BF9\u5E94\u7684value\u3002\u800C\u54C8\u5E0C\u8868\u7684\u7279\u6027\uFF0C\u5728O\uFF081\uFF09\u65F6\u95F4\u590D\u6742\u5EA6\u5C31\u53EF\u4EE5\u83B7\u5F97\u5BF9\u5E94\u7684\u503C\u3002",-1),K=e("p",null,"\u8DF3\u8DC3\u8868",-1),P=["src"],j=i('<ul><li>\u8DF3\u8DC3\u8868\u662FRedis\u7279\u6709\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u5C31\u662F\u5728\u94FE\u8868\u7684\u57FA\u7840\u4E0A\uFF0C\u589E\u52A0\u591A\u7EA7\u7D22\u5F15\u63D0\u5347\u67E5\u627E\u6548\u7387\u3002</li><li>\u8DF3\u8DC3\u8868\u652F\u6301\u5E73\u5747 O\uFF08logN\uFF09,\u6700\u574F O\uFF08N\uFF09\u590D\u6742\u5EA6\u7684\u8282\u70B9\u67E5\u627E\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u987A\u5E8F\u6027\u64CD\u4F5C\u6279\u91CF\u5904\u7406\u8282\u70B9\u3002</li></ul><h3 id="_3-3-\u5408\u7406\u7684\u6570\u636E\u7F16\u7801" tabindex="-1"><a class="header-anchor" href="#_3-3-\u5408\u7406\u7684\u6570\u636E\u7F16\u7801" aria-hidden="true">#</a> 3.3 \u5408\u7406\u7684\u6570\u636E\u7F16\u7801</h3><p>Redis \u652F\u6301\u591A\u79CD\u6570\u636E\u6570\u636E\u7C7B\u578B\uFF0C\u6BCF\u79CD\u57FA\u672C\u7C7B\u578B\uFF0C\u53EF\u80FD\u5BF9\u591A\u79CD\u6570\u636E\u7ED3\u6784\u3002\u4EC0\u4E48\u65F6\u5019,\u4F7F\u7528\u4EC0\u4E48\u6837\u6570\u636E\u7ED3\u6784\uFF0C\u4F7F\u7528\u4EC0\u4E48\u6837\u7F16\u7801\uFF0C\u662Fredis\u8BBE\u8BA1\u8005\u603B\u7ED3\u4F18\u5316\u7684\u7ED3\u679C\u3002</p><ul><li>String\uFF1A\u5982\u679C\u5B58\u50A8\u6570\u5B57\u7684\u8BDD\uFF0C\u662F\u7528int\u7C7B\u578B\u7684\u7F16\u7801;\u5982\u679C\u5B58\u50A8\u975E\u6570\u5B57\uFF0C\u5C0F\u4E8E\u7B49\u4E8E39\u5B57\u8282\u7684\u5B57\u7B26\u4E32\uFF0C\u662Fembstr\uFF1B\u5927\u4E8E39\u4E2A\u5B57\u8282\uFF0C\u5219\u662Fraw\u7F16\u7801\u3002</li><li>List\uFF1A\u5982\u679C\u5217\u8868\u7684\u5143\u7D20\u4E2A\u6570\u5C0F\u4E8E512\u4E2A\uFF0C\u5217\u8868\u6BCF\u4E2A\u5143\u7D20\u7684\u503C\u90FD\u5C0F\u4E8E64\u5B57\u8282\uFF08\u9ED8\u8BA4\uFF09\uFF0C\u4F7F\u7528ziplist\u7F16\u7801\uFF0C\u5426\u5219\u4F7F\u7528linkedlist\u7F16\u7801</li><li>Hash\uFF1A\u54C8\u5E0C\u7C7B\u578B\u5143\u7D20\u4E2A\u6570\u5C0F\u4E8E512\u4E2A\uFF0C\u6240\u6709\u503C\u5C0F\u4E8E64\u5B57\u8282\u7684\u8BDD\uFF0C\u4F7F\u7528ziplist\u7F16\u7801,\u5426\u5219\u4F7F\u7528hashtable\u7F16\u7801\u3002</li><li>Set\uFF1A\u5982\u679C\u96C6\u5408\u4E2D\u7684\u5143\u7D20\u90FD\u662F\u6574\u6570\u4E14\u5143\u7D20\u4E2A\u6570\u5C0F\u4E8E512\u4E2A\uFF0C\u4F7F\u7528intset\u7F16\u7801\uFF0C\u5426\u5219\u4F7F\u7528hashtable\u7F16\u7801\u3002</li><li>Zset\uFF1A\u5F53\u6709\u5E8F\u96C6\u5408\u7684\u5143\u7D20\u4E2A\u6570\u5C0F\u4E8E128\u4E2A\uFF0C\u6BCF\u4E2A\u5143\u7D20\u7684\u503C\u5C0F\u4E8E64\u5B57\u8282\u65F6\uFF0C\u4F7F\u7528ziplist\u7F16\u7801\uFF0C\u5426\u5219\u4F7F\u7528skiplist\uFF08\u8DF3\u8DC3\u8868\uFF09\u7F16\u7801</li></ul><h3 id="_3-4-\u5408\u7406\u7684\u7EBF\u7A0B\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#_3-4-\u5408\u7406\u7684\u7EBF\u7A0B\u6A21\u578B" aria-hidden="true">#</a> 3.4 \u5408\u7406\u7684\u7EBF\u7A0B\u6A21\u578B</h3><p>I/O \u591A\u8DEF\u590D\u7528</p>',6),E=["src"],T=i('<p><strong>I/O \u591A\u8DEF\u590D\u7528</strong></p><p>\u591A\u8DEFI/O\u590D\u7528\u6280\u672F\u53EF\u4EE5\u8BA9\u5355\u4E2A\u7EBF\u7A0B\u9AD8\u6548\u7684\u5904\u7406\u591A\u4E2A\u8FDE\u63A5\u8BF7\u6C42\uFF0C\u800CRedis\u4F7F\u7528\u7528epoll\u4F5C\u4E3AI/O\u591A\u8DEF\u590D\u7528\u6280\u672F\u7684\u5B9E\u73B0\u3002\u5E76\u4E14\uFF0CRedis\u81EA\u8EAB\u7684\u4E8B\u4EF6\u5904\u7406\u6A21\u578B\u5C06epoll\u4E2D\u7684\u8FDE\u63A5\u3001\u8BFB\u5199\u3001\u5173\u95ED\u90FD\u8F6C\u6362\u4E3A\u4E8B\u4EF6\uFF0C\u4E0D\u5728\u7F51\u7EDCI/O\u4E0A\u6D6A\u8D39\u8FC7\u591A\u7684\u65F6\u95F4\u3002</p><p><strong>\u4EC0\u4E48\u662FI/O\u591A\u8DEF\u590D\u7528\uFF1F</strong></p><p>I/O \uFF1A\u7F51\u7EDC I/O</p><p>\u591A\u8DEF \uFF1A\u591A\u4E2A\u7F51\u7EDC\u8FDE\u63A5</p><p>\u590D\u7528\uFF1A\u590D\u7528\u540C\u4E00\u4E2A\u7EBF\u7A0B\u3002</p><p>IO\u591A\u8DEF\u590D\u7528\u5176\u5B9E\u5C31\u662F\u4E00\u79CD\u540C\u6B65IO\u6A21\u578B\uFF0C\u5B83\u5B9E\u73B0\u4E86\u4E00\u4E2A\u7EBF\u7A0B\u53EF\u4EE5\u76D1\u89C6\u591A\u4E2A\u6587\u4EF6\u53E5\u67C4\uFF1B\u4E00\u65E6\u67D0\u4E2A\u6587\u4EF6\u53E5\u67C4\u5C31\u7EEA\uFF0C\u5C31\u80FD\u591F\u901A\u77E5\u5E94\u7528\u7A0B\u5E8F\u8FDB\u884C\u76F8\u5E94\u7684\u8BFB\u5199\u64CD\u4F5C\uFF1B\u800C\u6CA1\u6709\u6587\u4EF6\u53E5\u67C4\u5C31\u7EEA\u65F6,\u5C31\u4F1A\u963B\u585E\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4EA4\u51FAcpu\u3002</p><p><strong>\u5355\u7EBF\u7A0B\u6A21\u578B</strong></p><p>Redis\u662F\u5355\u7EBF\u7A0B\u6A21\u578B\u7684\uFF0C\u800C\u5355\u7EBF\u7A0B\u907F\u514D\u4E86CPU\u4E0D\u5FC5\u8981\u7684\u4E0A\u4E0B\u6587\u5207\u6362\u548C\u7ADE\u4E89\u9501\u7684\u6D88\u8017\u3002\u4E5F\u6B63\u56E0\u4E3A\u662F\u5355\u7EBF\u7A0B\uFF0C\u5982\u679C\u67D0\u4E2A\u547D\u4EE4\u6267\u884C\u8FC7\u957F\uFF08\u5982hgetall\u547D\u4EE4\uFF09\uFF0C\u4F1A\u9020\u6210\u963B\u585E\u3002Redis\u662F\u9762\u5411\u5FEB\u901F\u6267\u884C\u573A\u666F\u7684\u6570\u636E\u5E93\u3002\uFF0C\u6240\u4EE5\u8981\u614E\u7528\u5982smembers\u548Clrange\u3001hgetall\u7B49\u547D\u4EE4\u3002 Redis 6.0 \u5F15\u5165\u4E86\u591A\u7EBF\u7A0B\u63D0\u901F\uFF0C\u5B83\u7684\u6267\u884C\u547D\u4EE4\u64CD\u4F5C\u5185\u5B58\u7684\u4ECD\u7136\u662F\u4E2A\u5355\u7EBF\u7A0B\u3002</p><h3 id="_3-5-\u865A\u62DF\u5185\u5B58\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_3-5-\u865A\u62DF\u5185\u5B58\u673A\u5236" aria-hidden="true">#</a> 3.5 \u865A\u62DF\u5185\u5B58\u673A\u5236</h3><p>Redis\u76F4\u63A5\u81EA\u5DF1\u6784\u5EFA\u4E86VM\u673A\u5236 \uFF0C\u4E0D\u4F1A\u50CF\u4E00\u822C\u7684\u7CFB\u7EDF\u4F1A\u8C03\u7528\u7CFB\u7EDF\u51FD\u6570\u5904\u7406\uFF0C\u4F1A\u6D6A\u8D39\u4E00\u5B9A\u7684\u65F6\u95F4\u53BB\u79FB\u52A8\u548C\u8BF7\u6C42\u3002</p><p><strong>Redis\u7684\u865A\u62DF\u5185\u5B58\u673A\u5236\u662F\u5565\u5462\uFF1F</strong></p><p>\u865A\u62DF\u5185\u5B58\u673A\u5236\u5C31\u662F\u6682\u65F6\u628A\u4E0D\u7ECF\u5E38\u8BBF\u95EE\u7684\u6570\u636E(\u51B7\u6570\u636E)\u4ECE\u5185\u5B58\u4EA4\u6362\u5230\u78C1\u76D8\u4E2D\uFF0C\u4ECE\u800C\u817E\u51FA\u5B9D\u8D35\u7684\u5185\u5B58\u7A7A\u95F4\u7528\u4E8E\u5176\u5B83\u9700\u8981\u8BBF\u95EE\u7684\u6570\u636E(\u70ED\u6570\u636E)\u3002\u901A\u8FC7VM\u529F\u80FD\u53EF\u4EE5\u5B9E\u73B0\u51B7\u70ED\u6570\u636E\u5206\u79BB\uFF0C\u4F7F\u70ED\u6570\u636E\u4ECD\u5728\u5185\u5B58\u4E2D\u3001\u51B7\u6570\u636E\u4FDD\u5B58\u5230\u78C1\u76D8\u3002\u8FD9\u6837\u5C31\u53EF\u4EE5\u907F\u514D\u56E0\u4E3A\u5185\u5B58\u4E0D\u8DB3\u800C\u9020\u6210\u8BBF\u95EE\u901F\u5EA6\u4E0B\u964D\u7684\u95EE\u9898\u3002</p><p>\u5173\u6CE8\u516C\u4F17\u53F7@BiggerBoy\uFF0C\u8BA9\u6211\u4EEC\u4E00\u8D77\u6210\u957F\u5427\uFF01</p>',14),Z=["src"];function F(s,J){return n(),a("div",null,[r,e("img",{src:s.$withBase("/img/redis-data-type.png"),alt:"\u5FAE\u4FE1\u641C\u7D22BiggerBoy"},null,8,p),o,e("img",{src:s.$withBase("/img/sds-constract.png"),alt:"\u5FAE\u4FE1\u641C\u7D22BiggerBoy"},null,8,h),c,u,_,g,m,B,b,R,e("img",{src:s.$withBase("/img/string-hash-diff.png"),alt:"\u5FAE\u4FE1\u641C\u7D22BiggerBoy"},null,8,y),f,S,v,k,O,e("img",{src:s.$withBase("/img/list-struct.png"),alt:"\u5FAE\u4FE1\u641C\u7D22BiggerBoy"},null,8,w),I,$,z,e("img",{src:s.$withBase("/img/set-struct.png"),alt:"\u5FAE\u4FE1\u641C\u7D22BiggerBoy"},null,8,C),D,e("img",{src:s.$withBase("/img/why-redis-fast.png"),alt:"\u5FAE\u4FE1\u641C\u7D22BiggerBoy"},null,8,L),M,V,H,N,e("img",{src:s.$withBase("/img/redis-data-struct.png"),alt:"\u5FAE\u4FE1\u641C\u7D22BiggerBoy"},null,8,x),Q,e("img",{src:s.$withBase("/img/sds-dynamic-string.png"),alt:"\u5FAE\u4FE1\u641C\u7D22BiggerBoy"},null,8,U),q,A,G,K,e("img",{src:s.$withBase("/img/skip-table.png"),alt:"\u5FAE\u4FE1\u641C\u7D22BiggerBoy"},null,8,P),j,e("img",{src:s.$withBase("/img/io-muti-route.png"),alt:"\u5FAE\u4FE1\u641C\u7D22BiggerBoy"},null,8,E),T,e("img",{src:s.$withBase("/img/qcode.jpg"),alt:"\u5FAE\u4FE1\u641C\u7D22BiggerBoy"},null,8,Z)])}var Y=t(d,[["render",F],["__file","mianshiti.html.vue"]]);export{Y as default};