---
id: viewpagerandroid
title: ViewPagerAndroid
---

一个允许在子视图之间左右翻页的容器。每一个ViewPagerAndroid的子容器会被视作一个单独的页，并且会被拉伸填满ViewPagerAndroid。

注意所有的子视图都必须是纯View，而不能是自定义的复合容器。你可以给每个子视图设置样式属性譬如padding或backgroundColor。

例如:

```
render: function() {
  return (
    <ViewPagerAndroid
      style={styles.viewPager}
      initialPage={0}>
      <View style={styles.pageStyle} key="1">
        <Text>First page</Text>
      </View>
      <View style={styles.pageStyle} key="2">
        <Text>Second page</Text>
      </View>
    </ViewPagerAndroid>
  );
}

...

var styles = {
  ...
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  }
}
```

### 属性

* [View props...](view.md#props)

- [`initialPage`](viewpagerandroid.md#initialpage)
- [`keyboardDismissMode`](viewpagerandroid.md#keyboarddismissmode)
- [`onPageScroll`](viewpagerandroid.md#onpagescroll)
- [`onPageScrollStateChanged`](viewpagerandroid.md#onpagescrollstatechanged)
- [`onPageSelected`](viewpagerandroid.md#onpageselected)
- [`pageMargin`](viewpagerandroid.md#pagemargin)
- [`peekEnabled`](viewpagerandroid.md#peekenabled)
- [`scrollEnabled`](viewpagerandroid.md#scrollenabled)

### 类型定义

* [`ViewPagerScrollState`](viewpagerandroid.md#viewpagerscrollstate)

---

# 文档

## 属性

### `initialPage`

初始选中的页的下标。你可以用setPage 函数来翻页，并且用onPageSelected来监听页的变化。

| 类型   | 必填 |
| ------ | -------- |
| number | 否       |

---

### `keyboardDismissMode`


决定在滑动的时候是否要让软键盘消失。

* none （默认值），拖拽不会让键盘消失。
* on-drag， 当拖拽开始的时候会让键盘消失。

| 类型                    | 必填 |
| ----------------------- | -------- |
| enum('none', 'on-drag') | 否       |

---

### `onPageScroll`


当在页间切换时（不论是由于动画还是由于用户在页间滑动/拖拽）执行。

回调参数中的event.nativeEvent对象会包含如下数据：

* position 从左数起第一个当前可见的页面的下标。
* offset 一个在[0,1)（大于等于0，小于1）之间的范围，代表当前页面切换的状态。值x表示现在"position"所表示的页有(1 - x)的部分可见，而下一页有x的部分可见。

| 类型     | 必填 |
| -------- | -------- |
| function | 否       |

---

### `onPageScrollStateChanged`

页面滑动状态变化时调用此回调函数。页面滑动状态可能为以下三种之一：

* idle 空闲，意味着当前没有交互。
* dragging 拖动中，意味着当前页面正在被拖动。
* settling 处理中，意味着当前页面发生过交互，且正在结束开头或收尾的动画。

| 类型     | 必填 |
| -------- | -------- |
| function | 否       |

---

### `onPageSelected`

这个回调会在页面切换完成后（当用户在页面间滑动）调用。

回调参数中的event.nativeEvent对象会包含如下的字段：

* position 当前被选中的页面下标

| 类型     | 必填 |
| -------- | -------- |
| function | 否       |

---

### `pageMargin`

页面滑动时两个页面之间的间距。仅仅在滑动时可见，页面之间仍然时边对边的。

| 类型   | 必填 |
| ------ | -------- |
| number | 否       |

---

### `peekEnabled`

是否在当前页滑动时展示前一页或者后一页，默认为false

| 类型 | 必填 |
| ---- | -------- |
| bool | 否       |

---

### `scrollEnabled`

设为false时可禁止滚动。默认值为true

| 类型 | 必填 |
| ---- | -------- |
| bool | 否       |

## Type Definitions

### ViewPagerScrollState

| 类型  |
| ----- |
| $Enum |

**Constants:**

| Value    | 说明 |
| -------- | ----------- |
| idle     |             |
| dragging |             |
| settling |             |
