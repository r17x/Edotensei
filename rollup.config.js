import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import {uglify} from 'rollup-plugin-uglify'

const env = process.env.NODE_ENV
const dirOut = 'dist'
const libName = 'edotensei'

const config = {
  input: 'src/index.js',
  output: {
    file: env === 'production'
      ? `${dirOut}/${libName}.min.js`
      : `${dirOut}/${libName}.js`,
    format: 'umd',
    globals: {},
    name: 'Edotensei',
    exports: 'named',
  },
  external: ['react'],
  plugins: [
    nodeResolve(),
    babel({
      exclude: '**/node_modules/**',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    commonjs(),
  ],
}

if (env === 'production') {
  config.plugins.push(uglify({
    compress: {
      dead_code: true,
      warnings: false,
    },
  }))
}

export default config
