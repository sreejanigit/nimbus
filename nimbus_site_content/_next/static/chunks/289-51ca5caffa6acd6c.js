"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [289], {
        7289: function (e, t, a) {
            var r = a(4051),
                n = a.n(r),
                o = a(5893),
                s = a(9669),
                c = a.n(s),
                l = a(1664),
                i = a(7294);

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                return r
            }

            function m(e, t, a, r, n, o, s) {
                try {
                    var c = e[o](s),
                        l = c.value
                } catch (i) {
                    return void a(i)
                }
                c.done ? t(l) : Promise.resolve(l).then(r, n)
            }

            function d(e) {
                return function () {
                    var t = this,
                        a = arguments;
                    return new Promise((function (r, n) {
                        var o = e.apply(t, a);

                        function s(e) {
                            m(o, r, n, s, c, "next", e)
                        }

                        function c(e) {
                            m(o, r, n, s, c, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function p(e) {
                return function (e) {
                    if (Array.isArray(e)) return u(e)
                }(e) || function (e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function (e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return u(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(a);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return u(e, t)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            t.Z = function () {
                var e = (0, i.useState)(!1),
                    t = e[0],
                    a = e[1],
                    r = (0, i.useState)(!1),
                    s = r[0],
                    u = r[1],
                    m = (0, i.useState)(""),
                    h = m[0],
                    _ = m[1],
                    f = (0, i.useState)(""),
                    v = f[0],
                    x = f[1],
                    g = (0, i.useState)(""),
                    b = g[0],
                    N = g[1],
                    j = (0, i.useState)(""),
                    y = j[0],
                    w = j[1],
                    S = (0, i.useState)(""),
                    k = S[0],
                    C = S[1],
                    A = (0, i.useState)(""),
                    q = A[0],
                    E = A[1],
                    F = (0, i.useState)(""),
                    M = F[0],
                    P = F[1],
                    T = (0, i.useState)(""),
                    D = T[0],
                    I = T[1],
                    z = (0, i.useState)(!1),
                    B = z[0],
                    O = z[1],
                    Y = (0, i.useRef)(),
                    V = [{
                        name: "Europe",
                        value: 35
                    }, {
                        name: "North America",
                        value: 35
                    }, {
                        name: "South America",
                        value: 45
                    }, {
                        name: "APAC",
                        value: 57
                    }, {
                        name: "Middle East",
                        value: 45
                    }, {
                        name: "Global",
                        value: 45
                    }],
                    $ = (0, i.useState)(new Array(V.length).fill(!1)),
                    G = $[0],
                    R = $[1],
                    U = h * v + 6e-7 * b;
                U = Math.round(U);

                function Z() {
                    return (Z = d(n().mark((function e() {
                        var t, r, o, s, l;
                        return n().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = p(document.querySelectorAll("#step-two .group__inputs")), r = t.every((function (e) {
                                            return e.reportValidity()
                                        })), o = window.location.pathname, r) try {
                                        s = {
                                            data: {
                                                name: k,
                                                email: q,
                                                phone: M,
                                                message: D,
                                                estimate: U,
                                                monthly: h,
                                                regional: v,
                                                request: b,
                                                tos: B,
                                                path: o
                                            }
                                        }, c().post("https://cms.stormit.cloud/api/calculators", s, {
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        }).then((function (e) {
                                            200 === e.status ? console.log("Message sent!") : console.log("Error, something went wrong, try again!")
                                        })), a(!1), u(!1), _(""), x(""), N(""), w(""), C(""), E(""), P(""), I(""), O(!1), l = G.map((function (e) {
                                            return !0 === e ? !e : e
                                        })), R(l)
                                    } catch (n) {
                                        console.log(n)
                                    }
                                    case 4: case "end": return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                return (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsxs)("div", {
                        className: "cost-calculator__wrapper",
                        children: [(0, o.jsx)("section", {
                            className: "cost-calculator__view",
                            ref: Y,
                            id: "cost-calc"
                        }), (0, o.jsx)("section", {
                            className: "cost-calculator__calc ".concat(0 == t ? "" : "active"),
                            children: (0, o.jsxs)("div", {
                                className: "footer__contact",
                                children: [(0, o.jsx)("div", {
                                    className: "contact__content",
                                    children: (0, o.jsxs)("div", {
                                        className: "contact__content-box",
                                        children: [(0, o.jsx)("p", {
                                            className: "contact__title",
                                            children: "Estimate Your Monthly Bill"
                                        }), (0, o.jsx)("p", {
                                            className: "contact__text",
                                            children: "Save up to 60% on your CDN cost with Nimbus System optimized pricing"
                                        })]
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "contact__form",
                                    children: (0, o.jsxs)("form", {
                                        action: "",
                                        className: "contact__form-body",
                                        id: "step-one",
                                        children: [(0, o.jsxs)("div", {
                                            className: "form__group",
                                            children: [(0, o.jsx)("input", {
                                                className: "group__inputs",
                                                type: "number",
                                                id: "data-transfer",
                                                required: !0,
                                                placeholder: "Monthly Data Transfer Out (TB) *",
                                                onChange: function (e) {
                                                    return _(e.target.value)
                                                },
                                                value: h
                                            }), (0, o.jsx)("label", {
                                                className: "form__group-label",
                                                htmlFor: "data-transfer",
                                                children: "Monthly Data Transfer Out (TB) *"
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "form__group",
                                            children: [(0, o.jsx)("input", {
                                                className: "group__inputs",
                                                type: "text",
                                                id: "cdn-provider",
                                                required: !0,
                                                placeholder: "CDN Provider *",
                                                onChange: function (e) {
                                                    return w(e.target.value)
                                                },
                                                value: y
                                            }), (0, o.jsx)("label", {
                                                className: "form__group-label",
                                                htmlFor: "cdn-provider",
                                                children: "CDN Provider *"
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "form__group",
                                            children: [(0, o.jsx)("input", {
                                                className: "group__inputs",
                                                type: "number",
                                                id: "requests",
                                                placeholder: "Number of requests per month",
                                                onChange: function (e) {
                                                    return N(e.target.value)
                                                },
                                                value: b
                                            }), (0, o.jsx)("label", {
                                                className: "form__group-label",
                                                htmlFor: "requests",
                                                children: "Number of requests per month"
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "form__group-submit",
                                            children: [(0, o.jsx)("label", {
                                                className: "form__group-checkbox-label-title",
                                                children: "Your end user location *"
                                            }), (0, o.jsx)("div", {
                                                className: "form__group-checkbox",
                                                children: V.map((function (e, t) {
                                                    var a = e.name;
                                                    return (0, o.jsxs)("label", {
                                                        htmlFor: a,
                                                        className: "form__group-checkbox-label",
                                                        children: [(0, o.jsx)("input", {
                                                            type: "checkbox",
                                                            name: "location",
                                                            id: a,
                                                            className: "form__group-checkbox-input",
                                                            value: a,
                                                            checked: G[t],
                                                            onChange: function () {
                                                                return function (e) {
                                                                    var t = G.map((function (t, a) {
                                                                        return a === e ? !t : t
                                                                    }));
                                                                    R(t);
                                                                    var a = t.reduce((function (e, t) {
                                                                        return !0 === t ? e + 1 : e
                                                                    }), 0);
                                                                    u(a > 0), x(a > 1 ? V[5].value : V[e].value), 0 === a && x("")
                                                                }(t)
                                                            }
                                                        }), a, (0, o.jsx)("div", {
                                                            className: "form__group-checkbox-styled"
                                                        })]
                                                    }, t)
                                                }))
                                            }), (0, o.jsx)("button", {
                                                className: "form__group-calc-button",
                                                type: "button",
                                                id: "calculator-calculate",
                                                disabled: !s,
                                                value: "Calculate",
                                                name: "submit",
                                                onClick: function (e) {
                                                    e.preventDefault, p(document.querySelectorAll("#step-one .group__inputs")).every((function (e) {
                                                        return e.reportValidity()
                                                    })) && (a(!0), Y.current.scrollIntoView({
                                                        block: "start",
                                                        behavior: "smooth"
                                                    }))
                                                },
                                                children: "Calculate"
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }), (0, o.jsx)("section", {
                            className: "cost-calculator__calc step-two ".concat(0 == t ? "" : "active"),
                            children: (0, o.jsxs)("div", {
                                className: "footer__contact",
                                children: [(0, o.jsx)("div", {
                                    className: "contact__content",
                                    children: (0, o.jsxs)("div", {
                                        className: "contact__content-box",
                                        children: [(0, o.jsx)("p", {
                                            className: "contact__title",
                                            children: "Estimate Your Monthly Bill"
                                        }), (0, o.jsx)("p", {
                                            className: "contact__text",
                                            children: "Save up to 60% on your CDN cost with Nimbus System optimized pricing"
                                        })]
                                    })
                                }), (0, o.jsxs)("div", {
                                    className: "contact__form",
                                    children: [(0, o.jsx)("div", {
                                        className: "contact__form-title-calc",
                                        children: (0, o.jsxs)("div", {
                                            className: "contact__form-title-calc-box",
                                            children: [(0, o.jsx)("h2", {
                                                className: "contact__form-title",
                                                children: "Your Estimated Monthly Bill"
                                            }), (0, o.jsxs)("p", {
                                                className: "contact__form-title-cost",
                                                children: ["$", U]
                                            })]
                                        })
                                    }), (0, o.jsx)("p", {
                                        className: "contact__form-title-calc-text",
                                        children: "Please note the amount above is only an estimate. Please submit your contact details below and we will get in touch with you to provide you with a custom price offering."
                                    }), (0, o.jsxs)("form", {
                                        action: "",
                                        className: "contact__form-body",
                                        id: "step-two",
                                        children: [(0, o.jsxs)("div", {
                                            className: "form__group",
                                            children: [(0, o.jsx)("input", {
                                                className: "group__inputs",
                                                type: "text",
                                                id: "name",
                                                required: !0,
                                                placeholder: "Name",
                                                onChange: function (e) {
                                                    return C(e.target.value)
                                                },
                                                value: k
                                            }), (0, o.jsx)("label", {
                                                className: "form__group-label",
                                                htmlFor: "name",
                                                children: "Name *"
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "form__group",
                                            children: [(0, o.jsx)("input", {
                                                className: "group__inputs",
                                                type: "email",
                                                id: "email",
                                                pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
                                                required: !0,
                                                placeholder: "E-mail",
                                                onChange: function (e) {
                                                    return E(e.target.value)
                                                },
                                                value: q
                                            }), (0, o.jsx)("label", {
                                                className: "form__group-label",
                                                htmlFor: "email",
                                                children: "E-mail *"
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "form__group",
                                            children: [(0, o.jsx)("input", {
                                                className: "group__inputs",
                                                type: "tel",
                                                id: "tel",
                                                placeholder: "Phone",
                                                onChange: function (e) {
                                                    return P(e.target.value)
                                                },
                                                value: M
                                            }), (0, o.jsx)("label", {
                                                className: "form__group-label",
                                                htmlFor: "tel",
                                                children: "Phone"
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "form__group",
                                            children: [(0, o.jsx)("textarea", {
                                                className: "group__inputs text-area",
                                                id: "calculator-message",
                                                name: "message",
                                                rows: "5",
                                                placeholder: " ",
                                                onChange: function (e) {
                                                    return I(e.target.value)
                                                },
                                                value: D
                                            }), (0, o.jsx)("label", {
                                                className: "form__group-label",
                                                htmlFor: "calculator-message",
                                                children: "Message *"
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "form__group-submit single-check",
                                            children: [(0, o.jsx)("div", {
                                                className: "form__group-checkbox",
                                                children: (0, o.jsxs)("label", {
                                                    htmlFor: "tos",
                                                    className: "form__group-checkbox-label",
                                                    children: [(0, o.jsx)("input", {
                                                        type: "checkbox",
                                                        name: "tos",
                                                        value: "tos",
                                                        id: "tos",
                                                        checked: B,
                                                        onChange: function () {
                                                            return O(!B)
                                                        },
                                                        className: "form__group-checkbox-input",
                                                        required: !0
                                                    }), "I accept ", (0, o.jsx)(l.default, {
                                                        href: "/terms-conditions",
                                                        children: (0, o.jsx)("a", {
                                                            className: "form__group-submit-link",
                                                            children: "terms & conditions"
                                                        })
                                                    }), (0, o.jsx)("div", {
                                                        className: "form__group-checkbox-styled"
                                                    })]
                                                })
                                            }), (0, o.jsx)("button", {
                                                className: "form__group-button",
                                                id: "calculator-submit",
                                                type: "button",
                                                disabled: !B,
                                                value: "Send",
                                                name: "submit",
                                                onClick: function () {
                                                    return function () {
                                                        return Z.apply(this, arguments)
                                                    }()
                                                },
                                                children: "Send"
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                })
            }
        }
    }
]);