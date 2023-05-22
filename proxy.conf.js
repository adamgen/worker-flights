const defaultTarget = "http://20.66.25.216:3000/";

module.exports = {
  "/api": {
    target: defaultTarget,
    secure: false,
    logLevel: 'debug',
    pathRewrite: {
      "^/api/": "http://20.66.25.216:3000/"
    }

  },
};
