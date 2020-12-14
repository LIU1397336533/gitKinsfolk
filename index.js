const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const Router = require('koa-router');
// 实例化APP
const app = new Koa();
// 实例化路由
const router = new Router();

// cors: 跨资源共享；
app.use(async (ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    ctx.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    ctx.set("Access-Control-Allow-Credentials", "true");
    ctx.set("Access-Control-Max-Age", 86400);
    await next();
})

// router.get('/data', async (ctx) => {

//     // 查询字符串对象
//     console.log(ctx.query);
//     // 查询字符串
//     console.log(ctx.querystring);
//     ctx.body = ctx.query
// });

// router.get('/v1/data', async (ctx) => {
//     console.log('params:', ctx.params);
//     // 查询字符串对象
//     console.log(ctx.query);
//     // 查询字符串
//     console.log(ctx.querystring);
//     ctx.body = ctx.query;
// });

// router.get('/v2/data', async (ctx) => {
//     console.log('params:', ctx.params);
//     // 查询字符串对象
//     console.log(ctx.query);
//     // 查询字符串
//     console.log(ctx.querystring);
//     ctx.body = ctx.query;
// });

//  http://localhost:3001/data
router.post('/data', async (ctx) => {
    // ctx.body = ctx.request.body;
    console.log('body', ctx.request.body);
    console.log('query', ctx.request.query);
    ctx.body = {
        code: 200,
        params: ctx.request.body,
        message: '我是post请求',
        data: [{
                name: '赵上坤',
                grade: 80
            },
            {
                name: '王迪',
                grade: 90
            },
            {
                name: '李文利',
                grade: 95
            },
            {
                name: '孔祥斌',
                grade: 59
            }
        ]
    }
});


router.get('/list', async (ctx) => {
    console.log('我是get请求');
    // setTimeout(() => {
    '/list?id=nvzhaung&age=20'
    console.log(ctx.request.query)
    // var url = ctx.request.url
    // var reg = /(\w+)=(\w+)/g;
    // var query = {}
    // url.replace(reg, function (data, v1, v2) {
    //     query[v1] = v2;
    // })
    // console.log(query);
    var data = [];
    if (ctx.request.query.id == 'nvzhaung') {
        data = ['高跟鞋', '小裙子'];
    } else if (ctx.request.query.id == 'nanzhaung') {
        data = ['皮鞋', '衬衫'];
    }
    ctx.body = {
        code: 200,
        message: '我是get请求',
        params: ctx.request.query,
        data: data
    };
    // }, 1000)

});



// 挂载解析参数
app.use(bodyParser());

// 挂在路由
app.use(router.routes());

app.use(async (ctx, next) => {
    // GET search
    console.log(ctx.query);
    // POST
    console.log(ctx.request.body);


    // if (ctx.method === 'POST') {
    //     ctx.body = ctx.request.body;
    // }

    // if (ctx.method === 'GET') {
    //     ctx.body = {
    //         name: 'hyj',
    //         age: 18,
    //         sex: 'boy',
    //         tall: 180
    //     }
    // }
});

console.log('3001');
app.listen(3001);