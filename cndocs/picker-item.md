---
id: picker-item
title: Picker.Item
---

Individual selectable item in a [Picker](picker.md).

### Props

* [`label`](picker-item.md#label)
* [`color`](picker-item.md#color)
* [`testID`](picker-item.md#testid)
* [`value`](picker-item.md#value)

---

# 文档

## Props

### `label`

Text to display for this item.

| 类型   | 必填 |
| ------ | -------- |
| string | 是      |

### `color`

The value to be passed to picker's `onValueChange` callback when this item is selected. Can be a string or an integer.

| 类型               | 必填 |
| ------------------ | -------- |
| [color](colors.md) | 否       |

### `testID`

Used to locate the item in end-to-end tests.

| 类型   | 必填 |
| ------ | -------- |
| string | 否       |

### `value`

Color of this item's text.

| 类型 | 必填 | 平台 |
| ---- | -------- | -------- |
| any  | 否       | Android  |
