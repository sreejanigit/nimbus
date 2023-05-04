(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [521], {
        8961: function (e, a, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about", function () {
                return t(7697)
            }])
        },
        875: function (e, a) {
            "use strict";
            a.Z = {
                src: "_next/static/media/cloudcheckr-title.5b6a32de.svg",
                height: 45,
                width: 330
            }
        },
        9378: function (e, a, t) {
            "use strict";
            var s = t(4051),
                n = t.n(s),
                r = t(5893),
                o = t(1664),
                i = t(7294),
                c = t(9669),
                l = t.n(c);

            function A(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, s = new Array(a); t < a; t++) s[t] = e[t];
                return s
            }

            function d(e, a, t, s, n, r, o) {
                try {
                    var i = e[r](o),
                        c = i.value
                } catch (l) {
                    return void t(l)
                }
                i.done ? a(c) : Promise.resolve(c).then(s, n)
            }

            function u(e) {
                return function () {
                    var a = this,
                        t = arguments;
                    return new Promise((function (s, n) {
                        var r = e.apply(a, t);

                        function o(e) {
                            d(r, s, n, o, i, "next", e)
                        }

                        function i(e) {
                            d(r, s, n, o, i, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function h(e) {
                return function (e) {
                    if (Array.isArray(e)) return A(e)
                }(e) || function (e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function (e, a) {
                    if (!e) return;
                    if ("string" === typeof e) return A(e, a);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return A(e, a)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            a.Z = function () {
                var e = (0, i.useState)(""),
                    a = e[0],
                    t = e[1],
                    s = (0, i.useState)(""),
                    c = s[0],
                    A = s[1],
                    d = (0, i.useState)(""),
                    m = d[0],
                    _ = d[1],
                    g = (0, i.useState)(!1),
                    x = g[0],
                    p = g[1];

                function b() {
                    return (b = u(n().mark((function e() {
                        var s, r;
                        return n().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (s = h(document.querySelectorAll("#footer-contact .form__group .group__inputs")), s.every((function (e) {
                                            return e.reportValidity()
                                        }))) try {
                                        r = {
                                            data: {
                                                name: a,
                                                email: c,
                                                message: m,
                                                tos: x
                                            }
                                        }, l().post("https://cms.stormit.cloud/api/contacts", r, {
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        }).then((function (e) {
                                            200 === e.status ? console.log("Message sent!") : console.log("Error, something went wrong, try again!")
                                        })), t(""), A(""), _(""), p(!1)
                                    } catch (n) {
                                        console.log(n)
                                    }
                                    case 3: case "end": return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                return (0, r.jsx)("div", {
                    className: "footer__contact-box",
                    children: (0, r.jsxs)("div", {
                        className: "footer__contact",
                        children: [(0, r.jsxs)("div", {
                            className: "contact__content",
                            children: [(0, r.jsx)("p", {
                                className: "contact__title",
                                children: "Are you ready to accelerate your business to the cloud?"
                            }), (0, r.jsx)("p", {
                                className: "contact__text",
                                children: "Our team of certified Amazon Web Services consultants is ready to handle your next cloud project. Get in touch today to speak with a cloud expert and discuss how we can help."
                            }), (0, r.jsxs)("div", {
                                className: "contact__info",
                                children: [(0, r.jsx)("div", {
                                    className: "contact__image",
                                    children: (0, r.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                        width: "21",
                                        height: "15",
                                        viewBox: "0 0 21 15",
                                        children: [(0, r.jsx)("defs", {
                                            children: (0, r.jsx)("clipPath", {
                                                id: "clip-path",
                                                children: (0, r.jsx)("rect", {
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
                                        }), (0, r.jsx)("g", {
                                            id: "Mask_Group_2",
                                            "data-name": "Mask Group 2",
                                            transform: "translate(-117.252 -5516.385)",
                                            clipPath: "url(#clip-path)",
                                            children: (0, r.jsx)("path", {
                                                id: "Icon_zocial-email",
                                                "data-name": "Icon zocial-email",
                                                d: "M.072,18.6V5.481q0-.023.068-.433l7.723,6.607-7.7,7.4A1.931,1.931,0,0,1,.072,18.6ZM1.1,4.136a.982.982,0,0,1,.387-.068h20.8a1.29,1.29,0,0,1,.41.068l-7.746,6.63-1.025.82L11.9,13.249,9.868,11.586l-1.025-.82ZM1.12,19.947,8.889,12.5,11.9,14.935,14.9,12.5l7.769,7.45a1.094,1.094,0,0,1-.387.068H1.485a1.032,1.032,0,0,1-.365-.068Zm14.808-8.293,7.7-6.607a1.36,1.36,0,0,1,.068.433V18.6a1.746,1.746,0,0,1-.068.456Z",
                                                transform: "translate(116.317 5511.754)",
                                                fill: "#1f2649"
                                            })
                                        })]
                                    })
                                }), (0, r.jsx)(o.default, {
                                    href: "mailto:info@nimbussystem.com",
                                    children: (0, r.jsx)("a", {
                                        className: "contact__email",
                                        children: "info@nimbussystem.com"
                                    })
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "contact__info",
                                children: [(0, r.jsx)("div", {
                                    className: "contact__image",
                                    children: (0, r.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "17.098",
                                        height: "17.098",
                                        viewBox: "0 0 17.098 17.098",
                                        children: (0, r.jsx)("path", {
                                            id: "Icon_awesome-phone-alt",
                                            "data-name": "Icon awesome-phone-alt",
                                            d: "M16.61,12.082l-3.74-1.6a.8.8,0,0,0-.935.23l-1.656,2.024A12.378,12.378,0,0,1,4.361,6.816L6.385,5.16a.8.8,0,0,0,.23-.935L5.012.485A.807.807,0,0,0,4.094.021L.621.822A.8.8,0,0,0,0,1.6,15.493,15.493,0,0,0,15.495,17.1a.8.8,0,0,0,.781-.621l.8-3.473a.811.811,0,0,0-.468-.922Z",
                                            transform: "translate(0 0)",
                                            fill: "#1f2649"
                                        })
                                    })
                                }), (0, r.jsx)(o.default, {
                                    href: "tel:+1 (331) 245-9179",
                                    children: (0, r.jsx)("a", {
                                        children: "+1 (331) 245-9179"
                                    })
                                }), (0, r.jsx)("span", {
                                    className: "contact__info-location",
                                    children: "CHENNAI, INDIA"
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "contact__form",
                            children: (0, r.jsxs)("form", {
                                action: "contact__submit",
                                id: "footer-contact",
                                children: [(0, r.jsxs)("div", {
                                    className: "form__group",
                                    children: [(0, r.jsx)("input", {
                                        className: "group__inputs",
                                        type: "text",
                                        id: "footer-name",
                                        required: !0,
                                        placeholder: "Name",
                                        onChange: function (e) {
                                            return t(e.target.value)
                                        },
                                        value: a
                                    }), (0, r.jsx)("label", {
                                        className: "form__group-label",
                                        htmlFor: "footer-name",
                                        children: "Name *"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "form__group",
                                    children: [(0, r.jsx)("input", {
                                        className: "group__inputs",
                                        type: "email",
                                        id: "footer-email",
                                        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
                                        required: !0,
                                        placeholder: "E-mail",
                                        onChange: function (e) {
                                            return A(e.target.value)
                                        },
                                        value: c
                                    }), (0, r.jsx)("label", {
                                        className: "form__group-label",
                                        htmlFor: "footer-email",
                                        children: "E-mail *"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "form__group",
                                    children: [(0, r.jsx)("textarea", {
                                        className: "group__inputs text-area",
                                        id: "footer-message",
                                        name: "message",
                                        rows: "5",
                                        placeholder: " ",
                                        required: !0,
                                        onChange: function (e) {
                                            return _(e.target.value)
                                        },
                                        value: m
                                    }), (0, r.jsx)("label", {
                                        className: "form__group-label",
                                        htmlFor: "footer-message",
                                        children: "Message *"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "form__group-submit",
                                    children: [(0, r.jsx)("div", {
                                        className: "form__group-checkbox",
                                        children: (0, r.jsxs)("label", {
                                            htmlFor: "footer-tos",
                                            className: "form__group-checkbox-label",
                                            children: [(0, r.jsx)("input", {
                                                type: "checkbox",
                                                name: "tos",
                                                value: "tos",
                                                id: "footer-tos",
                                                className: "form__group-checkbox-input",
                                                checked: x,
                                                onChange: function () {
                                                    return p(!x)
                                                }
                                            }), "I accept ", (0, r.jsx)(o.default, {
                                                href: "/terms-conditions",
                                                children: (0, r.jsx)("a", {
                                                    className: "form__group-submit-link",
                                                    children: "terms & conditions"
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: "form__group-checkbox-styled"
                                            })]
                                        })
                                    }), (0, r.jsx)("input", {
                                        className: "form__group-button",
                                        type: "button",
                                        value: "Send",
                                        name: "submit",
                                        disabled: !x,
                                        onClick: function () {
                                            return function () {
                                                return b.apply(this, arguments)
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
        7697: function (e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function () {
                    return j
                }
            });
            var s = t(5893),
                n = t(9378),
                r = t(1664),
                o = t(7661),
                i = t(9008),
                c = {
                    src: "_next/static/media/about-hero.18b24802.jpg",
                    height: 846,
                    width: 1920,
                    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAACP/EABoQAAIDAQEAAAAAAAAAAAAAAAECAwQRAAX/2gAIAQEAAT8AvenfrSzFbLuqyooRzowgd//EABcRAQADAAAAAAAAAAAAAAAAAAEAAjH/2gAIAQIBAT8AbI6z/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERUf/aAAgBAwEBPwCLD//Z"
                },
                l = {
                    src: "_next/static/media/about-hero-small.1cb4b4ba.jpg",
                    height: 346,
                    width: 618,
                    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAuD//xAAbEAACAwADAAAAAAAAAAAAAAABAgMEBQAUMf/aAAgBAQABPwCzsaMViVOwWRZVQKwHhHP/xAAYEQEBAAMAAAAAAAAAAAAAAAABAgAhkf/aAAgBAgEBPwBux1T3P//EABkRAAEFAAAAAAAAAAAAAAAAAAEAAhJCkf/aAAgBAwEBPwCDDUYv/9k="
                },
                A = {
                    src: "_next/static/media/lukas.70757019.png",
                    height: 462,
                    width: 346,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAqUlEQVR42mOAg3XbGEHU8QkdIBoCFtaUqq6qL7uxc+oEZRD/xLypTAwgcG3eBLGdHXX/329fqQLiL2+uZ2EAAT3H8ImN2Tn/AwITNgG5AgwgkFHeq6xuG/pf09znf2JEwv8VrXVbGCDAh+3KynmXn+5c9f/m1jV/b66Zf3r/hCaIri1TJsxZ1df1PzWl8B2DZic/AxxYRCxgYND4b+yd+rV7ynJ5BgYGBgAAqUAEmpuB6QAAAABJRU5ErkJggg=="
                },
                d = {
                    src: "_next/static/media/nazar.20b2b692.png",
                    height: 481,
                    width: 361,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAtElEQVR42mPoz0xgAGLGrqwUhtV5sSDMyAACLckxjHVJ8QxALFGfmmh6sCaVAYgZGVbWl7CsayhkAOLMrR3VLxgggJFhS3sx8/zmegYgzlnd1fhSKyBXjwEE3EIzQNiWQdr5PwOr9X9B84DnE6au4mS4sWo6CFcemdv/f21v85/Tszs+vjy2S5Lh0uIJIKy8Z97U1/tn9v7fPqFlAwMYWFWCsACDVtAbBibb/wzm0dMZGBgYAMdBSiBSUsL4AAAAAElFTkSuQmCC"
                },
                u = {
                    src: "_next/static/media/tomas.8cd08425.png",
                    height: 462,
                    width: 347,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAn0lEQVR42mNAB5tbKhlRBOaX5/bOrSrSAbGXNNcyMXTImDCBOHu76h4dndKZCWLvaq9khWlga8vNO1QQGf+TwSU9igEG8vIb1FyDs/9rOkT99/WM/Lhl8Xo+sMS3zTME8lNL3jEYRPyfXZD5/fumuaZgiUcbFkplJuZ/ZlB3+7+6uvDk//8v2MASzzct4ZHQ87xdnpD4f21vZwsDAwMDAHxMO4gwsqTLAAAAAElFTkSuQmCC"
                },
                h = {
                    src: "_next/static/media/adam.192d0e0d.png",
                    height: 462,
                    width: 346,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAsklEQVR42mMAgUYTLUYGKOjOSmICM3pTI8CCk8sLyrvLCrxB7AnleUwMjYpazCDOiendz8/OmdgCYm/t62CDGmAuc2DutDtLOtsXMzAwcDHAgF1I3r6g8Oz/zj7x/019U2aABeeEMnCnpRQ/dIss+u8RUfA/PiT+7KddqzgZvq+foDarqeW7fUTRf8uwom9rakt3/N8+R4bh06aZ2s1FVc9VXRP+W3om/t/V3bCagYGBAQA3lUFd9svDlgAAAABJRU5ErkJggg=="
                },
                m = {
                    src: "_next/static/media/ivo.8c2f6400.png",
                    height: 462,
                    width: 346,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAArElEQVR42mOAgdTsXJ6s7Cx1uMDimgIWED2nIj9tbXPFzzltDfxgiY19nWCJ68umm11ZMv35////GeG6mP2LRBNjs061FBT/13eM2r5p9S4OsIRrfIWPfUjufwu/rN8OgZn/jcKK7MAS+6Z1B5XkVv83CS//XZ9X9v/UnAmuYIkz01oTSnIq/zM4p/3tLSz5/3/XfEuwxN6+5rCwoOT/DLoB/3uKy778P7NJEQCLZEb6SrxB2AAAAABJRU5ErkJggg=="
                },
                _ = {
                    src: "_next/static/media/you.1048f246.png",
                    height: 418,
                    width: 353,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAY1BMVEXj2Orb1ufW1eTU1OPT1OPS1OPS1OLU1OPS1OLO0+DS1OLT1OPT1OPT1OPU1OPT1OPU1OPU1OPU1OPU1OPU1OPU1OPU1OPU1OPV1eTV1eTV1ePU1OPV1eTU1OPU1OPU1OPU1OOucdwOAAAAIXRSTlMAAAAAAAAAAQICBgcJDRQUFhodHyIsLS4vMDAwMTIzNTcj+fa4AAAAQklEQVR42g3FWQJAIBQF0Mu7xoyJVxLtf5U6Pwcis+tbopM9GxJVbXVoCLh0n4aY3uDzItguDdGWVUM6BGN8/LfyB1rkA1z/NJICAAAAAElFTkSuQmCC"
                },
                g = {
                    src: "_next/static/media/linkedin.36b1104c.svg",
                    height: 38,
                    width: 38
                },
                x = {
                    src: "_next/static/media/our-vision.0e255da7.svg",
                    height: 657,
                    width: 635
                },
                p = {
                    src: "_next/static/media/aws-pn.2ddab3ea.svg",
                    height: 82,
                    width: 297
                },
                b = t(2792),
                f = t(875),
                j = function () {
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(i.default, {
                            children: [(0, s.jsx)("meta", {
                                name: "description",
                                content: "At Nimbus System we are experts in utilizing proven cloud technologies and are on the cutting edge of integrating emerging cloud technologies into our practice."
                            }), (0, s.jsx)("meta", {
                                property: "og:image",
                                content: "".concat("https://stormit.vercel.app", "/img/about-hero.jpg")
                            }), (0, s.jsx)("meta", {
                                property: "og:image:secure_url",
                                content: "".concat("https://stormit.vercel.app", "/img/about-hero.jpg")
                            }), (0, s.jsx)("meta", {
                                property: "og:image:width",
                                content: "1920"
                            }), (0, s.jsx)("meta", {
                                property: "og:image:height",
                                content: "846"
                            }), (0, s.jsx)("link", {
                                rel: "canonical",
                                href: "https://www.stormit.cloud/about/"
                            }), (0, s.jsx)("title", {
                                children: "About Us | Nimbus System"
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "about",
                            children: [(0, s.jsxs)("section", {
                                id: "story",
                                className: "about__hero",
                                children: [(0, s.jsx)("div", {
                                    className: "about__hero-img",
                                    children: (0, s.jsx)(o.Z, {
                                        src: c,
                                        alt: "",
                                        layout: "fill",
                                        objectFit: "cover",
                                        quality: 100,
                                        priority: !0
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "about__hero-img-small",
                                    children: (0, s.jsx)(o.Z, {
                                        src: l,
                                        alt: "",
                                        layout: "fill",
                                        objectFit: "cover",
                                        quality: 100,
                                        priority: !0
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "about__hero-box",
                                    children: [(0, s.jsx)("p", {
                                        className: "about__hero-subtext",
                                        children: "about us"
                                    }), (0, s.jsx)("h1", {
                                        className: "about__hero-title-main",
                                        children: "Meet Nimbus System"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "about__hero-content",
                                    children: [(0, s.jsx)("h2", {
                                        className: "about__hero-content-title",
                                        children: "Our Story"
                                    }), (0, s.jsxs)("div", {
                                        className: "about__hero-content-box",
                                        children: [(0, s.jsx)("div", {
                                            className: "about__hero-content-left",
                                            children: (0, s.jsx)("p", {
                                                className: "about__hero-content-left-text",
                                                children: "Nimbus System started in 2013 and from the very beginning, we focused on using the best technology available on the market."
                                            })
                                        }), (0, s.jsxs)("div", {
                                            className: "about__hero-content-right",
                                            children: [(0, s.jsx)("p", {
                                                className: "about__hero-content-right-text",
                                                children: "The cloud is rapidly transforming the way we live and work. It makes our lives more convenient, accessible, and secure, and for organizations it drives them to be more competitive, agile, and profitable. We\u2019re currently witnessing a mass migration to the cloud."
                                            }), (0, s.jsx)("p", {
                                                className: "about__hero-content-right-text",
                                                children: "It was this observation that led our team of founders to adopt a new strategy in 2015 with the mission of helping organizations gain the maximum benefits the cloud has to offer."
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, s.jsx)("section", {
                                id: "team",
                                className: "about-our",
                                children: (0, s.jsxs)("div", {
                                    className: "about-our__box",
                                    children: [(0, s.jsx)("h2", {
                                        className: "about-our__title",
                                        children: "Our Team"
                                    }), (0, s.jsxs)("div", {
                                        className: "about-our__card-box",
                                        children: [(0, s.jsxs)("div", {
                                            className: "about-our__card",
                                            children: [(0, s.jsx)("div", {
                                                className: "about-our__card-image",
                                                children: (0, s.jsx)(o.Z, {
                                                    src: A,
                                                    alt: ""
                                                })
                                            }), (0, s.jsxs)("div", {
                                                className: "about-our__card-content",
                                                children: [(0, s.jsx)("p", {
                                                    className: "about-our__card-content-name",
                                                    children: "Luk\xe1\u0161"
                                                }), (0, s.jsx)("p", {
                                                    className: "about-our__card-content-position",
                                                    children: "CEO & Partner"
                                                }), (0, s.jsx)("p", {
                                                    className: "about-our__card-content-desc",
                                                    children: "Business builder, experienced sales professional and technology enthusiast "
                                                }), (0, s.jsx)("div", {
                                                    className: "about-our__card-content-linkedin",
                                                    children: (0, s.jsx)(r.default, {
                                                        href: "https://www.linkedin.com/in/lukasflaishans/",
                                                        passHref: !0,
                                                        children: (0, s.jsx)("a", {
                                                            className: "about-our__card-content-linkedin-link",
                                                            target: "_blank",
                                                            children: (0, s.jsx)(o.Z, {
                                                                src: g,
                                                                alt: "LinkedIn Lukas"
                                                            })
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "about-our__card",
                                            children: [(0, s.jsx)("div", {
                                                className: "about-our__card-image",
                                                children: (0, s.jsx)(o.Z, {
                                                    src: d,
                                                    alt: ""
                                                })
                                            }), (0, s.jsxs)("div", {
                                                className: "about-our__card-content",
                                                children: [(0, s.jsx)("p", {
                                                    className: "about-our__card-content-name",
                                                    children: "Nazar"
                                                }), (0, s.jsx)("p", {
                                                    className: "about-our__card-content-position",
                                                    children: "CCO & Partner"
                                                }), (0, s.jsx)("p", {
                                                    className: "about-our__card-content-desc",
                                                    children: "Business executive with more than 11 years of experience in IT industry and more than 7 years in Cloud domain"
                                                }), (0, s.jsx)("div", {
                                                    className: "about-our__card-content-linkedin",
                                                    children: (0, s.jsx)(r.default, {
                                                        href: "https://www.linkedin.com/in/nazar-spak/",
                                                        passHref: !0,
                                                        children: (0, s.jsx)("a", {
                                                            className: "about-our__card-content-linkedin-link",
                                                            target: "_blank",
                                                            children: (0, s.jsx)(o.Z, {
                                                                src: g,
                                                                alt: "LinkedIn Nazar"
                                                            })
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "about-our__card",
                                            children: [(0, s.jsx)("div", {
                                                className: "about-our__card-image",
                                                children: (0, s.jsx)(o.Z, {
                                                    src: u,
                                                    alt: ""
                                                })
                                            }), (0, s.jsxs)("div", {
                                                className: "about-our__card-content",
                                                children: [(0, s.jsx)("p", {
                                                    className: "about-our__card-content-name",
                                                    children: "Tom\xe1\u0161"
                                                }), (0, s.jsx)("p", {
                                                    className: "about-our__card-content-position",
                                                    children: "Senior Solution Architect"
                                                }), (0, s.jsx)("p", {
                                                    className: "about-our__card-content-desc",
                                                    children: "Certified architect with analytical skills and strong focus on Microservices and Serverless Architecture"
                                                }), (0, s.jsx)("div", {
                                                    className: "about-our__card-content-linkedin",
                                                    children: (0, s.jsx)(r.default, {
                                                        href: "https://www.linkedin.com/in/tomasturek/",
                                                        passHref: !0,
                                                        children: (0, s.jsx)("a", {
                                                            className: "about-our__card-content-linkedin-link",
                                                            target: "_blank",
                                                            children: (0, s.jsx)(o.Z, {
                                                                src: g,
                                                                alt: "LinkedIn Tomas"
                                                            })
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0, s.jsx)("div", {
                                            className: "about-our__card-image-bg"
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "about-our__card-box",
                                        children: [(0, s.jsxs)("div", {
                                            className: "about-our__card",
                                            children: [(0, s.jsx)("div", {
                                                className: "about-our__card-image",
                                                children: (0, s.jsx)(o.Z, {
                                                    src: h,
                                                    alt: ""
                                                })
                                            }), (0, s.jsxs)("div", {
                                                className: "about-our__card-content",
                                                children: [(0, s.jsx)("p", {
                                                    className: "about-our__card-content-name",
                                                    children: "Adam"
                                                }), (0, s.jsx)("p", {
                                                    className: "about-our__card-content-position",
                                                    children: "Junior Presales Consultant"
                                                }), (0, s.jsx)("p", {
                                                    className: "about-our__card-content-desc",
                                                    children: "Presales and technology consultant with a focus on Content Delivery Network and all presales activities"
                                                }), (0, s.jsx)("div", {
                                                    className: "about-our__card-content-linkedin",
                                                    children: (0, s.jsx)(r.default, {
                                                        href: "https://www.linkedin.com/in/adam-novotn%C3%BD-65b060115/",
                                                        passHref: !0,
                                                        children: (0, s.jsx)("a", {
                                                            className: "about-our__card-content-linkedin-link",
                                                            target: "_blank",
                                                            children: (0, s.jsx)(o.Z, {
                                                                src: g,
                                                                alt: "LinkedIn Adam"
                                                            })
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "about-our__card",
                                            children: [(0, s.jsx)("div", {
                                                className: "about-our__card-image",
                                                children: (0, s.jsx)(o.Z, {
                                                    src: m,
                                                    alt: ""
                                                })
                                            }), (0, s.jsxs)("div", {
                                                className: "about-our__card-content",
                                                children: [(0, s.jsx)("p", {
                                                    className: "about-our__card-content-name",
                                                    children: "Ivo"
                                                }), (0, s.jsx)("p", {
                                                    className: "about-our__card-content-position",
                                                    children: "Solution Architect"
                                                }), (0, s.jsx)("p", {
                                                    className: "about-our__card-content-desc",
                                                    children: "Certified architect, with experience in BigData and analytics projects with strong attention to detail"
                                                }), (0, s.jsx)("div", {
                                                    className: "about-our__card-content-linkedin",
                                                    children: (0, s.jsx)(r.default, {
                                                        href: "https://www.linkedin.com/in/ivo-fibiger-959178a8/",
                                                        passHref: !0,
                                                        children: (0, s.jsx)("a", {
                                                            className: "about-our__card-content-linkedin-link",
                                                            target: "_blank",
                                                            children: (0, s.jsx)(o.Z, {
                                                                src: g,
                                                                alt: "LinkedIn Ivo"
                                                            })
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "about-our__card you",
                                            children: [(0, s.jsx)("div", {
                                                className: "about-our__card-image",
                                                children: (0, s.jsx)(o.Z, {
                                                    src: _,
                                                    alt: ""
                                                })
                                            }), (0, s.jsxs)("div", {
                                                className: "about-our__card-content",
                                                children: [(0, s.jsx)("p", {
                                                    className: "about-our__card-content-name",
                                                    children: "You"
                                                }), (0, s.jsx)("p", {
                                                    className: "about-our__card-content-position",
                                                    children: "Sales Manager"
                                                }), (0, s.jsx)("p", {
                                                    className: "about-our__card-content-desc",
                                                    children: "Experienced professional with sales DNA and technical background, always on the look out for new opportunites."
                                                }), (0, s.jsx)("div", {
                                                    className: "about-our__card-content-linkedin",
                                                    children: (0, s.jsx)(r.default, {
                                                        href: "#",
                                                        passHref: !0,
                                                        children: (0, s.jsx)("a", {
                                                            className: "about-our__card-content-linkedin-link",
                                                            target: "_blank",
                                                            children: (0, s.jsx)(o.Z, {
                                                                src: g,
                                                                alt: "LinkedIn Empty"
                                                            })
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0, s.jsx)("div", {
                                            className: "about-our__card-image-bg"
                                        })]
                                    })]
                                })
                            }), (0, s.jsx)("section", {
                                id: "vision",
                                className: "about-vision",
                                children: (0, s.jsxs)("div", {
                                    className: "about-vision__container",
                                    children: [(0, s.jsxs)("div", {
                                        className: "about-vision__container-content",
                                        children: [(0, s.jsx)("h2", {
                                            className: "about-vision__container-content-title",
                                            children: "Our Vision"
                                        }), (0, s.jsx)("p", {
                                            className: "about-vision__container-content-text-upper",
                                            children: "Our vision is to enable all companies of different sizes to benefit from the opportunities the cloud offers."
                                        }), (0, s.jsx)("p", {
                                            className: "about-vision__container-content-text-lower",
                                            children: "Nimbus System delivers best-of-breed cloud systems integration, application development, and managed services."
                                        }), (0, s.jsx)("p", {
                                            className: "about-vision__container-content-text-lower",
                                            children: "We are experts in utilizing proven cloud technologies and are on the cutting edge of integrating emerging cloud technologies into our practice."
                                        }), (0, s.jsx)("p", {
                                            className: "about-vision__container-content-text-lower",
                                            children: "Our core competency is delivering custom cloud projects and services for clients who have limited cloud experience on staff or who need additional resources. We leverage the best cloud technology available to provide a solution that is unique to your project requirements."
                                        })]
                                    }), (0, s.jsx)("div", {
                                        className: "about-vision__container-image",
                                        children: (0, s.jsx)(o.Z, {
                                            src: x,
                                            alt: ""
                                        })
                                    })]
                                })
                            }), (0, s.jsx)("section", {
                                id: "partners",
                                className: "about__partners padding-footer",
                                children: (0, s.jsxs)("div", {
                                    className: "about__partners-box",
                                    children: [(0, s.jsx)("h2", {
                                        className: "about__partners-title",
                                        children: "Partners"
                                    }), (0, s.jsxs)("div", {
                                        className: "about__partners-container",
                                        children: [(0, s.jsx)(r.default, {
                                            href: "https://partners.amazonaws.com/partners/001E000001BPxvMIAT/Nimbus System%20Europe%20s.r.o",
                                            children: (0, s.jsxs)("a", {
                                                className: "about__partners-container-partner",
                                                target: "_blank",
                                                children: [(0, s.jsx)("div", {
                                                    className: "about__partners-container-partner-image",
                                                    children: (0, s.jsx)(o.Z, {
                                                        src: p,
                                                        alt: ""
                                                    })
                                                }), (0, s.jsx)("p", {
                                                    className: "about__partners-container-partner-text",
                                                    children: "As a certified AWS Advanced Partner Nimbus System enables all companies of all sizes to benefit from opportunities cloud offers."
                                                }), (0, s.jsxs)("div", {
                                                    className: "about__partners-container-partner-link",
                                                    children: ["Learn more ", (0, s.jsx)("div", {
                                                        className: "home__help-card-link-image",
                                                        children: (0, s.jsx)(o.Z, {
                                                            src: b.Z,
                                                            alt: ""
                                                        })
                                                    })]
                                                })]
                                            })
                                        }), (0, s.jsx)(r.default, {
                                            href: "https://cloudcheckr.com/",
                                            children: (0, s.jsxs)("a", {
                                                className: "about__partners-container-partner",
                                                target: "_blank",
                                                children: [(0, s.jsx)("div", {
                                                    className: "about__partners-container-partner-image",
                                                    children: (0, s.jsx)(o.Z, {
                                                        src: f.Z,
                                                        alt: ""
                                                    })
                                                }), (0, s.jsx)("p", {
                                                    className: "about__partners-container-partner-text",
                                                    children: "With our partnership we provide our customers with full access to the Cloudcheckr Cloud Management platform with smooth onboarding."
                                                }), (0, s.jsxs)("div", {
                                                    className: "about__partners-container-partner-link",
                                                    children: ["Learn more ", (0, s.jsx)("div", {
                                                        className: "home__help-card-link-image",
                                                        children: (0, s.jsx)(o.Z, {
                                                            src: b.Z,
                                                            alt: ""
                                                        })
                                                    })]
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            })]
                        }), (0, s.jsx)(n.Z, {})]
                    })
                }
        }
    },
    function (e) {
        e.O(0, [647, 774, 888, 179], (function () {
            return a = 8961, e(e.s = a);
            var a
        }));
        var a = e.O();
        _N_E = a
    }
]);