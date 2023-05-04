(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [195], {
        677: function (e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/blog", function () {
                return s(6428)
            }])
        },
        4814: function (e, t, s) {
            "use strict";
            s.d(t, {
                $: function () {
                    return a
                }
            });
            s(4051), s(129);

            function a(e) {
                var t = e.data.attributes.url;
                return t.startsWith("https://") ? t : "https://" + t
            }
        },
        6428: function (e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSG: function () {
                    return m
                },
                default: function () {
                    return _
                }
            });
            var a = s(5893),
                r = s(7661),
                i = s(1664),
                c = s(9008),
                l = s(2792),
                o = {
                    src: "_next/static/media/Icon-search.bc735f5f.svg",
                    height: 17,
                    width: 17
                },
                n = s(9378),
                h = s(8799),
                d = s(4814),
                u = s(7294);
            var m = !0,
                _ = function (e) {
                    var t = e.articles,
                        s = e.categories,
                        m = (0, u.useState)(""),
                        _ = m[0],
                        g = m[1],
                        v = (0, u.useState)(!1),
                        f = v[0],
                        p = v[1],
                        b = (0, u.useState)(!1),
                        x = b[0],
                        j = b[1],
                        N = (0, u.useRef)(),
                        w = (0, u.useRef)(),
                        y = function (e) {
                            S(e), L(e)
                        },
                        L = function (e) {
                            j(!x);
                            for (var t = w.current.querySelectorAll(".blog__archive-tags-tag"), s = 0; s < t.length; s++) t[s].classList.remove("active"), t[s].classList.contains(e) && t[s].classList.add("active")
                        },
                        S = function (e) {
                            for (var t = N.current.querySelectorAll(".blog__archive-post-item"), s = 0; s < t.length; s++) t[s].classList.remove("show"), t[s].classList.add("hide"), t[s].classList.contains(e) && (t[s].classList.add("show"), t[s].classList.remove("hide")), "all" === e && (t[s].classList.add("show"), t[s].classList.remove("hide"))
                        };
                    return (0, u.useEffect)((function () {
                        for (var e = _.toUpperCase(), t = N.current, s = t.querySelectorAll(".blog__archive-post-item"), a = t.querySelectorAll(".blog__archive-post-item .post__item-content .post__item-title"), r = 0; r < a.length; r++) {
                            var i = a[r];
                            (i.textContent || i.innerText).toUpperCase().indexOf(e) > -1 ? (s[r].classList.add("show"), s[r].classList.remove("hide")) : (s[r].classList.remove("show"), s[r].classList.add("hide"))
                        }
                    }), [_]), (0, u.useEffect)((function () {
                        for (var e = N.current.querySelectorAll(".blog__archive-post-item"), t = Array.from(e), s = t.slice(16, t.length), a = 0; a < s.length; a++) s[a].classList.remove("show"), s[a].classList.add("hide")
                    }), []), (0, u.useEffect)((function () {
                        for (var e = N.current, t = e.querySelectorAll(".blog__archive-post-item.first-post"), s = 0; s < t.length; s++) t[s].classList.remove("first-post");
                        var a = e.querySelectorAll(".blog__archive-post-item.show");
                        a.length > 0 && a[0].classList.add("first-post")
                    }), [x, _]), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(c.default, {
                            children: [(0, a.jsx)("meta", {
                                name: "description",
                                content: "Nimbus System Blog"
                            }), (0, a.jsx)("meta", {
                                property: "og:image",
                                content: "".concat("https://stormit.vercel.app", "/img/stormit-aws.png")
                            }), (0, a.jsx)("meta", {
                                property: "og:image:secure_url",
                                content: "".concat("https://stormit.vercel.app", "/img/stormit-aws.png")
                            }), (0, a.jsx)("meta", {
                                property: "og:image:width",
                                content: "1245"
                            }), (0, a.jsx)("meta", {
                                property: "og:image:height",
                                content: "630"
                            }), (0, a.jsx)("link", {
                                rel: "canonical",
                                href: "https://www.stormit.cloud/blog/"
                            }), (0, a.jsx)("title", {
                                children: "Blog | Nimbus System"
                            })]
                        }), (0, a.jsx)("div", {
                            className: "blog",
                            children: (0, a.jsxs)("section", {
                                className: "blog__archive",
                                children: [(0, a.jsx)("h1", {
                                    className: "blog__archive-title",
                                    children: "Blog"
                                }), (0, a.jsxs)("div", {
                                    className: "blog__archive-nav",
                                    children: [(0, a.jsxs)("div", {
                                        className: "blog__archive-tags",
                                        ref: w,
                                        children: [(0, a.jsx)("button", {
                                            type: "button",
                                            className: "blog__archive-tags-tag active all",
                                            onClick: function () {
                                                return y("all")
                                            },
                                            children: "All"
                                        }), s.map((function (e) {
                                            return (0, a.jsx)("button", {
                                                type: "button",
                                                className: "blog__archive-tags-tag ".concat(e.attributes.slug),
                                                onClick: function () {
                                                    return y("".concat(e.attributes.slug))
                                                },
                                                children: e.attributes.name
                                            }, e.id)
                                        }))]
                                    }), (0, a.jsxs)("div", {
                                        className: "blog__archive-search",
                                        children: [(0, a.jsx)("input", {
                                            className: "blog__archive-search-field",
                                            id: "search-field",
                                            type: "search",
                                            placeholder: " ",
                                            onChange: function (e) {
                                                return g(e.target.value)
                                            }
                                        }), (0, a.jsx)("div", {
                                            className: "blog__archive-search-icon",
                                            children: (0, a.jsx)(r.Z, {
                                                src: o,
                                                alt: ""
                                            })
                                        }), (0, a.jsx)("label", {
                                            className: "blog__archive-search-label",
                                            htmlFor: "search-field",
                                            children: "Search"
                                        })]
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "blog__archive-posts",
                                    ref: N,
                                    children: t.map((function (e) {
                                        return (0, a.jsxs)("div", {
                                            className: "blog__archive-post-item show ".concat(null === e.attributes.category.data ? "" : e.attributes.category.data.attributes.slug),
                                            children: [(0, a.jsx)(i.default, {
                                                href: "/blog/".concat(e.attributes.slug),
                                                children: (0, a.jsx)("div", {
                                                    className: "blog__item-img",
                                                    children: (0, a.jsx)(r.Z, {
                                                        src: (0, d.$)(e.attributes.thumbnail),
                                                        layout: "fill",
                                                        alt: ""
                                                    })
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: "post__item-content",
                                                children: [(0, a.jsxs)("div", {
                                                    className: "post__item-tags",
                                                    children: [(0, a.jsx)("span", {
                                                        className: "post__item-tag active",
                                                        children: "Category"
                                                    }), (0, a.jsx)("span", {
                                                        className: "post__item-tag",
                                                        children: null === e.attributes.category.data ? "" : e.attributes.category.data.attributes.name
                                                    })]
                                                }), (0, a.jsx)(i.default, {
                                                    href: "/blog/".concat(e.attributes.slug),
                                                    passHref: !0,
                                                    children: (0, a.jsx)("a", {
                                                        children: (0, a.jsx)("h3", {
                                                            className: "post__item-title",
                                                            children: e.attributes.title
                                                        })
                                                    })
                                                }), (0, a.jsx)("p", {
                                                    className: "post__item-text",
                                                    children: e.attributes.description
                                                }), (0, a.jsx)("div", {
                                                    className: "post__item-readmore-box",
                                                    children: (0, a.jsx)(i.default, {
                                                        href: "/blog/".concat(e.attributes.slug),
                                                        passHref: !0,
                                                        children: (0, a.jsxs)("a", {
                                                            className: "post__item-readmore",
                                                            "aria-label": "Find out more about: ".concat(e.attributes.title),
                                                            children: ["Find out more", (0, a.jsx)("div", {
                                                                className: "post__item-readmore-arrow",
                                                                children: (0, a.jsx)(r.Z, {
                                                                    src: l.Z,
                                                                    alt: ""
                                                                })
                                                            })]
                                                        })
                                                    })
                                                })]
                                            })]
                                        }, e.id)
                                    }))
                                }), (0, a.jsxs)("div", {
                                    className: "blog__archive-loadmore",
                                    children: [(0, a.jsxs)("a", {
                                        className: "blog__archive-loadmore-link ".concat(!0 === f ? "hidden" : ""),
                                        onClick: function (e) {
                                            return function (e) {
                                                e.preventDefault();
                                                for (var t = N.current, s = t.querySelectorAll(".blog__archive-post-item.hide"), a = Array.from(s).slice(0, 9), r = 0; r < a.length; r++) s[r].classList.add("show"), s[r].classList.remove("hide");
                                                0 === t.querySelectorAll(".blog__archive-post-item.hide").length && p(!0)
                                            }(e)
                                        },
                                        children: ["Load more articles ", (0, a.jsx)("div", {
                                            className: "blog__archive-loadmore-arrow",
                                            children: (0, a.jsx)(r.Z, {
                                                src: l.Z,
                                                alt: ""
                                            })
                                        })]
                                    }), (0, a.jsx)("a", {
                                        className: "blog__archive-loadmore-link end-message ".concat(!1 === f ? "hidden" : ""),
                                        children: "You have reach the end!"
                                    })]
                                })]
                            })
                        }), (0, a.jsx)(h.Z, {}), (0, a.jsx)("div", {
                            className: "padding-footer"
                        }), (0, a.jsx)(n.Z, {})]
                    })
                }
        },
        4654: function () {}
    },
    function (e) {
        e.O(0, [647, 712, 129, 477, 774, 888, 179], (function () {
            return t = 677, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);