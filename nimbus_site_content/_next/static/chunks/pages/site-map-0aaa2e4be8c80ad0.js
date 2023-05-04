(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [66], {
        2746: function (e, a, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/site-map", function () {
                return s(4820)
            }])
        },
        9378: function (e, a, s) {
            "use strict";
            var t = s(4051),
                n = s.n(t),
                i = s(5893),
                r = s(1664),
                l = s(7294),
                o = s(9669),
                c = s.n(o);

            function d(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var s = 0, t = new Array(a); s < a; s++) t[s] = e[s];
                return t
            }

            function h(e, a, s, t, n, i, r) {
                try {
                    var l = e[i](r),
                        o = l.value
                } catch (c) {
                    return void s(c)
                }
                l.done ? a(o) : Promise.resolve(o).then(t, n)
            }

            function m(e) {
                return function () {
                    var a = this,
                        s = arguments;
                    return new Promise((function (t, n) {
                        var i = e.apply(a, s);

                        function r(e) {
                            h(i, t, n, r, l, "next", e)
                        }

                        function l(e) {
                            h(i, t, n, r, l, "throw", e)
                        }
                        r(void 0)
                    }))
                }
            }

            function f(e) {
                return function (e) {
                    if (Array.isArray(e)) return d(e)
                }(e) || function (e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function (e, a) {
                    if (!e) return;
                    if ("string" === typeof e) return d(e, a);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === s && e.constructor && (s = e.constructor.name);
                    if ("Map" === s || "Set" === s) return Array.from(s);
                    if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return d(e, a)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            a.Z = function () {
                var e = (0, l.useState)(""),
                    a = e[0],
                    s = e[1],
                    t = (0, l.useState)(""),
                    o = t[0],
                    d = t[1],
                    h = (0, l.useState)(""),
                    p = h[0],
                    u = h[1],
                    _ = (0, l.useState)(!1),
                    x = _[0],
                    j = _[1];

                function g() {
                    return (g = m(n().mark((function e() {
                        var t, i;
                        return n().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = f(document.querySelectorAll("#footer-contact .form__group .group__inputs")), t.every((function (e) {
                                            return e.reportValidity()
                                        }))) try {
                                        i = {
                                            data: {
                                                name: a,
                                                email: o,
                                                message: p,
                                                tos: x
                                            }
                                        }, c().post("https://cms.stormit.cloud/api/contacts", i, {
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        }).then((function (e) {
                                            200 === e.status ? console.log("Message sent!") : console.log("Error, something went wrong, try again!")
                                        })), s(""), d(""), u(""), j(!1)
                                    } catch (n) {
                                        console.log(n)
                                    }
                                    case 3: case "end": return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                return (0, i.jsx)("div", {
                    className: "footer__contact-box",
                    children: (0, i.jsxs)("div", {
                        className: "footer__contact",
                        children: [(0, i.jsxs)("div", {
                            className: "contact__content",
                            children: [(0, i.jsx)("p", {
                                className: "contact__title",
                                children: "Are you ready to accelerate your business to the cloud?"
                            }), (0, i.jsx)("p", {
                                className: "contact__text",
                                children: "Our team of certified Amazon Web Services consultants is ready to handle your next cloud project. Get in touch today to speak with a cloud expert and discuss how we can help."
                            }), (0, i.jsxs)("div", {
                                className: "contact__info",
                                children: [(0, i.jsx)("div", {
                                    className: "contact__image",
                                    children: (0, i.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                        width: "21",
                                        height: "15",
                                        viewBox: "0 0 21 15",
                                        children: [(0, i.jsx)("defs", {
                                            children: (0, i.jsx)("clipPath", {
                                                id: "clip-path",
                                                children: (0, i.jsx)("rect", {
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
                                        }), (0, i.jsx)("g", {
                                            id: "Mask_Group_2",
                                            "data-name": "Mask Group 2",
                                            transform: "translate(-117.252 -5516.385)",
                                            clipPath: "url(#clip-path)",
                                            children: (0, i.jsx)("path", {
                                                id: "Icon_zocial-email",
                                                "data-name": "Icon zocial-email",
                                                d: "M.072,18.6V5.481q0-.023.068-.433l7.723,6.607-7.7,7.4A1.931,1.931,0,0,1,.072,18.6ZM1.1,4.136a.982.982,0,0,1,.387-.068h20.8a1.29,1.29,0,0,1,.41.068l-7.746,6.63-1.025.82L11.9,13.249,9.868,11.586l-1.025-.82ZM1.12,19.947,8.889,12.5,11.9,14.935,14.9,12.5l7.769,7.45a1.094,1.094,0,0,1-.387.068H1.485a1.032,1.032,0,0,1-.365-.068Zm14.808-8.293,7.7-6.607a1.36,1.36,0,0,1,.068.433V18.6a1.746,1.746,0,0,1-.068.456Z",
                                                transform: "translate(116.317 5511.754)",
                                                fill: "#1f2649"
                                            })
                                        })]
                                    })
                                }), (0, i.jsx)(r.default, {
                                    href: "mailto:info@nimbussystem.com",
                                    children: (0, i.jsx)("a", {
                                        className: "contact__email",
                                        children: "info@nimbussystem.com"
                                    })
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "contact__info",
                                children: [(0, i.jsx)("div", {
                                    className: "contact__image",
                                    children: (0, i.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "17.098",
                                        height: "17.098",
                                        viewBox: "0 0 17.098 17.098",
                                        children: (0, i.jsx)("path", {
                                            id: "Icon_awesome-phone-alt",
                                            "data-name": "Icon awesome-phone-alt",
                                            d: "M16.61,12.082l-3.74-1.6a.8.8,0,0,0-.935.23l-1.656,2.024A12.378,12.378,0,0,1,4.361,6.816L6.385,5.16a.8.8,0,0,0,.23-.935L5.012.485A.807.807,0,0,0,4.094.021L.621.822A.8.8,0,0,0,0,1.6,15.493,15.493,0,0,0,15.495,17.1a.8.8,0,0,0,.781-.621l.8-3.473a.811.811,0,0,0-.468-.922Z",
                                            transform: "translate(0 0)",
                                            fill: "#1f2649"
                                        })
                                    })
                                }), (0, i.jsx)(r.default, {
                                    href: "tel:+1 (331) 245-9179",
                                    children: (0, i.jsx)("a", {
                                        children: "+1 (331) 245-9179"
                                    })
                                }), (0, i.jsx)("span", {
                                    className: "contact__info-location",
                                    children: "CHENNAI, INDIA"
                                })]
                            })]
                        }), (0, i.jsx)("div", {
                            className: "contact__form",
                            children: (0, i.jsxs)("form", {
                                action: "contact__submit",
                                id: "footer-contact",
                                children: [(0, i.jsxs)("div", {
                                    className: "form__group",
                                    children: [(0, i.jsx)("input", {
                                        className: "group__inputs",
                                        type: "text",
                                        id: "footer-name",
                                        required: !0,
                                        placeholder: "Name",
                                        onChange: function (e) {
                                            return s(e.target.value)
                                        },
                                        value: a
                                    }), (0, i.jsx)("label", {
                                        className: "form__group-label",
                                        htmlFor: "footer-name",
                                        children: "Name *"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "form__group",
                                    children: [(0, i.jsx)("input", {
                                        className: "group__inputs",
                                        type: "email",
                                        id: "footer-email",
                                        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
                                        required: !0,
                                        placeholder: "E-mail",
                                        onChange: function (e) {
                                            return d(e.target.value)
                                        },
                                        value: o
                                    }), (0, i.jsx)("label", {
                                        className: "form__group-label",
                                        htmlFor: "footer-email",
                                        children: "E-mail *"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "form__group",
                                    children: [(0, i.jsx)("textarea", {
                                        className: "group__inputs text-area",
                                        id: "footer-message",
                                        name: "message",
                                        rows: "5",
                                        placeholder: " ",
                                        required: !0,
                                        onChange: function (e) {
                                            return u(e.target.value)
                                        },
                                        value: p
                                    }), (0, i.jsx)("label", {
                                        className: "form__group-label",
                                        htmlFor: "footer-message",
                                        children: "Message *"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "form__group-submit",
                                    children: [(0, i.jsx)("div", {
                                        className: "form__group-checkbox",
                                        children: (0, i.jsxs)("label", {
                                            htmlFor: "footer-tos",
                                            className: "form__group-checkbox-label",
                                            children: [(0, i.jsx)("input", {
                                                type: "checkbox",
                                                name: "tos",
                                                value: "tos",
                                                id: "footer-tos",
                                                className: "form__group-checkbox-input",
                                                checked: x,
                                                onChange: function () {
                                                    return j(!x)
                                                }
                                            }), "I accept ", (0, i.jsx)(r.default, {
                                                href: "/terms-conditions",
                                                children: (0, i.jsx)("a", {
                                                    className: "form__group-submit-link",
                                                    children: "terms & conditions"
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "form__group-checkbox-styled"
                                            })]
                                        })
                                    }), (0, i.jsx)("input", {
                                        className: "form__group-button",
                                        type: "button",
                                        value: "Send",
                                        name: "submit",
                                        disabled: !x,
                                        onClick: function () {
                                            return function () {
                                                return g.apply(this, arguments)
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
        4820: function (e, a, s) {
            "use strict";
            s.r(a);
            var t = s(5893),
                n = (s(7294), s(9008)),
                i = s(1664),
                r = s(9378);
            a.default = function () {
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)(n.default, {
                        children: [(0, t.jsx)("meta", {
                            name: "description",
                            content: "Nimbus System site map"
                        }), (0, t.jsx)("meta", {
                            property: "og:image",
                            content: "".concat("https://stormit.vercel.app", "/img/stormit-aws.png")
                        }), (0, t.jsx)("meta", {
                            property: "og:image:secure_url",
                            content: "".concat("https://stormit.vercel.app", "/img/stormit-aws.png")
                        }), (0, t.jsx)("meta", {
                            property: "og:image:width",
                            content: "1245"
                        }), (0, t.jsx)("meta", {
                            property: "og:image:height",
                            content: "630"
                        }), (0, t.jsx)("link", {
                            rel: "canonical",
                            href: "https://www.stormit.cloud/site-map/"
                        }), (0, t.jsx)("title", {
                            children: "Site Map | Nimbus System"
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "site-map padding-footer",
                        children: [(0, t.jsx)("div", {
                            className: "site-map__title-box",
                            children: (0, t.jsx)("h1", {
                                className: "site-map__title",
                                children: "Site Map"
                            })
                        }), (0, t.jsx)("section", {
                            className: "site-map__wrapper",
                            children: (0, t.jsxs)("div", {
                                className: "site-map__content",
                                children: [(0, t.jsxs)("div", {
                                    className: "site-map__content-box",
                                    children: [(0, t.jsx)("p", {
                                        className: "site-map__content-title",
                                        children: "Home"
                                    }), (0, t.jsx)(i.default, {
                                        href: "index.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "Homepage"
                                        })
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "site-map__content-box",
                                    children: [(0, t.jsx)("p", {
                                        className: "site-map__content-title",
                                        children: "Cloud Services"
                                    }), (0, t.jsx)(i.default, {
                                        href: "/managed-cloud-services.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "Managed Cloud Service"
                                        })
                                    }), (0, t.jsx)(i.default, {
                                        href: "/enterprise-cloud-management-platform.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "Enterprise Cloud Management Platform"
                                        })
                                    }), (0, t.jsx)(i.default, {
                                        href: "/cloud-check-up.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "Cloud Check-Up"
                                        })
                                    }), (0, t.jsx)(i.default, {
                                        href: "/cloud-reselling.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "Cloud Reselling"
                                        })
                                    }), (0, t.jsx)(i.default, {
                                        href: "/cloud-foundation.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "Cloud Foundation"
                                        })
                                    }), (0, t.jsx)(i.default, {
                                        href: "/architecture-deployment.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "Architecture Deployment"
                                        })
                                    }), (0, t.jsx)(i.default, {
                                        href: "/aws-migration-services.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "AWS Migration Services"
                                        })
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "site-map__content-box",
                                    children: [(0, t.jsx)("p", {
                                        className: "site-map__content-title",
                                        children: "CDN Services"
                                    }), (0, t.jsx)(i.default, {
                                        href: "/cdn-services.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "CDN Services"
                                        })
                                    }), (0, t.jsx)(i.default, {
                                        href: "/cdn-security.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "CDN Security"
                                        })
                                    }), (0, t.jsx)(i.default, {
                                        href: "/video-streaming-cdn.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "Video Streaming CDN"
                                        })
                                    }), (0, t.jsx)(i.default, {
                                        href: "/gaming-cdn.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "Gaming CDN"
                                        })
                                    }), (0, t.jsx)(i.default, {
                                        href: "/website-app-acceleration.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "Website and App Acceleration"
                                        })
                                    }), (0, t.jsx)(i.default, {
                                        href: "/software-distribution.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "Software Distribution"
                                        })
                                    }), (0, t.jsx)(i.default, {
                                        href: "/cdn-cost-calculator.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "CDN Cost Calculator"
                                        })
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "site-map__content-box",
                                    children: [(0, t.jsx)("p", {
                                        className: "site-map__content-title",
                                        children: "Aws Practice"
                                    }), (0, t.jsx)(i.default, {
                                        href: "/cloudfront.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "Amazon CloudFront"
                                        })
                                    }), (0, t.jsx)(i.default, {
                                        href: "/aws-lambda.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "AWS Lambda"
                                        })
                                    }), (0, t.jsx)(i.default, {
                                        href: "/aws-web-application-firewall.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "AWS WAF"
                                        })
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "site-map__content-box",
                                    children: [(0, t.jsx)("p", {
                                        className: "site-map__content-title",
                                        children: "Blog Pages"
                                    }), (0, t.jsx)(i.default, {
                                        href: "/blog.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "Blog"
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "site-map__content-indent",
                                        children: [(0, t.jsx)(i.default, {
                                            href: "/case-studies.php",
                                            passhref: !0,
                                            children: (0, t.jsx)("a", {
                                                className: "site-map__content-link",
                                                children: "Case Studies"
                                            })
                                        }), (0, t.jsxs)("div", {
                                            className: "site-map__content-indent",
                                            children: [(0, t.jsx)(i.default, {
                                                href: "/blog/inscope-case-study.php",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "InScope Choses Nimbus System and AWS for Deployment of their AML Solution"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/times-of-malta-migrates-to-aws",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Times of Malta Seamlessly Migrates to AWS Cloud with Nimbus System"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/brid-tv",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "BRID TV - Enterprise-level Video Monetization"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/windy-is-an-extraordinary-tool-for-weather-forecast-visualization",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Windy - The Extraordinary Tool for Weather Forecast Visualization"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/srovnejto-case-study",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Srovnejto.cz - Breaking the Legacy Monolith into Serverless Microservices in AWS Cloud"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/bauermedia-case-study",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "BAUER MEDIA GROUP - Integration Platform Deployment in AWS Cloud"
                                                })
                                            })]
                                        }), (0, t.jsx)("p", {
                                            children: "News"
                                        }), (0, t.jsxs)("div", {
                                            className: "site-map__content-indent",
                                            children: [(0, t.jsx)(i.default, {
                                                href: "/blog/stormit-sd-aws-lambda",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Nimbus System Achieves AWS Service Delivery Designation for AWS Lambda"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/stormit-achieves-aws-service-delivery-designation-for-amazon-cloudfront",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Nimbus System Achieves AWS Service Delivery Designation for Amazon CloudFront"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/aws-waf-service-delivery",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Nimbus System Achieves AWS Service Delivery Designation for AWS WAF"
                                                })
                                            })]
                                        }), (0, t.jsx)("p", {
                                            children: "Articles"
                                        }), (0, t.jsxs)("div", {
                                            className: "site-map__content-indent",
                                            children: [(0, t.jsx)(i.default, {
                                                href: "/blog/setup-an-amazon-cloudfront-distribution-with-ssl-custom-domain-and-s3",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Setup an Amazon CloudFront distribution with SSL, custom domain and S3"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/what-is-cdn",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "What Is a CDN and Why Use It in Your Business"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/amazon-cloudfront-pricing-how-to-approach-it-and-save-money",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Amazon CloudFront Pricing: How to Approach it and Save Money"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/best-aws-tools-for-migration",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "8 Best AWS Cloud Migration Tools to Overcome Migration Challenges"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/cloud-ddos-protection-how-to-mitigate-all-risks",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Cloud DDoS Protection: How to Mitigate All Risks"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/cloud-cost-optimization-strategies-and-tools",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "8 AWS Cloud Cost Optimization Strategies and Tools"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/live-streaming-cdn-guide",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Live Streaming CDN: Guide for Broadcasters"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/what-is-a-web-application-firewall",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "What is a Web Application Firewall (WAF) and Why Use it"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/cloud-migration-strategy-with-stormit",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Cloud Migration Strategy With Nimbus System: How to Do it Right"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/6-rs-aws-migration-strategies",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "The 6 R\u2019s: AWS Migration Strategies"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/what-is-aws-shield-how-does-it-work",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "What is AWS Shield and How Does it Work"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/what-is-round-trip-time-rtt-meaning-calculation",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "What is RTT (Round-Trip Time) and How to Reduce it?"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/cache-hit-ratio-what-is-it",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "What is a Cache Hit Ratio and How do you Calculate it?"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/aws-instance-scheduler",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "AWS Instance Scheduler: Everything you Need to Know and Tutorial"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/what-is-an-origin-server",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "What is an Origin Server & How to Reduce its Load?"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/amazon-guardduty",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "What is Amazon GuardDuty? Definition, Pricing & Comparison"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/private-cloud-security-vs-public-cloud-security",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "A Comparison of Private Cloud Security & Public Cloud Security"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/aws-cost-optimization",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "AWS Cost Optimization: Best Practices for Reducing AWS Bill"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/scalability-in-cloud-computing-horizontal-vs-vertical-scaling",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Scalability in Cloud Computing: Horizontal vs. Vertical Scaling"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/s3-intelligent-tiering-storage-class",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Amazon S3 Intelligent Tiering: How it Helps to Optimize Storage Costs"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/aws-auto-scaling",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "AWS Auto Scaling: Everything That You Need to Know"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/aws-security-hub",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "What is AWS Security Hub? Definition, Benefits & Pricing"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/aws-direct-connect",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Introduction to AWS Direct Connect"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/amazon-inspector",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Amazon Inspector: How to Get The Most Benefit Out of it"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/comparison-aws-direct-connect-vs-vpn",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Comparison: AWS Direct Connect vs. VPN"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/what-is-amazon-macie",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "What is Amazon Macie and How does it Protect Your Sensitive Data?"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/aws-data-transfer-pricing-how-to-reduce-costs",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "AWS Data Transfer Pricing: How to Reduce Your Costs?"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/route-53-health-check",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Amazon Route 53: Health Checks and DNS Failover"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/amazon-route-53-pricing",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Amazon Route 53 Pricing: How Does it Work?"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/cloudfront-origin-access-identity",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Amazon Cloudfront Origin Access Identity (OAI): What it is and How to Use it?"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/cloudfront-distribution-for-amazon-ec2-alb",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Creating a CloudFront Distribution for Amazon EC2 and ALB"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/amazon-route-53",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Amazon Route 53 Basics and Routing Policies"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/origin-shield",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Origin Shield: How does it Help to Protect Your Origin?"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/aws-lambda-pricing",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "AWS Lambda Pricing: Cost Optimization Approaches Guide"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/api-gateway",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "A Beginners Guide to API Gateway: What is it and Why is it Important?"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/amazon-api-gateway-pricing",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Amazon API Gateway Pricing: Six Tips to Control the Cost"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/aws-organizations-how-to-manage-multiple-aws-accounts",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "AWS Organizations: How to Manage Multiple AWS Accounts?"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/aws-scp-service-control-policy",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "What is AWS SCP (Service Control Policy) and How does it Help with Permissions?"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/aws-managed-prefix-list",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "What are AWS-managed Prefix Lists and How do you Use Them?"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/lambda-at-edge",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "What is Lamdba@Edge and How is it Different from AWS Lambda?"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/cloudfront-origin-access-control",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Amazon Cloudfront Origin Access Control (OAC): All you Need to Know"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/cloudfront-in-front-of-api-gateway",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "Does Putting CloudFront in Front of API Gateway Make Sense?"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/aws-high-availability-architecture",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "AWS High Availability Architecture: Learn How to Create it!"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/6-pillars-of-aws-well-architected-framework",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "AWS Well-Architected Framework: Understanding the Six Pillars of Successful Architectures"
                                                })
                                            }), (0, t.jsx)(i.default, {
                                                href: "/blog/aws-well-architected-tool",
                                                passhref: !0,
                                                children: (0, t.jsx)("a", {
                                                    className: "site-map__content-link",
                                                    children: "AWS Well-Architected Tool: How it Helps with the Architecture Review"
                                                })
                                            })]
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "site-map__content-box",
                                    children: [(0, t.jsx)("p", {
                                        className: "site-map__content-title",
                                        children: "About Nimbus System"
                                    }), (0, t.jsx)(i.default, {
                                        href: "/about.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "About Nimbus System"
                                        })
                                    }), (0, t.jsx)(i.default, {
                                        href: "/careers.php",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "Careers"
                                        })
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "site-map__content-box",
                                    children: [(0, t.jsx)("p", {
                                        className: "site-map__content-title",
                                        children: "Contact.php"
                                    }), (0, t.jsx)(i.default, {
                                        href: "/contact",
                                        passhref: !0,
                                        children: (0, t.jsx)("a", {
                                            className: "site-map__content-link",
                                            children: "Contact Us"
                                        })
                                    })]
                                })]
                            })
                        })]
                    }), (0, t.jsx)(r.Z, {})]
                })
            }
        }
    },
    function (e) {
        e.O(0, [647, 774, 888, 179], (function () {
            return a = 2746, e(e.s = a);
            var a
        }));
        var a = e.O();
        _N_E = a
    }
]);