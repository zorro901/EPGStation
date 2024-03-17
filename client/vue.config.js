module.exports = {
    transpileDependencies: ['vuetify'],
    publicPath: './',
    chainWebpack: config => {
        // ios で reload 時に更新内容が反映されないため
        config.plugins.delete('preload');
        config.plugin("fork-ts-checker").tap((args) => {
            args[0].memoryLimit = 4096;
            return args;
        });
    },
};
