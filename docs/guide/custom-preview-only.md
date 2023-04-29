# Preview only

You can configure your `VueColoris` components to hide the text input and show only the preview button.

:::tip
By default, the text input is **shown**.
:::

## Hiding the text input

To hide the text input, simply set the `previewOnly` option to `true`:

```vue
<template>
  <VueColoris
    :value="'pink'"
    :options="{ previewOnly: true }" // [!code focus]
  />
</template>
```

:::raw
  <VueColoris
    :value="'pink'"
    :options="{ previewOnly: true }"
  />
:::