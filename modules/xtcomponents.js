$(function(argument) {
    function registerElements(argument) {
        registerQuickElement("ui-view", {
            "width": "100vw",
            "height": "100vh",
            "position": "relative"
        });
        registerQuickElement("ui-header", {
            "width": "100vw",
            "height": "7vh",
            "position": "relative",
            "z-index": "10"
        });
        registerQuickElement("ui-title", {
            "width": "30%",
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
            "width": "25vw",
            "height": "8vh",
            "background": "blue"

        });
    }

    function registerQuickElement(name, style) {
        xtag.register(name, {
            lifecycle: {
                created: function() {
                    $(this).css(defaultStyling);
                    $(this).css(style); //predefined
                    var that = this;
                    if (this.hasAttribute("theme")) {
                        setAttr(that, "theme", $(that).attr("theme"));
                    }
                    _.each(this.attributes, function(attr) {
                        //theme attr must be proccessed first
                        if (attr.name != "theme")
                            setAttr(that, attr.name, attr.value);

                    });


                },
                attributeChanged: function(attrName, oldValue, newValue) {
                    console.log(attrName + ", " + newValue);
                    setAttr(this, attrName, newValue);
                }
            },
            events: {
                tap: function() {
                    try {
                        eval($(this).attr("ontap"));
                    } catch (ex) {
                        console.log(ex.message);
                    }
                }
            }
        });
    }

    function setAttr(obj, attName, value) {
        obj = $(obj);
        switch (attName) {
            case "bg":
            case "background":
                obj.css({
                    "background": value
                });
                obj.data("default-backcolor", value)
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
                        obj.css({ "box-shadow": "0 2px 5px 0 rgba(0, 0, 0, 0.26)" });
                        break;
                    case "2":
                        obj.css({ "box-shadow": "rgba(0, 0, 0, 0.247059) 0px 0px 8px 4px" });
                        break;
                    case "3":
                        obj.css({ "box-shadow": "rgba(0, 0, 0, 0.447059) 0px 0px 20px 3px" });
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
                        obj.css({ "box-shadow": "" });
                        break;
                }
                break;
        }
    }

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
                            "padding-bottom": "3vh"
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
                            "width": "auto",
                            "padding-left": "6vh",
                            "padding-right": "6vh",
                            "padding-top": "3vh",
                            "padding-bottom": "3vh",
                            "transition": "all 0.6s ease-out",
                            "margin-left": "1.5vw",
                            "margin-top": "1vh",
                            "box-shadow": "0 2px 5px 0 rgba(0, 0, 0, 0.36)"
                        });
                        if (obj[0].hasAttribute("no-anim")) {} else {
                            if (_.device.isTouch()) {
                                obj.on("touchstart", function(argument) {
                                    if (obj.data("default-backcolor") == undefined)
                                        obj.data("default-backcolor", $(obj).css("background"));
                                    $(obj).css({ "background": "rgb(170, 203, 200)" });
                                    setTimeout(function(argument) {
                                        $(obj).css({ "background": obj.data("default-backcolor") });
                                    }, 600);
                                })
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
                            "background": "#0051d4",
                            "box-shadow": "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
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

});
