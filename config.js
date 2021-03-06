module.exports = {
    jsonSecret: process.env.CORE_JSON_SECRET || '496d7e4d-eb86-4706-843b-5ede72fad0e8',
    jwtValidTimespan: process.env.CORE_JWT_TIMESPAN || '12h',
    authCookie: {
        ttl: process.env.CORE_AUTH_COOKIE_TTL === 'null' ? null : parseInt(process.env.CORE_AUTH_COOKIE_TTL || (1000 * 60 * 60 * 12)),
        isSecure: process.env.CORE_AUTH_COOKIE_IS_SECURE === 'true' ? true : false,
        isHttpOnly: process.env.CORE_AUTH_COOKIE_IS_HTTP_ONLY === 'false' ? false : true,
        isSameSite: process.env.CORE_AUTH_COOKIE_IS_SAME_SITE || 'Lax',
        path: process.env.CORE_AUTH_COOKIE_PATH || '/',
        domain: process.env.CORE_AUTH_COOKIE_DOMAIN || 'localhost'
    },
    redisJWTExpirationSeconds: process.env.REDIS_JWT_EXPIRATION_SECONDS || 43200, // this should match jwtValidTimespan, converted to seconds
    secret: process.env.CORE_SECRET || '6LfjumIUAAAAAI33bLW6by3Ny3QOE50YxvW_05q3',
    localTimezone: process.env.CORE_TIMEZONE || 'America/New_York',
    webAppUrl: process.env.CORE_APP_URL || 'http://localhost:8080',
    authWebAppUrl: process.env.AUTH_APP_URL || 'http://localhost:8081',
    limitEnabled: process.env.LIMIT_ENABLED || true,
    //number of total requests that can be made on a given path per period. Set to false to disable limiting requests per path.
    limitPath: process.env.LIMIT_PATH || 50,
    //number of total requests a user can make per period. Set to false to disable limiting requests per user.
    limitUser: process.env.LIMIT_USER || 300,
    trustProxy: process.env.LIMIT_TRUST_PROXY || false,
    headers: process.env.LIMIT_HEADERS || false,
    ipWhitelist: process.env.LIMIT_IP_WHITELIST || ["127.0.0.1"],
    pathCache: {
        expiresIn: process.env.LIMIT_USER_CACHE_EXPIRES || 60000
    },
    userPathCache: {
        expiresIn: process.env.LIMIT_USER_PATH_CACHE_EXPIRES || 60000
    },
    email: {
        smtpHost: process.env.CORE_SMTP_HOST || 'reperio-core-mail',
        smtpPort: process.env.CORE_SMTP_PORT || 25,
        smtpUser: process.env.CORE_SMTP_USER || '',
        smtpPassword: process.env.CORE_SMTP_USER_PASSWORD || '',
        sender: process.env.CORE_EMAIL_SENDER || 'do-not-reply@reper.io',
        sendGridApiKey: process.env.CORE_SENDGRID_API_KEY || '',
        method: process.env.CORE_EMAIL_METHOD || 'smtp', // must be either 'smtp' or 'sendgrid',
        rejectUnauthorizedTLS: process.env.CORE_SMTP_REJECT_UNAUTHORIZED_TLS || false,
        barUrl: process.env.CORE_BAR_URL || 'https://sms-gateway-test.reper.io/reperio-bar.png',
        linkTimeout: process.env.CORE_LINK_TIMEOUT || 10
    },
    redisOtpExpirationSeconds: process.env.REDIS_OTP_EXPIRATION_SECONDS || 60,
    db: {
        host: process.env.CORE_DB_HOST || 'reperio-core-postgres',
        port: process.env.CORE_DB_PORT || '5432',
        user: process.env.CORE_DB_USER || 'reperio',
        password: process.env.CORE_DB_PASSWORD || 'reperio',
        database: process.env.CORE_DB_DATABASE || 'reperio_platform_dev'
    },
    redis: {
        host: process.env.CORE_REDIS_HOST || 'reperio-core-redis',
        port: process.env.CORE_REDIS_PORT || 6379
    },
    logObfuscation: {
        properties: process.env.CORE_LOG_OBFUSCATION_PROPERTIES || ['password', 'confirmPassword', 'secretKey'],
        mask: process.env.CORE_LOG_OBFUSCATION_MASK || '**********'
    }
};
