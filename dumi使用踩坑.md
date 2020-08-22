# Dumi 小白踩坑

最近学习 react，想做一个组件库，用来学习。但是碰到了一个问题，不知道 react 中是否有像 vuepress 一样的工具，从 umi =>father => dumi，最终使用了 dumi，一个专注写文档的好工具。但是官方文档有些地方说的不是很清楚，对于一个小白还是很恼火的。然后就写了本篇文档

## 一、dumi 的安装

### 创建文件夹

```zsh
mkdir myapp && cd myapp
```

### 初始化一个文档模式的组件库开发脚手架

```zsh
# 注意并没有安装依赖 只是生成的目录结构
yarn create @umijs/dumi-lib
#or
npx @umijs/create-dumi-lib
```

### 安装依赖

```zsh
# dumi官网没有说明安装依赖 但是umi官网上是有的
yarn install
#or
npm i
```

### 运行

```zsh
#然后在8000端口就看到网页了
yarn start
```

## 二 、dumi 中使用 sass

```zsh
# 基本不用配置 默认是 Dart Sass
yarn install -D @umijs/plugin-sass
```

如果要切换到 Node Sass，可安装 node-sass 依赖，然后配置

```ts
export default {
  sass: {
    implementation: require('node-sass'),
  },
};
```

## 三、 自己掉的坑

如果要部署到 github 上需要配置，否则会找不到 css js 文件

```tsx
base: '/仓库名',
publicPath: '/仓库名/',
exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
```

`react-dom classnames` 需要放在 dependencies, 否则 build 可能会报导出错误
