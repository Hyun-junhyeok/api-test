const redis = require('redis') // 레디스 객체 생성
const redisClient = redis.createClient(
    6379,
    'redis-test.nahjzz.ng.0001.apn2.cache.amazonaws.com'
)

redisClient.on('error', function (err) {
    console.log('Redis error: ' + err);
});

redisClient.set('my_key', 'my_value', redis.print);

module.exports = redisClient;
