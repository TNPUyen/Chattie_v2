const server = require('./src/core/server');
const config = require('./src/core/config');

server.listen( config.PORT , () => {
    console.log('Server is running');
})