const Koa = require('koa');
const app = new Koa();

app.listen(process.argv[2]);

app.use(async (ctx, next) => {
 try {
	await next();
 } catch (e) {
	ctx.status = 500;
	ctx.body = 'internal server error';
 }
});

app.use(async (ctx) => {
 if (ctx.path === '/error') {
	throw new Error('ooops');
 }
 ctx.body = 'OK';
});

