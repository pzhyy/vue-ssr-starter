// Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
module.exports = {
  apps: [
    {
      name: 'mock-server',
      script: 'json-server',
      args: '--host 0.0.0.0 --port 3000 db.json',
      exec_mode: 'cluster',
      instances: 1,
      watch: false,
      autorestart: true,
      max_memory_restart: '256M',
    }
  ]
}
