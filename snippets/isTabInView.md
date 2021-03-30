## 检查当前 Tab 页是否在前台
我们可以通过使用 `document.hidden` 属性来检查当前标签页是否在前台中。

```js
const isBrowserTabInView = () => document.hidden;

isBrowserTabInView();

// Result: returns true or false depending on if tab is in view / focus
```