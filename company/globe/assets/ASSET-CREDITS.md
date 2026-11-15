# Earth texture

`earth-day.jpg` is the Earth diffuse texture distributed in the
[three.js examples](https://raw.githubusercontent.com/mrdoob/three.js/r180/examples/textures/planets/earth_atmos_2048.jpg).
The three.js examples credit Earth diffuse imagery to Sean Ward.
The [three.js license](THREE-LICENSE.txt) is included alongside this asset.

The texture is an illustrative composite, not a live satellite image.

The globe uses Three.js and OrbitControls, distributed under the same license.
`globe.bundle.js` embeds the texture to support opening the page locally. It
is generated from `globe.js` and the local `vendor` files with esbuild.
Run this command from the `globe` directory:
`npx esbuild globe.js --bundle --format=iife --minify --loader:.jpg=dataurl
--outfile=globe.bundle.js --alias:three=./vendor/three.module.min.js`.
