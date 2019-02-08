const Koa = require('koa');
const app = new Koa();
app.keys = ['secret', 'keys'];

app.listen(process.argv[2]);

app.use(async (ctx) => {
 if (ctx.path === '/') {
	const prevViews = parseInt(ctx.cookies.get('view', {signed:true})) || 0;
	const curViews = prevViews + 1;
	ctx.body = `${curViews} views`;
	ctx.cookies.set('view', curViews, {signed:true});
 }
});

