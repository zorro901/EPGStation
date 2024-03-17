const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const os=require('os');

module.exports = {
    transpileDependencies: ['vuetify'],
    publicPath: './',
    chainWebpack: config => {
        // ios で reload 時に更新内容が反映されないため
        config.plugins.delete('preload');
        config
            .plugin('fork-ts-checker')
            .tap(args => {
                let totalmem=Math.floor(os.totalmem()/1024/1024); //get OS mem size
                let allowUseMem= totalmem>2500? 2048:1000;
                // in vue-cli shuld args[0]['typescript'].memoryLimit
                args[0].memoryLimit = allowUseMem;
                return args
            })
    },
};
