# 移动端 1px 

问题出现原因：DPR 不同导致 主要发生在iOS 的retina 屏。

iOS 的retina 屏 的DPR 主要为 2 或 3 ，因此我们在移动端开发时就会有1px  导致在 设备物理像素中 出现 2px 的宽度。同时 这也说明了 px 是一个相对单位。



# 解决方案

## 使用0.5px

在2014年的 WWDC 提出 可以直接在iOS 端使用 0.5 px ,

**优点：**简单

**缺点：**兼容性较差，安卓不能使用此方法



## border-image

## background-image

## box-shadow

[CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) `**box-shadow**` 属性用于在元素的框架上添加阴影效果。你可以在同一个元素上设置多个阴影效果，并用逗号将他们分隔开。该属性可设置的值包括阴影的X轴偏移量、Y轴偏移量、模糊半径、扩散半径和颜色。

- 当给出两个、三个或四个`<length>`值时。
  - 如果只给出两个值, 那么这两个值将会被当作`offsetX,offsetY`来解释。
  - 如果给出了第三个值, 那么第三个值将会被当作`模糊半径`解释。
  - 如果给出了第四个值, 那么第四个值将会被当作`扩散半径`来解释。
- 可选，`inset`关键字。
- 可选，`color`值。

若要对同一个元素添加多个阴影效果，请使用逗号将每个阴影规则分隔开。

**inset**

如果没有指定`inset`，默认阴影在边框外，即阴影向外扩散。
使用 `inset` 关键字会使得阴影落在盒子内部，这样看起来就像是内容被压低了。 此时阴影会在边框之内 (即使是透明边框）、背景之上、内容之下。

```css
    box-shadow: 0px 0px 1px 0px #000;
```

上下左右边框均为1px ,如果需要单独设置某一条边，就需要设置便宜量和扩散半径。

**优点**：对于全边框容器实现

**缺点：**只是阴影而并不是真正意义上的边框。

## 伪元素

```css

    .box-wei {
      width: 100px;
      height: 100px;
      position: relative;
    }

    .box-wei::after {
      box-sizing: border-box;
      position: absolute;
      content: '';
      /* background-color: #000; */
      border: 1px solid #000;
      display: block;
      width: 200%;
      height: 200%;
      top: 0;
      left: 0;
      /*no*/
      transform: scale(0.5);
      /* 定位上边 */
      transform-origin: left top;
    }
```

使用伪元素画线时，主要要注意的地方就是0.5px 的线相对于父元素的定位问题，子绝父相。

## viewport的scale值

