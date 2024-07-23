# throw_

A package that provides a single function:

```ts
function throw_(thing: any): never
```

If `thing` **is a function**, `throw thing()` is executed,
otherwise `throw thing` is executed.

That's it.