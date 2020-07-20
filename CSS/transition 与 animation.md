# transition 与 animation

## transition

**`transition`** [CSS](https://developer.mozilla.org/en/CSS) 属性是 [`transition-property`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-property)，[`transition-duration`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-duration)，[`transition-timing-function`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function) 和 [`transition-delay`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-delay) 的一个[简写属性](https://developer.mozilla.org/en-US/docs/CSS/Shorthand_properties)。



transition 是从一个状态到另一个状态的过程，类似于 form  to .

## animation

```css
animation: name duration timing-function delay iteration-count direction fill-mode;
```

先定义动画，动画可以划分为多个不同的状态，

direction 可以设置动画的方向，比如从头开始 normal 或者是反向继续 reverse。