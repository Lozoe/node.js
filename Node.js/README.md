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

##关于作者

```javascript
  var Iona = {
    nickName  : "Iona",
    site : "https://github.com/onchangelz"
  }
```