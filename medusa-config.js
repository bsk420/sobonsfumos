const dotenv = require("dotenv");

let ENV_FILE_NAME = "";
switch (process.env.NODE_ENV) {
  case "production":
    ENV_FILE_NAME = ".env.production";
    break;
  case "staging":
    ENV_FILE_NAME = ".env.staging";
    break;
  case "test":
    ENV_FILE_NAME = ".env.test";
    break;
  case "development":
  default:
    ENV_FILE_NAME = ".env";
    break;
}

try {
  dotenv.config({ path: process.cwd() + "/" + ENV_FILE_NAME });
} catch (e) {}

const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

const DATABASE_URL =
  process.env.DATABASE_URL || "postgres://localhost/medusa-starter-default";

  const plugins = [
    `medusa-fulfillment-manual`,
    `medusa-payment-manual`,
    {
      resolve: `medusa-file-minio`,
      options: {
          endpoint: 'https://bucket-production-8051.up.railway.app',
          bucket: 'medusa-products',
          private_bucket: 'priva',
          access_key_id: 'Xnu8oP8kga8GpD8hrV8g',
          secret_access_key: '8wIEe0ksYP9Pt6g4g6JVcR0U1bbuTy2F0WMa6ckw',
      },
    },
    {
      resolve: "@medusajs/admin",
      /** @type {import('@medusajs/admin').PluginOptions} */
      options: {
        serve: true,
        autoRebuild: false,
        path: "/app",
        outDir: "build",
        develop: {
          open: true,
        },
      },
    },
    {
      resolve: `medusa-payment-stripe`,
      options: {
        api_key: process.env.STRIPE_API_KEY,
        webhook_secret: process.env.STRIPE_WEBHOOK_SECRET,
        capture: true,
        automatic_payment_methods: true,
        payment_description: 'SBFTV'
      },
    },
    {
      resolve: `medusa-plugin-sendgrid`,
      options: {
        api_key: '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',
        from: 'no-reply@sbftv.com',
        order_placed_template: 
          'd-0481b4dda6204b7f8080e255dc20b6c6',
        order_canceled_template:
          'd-0481b4dda6204b7f8080e255dc20b6c6',
        order_shipped_template:
          'd-0481b4dda6204b7f8080e255dc20b6c6',
      },
    },
  ];
  
  const modules = {
    eventBus: {
      resolve: "@medusajs/event-bus-redis",
      options: {
        redisUrl: REDIS_URL
      }
    },
    cacheService: {
      resolve: "@medusajs/cache-redis",
      options: {
        redisUrl: REDIS_URL
      }
    },
  };

/** @type {import('@medusajs/medusa').ConfigModule["projectConfig"]} */
const projectConfig = {
  jwt_secret: 'gxFL9XD4711FnYUoS3MatfRkJ28OHd4K',
  cookie_secret: 'xcSMvTV4fr6ObttpRfhs9iD0E2Q4AO6M',
  store_cors: '/sbftv\.com$/',
  admin_cors: '/sbftv\.com$/',
  worker_mode: process.env.MEDUSA_WORKER_MODE,
  database_url: DATABASE_URL,
  redis_url: REDIS_URL,
  database_extra: { ssl: { rejectUnauthorized: false } },
  database_driver_options: { connection: { ssl: { rejectUnauthorized: false } } }
};

/** @type {import('@medusajs/medusa').ConfigModule} */
module.exports = {
  projectConfig,
  plugins,
  modules,
};
