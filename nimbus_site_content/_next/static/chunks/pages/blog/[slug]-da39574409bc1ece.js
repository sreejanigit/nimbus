(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [492], {
        4184: function (t, e) {
            var n;
            ! function () {
                "use strict";
                var r = {}.hasOwnProperty;

                function o() {
                    for (var t = [], e = 0; e < arguments.length; e++) {
                        var n = arguments[e];
                        if (n) {
                            var a = typeof n;
                            if ("string" === a || "number" === a) t.push(n);
                            else if (Array.isArray(n)) {
                                if (n.length) {
                                    var i = o.apply(null, n);
                                    i && t.push(i)
                                }
                            } else if ("object" === a)
                                if (n.toString === Object.prototype.toString)
                                    for (var s in n) r.call(n, s) && n[s] && t.push(s);
                                else t.push(n.toString())
                        }
                    }
                    return t.join(" ")
                }
                t.exports ? (o.default = o, t.exports = o) : void 0 === (n = function () {
                    return o
                }.apply(e, [])) || (t.exports = n)
            }()
        },
        4163: function (t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/blog/[slug]", function () {
                return n(6898)
            }])
        },
        9378: function (t, e, n) {
            "use strict";
            var r = n(4051),
                o = n.n(r),
                a = n(5893),
                i = n(1664),
                s = n(7294),
                l = n(9669),
                c = n.n(l);

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function d(t, e, n, r, o, a, i) {
                try {
                    var s = t[a](i),
                        l = s.value
                } catch (c) {
                    return void n(c)
                }
                s.done ? e(l) : Promise.resolve(l).then(r, o)
            }

            function p(t) {
                return function () {
                    var e = this,
                        n = arguments;
                    return new Promise((function (r, o) {
                        var a = t.apply(e, n);

                        function i(t) {
                            d(a, r, o, i, s, "next", t)
                        }

                        function s(t) {
                            d(a, r, o, i, s, "throw", t)
                        }
                        i(void 0)
                    }))
                }
            }

            function h(t) {
                return function (t) {
                    if (Array.isArray(t)) return u(t)
                }(t) || function (t) {
                    if ("undefined" !== typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function (t, e) {
                    if (!t) return;
                    if ("string" === typeof t) return u(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(t, e)
                }(t) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            e.Z = function () {
                var t = (0, s.useState)(""),
                    e = t[0],
                    n = t[1],
                    r = (0, s.useState)(""),
                    l = r[0],
                    u = r[1],
                    d = (0, s.useState)(""),
                    f = d[0],
                    g = d[1],
                    m = (0, s.useState)(!1),
                    y = m[0],
                    b = m[1];

                function _() {
                    return (_ = p(o().mark((function t() {
                        var r, a;
                        return o().wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (r = h(document.querySelectorAll("#footer-contact .form__group .group__inputs")), r.every((function (t) {
                                            return t.reportValidity()
                                        }))) try {
                                        a = {
                                            data: {
                                                name: e,
                                                email: l,
                                                message: f,
                                                tos: y
                                            }
                                        }, c().post("https://cms.stormit.cloud/api/contacts", a, {
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        }).then((function (t) {
                                            200 === t.status ? console.log("Message sent!") : console.log("Error, something went wrong, try again!")
                                        })), n(""), u(""), g(""), b(!1)
                                    } catch (o) {
                                        console.log(o)
                                    }
                                    case 3: case "end": return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }
                return (0, a.jsx)("div", {
                    className: "footer__contact-box",
                    children: (0, a.jsxs)("div", {
                        className: "footer__contact",
                        children: [(0, a.jsxs)("div", {
                            className: "contact__content",
                            children: [(0, a.jsx)("p", {
                                className: "contact__title",
                                children: "Are you ready to accelerate your business to the cloud?"
                            }), (0, a.jsx)("p", {
                                className: "contact__text",
                                children: "Our team of certified Amazon Web Services consultants is ready to handle your next cloud project. Get in touch today to speak with a cloud expert and discuss how we can help."
                            }), (0, a.jsxs)("div", {
                                className: "contact__info",
                                children: [(0, a.jsx)("div", {
                                    className: "contact__image",
                                    children: (0, a.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                        width: "21",
                                        height: "15",
                                        viewBox: "0 0 21 15",
                                        children: [(0, a.jsx)("defs", {
                                            children: (0, a.jsx)("clipPath", {
                                                id: "clip-path",
                                                children: (0, a.jsx)("rect", {
                                                    id: "Rectangle_66",
                                                    "data-name": "Rectangle 66",
                                                    width: "21",
                                                    height: "15",
                                                    rx: "3",
                                                    transform: "translate(117.252 5516.385)",
                                                    fill: "#fff",
                                                    stroke: "#707070",
                                                    strokeWidth: "1"
                                                })
                                            })
                                        }), (0, a.jsx)("g", {
                                            id: "Mask_Group_2",
                                            "data-name": "Mask Group 2",
                                            transform: "translate(-117.252 -5516.385)",
                                            clipPath: "url(#clip-path)",
                                            children: (0, a.jsx)("path", {
                                                id: "Icon_zocial-email",
                                                "data-name": "Icon zocial-email",
                                                d: "M.072,18.6V5.481q0-.023.068-.433l7.723,6.607-7.7,7.4A1.931,1.931,0,0,1,.072,18.6ZM1.1,4.136a.982.982,0,0,1,.387-.068h20.8a1.29,1.29,0,0,1,.41.068l-7.746,6.63-1.025.82L11.9,13.249,9.868,11.586l-1.025-.82ZM1.12,19.947,8.889,12.5,11.9,14.935,14.9,12.5l7.769,7.45a1.094,1.094,0,0,1-.387.068H1.485a1.032,1.032,0,0,1-.365-.068Zm14.808-8.293,7.7-6.607a1.36,1.36,0,0,1,.068.433V18.6a1.746,1.746,0,0,1-.068.456Z",
                                                transform: "translate(116.317 5511.754)",
                                                fill: "#1f2649"
                                            })
                                        })]
                                    })
                                }), (0, a.jsx)(i.default, {
                                    href: "mailto:info@nimbussystem.com",
                                    children: (0, a.jsx)("a", {
                                        className: "contact__email",
                                        children: "info@nimbussystem.com"
                                    })
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "contact__info",
                                children: [(0, a.jsx)("div", {
                                    className: "contact__image",
                                    children: (0, a.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "17.098",
                                        height: "17.098",
                                        viewBox: "0 0 17.098 17.098",
                                        children: (0, a.jsx)("path", {
                                            id: "Icon_awesome-phone-alt",
                                            "data-name": "Icon awesome-phone-alt",
                                            d: "M16.61,12.082l-3.74-1.6a.8.8,0,0,0-.935.23l-1.656,2.024A12.378,12.378,0,0,1,4.361,6.816L6.385,5.16a.8.8,0,0,0,.23-.935L5.012.485A.807.807,0,0,0,4.094.021L.621.822A.8.8,0,0,0,0,1.6,15.493,15.493,0,0,0,15.495,17.1a.8.8,0,0,0,.781-.621l.8-3.473a.811.811,0,0,0-.468-.922Z",
                                            transform: "translate(0 0)",
                                            fill: "#1f2649"
                                        })
                                    })
                                }), (0, a.jsx)(i.default, {
                                    href: "tel:+1 (331) 245-9179",
                                    children: (0, a.jsx)("a", {
                                        children: "+1 (331) 245-9179"
                                    })
                                }), (0, a.jsx)("span", {
                                    className: "contact__info-location",
                                    children: "CHENNAI, INDIA"
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: "contact__form",
                            children: (0, a.jsxs)("form", {
                                action: "contact__submit",
                                id: "footer-contact",
                                children: [(0, a.jsxs)("div", {
                                    className: "form__group",
                                    children: [(0, a.jsx)("input", {
                                        className: "group__inputs",
                                        type: "text",
                                        id: "footer-name",
                                        required: !0,
                                        placeholder: "Name",
                                        onChange: function (t) {
                                            return n(t.target.value)
                                        },
                                        value: e
                                    }), (0, a.jsx)("label", {
                                        className: "form__group-label",
                                        htmlFor: "footer-name",
                                        children: "Name *"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "form__group",
                                    children: [(0, a.jsx)("input", {
                                        className: "group__inputs",
                                        type: "email",
                                        id: "footer-email",
                                        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
                                        required: !0,
                                        placeholder: "E-mail",
                                        onChange: function (t) {
                                            return u(t.target.value)
                                        },
                                        value: l
                                    }), (0, a.jsx)("label", {
                                        className: "form__group-label",
                                        htmlFor: "footer-email",
                                        children: "E-mail *"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "form__group",
                                    children: [(0, a.jsx)("textarea", {
                                        className: "group__inputs text-area",
                                        id: "footer-message",
                                        name: "message",
                                        rows: "5",
                                        placeholder: " ",
                                        required: !0,
                                        onChange: function (t) {
                                            return g(t.target.value)
                                        },
                                        value: f
                                    }), (0, a.jsx)("label", {
                                        className: "form__group-label",
                                        htmlFor: "footer-message",
                                        children: "Message *"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "form__group-submit",
                                    children: [(0, a.jsx)("div", {
                                        className: "form__group-checkbox",
                                        children: (0, a.jsxs)("label", {
                                            htmlFor: "footer-tos",
                                            className: "form__group-checkbox-label",
                                            children: [(0, a.jsx)("input", {
                                                type: "checkbox",
                                                name: "tos",
                                                value: "tos",
                                                id: "footer-tos",
                                                className: "form__group-checkbox-input",
                                                checked: y,
                                                onChange: function () {
                                                    return b(!y)
                                                }
                                            }), "I accept ", (0, a.jsx)(i.default, {
                                                href: "/terms-conditions",
                                                children: (0, a.jsx)("a", {
                                                    className: "form__group-submit-link",
                                                    children: "terms & conditions"
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "form__group-checkbox-styled"
                                            })]
                                        })
                                    }), (0, a.jsx)("input", {
                                        className: "form__group-button",
                                        type: "button",
                                        value: "Send",
                                        name: "submit",
                                        disabled: !y,
                                        onClick: function () {
                                            return function () {
                                                return _.apply(this, arguments)
                                            }()
                                        }
                                    })]
                                })]
                            })
                        })]
                    })
                })
            }
        },
        4814: function (t, e, n) {
            "use strict";
            n.d(e, {
                $: function () {
                    return r
                }
            });
            n(4051), n(129);

            function r(t) {
                var e = t.data.attributes.url;
                return e.startsWith("https://") ? e : "https://" + e
            }
        },
        6898: function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                __N_SSG: function () {
                    return xe
                },
                default: function () {
                    return we
                }
            });
            var r = n(5893),
                o = n(9378),
                a = n(7289),
                i = n(1664),
                s = n(7661),
                l = n(9008),
                c = n(3917),
                u = n.n(c),
                d = (n(3416), {
                    src: "_next/static/media/facebook-dark-blue.955a5a3d.svg",
                    height: 50,
                    width: 50
                }),
                p = {
                    src: "_next/static/media/twitter-dark-blue.6cbf8659.svg",
                    height: 50,
                    width: 50
                },
                h = {
                    src: "_next/static/media/linkedin-dark-blue.3f0f2b51.svg",
                    height: 50,
                    width: 50
                },
                f = {
                    src: "_next/static/media/share-dark-blue.b8211fce.svg",
                    height: 50,
                    width: 50
                },
                g = n(2792),
                m = n(7294),
                y = function () {
                    var t = function (e, n) {
                        return t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                        }, t(e, n)
                    };
                    return function (e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                b = function (t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.name = "AssertionError", n
                    }
                    return y(e, t), e
                }(Error);

            function _(t, e) {
                if (!t) throw new b(e)
            }

            function x(t) {
                var e = Object.entries(t).filter((function (t) {
                    var e = t[1];
                    return void 0 !== e && null !== e
                })).map((function (t) {
                    var e = t[0],
                        n = t[1];
                    return encodeURIComponent(e) + "=" + encodeURIComponent(String(n))
                }));
                return e.length > 0 ? "?" + e.join("&") : ""
            }
            var w = n(4184),
                v = n.n(w),
                j = function () {
                    var t = function (e, n) {
                        return t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                        }, t(e, n)
                    };
                    return function (e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                k = function () {
                    return k = Object.assign || function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }, k.apply(this, arguments)
                },
                N = function (t, e, n, r) {
                    return new(n || (n = Promise))((function (o, a) {
                        function i(t) {
                            try {
                                l(r.next(t))
                            } catch (Z) {
                                a(Z)
                            }
                        }

                        function s(t) {
                            try {
                                l(r.throw(t))
                            } catch (Z) {
                                a(Z)
                            }
                        }

                        function l(t) {
                            var e;
                            t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function (t) {
                                t(e)
                            }))).then(i, s)
                        }
                        l((r = r.apply(t, e || [])).next())
                    }))
                },
                S = function (t, e) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" === typeof Symbol && (a[Symbol.iterator] = function () {
                        return this
                    }), a;

                    function s(a) {
                        return function (s) {
                            return function (a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = e.call(t, i)
                                } catch (Z) {
                                    a = [6, Z], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                },
                O = function (t, e) {
                    var n = {};
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                    if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
                    }
                    return n
                },
                C = function (t) {
                    return !!t && ("object" === typeof t || "function" === typeof t) && "function" === typeof t.then
                },
                A = function (t, e) {
                    return {
                        left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - t / 2,
                        top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - e / 2
                    }
                },
                H = function (t, e) {
                    return {
                        top: (window.screen.height - e) / 2,
                        left: (window.screen.width - t) / 2
                    }
                };

            function I(t, e, n) {
                var r = e.height,
                    o = e.width,
                    a = O(e, ["height", "width"]),
                    i = k({
                        height: r,
                        width: o,
                        location: "no",
                        toolbar: "no",
                        status: "no",
                        directories: "no",
                        menubar: "no",
                        scrollbars: "yes",
                        resizable: "no",
                        centerscreen: "yes",
                        chrome: "yes"
                    }, a),
                    s = window.open(t, "", Object.keys(i).map((function (t) {
                        return t + "=" + i[t]
                    })).join(", "));
                if (n) var l = window.setInterval((function () {
                    try {
                        (null === s || s.closed) && (window.clearInterval(l), n(s))
                    } catch (Z) {
                        console.error(Z)
                    }
                }), 1e3);
                return s
            }
            var E = function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.openShareDialog = function (t) {
                            var n = e.props,
                                r = n.onShareWindowClose,
                                o = n.windowHeight,
                                a = void 0 === o ? 400 : o,
                                i = n.windowPosition,
                                s = void 0 === i ? "windowCenter" : i,
                                l = n.windowWidth,
                                c = void 0 === l ? 550 : l;
                            I(t, k({
                                height: a,
                                width: c
                            }, "windowCenter" === s ? A(c, a) : H(c, a)), r)
                        }, e.handleClick = function (t) {
                            return N(e, void 0, void 0, (function () {
                                var e, n, r, o, a, i, s, l, c, u;
                                return S(this, (function (d) {
                                    switch (d.label) {
                                        case 0:
                                            return e = this.props, n = e.beforeOnClick, r = e.disabled, o = e.networkLink, a = e.onClick, i = e.url, s = e.openShareDialogOnClick, l = e.opts, c = o(i, l), r ? [2] : (t.preventDefault(), n ? (u = n(), C(u) ? [4, u] : [3, 2]) : [3, 2]);
                                        case 1:
                                            d.sent(), d.label = 2;
                                        case 2:
                                            return s && this.openShareDialog(c), a && a(t, c), [2]
                                    }
                                }))
                            }))
                        }, e
                    }
                    return j(e, t), e.prototype.render = function () {
                        var t = this.props,
                            e = (t.beforeOnClick, t.children),
                            n = t.className,
                            r = t.disabled,
                            o = t.disabledStyle,
                            a = t.forwardedRef,
                            i = (t.networkLink, t.networkName),
                            s = (t.onShareWindowClose, t.openShareDialogOnClick, t.opts, t.resetButtonStyle),
                            l = t.style,
                            c = (t.url, t.windowHeight, t.windowPosition, t.windowWidth, O(t, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"])),
                            u = v()("react-share__ShareButton", {
                                "react-share__ShareButton--disabled": !!r,
                                disabled: !!r
                            }, n),
                            d = k(k(s ? {
                                backgroundColor: "transparent",
                                border: "none",
                                padding: 0,
                                font: "inherit",
                                color: "inherit",
                                cursor: "pointer"
                            } : {}, l), r && o);
                        return m.createElement("button", k({}, c, {
                            "aria-label": c["aria-label"] || i,
                            className: u,
                            onClick: this.handleClick,
                            ref: a,
                            style: d
                        }), e)
                    }, e.defaultProps = {
                        disabledStyle: {
                            opacity: .6
                        },
                        openShareDialogOnClick: !0,
                        resetButtonStyle: !0
                    }, e
                }(m.Component),
                L = E,
                M = function () {
                    return M = Object.assign || function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }, M.apply(this, arguments)
                };
            var $ = function (t, e, n, r) {
                function o(o, a) {
                    var i = n(o),
                        s = M({}, o);
                    return Object.keys(i).forEach((function (t) {
                        delete s[t]
                    })), m.createElement(L, M({}, r, s, {
                        forwardedRef: a,
                        networkName: t,
                        networkLink: e,
                        opts: n(o)
                    }))
                }
                return o.displayName = "ShareButton-" + t, (0, m.forwardRef)(o)
            };
            var P = $("facebook", (function (t, e) {
                var n = e.quote,
                    r = e.hashtag;
                return _(t, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + x({
                    u: t,
                    quote: n,
                    hashtag: r
                })
            }), (function (t) {
                return {
                    quote: t.quote,
                    hashtag: t.hashtag
                }
            }), {
                windowWidth: 550,
                windowHeight: 400
            });
            var W = $("twitter", (function (t, e) {
                var n = e.title,
                    r = e.via,
                    o = e.hashtags,
                    a = void 0 === o ? [] : o,
                    i = e.related,
                    s = void 0 === i ? [] : i;
                return _(t, "twitter.url"), _(Array.isArray(a), "twitter.hashtags is not an array"), _(Array.isArray(s), "twitter.related is not an array"), "https://twitter.com/share" + x({
                    url: t,
                    text: n,
                    via: r,
                    hashtags: a.length > 0 ? a.join(",") : void 0,
                    related: s.length > 0 ? s.join(",") : void 0
                })
            }), (function (t) {
                return {
                    hashtags: t.hashtags,
                    title: t.title,
                    via: t.via,
                    related: t.related
                }
            }), {
                windowWidth: 550,
                windowHeight: 400
            });
            var G = $("linkedin", (function (t, e) {
                var n = e.title,
                    r = e.summary,
                    o = e.source;
                return _(t, "linkedin.url"), "https://linkedin.com/shareArticle" + x({
                    url: t,
                    mini: "true",
                    title: n,
                    summary: r,
                    source: o
                })
            }), (function (t) {
                return {
                    title: t.title,
                    summary: t.summary,
                    source: t.source
                }
            }), {
                windowWidth: 750,
                windowHeight: 600
            });

            function Z() {
                return (Z = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            const z = ["children", "options"],
                T = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce(((t, e) => (t[e.toLowerCase()] = e, t)), {
                    for: "htmlFor"
                }),
                B = {
                    amp: "&",
                    apos: "'",
                    gt: ">",
                    lt: "<",
                    nbsp: "\xa0",
                    quot: "\u201c"
                },
                R = ["style", "script"],
                X = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
                D = /mailto:/i,
                F = /\n{2,}$/,
                U = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
                q = /^ *> ?/gm,
                V = /^ {2,}\n/,
                Q = /^(?:( *[-*_]) *){3,}(?:\n *)+\n/,
                Y = /^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,
                J = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
                K = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
                tt = /^(?:\n *)*\n/,
                et = /\r\n?/g,
                nt = /^\[\^([^\]]+)](:.*)\n/,
                rt = /^\[\^([^\]]+)]/,
                ot = /\f/g,
                at = /^\s*?\[(x|\s)\]/,
                it = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
                st = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
                lt = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
                ct = /&([a-z]+);/g,
                ut = /^<!--[\s\S]*?(?:-->)/,
                dt = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
                pt = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
                ht = /^\{.*\}$/,
                ft = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
                gt = /^<([^ >]+@[^ >]+)>/,
                mt = /^<([^ >]+:\/[^ >]+)>/,
                yt = / *\n+$/,
                bt = /(?:^|\n)( *)$/,
                _t = /-([a-z])?/gi,
                xt = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
                wt = /^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,
                vt = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
                jt = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
                kt = /(\[|\])/g,
                Nt = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
                St = /\t/g,
                Ot = /^ *\| */,
                Ct = /(^ *\||\| *$)/g,
                At = / *$/,
                Ht = /^ *:-+: *$/,
                It = /^ *:-+ *$/,
                Et = /^ *-+: *$/,
                Lt = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
                Mt = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
                $t = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
                Pt = /^\\([^0-9A-Za-z\s])/,
                Wt = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
                Gt = /^\n+/,
                Zt = /^([ \t]*)/,
                zt = /\\([^0-9A-Z\s])/gi,
                Tt = new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),
                Bt = new RegExp("^( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)", "gm"),
                Rt = new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),
                Xt = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",
                Dt = new RegExp("^\\[(" + Xt + ")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),
                Ft = new RegExp("^!\\[(" + Xt + ")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),
                Ut = [U, J, Y, it, st, ut, Bt, Rt, xt],
                qt = [...Ut, /^[^\n]+(?:  \n|\n{2,})/, lt, pt];

            function Vt(t) {
                return t.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g, "a").replace(/[\xe7\xc7]/g, "c").replace(/[\xf0\xd0]/g, "d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g, "e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g, "i").replace(/[\xd1\xf1]/g, "n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g, "o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g, "u").replace(/[\u0178\xff\xdd\xfd]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
            }

            function Qt(t) {
                return Et.test(t) ? "right" : Ht.test(t) ? "center" : It.test(t) ? "left" : null
            }

            function Yt(t, e, n) {
                const r = n.t;
                n.t = !0;
                const o = e(t.trim(), n);
                n.t = r;
                let a = [
                    []
                ];
                return o.forEach((function (t, e) {
                    "tableSeparator" === t.type ? 0 !== e && e !== o.length - 1 && a.push([]) : ("text" !== t.type || null != o[e + 1] && "tableSeparator" !== o[e + 1].type || (t.content = t.content.replace(At, "")), a[a.length - 1].push(t))
                })), a
            }

            function Jt(t, e, n) {
                n.o = !0;
                const r = Yt(t[1], e, n),
                    o = t[2].replace(Ct, "").split("|").map(Qt),
                    a = function (t, e, n) {
                        return t.trim().split("\n").map((function (t) {
                            return Yt(t, e, n)
                        }))
                    }(t[3], e, n);
                return n.o = !1, {
                    align: o,
                    cells: a,
                    header: r,
                    type: "table"
                }
            }

            function Kt(t, e) {
                return null == t.align[e] ? {} : {
                    textAlign: t.align[e]
                }
            }

            function te(t) {
                return function (e, n) {
                    return n.o ? t.exec(e) : null
                }
            }

            function ee(t) {
                return function (e, n) {
                    return n.o || n.u ? t.exec(e) : null
                }
            }

            function ne(t) {
                return function (e, n) {
                    return n.o || n.u ? null : t.exec(e)
                }
            }

            function re(t) {
                return function (e) {
                    return t.exec(e)
                }
            }

            function oe(t, e, n) {
                if (e.o || e.u) return null;
                if (n && !n.endsWith("\n")) return null;
                let r = "";
                t.split("\n").every((t => !Ut.some((e => e.test(t))) && (r += t + "\n", t.trim())));
                const o = r.trimEnd();
                return "" == o ? null : [r, o]
            }

            function ae(t) {
                try {
                    if (decodeURIComponent(t).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data):/i)) return null
                } catch (t) {
                    return null
                }
                return t
            }

            function ie(t) {
                return t.replace(zt, "$1")
            }

            function se(t, e, n) {
                const r = n.o || !1,
                    o = n.u || !1;
                n.o = !0, n.u = !0;
                const a = t(e, n);
                return n.o = r, n.u = o, a
            }

            function le(t, e, n) {
                const r = n.o || !1,
                    o = n.u || !1;
                n.o = !1, n.u = !0;
                const a = t(e, n);
                return n.o = r, n.u = o, a
            }

            function ce(t, e, n) {
                return n.o = !1, t(e + "\n\n", n)
            }
            const ue = (t, e, n) => ({
                content: se(e, t[1], n)
            });

            function de() {
                return {}
            }

            function pe() {
                return null
            }

            function he(...t) {
                return t.filter(Boolean).join(" ")
            }

            function fe(t, e, n) {
                let r = t;
                const o = e.split(".");
                for (; o.length && (r = r[o[0]], void 0 !== r);) o.shift();
                return r || n
            }
            var ge, me;

            function ye(t, e = {}) {
                e.overrides = e.overrides || {}, e.slugify = e.slugify || Vt, e.namedCodesToUnicode = e.namedCodesToUnicode ? Z({}, B, e.namedCodesToUnicode) : B;
                const n = e.createElement || m.createElement;

                function r(t, r, ...o) {
                    const a = fe(e.overrides, `${t}.props`, {});
                    return n(function (t, e) {
                        const n = fe(e, t);
                        return n ? "function" == typeof n || "object" == typeof n && "render" in n ? n : fe(e, `${t}.component`, t) : t
                    }(t, e.overrides), Z({}, r, a, {
                        className: he(null == r ? void 0 : r.className, a.className) || void 0
                    }), ...o)
                }

                function o(t) {
                    let n = !1;
                    e.forceInline ? n = !0 : e.forceBlock || (n = !1 === Nt.test(t));
                    const o = u(c(n ? t : `${t.trimEnd().replace(Gt,"")}\n\n`, {
                        o: n
                    }));
                    for (;
                        "string" == typeof o[o.length - 1] && !o[o.length - 1].trim();) o.pop();
                    if (null === e.wrapper) return o;
                    const a = e.wrapper || (n ? "span" : "div");
                    let i;
                    if (o.length > 1 || e.forceWrapper) i = o;
                    else {
                        if (1 === o.length) return i = o[0], "string" == typeof i ? r("span", {
                            key: "outer"
                        }, i) : i;
                        i = null
                    }
                    return m.createElement(a, {
                        key: "outer"
                    }, i)
                }

                function a(t) {
                    const e = t.match(X);
                    return e ? e.reduce((function (t, e, n) {
                        const r = e.indexOf("=");
                        if (-1 !== r) {
                            const i = (a = e.slice(0, r), -1 !== a.indexOf("-") && null === a.match(dt) && (a = a.replace(_t, (function (t, e) {
                                    return e.toUpperCase()
                                }))), a).trim(),
                                s = function (t) {
                                    const e = t[0];
                                    return ('"' === e || "'" === e) && t.length >= 2 && t[t.length - 1] === e ? t.slice(1, -1) : t
                                }(e.slice(r + 1).trim()),
                                l = T[i] || i,
                                c = t[l] = function (t, e) {
                                    return "style" === t ? e.split(/;\s?/).reduce((function (t, e) {
                                        const n = e.slice(0, e.indexOf(":"));
                                        return t[n.replace(/(-[a-z])/g, (t => t[1].toUpperCase()))] = e.slice(n.length + 1).trim(), t
                                    }), {}) : "href" === t ? ae(e) : (e.match(ht) && (e = e.slice(1, e.length - 1)), "true" === e || "false" !== e && e)
                                }(i, s);
                            "string" == typeof c && (lt.test(c) || pt.test(c)) && (t[l] = m.cloneElement(o(c.trim()), {
                                key: n
                            }))
                        } else "style" !== e && (t[T[e] || e] = !0);
                        var a;
                        return t
                    }), {}) : void 0
                }
                const i = [],
                    s = {},
                    l = {
                        blockQuote: {
                            i: ne(U),
                            l: ge.HIGH,
                            _: (t, e, n) => ({
                                content: e(t[0].replace(q, ""), n)
                            }),
                            p: (t, e, n) => r("blockquote", {
                                key: n.g
                            }, e(t.content, n))
                        },
                        breakLine: {
                            i: re(V),
                            l: ge.HIGH,
                            _: de,
                            p: (t, e, n) => r("br", {
                                key: n.g
                            })
                        },
                        breakThematic: {
                            i: ne(Q),
                            l: ge.HIGH,
                            _: de,
                            p: (t, e, n) => r("hr", {
                                key: n.g
                            })
                        },
                        codeBlock: {
                            i: ne(J),
                            l: ge.MAX,
                            _: t => ({
                                content: t[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""),
                                lang: void 0
                            }),
                            p: (t, e, n) => r("pre", {
                                key: n.g
                            }, r("code", {
                                className: t.lang ? `lang-${t.lang}` : ""
                            }, t.content))
                        },
                        codeFenced: {
                            i: ne(Y),
                            l: ge.MAX,
                            _: t => ({
                                content: t[3],
                                lang: t[2] || void 0,
                                type: "codeBlock"
                            })
                        },
                        codeInline: {
                            i: ee(K),
                            l: ge.LOW,
                            _: t => ({
                                content: t[2]
                            }),
                            p: (t, e, n) => r("code", {
                                key: n.g
                            }, t.content)
                        },
                        footnote: {
                            i: ne(nt),
                            l: ge.MAX,
                            _: t => (i.push({
                                footnote: t[2],
                                identifier: t[1]
                            }), {}),
                            p: pe
                        },
                        footnoteReference: {
                            i: te(rt),
                            l: ge.HIGH,
                            _: t => ({
                                content: t[1],
                                target: `#${e.slugify(t[1])}`
                            }),
                            p: (t, e, n) => r("a", {
                                key: n.g,
                                href: ae(t.target)
                            }, r("sup", {
                                key: n.g
                            }, t.content))
                        },
                        gfmTask: {
                            i: te(at),
                            l: ge.HIGH,
                            _: t => ({
                                completed: "x" === t[1].toLowerCase()
                            }),
                            p: (t, e, n) => r("input", {
                                checked: t.completed,
                                key: n.g,
                                readOnly: !0,
                                type: "checkbox"
                            })
                        },
                        heading: {
                            i: ne(it),
                            l: ge.HIGH,
                            _: (t, n, r) => ({
                                content: se(n, t[2], r),
                                id: e.slugify(t[2]),
                                level: t[1].length
                            }),
                            p: (t, e, n) => (t.tag = `h${t.level}`, r(t.tag, {
                                id: t.id,
                                key: n.g
                            }, e(t.content, n)))
                        },
                        headingSetext: {
                            i: ne(st),
                            l: ge.MAX,
                            _: (t, e, n) => ({
                                content: se(e, t[1], n),
                                level: "=" === t[2] ? 1 : 2,
                                type: "heading"
                            })
                        },
                        htmlComment: {
                            i: re(ut),
                            l: ge.HIGH,
                            _: () => ({}),
                            p: pe
                        },
                        image: {
                            i: ee(Ft),
                            l: ge.HIGH,
                            _: t => ({
                                alt: t[1],
                                target: ie(t[2]),
                                title: t[3]
                            }),
                            p: (t, e, n) => r("img", {
                                key: n.g,
                                alt: t.alt || void 0,
                                title: t.title || void 0,
                                src: ae(t.target)
                            })
                        },
                        link: {
                            i: te(Dt),
                            l: ge.LOW,
                            _: (t, e, n) => ({
                                content: le(e, t[1], n),
                                target: ie(t[2]),
                                title: t[3]
                            }),
                            p: (t, e, n) => r("a", {
                                key: n.g,
                                href: ae(t.target),
                                title: t.title
                            }, e(t.content, n))
                        },
                        linkAngleBraceStyleDetector: {
                            i: te(mt),
                            l: ge.MAX,
                            _: t => ({
                                content: [{
                                    content: t[1],
                                    type: "text"
                                }],
                                target: t[1],
                                type: "link"
                            })
                        },
                        linkBareUrlDetector: {
                            i: (t, e) => e.m ? null : te(ft)(t, e),
                            l: ge.MAX,
                            _: t => ({
                                content: [{
                                    content: t[1],
                                    type: "text"
                                }],
                                target: t[1],
                                title: void 0,
                                type: "link"
                            })
                        },
                        linkMailtoDetector: {
                            i: te(gt),
                            l: ge.MAX,
                            _(t) {
                                let e = t[1],
                                    n = t[1];
                                return D.test(n) || (n = "mailto:" + n), {
                                    content: [{
                                        content: e.replace("mailto:", ""),
                                        type: "text"
                                    }],
                                    target: n,
                                    type: "link"
                                }
                            }
                        },
                        list: {
                            i(t, e, n) {
                                const r = bt.exec(n);
                                return !r || !e.h && e.o ? null : Rt.exec(t = r[1] + t)
                            },
                            l: ge.HIGH,
                            _(t, e, n) {
                                const r = t[2],
                                    o = r.length > 1,
                                    a = o ? +r : void 0,
                                    i = t[0].replace(F, "\n").match(Bt);
                                let s = !1;
                                return {
                                    items: i.map((function (t, r) {
                                        const o = Tt.exec(t)[0].length,
                                            a = new RegExp("^ {1," + o + "}", "gm"),
                                            l = t.replace(a, "").replace(Tt, ""),
                                            c = r === i.length - 1,
                                            u = -1 !== l.indexOf("\n\n") || c && s;
                                        s = u;
                                        const d = n.o,
                                            p = n.h;
                                        let h;
                                        n.h = !0, u ? (n.o = !1, h = l.replace(yt, "\n\n")) : (n.o = !0, h = l.replace(yt, ""));
                                        const f = e(h, n);
                                        return n.o = d, n.h = p, f
                                    })),
                                    ordered: o,
                                    start: a
                                }
                            },
                            p: (t, e, n) => r(t.ordered ? "ol" : "ul", {
                                key: n.g,
                                start: t.start
                            }, t.items.map((function (t, o) {
                                return r("li", {
                                    key: o
                                }, e(t, n))
                            })))
                        },
                        newlineCoalescer: {
                            i: ne(tt),
                            l: ge.LOW,
                            _: de,
                            p: () => "\n"
                        },
                        paragraph: {
                            i: oe,
                            l: ge.LOW,
                            _: ue,
                            p: (t, e, n) => r("p", {
                                key: n.g
                            }, e(t.content, n))
                        },
                        ref: {
                            i: te(wt),
                            l: ge.MAX,
                            _: t => (s[t[1]] = {
                                target: t[2],
                                title: t[4]
                            }, {}),
                            p: pe
                        },
                        refImage: {
                            i: ee(vt),
                            l: ge.MAX,
                            _: t => ({
                                alt: t[1] || void 0,
                                ref: t[2]
                            }),
                            p: (t, e, n) => r("img", {
                                key: n.g,
                                alt: t.alt,
                                src: ae(s[t.ref].target),
                                title: s[t.ref].title
                            })
                        },
                        refLink: {
                            i: te(jt),
                            l: ge.MAX,
                            _: (t, e, n) => ({
                                content: e(t[1], n),
                                fallbackContent: e(t[0].replace(kt, "\\$1"), n),
                                ref: t[2]
                            }),
                            p: (t, e, n) => s[t.ref] ? r("a", {
                                key: n.g,
                                href: ae(s[t.ref].target),
                                title: s[t.ref].title
                            }, e(t.content, n)) : r("span", {
                                key: n.g
                            }, e(t.fallbackContent, n))
                        },
                        table: {
                            i: ne(xt),
                            l: ge.HIGH,
                            _: Jt,
                            p: (t, e, n) => r("table", {
                                key: n.g
                            }, r("thead", null, r("tr", null, t.header.map((function (o, a) {
                                return r("th", {
                                    key: a,
                                    style: Kt(t, a)
                                }, e(o, n))
                            })))), r("tbody", null, t.cells.map((function (o, a) {
                                return r("tr", {
                                    key: a
                                }, o.map((function (o, a) {
                                    return r("td", {
                                        key: a,
                                        style: Kt(t, a)
                                    }, e(o, n))
                                })))
                            }))))
                        },
                        tableSeparator: {
                            i: function (t, e) {
                                return e.t ? Ot.exec(t) : null
                            },
                            l: ge.HIGH,
                            _: function () {
                                return {
                                    type: "tableSeparator"
                                }
                            },
                            p: () => " | "
                        },
                        text: {
                            i: re(Wt),
                            l: ge.MIN,
                            _: t => ({
                                content: t[0].replace(ct, ((t, n) => e.namedCodesToUnicode[n] ? e.namedCodesToUnicode[n] : t))
                            }),
                            p: t => t.content
                        },
                        textBolded: {
                            i: ee(Lt),
                            l: ge.MED,
                            _: (t, e, n) => ({
                                content: e(t[2], n)
                            }),
                            p: (t, e, n) => r("strong", {
                                key: n.g
                            }, e(t.content, n))
                        },
                        textEmphasized: {
                            i: ee(Mt),
                            l: ge.LOW,
                            _: (t, e, n) => ({
                                content: e(t[2], n)
                            }),
                            p: (t, e, n) => r("em", {
                                key: n.g
                            }, e(t.content, n))
                        },
                        textEscaped: {
                            i: ee(Pt),
                            l: ge.HIGH,
                            _: t => ({
                                content: t[1],
                                type: "text"
                            })
                        },
                        textStrikethroughed: {
                            i: ee($t),
                            l: ge.LOW,
                            _: ue,
                            p: (t, e, n) => r("del", {
                                key: n.g
                            }, e(t.content, n))
                        }
                    };
                !0 !== e.disableParsingRawHTML && (l.htmlBlock = {
                    i: re(lt),
                    l: ge.HIGH,
                    _(t, e, n) {
                        const [, r] = t[3].match(Zt), o = new RegExp(`^${r}`, "gm"), i = t[3].replace(o, ""), s = (l = i, qt.some((t => t.test(l))) ? ce : se);
                        var l;
                        const c = t[1].toLowerCase(),
                            u = -1 !== R.indexOf(c);
                        n.m = n.m || "a" === c;
                        const d = u ? t[3] : s(e, i, n);
                        return n.m = !1, {
                            attrs: a(t[2]),
                            content: d,
                            noInnerParse: u,
                            tag: u ? c : t[1]
                        }
                    },
                    p: (t, e, n) => r(t.tag, Z({
                        key: n.g
                    }, t.attrs), t.noInnerParse ? t.content : e(t.content, n))
                }, l.htmlSelfClosing = {
                    i: re(pt),
                    l: ge.HIGH,
                    _: t => ({
                        attrs: a(t[2] || ""),
                        tag: t[1]
                    }),
                    p: (t, e, n) => r(t.tag, Z({}, t.attrs, {
                        key: n.g
                    }))
                });
                const c = function (t) {
                        let e = Object.keys(t);

                        function n(r, o) {
                            let a = [],
                                i = "";
                            for (; r;) {
                                let s = 0;
                                for (; s < e.length;) {
                                    const l = e[s],
                                        c = t[l],
                                        u = c.i(r, o, i);
                                    if (u) {
                                        const t = u[0];
                                        r = r.substring(t.length);
                                        const e = c._(u, n, o);
                                        null == e.type && (e.type = l), a.push(e), i = t;
                                        break
                                    }
                                    s++
                                }
                            }
                            return a
                        }
                        return e.sort((function (e, n) {
                                let r = t[e].l,
                                    o = t[n].l;
                                return r !== o ? r - o : e < n ? -1 : 1
                            })),
                            function (t, e) {
                                return n(function (t) {
                                    return t.replace(et, "\n").replace(ot, "").replace(St, "    ")
                                }(t), e)
                            }
                    }(l),
                    u = (d = l, p = function (t, e, n) {
                        return d[t.type].p(t, e, n)
                    }, function t(e, n = {}) {
                        if (Array.isArray(e)) {
                            const r = n.g,
                                o = [];
                            let a = !1;
                            for (let i = 0; i < e.length; i++) {
                                n.g = i;
                                const r = t(e[i], n),
                                    s = "string" == typeof r;
                                s && a ? o[o.length - 1] += r : null !== r && o.push(r), a = s
                            }
                            return n.g = r, o
                        }
                        return p(e, t, n)
                    });
                var d, p;
                const h = o(t);
                return i.length ? r("div", null, h, r("footer", {
                    key: "footer"
                }, i.map((function (t) {
                    return r("div", {
                        id: e.slugify(t.identifier),
                        key: t.identifier
                    }, t.identifier, u(c(t.footnote, {
                        o: !0
                    })))
                })))) : h
            }(me = ge || (ge = {}))[me.MAX = 0] = "MAX", me[me.HIGH = 1] = "HIGH", me[me.MED = 2] = "MED", me[me.LOW = 3] = "LOW", me[me.MIN = 4] = "MIN";
            var be = t => {
                    let {
                        children: e,
                        options: n
                    } = t, r = function (t, e) {
                        if (null == t) return {};
                        var n, r, o = {},
                            a = Object.keys(t);
                        for (r = 0; r < a.length; r++) e.indexOf(n = a[r]) >= 0 || (o[n] = t[n]);
                        return o
                    }(t, z);
                    return m.cloneElement(ye(e, n), r)
                },
                _e = n(4814),
                xe = !0,
                we = function (t) {
                    var e = t.article,
                        n = t.articles,
                        c = t.index,
                        y = n.slice(n.length - 6, n.length),
                        b = (0, m.useState)(!0),
                        _ = b[0],
                        x = b[1],
                        w = (0, m.useState)(0),
                        v = w[0],
                        j = w[1];
                    (0, m.useEffect)((function () {
                        j(window.location.host + window.location.pathname)
                    }), []);
                    var k = e.attributes.content,
                        N = e.attributes.thumbnail;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(l.default, {
                            children: [(0, r.jsx)("meta", {
                                name: "description",
                                content: "".concat(e.attributes.metadescription)
                            }), (0, r.jsx)("meta", {
                                property: "og:image",
                                content: "".concat((0, _e.$)(e.attributes.thumbnail))
                            }), (0, r.jsx)("meta", {
                                property: "og:image:secure_url",
                                content: "".concat((0, _e.$)(e.attributes.thumbnail))
                            }), (0, r.jsx)("meta", {
                                property: "og:image:width",
                                content: N.data.attributes.width
                            }), (0, r.jsx)("meta", {
                                property: "og:image:height",
                                content: N.data.attributes.height
                            }), "\xa8", (0, r.jsx)("link", {
                                rel: "canonical",
                                href: "https://www.stormit.cloud/blog/".concat(e.attributes.slug, "/")
                            }), (0, r.jsx)("title", {
                                children: "".concat(e.attributes.metatitle)
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "blog-post",
                            children: [(0, r.jsxs)("section", {
                                className: "blog-post__main",
                                children: [(0, r.jsxs)("div", {
                                    className: "blog-post__case-study ".concat(null === e.attributes.category.data || "case-studies" != e.attributes.category.data.attributes.slug ? "hide" : ""),
                                    children: [(0, r.jsx)("div", {
                                        className: "case-study__header-thumbnail",
                                        children: (0, r.jsx)(s.Z, {
                                            src: "".concat((0, _e.$)(e.attributes.thumbnail)),
                                            alt: "",
                                            layout: "fill",
                                            objectFit: "cover"
                                        })
                                    }), (0, r.jsxs)("div", {
                                        className: "case-study__header-content",
                                        children: [(0, r.jsx)("div", {
                                            className: "case-study__header-thumb-logo ".concat(null === e.attributes.caselogo.data ? "hidden" : ""),
                                            children: (0, r.jsx)(s.Z, {
                                                src: null === e.attributes.caselogo.data ? "/" : (0, _e.$)(e.attributes.caselogo),
                                                priority: !0,
                                                layout: "fill",
                                                alt: ""
                                            })
                                        }), (0, r.jsx)("p", {
                                            className: "case-study__header-thumb-title",
                                            children: "Case study"
                                        }), null === e.attributes.category.data || "case-studies" != e.attributes.category.data.attributes.slug ? "" : (0, r.jsx)("h1", {
                                            className: "case-study__header-thumb-text",
                                            children: e.attributes.title
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "blog-post__main-box",
                                    children: [(0, r.jsxs)("div", {
                                        className: "blog-post__main-content",
                                        children: [(0, r.jsxs)("div", {
                                            className: "blog-post__main-category ".concat(null === e.attributes.category.data || "case-studies" !== e.attributes.category.data.attributes.slug ? "" : "case-study-hide"),
                                            children: [(0, r.jsx)("span", {
                                                className: "blog-post__item-tag active",
                                                children: "Category"
                                            }), (0, r.jsx)("span", {
                                                className: "blog-post__item-tag",
                                                children: null === e.attributes.category.data ? "" : e.attributes.category.data.attributes.name
                                            })]
                                        }), null === e.attributes.category.data || "case-studies" !== e.attributes.category.data.attributes.slug ? (0, r.jsx)("h1", {
                                            children: e.attributes.title
                                        }) : "", (0, r.jsx)("div", {
                                            className: "blog-post__main-thumb ".concat(null === e.attributes.category.data || "case-studies" !== e.attributes.category.data.attributes.slug ? "" : "case-study-hide"),
                                            children: (0, r.jsx)(s.Z, {
                                                src: "".concat((0, _e.$)(e.attributes.thumbnail)),
                                                priority: !0,
                                                layout: "fill",
                                                alt: ""
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: "blog-post__body",
                                            children: (0, r.jsx)(be, {
                                                options: {
                                                    overrides: {
                                                        Calculator: {
                                                            component: a.Z
                                                        }
                                                    }
                                                },
                                                children: k
                                            })
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "blog-post__main-contact-box",
                                        children: [(0, r.jsx)("p", {
                                            className: "blog-post__main-contact-text",
                                            children: "Are you ready to accelerate your business to the cloud?"
                                        }), (0, r.jsx)(i.default, {
                                            href: "/contact",
                                            passHref: !0,
                                            children: (0, r.jsx)("a", {
                                                className: "blog-post__main-contact-link",
                                                children: "Contact us"
                                            })
                                        })]
                                    })]
                                })]
                            }), (0, r.jsx)("section", {
                                className: "blog-post__footer",
                                children: (0, r.jsxs)("div", {
                                    className: "blog-post__footer-box",
                                    children: [(0, r.jsx)("p", {
                                        className: "blog-post__footer-text",
                                        children: "Do you like it? Share it with your colleagues and friends"
                                    }), (0, r.jsxs)("div", {
                                        className: "blog-post__footer-social-box",
                                        children: [(0, r.jsx)(P, {
                                            url: v,
                                            children: (0, r.jsx)("span", {
                                                className: "blog-post__footer-social-link",
                                                children: (0, r.jsx)(s.Z, {
                                                    src: d,
                                                    alt: "Facebook Share"
                                                })
                                            })
                                        }), (0, r.jsx)(W, {
                                            url: v,
                                            children: (0, r.jsx)("span", {
                                                className: "blog-post__footer-social-link",
                                                children: (0, r.jsx)(s.Z, {
                                                    src: p,
                                                    alt: "Twitter Share"
                                                })
                                            })
                                        }), (0, r.jsx)(G, {
                                            url: v,
                                            children: (0, r.jsx)("span", {
                                                className: "blog-post__footer-social-link",
                                                children: (0, r.jsx)(s.Z, {
                                                    src: h,
                                                    alt: "LinkedIn Share"
                                                })
                                            })
                                        }), (0, r.jsx)("span", {
                                            className: "blog-post__footer-social-link",
                                            onClick: function () {
                                                return x(!_)
                                            },
                                            children: (0, r.jsx)(s.Z, {
                                                src: f,
                                                alt: "Embeded Link"
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "blog-post__footer-social-link-embed ".concat(!1 === _ ? "active" : ""),
                                            children: [(0, r.jsx)("div", {
                                                className: "blog-post__footer-social-link-embed-close",
                                                onClick: function () {
                                                    return x(!_)
                                                },
                                                children: (0, r.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 320 512",
                                                    children: (0, r.jsx)("path", {
                                                        d: "M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                                                    })
                                                })
                                            }), (0, r.jsx)("p", {
                                                className: "blog-post__footer-social-link-embed-text",
                                                children: "Share Link"
                                            }), (0, r.jsx)("input", {
                                                className: "blog-post__footer-social-link-embed-input",
                                                type: "text",
                                                readOnly: !0,
                                                value: "".concat(v)
                                            })]
                                        })]
                                    })]
                                })
                            }), (0, r.jsxs)("section", {
                                className: "blog-post__related",
                                children: [(0, r.jsxs)("div", {
                                    className: "blog-post__related-title-box",
                                    children: [(0, r.jsx)("h3", {
                                        className: "blog-post__related-title",
                                        children: "Similar blog posts"
                                    }), (0, r.jsx)(i.default, {
                                        href: "/blog",
                                        children: (0, r.jsx)("a", {
                                            className: "blog-post__related-link",
                                            children: "See all posts"
                                        })
                                    })]
                                }), (0, r.jsx)(u(), {
                                    className: "carousel blog-post__related-carousel",
                                    elementType: "div",
                                    options: {
                                        initialIndex: 2,
                                        wrapAround: !0
                                    },
                                    disableImagesLoaded: !1,
                                    reloadOnUpdate: !0,
                                    static: !0,
                                    children: y.map((function (t, e) {
                                        return (0, r.jsxs)("div", {
                                            className: "blog__archive-post-item carousel-cell",
                                            children: [(0, r.jsx)(i.default, {
                                                href: "/blog/".concat(t.attributes.slug),
                                                passHref: !0,
                                                children: (0, r.jsx)("div", {
                                                    className: "blog__item-img",
                                                    children: (0, r.jsx)(s.Z, {
                                                        src: (0, _e.$)(t.attributes.thumbnail),
                                                        layout: "fill",
                                                        alt: ""
                                                    })
                                                })
                                            }), (0, r.jsxs)("div", {
                                                className: "post__item-content",
                                                children: [(0, r.jsxs)("div", {
                                                    className: "post__item-tags",
                                                    children: [(0, r.jsx)("span", {
                                                        className: "post__item-tag active",
                                                        children: "Category"
                                                    }), (0, r.jsx)("span", {
                                                        className: "post__item-tag",
                                                        children: null === t.attributes.category.data ? "" : t.attributes.category.data.attributes.name
                                                    })]
                                                }), (0, r.jsx)(i.default, {
                                                    href: "/blog/".concat(t.attributes.slug),
                                                    passHref: !0,
                                                    children: (0, r.jsx)("a", {
                                                        children: (0, r.jsx)("p", {
                                                            className: "post__item-title",
                                                            children: t.attributes.title
                                                        })
                                                    })
                                                }), (0, r.jsx)("p", {
                                                    className: "post__item-text",
                                                    children: t.attributes.description
                                                }), (0, r.jsx)("div", {
                                                    className: "post__item-readmore-box",
                                                    children: (0, r.jsx)(i.default, {
                                                        href: "/blog/".concat(t.attributes.slug),
                                                        passHref: !0,
                                                        children: (0, r.jsxs)("a", {
                                                            className: "post__item-readmore",
                                                            "aria-label": "Find out more about: ".concat(t.attributes.title),
                                                            children: ["Find out more", (0, r.jsx)("div", {
                                                                className: "post__item-readmore-arrow",
                                                                children: (0, r.jsx)(s.Z, {
                                                                    src: g.Z,
                                                                    alt: ""
                                                                })
                                                            })]
                                                        })
                                                    })
                                                })]
                                            })]
                                        }, e)
                                    }))
                                }, c)]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "padding-footer"
                        }), (0, r.jsx)(o.Z, {})]
                    })
                }
        },
        4654: function () {}
    },
    function (t) {
        t.O(0, [647, 712, 129, 289, 774, 888, 179], (function () {
            return e = 4163, t(t.s = e);
            var e
        }));
        var e = t.O();
        _N_E = e
    }
]);