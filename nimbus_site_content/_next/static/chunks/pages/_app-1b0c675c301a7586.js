(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        1780: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
                return n(1626)
            }])
        },
        2792: function (e, t) {
            "use strict";
            t.Z = {
                src: "_next/static/media/arrow-down-red.97fb0de6.svg",
                height: 5,
                width: 8
            }
        },
        7661: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return l
                }
            });
            var i = n(5893),
                s = n(5675);

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var a = function (e) {
                return e.src
            };

            function l(e) {
                return (0, i.jsx)(s.default, function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), i.forEach((function (t) {
                            r(e, t, n[t])
                        }))
                    }
                    return e
                }({}, e, {
                    loader: a,
                    unoptimized: "true"
                }))
            }
        },
        9749: function (e, t, n) {
            "use strict";

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                return i
            }

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function r(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var i, s, r = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (i = n.next()).done) && (r.push(i.value), !t || r.length !== t); a = !0);
                        } catch (c) {
                            l = !0, s = c
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw s
                            }
                        }
                        return r
                    }
                }(e, t) || l(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(e) {
                return function (e) {
                    if (Array.isArray(e)) return i(e)
                }(e) || function (e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || l(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(e, t) {
                if (e) {
                    if ("string" === typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                }
            }
            t.default = function (e) {
                var t = e.src,
                    n = e.sizes,
                    i = e.unoptimized,
                    l = void 0 !== i && i,
                    c = e.priority,
                    o = void 0 !== c && c,
                    _ = e.loading,
                    v = e.lazyRoot,
                    y = void 0 === v ? null : v,
                    S = e.lazyBoundary,
                    O = void 0 === S ? "200px" : S,
                    E = e.className,
                    I = e.quality,
                    H = e.width,
                    z = e.height,
                    P = e.style,
                    L = e.objectFit,
                    D = e.objectPosition,
                    M = e.onLoadingComplete,
                    R = e.loader,
                    T = void 0 === R ? w : R,
                    Z = e.placeholder,
                    U = void 0 === Z ? "empty" : Z,
                    B = e.blurDataURL,
                    W = x(e, ["src", "sizes", "unoptimized", "priority", "loading", "lazyRoot", "lazyBoundary", "className", "quality", "width", "height", "style", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]),
                    q = u.useContext(h.ImageConfigContext),
                    F = u.useMemo((function () {
                        var e = b || q || m.imageConfigDefault,
                            t = a(e.deviceSizes).concat(a(e.imageSizes)).sort((function (e, t) {
                                return e - t
                            })),
                            n = e.deviceSizes.sort((function (e, t) {
                                return e - t
                            }));
                        return j({}, e, {
                            allSizes: t,
                            deviceSizes: n
                        })
                    }), [q]),
                    Q = W,
                    K = n ? "responsive" : "intrinsic";
                "layout" in Q && (Q.layout && (K = Q.layout), delete Q.layout);
                var V = "";
                if (function (e) {
                        return "object" === typeof e && (N(e) || function (e) {
                            return void 0 !== e.src
                        }(e))
                    }(t)) {
                    var G = N(t) ? t.default : t;
                    if (!G.src) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(G)));
                    if (B = B || G.blurDataURL, V = G.src, (!K || "fill" !== K) && (z = z || G.height, H = H || G.width, !G.height || !G.width)) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(G)))
                }
                t = "string" === typeof t ? t : V;
                var J = k(H),
                    X = k(z),
                    Y = k(I),
                    $ = !o && ("lazy" === _ || "undefined" === typeof _);
                (t.startsWith("data:") || t.startsWith("blob:")) && (l = !0, $ = !1);
                p.has(t) && ($ = !1);
                var ee, te = r(f.useIntersection({
                        rootRef: y,
                        rootMargin: O,
                        disabled: !$
                    }), 2),
                    ne = te[0],
                    ie = te[1],
                    se = !$ || ie,
                    re = {
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                    },
                    ae = {
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                    },
                    le = !1,
                    ce = {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: L,
                        objectPosition: D
                    };
                0;
                0;
                var oe = Object.assign({}, P, "raw" === K ? {
                        aspectRatio: "".concat(J, " / ").concat(X)
                    } : ce),
                    ue = "blur" === U ? {
                        filter: "blur(20px)",
                        backgroundSize: L || "cover",
                        backgroundImage: 'url("'.concat(B, '")'),
                        backgroundPosition: D || "0% 0%"
                    } : {};
                if ("fill" === K) re.display = "block", re.position = "absolute", re.top = 0, re.left = 0, re.bottom = 0, re.right = 0;
                else if ("undefined" !== typeof J && "undefined" !== typeof X) {
                    var de = X / J,
                        me = isNaN(de) ? "100%" : "".concat(100 * de, "%");
                    "responsive" === K ? (re.display = "block", re.position = "relative", le = !0, ae.paddingTop = me) : "intrinsic" === K ? (re.display = "inline-block", re.position = "relative", re.maxWidth = "100%", le = !0, ae.maxWidth = "100%", ee = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(J, "%27%20height=%27").concat(X, "%27/%3e")) : "fixed" === K && (re.display = "inline-block", re.position = "relative", re.width = J, re.height = X)
                } else 0;
                var fe = {
                    src: g,
                    srcSet: void 0,
                    sizes: void 0
                };
                se && (fe = A({
                    config: F,
                    src: t,
                    unoptimized: l,
                    layout: K,
                    width: J,
                    quality: Y,
                    sizes: n,
                    loader: T
                }));
                var he = t;
                0;
                var _e, ve = "imagesrcset",
                    je = "imagesizes";
                ve = "imageSrcSet", je = "imageSizes";
                var xe = (s(_e = {}, ve, fe.srcSet), s(_e, je, fe.sizes), _e),
                    be = u.default.useLayoutEffect,
                    pe = u.useRef(M),
                    ge = u.useRef(null);
                u.useEffect((function () {
                    pe.current = M
                }), [M]), be((function () {
                    ne(ge.current)
                }), [ne]), u.useEffect((function () {
                    ! function (e, t, n, i, s) {
                        var r = function () {
                            var n = e.current;
                            n && (n.src !== g && ("decode" in n ? n.decode() : Promise.resolve()).catch((function () {})).then((function () {
                                if (e.current && (p.add(t), "blur" === i && (n.style.filter = "", n.style.backgroundSize = "", n.style.backgroundImage = "", n.style.backgroundPosition = ""), s.current)) {
                                    var r = n.naturalWidth,
                                        a = n.naturalHeight;
                                    s.current({
                                        naturalWidth: r,
                                        naturalHeight: a
                                    })
                                }
                            })))
                        };
                        e.current && (e.current.complete ? r() : e.current.onload = r)
                    }(ge, he, 0, U, pe)
                }), [he, K, U, se]);
                var ye = j({
                    isLazy: $,
                    imgAttributes: fe,
                    heightInt: X,
                    widthInt: J,
                    qualityInt: Y,
                    layout: K,
                    className: E,
                    imgStyle: oe,
                    blurStyle: ue,
                    imgRef: ge,
                    loading: _,
                    config: F,
                    unoptimized: l,
                    placeholder: U,
                    loader: T,
                    srcString: he
                }, Q);
                return u.default.createElement(u.default.Fragment, null, "raw" === K ? u.default.createElement(C, Object.assign({}, ye)) : u.default.createElement("span", {
                    style: re
                }, le ? u.default.createElement("span", {
                    style: ae
                }, ee ? u.default.createElement("img", {
                    style: {
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                    },
                    alt: "",
                    "aria-hidden": !0,
                    src: ee
                }) : null) : null, u.default.createElement(C, Object.assign({}, ye))), o ? u.default.createElement(d.default, null, u.default.createElement("link", Object.assign({
                    key: "__nimg-" + fe.src + fe.srcSet + fe.sizes,
                    rel: "preload",
                    as: "image",
                    href: fe.srcSet ? void 0 : fe.src
                }, xe))) : null)
            };
            var c, o, u = function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            if (Object.prototype.hasOwnProperty.call(e, n)) {
                                var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                i.get || i.set ? Object.defineProperty(t, n, i) : t[n] = e[n]
                            } return t.default = e, t
                }(n(7294)),
                d = (c = n(3121)) && c.__esModule ? c : {
                    default: c
                },
                m = n(139),
                f = n(9246),
                h = n(8730),
                _ = (n(670), n(2700));

            function v(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function j(e) {
                for (var t = arguments, n = function (n) {
                        var i = null != t[n] ? t[n] : {},
                            s = Object.keys(i);
                        "function" === typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(i).filter((function (e) {
                            return Object.getOwnPropertyDescriptor(i, e).enumerable
                        })))), s.forEach((function (t) {
                            v(e, t, i[t])
                        }))
                    }, i = 1; i < arguments.length; i++) n(i);
                return e
            }

            function x(e, t) {
                if (null == e) return {};
                var n, i, s = function (e, t) {
                    if (null == e) return {};
                    var n, i, s = {},
                        r = Object.keys(e);
                    for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || (s[n] = e[n]);
                    return s
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
                }
                return s
            }
            o = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                path: "_next/image/",
                loader: "custom",
                experimentalLayoutRaw: !1
            };
            var b = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "_next/image/",
                    loader: "custom",
                    experimentalLayoutRaw: !1
                },
                p = new Set,
                g = (new Map, "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
            var y = new Map([
                ["default", function (e) {
                    var t = e.config,
                        n = e.src,
                        i = e.width,
                        s = e.quality;
                    0;
                    if (n.endsWith(".svg") && !t.dangerouslyAllowSVG) return n;
                    return "".concat(_.normalizePathTrailingSlash(t.path), "?url=").concat(encodeURIComponent(n), "&w=").concat(i, "&q=").concat(s || 75)
                }],
                ["imgix", function (e) {
                    var t = e.config,
                        n = e.src,
                        i = e.width,
                        s = e.quality,
                        r = new URL("".concat(t.path).concat(S(n))),
                        a = r.searchParams;
                    a.set("auto", a.get("auto") || "format"), a.set("fit", a.get("fit") || "max"), a.set("w", a.get("w") || i.toString()), s && a.set("q", s.toString());
                    return r.href
                }],
                ["cloudinary", function (e) {
                    var t = e.config,
                        n = e.src,
                        i = e.width,
                        s = e.quality,
                        r = ["f_auto", "c_limit", "w_" + i, "q_" + (s || "auto")].join(",") + "/";
                    return "".concat(t.path).concat(r).concat(S(n))
                }],
                ["akamai", function (e) {
                    var t = e.config,
                        n = e.src,
                        i = e.width;
                    return "".concat(t.path).concat(S(n), "?imwidth=").concat(i)
                }],
                ["custom", function (e) {
                    var t = e.src;
                    throw new Error('Image with src "'.concat(t, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
                }]
            ]);

            function N(e) {
                return void 0 !== e.default
            }

            function A(e) {
                var t = e.config,
                    n = e.src,
                    i = e.unoptimized,
                    s = e.layout,
                    r = e.width,
                    l = e.quality,
                    c = e.sizes,
                    o = e.loader;
                if (i) return {
                    src: n,
                    srcSet: void 0,
                    sizes: void 0
                };
                var u = function (e, t, n, i) {
                        var s = e.deviceSizes,
                            r = e.allSizes;
                        if (i && ("fill" === n || "responsive" === n || "raw" === n)) {
                            for (var l, c = /(^|\s)(1?\d?\d)vw/g, o = []; l = c.exec(i); l) o.push(parseInt(l[2]));
                            if (o.length) {
                                var u, d = .01 * (u = Math).min.apply(u, a(o));
                                return {
                                    widths: r.filter((function (e) {
                                        return e >= s[0] * d
                                    })),
                                    kind: "w"
                                }
                            }
                            return {
                                widths: r,
                                kind: "w"
                            }
                        }
                        return "number" !== typeof t || "fill" === n || "responsive" === n ? {
                            widths: s,
                            kind: "w"
                        } : {
                            widths: a(new Set([t, 2 * t].map((function (e) {
                                return r.find((function (t) {
                                    return t >= e
                                })) || r[r.length - 1]
                            })))),
                            kind: "x"
                        }
                    }(t, r, s, c),
                    d = u.widths,
                    m = u.kind,
                    f = d.length - 1;
                return {
                    sizes: c || "w" !== m ? c : "100vw",
                    srcSet: d.map((function (e, i) {
                        return "".concat(o({
                            config: t,
                            src: n,
                            quality: l,
                            width: e
                        }), " ").concat("w" === m ? e : i + 1).concat(m)
                    })).join(", "),
                    src: o({
                        config: t,
                        src: n,
                        quality: l,
                        width: d[f]
                    })
                }
            }

            function k(e) {
                return "number" === typeof e ? e : "string" === typeof e ? parseInt(e, 10) : void 0
            }

            function w(e) {
                var t, n = (null === (t = e.config) || void 0 === t ? void 0 : t.loader) || "default",
                    i = y.get(n);
                if (i) return i(e);
                throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(m.VALID_LOADERS.join(", "), ". Received: ").concat(n))
            }
            var C = function (e) {
                var t = e.imgAttributes,
                    n = e.heightInt,
                    i = e.widthInt,
                    s = e.qualityInt,
                    r = e.layout,
                    a = e.className,
                    l = e.imgStyle,
                    c = e.blurStyle,
                    o = e.isLazy,
                    d = e.imgRef,
                    m = e.placeholder,
                    f = e.loading,
                    h = e.sizes,
                    _ = e.srcString,
                    v = e.config,
                    b = e.unoptimized,
                    p = e.loader,
                    g = x(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "layout", "className", "imgStyle", "blurStyle", "isLazy", "imgRef", "placeholder", "loading", "sizes", "srcString", "config", "unoptimized", "loader"]);
                return u.default.createElement(u.default.Fragment, null, u.default.createElement("img", Object.assign({}, g, t, "raw" !== r || h ? {} : {
                    height: n,
                    width: i
                }, {
                    decoding: "async",
                    "data-nimg": r,
                    className: a,
                    ref: d,
                    style: j({}, l, c)
                })), (o || "blur" === m) && u.default.createElement("noscript", null, u.default.createElement("img", Object.assign({}, g, A({
                    config: v,
                    src: _,
                    unoptimized: b,
                    layout: r,
                    width: i,
                    quality: s,
                    sizes: h,
                    loader: p
                }), "raw" !== r || h ? {} : {
                    height: n,
                    width: i
                }, {
                    decoding: "async",
                    "data-nimg": r,
                    style: l,
                    className: a,
                    loading: f || "lazy"
                }))))
            };

            function S(e) {
                return "/" === e[0] ? e.slice(1) : e
            }
        },
        1551: function (e, t, n) {
            "use strict";

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                return i
            }

            function s(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var i, s, r = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (i = n.next()).done) && (r.push(i.value), !t || r.length !== t); a = !0);
                        } catch (c) {
                            l = !0, s = c
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw s
                            }
                        }
                        return r
                    }
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            t.default = void 0;
            var r, a = (r = n(7294)) && r.__esModule ? r : {
                    default: r
                },
                l = n(1003),
                c = n(880),
                o = n(9246);
            var u = {};

            function d(e, t, n, i) {
                if (e && l.isLocalURL(t)) {
                    e.prefetch(t, n, i).catch((function (e) {
                        0
                    }));
                    var s = i && "undefined" !== typeof i.locale ? i.locale : e && e.locale;
                    u[t + "%" + n + (s ? "%" + s : "")] = !0
                }
            }
            var m = function (e) {
                var t, n = !1 !== e.prefetch,
                    i = c.useRouter(),
                    r = a.default.useMemo((function () {
                        var t = s(l.resolveHref(i, e.href, !0), 2),
                            n = t[0],
                            r = t[1];
                        return {
                            href: n,
                            as: e.as ? l.resolveHref(i, e.as) : r || n
                        }
                    }), [i, e.href, e.as]),
                    m = r.href,
                    f = r.as,
                    h = e.children,
                    _ = e.replace,
                    v = e.shallow,
                    j = e.scroll,
                    x = e.locale;
                "string" === typeof h && (h = a.default.createElement("a", null, h));
                var b = (t = a.default.Children.only(h)) && "object" === typeof t && t.ref,
                    p = s(o.useIntersection({
                        rootMargin: "200px"
                    }), 2),
                    g = p[0],
                    y = p[1],
                    N = a.default.useCallback((function (e) {
                        g(e), b && ("function" === typeof b ? b(e) : "object" === typeof b && (b.current = e))
                    }), [b, g]);
                a.default.useEffect((function () {
                    var e = y && n && l.isLocalURL(m),
                        t = "undefined" !== typeof x ? x : i && i.locale,
                        s = u[m + "%" + f + (t ? "%" + t : "")];
                    e && !s && d(i, m, f, {
                        locale: t
                    })
                }), [f, m, y, x, n, i]);
                var A = {
                    ref: N,
                    onClick: function (e) {
                        t.props && "function" === typeof t.props.onClick && t.props.onClick(e), e.defaultPrevented || function (e, t, n, i, s, r, a, c) {
                            ("A" !== e.currentTarget.nodeName.toUpperCase() || ! function (e) {
                                var t = e.currentTarget.target;
                                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && l.isLocalURL(n)) && (e.preventDefault(), t[s ? "replace" : "push"](n, i, {
                                shallow: r,
                                locale: c,
                                scroll: a
                            }))
                        }(e, i, m, f, _, v, j, x)
                    },
                    onMouseEnter: function (e) {
                        t.props && "function" === typeof t.props.onMouseEnter && t.props.onMouseEnter(e), l.isLocalURL(m) && d(i, m, f, {
                            priority: !0
                        })
                    }
                };
                if (e.passHref || "a" === t.type && !("href" in t.props)) {
                    var k = "undefined" !== typeof x ? x : i && i.locale,
                        w = i && i.isLocaleDomain && l.getDomainLocale(f, k, i && i.locales, i && i.domainLocales);
                    A.href = w || l.addBasePath(l.addLocale(f, k, i && i.defaultLocale))
                }
                return a.default.cloneElement(t, A)
            };
            t.default = m
        },
        9246: function (e, t, n) {
            "use strict";

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                return i
            }

            function s(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var i, s, r = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (i = n.next()).done) && (r.push(i.value), !t || r.length !== t); a = !0);
                        } catch (c) {
                            l = !0, s = c
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw s
                            }
                        }
                        return r
                    }
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function (e) {
                var t = e.rootRef,
                    n = e.rootMargin,
                    i = e.disabled || !l,
                    u = r.useRef(),
                    d = s(r.useState(!1), 2),
                    m = d[0],
                    f = d[1],
                    h = s(r.useState(t ? t.current : null), 2),
                    _ = h[0],
                    v = h[1],
                    j = r.useCallback((function (e) {
                        u.current && (u.current(), u.current = void 0), i || m || e && e.tagName && (u.current = function (e, t, n) {
                            var i = function (e) {
                                    var t, n = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        i = o.find((function (e) {
                                            return e.root === n.root && e.margin === n.margin
                                        }));
                                    i ? t = c.get(i) : (t = c.get(n), o.push(n));
                                    if (t) return t;
                                    var s = new Map,
                                        r = new IntersectionObserver((function (e) {
                                            e.forEach((function (e) {
                                                var t = s.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            }))
                                        }), e);
                                    return c.set(n, t = {
                                        id: n,
                                        observer: r,
                                        elements: s
                                    }), t
                                }(n),
                                s = i.id,
                                r = i.observer,
                                a = i.elements;
                            return a.set(e, t), r.observe(e),
                                function () {
                                    if (a.delete(e), r.unobserve(e), 0 === a.size) {
                                        r.disconnect(), c.delete(s);
                                        var t = o.findIndex((function (e) {
                                            return e.root === s.root && e.margin === s.margin
                                        }));
                                        t > -1 && o.splice(t, 1)
                                    }
                                }
                        }(e, (function (e) {
                            return e && f(e)
                        }), {
                            root: _,
                            rootMargin: n
                        }))
                    }), [i, _, n, m]);
                return r.useEffect((function () {
                    if (!l && !m) {
                        var e = a.requestIdleCallback((function () {
                            return f(!0)
                        }));
                        return function () {
                            return a.cancelIdleCallback(e)
                        }
                    }
                }), [m]), r.useEffect((function () {
                    t && v(t.current)
                }), [t]), [j, m]
            };
            var r = n(7294),
                a = n(4686),
                l = "undefined" !== typeof IntersectionObserver;
            var c = new Map,
                o = []
        },
        1626: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function () {
                    return y
                }
            });
            var i = n(5893),
                s = n(1664),
                r = n(7661),
                a = {
                    src: "_next/static/media/nimbus-logo.png",
                    height: 44,
                    width: 156
                },
                l = n(2792),
                c = n(7294);
            var o = function () {
                    var e = function () {
                            var e = document.querySelector(".nav__btn-mobile-bars"),
                                t = document.querySelector(".nav__btn-mobile-menu");
                            e.classList.remove("active"), t.classList.remove("active")
                        },
                        t = function () {
                            document.querySelectorAll(".nav__hover-list").forEach((function (e) {
                                e.addEventListener("onmouseover", (function () {
                                    e.classList.add("active")
                                }))
                            }))
                        },
                        n = function (e) {
                            e.preventDefault()
                        },
                        o = (0, c.useState)({
                            status: !1,
                            key: ""
                        }),
                        u = o[0],
                        d = o[1],
                        m = function (e, t) {
                            e.preventDefault(), u.key === t ? d({
                                status: !1,
                                key: ""
                            }) : d({
                                status: !0,
                                key: t
                            })
                        };
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)("nav", {
                            className: "nav",
                            children: (0, i.jsxs)("div", {
                                className: "nav-box",
                                children: [(0, i.jsx)("div", {
                                    className: "nav__logo",
                                    children: (0, i.jsx)(s.default, {
                                        href: "/",
                                        passHref: !0,
                                        children: (0, i.jsx)("a", {
                                            children: (0, i.jsx)(r.Z, {
                                                src: a,
                                                alt: "Stormit Logo"
                                            })
                                        })
                                    })
                                }), (0, i.jsxs)("ul", {
                                    className: "nav__list",
                                    children: [(0, i.jsxs)("li", {
                                        className: "nav__item cloudservices",
                                        children: [(0, i.jsx)(s.default, {
                                            href: "managed-cloud-services.php",
                                            passHref: !0,
                                            children: (0, i.jsxs)("a", {
                                                className: "nav__link",
                                                children: ["Cloud Services", (0, i.jsx)(r.Z, {
                                                    src: l.Z,
                                                    alt: ""
                                                })]
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "nav__hover-list-box",
                                            children: (0, i.jsxs)("ul", {
                                                className: "nav__hover-list cloudservices",
                                                children: [(0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "managed-cloud-services.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "Managed Cloud Services"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/enterprise-cloud-management-platform.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "Enterprise Cloud Management Platform"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/cloud-check-up.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "Cloud Check-Up"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/cloud-reselling.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "Cloud Reselling"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/cloud-foundation.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "Cloud Foundation"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/architecture-deployment.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "Architecture Deployment"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/aws-migration-services.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "AWS Migration Services"
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    }), (0, i.jsxs)("li", {
                                        className: "nav__item cdnservices",
                                        children: [(0, i.jsx)(s.default, {
                                            href: "/cdn-services.php",
                                            passHref: !0,
                                            children: (0, i.jsxs)("a", {
                                                className: "nav__link",
                                                children: ["Cdn Services", (0, i.jsx)(r.Z, {
                                                    src: l.Z,
                                                    alt: ""
                                                })]
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "nav__hover-list-box",
                                            children: (0, i.jsxs)("ul", {
                                                className: "nav__hover-list cdnservices",
                                                children: [(0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/cdn-services.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "CDN Services"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/cdn-security.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "CDN Security"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/video-streaming-cdn.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "Video Streaming CDN"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/gaming-cdn.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "Gaming CDN"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/website-app-acceleration.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "Website and App Acceleration"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/software-distribution.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "Software Distribution"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/cdn-cost-calculator.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "CDN Cost Calculator"
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    }), (0, i.jsxs)("li", {
                                        className: "nav__item amazoncloudfront",
                                        children: [(0, i.jsxs)("span", {
                                            className: "nav__link",
                                            children: ["Aws Practice", (0, i.jsx)(r.Z, {
                                                src: l.Z,
                                                alt: ""
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: "nav__hover-list-box",
                                            children: (0, i.jsxs)("ul", {
                                                className: "nav__hover-list amazoncloudfront",
                                                children: [(0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/cloudfront.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "Amazon CloudFront"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/aws-lambda.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "AWS Lambda"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/aws-web-application-firewall.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "AWS WAF"
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    }), (0, i.jsxs)("li", {
                                        className: "nav__item aboutus",
                                        children: [(0, i.jsx)(s.default, {
                                            href: "/about.php",
                                            passHref: !0,
                                            children: (0, i.jsxs)("a", {
                                                className: "nav__link",
                                                children: ["About Us", (0, i.jsx)(r.Z, {
                                                    src: l.Z,
                                                    alt: ""
                                                })]
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "nav__hover-list-box",
                                            children: (0, i.jsxs)("ul", {
                                                className: "nav__hover-list aboutus",
                                                children: [(0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/about.php#story",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "Our Story"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/about.php#team",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "Our Team"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/about.php#vision",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "Our Vision"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/about.php#partners",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "Partners"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "nav__hover-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/careers.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "nav__hover-list-link",
                                                            onClick: t,
                                                            children: "Careers"
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    }), (0, i.jsx)("li", {
                                        className: "nav__item",
                                        children: (0, i.jsx)(s.default, {
                                            href: "/case-studies.php",
                                            children: (0, i.jsx)("a", {
                                                className: "nav__link",
                                                children: "Case Studies"
                                            })
                                        })
                                    }), (0, i.jsx)("li", {
                                        className: "nav__item",
                                        children: (0, i.jsx)(s.default, {
                                            href: "/blog.php",
                                            children: (0, i.jsx)("a", {
                                                className: "nav__link",
                                                // children: "Blog"
                                            })
                                        })
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "nav__btn-lang",
                                    children: [(0, i.jsx)(s.default, {
                                        href: "contact.php",
                                        children: (0, i.jsx)("a", {
                                            className: "nav__btn-contact",
                                            children: "Contact Us"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "nav__lang"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "nav__btn-mobile",
                                    onClick: function () {
                                        var e = document.querySelector(".nav__btn-mobile-bars").classList.toggle("active")
                                            // t = document.querySelector(".nav__btn-mobile-menu").classList.toggle("active");
                                        // e.classList.toggle("active"), t.classList.toggle("active")
                                    },
                                    children: [(0, i.jsxs)("div", {
                                        className: "nav__btn-mobile-bars",
                                        children: [(0, i.jsx)("span", {
                                            className: "mobile-bar"
                                        }), (0, i.jsx)("span", {
                                            className: "mobile-bar"
                                        }), (0, i.jsx)("span", {
                                            className: "mobile-bar"
                                        })]
                                    }), (0, i.jsx)("span", {
                                        className: "mobile-text",
                                        children: "Menu"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "nav__btn-mobile-menu",
                                    children: [(0, i.jsxs)("ul", {
                                        className: "mobile-menu__list",
                                        children: [(0, i.jsxs)("li", {
                                            className: "".concat("cloud" == u.key ? "active" : "", " mobile-menu__list-item"),
                                            onClick: function (e) {
                                                return m(e, "cloud")
                                            },
                                            children: [(0, i.jsx)("div", {
                                                className: "submenu-arrow active",
                                                children: (0, i.jsx)(r.Z, {
                                                    src: l.Z,
                                                    alt: ""
                                                })
                                            }), (0, i.jsx)("span", {
                                                className: "mobile-menu__list-link",
                                                onClick: function (e) {
                                                    return n(e)
                                                },
                                                children: "Cloud services"
                                            }), (0, i.jsxs)("ul", {
                                                className: "mobile-menu__submenu-list",
                                                children: [(0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/managed-cloud-services.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "Managed Cloud Services"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/enterprise-cloud-management-platform.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "Enterprise Cloud Management Platform"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/cloud-check-up.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "Cloud Check-Up"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/cloud-reselling.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "Cloud Reselling"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/cloud-foundation.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "Cloud Foundation"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/architecture-deployment.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "Architecture Deployment"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/aws-migration-services.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "AWS Migration Services"
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0, i.jsxs)("li", {
                                            className: "".concat("cdn" == u.key ? "active" : "", " mobile-menu__list-item"),
                                            onClick: function (e) {
                                                return m(e, "cdn")
                                            },
                                            children: [(0, i.jsx)("div", {
                                                className: "submenu-arrow",
                                                children: (0, i.jsx)(r.Z, {
                                                    src: l.Z,
                                                    alt: ""
                                                })
                                            }), (0, i.jsx)("span", {
                                                className: "mobile-menu__list-link",
                                                onClick: function (e) {
                                                    return n(e)
                                                },
                                                children: "CDN services"
                                            }), (0, i.jsxs)("ul", {
                                                className: "mobile-menu__submenu-list",
                                                children: [(0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/cdn-services.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "CDN Services"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/cdn-security.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "CDN Security"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/video-streaming-cdn.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "Video Streaming CDN"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/gaming-cdn.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "Gaming CDN"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/website-app-acceleration.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "Website and App Acceleration"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/software-distribution.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "Software Distribution"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/cdn-cost-calculator.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "CDN Cost Calculator"
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0, i.jsxs)("li", {
                                            className: "".concat("aws" == u.key ? "active" : "", " mobile-menu__list-item"),
                                            onClick: function (e) {
                                                return m(e, "aws")
                                            },
                                            children: [(0, i.jsx)("div", {
                                                className: "submenu-arrow",
                                                children: (0, i.jsx)(r.Z, {
                                                    src: l.Z,
                                                    alt: ""
                                                })
                                            }), (0, i.jsx)("span", {
                                                className: "mobile-menu__list-link",
                                                onClick: function (e) {
                                                    return n(e)
                                                },
                                                children: "AWS practice"
                                            }), (0, i.jsxs)("ul", {
                                                className: "mobile-menu__submenu-list",
                                                children: [(0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/cloudfront.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "Amazon CloudFront"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/aws-lambda.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "AWS Lambda"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/aws-web-application-firewall.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "AWS WAF"
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0, i.jsxs)("li", {
                                            className: "".concat("about" == u.key ? "active" : "", " mobile-menu__list-item"),
                                            onClick: function (e) {
                                                return m(e, "about")
                                            },
                                            children: [(0, i.jsx)("div", {
                                                className: "submenu-arrow",
                                                children: (0, i.jsx)(r.Z, {
                                                    src: l.Z,
                                                    alt: ""
                                                })
                                            }), (0, i.jsx)("span", {
                                                className: "mobile-menu__list-link",
                                                onClick: function (e) {
                                                    return n(e)
                                                },
                                                children: "About us"
                                            }), (0, i.jsxs)("ul", {
                                                className: "mobile-menu__submenu-list",
                                                children: [(0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/about.php#story",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "Our Story"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/about.php#team",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "Our Team"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/about.php#vision",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "Our Vision"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/about.php#partners",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "Partners"
                                                        })
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "mobile-menu__submenu-list-item",
                                                    children: (0, i.jsx)(s.default, {
                                                        href: "/careers.php",
                                                        passHref: !0,
                                                        children: (0, i.jsx)("a", {
                                                            className: "mobile-menu__submenu-list-link",
                                                            onClick: e,
                                                            children: "Careers"
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0, i.jsx)("li", {
                                            className: "mobile-menu__list-item",
                                            children: (0, i.jsx)(s.default, {
                                                href: "/case-studies.php",
                                                passHref: !0,
                                                children: (0, i.jsx)("a", {
                                                    className: "mobile-menu__list-link",
                                                    onClick: e,
                                                    children: "Case studies"
                                                })
                                            })
                                        }), (0, i.jsx)("li", {
                                            className: "mobile-menu__list-item",
                                            children: (0, i.jsx)(s.default, {
                                                href: "/blog.php",
                                                passHref: !0,
                                                children: (0, i.jsx)("a", {
                                                    className: "mobile-menu__list-link",
                                                    onClick: e,
                                                    // children: "Blog"
                                                })
                                            })
                                        })]
                                    }), (0, i.jsx)(s.default, {
                                        href: "/contact.php",
                                        passHref: !0,
                                        children: (0, i.jsx)("a", {
                                            className: "mobile-menu__contact-btn",
                                            children: "Contact us"
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                u = {
                    src: "_next/static/media/AWS-Service-Delivery-Logo.adf10997.svg",
                    height: 35,
                    width: 245
                },
                d = {
                    src: "_next/static/media/Icon-awesome-facebook.043fe7ea.svg",
                    height: 25,
                    width: 25
                },
                m = {
                    src: "_next/static/media/Icon-awesome-twitter.4be9ab83.svg",
                    height: 21,
                    width: 26
                },
                f = {
                    src: "_next/static/media/Icon-awesome-youtube.53ad0876.svg",
                    height: 20,
                    width: 28
                },
                h = {
                    src: "_next/static/media/Icon-awesome-linkedin-in.1aa132ae.svg",
                    height: 23,
                    width: 23
                },
                _ = {
                    src: "_next/static/media/arrow-down-white.f710c469.svg",
                    height: 5,
                    width: 8
                },
                v = {
                    src: "_next/static/media/stormit-footer-logo.ada54a30.svg",
                    height: 32,
                    width: 32
                },
                j = {
                    src: "_next/static/media/footer-bg.9381bdaf.jpg",
                    height: 1236,
                    width: 2147,
                    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAJ0Lx//EABoQAQEAAgMAAAAAAAAAAAAAAAECAAMhMXH/2gAIAQEAAT8Adk1JJqiU7oOX3P/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"
                };
            var x = function () {
                    var e = (0, c.useState)({
                            status: !1,
                            key: ""
                        }),
                        t = e[0],
                        n = e[1],
                        a = function (e) {
                            t.key === e ? n({
                                status: !1,
                                key: ""
                            }) : n({
                                status: !0,
                                key: e
                            })
                        },
                        l = function (e, i) {
                            e.preventDefault(), t.key === i ? n({
                                status: !1,
                                key: ""
                            }) : n({
                                status: !0,
                                key: i
                            })
                        };
                    return (0, i.jsxs)("footer", {
                        className: "footer",
                        children: [(0, i.jsxs)("div", {
                            className: "footer__bg-image",
                            children: [(0, i.jsx)(r.Z, {
                                src: j,
                                layout: "fill",
                                objectFit: "cover",
                                objectPosition: "50% 50%",
                                quality: 100,
                                alt: "Nimbus System Footer"
                            }), (0, i.jsx)(s.default, {
                                href: "/contact.php",
                                passHref: !0,
                                children: (0, i.jsxs)("div", {
                                    className: "footer__city lux",
                                    children: [(0, i.jsx)("div", {
                                        className: "footer__city-image",
                                        children: (0, i.jsx)(r.Z, {
                                            src: v,
                                            alt: ""
                                        })
                                    }), (0, i.jsx)("p", {
                                        className: "footer__city-text",
                                        children: "Luxembourg"
                                    })]
                                })
                            }), (0, i.jsx)(s.default, {
                                href: "/contact.php",
                                passHref: !0,
                                children: (0, i.jsxs)("div", {
                                    className: "footer__city prague",
                                    children: [(0, i.jsx)("div", {
                                        className: "footer__city-image",
                                        children: (0, i.jsx)(r.Z, {
                                            src: v,
                                            alt: ""
                                        })
                                    }), (0, i.jsx)("p", {
                                        className: "footer__city-text",
                                        children: "Prague"
                                    })]
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: "footer__wrapper",
                            children: (0, i.jsxs)("div", {
                                className: "footer__nav",
                                children: [(0, i.jsxs)("div", {
                                    className: "footer__group-box",
                                    children: [(0, i.jsxs)("div", {
                                        className: "footer__group",
                                        children: [(0, i.jsxs)("span", {
                                            className: "".concat("footer1" == t.key ? "active" : "", " footer__group-title-box"),
                                            onClick: function (e) {
                                                return l(e, "footer1")
                                            },
                                            children: [(0, i.jsx)("div", {
                                                className: "footer__group-title-arrow",
                                                children: (0, i.jsx)(r.Z, {
                                                    src: _,
                                                    alt: ""
                                                })
                                            }), (0, i.jsx)("p", {
                                                className: "footer__list-title",
                                                children: "Services"
                                            })]
                                        }), (0, i.jsxs)("ul", {
                                            className: "".concat("footer1" == t.key ? "active" : "", " footer__list"),
                                            children: [(0, i.jsx)("li", {
                                                className: "footer__item",
                                                children: (0, i.jsx)(s.default, {
                                                    href: "/cloud-foundation.php",
                                                    children: (0, i.jsx)("a", {
                                                        className: "footer__link",
                                                        onClick: function () {
                                                            return a("")
                                                        },
                                                        children: "Building Cloud Foundation"
                                                    })
                                                })
                                            }), (0, i.jsx)("li", {
                                                className: "footer__item",
                                                children: (0, i.jsx)(s.default, {
                                                    href: "/aws-migration-services.php",
                                                    children: (0, i.jsx)("a", {
                                                        className: "footer__link",
                                                        onClick: function () {
                                                            return a("")
                                                        },
                                                        children: "Cloud Migration"
                                                    })
                                                })
                                            }), (0, i.jsx)("li", {
                                                className: "footer__item",
                                                children: (0, i.jsx)(s.default, {
                                                    href: "/managed-cloud-services.php",
                                                    children: (0, i.jsx)("a", {
                                                        className: "footer__link",
                                                        onClick: function () {
                                                            return a("")
                                                        },
                                                        children: "Managed Services"
                                                    })
                                                })
                                            }), (0, i.jsx)("li", {
                                                className: "footer__item",
                                                children: (0, i.jsx)(s.default, {
                                                    href: "/enterprise-cloud-management-platform.php",
                                                    children: (0, i.jsx)("a", {
                                                        className: "footer__link",
                                                        onClick: function () {
                                                            return a("")
                                                        },
                                                        children: "Cloud Billing Services"
                                                    })
                                                })
                                            }), (0, i.jsx)("li", {
                                                className: "footer__item",
                                                children: (0, i.jsx)(s.default, {
                                                    href: "/cdn-services.php",
                                                    children: (0, i.jsx)("a", {
                                                        className: "footer__link",
                                                        onClick: function () {
                                                            return a("")
                                                        },
                                                        children: "Content Delivery"
                                                    })
                                                })
                                            }), (0, i.jsx)("li", {
                                                className: "footer__item",
                                                children: (0, i.jsx)(s.default, {
                                                    href: "/enterprise-cloud-management-platform.php",
                                                    children: (0, i.jsx)("a", {
                                                        className: "footer__link",
                                                        onClick: function () {
                                                            return a("")
                                                        },
                                                        children: "Cost Optimization"
                                                    })
                                                })
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: "footer__aws-image",
                                            children: (0, i.jsx)(s.default, {
                                                href: "https://partners.amazonaws.com/partners/001E000001BPxvMIAT/Nimbus System%20Europe%20s.r.o..",
                                                passHref: !0,
                                                children: (0, i.jsx)("a", {
                                                    className: "footer__link",
                                                    onClick: function () {
                                                        return a("")
                                                    },
                                                    target: "_blank",
                                                    children: (0, i.jsx)(r.Z, {
                                                        src: u,
                                                        alt: "AWS Partner"
                                                    })
                                                })
                                            })
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "footer__group",
                                        children: [(0, i.jsxs)("span", {
                                            className: "".concat("footer2" == t.key ? "active" : "", " footer__group-title-box"),
                                            onClick: function (e) {
                                                return l(e, "footer2")
                                            },
                                            children: [(0, i.jsx)("div", {
                                                className: "footer__group-title-arrow",
                                                children: (0, i.jsx)(r.Z, {
                                                    src: _,
                                                    alt: ""
                                                })
                                            }), (0, i.jsx)("p", {
                                                className: "footer__list-title",
                                                children: "About Nimbus System"
                                            })]
                                        }), (0, i.jsxs)("ul", {
                                            className: "".concat("footer2" == t.key ? "active" : "", " footer__list"),
                                            children: [(0, i.jsx)("li", {
                                                className: "footer__item",
                                                children: (0, i.jsx)(s.default, {
                                                    href: "/about.php#story",
                                                    children: (0, i.jsx)("a", {
                                                        className: "footer__link",
                                                        onClick: function () {
                                                            return a("")
                                                        },
                                                        children: "Our Story"
                                                    })
                                                })
                                            }), (0, i.jsx)("li", {
                                                className: "footer__item",
                                                children: (0, i.jsx)(s.default, {
                                                    href: "/about.php#team",
                                                    children: (0, i.jsx)("a", {
                                                        className: "footer__link",
                                                        onClick: function () {
                                                            return a("")
                                                        },
                                                        children: "Our Team"
                                                    })
                                                })
                                            }), (0, i.jsx)("li", {
                                                className: "footer__item",
                                                children: (0, i.jsx)(s.default, {
                                                    href: "/about.php#vision",
                                                    children: (0, i.jsx)("a", {
                                                        className: "footer__link",
                                                        onClick: function () {
                                                            return a("")
                                                        },
                                                        children: "Our Vision"
                                                    })
                                                })
                                            }), (0, i.jsx)("li", {
                                                className: "footer__item",
                                                children: (0, i.jsx)(s.default, {
                                                    href: "/about.php#partners",
                                                    children: (0, i.jsx)("a", {
                                                        className: "footer__link",
                                                        onClick: function () {
                                                            return a("")
                                                        },
                                                        children: "Partners"
                                                    })
                                                })
                                            }), (0, i.jsx)("li", {
                                                className: "footer__item",
                                                children: (0, i.jsx)(s.default, {
                                                    href: "/careers.php",
                                                    children: (0, i.jsx)("a", {
                                                        className: "footer__link",
                                                        onClick: function () {
                                                            return a("")
                                                        },
                                                        children: "Careers"
                                                    })
                                                })
                                            }), (0, i.jsx)("li", {
                                                className: "footer__item",
                                                children: (0, i.jsx)(s.default, {
                                                    href: "/case-studies.php",
                                                    children: (0, i.jsx)("a", {
                                                        className: "footer__link",
                                                        onClick: function () {
                                                            return a("")
                                                        },
                                                        children: "Case Studies"
                                                    })
                                                })
                                            }), (0, i.jsx)("li", {
                                                className: "footer__item",
                                                children: (0, i.jsx)(s.default, {
                                                    href: "/blog.php",
                                                    children: (0, i.jsx)("a", {
                                                        className: "footer__link",
                                                        onClick: function () {
                                                            return a("")
                                                        },
                                                        // children: "Blog"
                                                    })
                                                })
                                            }), (0, i.jsx)("li", {
                                                className: "footer__item",
                                                children: (0, i.jsx)(s.default, {
                                                    href: "/contact.php",
                                                    children: (0, i.jsx)("a", {
                                                        className: "footer__link",
                                                        onClick: function () {
                                                            return a("")
                                                        },
                                                        children: "Contact Us"
                                                    })
                                                })
                                            }), (0, i.jsx)("li", {
                                                className: "footer__item",
                                                children: (0, i.jsx)(s.default, {
                                                    href: "/terms-conditions.php",
                                                    children: (0, i.jsx)("a", {
                                                        className: "footer__link",
                                                        onClick: function () {
                                                            return a("")
                                                        },
                                                        children: "Terms and Conditions"
                                                    })
                                                })
                                            }), (0, i.jsx)("li", {
                                                className: "footer__item",
                                                children: (0, i.jsx)(s.default, {
                                                    href: "/privacy.php",
                                                    children: (0, i.jsx)("a", {
                                                        className: "footer__link",
                                                        onClick: function () {
                                                            return a("")
                                                        },
                                                        children: "Privacy Policy"
                                                    })
                                                })
                                            }), (0, i.jsx)("li", {
                                                className: "footer__item",
                                                children: (0, i.jsx)(s.default, {
                                                    href: "/site-map.php",
                                                    children: (0, i.jsx)("a", {
                                                        className: "footer__link",
                                                        onClick: function () {
                                                            return a("")
                                                        },
                                                        children: "Site Map"
                                                    })
                                                })
                                            })]
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "footer__social-copy-box",
                                    children: [(0, i.jsxs)("div", {
                                        className: "footer__social",
                                        children: [(0, i.jsx)("p", {
                                            className: "social__text",
                                            children: "Follow us"
                                        }), (0, i.jsxs)("div", {
                                            className: "social__icons",
                                            children: [(0, i.jsx)(s.default, {
                                                href: "https://www.linkedin.com/company/stormit-international/",
                                                passHref: !0,
                                                children: (0, i.jsx)("a", {
                                                    className: "social__icon",
                                                    target: "_blank",
                                                    children: (0, i.jsx)(r.Z, {
                                                        src: h,
                                                        alt: "LinkedIn"
                                                    })
                                                })
                                            }), (0, i.jsx)(s.default, {
                                                href: "https://www.youtube.com/channel/UCEKtnx46U8CzURZM_YvHpNw?view_as=subscriber",
                                                passHref: !0,
                                                children: (0, i.jsx)("a", {
                                                    className: "social__icon",
                                                    target: "_blank",
                                                    children: (0, i.jsx)(r.Z, {
                                                        src: f,
                                                        alt: "Youtube"
                                                    })
                                                })
                                            }), (0, i.jsx)(s.default, {
                                                href: "https://twitter.com/Nimbus System10",
                                                passHref: !0,
                                                children: (0, i.jsx)("a", {
                                                    className: "social__icon",
                                                    target: "_blank",
                                                    children: (0, i.jsx)(r.Z, {
                                                        src: m,
                                                        alt: "Twitter"
                                                    })
                                                })
                                            }), (0, i.jsx)(s.default, {
                                                href: "https://www.facebook.com/pg/Nimbus SystemInternational",
                                                passHref: !0,
                                                children: (0, i.jsx)("a", {
                                                    className: "social__icon",
                                                    target: "_blank",
                                                    children: (0, i.jsx)(r.Z, {
                                                        src: d,
                                                        alt: "Facebook"
                                                    })
                                                })
                                            })]
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: "footer__copyright",
                                        children: "Copyright \xa9 2022 Nimbus System"
                                    })]
                                })]
                            })
                        })]
                    })
                },
                b = n(4298);
            n(7011);

            function p(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), i.forEach((function (t) {
                        p(e, t, n[t])
                    }))
                }
                return e
            }
            var y = function (e) {
                var t = e.Component,
                    n = e.pageProps;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(b.default, {
                        id: "google-tag-manager",
                        strategy: "afterInteractive",
                        children: "\n              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n              })(window,document,'script','dataLayer','GTM-5TL5L3N');\n            "
                    }), (0, i.jsx)("script", {
                        id: "Cookiebot",
                        src: "https://consent.cookiebot.com/uc.js",
                        "data-cbid": "53da016a-08ba-46d1-8bd6-64b923130daa",
                        type: "text/javascript",
                        async: !0
                    }), (0, i.jsx)(b.default, {
                        id: "google-analytics",
                        strategy: "lazyOnload",
                        children: "\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', 'UA-171329258-1', {\n                  page_path: window.location.pathname,\n                });\n                    "
                    }), (0, i.jsx)(o, {}), (0, i.jsx)(t, g({}, n)), (0, i.jsx)(x, {})]
                })
            }
        },
        7011: function () {},
        5675: function (e, t, n) {
            e.exports = n(9749)
        },
        1664: function (e, t, n) {
            e.exports = n(1551)
        },
        4298: function (e, t, n) {
            e.exports = n(3573)
        }
    },
    function (e) {
        var t = function (t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], (function () {
            return t(1780), t(880)
        }));
        var n = e.O();
        _N_E = n
    }
]);