"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var _webpack = _interopRequireDefault(require("webpack"));

var _compression = _interopRequireDefault(require("compression"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _webpackDevMiddleware = _interopRequireDefault(require("webpack-dev-middleware"));

var _webpackHotMiddleware = _interopRequireDefault(require("webpack-hot-middleware"));

var _webpackConfig = _interopRequireDefault(require("../webpack.config.dev"));

var _webpackConfig2 = _interopRequireDefault(require("../webpack.config.prod"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var PORT = process.env.PORT || 3000;
var compiler, connectionString;

if (process.env.NODE_ENV === 'production') {
  connectionString = process.env.PROD_DATABASE_URL;
} else if (process.env.NODE_ENV === 'test') {
  connectionString = process.env.TEST_DATA_URL;
} else {
  connectionString = process.env.DEV_DATABASE_URL;
}

_mongoose.default.connect(connectionString, {
  useNewUrlParser: true
});

var db = _mongoose.default.connection;
db.once('open', function () {
  console.log('We are connected!');
});
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use('/api', _routes.default);

if (process.env.NODE_ENV !== 'production') {
  compiler = (0, _webpack.default)(_webpackConfig.default);
  app.use((0, _webpackHotMiddleware.default)(compiler));
  app.use((0, _webpackDevMiddleware.default)(compiler, {
    noInfo: true,
    publicPath: _webpackConfig.default.output.publicPath
  }));
  app.get('*', function (req, res) {
    res.sendFile(_path.default.resolve('./client/index.html'));
  });
} else {
  compiler = (0, _webpack.default)(_webpackConfig2.default);
  app.use((0, _compression.default)());
  app.use(_express.default.static('dist'));
  app.get('*', function (req, res) {
    res.sendFile(_path.default.join(__dirname, '../dist/index.html'));
  });
}

app.listen(PORT || 3000, function () {
  console.log("App started on PORT ".concat(PORT));
});