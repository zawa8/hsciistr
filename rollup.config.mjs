// rollup.config.mjs
import typescript from '@rollup/plugin-typescript';
export default {
  input: 'src/hsciistr.ts',
  output: [
	{ file: 'dist/hsciistr.cjs.js', format: 'cjs', },
	{ file: 'dist/hsciistr.js', format: 'es', },
  ],
  plugins: [typescript()],
};
