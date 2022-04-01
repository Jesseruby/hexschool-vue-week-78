const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hexschool-vue-week-78/' //資料夾路徑，gh-page 儲存庫名稱
    : '/'
};
