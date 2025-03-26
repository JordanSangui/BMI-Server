import { Env } from '@adonisjs/core/env';
export default await Env.create(new URL('../', import.meta.url), {
    NODE_ENV: Env.schema.enum(['development', 'production', 'test']),
    PORT: Env.schema.number(),
    APP_KEY: Env.schema.string(),
    HOST: Env.schema.string({ format: 'host' }),
    LOG_LEVEL: Env.schema.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']),
    SMTP_HOST: Env.schema.string(),
    SMTP_PORT: Env.schema.string(),
    REDIS_HOST: Env.schema.string({ format: 'host' }),
    REDIS_PORT: Env.schema.number(),
    REDIS_PASSWORD: Env.schema.string.optional(),
    TYPESENSE_HOST: Env.schema.string(),
    TYPESENSE_PORT: Env.schema.string(),
    TYPESENSE_PROTOCOL: Env.schema.string(),
    TYPESENSE_API_KEY: Env.schema.string(),
});
//# sourceMappingURL=env.js.map