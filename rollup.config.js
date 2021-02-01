import copy from 'rollup-plugin-copy'
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const plugins = [
  copy({
    targets: [
      { src: 'src/assets/scss', dest: 'dist/assets' }
    ]
  }),
  typescript({
    tsconfig: 'tsconfig.build.json'
  })
];

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: 'src/entry.ts',
    output: {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    plugins,
  },
];
