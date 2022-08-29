/* eslint-disable */
if (!Object.values) {
    Object.values = function (o) {
        var keys = Object.keys(o);
        var out = [];
        for (var i = 0; i < keys.length; i++) {
            out.push(o[keys]);
        }
        return out;
    };
}

