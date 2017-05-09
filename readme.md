```
npm init -y
npm i webpack -D
npm i babel-loader babel-core babel-preset-env -D
```
```js
// webpack.config.js
const path = require('path');
module.exports = {
    entry: "./app",
    output: {
        path: path.resolve(__dirname, "app"),
        filename: "bundle.js",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: { presets: ['env'] }
            }
        ]
    }
}
```
# Resources JS (books)
* https://developer.mozilla.org/fr/docs/Web/JavaScript
* http://exploringjs.com/
* https://github.com/getify/You-Dont-Know-JS
* http://jsbooks.revolunet.com/
* https://github.com/oncletom/nodebook