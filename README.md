# Basic React dev environment with hot loading

### Requirements

Built using


```
Node.js:   6.9.5  
npm:       3.10.10
```


### Usage

Hot loading / live-editing React components is enabled.

```
npm install
npm start
open http://localhost:3000
```


#### WebStorm Users

Because the WebStorm IDE uses "safe writes" by default, Webpack's file-watcher won't recognize file changes, so hot-loading won't work. To fix this, disable "safe write" in WebStorm.


### Building

A basic production script is included that builds your app to a `dist` folder

```
npm run build
```


### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

---


### Tests
* Run ```npm test``` for a single run
* Run ```npm run test:watch``` to re-execute tests when the files change
