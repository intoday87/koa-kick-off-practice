const Koa = require('koa');
const app = new Koa();

app.listen(process.argv[2]);

app.use(async (ctx, next) => {
 const start = new Date();
 await next();
 ctx.set('X-Response-Time', new Date() - start);
});

app.use(async (ctx, next) => {
	await next();
	if(typeof ctx.response.body === 'string') {
	 ctx.response.body = ctx.response.body.toUpperCase();
	}
});

app.use(async (ctx) => {
 ctx.body = 'hello koa';
});

