(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [674], {
        5243: function () {},
        131: function (e, t, n) {
            "use strict";
            n.d(t, {
                df: function () {
                    return f
                }
            });
            var r = n(7294);

            function i() {
                return i = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, i.apply(this, arguments)
            }

            function o(e, t) {
                return o = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, o(e, t)
            }
            var s = new Map,
                a = new WeakMap,
                l = 0,
                c = void 0;

            function u(e) {
                return Object.keys(e).sort().filter((function (t) {
                    return void 0 !== e[t]
                })).map((function (t) {
                    return t + "_" + ("root" === t ? (n = e.root) ? (a.has(n) || (l += 1, a.set(n, l.toString())), a.get(n)) : "0" : e[t]);
                    var n
                })).toString()
            }

            function p(e, t, n, r) {
                if (void 0 === n && (n = {}), void 0 === r && (r = c), "undefined" === typeof window.IntersectionObserver && void 0 !== r) {
                    var i = e.getBoundingClientRect();
                    return t(r, {
                            isIntersecting: r,
                            target: e,
                            intersectionRatio: "number" === typeof n.threshold ? n.threshold : 0,
                            time: 0,
                            boundingClientRect: i,
                            intersectionRect: i,
                            rootBounds: i
                        }),
                        function () {}
                }
                var o = function (e) {
                        var t = u(e),
                            n = s.get(t);
                        if (!n) {
                            var r, i = new Map,
                                o = new IntersectionObserver((function (t) {
                                    t.forEach((function (t) {
                                        var n, o = t.isIntersecting && r.some((function (e) {
                                            return t.intersectionRatio >= e
                                        }));
                                        e.trackVisibility && "undefined" === typeof t.isVisible && (t.isVisible = o), null == (n = i.get(t.target)) || n.forEach((function (e) {
                                            e(o, t)
                                        }))
                                    }))
                                }), e);
                            r = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                                id: t,
                                observer: o,
                                elements: i
                            }, s.set(t, n)
                        }
                        return n
                    }(n),
                    a = o.id,
                    l = o.observer,
                    p = o.elements,
                    h = p.get(e) || [];
                return p.has(e) || p.set(e, h), h.push(t), l.observe(e),
                    function () {
                        h.splice(h.indexOf(t), 1), 0 === h.length && (p.delete(e), l.unobserve(e)), 0 === p.size && (l.disconnect(), s.delete(a))
                    }
            }
            var h = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];

            function d(e) {
                return "function" !== typeof e.children
            }
            var f = function (e) {
                var t, n;

                function s(t) {
                    var n;
                    return (n = e.call(this, t) || this).node = null, n._unobserveCb = null, n.handleNode = function (e) {
                        n.node && (n.unobserve(), e || n.props.triggerOnce || n.props.skip || n.setState({
                            inView: !!n.props.initialInView,
                            entry: void 0
                        })), n.node = e || null, n.observeNode()
                    }, n.handleChange = function (e, t) {
                        e && n.props.triggerOnce && n.unobserve(), d(n.props) || n.setState({
                            inView: e,
                            entry: t
                        }), n.props.onChange && n.props.onChange(e, t)
                    }, n.state = {
                        inView: !!t.initialInView,
                        entry: void 0
                    }, n
                }
                n = e, (t = s).prototype = Object.create(n.prototype), t.prototype.constructor = t, o(t, n);
                var a = s.prototype;
                return a.componentDidUpdate = function (e) {
                    e.rootMargin === this.props.rootMargin && e.root === this.props.root && e.threshold === this.props.threshold && e.skip === this.props.skip && e.trackVisibility === this.props.trackVisibility && e.delay === this.props.delay || (this.unobserve(), this.observeNode())
                }, a.componentWillUnmount = function () {
                    this.unobserve(), this.node = null
                }, a.observeNode = function () {
                    if (this.node && !this.props.skip) {
                        var e = this.props,
                            t = e.threshold,
                            n = e.root,
                            r = e.rootMargin,
                            i = e.trackVisibility,
                            o = e.delay,
                            s = e.fallbackInView;
                        this._unobserveCb = p(this.node, this.handleChange, {
                            threshold: t,
                            root: n,
                            rootMargin: r,
                            trackVisibility: i,
                            delay: o
                        }, s)
                    }
                }, a.unobserve = function () {
                    this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
                }, a.render = function () {
                    if (!d(this.props)) {
                        var e = this.state,
                            t = e.inView,
                            n = e.entry;
                        return this.props.children({
                            inView: t,
                            entry: n,
                            ref: this.handleNode
                        })
                    }
                    var o = this.props,
                        s = o.children,
                        a = o.as,
                        l = function (e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(o, h);
                    return r.createElement(a || "div", i({
                        ref: this.handleNode
                    }, l), s)
                }, s
            }(r.Component)
        },
        640: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return o
                }
            });
            var r = n(7294),
                i = function () {
                    return i = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, i.apply(this, arguments)
                };

            function o(e) {
                var t = r.useState(!1),
                    n = t[0],
                    o = t[1],
                    s = r.useState(!1),
                    a = s[0],
                    l = s[1],
                    c = encodeURIComponent(e.id),
                    u = "string" === typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
                    p = e.title,
                    h = e.poster || "hqdefault",
                    d = "&" + e.params || 0,
                    f = e.muted ? "&mute=1" : "",
                    b = e.announce || "Watch",
                    v = e.webp ? "webp" : "jpg",
                    y = e.webp ? "vi_webp" : "vi",
                    g = e.thumbnail || (e.playlist ? "https://i.ytimg.com/" + y + "/" + u + "/" + h + "." + v : "https://i.ytimg.com/" + y + "/" + c + "/" + h + "." + v),
                    m = e.noCookie;
                m = e.cookie ? "https://www.youtube.com" : "https://www.youtube-nocookie.com";
                var w = e.playlist ? m + "/embed/videoseries?autoplay=1" + f + "&list=" + c + d : m + "/embed/" + c + "?autoplay=1&state=1" + f + d,
                    k = e.activatedClass || "lyt-activated",
                    C = e.adNetwork || !1,
                    O = e.aspectHeight || 9,
                    E = e.aspectWidth || 16,
                    V = e.iframeClass || "",
                    I = e.playerClass || "lty-playbtn",
                    _ = e.wrapperClass || "yt-lite",
                    N = e.onIframeAdded || function () {},
                    j = e.rel ? "prefetch" : "preload";
                return r.useEffect((function () {
                    a && N()
                }), [a]), r.createElement(r.Fragment, null, r.createElement("link", {
                    rel: j,
                    href: g,
                    as: "image"
                }), r.createElement(r.Fragment, null, n && r.createElement(r.Fragment, null, r.createElement("link", {
                    rel: "preconnect",
                    href: m
                }), r.createElement("link", {
                    rel: "preconnect",
                    href: "https://www.google.com"
                }), C && r.createElement(r.Fragment, null, r.createElement("link", {
                    rel: "preconnect",
                    href: "https://static.doubleclick.net"
                }), r.createElement("link", {
                    rel: "preconnect",
                    href: "https://googleads.g.doubleclick.net"
                })))), r.createElement("article", {
                    onPointerOver: function () {
                        n || o(!0)
                    },
                    onClick: function () {
                        a || l(!0)
                    },
                    className: _ + " " + (a ? k : ""),
                    "data-title": p,
                    style: i({
                        backgroundImage: "url(" + g + ")"
                    }, {
                        "--aspect-ratio": O / E * 100 + "%"
                    })
                }, r.createElement("button", {
                    className: I,
                    "aria-label": b + " " + p
                }), a && r.createElement("iframe", {
                    className: V,
                    title: p,
                    width: "560",
                    height: "315",
                    frameBorder: "0",
                    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: !0,
                    src: w
                })))
            }
        }
    }
]);