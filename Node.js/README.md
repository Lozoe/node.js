##nodejs是什么?
简单的说 Node.js 就是运行在服务端的 JavaScript。
Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。
Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。

nodejs社区: https://www.nodejs.com

新者学习网站：
https://nodejs.org/en/   https://www.npmjs.com/  https://github.com  http://stackoverflow.com/

##入门

* 安装node.js(偶数版本为稳定版本,奇数版本为非稳定版本)
    * git bash、官网下载对应版本安装即可，注意Linux上安装Node.js需要安装Python 2.6 或 2.7
    * Mac xcode、 python、 brew.sh install homebrew(依赖ruby)、brew install node,brew install git mongodb  n version 安装不同版本 n 切换版本
* 了解node.js API

## nodejs与commonjs规范

* 模块与包管理工具
![模块与包管理工具](/imgs/1.png "Optional title")

* Commonjs规范
![Commonjs规范](/imgs/2.png "Optional title")

## nodejs模块分类

* 模块系统定义
    * 模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。

* 模块分类
    * 核心模块
    * 文件模块
    * 第三方模块
* 可以通过文件路径和模块名字来引用模块


* 模块流程
    * 创建模块  入口js
    * 导出模块  exports.add = function() {}
    * 加载模块  var xxx = require("./xxx.js");
    * 使用模块  xxx.add();
* 可以通过文件路径和模块名字来引用模块

* 了解http
    * Chrome搜索自身的DNS缓存
    * 搜索操作系统自身的DNS缓存chrome://net-internals/#dns（浏览器没有找到缓存或者缓存已经失效）
    * 读取本地host文件
    * 浏览器发起一个DNS的一个系统调用
        * 宽带运营商服务器查看本身缓存
        * 运营商服务器代替浏览器发起一个迭代DNS解析的请求
            * 运营商服务器把结果返回操作系统内核同时缓存起来
            * 操作系统内核把结果返回浏览器
            * 最终拿到域名对应的ip地址
    * 浏览器获得域名对应的ip地址后，发起三次握手
    * 浏览器向服务器发送http请求
    * 服务器接收请求之后，根据请求参数，经过后端一些处理之后，把处理后的结果数据返回给浏览器
    * 浏览器得到结果比如完整html片段，在解析和渲染页面的时候，页面的js,css,图片静态资源同样是http请求，经理以上几步
    * 浏览器根据拿到的资源对页面进行渲染，最终呈现完整的页面

* 源码： https://github.com/nodejs/node

##关于作者

```javascript
  var Iona = {
    nickName  : "Iona",
    site : "https://github.com/onchangelz"
  }
```