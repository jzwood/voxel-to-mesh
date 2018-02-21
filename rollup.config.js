// Rollup plugins
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/test.js',
  output: {
    file: 'examples/voxel.js',
    format: 'iife',
    name: 'example',
    //sourcemap: 'inline'
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
}
