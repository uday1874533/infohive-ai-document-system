const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

config.resolver.resolveRequest = (context, moduleName, platform) => {
    if (moduleName === 'axios') {
        return {
            filePath: path.resolve(__dirname, 'node_modules/axios/dist/browser/axios.cjs'),
            type: 'sourceFile',
        };
    }
    // Ensure we call the default resolver
    return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
