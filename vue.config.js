const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                // для передачі додаткових параметрів sass-loader
                sassOptions: {
                    // створення результуючого css без перетворення
                    outputStyle: "compressed"
                }
            }
        }
    }
};
