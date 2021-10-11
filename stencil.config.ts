import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'rfc-3986-example',
  sourceMap: true,
  minifyJs: true,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
