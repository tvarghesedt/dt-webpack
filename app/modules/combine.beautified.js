!function(t, e, r, n) {
    "use strict";
    function a(r, n, a, o) {
        function i() {
            p = e.devicePixelRatio > 1, l(a), n("delay") >= 0 && setTimeout(function() {
                u(!0);
            }, n("delay")), (n("delay") < 0 || n("combined")) && (o.e = m(n("throttle"), function(t) {
                "resize" === t.type && (b = v = -1), u(t.all);
            }), o.a = function(t) {
                l(t), a.push.apply(a, t);
            }, o.g = function() {
                return a;
            }, u(), t(n("appendScroll")).on("scroll." + r.name + " resize." + r.name, o.e));
        }
        function l(e) {
            if (e = t(e).filter(function() {
                return !t(this).data(n("handledName")) && (t(this).attr(n("attribute")) || t(this).attr(n("loaderAttribute")));
            }).data("plugin_" + r.name, r), n("defaultImage") || n("placeholder")) for (var a = 0; a < e.length; a++) {
                var o = t(e[a]), i = e[a].tagName.toLowerCase(), l = "background-image";
                "img" == i && n("defaultImage") && !o.attr("src") ? o.attr("src", n("defaultImage")) : "img" == i || !n("placeholder") || o.css(l) && "none" != o.css(l) || o.css(l, "url(" + n("placeholder") + ")");
            }
        }
        function u(e) {
            if (!a.length) return void (n("autoDestroy") && r.destroy());
            for (var o = !1, i = n("imageBase") ? n("imageBase") : "", l = 0; l < a.length; l++) (function(r) {
                if (d(r) || e) {
                    var a, l = t(r), u = r.tagName.toLowerCase(), f = l.attr(n("attribute"));
                    l.data(n("handledName")) || n("visibleOnly") && !l.is(":visible") || !(f && ("img" == u && i + f != l.attr("src") || "img" != u && i + f != l.css("background-image")) || (a = l.attr(n("loaderAttribute")))) || (o = !0, 
                    l.data(n("handledName"), !0), c(l, u, i, a));
                }
            })(a[l]);
            o && (a = t(a).filter(function() {
                return !t(this).data(n("handledName"));
            }));
        }
        function c(e, r, a, o) {
            ++h;
            var i = function() {
                g("onError", e), A();
            };
            if (g("beforeLoad", e), o) e.off("error").one("error", i), e.one("load", function() {
                n("removeAttribute") && e.removeAttr(n("loaderAttribute")), g("afterLoad", e), A();
            }), g(o, e, function(t) {
                t ? e.load() : e.error();
            }) || e.error(); else {
                var l = t(new Image());
                l.one("error", i), l.one("load", function() {
                    e.hide(), "img" == r ? e.attr("src", l.attr("src")) : e.css("background-image", "url(" + l.attr("src") + ")"), 
                    e[n("effect")](n("effectTime")), n("removeAttribute") && e.removeAttr(n("attribute") + " " + n("retinaAttribute")), 
                    g("afterLoad", e), l.remove(), A();
                }), l.attr("src", a + e.attr(n(p && e.attr(n("retinaAttribute")) ? "retinaAttribute" : "attribute"))), 
                l.complete && l.load();
            }
        }
        function d(t) {
            var e = t.getBoundingClientRect(), r = n("scrollDirection"), a = n("threshold"), o = s() + a > e.top && -a < e.bottom, i = f() + a > e.left && -a < e.right;
            return "vertical" == r ? o : "horizontal" == r ? i : o && i;
        }
        function f() {
            return b >= 0 ? b : b = t(e).width();
        }
        function s() {
            return v >= 0 ? v : v = t(e).height();
        }
        function m(t, e) {
            var a, o = 0;
            return function(i, l) {
                function u() {
                    o = +new Date(), e.call(r, i);
                }
                var c = +new Date() - o;
                a && clearTimeout(a), c > t || !n("enableThrottle") || l ? u() : a = setTimeout(u, t - c);
            };
        }
        function A() {
            --h, a.size() || h || g("onFinishedAll");
        }
        function g(t, e, a) {
            return (t = n(t)) ? (t.apply(r, [].slice.call(arguments, 1)), !0) : !1;
        }
        var h = 0, b = -1, v = -1, p = !1;
        !function() {
            "event" == n("bind") ? i() : t(e).load(i);
        }();
    }
    function o(e, r) {
        var o = this, i = t.extend({}, o.configuration, r), l = {};
        return o.config = function(t, e) {
            return e === n ? i[t] : (i[t] = e, o);
        }, o.addItems = function(e) {
            return l.a && l.a("string" === t.type(e) ? t(e) : e), o;
        }, o.getItems = function() {
            return l.g ? l.g() : {};
        }, o.update = function(t) {
            return l.e && l.e({}, !t), o;
        }, o.loadAll = function() {
            return l.e && l.e({
                all: !0
            }, !0), o;
        }, o.destroy = function() {
            return t(o.config("appendScroll")).off("." + o.name, l.e), l = {}, n;
        }, a(o, o.config, e, l), o.config("chainable") ? e : o;
    }
    t.fn.Lazy = t.fn.lazy = function(t) {
        return new o(this, t);
    }, t.extend(o.prototype, {
        name: "lazy",
        configuration: {
            chainable: !0,
            autoDestroy: !0,
            bind: "load",
            threshold: 500,
            visibleOnly: !1,
            appendScroll: e,
            scrollDirection: "both",
            imageBase: null,
            defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
            placeholder: null,
            delay: -1,
            combined: !1,
            attribute: "data-src",
            retinaAttribute: "data-retina",
            loaderAttribute: "data-loader",
            removeAttribute: !0,
            handledName: "handled",
            effect: "show",
            effectTime: 0,
            enableThrottle: !0,
            throttle: 250,
            beforeLoad: null,
            afterLoad: null,
            onError: null,
            onFinishedAll: null
        }
    });
}(jQuery, window, document);

