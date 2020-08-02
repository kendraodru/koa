const Koa = require('koa');
const app = new Koa();

// add date method to context
app.context.date = Date();
app.context.userData = {
    'first': 'Kendra',
    'last':'Odrunia'
}

app.use(ctx => {
    //use state
    ctx.state.name = 'Kendra Odrunia'

    // request object usage
    let from = ctx.request.origin
    let currMethod = ctx.request.method

    //print out name with date
    // ctx.body = `Hello ${ctx.state.name} on ${ctx.date}`
    // ctx.response.body = ctx.userData
    // ctx.response.body = ctx.userData.first
    ctx.response.body = `Hello ${ctx.userData.first} on ${ctx.date}`;

    console.log(from);
    console.log(currMethod);
});

app.listen(3000);