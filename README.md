# HYF-GITHUB-MVC

## Component structure

```js
function MyComponent(parent[, props]) {
  const {...} = props;

  const container = createComponent(parent, ...);

  // Use `container` as parent for child components
  // Use destructured props as and when needed

}
```
