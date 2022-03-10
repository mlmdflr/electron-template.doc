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