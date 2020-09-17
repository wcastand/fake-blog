import { roboto } from '@theme-ui/presets'

export default {
  ...roboto,
  sizes: { ...roboto.sizes, container: 768, full: '100%' },
  styles: {
    ...roboto.styles,
    img: { maxWidth: 'full' },
  },
}
