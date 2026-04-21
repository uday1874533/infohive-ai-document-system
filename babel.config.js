const fs = require('fs');
const path = require('path');

// Check if .env file exists, if not create an empty one
const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
  try {
    fs.writeFileSync(envPath, 'BACKEND_URL=\nRAZOR_PAY_KEY=\n', 'utf8');
  } catch (error) {
    // Ignore errors - allowUndefined will handle it
  }
}

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-dotenv-import',
        {
          moduleName: '@env',
          path: '.env',
          allowUndefined: true, // Allow undefined values if .env doesn't exist
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
