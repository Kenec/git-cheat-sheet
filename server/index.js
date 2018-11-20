import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import webpack from 'webpack';
import compression from 'compression';
// import mongoose from 'mongoose';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevConfig from '../webpack.config.dev';
import webpackProdConfig from '../webpack.config.prod';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let compiler;

if (process.env.NODE_ENV !== 'production') {
  compiler = webpack(webpackDevConfig);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackDevConfig.output.publicPath
  }));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('./client/index.html'));
  });
} else {
  compiler = webpack(webpackProdConfig);

  app.use(compression());
  app.use(express.static('dist'));

  app.get('*', function(req, res) {
    res.sendFile(path.join( __dirname, '../dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`App started on PORT ${PORT}`)
});