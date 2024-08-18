function getProductionConfig() {
    return {
        environment: 'production',
        debug: false,
        version: '1.0.0'
    };
}

function getDevelopmentConfig() {
    return {
        environment: 'development',
        debug: true,
        version: '1.0.0-beta'
    };
}

const param = true; // Example condition
const config = param ? getProductionConfig() : getDevelopmentConfig();

console.log(config);
