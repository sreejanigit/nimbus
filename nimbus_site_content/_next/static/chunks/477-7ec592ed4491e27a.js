"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [477], {
        9378: function (e, s, t) {
            var a = t(4051),
                o = t.n(a),
                n = t(5893),
                i = t(1664),
                l = t(7294),
                c = t(9669),
                r = t.n(c);

            function m(e, s) {
                (null == s || s > e.length) && (s = e.length);
                for (var t = 0, a = new Array(s); t < s; t++) a[t] = e[t];
                return a
            }

            function h(e, s, t, a, o, n, i) {
                try {
                    var l = e[n](i),
                        c = l.value
                } catch (r) {
                    return void t(r)
                }
                l.done ? s(c) : Promise.resolve(c).then(a, o)
            }

            function d(e) {
                return function () {
                    var s = this,
                        t = arguments;
                    return new Promise((function (a, o) {
                        var n = e.apply(s, t);

                        function i(e) {
                            h(n, a, o, i, l, "next", e)
                        }

                        function l(e) {
                            h(n, a, o, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function u(e) {
                return function (e) {
                    if (Array.isArray(e)) return m(e)
                }(e) || function (e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function (e, s) {
                    if (!e) return;
                    if ("string" === typeof e) return m(e, s);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return m(e, s)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            s.Z = function () {
                var e = (0, l.useState)(""),
                    s = e[0],
                    t = e[1],
                    a = (0, l.useState)(""),
                    c = a[0],
                    m = a[1],
                    h = (0, l.useState)(""),
                    _ = h[0],
                    A = h[1],
                    x = (0, l.useState)(!1),
                    g = x[0],
                    p = x[1];

                function j() {
                    return (j = d(o().mark((function e() {
                        var a, n;
                        return o().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (a = u(document.querySelectorAll("#footer-contact .form__group .group__inputs")), a.every((function (e) {
                                            return e.reportValidity()
                                        }))) try {
                                        n = {
                                            data: {
                                                name: s,
                                                email: c,
                                                message: _,
                                                tos: g
                                            }
                                        }, r().post("https://cms.stormit.cloud/api/contacts", n, {
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        }).then((function (e) {
                                            200 === e.status ? console.log("Message sent!") : console.log("Error, something went wrong, try again!")
                                        })), t(""), m(""), A(""), p(!1)
                                    } catch (o) {
                                        console.log(o)
                                    }
                                    case 3: case "end": return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                return (0, n.jsx)("div", {
                    className: "footer__contact-box",
                    children: (0, n.jsxs)("div", {
                        className: "footer__contact",
                        children: [(0, n.jsxs)("div", {
                            className: "contact__content",
                            children: [(0, n.jsx)("p", {
                                className: "contact__title",
                                children: "Are you ready to accelerate your business to the cloud?"
                            }), (0, n.jsx)("p", {
                                className: "contact__text",
                                children: "Our team of certified Amazon Web Services consultants is ready to handle your next cloud project. Get in touch today to speak with a cloud expert and discuss how we can help."
                            }), (0, n.jsxs)("div", {
                                className: "contact__info",
                                children: [(0, n.jsx)("div", {
                                    className: "contact__image",
                                    children: (0, n.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                        width: "21",
                                        height: "15",
                                        viewBox: "0 0 21 15",
                                        children: [(0, n.jsx)("defs", {
                                            children: (0, n.jsx)("clipPath", {
                                                id: "clip-path",
                                                children: (0, n.jsx)("rect", {
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
                                        }), (0, n.jsx)("g", {
                                            id: "Mask_Group_2",
                                            "data-name": "Mask Group 2",
                                            transform: "translate(-117.252 -5516.385)",
                                            clipPath: "url(#clip-path)",
                                            children: (0, n.jsx)("path", {
                                                id: "Icon_zocial-email",
                                                "data-name": "Icon zocial-email",
                                                d: "M.072,18.6V5.481q0-.023.068-.433l7.723,6.607-7.7,7.4A1.931,1.931,0,0,1,.072,18.6ZM1.1,4.136a.982.982,0,0,1,.387-.068h20.8a1.29,1.29,0,0,1,.41.068l-7.746,6.63-1.025.82L11.9,13.249,9.868,11.586l-1.025-.82ZM1.12,19.947,8.889,12.5,11.9,14.935,14.9,12.5l7.769,7.45a1.094,1.094,0,0,1-.387.068H1.485a1.032,1.032,0,0,1-.365-.068Zm14.808-8.293,7.7-6.607a1.36,1.36,0,0,1,.068.433V18.6a1.746,1.746,0,0,1-.068.456Z",
                                                transform: "translate(116.317 5511.754)",
                                                fill: "#1f2649"
                                            })
                                        })]
                                    })
                                }), (0, n.jsx)(i.default, {
                                    href: "mailto:info@nimbussystem.com",
                                    children: (0, n.jsx)("a", {
                                        className: "contact__email",
                                        children: "info@nimbussystem.com"
                                    })
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "contact__info",
                                children: [(0, n.jsx)("div", {
                                    className: "contact__image",
                                    children: (0, n.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "17.098",
                                        height: "17.098",
                                        viewBox: "0 0 17.098 17.098",
                                        children: (0, n.jsx)("path", {
                                            id: "Icon_awesome-phone-alt",
                                            "data-name": "Icon awesome-phone-alt",
                                            d: "M16.61,12.082l-3.74-1.6a.8.8,0,0,0-.935.23l-1.656,2.024A12.378,12.378,0,0,1,4.361,6.816L6.385,5.16a.8.8,0,0,0,.23-.935L5.012.485A.807.807,0,0,0,4.094.021L.621.822A.8.8,0,0,0,0,1.6,15.493,15.493,0,0,0,15.495,17.1a.8.8,0,0,0,.781-.621l.8-3.473a.811.811,0,0,0-.468-.922Z",
                                            transform: "translate(0 0)",
                                            fill: "#1f2649"
                                        })
                                    })
                                }), (0, n.jsx)(i.default, {
                                    href: "tel:+1 (331) 245-9179",
                                    children: (0, n.jsx)("a", {
                                        children: "+1 (331) 245-9179"
                                    })
                                }), (0, n.jsx)("span", {
                                    className: "contact__info-location",
                                    children: "CHENNAI, INDIA"
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: "contact__form",
                            children: (0, n.jsxs)("form", {
                                action: "contact__submit",
                                id: "footer-contact",
                                children: [(0, n.jsxs)("div", {
                                    className: "form__group",
                                    children: [(0, n.jsx)("input", {
                                        className: "group__inputs",
                                        type: "text",
                                        id: "footer-name",
                                        required: !0,
                                        placeholder: "Name",
                                        onChange: function (e) {
                                            return t(e.target.value)
                                        },
                                        value: s
                                    }), (0, n.jsx)("label", {
                                        className: "form__group-label",
                                        htmlFor: "footer-name",
                                        children: "Name *"
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "form__group",
                                    children: [(0, n.jsx)("input", {
                                        className: "group__inputs",
                                        type: "email",
                                        id: "footer-email",
                                        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
                                        required: !0,
                                        placeholder: "E-mail",
                                        onChange: function (e) {
                                            return m(e.target.value)
                                        },
                                        value: c
                                    }), (0, n.jsx)("label", {
                                        className: "form__group-label",
                                        htmlFor: "footer-email",
                                        children: "E-mail *"
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "form__group",
                                    children: [(0, n.jsx)("textarea", {
                                        className: "group__inputs text-area",
                                        id: "footer-message",
                                        name: "message",
                                        rows: "5",
                                        placeholder: " ",
                                        required: !0,
                                        onChange: function (e) {
                                            return A(e.target.value)
                                        },
                                        value: _
                                    }), (0, n.jsx)("label", {
                                        className: "form__group-label",
                                        htmlFor: "footer-message",
                                        children: "Message *"
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "form__group-submit",
                                    children: [(0, n.jsx)("div", {
                                        className: "form__group-checkbox",
                                        children: (0, n.jsxs)("label", {
                                            htmlFor: "footer-tos",
                                            className: "form__group-checkbox-label",
                                            children: [(0, n.jsx)("input", {
                                                type: "checkbox",
                                                name: "tos",
                                                value: "tos",
                                                id: "footer-tos",
                                                className: "form__group-checkbox-input",
                                                checked: g,
                                                onChange: function () {
                                                    return p(!g)
                                                }
                                            }), "I accept ", (0, n.jsx)(i.default, {
                                                href: "/terms-conditions",
                                                children: (0, n.jsx)("a", {
                                                    className: "form__group-submit-link",
                                                    children: "terms & conditions"
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "form__group-checkbox-styled"
                                            })]
                                        })
                                    }), (0, n.jsx)("input", {
                                        className: "form__group-button",
                                        type: "button",
                                        value: "Send",
                                        name: "submit",
                                        disabled: !g,
                                        onClick: function () {
                                            return function () {
                                                return j.apply(this, arguments)
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
        8799: function (e, s, t) {
            t.d(s, {
                Z: function () {
                    return x
                }
            });
            var a = t(5893),
                o = t(7661),
                n = {
                    src: "_next/static/media/cinnamon-logo.e0083129.svg",
                    height: 52,
                    width: 163
                },
                i = {
                    src: "_next/static/media/apostrophe.ff4c191d.svg",
                    height: 76,
                    width: 96
                },
                l = {
                    src: "_next/static/media/360cities.0f6072ac.png",
                    height: 93,
                    width: 200,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAZklEQVR42mNYJ8mQvFmS4f8mSYa3q8UZ1BnQwSZZtgsHNMTr9ygLzt4gw9q3U5rBcYcMQ84OaYZgIO0FUnD1gKpQ7R5lgdkbZVjmAhUEACUygQqygDiHYZ0EQ9oWiBUfgFZooNsAAOsmIM0055U2AAAAAElFTkSuQmCC"
                },
                c = {
                    src: "_next/static/media/brid-tv.e9db7d94.png",
                    height: 124,
                    width: 500,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAPUlEQVR42gEyAM3/AMHBwczMzMjIyN3c3OTm5urj4vaVk/B9iQDDw8PMzMzR0dHb29vl5+fc1NP0i4nweIXA1CXkYClSlAAAAABJRU5ErkJggg=="
                },
                r = {
                    src: "_next/static/media/dartfish_logo.be18504d.png",
                    height: 151,
                    width: 300,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAdUlEQVR42mO45c/AyAAF/7cy1P/bxDDh/w4GtT/rGZgYYGA7AwPHs3IGmy+zGY6/6WC493U+w9X/exi0GJAA88s6ho7PMxluv2lnuPt1LsMKBhi4bs0Qes2EweVOKEPIy0aGmo9TGLa+7WZousDA4H3DmcEfAEkjKjLt9N6uAAAAAElFTkSuQmCC"
                },
                m = {
                    src: "_next/static/media/relaxgaming.e77ef6c8.png",
                    height: 175,
                    width: 552,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAOUlEQVR42mNg2MBQxFDD4M4gztDDoMvgz8AQyODA4MtgDYThDAYM+gwMnAxsDBwMkgxMDAwMAgwCALlRBWGIrqrRAAAAAElFTkSuQmCC"
                },
                h = {
                    src: "_next/static/media/sedmi-odjel-blue.6d77075d.png",
                    height: 106,
                    width: 298,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAATElEQVR42mNgWPPWH4gnQ2lFILYB4iggDgbiAAYgEQnE8UAcAcTZQLwYiGcBcRMQT2IAEulAXALEfgwrXjAAMSPD6tcMQMzHsPq1BgAEHi31sgVbBAAAAABJRU5ErkJggg=="
                },
                d = {
                    src: "_next/static/media/sefira.7dae5e69.png",
                    height: 50,
                    width: 163,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARklEQVR4nGNMFhKa4C8iZrzxzau2ue/esQoxM/J9YvgvzsDAcBOI+RkXKionczEzR+19/7Zsxtu3mkAFLEAFT4GS/4BYCQDmvxXRMF/q5gAAAABJRU5ErkJggg=="
                },
                u = {
                    src: "_next/static/media/blank-silhouette.d71a4c87.png",
                    height: 400,
                    width: 400,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbklEQVR42iWMsQ3CUBBDjRTo6dkDiQWo6WjYgAWoqTNJhriXCaJkkBRJm/yLpX+WzvKTZdXjy7+/2k+isb1Iq5WiEWeJHxlJV4Eb/Y2F5ClxqQt3ZpJPDW9GMiyS4CEGh51iuBlOYolCMUz/nfUAHR5G8p+DVmoAAAAASUVORK5CYII="
                },
                _ = t(3917),
                A = t.n(_),
                x = (t(3416), function () {
                    return (0, a.jsx)("section", {
                        className: "home__testimonials",
                        children: (0, a.jsxs)("div", {
                            className: "home__testimonials-carousel-box",
                            children: [(0, a.jsxs)(A(), {
                                className: "carousel home__testimonials-carousel",
                                elementType: "div",
                                options: {
                                    initialIndex: 0
                                },
                                disableImagesLoaded: !1,
                                reloadOnUpdate: !0,
                                static: !0,
                                children: [(0, a.jsxs)("div", {
                                    className: "home__testimonials-carousel-item carousel-cell",
                                    children: [(0, a.jsx)("p", {
                                        className: "home__testimonials-carousel-title",
                                        children: "Great local AWS partner. They are friendly, helpful, and have given us good advice and AWS discounts."
                                    }), (0, a.jsxs)("div", {
                                        className: "home__testimonials-carousel-content",
                                        children: [(0, a.jsx)("div", {
                                            className: "home__testimonials-carousel-content-image",
                                            children: (0, a.jsx)(o.Z, {
                                                src: u,
                                                alt: ""
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "home__testimonials-carousel-content-right",
                                            children: [(0, a.jsxs)("div", {
                                                className: "home__testimonials-carousel-content-text",
                                                children: [(0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-name",
                                                    children: "Roman Nov\xe1k"
                                                }), (0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-content",
                                                    children: "CTO & Co-Founder"
                                                }), (0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-content",
                                                    children: "Cinnamon Technologies Inc."
                                                })]
                                            }), (0, a.jsx)("div", {
                                                className: "home__testimonials-carousel-company-image",
                                                children: (0, a.jsx)(o.Z, {
                                                    src: n,
                                                    alt: ""
                                                })
                                            })]
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "home__testimonials-carousel-item carousel-cell",
                                    children: [(0, a.jsx)("p", {
                                        className: "home__testimonials-carousel-title",
                                        children: "Extremely helpful and friendly approach from the Nimbus System guys. They helped us optimize the setup for the cloud version of our digital trust OBELISK products. I would recommend the cooperation to everybody:)"
                                    }), (0, a.jsxs)("div", {
                                        className: "home__testimonials-carousel-content",
                                        children: [(0, a.jsx)("div", {
                                            className: "home__testimonials-carousel-content-image",
                                            children: (0, a.jsx)(o.Z, {
                                                src: u,
                                                alt: ""
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "home__testimonials-carousel-content-right",
                                            children: [(0, a.jsxs)("div", {
                                                className: "home__testimonials-carousel-content-text",
                                                children: [(0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-name",
                                                    children: "Martin Jur\xedk"
                                                }), (0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-content",
                                                    children: "Channel Partner Manager"
                                                }), (0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-content",
                                                    children: "SEFIRA spol. s.r.o."
                                                })]
                                            }), (0, a.jsx)("div", {
                                                className: "home__testimonials-carousel-company-image",
                                                children: (0, a.jsx)(o.Z, {
                                                    src: d,
                                                    alt: ""
                                                })
                                            })]
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "home__testimonials-carousel-item carousel-cell",
                                    children: [(0, a.jsx)("p", {
                                        className: "home__testimonials-carousel-title",
                                        children: "Nimbus System has proven to be excellent AWS partner in terms of CloudFront offerings, reaction, transparency and pricing. Personally, I was very satisfied with fast support response and quickly resolving any issues we had."
                                    }), (0, a.jsxs)("div", {
                                        className: "home__testimonials-carousel-content",
                                        children: [(0, a.jsx)("div", {
                                            className: "home__testimonials-carousel-content-image",
                                            children: (0, a.jsx)(o.Z, {
                                                src: u,
                                                alt: ""
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "home__testimonials-carousel-content-right",
                                            children: [(0, a.jsxs)("div", {
                                                className: "home__testimonials-carousel-content-text",
                                                children: [(0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-name",
                                                    children: "Tomislav Ra\u0161eta"
                                                }), (0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-content",
                                                    children: "DevOps Engineer"
                                                }), (0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-content",
                                                    children: "Sedmi Odjel d.o.o."
                                                })]
                                            }), (0, a.jsx)("div", {
                                                className: "home__testimonials-carousel-company-image",
                                                children: (0, a.jsx)(o.Z, {
                                                    src: h,
                                                    alt: ""
                                                })
                                            })]
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "home__testimonials-carousel-item carousel-cell",
                                    children: [(0, a.jsx)("p", {
                                        className: "home__testimonials-carousel-title",
                                        children: "Customer service. Simple as that. There are many many options out there with respect to Cloud services and it all more or less looks the same. What stood out with Nimbus System is consistent, reliable and strong customer service. We feel like a true partner, not a number. That is one of the main reasons why I would very likely recommend Nimbus System."
                                    }), (0, a.jsxs)("div", {
                                        className: "home__testimonials-carousel-content",
                                        children: [(0, a.jsx)("div", {
                                            className: "home__testimonials-carousel-content-image",
                                            children: (0, a.jsx)(o.Z, {
                                                src: u,
                                                alt: ""
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "home__testimonials-carousel-content-right",
                                            children: [(0, a.jsxs)("div", {
                                                className: "home__testimonials-carousel-content-text",
                                                children: [(0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-name",
                                                    children: "Fabien Ricard"
                                                }), (0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-content",
                                                    children: "CEO"
                                                }), (0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-content",
                                                    children: "Brid Video D.O.O."
                                                })]
                                            }), (0, a.jsx)("div", {
                                                className: "home__testimonials-carousel-company-image",
                                                children: (0, a.jsx)(o.Z, {
                                                    src: c,
                                                    alt: ""
                                                })
                                            })]
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "home__testimonials-carousel-item carousel-cell",
                                    children: [(0, a.jsx)("p", {
                                        className: "home__testimonials-carousel-title",
                                        children: "Responsive, friendly, quality - all in all an excellent partner."
                                    }), (0, a.jsxs)("div", {
                                        className: "home__testimonials-carousel-content",
                                        children: [(0, a.jsx)("div", {
                                            className: "home__testimonials-carousel-content-image",
                                            children: (0, a.jsx)(o.Z, {
                                                src: u,
                                                alt: ""
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "home__testimonials-carousel-content-right",
                                            children: [(0, a.jsxs)("div", {
                                                className: "home__testimonials-carousel-content-text",
                                                children: [(0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-name",
                                                    children: "Bruce Pales"
                                                }), (0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-content",
                                                    children: "CEO"
                                                }), (0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-content",
                                                    children: "360 Cities s.r.o."
                                                })]
                                            }), (0, a.jsx)("div", {
                                                className: "home__testimonials-carousel-company-image",
                                                children: (0, a.jsx)(o.Z, {
                                                    src: l,
                                                    alt: ""
                                                })
                                            })]
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "home__testimonials-carousel-item carousel-cell",
                                    children: [(0, a.jsx)("p", {
                                        className: "home__testimonials-carousel-title",
                                        children: "Smooth and professional service so far. Very easy to do business with."
                                    }), (0, a.jsxs)("div", {
                                        className: "home__testimonials-carousel-content",
                                        children: [(0, a.jsx)("div", {
                                            className: "home__testimonials-carousel-content-image",
                                            children: (0, a.jsx)(o.Z, {
                                                src: u,
                                                alt: ""
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "home__testimonials-carousel-content-right",
                                            children: [(0, a.jsxs)("div", {
                                                className: "home__testimonials-carousel-content-text",
                                                children: [(0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-name",
                                                    children: "Uros Jojic"
                                                }), (0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-content",
                                                    children: "President & Founder"
                                                }), (0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-content",
                                                    children: "Brid Video D.O.O."
                                                })]
                                            }), (0, a.jsx)("div", {
                                                className: "home__testimonials-carousel-company-image",
                                                children: (0, a.jsx)(o.Z, {
                                                    src: c,
                                                    alt: ""
                                                })
                                            })]
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "home__testimonials-carousel-item carousel-cell",
                                    children: [(0, a.jsx)("p", {
                                        className: "home__testimonials-carousel-title",
                                        children: "Very good service. Fast replies to emails. CloudCheckr is good for overview of AWS service usage."
                                    }), (0, a.jsxs)("div", {
                                        className: "home__testimonials-carousel-content",
                                        children: [(0, a.jsx)("div", {
                                            className: "home__testimonials-carousel-content-image",
                                            children: (0, a.jsx)(o.Z, {
                                                src: u,
                                                alt: ""
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "home__testimonials-carousel-content-right",
                                            children: [(0, a.jsxs)("div", {
                                                className: "home__testimonials-carousel-content-text",
                                                children: [(0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-name",
                                                    children: "Kai Palom\xe4ki"
                                                }), (0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-content",
                                                    children: "CTO"
                                                }), (0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-content",
                                                    children: "Relax Gaming Ltd"
                                                })]
                                            }), (0, a.jsx)("div", {
                                                className: "home__testimonials-carousel-company-image",
                                                children: (0, a.jsx)(o.Z, {
                                                    src: m,
                                                    alt: ""
                                                })
                                            })]
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "home__testimonials-carousel-item carousel-cell",
                                    children: [(0, a.jsx)("p", {
                                        className: "home__testimonials-carousel-title",
                                        children: "The migration went smoothly and we received the answers to our questions during that phase."
                                    }), (0, a.jsxs)("div", {
                                        className: "home__testimonials-carousel-content",
                                        children: [(0, a.jsx)("div", {
                                            className: "home__testimonials-carousel-content-image",
                                            children: (0, a.jsx)(o.Z, {
                                                src: u,
                                                alt: ""
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "home__testimonials-carousel-content-right",
                                            children: [(0, a.jsxs)("div", {
                                                className: "home__testimonials-carousel-content-text",
                                                children: [(0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-name",
                                                    children: "Philippe Schroeter"
                                                }), (0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-content",
                                                    children: "Product Manager"
                                                }), (0, a.jsx)("p", {
                                                    className: "home__testimonials-carousel-content-text-content",
                                                    children: "DARTFISH SA"
                                                })]
                                            }), (0, a.jsx)("div", {
                                                className: "home__testimonials-carousel-company-image",
                                                children: (0, a.jsx)(o.Z, {
                                                    src: r,
                                                    alt: ""
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "home__testimonials-apostrophe",
                                children: (0, a.jsx)(o.Z, {
                                    src: i,
                                    alt: "Apostrophe"
                                })
                            })]
                        })
                    })
                })
        }
    }
]);