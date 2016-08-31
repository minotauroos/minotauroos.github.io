/*
    -1.0.0 : 
        REMODEL
    -1.2.0 : 
        Amazing improvements
    -1.3.0 : 
        WebComps again :P
*/

String.prototype.contains = function (it) {
    return this.indexOf(it) != -1;
};
String.prototype.startsWith = function (a) {
    return 0 == this.indexOf(a)
};
String.prototype.replaceAll = function (f, r) {
    return this.split(f).join(r);
};
String.prototype.replaceAt = function (index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
}
_ = {
    server: {
        listen: function (opt, callbackFN) {
            if (opt == undefined)
                opt = {}
            if (opt.host == undefined)
                opt.host = "192.168.0.159";
            if (opt.receiver == undefined)
                opt.receiver = "1";
            if (opt.speed == undefined)
                opt.speed = 5000;
            var rndReceiverNumb = (new Date().getTime() + Math.random()).toString().replace(".", "");
            $.getScript("http://" + opt.host + "/&reset=" + opt.receiver); //reinciar
            var caller = window["__metaCallback" + rndReceiverNumb] = function (received) {
                if (window["__metaCallback" + rndReceiverNumb].last == undefined)
                    window["__metaCallback" + rndReceiverNumb].last = "0";
                if (window["__metaCallback" + rndReceiverNumb].last != received.split(":/separator/:id")[1]) {
                    callbackFN(decodeURIComponent(received.split(":/separator/:id")[0]));
                    window["__metaCallback" + rndReceiverNumb].last = received.split(":/separator/:id")[1];
                }
            }
            var intervaller = setInterval(function () {
                try {
                    $.getScript("http://" + opt.host + "/&receive=" + opt.receiver + "&callback=" + "__metaCallback" + rndReceiverNumb).fail(function (jqxhr, settings, exception) {
                        clearInterval(intervaller);
                        console.log("err");
                    });
                } catch (ex) { console.log(ex.message); clearInterval(intervaller); }
            }, opt.speed);
        },
        send: function (opt) {
            if (opt == undefined)
                opt = {}
            if (opt.host == undefined)
                opt.host = "192.168.0.159";
            if (opt.receiver == undefined)
                opt.receiver = "1";
            if (opt.message == undefined)
                opt.message = "nomessage";
            $.getScript("http://" + opt.host + "/&send=" + opt.receiver + "=" + opt.message);
        }
    },
    log: function (argument, type) {
        if (_.tmp_hiddenlog == undefined) {
            _.tmp_hiddenlog = [];
            _.tmp_hiddenlog_count = 0;
            _.log.get = function (argument) {
                if (argument == undefined)
                    return _.tmp_hiddenlog;
                var toReturn = [];
                _.each(_.log.get(), function (log) {
                    if (argument == log.type)
                        toReturn.push(log)
                });
                return toReturn;
            }
        }
        if (argument == undefined)
            return "no args"
        if (type == undefined)
            type = "default"
        _.tmp_hiddenlog.push({
            id: _.tmp_hiddenlog_count,
            date: new Date(),
            data: argument,
            type: type
        });
        _.tmp_hiddenlog_count++;
    },
    scrap: {
        exists: function (selector) {
            return !!document.querySelectorAll(selector);
        },
        remove: function (selector) {
            _.each(document.querySelectorAll(selector), function (element) {
                element.parentNode.removeChild(element);
            });
        }
    },
    comp: {
        has: function (parent, childSelector) {
            if ($(parent).has(childSelector).length) {
                return true;
            } else {
                return false;
            }
        }
    },
    array: { //ARRAY
        contains: function (arr, val) {
            var tr = false;
            _.each(arr, function (vals) {
                if (vals == val)
                    tr = true;
            });
            return tr;
        }
    },
    int: { //INT
        random: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    },
    string: { //STRING
        capFirst: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
    },
    event: { //EVENT
        keyboardChanged: function (fnCalled) {
            if (_.device.isTouch()) {
                _.inner.is_keyboard = false;
                _.inner.is_landscape = false;
                _.inner.initial_screen_size = window.innerHeight;
                window.addEventListener("resize", function () {
                    _.inner.is_keyboard = (window.innerHeight < _.inner.initial_screen_size);
                    _.inner.is_landscape = (screen.height < screen.width);
                    fnCalled(_.inner.is_keyboard);
                }, false);
            }
        },
        keyboardShown: function (fnCalled) {
            if (_.device.isTouch()) {
                _.inner.is_keyboard = false;
                _.inner.is_landscape = false;
                _.inner.initial_screen_size = window.innerHeight;
                window.addEventListener("resize", function () {
                    _.inner.is_keyboard = (window.innerHeight < _.inner.initial_screen_size);
                    _.inner.is_landscape = (screen.height < screen.width);
                    if (_.inner.is_keyboard) {
                        fnCalled();
                    }
                }, false);
            }
        },
        keyboardHidden: function (fnCalled) {
            if (_.device.isTouch()) {
                _.inner.is_keyboard = false;
                _.inner.is_landscape = false;
                _.inner.initial_screen_size = window.innerHeight;
                window.addEventListener("resize", function () {
                    _.inner.is_keyboard = (window.innerHeight < _.inner.initial_screen_size);
                    _.inner.is_landscape = (screen.height < screen.width);
                    if (!_.inner.is_keyboard) {
                        fnCalled();
                    }
                }, false);
            }
        }
    },
    performance: { //PERFORMANCE
        runTime: function (fn) {
            var start = performance.now();
            fn();
            return performance.now() - start;
        }
    },
    device: {
        type: function () {
            if ($(window).height() <= "840") {
                return "small";
            }
            if ($(window).height() <= "1000") {
                return "medium";
            }
            return "large";
        },
        isTouch: function (argument) {
            return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
        }
    },
    version: "1.3.1",
    require: function (library, cb) {
        if (cb == undefined)
            cb = function (argument) { }
        switch (library) {
            case "theme":
                try {
                    return _.ui_builder.theme;
                } catch (ex) { }

                break;
            case "yahoo-weather":
                try {
                    return _.yahoo_weather_api;
                } catch (ex) { }
                break;
            case "python":
                try {
                    if (_.skulp.run) {
                        cb();
                        return _.skulp;
                    }
                } catch (ex) { }
                $.getScript("http://www.skulpt.org/static/skulpt.min.js").done(function (argument) {
                    $.getScript("http://www.skulpt.org/static/skulpt-stdlib.js").done(function (argument) {
                        var tried_times = 0;
                        var sheddy = setInterval(function (argument) {
                            tried_times++;
                            if (tried_times > 10) {
                                clearInterval(sheddy);
                            }
                            try {
                                if (Sk != undefined) {
                                    clearInterval(sheddy);
                                    _.skulp.run = function (argument) {
                                        var prog = argument;
                                        Sk.configure({
                                            output: function (argument) {
                                                console.log(argument);
                                            },
                                            read: function (x) {
                                                if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
                                                    throw "File not found: '" + x + "'";
                                                return Sk.builtinFiles["files"][x];
                                            }
                                        });
                                        var myPromise = Sk.misceval.asyncToPromise(function () {
                                            return Sk.importMainWithBody("<stdin>", false, prog, true);
                                        });
                                        myPromise.then(function (mod) {
                                            //console.log('success');
                                        },
                                            function (err) {
                                                //console.log(err.toString());
                                            });
                                    }
                                    cb();
                                }
                            } catch (ex) { }
                        }, 200);
                    });
                });
                _.skulp = {};
                return _.skulp;
                break;
            case "speak":
                try {
                    return _.speak_api;
                } catch (ex) { }

                break;
            case "ui-builder":
                try {
                    return _.ui_builder;
                } catch (ex) { }

                break;
            case "wikipedia":
                try {
                    return _.wikipedia_api;
                } catch (ex) { }

                break;
            case "anim":
                try {
                    return _.library_animVersion2;
                } catch (ex) { }

                break;
            case "continuum":
                try {
                    return _.continuum_api;
                } catch (ex) { }

                break;
            case "anim2":
                try {
                    return _.library_animVersion2;
                } catch (ex) { }

                break;
            default:
                try {
                    if (cb == undefined)
                        cb = function () { }
                    $.getScript(library, function (data, textStatus, jqxhr) {
                        cb();
                    });
                } catch (ex) { }
                break;

        }
    },
    write: function (argument) {
        $("body").append(argument);
        if (_.writeToConsoleToo)
            console.log(argument);
    },
    safe: function (fn, defTime) {
        if (defTime == undefined) {
            defTime = 100;
        }
        setTimeout(fn, defTime);
    },
    reload: function (eraseAll) {
        if (eraseAll == undefined)
            eraseAll = false;

        if (eraseAll) {
            localStorage.clear();
        }
        window.location.reload();
    },
    cc: function (v, f) {
        if (f == undefined) {
            return {
                w: parseInt($(window).width() / 100 * (v)),
                h: parseInt($(window).height() / 100 * (v))
            }
        } else {
            return {
                w: parseInt(f.w / 100 * (v)),
                h: parseInt(f.h / 100 * (v))
            }
        }

    },
    call: function (functionName, context /*, args */) {
        var args = [].slice.call(arguments).splice(2);
        var namespaces = functionName.split(".");
        var func = namespaces.pop();
        for (var i = 0; i < namespaces.length; i++) {
            context = context[namespaces[i]];
        }
        return context[func].apply(context, args);
    },
    importLib: function (argument) {
        $.each(Object.keys(_), function (index, object) {
            console.log(object.toString());
            window[object.toString()] = _[object.toString()];
        });
        return "Success";
    },
    import: function (elque) {
        _._importing_something = true;
        _._importing_current++;
        $.getScript(elque)
            .done(function (script, textStatus) {
                _._importing_current--;
                if (!_.main_already_called && _._importing_current == 0) {
                    main();
                }
            })
            .fail(function (jqxhr, settings, exception) {
                _._importing_current--;
            });
    },
    each: function (contenedor, funcAllamar) {
        for (var i = 0; i < contenedor.length; i++) {
            funcAllamar(contenedor[i], i);
        }
        return contenedor;
    },
    clear: function (argument) {
        _.ui.clear();
    },
    createJSONFile: function (url) {
        return "nativeDownloader_download(" + JSON.stringify(url) + ")";
    },
    http: {
        ajax: function (url, succ, err) {
            $.ajax({
                url: url,
                cache: false,
                success: succ,
                timeout: 3000,
                error: err
            });
        },
        get: function (url, sync, fn) {
            try {
                if (sync == undefined)
                    sync = true;
                if (fn == undefined)
                    fn = function (argument) {
                        console.log(argument);
                    }
                var response = $.ajax({
                    url: url,
                    cache: false,
                    async: !sync,
                    error: function (XMLHttpRequest, textStatus, errorThrown) {

                    },
                    success: function (html) {
                        if (!sync)
                            fn(html);
                    },
                    timeout: 3000
                });
                if (response.statusText == "OK") {
                    return response.responseText;
                } else {
                    return false;
                }
            } catch (ex) {
                console.log(ex.message);
                return false;
            }

        },
        getScript: function (url) {
            $.getScript(url);
            return "Success"
        }
    },
    module: {
        list: [],
        add: function (name) {
            _.module.list.push(name);
        }
    }
};
_.main_already_called = false;
_._importing_current = 0;



