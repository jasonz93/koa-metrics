/**
 * Created by nicholas on 17-3-7.
 */
'use strict';

function MonitorFactory(listener) {
    return (ctx, next) => {
        let startAt = new Date();
        next().then(() => {
            let duration = new Date() - startAt;
            listener({
                method: ctx.method,
                url: ctx.url,
                statusCode: ctx.res.statusCode,
                startAt: startAt,
                duration: duration
            });
        });
    };
}

module.exports = MonitorFactory;