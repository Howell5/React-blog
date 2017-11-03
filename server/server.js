import Koa from 'koa';
import views from 'koa-views';
import path from 'path';
import koa_static from 'koa-static';

const app = new Koa();
app.use(koa_static(path.join(__dirname, '../build')));

app.use(views(path.join(__dirname, '../client/view'), {
  extension: 'html',
}));

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// response
app.use(async (ctx) => {
  await ctx.render('index.html');
});
app.listen(8080);
console.log('系统启动，端口：8080');
module.exports = app;
