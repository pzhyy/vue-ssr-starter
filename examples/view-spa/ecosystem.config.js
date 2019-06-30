// Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
module.exports = {
  apps: [
    {
      name: 'view-spa',
      script: 'server/index.js',
      exec_mode: 'cluster',
      instances: 4,
      watch: false,
      autorestart: true,
      max_memory_restart: '256M',
      port: 3002,
      env: {
        NODE_ENV: 'production'
      },
      env_development: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
