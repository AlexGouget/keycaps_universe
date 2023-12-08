/** @type {import('next').NextConfig} */
const cron = require('node-cron');
cron.schedule('*/10 * * * *', function () {
    console.log('Say scheduled hello')
});


const nextConfig = {}

module.exports = nextConfig