function l(s, t) {
    if (!t) {
        try {
            output.prepend(s + "<br>");
            console.log(s);
        } catch (ex) { console.log(ex.message) + " at l" }
    } else {
        try {
            output.prepend(s.replaceAll("[ok]", "[<span style='color:lime;'> ok </span>]").replaceAll("[fail]", "[<span style='color:#ff1e1e;'> fail </span>]").replaceAll("[att]", "[<span style='color:#FFEB3B;'> att </span>]") + "<br>");
            console.log(s);
        } catch (ex) { console.log(ex.message) }
    }


}

_.initializeSystem = function (callMain) {
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0">');
    $('head').append('<meta name="apple-mobile-web-app-capable" content="yes">');
    $('head').append('<meta name="theme-color" content="black">');
    $('head').append('<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">');
    $("html body").css({
        "width": "100%",
        "height": "100%",
        "margin": "0",
        "padding": "0",
        "overflow": "hidden"
    });
    if (callMain) {
        try {
            if (_._importing_something) { } else { main(); }
        } catch (ex) { console.log(ex); }
    }
}

_.set = {
    parametters: function (pars) {
        _.each(pars.split(" "), function (val) {
            switch (val) {
                case "writeToConsole":
                    _.writeToConsoleToo = true;
                    break;
                case "blackTheme":
                    $("body").css({
                        "background": "black",
                        "color": "lime"
                    });
                    console.log("par");
                    break;
            }
        });
    }
}
//SHORTING
_.req = _.require;
_.int.rnd = _.int.random;
_.inner = {}; //some tmp props go here

//DEBUG PARAMETTERS SETTING
_.writeToConsoleToo = false;
_.module.add("native");
$(function () {
    _.initializeSystem(true);
});
