const config = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.MONGODB_URI || 'mongodb://teodeo:zxcxz123@ds155823.mlab.com:55823/base',
    JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;