#! /usr/bin/node

const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compiler = webpack(webpackConfig);

const app = express();

app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath }));

app.use(webpackHotMiddleware(compiler));

app.listen(3000, () => console.log('Listening on port 3000'));

