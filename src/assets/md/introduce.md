## 一个基于 `electron` 多窗口模式的模板

[主分支 @youli](https://github.com/youliso/electron-template)

[vue @mlmdflr](https://github.com/mlmdflr/xps-electron-vue-template)

## 异同

- 主进程在窗口(window)模块只有些许差异

- `主分支`在渲染进程原生实现,`vue分支`则是使用vue生态

- 打包逻辑一致

  

## 功能

- 多窗体控制
- 封装http模块(报含下载上传)
- 全局快捷键模块
- socket封装
- electron-updater 封装
- 一些常规的封装...



## 技术栈

### 主分支

- ts
- electron
- sass
- webpack

### vue分支

- 主分支的技术栈
- vue3
- vue-router



## 目录结构

### 主分支

```
├── dist 编译后存放
├── out 打包后存放
├── resources 资源
│   ├── build 打包所需的文件
│   │   ├── cfg 打包配置
│   │   └── icons 图片
│   ├── platform 对应系统依赖 (自行创建)
│   │   ├── win32
│   │   ├── darwin
│   │   └── linux
│   ├── extern 外部资源(打包后位于resources下)
│   ├── inside 内部资源(如果开启asar打包 会位于asar下)
│   └── root 和执行文件同级
├── scripts 打包的方法 、本地调试等
├── src
│   ├── cfg 本地配置和 请求配置之类
│   ├── utils 一些依赖方法(主、渲染可通用)
│   ├── main 主进程模块
│   └── renderer 渲染进程模块
├── .port 调试端口
└── tsconfig.json ts配置
```

### vue分支

```
├── dist 编译后存放
├── out 打包后存放
├── resources 打包依赖文件夹
│   ├── build 打包所需的文件
│   │   ├── cfg 打包配置
│   │   └── icons 图片
│   ├── platform 对应系统依赖
│   │   ├── win32
│   │   ├── darwin
│   │   └── linux
│   ├── extern 外部依赖(打包后位于resources下)
│   ├── inside 内部依赖(如果开启asar打包 会位于asar下)
│   └── root 顶层依赖(位于安装根目录下)
├── scripts 打包的方法 、本地调试等
├── src 主目录
│   ├── cfg 本地配置 和 请求配置之类
│   ├── assets 静态资源
│   ├── util 工具类 (无外部依赖可通用)
│   ├── main 主进程
│   │   └── modular 主进程模块
│   │       ├─── additional 附加模块
│   |       ├─── enhance 增强模块
│   |       ├─── general 通用模块
│   |       └─── app 应用相关
│   |       └─── window 窗口相关
│   └── renderer 渲染进程
│       └── common 渲染进程模块(同主进程 modular)
├── .port 调试端口
└── tsconfig.json ts配置
```

