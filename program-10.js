const Koa = require('koa');
const app = new Koa();
app.keys = ['secret1', 'secret2', 'secret3'];

const session = require('koa-session');
app.use(session(app));

app.use(require('koa-bodyparser')());

app.listen(process.argv[2]);


app.use(async (ctx, next) => {
	if (ctx.path === '/') {
		if (ctx.session.login) {
			ctx.body = 'hello world'
		} else {
			ctx.status = 401;
		}
	}

	await next();
});


app.use(async (ctx, next) => {
	if (ctx.path === '/login' && ctx.method === 'POST') {
		const body = ctx.request.body;
		
		if (body && (body.username !== 'username' || body.password !== 'password')) {
			ctx.status = 400;
			return await next();
		} 

		ctx.session.login = true;
		ctx.redirect('/');
	}

	await next();
});


app.use(async (ctx) => {
	if (ctx.path === '/logout') { 
			ctx.session.login = false;
			ctx.redirect('/login');
	}
});

