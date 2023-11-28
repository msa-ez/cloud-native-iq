module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/cloud-native-iq/'
        : '/',
    devServer: {
        disableHostCheck: true,
    },
};
