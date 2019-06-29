// Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
module.exports = {
  apps: [
    {
      name: 'view-mvc',
      script: 'app.js',
      exec_mode: 'cluster',
      instances: 4,
      watch: false,
      autorestart: true,
      max_memory_restart: '256M',
      port: 3004,
      env: {
        NODE_ENV: 'development'
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
