const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(['import', {
        libraryName: 'antd', libraryDirectory: 'es', style: true
    }], config);
    config = rewireLess.withLoaderOptions({
        modifyVars: {
            "@primary-color": "#lime-8",
            "@layout-header-background": "#ADD8E6",
            "@layout-header-height": "48px"
        },
    })(config, env);
    return config;
};
