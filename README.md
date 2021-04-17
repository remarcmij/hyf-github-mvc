# HYF-GITHUB-MVC

## Component function structure

```js
/**
 * Example component function.
 *
 * @param {HTMLElement} parent Parent element.
 * @param {Object} props Properties for the new component.
 */
function MyComponent(parent[, props]) {
  const {...} = props;

  const container = createComponent(parent, ...);

  // Use `container` as parent for child components
  // Use destructured props as and when needed

}
```
