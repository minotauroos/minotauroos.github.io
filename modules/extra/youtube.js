_.youtube = {
    api_added: false,
    load: function(opt) {
        //$("#hidden_datab_yt_id_native").remove();
        if (!$("#hidden_datab_yt_id_native").length) {
            $("body").append('<div style="position:absolute;top:0;left:0;visibility:hidden;" id="hidden_datab_yt_id_native"></div>');
        }
        if (!_.youtube.api_added) {
            if (opt == undefined)
                opt = {}
            if (opt.id == undefined)
                opt.id = "";
            if (opt.list == undefined)
                opt.list = []
            if (opt.shuffle == undefined)
                opt.shuffle = false
            var tag = document.createElement('script');
            tag.src = window.location.protocol + "//www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            _.youtube.api_added = true;
            window.onYouTubeIframeAPIReady = function() {
                _.youtube.player = new YT.Player('hidden_datab_yt_id_native', {
                    height: '390',
                    width: '640',
                    videoId: opt.id,
                    "suggestedQuality": "hd720",
                    playerVars: {
                        'autoplay': 1,
                        listType: 'playlist',
                        list: opt.list
                    },
                    events: {
                        'onReady': function(event) {
                            _.youtube.player.setShuffle(opt.shuffle);
                            if (opt.autoplay)
                                event.target.playVideo();
                            if (opt.callback) {
                                opt.callback();
                            }
                            if (opt.container) {
                                console.log("ready")
                                _.youtube.fullscreen(opt.container);
                                opt.container = "";
                            }
                        },
                        'onStateChange': function(argument) {
                            // body...
                        }
                    }
                });
            }
        } else {
            
        }
        return _.youtube;
    },
    play: function() {
        _.youtube.player.playVideo();
    },
    stop: function() {
        _.youtube.player.stopVideo();
    },
    pause: function() {
        _.youtube.player.pauseVideo();
    },
    volume: function(de) {
        _.youtube.player.setVolume(de);
    },
    advance: function(amount) {
        _.youtube.player.seekTo(_.youtube.player.getCurrentTime() + amount);
    },
    fullscreen: function(to) {
        var tmp = _.youtube.player.getCurrentTime()
        if (to == undefined) {
            to = $("body");
            $("#hidden_datab_yt_id_native").css({
                "visibility": "visible",
                "width": "100%",
                "height": "100%",
                "position": "absolute",
                "z-index": "100",
                "overflow": "hidden"
            }).appendTo(to);
        } else {
            $("#hidden_datab_yt_id_native").css({
                "visibility": "visible",
                "width": "100%",
                "height": "100%",
                "position": "",
                "overflow": "hidden"
            }).appendTo(to);
            to.css({
                "overflow": "hidden"
            });
        }

        setTimeout(function(argument) {
            console.log(tmp);
            _.youtube.player.seekTo(tmp);
        }, 2000);

    },
    to: function(to) {
        var tmp = _.youtube.player.getCurrentTime()
        if (to == undefined) {
            to = $("body");
            $("#hidden_datab_yt_id_native").css({
                "visibility": "visible",
                "width": "100%",
                "height": "100%",
                "position": "absolute",
                "z-index": "100",
                "overflow": "hidden"
            }).appendTo(to);
        } else {
            $("#hidden_datab_yt_id_native").css({
                "visibility": "visible",
                "width": "100%",
                "height": "100%",
                "position": "",
                "overflow": "hidden"
            }).appendTo(to);
            to.css({
                "overflow": "hidden"
            });
        }

        setTimeout(function(argument) {
            console.log(tmp);
            _.youtube.player.seekTo(tmp);
        }, 2000);

    },
    invisible: function(amount) {
        $("#hidden_datab_yt_id_native").css({
            "visibility": "hidden"
        }).appendTo($("body"));
    },
    remove: function(argument) {
        $("#hidden_datab_yt_id_native").remove();
    },
    next: function(argument) {
        _.youtube.player.nextVideo();
    }
};



_.module.add("youtube");
