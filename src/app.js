
/**
 * basic koa
 */
const koa = require('koa')
const app = new koa();

// 跨域设置
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    await next();
});

app.use(async (ctx, next) => {
    if (ctx.request.path === '/api') {
        ctx.response.type = 'text/html'
        ctx.response.body = JSON.stringify({
            name: 'somwone',
            age: 18
        })
    }else{
        await next();
    }
})

const port = 8080;
const server = app.listen(port)
console.log(`The server is listening on ${port}...`);

module.exports = server;

