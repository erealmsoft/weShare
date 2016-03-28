# WordPress网站加速优化
> by @dang 2016-03-24

## 压缩图片
* [png图片压缩网站](tinypng.com)
* 图片的高和宽最好符合其在页面上应该呈现的高和宽

## 减少网络请求，减小文件
* 合并css文件
* js文件进行压缩
* 资源文件多域名，绕开浏览器并发连接数限制
* CDN加速
* 浏览器缓存
* 去掉无用代码

## 服务器端
* Nginx开启gzip压缩
* Nginx设置缓存

```
location ~*\.(css|js|gif|jpe?g|png|woff)$
    ...
```

> 服务端的加速作用最明显

## 其他
* defer属性和async属性
* meta charset优先
* link资源优化
* js可以放在body里最后载入
* 启用local_storage存储固定数据：省市地多级数据

