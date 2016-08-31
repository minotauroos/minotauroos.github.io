$(function (argument) {
    function registerElements(argument) {
        registerQuickElement("ui-view", {
            "width": "100vw",
            "height": "100vh",
            "position": "relative",
            "z-index": "1"
        }, { canStatic: false });
        registerQuickElement("ui-header", {
            "width": "100vw",
            "height": "9vh",
            "max-height": "60px",
            "position": "relative",
            "z-index": "10"
        });
        registerQuickElement("ui-card", {
            "width": "94vw",
            "position": "relative",
            "box-shadow": "rgba(0, 0, 0, 0.14902) 0px 0px 4px 2px",
            "background": "rgb(255, 255, 255)",
            "float": "left",
            "margin-left": "2vw",
            "margin-top": "20px",
            "padding": "3%"
        }, { canStatic: false });
        registerQuickElement("ui-title", {
            "width": "auto",
            "padding-left": "2%",
            "padding-right": "2%",
            "height": "100%",
            "position": "relative",
            "float": "left",
            "font-size": "20px",
            "display": "flex",
            "justify-content": "center",
            "align-content": "center",
            "flex-direction": "column",
            "text-align": "center"
        });
        registerQuickElement("ui-split", {
            "width": "100%",
            "height": "1px",
            "position": "relative",
            "float": "left",
            "background": "",
            "display": "block"
        });
        registerQuickElement("ui-button", {
            "position": "relative",
            "color": "rgb(255, 255, 255)",
            "text-shadow": "0 1px 0 rgba(255,255,255, 0.8)",
            "text-decoration": "none",
            "text-align": "center",
            "cursor": "pointer",
            "font-size": "14x",
            "display": "flex",
            "justify-content": "center",
            "align-items": "center",
            "float": "left",
            "font-family": "helvetica, arial, sans-serif",
            "width": "auto",
            "height": "8vh",
            "background": "blue",
            "padding" : "4%",
            "margin-left" : "1%"

        });
        registerQuickElement("ui-input", {
            "position": "relative",
            "float": "left",
            "background": "white",
            "display": "block",
            "width": "100%",
            "height": "7vh"
        }, {
                post: function (elem) {
                    $(elem).html('<input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></input>');
                    $(xtag.queryChildren(elem, 'input')[0]).css({
                        "background": "inherit",
                        "color": "inherit",
                        "-webkit-box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "box-sizing": "border-box",
                        "-webkit-transform": "translate3d(0, 0, 0)",
                        "outline": "none",
                        "border": "0",
                        "width": "100%",
                        "height": "100%",
                        "font-size": "18px",
                        "resize": "none",
                        "font-family": "inherit"
                    });
                    if (elem.hasAttribute("submit")) {
                        $(xtag.queryChildren(elem, 'input')[0]).on("keyup", function (e) {
                            if (e.which == 13) {
                                _.call($(elem).attr("submit"), window, $(this).val(), this);
                            }
                        });
                    }
                }
            }
        );
        registerQuickElement("menu-icon", {
            "position": "relative",
            "float": "left",
            "display": "",
            "height": "100%",
            "width": "15%",
            "font-size": "2.6em",
            "color": "white",
            "background": "",
            "font-weight": "bold",
            "cursor": "pointer",
            "outline": "none",
            "text-align": "center"
        }, {
                post: function (elem) {
                    $(elem).html("&#x2261;");
                    setStyle("center-content", elem);
                    if (document.documentElement.clientHeight < 580) {
                        $(elem).css("font-size", "2.1em");
                    }
                },
                canStatic: false
            });
        registerQuickElement("black-code", {
            "position": "absolute",
            "display": "none",
            "background": "",
        }, {

                post: function (elem) {
                    eval($(elem).html());
                    $(elem).remove();
                },
                canStatic: false
            });


        registerQuickElement("ui-item", {
            "position": "relative",
            "float": "left",
            "background": "",
            "display": "block",
            "width": "100%",
            "height": "auto",
            "color": "rgb(134, 134, 134)",
            "font-size": "1.2em",
            "padding": "4%",
            "transform": "translateZ(0)"
        });
        registerQuickElement("ui-div", {
            "position": "relative",
            "float": "left",
            "background": "",
            "display": "block"
        });

    }

    function registerQuickElement(name, style, opt) {
        xtag.register(name, {
            lifecycle: {
                created: function () {
                    $(this).css(defaultStyling);
                    $(this).css(style); //predefined
                    if (opt == undefined)
                        opt = {}
                    if (opt.canStatic == undefined)
                        opt.canStatic = true;
                    if (opt.post)
                        opt.post(this);
                    var that = this;
                    //Check if element has themes attribute
                    if (this.hasAttribute("theme")) {
                        //Set it after default element style but not before attr tags style
                        setAttr(that, "theme", $(that).attr("theme"));
                    } else {
                        //Check if has no-theme, to set it as ui-view theme if it is defined
                        if (!this.hasAttribute("no-theme")) {
                            setAttr(that, "theme", $(that).closest("ui-view").attr("theme"));
                        }
                    }
                    //set all attr first execpt theme and static
                    _.each(this.attributes, function (attr) {
                        //theme attr must be proccessed first
                        if (attr.name != "theme" && attr.name != "static")
                            setAttr(that, attr.name, attr.value);

                    });
                    //static must be set after all before
                    if (this.hasAttribute("static")) {
                        //some elems can't be static
                        if (opt.canStatic) {
                            $(this).css("height", $(this).css("height"));
                        }
                    } else {
                        //same set as parent
                        if (!this.hasAttribute("no-static") && opt.canStatic) { //no static
                            $(this).css("height", $(this).css("height"));
                        }
                    }

                },
                attributeChanged: function (attrName, oldValue, newValue) {
                    setAttr(this, attrName, newValue);
                }
            },
            events: {
                tap: function () {
                    try {
                        eval($(this).attr("ontap"));
                    } catch (ex) {
                        console.log(ex.message);
                    }
                }
            }
        });
    } //END REGISTERELEMENT

    function setAttr(obj, attName, value) {
        obj = $(obj);
        switch (attName) {
            case "slide-anim":
                if (value == "") {
                    if (_.device.isTouch()) {
                        obj.on("touchstart", function (argument) {
                            ultaCoolEffect(obj);
                        });
                    } else {
                        obj.on("mousedown", function (argument) {
                            ultaCoolEffect(obj);
                        });
                    }
                } else {
                    if (_.device.isTouch()) {
                        obj.on("touchstart", function (argument) {
                            ultaCoolEffect(obj, function () { eval(value); });
                        });
                    } else {
                        obj.on("mousedown", function (argument) {
                            ultaCoolEffect(obj, function () { eval(value); });
                        });
                    }
                }

                break;
            case "bg":
            case "background":
                obj.css({
                    "background": value
                });
                obj.data("default-backcolor", value)
                break;
            case "width":
                obj.css({
                    "width": value
                });
                break;
            case "theme":
                setTheme(obj, value);
                break;
            case "shadow":
                switch (value) {
                    case undefined:
                    case "":
                    case "true":
                    case "yes":
                    case "1":
                        obj.css({
                            "box-shadow": "0 2px 5px 0 rgba(0, 0, 0, 0.26)"
                        });
                        break;
                    case "2":
                        obj.css({
                            "box-shadow": "rgba(0, 0, 0, 0.247059) 0px 0px 8px 4px"
                        });
                        break;
                    case "3":
                        obj.css({
                            "box-shadow": "rgba(0, 0, 0, 0.447059) 0px 0px 20px 3px"
                        });
                        break;
                }
                break;
            case "center-content":
                obj.css({
                    "display": "flex",
                    "justify-content": "center",
                    "align-content": "center",
                    "flex-direction": "column",
                    "text-align": "center"
                });
                break;
            case "add-margin":
                $(obj).append("<div style='position:absolute;bottom:0;left:0;width:100%;height:0.06em;background-color:black;opacity:0.2;'></div>");
                break;
            case "no-center-content":
                obj.css({
                    "display": "block",
                    "justify-content": "",
                    "align-content": "",
                    "flex-direction": "",
                    "text-align": ""
                });
                break;
            case "no-shadow":
                switch (value) {
                    case undefined:
                    case "":
                        obj.css({
                            "box-shadow": ""
                        });
                        break;
                }
                break;
            default:
                obj.css(attName, value);
                break;
        }
    } //END SETATTR

    function setTheme(obj, theme) {
        obj = $(obj);
        switch (obj.prop("tagName")) {
            case "UI-BUTTON":
                switch (theme) {
                    case "ios":
                        obj.css({
                            "border-radius": "4px",
                            "border": "1px solid rgba(0,0,0,0.1)",
                            "background": "-webkit-linear-gradient(top, #89A0BE 0%,#5877A2 50%,#486A9A 51%,#4A6C9B 100%)",
                            "width": "auto",
                            "padding-left": "3vh",
                            "padding-right": "3vh",
                            "padding-top": "3vh",
                            "padding-bottom": "3vh",
                            "margin-left": "1.5vw",
                            "margin-top": "1vh",
                        });
                        break;
                    case "flat":
                        obj.css({
                            "background": "#730e0e",
                            "width": "auto",
                            "padding-left": "3vh",
                            "padding-right": "3vh",
                            "padding-top": "3vh",
                            "padding-bottom": "3vh"
                        });
                        break;
                    case "material":
                        obj.css({
                            "background": "#26a69a",
                            "color": "#fff",
                            //"width": "auto",
                            //"padding-left": "6vh",
                            //"padding-right": "6vh",
                            //"padding-top": "3vh",
                            //"padding-bottom": "3vh",
                            //"margin-left": "1.5vw",
                            //"margin-top": "1vh",
                            "box-shadow": "rgba(0, 0, 0, 0.57) 0px 2px 5px 0px",
                            "transition": "background 0.6s ease-out"
                        });
                        if (obj[0].hasAttribute("no-anim")) { } else {
                            if (_.device.isTouch()) {
                                obj.on("touchstart", function (argument) {
                                    if (obj.data("default-backcolor") == undefined)
                                        obj.data("default-backcolor", $(obj).css("background"));
                                    $(obj).css({
                                        "background": "rgb(170, 203, 200)"
                                    });
                                    setTimeout(function (argument) {
                                        $(obj).css({
                                            "background": obj.data("default-backcolor")
                                        });
                                    }, 600);
                                });
                            } else {
                                obj.on("mousedown", function (argument) {

                                    if (obj.data("default-backcolor") == undefined)
                                        obj.data("default-backcolor", $(obj).css("background"));
                                    $(obj).css({
                                        "background": "rgb(170, 203, 200)"
                                    });
                                    setTimeout(function (argument) {
                                        $(obj).css({
                                            "background": obj.data("default-backcolor")
                                        });
                                    }, 600);
                                });
                            }
                        }
                        break;
                }
                break;

            case "UI-HEADER":
                switch (theme) {
                    case "flat":
                        obj.css({
                            "background": "rgb(45, 81, 11)"
                        });
                    case "material":
                        obj.css({
                            "background": "rgb(43, 117, 237)",
                            "box-shadow": "rgba(0, 0, 0, 0.50) 0px 2px 5px 0px",
                            "color": "#fff"
                        });
                        break;
                    case "ios":
                        obj.css({
                            "background": "linear-gradient(to bottom, rgba(162,181,202,1) 0%,rgba(54,92,149,1) 100%)",
                            "box-shadow": "rgba(0, 0, 0, 0.84) 0px 0px 5px 1px",
                            "color": "#fff"
                        });
                        break;
                }
                break;
            case "UI-VIEW":
                switch (theme) {
                    case "flat":
                        obj.css({
                            "background": "rgb(45, 81, 11)"
                        });
                    case "material":
                        obj.css({
                            "background": "#fafafa"
                        });
                        break;
                    case "ios":
                        obj.css({
                            "background": "repeating-linear-gradient(   to right,   #b2c1d9,   #b2c1d9 5px,   #bcc8db 5px,   #bcc8db 10px )"
                        });
                        break;
                }
                break;
            case "UI-INPUT":
                switch (theme) {
                    case "flat":
                        obj.css({
                            "background": "rgb(45, 81, 11)"
                        });
                    case "material":
                        obj.css({
                            "background": "white",
                            "box-shadow": "rgba(0, 0, 0, 0.16) 0px 2px 5px 0px",
                            "color": "black"
                        });
                        break;
                    case "ios":
                        obj.css({
                            "background": "linear-gradient(to bottom, rgba(162,181,202,1) 0%,rgba(54,92,149,1) 100%)",
                            "box-shadow": "rgba(0, 0, 0, 0.84) 0px 0px 5px 1px",
                            "color": "#fff"
                        });
                        break;
                }
                break;
        }

    }
    var defaultStyling = {
        "-webkit-touch-callout": "none",
        "-webkit-user-select": "none",
        "-moz-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",
        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
        "box-sizing": "border-box",
        "display": "block"
    }

    registerElements();

    function setStyle(styleName, elem) {
        switch (styleName) {
            case "center-content":
                $(elem).css({
                    "display": "flex",
                    "justify-content": "center",
                    "align-content": "center",
                    "flex-direction": "column",
                    "text-align": "center"
                });
                break;
        }
    }

});

function ultaCoolEffect(target, callback) {
    var speed = 400;
    var effobj = $("<div style='position:absolute;top:0;left:0;width:0%;height:100%;transition:all " + speed + "ms;;opacity:0.2;z-index:10;background:black;'></div>")
    $(target).append(effobj);
    setTimeout(function () {
        effobj.css({
            "width": "100%"
        });
        setTimeout(function () {
            effobj.css({
                "width": "0%",
                "left": "100%"
            });
            setTimeout(function () {
                effobj.remove();
                if (callback)
                    callback();
            }, speed + 1);
        }, speed + 1);
    }, 15);


}