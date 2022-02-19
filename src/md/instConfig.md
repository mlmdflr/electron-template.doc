## 安装与运行



### 环境

- `*` node.js (版本>=`14.17.6`) 推荐当前长期维护版本
- git (或者在仓库手动下)
- [pnpm](https://pnpm.js.org/)/[yarn](https://yarnpkg.com/)/npm (推荐pnpm/yarn)
- 科学上网环境

> `*`:必须



### 下载仓库

#### git拉取

```shell
#主分支
git clone git@github.com:youliso/electron-template.git
#vue分支
git clone git@github.com:mlmdflr/xps-electron-vue-template.git
```



### 下载依赖

```shell
pnpm i
#or
yarn
#or
npm i
```

#### 注意

> pnpm需关闭链接 `pnpm i --shamefully-hoist` , 因为部分依赖会有链不到的情况



### 运行

```shell
[pnpm|yarn|npm] dev
```



### 打包发布

```shell
[pnpm|yarn|npm] build win|win32|win64|winp|winp32|winp64|darwin|mac|linux
#or
[pnpm|yarn|npm] build
>> Which platform is you want to build?
>> optional：win,win32,win64,winp,winp32,winp64,darwin,mac,linux    q exit
<< win32
```

>  `>>`  输出
>  
>  `<<`  输入