jQuery(function() {
    function calculatescrollHeights() {
        if (jQuery(".qode_carousels .slides").length) {
            jQuery(".qode_carousels .slides").each(function() {
                jQuery(this).parents(".caroufredsel_wrapper").css({
                    height: jQuery(this).find("li.item").outerHeight() + "px"
                });
            });
        }
    }
    calculatescrollHeights();
    console.log("lazy executed");
});

function social_carousel_heights() {
    jQuery(".social_carousel_wrapper").length && jQuery(".social_carousel").each(function() {
        jQuery(this).parents(".caroufredsel_wrapper").css({
            height: jQuery(this).find("li").outerHeight() + 55 + "px"
        }), jQuery(".list_btn1 .prev2").css({
            height: jQuery(this).find("li").outerHeight() + 2 + "px"
        }), jQuery(".list_btn1 .next2").css({
            height: jQuery(this).find("li").outerHeight() + 2 + "px"
        }), jQuery(".list_btn1 .prev2").css({
            width: jQuery(this).find("li").outerWidth() / 2 + 13 + "px"
        }), jQuery(".list_btn1 .next2").css({
            width: jQuery(this).find("li").outerWidth() / 2 + 13 + "px"
        });
    });
}

function service_carousel_heights() {
    jQuery(".service_carousel_wrapper").length && jQuery(".service_carousel").each(function() {
        jQuery(this).parents(".caroufredsel_wrapper").css({
            height: jQuery(this).find("li").outerHeight() + 50 + "px"
        }), jQuery(".list_btn1 .prev2").css({
            height: jQuery(this).find("li").outerHeight() + 2 + "px"
        }), jQuery(".list_btn1 .next2").css({
            height: jQuery(this).find("li").outerHeight() + 2 + "px"
        });
    });
}

function dt_carousel_heights() {
    jQuery(".dt_carousel_wrapper").length && jQuery(".dt_carousel").each(function() {
        jQuery(this).parents(".caroufredsel_wrapper").css({
            height: jQuery(this).find("li").outerHeight() + 80 + "px"
        }), jQuery(".list_btn1 .prev2").css({
            height: jQuery(this).find("li").outerHeight() + 2 + "px"
        }), jQuery(".list_btn1 .next2").css({
            height: jQuery(this).find("li").outerHeight() + 2 + "px"
        }), jQuery(window).width() > 480 && jQuery(".dt_carousel").css({
            "margin-left": "-" + (jQuery(this).find("li").outerWidth() / 2 + 13) + "px"
        }), jQuery(".list_btn1 .prev2").css({
            width: jQuery(this).find("li").outerWidth() / 2 + 13 + "px"
        }), jQuery(".list_btn1 .next2").css({
            width: jQuery(this).find("li").outerWidth() / 2 + 13 + "px"
        });
    });
}

