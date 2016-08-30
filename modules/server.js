_.server = {
    ks_Request_Handler: [],
    running: [],
    last_order: [],
    listen: function(handler, options) {
        if (options == undefined)
            options = {};
        if (options.domain == undefined)
            options.domain = "http://192.168.0.159:8080/?";
        if (options.id == undefined)
            options.id = 0;
        if (options.speed == undefined)
            options.speed = 1000;
        _.server.last_order[options.id] = 0;
        $.getScript(options.domain + "resetorder_" + options.id);
        clearInterval(_.server.ks_Request_Handler[options.id]);
        _.server.ks_Request_Handler[options.id] = function(data) {
            if (data != undefined) {
                if (data.id == options.id) {
                    if (data.number != _.server.last_order[options.id]) {
                        handler(decodeURIComponent(data.order));
                        _.server.last_order[options.id] = data.number;
                    }

                }

            }
        }
        _.server.running = setInterval(function(argument) {
            $.getScript(options.domain + "getorder_" + options.id);
        }, options.speed);
    },
    stop: function(handler, id, opt_domain) {
        clearInterval(_.server.running);
    },
    send: function(content, options) {
        if (options == undefined)
            options = {}
        if (options.domain == undefined)
            options.domain = "http://192.168.0.159:8080/?"
        if (options.id == undefined)
            options.id = 0;
        $.getScript(options.domain + "setorder_" + options.id + "_" + content);
    },
    reset: function(id, opt_domain) {
        _.server.last_order = 0;
        if (opt_domain == undefined)
            opt_domain = "http://192.168.0.159:8080/?"
        if (id == undefined)
            id = 0;
        $.getScript(opt_domain + "resetorder_" + id);
    }
};

_.module.add("server");
