# hyper-nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> hybrid SSR Generation for nuxt 

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `hyper-nuxt` dependency to your project

```bash
yarn add hyper-nuxt # or npm install hyper-nuxt
```

2. Add `hyper-nuxt` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'hyper-nuxt',

    // With options
    ['hyper-nuxt', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) steven <stv.chm@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/hyper-nuxt/latest.svg
[npm-version-href]: https://npmjs.com/package/hyper-nuxt

[npm-downloads-src]: https://img.shields.io/npm/dt/hyper-nuxt.svg
[npm-downloads-href]: https://npmjs.com/package/hyper-nuxt

[github-actions-ci-src]: https://github.com/stvchm9703/hyper-nuxt/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/stvchm9703/hyper-nuxt/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/stvchm9703/hyper-nuxt.svg
[codecov-href]: https://codecov.io/gh/stvchm9703/hyper-nuxt

[license-src]: https://img.shields.io/npm/l/hyper-nuxt.svg
[license-href]: https://npmjs.com/package/hyper-nuxt
