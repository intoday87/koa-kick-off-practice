const Koa = require('koa');
const app = new Koa();
app.keys = ['secret', 'keys'];

var session = require('koa-session');
app.use(session(app));

app.listen(process.argv[2]);

app.use(async (ctx) => {
 if (ctx.path === '/') {
	const prevViews = parseInt(ctx.session.views) || 0;
	const curViews = prevViews + 1;
	ctx.body = `${curViews} views`;
	ctx.session.views = curViews;
 }
});

