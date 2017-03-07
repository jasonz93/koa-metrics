# koa-metrics
A metrics middleware for koa 2
This middleware is too simple that I wondered if it is nessesary to write this package...

## How to
```javascript
const Koa = require('koa');
const MonitorFactory = require('koa-metrics');
let app = new Koa();
app.use(MonitorFactory((metric) => {
    // When a request ended, this function will be called with a metric object.
    // It's just like this:
    // {
    //     method: 'GET',
    //     url: '/some/url/path',
    //     startAt: 1488859283123,
    //     duration: 100
    // }
    // Just do whatever you want
    console.log(metric);
}));

//Add other all middlewares after this
// app.use(some middleware);

app.listen();
```