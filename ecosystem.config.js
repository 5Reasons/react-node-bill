module.exports = {
    apps: [
      {
        name: 'juejue-vite-h5',
        script: 'juejue-vite-h5-server.js'
      },
    ],
    deploy: {
      production: {
        user: 'root',
        host: '124.221.227.61',
        ref: 'origin/main',
        repo: 'git@github.com:5Reasons/node-bill-server.git',
        path: '/workspace/node-bill-server',
        'post-deploy': 'git reset --hard && git checkout main && git pull && npm i --production=false && npm run build:release && pm2 startOrReload ecosystem.config.js', // -production=false 下载全量包
        env: {
          NODE_ENV: 'production'
        }
      }
    }
  }