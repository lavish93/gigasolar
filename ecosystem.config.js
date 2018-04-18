module.exports = {
  apps : [
      {
        name: "gigasolar",
        script: "./index.js",
        watch: true,
        env: {
            "PORT": 8080,//you can choose
            "NODE_ENV": "development"
        },
        env_production: {
            "PORT": 3000,//you can choose
            "NODE_ENV": "production",
        }
      }
  ]
}