!function() {
    "use strict";
    var e = !1;
    jQuery(document).ready(function() {
        jQuery(".social_carousel_wrapper").length && (jQuery(".social_carousel_wrapper").each(function() {
            jQuery(this).find(".social_carousel").carouFredSel({
                circular: !0,
                responsive: !0,
                scroll: {
                    items: 1,
                    duration: 1e3,
                    pauseOnHover: !1
                },
                items: {
                    width: 500,
                    visible: {
                        min: 1,
                        max: 4
                    }
                },
                auto: !1,
                mousewheel: !1,
                swipe: {
                    onMouse: !0,
                    onTouch: !0
                },
                prev: {
                    button: function() {
                        return jQuery(this).parents().eq(1).find(".prev2");
                    }
                },
                next: {
                    button: function() {
                        return jQuery(this).parents().eq(1).find(".next2");
                    }
                },
                onCreate: function(e) {
                    console.log(jQuery(this).parents(".social_carousel_wrapper")), jQuery(this).parents(".social_carousel_wrapper").removeClass("social_carousel-beforeLoad");
                }
            }).animate({
                opacity: 1
            }, 1e3);
        }), social_carousel_heights()), jQuery(".service_carousel_wrapper").length && (jQuery(".service_carousel_wrapper").each(function() {
            jQuery(this).find(".service_carousel").carouFredSel({
                circular: !0,
                responsive: !0,
                scroll: {
                    items: 1,
                    duration: 1e3,
                    pauseOnHover: !1
                },
                items: {
                    width: 300,
                    visible: {
                        min: 1,
                        max: 6
                    }
                },
                auto: !1,
                mousewheel: !1,
                swipe: {
                    onMouse: !0,
                    onTouch: !0
                },
                prev: {
                    button: function() {
                        return jQuery(this).parents().eq(1).find(".prev2");
                    }
                },
                next: {
                    button: function() {
                        return jQuery(this).parents().eq(1).find(".next2");
                    }
                }
            }).animate({
                opacity: 1
            }, 1e3);
        }), service_carousel_heights()), jQuery(".dt_carousel_wrapper").length && (jQuery(".dt_carousel_wrapper").each(function() {
            jQuery(this).find(".dt_carousel").carouFredSel({
                circular: !0,
                responsive: !0,
                scroll: {
                    items: 1,
                    duration: 1e3,
                    pauseOnHover: !1
                },
                items: {
                    width: 400,
                    visible: {
                        min: 1,
                        max: 6
                    }
                },
                auto: !1,
                mousewheel: !1,
                swipe: {
                    onMouse: !0,
                    onTouch: !0
                },
                prev: {
                    button: function() {
                        return jQuery(this).parents().eq(1).find(".prev2");
                    }
                },
                next: {
                    button: function() {
                        return jQuery(this).parents().eq(1).find(".next2");
                    }
                }
            }).animate({
                opacity: 1
            }, 1e3);
            console.log("dt_carousel");
        }), dt_carousel_heights());
    }), jQuery(window).bind("load", function() {
        jQuery(".accordion").on("accordionactivate", function(r, t) {
            if (!e) return void (e = !0);
            var i = jQuery(this).scrollTop();
            if (t.newHeader.length) {
                var s = jQuery(t.newHeader).offset().top;
                jQuery("html,body").animate({
                    scrollTop: i + s - 80
                }, "fast");
            }
        });
        if (!jQuery("body").hasClass("page-template-templatesformconfirmation-php")) {
            window.$zopim = function(d, s) {
                var z = $zopim = function(c) {
                    z._.push(c);
                    console.log(c);
                    alert(c);
                }, $ = z.s = d.createElement(s), e = d.getElementsByTagName(s)[0];
                z.set = function(o) {
                    z.set._.push(o);
                };
                z._ = [];
                z.set._ = [];
                $.setAttribute("charset", "utf-8");
                $.src = "//v2.zopim.com/?NJVdD1uUjFJQKnG85JTMG3wrUnm21kED";
                z.t = +new Date();
                $.type = "text/javascript";
                e.parentNode.insertBefore($, e);
            };
            window.$zopim(document, "script");
        }
        function calculatescrollHeights() {
            if (jQuery(".qode_carousels .slides").length) {
                jQuery(".qode_carousels .slides").each(function() {
                    jQuery(this).parents(".caroufredsel_wrapper").css({
                        height: jQuery(this).find("li.item").outerHeight() + "px"
                    });
                });
            }
        }
        calculatescrollHeights();
    }), jQuery.fn.menumaker = function(e) {
        var r = jQuery(this), t = jQuery.extend({
            title: " ",
            format: "dropdown",
            sticky: !1
        }, e);
        return this.each(function() {
            var e = jQuery(this).attr("data-name");
            if (e === undefined) {
                var e = " ";
            }
            if (e.length < 1) var e = " ";
            return r.prepend('<div id="menu-button">' + e + "</div>"), jQuery(this).find("#menu-button").on("click", function() {
                jQuery(this).toggleClass("menu-opened");
                var e = jQuery(this).next("ul");
                e.hasClass("open") ? e.hide().removeClass("open") : (e.show().addClass("open"), 
                "dropdown" === t.format && e.find("ul").show());
            }), t.sticky === !0 && r.css("position", "fixed"), jQuery(window).on("resize", function() {
                jQuery(window).width() > 768 && r.find("ul").show(), jQuery(window).width() <= 768 && r.find("ul").hide().removeClass("open");
            });
        });
    };
}(jQuery), jQuery.fn.stars = function() {
    return jQuery(this).each(function() {
        var e = parseFloat(jQuery(this).html()), r = 22 * Math.max(0, Math.min(5, e)), t = jQuery("<span />").width(r);
        jQuery(this).html(t);
    });
}, jQuery(function() {
    jQuery("span.stars").length > 0 && jQuery("span.stars").stars();
}), jQuery(function() {
    jQuery(".qode_carousels").each(function() {
        var e = "";
        e = '<a class="foo2_prev" href="#"><span class="fa-stack"><i class="fa fa-angle-left" style=""></i></span></a><a class="foo2_next" href="#"><span class="fa-stack"><i class="fa fa-angle-right" style=""></i></span></a>', 
        jQuery(this).prepend(e);
        var r = jQuery(this).find("li").outerHeight() + 2, t = jQuery(this).find("li").outerWidth() / 2 + 13;
        jQuery(".foo2_prev").css({
            height: r + "px"
        }), jQuery(".foo2_next").css({
            height: r + "px"
        }), jQuery(".foo2_prev").css({
            width: t + "px"
        }), jQuery(".foo2_next").css({
            width: t + "px"
        }), jQuery(".foo2_prev").css({
            left: -40,
            position: "absolute",
            "z-index": "99",
            top: "46%"
        }), jQuery(".foo2_next").css({
            right: -40,
            position: "absolute",
            "z-index": "99",
            top: "46%"
        });
    }), jQuery(".foo2_prev").click(function() {
        jQuery(".slides").trigger("prev", 1), event.preventDefault();
    }), jQuery(".foo2_next").click(function() {
        jQuery(".slides").trigger("next"), event.preventDefault();
    });
}), jQuery(function() {
    if (window.location.hash.length > 0) return "#formfillup" == window.location.hash ? (jQuery("html, body").animate({
        scrollTop: jQuery(window.location.hash).offset().top - 140
    }, 500), !1) : (jQuery("html, body").animate({
        scrollTop: jQuery(window.location.hash).offset().top - 70
    }, 500), !1);
    jQuery("#FormFillUpId").click(function() {
        jQuery("html, body").animate({
            scrollTop: jQuery("#formfillup").offset().top - 140
        }, 500);
    });
    document.getElementsByTagName("video"), document.getElementsByTagName("video").length;
    jQuery("#videocover").click(function() {
        jQuery(".video").children("source").length;
        if (jQuery(".video").hasClass("videoloaded")) {
            var e = jQuery("video").get(0);
            e.play(), jQuery("#videocover").css("visibility", "hidden");
        } else jQuery(".video source").each(function(e) {
            var r = jQuery(this).attr("data-src");
            if (console.log(r), console.log(jQuery(this)), jQuery(this).attr("src", r), console.log(e), 
            2 == e) {
                var t = jQuery("video").get(0);
                t.load(), t.play(), jQuery(".video").addClass("videoloaded"), jQuery("#videocover").css("visibility", "hidden"), 
                jQuery("#videocover").addClass("videocover-disabled");
            }
        });
        return !1;
    }), jQuery("video").bind("pause ended", function() {
        jQuery("#videocover").css("visibility", "visible");
    });
});

jQuery(function() {
    jQuery(window).resize(function() {
        if (jQuery(window).width() > 767 || jQuery(window).width() < 1025) {
            contentMinHeight();
            contentMinHeightWithPaspartu();
            setDropDownMenuPosition();
            initDropDownMenu();
            initVerticalMenu();
            initVerticalMobileMenu();
            setDropDownMenuPosition();
        }
    });
    jQuery("#cssmenu").menumaker({
        title: "Menu",
        format: "dropdown"
    });
});