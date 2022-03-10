## 镜像

限于国内网络环境经常遇到依赖拉取异常 影响着 `Install` 和 `build` 等操作,则需要配置镜像

 - `如果有魔法手段,则无需配置镜像`

### 仓库镜像

```shell
npm config set registry https://registry.npmmirror.com
```

### electron镜像

```shell
npm config set electron_mirror https://cdn.npmmirror.com/binaries/electron/
npm config set electron_builder_binaries_mirror https://npmmirror.com/mirrors/electron-builder-binaries/
```

或者直接运行 `npm config edit` 打开 `npm` 配置文件在空白处添加

```shell
registry=https://registry.npmmirror.com
electron_mirror=https://cdn.npmmirror.com/binaries/electron/
electron_builder_binaries_mirror=https://npmmirror.com/mirrors/electron-builder-binaries/
```

> 添加后查看是否有重复添加,然后关闭该窗口，重启命令行，删除node_modules文件夹，并重新安装依赖即可



## 全局(依赖|静态)文件夹

### assets(src/assets)

静态资源文件夹,打包时会打进 `app.asar` 里面

通过 ``import xxx form '@/assets/xxx'`` 进行引用

#### 示例

```ts
import ico from '@/assets/icon/tray.ico';
```

&nbsp;

### inside(resources/inside)

内部文件夹,打包时会打进 `app.asar` 里面

通过调用 `global` 模块中 `getResourcesPath` 方法来获取路径

#### 示例

```ts
import Global from './modular/global';
Global.getResourcesPath('inside') 

// 开发环境时 >> 项目路径\resources\inside
// 生产环境时 >> 安装后 app.asar 的虚拟路径
```

#### 注意
`inside` 打包后的虚拟路径只可读不可写

&nbsp;


### extern(resources/extern)

外部文件夹,打包后不会打进 `app.asar` 里面

通过调用 `global` 模块中 `getResourcesPath` 方法来获取路径

#### 示例

```ts
import Global from './modular/global';
Global.getResourcesPath('extern') 

// 开发环境时 >> 项目路径\resources\extern
// 生产环境时 >> 安装路径\resources\extern
```

&nbsp;

### root(resources/root)

顶层文件夹,打包后不会打进 `app.asar` 里面 

与 `xxx.exe ` 可执行文件同级的顶层目录中

通过调用 `global` 模块中 `getResourcesPath` 方法来获取路径

#### 示例

```ts
import Global from './modular/global';
Global.getResourcesPath('root') 

// 开发环境时 >> 项目路径\resources\root
// 生产环境时 >> 安装路径\
```

&nbsp;

### platform(resources/platform)

平台文件夹,打包后不会打进 `app.asar` 里面 

通过调用 `global` 模块中 `getResourcesPath` 方法来获取路径

#### 注意

打包只会打进和 `build` 相同的子文件夹进去

> 比如你 `platform` 文件夹里有两个子文件夹(win32和linux)哪个会打进安装包取决于你 `build` 时选择打包的平台
>
> 获取路径也同理

#### 示例

```ts
import Global from './modular/global';
Global.getResourcesPath('platform') 
// win 平台
// 开发环境时 >> 项目路径\resources\platform\win32(与当前系统平台同名的文件夹)
// 生产环境时 >> 安装路径\resources\platform\win32(与当前系统平台同名的文件夹)
// or
// liunx 平台
// 开发环境时 >> 项目路径\resources\platform\liunx(与当前系统平台同名的文件夹)
// 生产环境时 >> 安装路径\resources\platform\liunx(与当前系统平台同名的文件夹)
```




## 配置文件(src/cfg)

### app.json 

```json
{
  //硬件加速开关  
  "isDisableHardwareAcceleration": false,
   // 为true时 运行第二个实例会聚焦主窗体并不创建新窗体
  "isSecondInstanceWin": false
}
```



### window.json

```json
{
  //BrowserWindowConstructorOptions 配置
  "opt": {
    "width": 800,
    "height": 600,
    "backgroundColor": "#ffffff"
  },
  // customize 配置
  "customize": {
    "title": "electron-template",
    "headNative": true,
    "route": "/home"
  }
}
```

> BrowserWindowConstructorOptions [参考](https://www.electronjs.org/zh/docs/latest/api/browser-window#new-browserwindowoptions)
>
> customize 参考 src/electron.d.ts



### net.json(vue分支无此配置)

```json
{
  // 超时时间
  "timeout": 3000,
  //请求url
  "appUrl": "http://127.0.0.1:3000/",
  //socket请求主机 
  "socketUrl": "http://127.0.0.1:3000/",
  //socket请求路径  
  "socketPath": "/io"
}
```



### snowflake.json(主分支无此配置)

```json
{
    "workerId": 1,
    //数据中心id
    "dataCenterId": 1
}
```

> 此json为内置的一些模块提供雪花算法初始值



### update.json

```json
{
  //服务提供者
  "provider": "generic",
  //地址
  "url": "http://127.0.0.1/public",
  "dirname": "xps-electron-ts-vue3-template-updater"
}
```



