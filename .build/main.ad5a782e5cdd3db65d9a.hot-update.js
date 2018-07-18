exports.id = "main";
exports.modules = {

/***/ "./template/server/server.js":
/*!***********************************!*\
  !*** ./template/server/server.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _templateObject = _taggedTemplateLiteral(['\\n  type Query {\\n    hello: String\\n  }\\n'], ['\\n  type Query {\\n    hello: String\\n  }\\n']);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _apolloServerExpress = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n// Construct a schema, using GraphQL schema language\nvar typeDefs = (0, _apolloServerExpress.gql)(_templateObject);\n\n// Provide resolver functions for your schema fields\nvar resolvers = {\n  Query: {\n    hello: function hello() {\n      return 'Hello world!';\n    }\n  }\n};\n\nvar server = new _apolloServerExpress.ApolloServer({\n  typeDefs: typeDefs,\n  resolvers: resolvers,\n  playground: {\n    settings: {\n      'editor.theme': 'light',\n      'editor.cursorShape': 'block'\n    }\n  }\n});\n\nvar app = (0, _express2.default)();\nserver.applyMiddleware({ app: app });\n\nvar _default = app;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(typeDefs, 'typeDefs', '/home/dobrin/create-react-apollo-app/template/server/server.js');\n  reactHotLoader.register(resolvers, 'resolvers', '/home/dobrin/create-react-apollo-app/template/server/server.js');\n  reactHotLoader.register(server, 'server', '/home/dobrin/create-react-apollo-app/template/server/server.js');\n  reactHotLoader.register(app, 'app', '/home/dobrin/create-react-apollo-app/template/server/server.js');\n  reactHotLoader.register(_default, 'default', '/home/dobrin/create-react-apollo-app/template/server/server.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./template/server/server.js?");

/***/ }),

/***/ "body-parser":
false,

/***/ "constants":
false,

/***/ "graphql":
false

};