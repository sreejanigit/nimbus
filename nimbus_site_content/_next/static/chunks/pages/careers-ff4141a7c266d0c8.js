(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [698], {
        2469: function (e, a, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/careers", function () {
                return r(7365)
            }])
        },
        8843: function (e, a) {
            "use strict";
            a.Z = {
                src: "_next/static/media/red-arrow-big.1299b432.svg",
                height: 14,
                width: 25
            }
        },
        7365: function (e, a, r) {
            "use strict";
            r.r(a);
            var c = r(4051),
                s = r.n(c),
                o = r(5893),
                n = r(1664),
                i = r(7661),
                t = r(9008),
                l = r(7294),
                d = r(9669),
                m = r.n(d),
                u = r(8843);

            function p(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var r = 0, c = new Array(a); r < a; r++) c[r] = e[r];
                return c
            }

            function h(e, a, r, c, s, o, n) {
                try {
                    var i = e[o](n),
                        t = i.value
                } catch (l) {
                    return void r(l)
                }
                i.done ? a(t) : Promise.resolve(t).then(c, s)
            }

            function _(e) {
                return function () {
                    var a = this,
                        r = arguments;
                    return new Promise((function (c, s) {
                        var o = e.apply(a, r);

                        function n(e) {
                            h(o, c, s, n, i, "next", e)
                        }

                        function i(e) {
                            h(o, c, s, n, i, "throw", e)
                        }
                        n(void 0)
                    }))
                }
            }

            function x(e) {
                return function (e) {
                    if (Array.isArray(e)) return p(e)
                }(e) || function (e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function (e, a) {
                    if (!e) return;
                    if ("string" === typeof e) return p(e, a);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return p(e, a)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            a.default = function () {
                var e = (0, l.useState)(""),
                    a = e[0],
                    r = e[1],
                    c = (0, l.useState)(""),
                    d = c[0],
                    p = c[1],
                    h = (0, l.useState)(""),
                    f = h[0],
                    g = h[1],
                    j = (0, l.useState)(""),
                    N = j[0],
                    v = j[1],
                    w = (0, l.useState)({
                        file: null
                    }),
                    b = w[0],
                    y = w[1],
                    k = (0, l.useState)(!1),
                    S = k[0],
                    A = k[1];

                function C() {
                    return (C = _(s().mark((function e() {
                        var c, o, n, i;
                        return s().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (c = x(document.querySelectorAll("#career-contact .group__inputs")), c.every((function (e) {
                                            return e.reportValidity()
                                        }))) try {
                                        o = new FormData, n = new FormData, i = {
                                            name: a,
                                            email: d,
                                            phone: f,
                                            message: N,
                                            tos: S
                                        }, o.append("data", JSON.stringify(i)), n.append("files", b.file), m().post("https://cms.stormit.cloud/api/career-contacts", o, {
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        }).then((function (e) {
                                            200 === e.status ? console.log("Message sent!") : console.log("Error, something went wrong, try again!")
                                        })), m().post("https://cms.stormit.cloud/api/upload", n).then((function (e) {
                                            200 === e.status ? console.log("File received!") : console.log("Error, something went wrong while uploading the file, try again!")
                                        })), r(""), p(""), v(""), g(""), y(), A(!1)
                                    } catch (s) {
                                        console.log(s)
                                    }
                                    case 3: case "end": return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                var E = (0, l.useState)({
                        status: !1,
                        key: ""
                    }),
                    D = E[0],
                    W = E[1],
                    F = function (e, a) {
                        e.preventDefault(), D.key === a ? W({
                            status: !1,
                            key: ""
                        }) : W({
                            status: !0,
                            key: a
                        })
                    };
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)(t.default, {
                        children: [(0, o.jsx)("meta", {
                            name: "description",
                            content: "Do you want to work in a small but fast-paced team of cloud enthusiasts to help us spread the latest trends in cloud computing?"
                        }), (0, o.jsx)("meta", {
                            property: "og:image",
                            content: "".concat("https://stormit.vercel.app", "/img/stormit-aws.png")
                        }), (0, o.jsx)("meta", {
                            property: "og:image:secure_url",
                            content: "".concat("https://stormit.vercel.app", "/img/stormit-aws.png")
                        }), (0, o.jsx)("meta", {
                            property: "og:image:width",
                            content: "1245"
                        }), (0, o.jsx)("meta", {
                            property: "og:image:height",
                            content: "630"
                        }), (0, o.jsx)("link", {
                            rel: "canonical",
                            href: "https://www.stormit.cloud/careers/"
                        }), (0, o.jsx)("title", {
                            children: "Careers | Nimbus System"
                        })]
                    }), (0, o.jsxs)("div", {
                        className: "careers",
                        children: [(0, o.jsx)("section", {
                            className: "careers__hero",
                            children: (0, o.jsxs)("div", {
                                className: "careers__hero-box",
                                children: [(0, o.jsx)("p", {
                                    className: "careers__hero-subtext",
                                    children: "about us"
                                }), (0, o.jsx)("h1", {
                                    className: "careers__hero-title-main",
                                    children: "Careers"
                                }), (0, o.jsx)("p", {
                                    className: "careers__hero-text",
                                    children: "Do you want to work in a small but fast-paced team of cloud enthusiasts to help us spread the latest trends in cloud computing? Do you want to start a career in sales and continue to develop in this area? If so, then it is you we are looking for. Read more to see what positions are currently open."
                                })]
                            })
                        }), (0, o.jsx)("section", {
                            className: "careers__accord",
                            children: (0, o.jsx)("div", {
                                className: "careers__accord-box",
                                children: (0, o.jsx)("div", {
                                    className: "careers__accord-box",
                                    children: (0, o.jsxs)("div", {
                                        className: "careers__accord-card-accordion-box",
                                        children: [(0, o.jsxs)("div", {
                                            className: "careers__accord-card-accordion-box-item",
                                            children: [(0, o.jsxs)("button", {
                                                className: "".concat("accordion1" == D.key ? "active" : "", " careers__accord-card-accordion-button"),
                                                onClick: function (e) {
                                                    return F(e, "accordion1")
                                                },
                                                children: [(0, o.jsx)("div", {
                                                    className: "careers__accord-card-accordion-button-image",
                                                    children: "01"
                                                }), (0, o.jsxs)("div", {
                                                    className: "careers__accord-card-accordion-button-text",
                                                    children: [(0, o.jsx)("h2", {
                                                        id: "dev-ops-engineer",
                                                        className: "careers__accord-card-accordion-button-text-title",
                                                        children: "DevOps Engineer"
                                                    }), (0, o.jsx)("p", {
                                                        className: "careers__accord-card-accordion-button-text-text",
                                                        children: "We are looking for an AWS DevOps Engineer who will join our remote team and provide consulting services to our clients and delivery teams. You as the experienced AWS DevOps professional will participate in sales/pre-sales and discovery, provide consultancy and architecture reviews, and supervise projects during the early stages of development."
                                                    })]
                                                }), (0, o.jsx)("div", {
                                                    className: "careers__accord-card-accordion-button-arrow",
                                                    children: (0, o.jsx)(i.Z, {
                                                        src: u.Z,
                                                        alt: ""
                                                    })
                                                })]
                                            }), (0, o.jsxs)("div", {
                                                className: "".concat("accordion1" == D.key ? "active" : "", " careers__accord-card-accordion-panel"),
                                                children: [(0, o.jsx)("h3", {
                                                    className: "careers__accord-card-accordion-panel-title",
                                                    children: "Expectations"
                                                }), (0, o.jsxs)("ul", {
                                                    className: "careers__accord-card-accordion-panel-list",
                                                    children: [(0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "4+ years of experience in a similar role"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Extensive knowledge of AWS services with successful projects history"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Demonstrated competency of the following AWS services is essential:"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "EC2, ECS, EBS, S3, CloudFront, RDS, VPC, Route53, ELB, IAM, CloudFormation, CloudWatch, Lambda, WAF, Redshift, ElastiCache"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Experience in code development in at least one high-level programming language (Python/ Java/ TypeScript)"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Deep understanding of the Linux operating system and networking concepts"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Experience building scalable infrastructure in AWS"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Experience with one or more AWS SDKs and/or CLI"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Expertise in leveraging Automation/DevOps principles, experience with operational tools, and able to apply best practices for infrastructure and software deployment."
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Deep knowledge of Infrastructure as Code (CloudFormation, SAM, CDK, ...)"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Broad knowledge of GitOps"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "AWS Associate level certification is required (Solution Architect Associate, SysOps Administrator Associate, Developer Associate)"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "A university degree in a relevant field is a plus"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "AWS Solution Architect Professional or DevOps Engineer Professional certification is an advantage"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Open-minded, communicative, with presentation skills"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Self-starter, proactive and goal-oriented"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Reliable, able to take full ownership of the assigned tasks or projects"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Fluent in English is a must; Another European language is preferred"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Interested in self-development and learning"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Detail-oriented, well-organized, persistent, and a quick learner able to adapt and learn new things."
                                                    })]
                                                }), (0, o.jsx)("h3", {
                                                    className: "careers__accord-card-accordion-panel-title",
                                                    children: "You will become part of"
                                                }), (0, o.jsxs)("ul", {
                                                    className: "careers__accord-card-accordion-panel-list",
                                                    children: [(0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "You will be part of our small but fast-growing remote team"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Your role will be key to supporting your sales and service delivery colleagues for successful project delivery"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "You will work on unique projects to put your various skills to use but also improve and learn something new"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "You will work on unique projects to put your various skills to use but also improve and learn something new"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Your office will be wherever your phone and laptop are."
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "You will work remotely but in close contact with other colleagues in the team"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "An international team where you can learn new things and meet interesting people"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "A dynamic environment in which no work becomes a routine"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "A fast-growing start-up, giving you the opportunity to participate in its development"
                                                    })]
                                                }), (0, o.jsx)("h3", {
                                                    className: "careers__accord-card-accordion-panel-title",
                                                    children: "What you can expect"
                                                }), (0, o.jsxs)("ul", {
                                                    className: "careers__accord-card-accordion-panel-list",
                                                    children: [(0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Competitive incentive financial remuneration"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "All the gear needed for your success (Laptop, mobile phone, etc.)"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Internet/ call expenses go on us"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Flexible working hours"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Work remotely / Home office"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Opportunity to travel"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "We value self-learning and learning new technologies, so we encourage all our team members to acquire new certifications, attend relevant courses and conferences, etc."
                                                    })]
                                                }), (0, o.jsx)(n.default, {
                                                    href: "#contact",
                                                    passHref: !0,
                                                    children: (0, o.jsx)("a", {
                                                        className: "careers__accord-card-accordion-panel-link",
                                                        children: "contact us"
                                                    })
                                                })]
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "careers__accord-card-accordion-box-item",
                                            children: [(0, o.jsxs)("button", {
                                                className: "".concat("accordion2" == D.key ? "active" : "", " careers__accord-card-accordion-button"),
                                                onClick: function (e) {
                                                    return F(e, "accordion2")
                                                },
                                                children: [(0, o.jsx)("div", {
                                                    className: "careers__accord-card-accordion-button-image",
                                                    children: "02"
                                                }), (0, o.jsxs)("div", {
                                                    className: "careers__accord-card-accordion-button-text",
                                                    children: [(0, o.jsx)("h2", {
                                                        id: "sales-manager",
                                                        className: "careers__accord-card-accordion-button-text-title",
                                                        children: "Sales Manager"
                                                    }), (0, o.jsx)("p", {
                                                        className: "careers__accord-card-accordion-button-text-text",
                                                        children: "Do you want to work in a small but fast-paced team of cloud enthusiasts to help us spread the latest trends in cloud computing? If so, then it may be you, we are looking for. Become a member of our sales team as a Sales Manager for our growing business in the European market."
                                                    })]
                                                }), (0, o.jsx)("div", {
                                                    className: "careers__accord-card-accordion-button-arrow",
                                                    children: (0, o.jsx)(i.Z, {
                                                        src: u.Z,
                                                        alt: ""
                                                    })
                                                })]
                                            }), (0, o.jsxs)("div", {
                                                className: "".concat("accordion2" == D.key ? "active" : "", " careers__accord-card-accordion-panel"),
                                                children: [(0, o.jsx)("h3", {
                                                    className: "careers__accord-card-accordion-panel-title",
                                                    children: "What you should have and know"
                                                }), (0, o.jsxs)("ul", {
                                                    className: "careers__accord-card-accordion-panel-list",
                                                    children: [(0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "4+ years working experience in tech industry solution selling with proven success"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Understanding IT, Cloud Computing, Cloud services market and be aware of the current trends in the industry"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Experience with selling CDN and consulting services and/or knowledge of AWS is not essential but strongly preferred."
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Have experience in selling to European markets"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Open-minded, communicative, with great presentation skills"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Self-starter, pro-active and goal-oriented"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Reliable, able to take full ownership of the assigned tasks or projects"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Fluent in English is a must; Fluent in German/French/Spanish/Czech/Slovak/Polish is highly preferred"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Interested in self-development, learning, and building a career in IT, technologies, and cloud computing"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Detail-oriented, well-organized, persistent, and quick learner able to adapt and learn new things"
                                                    })]
                                                }), (0, o.jsx)("h3", {
                                                    className: "careers__accord-card-accordion-panel-title",
                                                    children: "What you can expect"
                                                }), (0, o.jsxs)("ul", {
                                                    className: "careers__accord-card-accordion-panel-list",
                                                    children: [(0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Your role will be key to supporting the company's sales targets by searching for new business opportunities on the market as well as developing new business among the current customer base"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "You will develop new and existing relationships with customers to ensure a strong partnership"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Your focus will be selling consultancy services of our technical team as well as our CDN cost optimization solutions"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Our team is fully remote so your office can be anywhere on Earth as long as you are available during the CET office hours"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "You will work remotely but in close contact with other colleagues in the team"
                                                    })]
                                                }), (0, o.jsx)("h3", {
                                                    className: "careers__accord-card-accordion-panel-title",
                                                    children: "You will become part of"
                                                }), (0, o.jsxs)("ul", {
                                                    className: "careers__accord-card-accordion-panel-list",
                                                    children: [(0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "An international team where you can learn new things and meet interesting people"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "A dynamic environment in which no work becomes a routine"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "A fast-growing start-up, giving you the opportunity to participate in its development"
                                                    })]
                                                }), (0, o.jsx)("h3", {
                                                    className: "careers__accord-card-accordion-panel-title",
                                                    children: "What's in it for you"
                                                }), (0, o.jsxs)("ul", {
                                                    className: "careers__accord-card-accordion-panel-list",
                                                    children: [(0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Competitive incentive financial remuneration"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "All the gear needed for your success (Laptop, mobile phone, etc.)"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Internet/ call expenses go on us"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Flexible working hours"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Work remotely / Home office"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "Opportunity to travel"
                                                    }), (0, o.jsx)("li", {
                                                        className: "careers__accord-card-accordion-panel-list-item",
                                                        children: "We value self-learning and learning new technologies, so we encourage all our team members to acquire new certifications, attend relevant courses and conferences, etc."
                                                    })]
                                                }), (0, o.jsx)("p", {
                                                    className: "careers__accord-card-accordion-panel-text",
                                                    children: "Have you read this far, you've got what we're looking for and you are interested? Don't wait any longer and get in touch! We look forward to hearing from you."
                                                }), (0, o.jsx)(n.default, {
                                                    href: "#contact",
                                                    passHref: !0,
                                                    children: (0, o.jsx)("a", {
                                                        className: "careers__accord-card-accordion-panel-link",
                                                        children: "contact us"
                                                    })
                                                })]
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "careers__accord-card-accordion-box-item",
                                            children: [(0, o.jsxs)("button", {
                                                className: "".concat("accordion3" == D.key ? "active" : "", " careers__accord-card-accordion-button"),
                                                onClick: function (e) {
                                                    return F(e, "accordion3")
                                                },
                                                children: [(0, o.jsx)("div", {
                                                    className: "careers__accord-card-accordion-button-image",
                                                    children: "03"
                                                }), (0, o.jsxs)("div", {
                                                    className: "careers__accord-card-accordion-button-text",
                                                    children: [(0, o.jsx)("h2", {
                                                        id: "marketing-specialist",
                                                        className: "careers__accord-card-accordion-button-text-title",
                                                        children: "Marketing Specialist"
                                                    }), (0, o.jsx)("p", {
                                                        className: "careers__accord-card-accordion-button-text-text",
                                                        children: "Opening Soon"
                                                    })]
                                                }), (0, o.jsx)("div", {
                                                    className: "careers__accord-card-accordion-button-arrow",
                                                    children: (0, o.jsx)(i.Z, {
                                                        src: u.Z,
                                                        alt: ""
                                                    })
                                                })]
                                            }), (0, o.jsx)("div", {
                                                className: "".concat("accordion3" == D.key ? "active" : "", " careers__accord-card-accordion-panel"),
                                                children: (0, o.jsx)(n.default, {
                                                    href: "#contact",
                                                    passHref: !0,
                                                    children: (0, o.jsx)("a", {
                                                        className: "careers__accord-card-accordion-panel-link",
                                                        children: "contact us"
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })
                        }), (0, o.jsx)("section", {
                            className: "careers__form",
                            id: "contact",
                            children: (0, o.jsx)("div", {
                                className: "careers__form-box",
                                children: (0, o.jsxs)("div", {
                                    className: "contact__form",
                                    children: [(0, o.jsx)("h2", {
                                        className: "contact__form-title",
                                        children: "Contact form"
                                    }), (0, o.jsxs)("form", {
                                        action: "",
                                        className: "contact__form-body",
                                        id: "career-contact",
                                        children: [(0, o.jsxs)("div", {
                                            className: "form__group",
                                            children: [(0, o.jsx)("input", {
                                                className: "group__inputs",
                                                type: "text",
                                                id: "name",
                                                required: !0,
                                                placeholder: "Name",
                                                onChange: function (e) {
                                                    return r(e.target.value)
                                                },
                                                value: a
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
                                                    return p(e.target.value)
                                                },
                                                value: d
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
                                                    return g(e.target.value)
                                                },
                                                value: f
                                            }), (0, o.jsx)("label", {
                                                className: "form__group-label",
                                                htmlFor: "tel",
                                                children: "Phone"
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "form__group",
                                            children: [(0, o.jsx)("textarea", {
                                                className: "group__inputs text-area",
                                                id: "career-message",
                                                name: "message",
                                                rows: "5",
                                                placeholder: " ",
                                                required: !0,
                                                onChange: function (e) {
                                                    return v(e.target.value)
                                                },
                                                value: N
                                            }), (0, o.jsx)("label", {
                                                className: "form__group-label",
                                                htmlFor: "career-message",
                                                children: "Message *"
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "form__group file",
                                            children: [(0, o.jsx)("input", {
                                                className: "group__inputs file-upload",
                                                type: "file",
                                                id: "file",
                                                placeholder: "Attach CV",
                                                name: "vitae",
                                                onChange: function (e) {
                                                    ! function (e) {
                                                        y({
                                                            file: e.target.files[0]
                                                        })
                                                    }(e), document.querySelector(".form__group-label-file-name").textContent = document.querySelector(".file-upload").files.item(0).name
                                                }
                                            }), (0, o.jsx)("label", {
                                                className: "form__group-label file-upload",
                                                htmlFor: "file",
                                                children: "Attach CV"
                                            }), (0, o.jsx)("label", {
                                                className: "form__group-label-file-name",
                                                children: "example.pdf"
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "form__group-submit",
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
                                                        className: "form__group-checkbox-input",
                                                        checked: S,
                                                        onChange: function () {
                                                            return A(!S)
                                                        }
                                                    }), "I accept ", (0, o.jsx)(n.default, {
                                                        href: "/terms-conditions",
                                                        children: (0, o.jsx)("a", {
                                                            className: "form__group-submit-link",
                                                            children: "terms & conditions"
                                                        })
                                                    }), (0, o.jsx)("div", {
                                                        className: "form__group-checkbox-styled"
                                                    })]
                                                })
                                            }), (0, o.jsx)("input", {
                                                className: "form__group-button",
                                                type: "button",
                                                value: "Send",
                                                name: "submit",
                                                disabled: !S,
                                                onClick: function () {
                                                    return function () {
                                                        return C.apply(this, arguments)
                                                    }()
                                                }
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    })]
                })
            }
        }
    },
    function (e) {
        e.O(0, [647, 774, 888, 179], (function () {
            return a = 2469, e(e.s = a);
            var a
        }));
        var a = e.O();
        _N_E = a
    }
]);