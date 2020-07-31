# NodePicProcess

基于nodejs的简单图片处理服务

使用gm处理图片

## 安装

```
npm install
```

## 运行

```
npm start
```

当出现: Server listening on port x! 时即为运行成功 (x 为设置的端口号 默认是24454)

---
## 接口参数

- `w` 图片宽度,默认单位为px,默认值为null
- `h` 图片高度,默认单位为px,默认值为null
- `q` 图片质量,默认单位为%,默认值为null

### 说明

- 当宽度和高度之中只使用一个参数时 另一个参数则为自适应
    >http://www.example.com/a.webp?w=200 
    >或是
    >http://www.example.com/a.webp?h=200

- 在访问 http://www.example.com/a.webp 时,本地文件目录为./pic/a.webp
- 在config.js中有关于服务的一些设置 已经注释 有需要自己改