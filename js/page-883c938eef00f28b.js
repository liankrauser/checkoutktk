! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            l = (new e.Error).stack;
        l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "b538f6c0-7414-4b35-a175-4a47481169f4", e._sentryDebugIdIdentifier = "sentry-dbid-b538f6c0-7414-4b35-a175-4a47481169f4")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [531], {
        21463: function(e, l, t) {
            Promise.resolve().then(t.bind(t, 14904)), Promise.resolve().then(t.bind(t, 84732)), Promise.resolve().then(t.bind(t, 4437)), Promise.resolve().then(t.bind(t, 52190)), Promise.resolve().then(t.bind(t, 98272)), Promise.resolve().then(t.bind(t, 52658)), Promise.resolve().then(t.bind(t, 13980)), Promise.resolve().then(t.bind(t, 65194)), Promise.resolve().then(t.bind(t, 50036)), Promise.resolve().then(t.bind(t, 55951)), Promise.resolve().then(t.bind(t, 84450)), Promise.resolve().then(t.bind(t, 14429))
        },
        23974: function(e, l, t) {
            "use strict";
            t.d(l, {
                z: function() {
                    return b
                }
            });
            var n = t(57437),
                i = t(2265),
                o = t(39343),
                r = t(16356),
                a = t(84259),
                s = t(48059),
                d = t.n(s),
                c = t(45973),
                u = t(8458),
                m = t(64451);
            let p = e => {
                if (!e) return "Regi\xe3o desconhecida";
                for (let [l, t] of Object.entries({
                        N: ["AC", "AP", "AM", "PA", "RO", "RR", "TO"],
                        S: ["PR", "RS", "SC"],
                        NE: ["AL", "BA", "CE", "MA", "PB", "PE", "PI", "RN", "SE"],
                        CO: ["GO", "MT", "MS", "DF"],
                        SE: ["ES", "RJ", "SP"]
                    }))
                    if (t.includes(e.toUpperCase())) return l;
                return "Regi\xe3o desconhecida"
            };

            function v(e, l, t) {
                let n = e.replace(/\D/g, "");
                return l = l.replace(/\D/g, ""), t = t.replace(/\D/g, ""), n >= l && n <= t
            }
            let h = (e, l) => "NE" === e ? l.priceForNortheast : "N" === e ? l.priceForNorth : "S" === e ? l.priceForSouth : "CO" === e ? l.priceForMidwest : "SE" === e ? l.priceForSoutheast : void 0,
                x = (e, l, t) => {
                    if (t.type === m.sA.FIXED && t.uniquePriceForAllRegions) return t.value;
                    if (t.type !== m.sA.FIXED || t.uniquePriceForAllRegions) {
                        if (t.type === m.sA.CUSTOM) {
                            var n;
                            let e = null === (n = t.ceps) || void 0 === n ? void 0 : n.find(e => {
                                let {
                                    initialCep: t,
                                    finalCep: n
                                } = e;
                                return v(l, t, n)
                            });
                            return null == e ? void 0 : e.value
                        }
                    } else {
                        let l = h(p(e), t);
                        return "number" == typeof l ? l : 0
                    }
                },
                y = (e, l) => {
                    if (l.type === m.sA.CUSTOM && !l.value) {
                        var t;
                        let n = null === (t = l.ceps) || void 0 === t ? void 0 : t.find(l => {
                            let {
                                initialCep: t,
                                finalCep: n
                            } = l;
                            return v(e, t, n)
                        });
                        return null == n ? void 0 : n.deadline
                    }
                    return l.deadline
                },
                f = e => {
                    var l, t, i, o, r, a, s, m, p, v, h, f, g, C, b, E, N, j, R, _, D, w, I, P, A, S, T, L, O, k, M, B;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("button", {
                            type: "button",
                            onClick: e.onClick,
                            className: d().dynamic([
                                ["f56c833f291eb9c3", [null !== (N = null == e ? void 0 : null === (l = e.theme) || void 0 === l ? void 0 : l.primaryColor) && void 0 !== N ? N : "", null !== (j = null == e ? void 0 : null === (t = e.theme) || void 0 === t ? void 0 : t.primaryColor) && void 0 !== j ? j : "#081D30"]]
                            ]) + " " + "flex items-center justify-between border rounded-xl pl-2 pr-5 py-5 w-full text-left transition-all duration-400 hover:border-primary ".concat(e.field.value === e.shipping._id ? "border-primary" : ""),
                            children: [(0, n.jsxs)("div", {
                                className: d().dynamic([
                                    ["f56c833f291eb9c3", [null !== (R = null == e ? void 0 : null === (i = e.theme) || void 0 === i ? void 0 : i.primaryColor) && void 0 !== R ? R : "", null !== (_ = null == e ? void 0 : null === (o = e.theme) || void 0 === o ? void 0 : o.primaryColor) && void 0 !== _ ? _ : "#081D30"]]
                                ]) + " flex items-center gap-x-2",
                                children: [(0, n.jsx)(u.E, {
                                    id: e.shipping._id,
                                    theme: e.theme,
                                    ...e.field,
                                    checked: e.field.value === e.shipping._id,
                                    onChange: e.onChange
                                }), (0, n.jsxs)("div", {
                                    className: d().dynamic([
                                        ["f56c833f291eb9c3", [null !== (D = null == e ? void 0 : null === (r = e.theme) || void 0 === r ? void 0 : r.primaryColor) && void 0 !== D ? D : "", null !== (w = null == e ? void 0 : null === (a = e.theme) || void 0 === a ? void 0 : a.primaryColor) && void 0 !== w ? w : "#081D30"]]
                                    ]) + " flex flex-col",
                                    children: [(0, n.jsx)("span", {
                                        className: d().dynamic([
                                            ["f56c833f291eb9c3", [null !== (I = null == e ? void 0 : null === (s = e.theme) || void 0 === s ? void 0 : s.primaryColor) && void 0 !== I ? I : "", null !== (P = null == e ? void 0 : null === (m = e.theme) || void 0 === m ? void 0 : m.primaryColor) && void 0 !== P ? P : "#081D30"]]
                                        ]) + " text-gray-800",
                                        children: e.shipping.description
                                    }), (0, n.jsx)("span", {
                                        className: d().dynamic([
                                            ["f56c833f291eb9c3", [null !== (A = null == e ? void 0 : null === (p = e.theme) || void 0 === p ? void 0 : p.primaryColor) && void 0 !== A ? A : "", null !== (S = null == e ? void 0 : null === (v = e.theme) || void 0 === v ? void 0 : v.primaryColor) && void 0 !== S ? S : "#081D30"]]
                                        ]) + " text-sm text-gray-400",
                                        children: y(e.address.cep, e.shipping)
                                    })]
                                })]
                            }), (0, n.jsx)("span", {
                                className: d().dynamic([
                                    ["f56c833f291eb9c3", [null !== (T = null == e ? void 0 : null === (h = e.theme) || void 0 === h ? void 0 : h.primaryColor) && void 0 !== T ? T : "", null !== (L = null == e ? void 0 : null === (f = e.theme) || void 0 === f ? void 0 : f.primaryColor) && void 0 !== L ? L : "#081D30"]]
                                ]) + " text-sm",
                                children: (0, c.x)(x(e.address.state, e.address.cep, e.shipping), e.countryCode)
                            })]
                        }), (0, n.jsx)(d(), {
                            id: "f56c833f291eb9c3",
                            dynamic: [null !== (O = null == e ? void 0 : null === (g = e.theme) || void 0 === g ? void 0 : g.primaryColor) && void 0 !== O ? O : "", null !== (k = null == e ? void 0 : null === (C = e.theme) || void 0 === C ? void 0 : C.primaryColor) && void 0 !== k ? k : "#081D30"],
                            children: "button.__jsx-style-dynamic-selector{border-color:".concat(null !== (M = null == e ? void 0 : null === (b = e.theme) || void 0 === b ? void 0 : b.primaryColor) && void 0 !== M ? M : "", "}button.__jsx-style-dynamic-selector:hover{border-color:").concat(null !== (B = null == e ? void 0 : null === (E = e.theme) || void 0 === E ? void 0 : E.primaryColor) && void 0 !== B ? B : "#081D30", "}")
                        })]
                    })
                };
            var g = t(51549),
                C = i.memo(e => {
                    var l, t;
                    let {
                        shippings: r,
                        address: a,
                        containsPhysicalProduct: s,
                        control: d,
                        checkout: c,
                        countryCode: u,
                        errors: p,
                        dict: v,
                        isCepInRange: h,
                        cepWatch: y
                    } = e, C = (0, i.useMemo)(() => r.find(e => {
                        let {
                            preSelected: l
                        } = e;
                        return l
                    }), [r]), b = (0, i.useMemo)(() => r.filter(e => e.type === m.sA.FIXED), [r]), E = !!((null == a ? void 0 : a.cep) || y), {
                        shippingValue: N,
                        setShippingValue: j
                    } = (0, g.p)(e => {
                        let {
                            shippingValue: l,
                            setShippingValue: t
                        } = e;
                        return {
                            shippingValue: l,
                            setShippingValue: t
                        }
                    }), R = (0, i.useCallback)((e, l, t, n) => {
                        var i;
                        e.onChange(l._id), j(null !== (i = x(null != t ? t : "", null != n ? n : "", l)) && void 0 !== i ? i : 0)
                    }, [j]);
                    (0, i.useEffect)(() => {
                        if (!N && s && C && E) {
                            var e;
                            j(null !== (e = x("", "", C)) && void 0 !== e ? e : 0)
                        }
                    }, [N, s, C, E, j]);
                    let _ = (e, l) => (0, n.jsx)("li", {
                        children: (0, n.jsx)(o.Qr, {
                            control: d,
                            name: "shipping",
                            render: t => {
                                let {
                                    field: i
                                } = t;
                                return (0, n.jsx)(f, {
                                    address: l,
                                    field: i,
                                    shipping: e,
                                    theme: null == c ? void 0 : c.theme,
                                    countryCode: u,
                                    onClick: () => R(i, e, l.state, l.cep),
                                    onChange: () => R(i, e, l.state, l.cep)
                                })
                            }
                        })
                    }, e._id);
                    return "BR" !== u ? b.length ? (0, n.jsxs)("div", {
                        className: "col-span-2 mt-2",
                        children: [(0, n.jsx)("span", {
                            className: "text-gray-800",
                            children: v.CHOOSE_SHIPPING
                        }), (0, n.jsx)("p", {
                            className: "text-red-400",
                            children: null == p ? void 0 : null === (t = p.shipping) || void 0 === t ? void 0 : t.message
                        }), (0, n.jsx)("ul", {
                            className: "mt-2 flex flex-col gap-y-2",
                            children: b.map(e => _(e, {
                                street: "",
                                state: "",
                                city: "",
                                neighborhood: "",
                                cep: ""
                            }))
                        })]
                    }) : (console.warn("No fixed shipping options found for non-Brazilian country"), null) : a && s ? (0, n.jsxs)("div", {
                        className: "col-span-2 mt-2",
                        children: [(0, n.jsx)("span", {
                            className: "text-gray-800",
                            children: v.CHOOSE_SHIPPING
                        }), (0, n.jsx)("p", {
                            className: "text-red-400",
                            children: null == p ? void 0 : null === (l = p.shipping) || void 0 === l ? void 0 : l.message
                        }), (0, n.jsx)("ul", {
                            className: "mt-2 flex flex-col gap-y-2",
                            children: r.map(e => {
                                var l;
                                return e.type !== m.sA.CUSTOM || (null === (l = e.ceps) || void 0 === l ? void 0 : l.find(e => {
                                    let {
                                        initialCep: l,
                                        finalCep: t
                                    } = e;
                                    return h(a.cep, l, t)
                                })) ? _(e, a) : null
                            })
                        })]
                    }) : null
                });
            let b = e => {
                var l, t, s, d, c, u;
                let {
                    control: m,
                    errors: p,
                    register: h,
                    setValue: x,
                    onCepChange: y,
                    countryCode: f,
                    address: g,
                    shippings: b,
                    checkout: E,
                    dict: N,
                    showLabels: j = !0,
                    cepWatch: R
                } = e, _ = (0, i.useCallback)(e => {
                    "BR" === f ? y(e) : x("cep", e.target.value)
                }, [f, y, x]), D = (0, i.useCallback)((e, l) => {
                    l(e.target.value.replace(/\D/g, ""))
                }, []);
                return (0, n.jsxs)("div", {
                    className: "mt-4 flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-4",
                    children: [(0, n.jsxs)("div", {
                        className: "flex flex-col",
                        children: [j && (0, n.jsx)("span", {
                            className: "text-gray-800 mb-1 inline-block",
                            children: N.CEP
                        }), (0, n.jsx)("input", {
                            type: "text",
                            inputMode: "numeric",
                            className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                            placeholder: N.CEP_PLACEHOLDER,
                            ...h("cep", {
                                onChange: _
                            })
                        }), (0, n.jsx)("span", {
                            className: "text-red-400",
                            children: null === (l = p.cep) || void 0 === l ? void 0 : l.message
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "flex flex-col",
                        children: [j && (0, n.jsx)("span", {
                            className: "text-gray-800 mb-1 inline-block",
                            children: N.NUMBER
                        }), (0, n.jsx)(o.Qr, {
                            control: m,
                            name: "number",
                            render: e => {
                                let {
                                    field: l
                                } = e;
                                return (0, n.jsx)("input", {
                                    type: "text",
                                    inputMode: "numeric",
                                    className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                    placeholder: N.NUMBER_PLACEHOLDER,
                                    ...l,
                                    onChange: e => D(e, l.onChange)
                                })
                            }
                        }), (0, n.jsx)("span", {
                            className: "text-red-400",
                            children: null === (t = p.number) || void 0 === t ? void 0 : t.message
                        })]
                    }), (0, n.jsxs)("div", {
                        children: [j && (0, n.jsx)("span", {
                            className: "text-gray-800 mb-1 inline-block",
                            children: N.STREET
                        }), (0, n.jsx)("input", {
                            type: "text",
                            className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                            placeholder: N.STREET_PLACEHOLDER,
                            ...h("street")
                        }), (0, n.jsx)("span", {
                            className: "text-red-400",
                            children: null === (s = p.street) || void 0 === s ? void 0 : s.message
                        })]
                    }), (0, n.jsxs)("div", {
                        children: [j && (0, n.jsx)("span", {
                            className: "text-gray-800 mb-1 inline-block",
                            children: N.CITY
                        }), (0, n.jsx)("input", {
                            type: "text",
                            className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                            placeholder: N.CITY_PLACEHOLDER,
                            ...h("city")
                        }), (0, n.jsx)("span", {
                            className: "text-red-400",
                            children: null === (d = p.city) || void 0 === d ? void 0 : d.message
                        })]
                    }), (0, n.jsxs)("div", {
                        children: [j && (0, n.jsx)("span", {
                            className: "text-gray-800 mb-1 inline-block",
                            children: N.STATE
                        }), "BR" === f ? (0, n.jsxs)("div", {
                            className: "relative",
                            children: [(0, n.jsxs)("select", {
                                className: "bg-white w-full px-3 py-4 rounded-xl border outline-none text-gray-400 block appearance-none hover:border-gray-500",
                                ...h("state"),
                                children: [(0, n.jsx)("option", {
                                    value: "",
                                    children: N.STATE_PLACEHOLDER
                                }), a.$q.map(e => {
                                    let {
                                        codigo: l,
                                        nome: t,
                                        sigla: i
                                    } = e;
                                    return (0, n.jsx)("option", {
                                        value: i,
                                        children: t
                                    }, l)
                                })]
                            }), (0, n.jsx)(r.gwH, {
                                size: 24,
                                className: "absolute top-1/2 right-3 -translate-y-1/2"
                            })]
                        }) : (0, n.jsx)("input", {
                            type: "text",
                            className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                            placeholder: N.STATE_PLACEHOLDER,
                            ...h("state")
                        }), (0, n.jsx)("span", {
                            className: "text-red-400",
                            children: null === (c = p.state) || void 0 === c ? void 0 : c.message
                        })]
                    }), (0, n.jsxs)("div", {
                        children: [j && (0, n.jsx)("span", {
                            className: "text-gray-800 mb-1 inline-block",
                            children: N.COMPLEMENT
                        }), (0, n.jsx)("input", {
                            type: "text",
                            className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                            placeholder: N.COMPLEMENT_PLACEHOLDER,
                            ...h("complement")
                        }), (0, n.jsx)("span", {
                            className: "text-red-400",
                            children: null === (u = p.complement) || void 0 === u ? void 0 : u.message
                        })]
                    }), (0, n.jsx)(C, {
                        shippings: b,
                        address: g,
                        containsPhysicalProduct: !0,
                        control: m,
                        checkout: E,
                        countryCode: f,
                        errors: p,
                        dict: N,
                        isCepInRange: v,
                        cepWatch: R
                    })]
                })
            }
        },
        61078: function(e, l, t) {
            "use strict";
            t.d(l, {
                Z: function() {
                    return a
                }
            });
            var n = t(57437),
                i = t(2265),
                o = t(16356),
                r = t(84259);
            let a = e => {
                var l, t, a, s, d, c, u;
                let {
                    register: m,
                    errors: p,
                    setValue: v,
                    onCepChange: h,
                    countryCode: x,
                    dict: y
                } = e, f = (0, i.useCallback)(e => {
                    "BR" === x ? h(e, !0) : v("billingCep", e.target.value)
                }, [x, h, v]);
                return (0, n.jsxs)("div", {
                    className: "flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-4",
                    children: [(0, n.jsxs)("div", {
                        className: "flex flex-col",
                        children: [(0, n.jsx)("input", {
                            type: "text",
                            inputMode: "numeric",
                            className: "bg-white w-full px-3 py-3 rounded-lg border outline-none",
                            placeholder: y.CEP_PLACEHOLDER,
                            ...m("billingCep", {
                                onChange: f
                            })
                        }), (0, n.jsx)("span", {
                            className: "text-red-400",
                            children: null === (l = p.billingCep) || void 0 === l ? void 0 : l.message
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "flex flex-col",
                        children: [(0, n.jsx)("input", {
                            type: "text",
                            className: "bg-white w-full px-3 py-3 rounded-lg border outline-none",
                            placeholder: y.STREET_PLACEHOLDER,
                            ...m("billingStreet")
                        }), (0, n.jsx)("span", {
                            className: "text-red-400",
                            children: null === (t = p.billingStreet) || void 0 === t ? void 0 : t.message
                        })]
                    }), (0, n.jsxs)("div", {
                        children: [(0, n.jsx)("input", {
                            type: "text",
                            inputMode: "numeric",
                            className: "bg-white w-full px-3 py-3 rounded-lg border outline-none",
                            placeholder: y.NUMBER_PLACEHOLDER,
                            ...m("billingNumber")
                        }), (0, n.jsx)("span", {
                            className: "text-red-400",
                            children: null === (a = p.billingNumber) || void 0 === a ? void 0 : a.message
                        })]
                    }), (0, n.jsxs)("div", {
                        children: [(0, n.jsx)("input", {
                            type: "text",
                            className: "bg-white w-full px-3 py-3 rounded-lg border outline-none",
                            placeholder: y.COMPLEMENT_PLACEHOLDER,
                            ...m("billingComplement")
                        }), (0, n.jsx)("span", {
                            className: "text-red-400",
                            children: null === (s = p.billingComplement) || void 0 === s ? void 0 : s.message
                        })]
                    }), (0, n.jsxs)("div", {
                        children: [(0, n.jsx)("input", {
                            type: "text",
                            className: "bg-white w-full px-3 py-3 rounded-lg border outline-none",
                            placeholder: y.NEIGHBORHOOD_PLACEHOLDER,
                            ...m("billingNeighborhood")
                        }), (0, n.jsx)("span", {
                            className: "text-red-400",
                            children: null === (d = p.billingNeighborhood) || void 0 === d ? void 0 : d.message
                        })]
                    }), (0, n.jsxs)("div", {
                        children: [(0, n.jsx)("input", {
                            type: "text",
                            className: "bg-white w-full px-3 py-3 rounded-lg border outline-none",
                            placeholder: y.CITY_PLACEHOLDER,
                            ...m("billingCity")
                        }), (0, n.jsx)("span", {
                            className: "text-red-400",
                            children: null === (c = p.billingCity) || void 0 === c ? void 0 : c.message
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "col-span-2",
                        children: ["BR" === x ? (0, n.jsxs)("div", {
                            className: "relative",
                            children: [(0, n.jsxs)("select", {
                                className: "bg-white w-full px-3 py-3 rounded-lg border outline-none text-gray-700 block appearance-none hover:border-gray-500",
                                ...m("billingState"),
                                children: [(0, n.jsx)("option", {
                                    value: "",
                                    children: y.STATE_PLACEHOLDER
                                }), r.$q.map(e => {
                                    let {
                                        codigo: l,
                                        nome: t,
                                        sigla: i
                                    } = e;
                                    return (0, n.jsx)("option", {
                                        value: i,
                                        children: t
                                    }, l)
                                })]
                            }), (0, n.jsx)(o.gwH, {
                                size: 20,
                                className: "absolute top-1/2 right-2 -translate-y-1/2 text-gray-500"
                            })]
                        }) : (0, n.jsx)("input", {
                            type: "text",
                            className: "bg-white w-full px-3 py-3 rounded-lg border outline-none",
                            placeholder: y.STATE_PLACEHOLDER,
                            ...m("billingState")
                        }), (0, n.jsx)("span", {
                            className: "text-red-400",
                            children: null === (u = p.billingState) || void 0 === u ? void 0 : u.message
                        })]
                    })]
                })
            }
        },
        26057: function(e, l, t) {
            "use strict";
            t.d(l, {
                n: function() {
                    return u
                }
            });
            var n = t(57437),
                i = t(66648),
                o = t(85856),
                r = t(42228),
                a = t(25881),
                s = t(2265),
                d = t(28364),
                c = t.n(d);
            let u = e => {
                let {
                    dict: l,
                    boletoDueDate: t,
                    barCode: d,
                    digitableLines: u,
                    copyDigitableLines: m,
                    checkout: p,
                    barcodeRef: v
                } = e;
                return (0, s.useEffect)(() => {
                    d && u && v.current && c()(v.current, d, {
                        format: "CODE128",
                        displayValue: !0,
                        fontSize: 18,
                        margin: 10
                    })
                }, [d, u, v]), (0, n.jsxs)("div", {
                    children: [(0, n.jsxs)("h2", {
                        className: "text-2xl text-blue font-medium lg:text-3xl",
                        children: [l.BOLETO_DUE_DATE, " ", t ? (0, r.p)(new Date(t)) : ""]
                    }), (0, n.jsx)("div", {
                        className: "relative w-full mb-3 rounded-2xl mt-4",
                        children: (0, n.jsx)("svg", {
                            ref: v,
                            className: "w-full h-full"
                        })
                    }), (0, n.jsx)("div", {
                        className: "mb-4 relative flex p-3 border rounded-2xl justify-between",
                        children: (0, n.jsx)("input", {
                            readOnly: !0,
                            id: "digitableLines",
                            type: "text",
                            className: "w-full text-gray-500 font-medium outline-none cursor-pointer bg-transparent border-none",
                            value: u,
                            onClick: m
                        })
                    }), (0, n.jsx)(o.z, {
                        className: "bg-primary py-5 w-full rounded-2xl text-white font-medium outline-none transaction-all duration-400 border border-primary hover:border-primary hover:text-primary hover:bg-transparent disabled:bg-opacity-30",
                        type: "button",
                        onClick: m,
                        theme: null == p ? void 0 : p.theme,
                        children: l.COPY_CODE_BUTTON
                    }), (0, n.jsxs)("div", {
                        className: "flex gap-x-4 items-start py-6 border-gray-100 mt-6",
                        children: [(0, n.jsx)(i.default, {
                            src: a.Z,
                            alt: l.ALERT_ICON_ALT
                        }), (0, n.jsx)("p", {
                            className: "text-gray-400 font-medium",
                            children: l.BOLETO_WARNING
                        })]
                    })]
                })
            }
        },
        85873: function(e, l, t) {
            "use strict";
            t.d(l, {
                J: function() {
                    return o
                }
            });
            var n = t(57437);
            t(2265);
            var i = t(66648);
            let o = e => {
                let {
                    dict: l,
                    checkout: t,
                    showFooter: o,
                    BlueCheckIcon: r,
                    SafeIcon: a
                } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [o(null == t ? void 0 : t.showFooter) ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            className: "border rounded-2xl px-3 py-4 mt-10",
                            children: [(0, n.jsx)("span", {
                                className: "text-sm text-gray-800",
                                children: l.AGREEMENT
                            }), (0, n.jsxs)("ul", {
                                className: "mt-5 flex flex-col gap-y-4",
                                children: [(0, n.jsxs)("li", {
                                    className: "flex items-center gap-x-3",
                                    children: [(0, n.jsx)("div", {
                                        className: "w-fit",
                                        children: (0, n.jsx)(i.default, {
                                            src: r,
                                            alt: l.BLUE_CHECK_ICON_ALT,
                                            width: 22,
                                            height: 22
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "flex-1",
                                        children: (0, n.jsx)("span", {
                                            className: "text-gray-400 text-sm",
                                            children: l.AGREEMENT_1
                                        })
                                    })]
                                }), (0, n.jsxs)("li", {
                                    className: "flex items-center gap-x-3",
                                    children: [(0, n.jsx)("div", {
                                        className: "w-fit",
                                        children: (0, n.jsx)(i.default, {
                                            src: r,
                                            alt: l.BLUE_CHECK_ICON_ALT,
                                            width: 22,
                                            height: 22
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "flex-1",
                                        children: (0, n.jsx)("span", {
                                            className: "text-gray-400 text-sm",
                                            children: l.AGREEMENT_2
                                        })
                                    })]
                                }), (0, n.jsxs)("li", {
                                    className: "flex items-center gap-x-3",
                                    children: [(0, n.jsx)("div", {
                                        className: "w-fit",
                                        children: (0, n.jsx)(i.default, {
                                            src: r,
                                            alt: l.BLUE_CHECK_ICON_ALT,
                                            width: 22,
                                            height: 22
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "flex-1",
                                        children: (0, n.jsx)("span", {
                                            className: "text-gray-400 text-sm",
                                            children: l.AGREEMENT_3
                                        })
                                    })]
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: "mt-4 flex justify-center",
                            children: (0, n.jsx)(i.default, {
                                src: a,
                                alt: l.SAFE_ICON_ALT,
                                width: 24,
                                height: 24
                            })
                        })]
                    }) : null, (0, n.jsx)("p", {
                        className: "mt-4 text-gray-400 text-center",
                        children: l.TERMS_AGREEMENT
                    })]
                })
            }
        },
        64878: function(e, l, t) {
            "use strict";
            t.d(l, {
                G: function() {
                    return u
                }
            });
            var n = t(57437),
                i = t(2265),
                o = t(39343),
                r = t(73157),
                a = t(70488);
            let s = e => void 0 === e || e,
                d = e => void 0 === e || e,
                c = e => void 0 === e || e,
                u = e => {
                    var l, t, u, m;
                    let {
                        control: p,
                        errors: v,
                        register: h,
                        checkout: x,
                        countryCode: y,
                        dict: f,
                        showLabels: g = !0
                    } = e, C = (0, i.useRef)(null), b = (0, i.useRef)(!1), E = (0, i.useCallback)((e, l) => {
                        if (b.current) return l(e.target.value);
                        let {
                            value: t,
                            selectionStart: n
                        } = e.target, i = t.slice(0, null != n ? n : t.length).replace(/\D/g, "").length, o = "BR" === y ? (0, r.$)(t) : (0, r.y)(t, y), a = o.length, s = 0;
                        for (let e = 0; e < o.length; e++)
                            if (/\d/.test(o[e]) && s++, s >= i) {
                                a = e + 1;
                                break
                            } l(o), requestAnimationFrame(() => {
                            var e;
                            return null === (e = C.current) || void 0 === e ? void 0 : e.setSelectionRange(a, a)
                        })
                    }, [y]), N = (0, i.useCallback)((e, l) => {
                        l("BR" === y ? (0, a.Z)(e.target.value) : e.target.value)
                    }, [y]);
                    return (0, n.jsxs)("div", {
                        className: "flex flex-col gap-y-6 mt-4 lg:grid lg:grid-cols-2 lg:gap-4",
                        children: [s(null == x ? void 0 : x.isEmailRequired) && (0, n.jsxs)("div", {
                            className: "col-span-2",
                            children: [g && (0, n.jsx)("span", {
                                className: "text-gray-800 mb-1 inline-block",
                                children: f.EMAIL
                            }), (0, n.jsx)("input", {
                                type: "text",
                                className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                placeholder: f.EMAIL_PLACEHOLDER,
                                ...h("email")
                            }), (0, n.jsx)("span", {
                                className: "text-red-400",
                                children: null === (l = v.email) || void 0 === l ? void 0 : l.message
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "col-span-2",
                            children: [g && (0, n.jsx)("span", {
                                className: "text-gray-800 mb-1 inline-block",
                                children: f.FULL_NAME
                            }), (0, n.jsx)("input", {
                                type: "text",
                                className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                placeholder: f.FULL_NAME_PLACEHOLDER,
                                ...h("fullName")
                            }), (0, n.jsx)("span", {
                                className: "text-red-400",
                                children: null === (t = v.fullName) || void 0 === t ? void 0 : t.message
                            })]
                        }), d(null == x ? void 0 : x.isPhoneRequired) && (0, n.jsxs)("div", {
                            className: "col-span-2",
                            children: [g && (0, n.jsx)("span", {
                                className: "text-gray-800 mb-1 inline-block",
                                children: f.PHONE
                            }), (0, n.jsx)(o.Qr, {
                                control: p,
                                name: "phone",
                                render: e => {
                                    var l;
                                    let {
                                        field: t
                                    } = e;
                                    return (0, n.jsx)("input", {
                                        type: "text",
                                        inputMode: "numeric",
                                        className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                        placeholder: f.PHONE_PLACEHOLDER,
                                        ...t,
                                        ref: e => {
                                            t.ref(e), C.current = e
                                        },
                                        value: null !== (l = t.value) && void 0 !== l ? l : "",
                                        onChange: e => E(e, t.onChange),
                                        onCompositionStart: () => b.current = !0,
                                        onCompositionEnd: e => {
                                            b.current = !1, E(e, t.onChange)
                                        }
                                    })
                                }
                            }), (0, n.jsx)("span", {
                                className: "text-red-400",
                                children: null === (u = v.phone) || void 0 === u ? void 0 : u.message
                            })]
                        }), c(null == x ? void 0 : x.isDocumentRequired) && (0, n.jsxs)("div", {
                            className: "col-span-2",
                            children: [g && (0, n.jsx)("span", {
                                className: "text-gray-800 mb-1 inline-block",
                                children: f.DOCUMENT
                            }), (0, n.jsx)(o.Qr, {
                                control: p,
                                name: "document",
                                render: e => {
                                    let {
                                        field: {
                                            name: l,
                                            value: t,
                                            disabled: i,
                                            onBlur: o,
                                            ref: r,
                                            onChange: a
                                        }
                                    } = e;
                                    return (0, n.jsx)("input", {
                                        ref: r,
                                        name: l,
                                        value: t,
                                        disabled: i,
                                        type: "text",
                                        inputMode: "numeric",
                                        className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                        placeholder: f.DOCUMENT_PLACEHOLDER,
                                        onChange: e => N(e, a),
                                        onBlur: o
                                    })
                                }
                            }), (0, n.jsx)("span", {
                                className: "text-red-400",
                                children: null === (m = v.document) || void 0 === m ? void 0 : m.message
                            })]
                        })]
                    })
                }
        },
        90584: function(e, l, t) {
            "use strict";
            t.d(l, {
                M: function() {
                    return a
                }
            });
            var n = t(57437),
                i = t(9292),
                o = t(45973),
                r = t(16356);
            let a = e => {
                var l, t;
                let {
                    paymentMethod: a,
                    installments: s,
                    countryCode: d,
                    isFetchingInstallments: c,
                    dict: u,
                    errors: m,
                    register: p
                } = e;
                return a !== i.XL.CREDIT_CARD ? null : 0 === s.length && "BR" === d ? (0, n.jsxs)("div", {
                    className: "col-span-2",
                    children: [(0, n.jsxs)("div", {
                        className: "relative",
                        children: [(0, n.jsx)("select", {
                            className: "bg-white w-full px-3 py-4 rounded-xl border outline-none text-gray-800 block appearance-none",
                            children: (0, n.jsx)("option", {
                                value: "",
                                selected: !0,
                                children: c ? u.INSTALLMENTS_LOADING : u.INSTALLMENTS_NO_CARD
                            })
                        }), (0, n.jsx)(r.gwH, {
                            size: 24,
                            className: "absolute top-1/2 right-3 -translate-y-1/2"
                        })]
                    }), (0, n.jsx)("span", {
                        className: "text-red-400",
                        children: null === (l = m.installments) || void 0 === l ? void 0 : l.message
                    })]
                }) : "BR" === d ? (0, n.jsxs)("div", {
                    className: "col-span-2",
                    children: [(0, n.jsxs)("div", {
                        className: "relative",
                        children: [(0, n.jsxs)("select", {
                            className: "bg-white w-full px-3 py-4 rounded-xl border outline-none text-gray-800 block appearance-none",
                            disabled: c,
                            ...p("installments"),
                            children: [0 === s.length ? (0, n.jsx)("option", {
                                value: "",
                                selected: !0,
                                children: u.INSTALLMENTS_PLACEHOLDER
                            }) : null, s.map((e, l) => (0, n.jsxs)("option", {
                                value: e.installment,
                                children: [e.installment, "x ", (0, o.x)(e.installmentValue, d), " (", (0, o.x)(e.totalValue, d), ")"]
                            }, "".concat(e.installmentValue, "-").concat(l)))]
                        }), (0, n.jsx)(r.gwH, {
                            size: 24,
                            className: "absolute top-1/2 right-3 -translate-y-1/2"
                        })]
                    }), (0, n.jsx)("span", {
                        className: "text-red-400",
                        children: null === (t = m.installments) || void 0 === t ? void 0 : t.message
                    })]
                }) : null
            }
        },
        34781: function(e, l, t) {
            "use strict";
            t.d(l, {
                Q: function() {
                    return E
                }
            });
            var n = t(57437),
                i = t(39343),
                o = t(66648),
                r = t(16356),
                a = t(84259),
                s = t(9292),
                d = t(67933),
                c = t(70488),
                u = t(16413),
                m = t(93176),
                p = t(8458),
                v = t(81228),
                h = t(75036),
                x = t(90584),
                y = t(61078),
                f = {
                    src: "/_next/static/media/boleto.a973a932.svg",
                    height: 82,
                    width: 92,
                    blurWidth: 0,
                    blurHeight: 0
                },
                g = {
                    src: "/_next/static/media/card.6c588a49.svg",
                    height: 78,
                    width: 97,
                    blurWidth: 0,
                    blurHeight: 0
                },
                C = {
                    src: "/_next/static/media/pix.fc2a4017.svg",
                    height: 97,
                    width: 98,
                    blurWidth: 0,
                    blurHeight: 0
                },
                b = t(2265);
            let E = e => {
                var l, t, E, N, j, R, _, D, w, I, P, A, S;
                let {
                    control: T,
                    errors: L,
                    register: O,
                    setValue: k,
                    paymentMethod: M,
                    checkout: B,
                    countryCode: U,
                    currency: q,
                    language: X,
                    installments: V,
                    isFetchingInstallments: F,
                    selectedPixDiscount: H,
                    filteredOrderBumps: G,
                    isStripeAndInfo: Q,
                    containsPhysicalProduct: W,
                    dict: Z,
                    stripeRef: Y,
                    onCepChange: z,
                    useShippingAsBilling: K
                } = e, J = (0, b.useCallback)(e => {
                    "BR" === U ? z(e) : k("cep", e.target.value)
                }, [U, z, k]);
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)("h2", {
                        className: "text-2xl text-blue font-medium lg:text-3xl",
                        children: Z.PAYMENT_METHOD_TITLE
                    }), (null == G ? void 0 : G.length) ? (0, n.jsx)("div", {
                        className: "mt-6",
                        children: (0, n.jsx)(v.Z, {
                            orderBumps: G,
                            isStacked: null == B ? void 0 : B.isOrderBumpStacked
                        })
                    }) : null, (0, n.jsxs)("div", {
                        children: [(0, n.jsx)("span", {
                            className: "text-red-400",
                            children: null === (l = L.paymentMethod) || void 0 === l ? void 0 : l.message
                        }), (0, n.jsxs)("ul", {
                            className: "rounded-2xl py-3 flex flex-col",
                            children: [(null == B ? void 0 : B.acceptedPaymentMethods.includes(s.XL.PIX)) && "BR" === U ? (0, n.jsxs)("li", {
                                className: "py-4 flex items-center justify-between border-b border-b-gray-100",
                                children: [(0, n.jsxs)("label", {
                                    htmlFor: s.XL.PIX,
                                    className: "flex items-center gap-x-4 cursor-pointer",
                                    children: [(0, n.jsx)("div", {
                                        className: "bg-white rounded-full w-14 h-14 flex justify-center items-center",
                                        children: (0, n.jsx)(o.default, {
                                            src: C,
                                            alt: Z.PIX_ICON_ALT,
                                            width: 20,
                                            height: 20
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [(0, n.jsx)("span", {
                                            className: "text-blue font-medium",
                                            children: Z.PIX_PAYMENT
                                        }), H && (0, n.jsx)(d.F, {
                                            type: H.discountType,
                                            discount: H.discount,
                                            dict: Z,
                                            countryCode: U
                                        }), (0, n.jsx)("span", {
                                            className: "text-gray-400",
                                            children: Z.PIX_APPROVAL
                                        })]
                                    })]
                                }), (0, n.jsx)("div", {
                                    children: (0, n.jsx)(p.E, {
                                        theme: B.theme,
                                        value: s.XL.PIX,
                                        id: s.XL.PIX,
                                        ...O("paymentMethod")
                                    })
                                })]
                            }) : null, (null == B ? void 0 : B.acceptedPaymentMethods.includes(s.XL.BOLETO)) && "BR" === U ? (0, n.jsxs)("li", {
                                className: "flex flex-col",
                                children: [(0, n.jsxs)("div", {
                                    className: "border-b border-gray-100 py-4 flex items-center justify-between",
                                    children: [(0, n.jsxs)("label", {
                                        htmlFor: s.XL.BOLETO,
                                        className: "flex items-center gap-x-4 cursor-pointer",
                                        children: [(0, n.jsx)("div", {
                                            className: "bg-white rounded-full w-14 h-14 flex justify-center items-center",
                                            children: (0, n.jsx)(o.default, {
                                                src: f,
                                                alt: Z.BOLETO_ICON_ALT,
                                                width: 20,
                                                height: 20
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [(0, n.jsx)("span", {
                                                className: "text-blue font-medium",
                                                children: Z.BOLETO_PAYMENT
                                            }), (0, n.jsx)("span", {
                                                className: "text-gray-400",
                                                children: Z.BOLETO_APPROVAL
                                            })]
                                        })]
                                    }), (0, n.jsx)("div", {
                                        children: (0, n.jsx)(p.E, {
                                            value: s.XL.BOLETO,
                                            id: s.XL.BOLETO,
                                            theme: B.theme,
                                            ...O("paymentMethod")
                                        })
                                    })]
                                }), M === s.XL.BOLETO ? (0, n.jsxs)("div", {
                                    className: "mt-4 grid grid-cols-2 gap-4",
                                    children: [(0, n.jsxs)("div", {
                                        className: "col-span-2",
                                        children: [(0, n.jsx)("input", {
                                            type: "text",
                                            className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                            placeholder: Z.FULL_NAME_PLACEHOLDER,
                                            ...O("fullName")
                                        }), (0, n.jsx)("span", {
                                            className: "text-red-400",
                                            children: null === (t = L.fullName) || void 0 === t ? void 0 : t.message
                                        })]
                                    }), (null == B ? void 0 : B.isDocumentRequired) ? (0, n.jsxs)("div", {
                                        className: "col-span-2",
                                        children: [(0, n.jsx)(i.Qr, {
                                            control: T,
                                            name: "document",
                                            render: e => {
                                                let {
                                                    field: {
                                                        name: l,
                                                        value: t,
                                                        disabled: i,
                                                        onBlur: o,
                                                        ref: r,
                                                        onChange: a
                                                    }
                                                } = e;
                                                return (0, n.jsx)("input", {
                                                    ref: r,
                                                    name: l,
                                                    value: t,
                                                    disabled: i,
                                                    type: "text",
                                                    inputMode: "numeric",
                                                    className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                                    placeholder: Z.PAYER_CPF,
                                                    onBlur: o,
                                                    onChange: e => a((0, c.Z)(e.target.value))
                                                })
                                            }
                                        }), (0, n.jsx)("span", {
                                            className: "text-red-400",
                                            children: null === (E = L.document) || void 0 === E ? void 0 : E.message
                                        })]
                                    }) : null, (0, n.jsxs)("div", {
                                        className: "col-span-1",
                                        children: [(0, n.jsx)("input", {
                                            type: "text",
                                            inputMode: "numeric",
                                            className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                            placeholder: Z.CEP_PLACEHOLDER,
                                            ...O("cep", {
                                                onChange: J
                                            })
                                        }), (0, n.jsx)("span", {
                                            className: "text-red-400",
                                            children: null === (N = L.cep) || void 0 === N ? void 0 : N.message
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "col-span-1",
                                        children: [(0, n.jsx)(i.Qr, {
                                            control: T,
                                            name: "number",
                                            render: e => {
                                                let {
                                                    field: l
                                                } = e;
                                                return (0, n.jsx)("input", {
                                                    type: "text",
                                                    className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                                    placeholder: Z.NUMBER_PLACEHOLDER,
                                                    ...l,
                                                    onChange: e => l.onChange(e.target.value.replace(/\D/g, ""))
                                                })
                                            }
                                        }), (0, n.jsx)("span", {
                                            className: "text-red-400",
                                            children: null === (j = L.number) || void 0 === j ? void 0 : j.message
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "col-span-2",
                                        children: [(0, n.jsx)("input", {
                                            type: "text",
                                            className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                            placeholder: Z.STREET_PLACEHOLDER,
                                            ...O("street")
                                        }), (0, n.jsx)("span", {
                                            className: "text-red-400",
                                            children: null === (R = L.street) || void 0 === R ? void 0 : R.message
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "col-span-1",
                                        children: [(0, n.jsx)("input", {
                                            type: "text",
                                            className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                            placeholder: Z.CITY_PLACEHOLDER,
                                            ...O("city")
                                        }), (0, n.jsx)("span", {
                                            className: "text-red-400",
                                            children: null === (_ = L.city) || void 0 === _ ? void 0 : _.message
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "col-span-1",
                                        children: [(0, n.jsxs)("div", {
                                            className: "relative",
                                            children: [(0, n.jsxs)("select", {
                                                className: "bg-white w-full px-3 py-4 rounded-xl border outline-none text-gray-400 block appearance-none hover:border-gray-500",
                                                ...O("state"),
                                                children: [(0, n.jsx)("option", {
                                                    value: "",
                                                    children: Z.STATE_PLACEHOLDER
                                                }), a.$q.map(e => {
                                                    let {
                                                        codigo: l,
                                                        nome: t,
                                                        sigla: i
                                                    } = e;
                                                    return (0, n.jsx)("option", {
                                                        value: i,
                                                        children: t
                                                    }, l)
                                                })]
                                            }), (0, n.jsx)(r.gwH, {
                                                size: 24,
                                                className: "absolute top-1/2 right-3 -translate-y-1/2"
                                            })]
                                        }), (0, n.jsx)("span", {
                                            className: "text-red-400",
                                            children: null === (D = L.state) || void 0 === D ? void 0 : D.message
                                        })]
                                    })]
                                }) : null]
                            }) : null, (null == B ? void 0 : B.acceptedPaymentMethods.includes(s.XL.CREDIT_CARD)) ? (0, n.jsxs)("li", {
                                className: "flex flex-col",
                                children: [(0, n.jsxs)("div", {
                                    className: "py-4 flex items-center justify-between",
                                    children: [(0, n.jsxs)("label", {
                                        htmlFor: s.XL.CREDIT_CARD,
                                        className: "flex items-center gap-x-4 cursor-pointer",
                                        children: [(0, n.jsx)("div", {
                                            className: "bg-white rounded-full w-14 h-14 flex justify-center items-center",
                                            children: (0, n.jsx)(o.default, {
                                                src: g,
                                                alt: Z.CARD_ICON_ALT,
                                                width: 20,
                                                height: 20
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [(0, n.jsx)("span", {
                                                className: "text-blue font-medium",
                                                children: Z.CREDIT_CARD_PAYMENT
                                            }), (0, n.jsx)("span", {
                                                className: "text-gray-400",
                                                children: Z.CREDIT_CARD_APPROVAL
                                            })]
                                        })]
                                    }), (0, n.jsx)("div", {
                                        children: (0, n.jsx)(p.E, {
                                            id: s.XL.CREDIT_CARD,
                                            value: s.XL.CREDIT_CARD,
                                            theme: B.theme,
                                            ...O("paymentMethod")
                                        })
                                    })]
                                }), M === s.XL.CREDIT_CARD && Q ? (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)(h.g, {
                                        isStripeAndInfo: Q,
                                        ref: Y,
                                        dict: Z,
                                        currency: q,
                                        locale: "".concat(X, "-").concat(U)
                                    }, M), W && (0, n.jsx)("div", {
                                        className: "col-span-2 mt-4",
                                        children: (0, n.jsxs)("label", {
                                            className: "flex items-center gap-x-2",
                                            children: [(0, n.jsx)(i.Qr, {
                                                control: T,
                                                name: "useShippingAsBilling",
                                                render: e => {
                                                    let {
                                                        field: {
                                                            onChange: l,
                                                            value: t,
                                                            onBlur: i,
                                                            name: o,
                                                            ref: r
                                                        }
                                                    } = e;
                                                    return (0, n.jsx)("input", {
                                                        type: "checkbox",
                                                        className: "h-5 w-5 rounded border-gray-300",
                                                        checked: t,
                                                        onChange: e => l(e.target.checked),
                                                        onBlur: i,
                                                        name: o,
                                                        ref: r
                                                    })
                                                }
                                            }), (0, n.jsx)("span", {
                                                className: "text-gray-800",
                                                children: Z.USE_SHIPPING_AS_BILLING
                                            })]
                                        })
                                    }), M === s.XL.CREDIT_CARD && !K && (0, n.jsxs)("div", {
                                        className: "col-span-2 rounded-xl",
                                        children: [(0, n.jsx)("h3", {
                                            className: "text-lg text-blue font-medium mb-3",
                                            children: Z.BILLING_ADDRESS_TITLE
                                        }), (0, n.jsx)(y.Z, {
                                            register: O,
                                            errors: L,
                                            setValue: k,
                                            onCepChange: z,
                                            countryCode: U,
                                            dict: Z
                                        })]
                                    })]
                                }) : M === s.XL.CREDIT_CARD ? (0, n.jsxs)("div", {
                                    className: "mt-4 grid grid-cols-2 gap-4",
                                    children: [(0, n.jsxs)("div", {
                                        className: "col-span-2",
                                        children: [(0, n.jsx)(i.Qr, {
                                            control: T,
                                            name: "cardNumber",
                                            render: e => {
                                                let {
                                                    field: l
                                                } = e;
                                                return (0, n.jsx)("input", {
                                                    ...l,
                                                    type: "text",
                                                    className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                                    placeholder: Z.CARD_NUMBER_PLACEHOLDER,
                                                    inputMode: "numeric",
                                                    maxLength: 19,
                                                    onChange: e => l.onChange((0, u.y)(e.target.value))
                                                })
                                            }
                                        }), (0, n.jsx)("span", {
                                            className: "text-red-400",
                                            children: null === (w = L.cardNumber) || void 0 === w ? void 0 : w.message
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "col-span-1",
                                        children: [(0, n.jsx)(i.Qr, {
                                            control: T,
                                            name: "cvc",
                                            render: e => {
                                                let {
                                                    field: {
                                                        name: l,
                                                        value: t,
                                                        disabled: i,
                                                        onBlur: o,
                                                        ref: r,
                                                        onChange: a
                                                    }
                                                } = e;
                                                return (0, n.jsx)("input", {
                                                    ref: r,
                                                    name: l,
                                                    value: t,
                                                    disabled: i,
                                                    type: "text",
                                                    inputMode: "numeric",
                                                    className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                                    placeholder: Z.CVC_PLACEHOLDER,
                                                    onBlur: o,
                                                    maxLength: 4,
                                                    onChange: e => a(e.target.value.replace(/\D/g, ""))
                                                })
                                            }
                                        }), (0, n.jsx)("span", {
                                            className: "text-red-400",
                                            children: null === (I = L.cvc) || void 0 === I ? void 0 : I.message
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "col-span-1",
                                        children: [(0, n.jsx)(i.Qr, {
                                            control: T,
                                            name: "expirationDate",
                                            render: e => {
                                                let {
                                                    field: l
                                                } = e;
                                                return (0, n.jsx)("input", {
                                                    type: "text",
                                                    inputMode: "numeric",
                                                    className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                                    placeholder: Z.EXPIRATION_DATE_PLACEHOLDER,
                                                    ...l,
                                                    onChange: e => l.onChange((0, m.B)(e.target.value))
                                                })
                                            }
                                        }), (0, n.jsx)("span", {
                                            className: "text-red-400",
                                            children: null === (P = L.expirationDate) || void 0 === P ? void 0 : P.message
                                        })]
                                    }), (0, n.jsx)(x.M, {
                                        paymentMethod: M,
                                        installments: V,
                                        countryCode: U,
                                        isFetchingInstallments: F,
                                        dict: Z,
                                        errors: L,
                                        register: O
                                    }), (0, n.jsxs)("div", {
                                        className: "col-span-2",
                                        children: [(0, n.jsx)("input", {
                                            type: "text",
                                            className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                            placeholder: Z.CARD_HOLDER_PLACEHOLDER,
                                            ...O("cardHolder")
                                        }), (0, n.jsx)("span", {
                                            className: "text-red-400",
                                            children: null === (A = L.cardHolder) || void 0 === A ? void 0 : A.message
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "col-span-2",
                                        children: [(0, n.jsx)(i.Qr, {
                                            control: T,
                                            name: "payerCpf",
                                            render: e => {
                                                let {
                                                    field: {
                                                        name: l,
                                                        value: t,
                                                        disabled: i,
                                                        onBlur: o,
                                                        ref: r,
                                                        onChange: a
                                                    }
                                                } = e;
                                                return (0, n.jsx)("input", {
                                                    ref: r,
                                                    name: l,
                                                    value: t,
                                                    disabled: i,
                                                    type: "text",
                                                    inputMode: "numeric",
                                                    className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                                    placeholder: Z.PAYER_CPF,
                                                    onBlur: o,
                                                    onChange: e => a((0, c.Z)(e.target.value))
                                                })
                                            }
                                        }), (0, n.jsx)("span", {
                                            className: "text-red-400",
                                            children: null === (S = L.payerCpf) || void 0 === S ? void 0 : S.message
                                        })]
                                    }), W && (0, n.jsx)("div", {
                                        className: "col-span-2 mt-4",
                                        children: (0, n.jsxs)("label", {
                                            className: "flex items-center gap-x-2",
                                            children: [(0, n.jsx)(i.Qr, {
                                                control: T,
                                                name: "useShippingAsBilling",
                                                render: e => {
                                                    let {
                                                        field: {
                                                            onChange: l,
                                                            value: t,
                                                            onBlur: i,
                                                            name: o,
                                                            ref: r
                                                        }
                                                    } = e;
                                                    return (0, n.jsx)("input", {
                                                        type: "checkbox",
                                                        className: "h-5 w-5 rounded border-gray-300",
                                                        checked: t,
                                                        onChange: e => l(e.target.checked),
                                                        onBlur: i,
                                                        name: o,
                                                        ref: r
                                                    })
                                                }
                                            }), (0, n.jsx)("span", {
                                                className: "text-gray-800",
                                                children: Z.USE_SHIPPING_AS_BILLING
                                            })]
                                        })
                                    }), M === s.XL.CREDIT_CARD && !T._formValues.useShippingAsBilling && (0, n.jsx)("div", {
                                        className: "col-span-2 mt-2 rounded-xl",
                                        children: (0, n.jsx)(y.Z, {
                                            register: O,
                                            errors: L,
                                            setValue: k,
                                            onCepChange: z,
                                            countryCode: U,
                                            dict: Z
                                        })
                                    })]
                                }) : null]
                            }) : null]
                        })]
                    })]
                })
            }
        },
        40449: function(e, l, t) {
            "use strict";
            t.d(l, {
                k: function() {
                    return s
                }
            });
            var n = t(14245),
                i = t(84259),
                o = t(50095),
                r = t(61387),
                a = t(48809);
            let s = e => (0, n.Ry)().shape({
                locale: (0, n.Z_)().required(e.LOCALE_REQUIRED),
                isStripe: (0, n.O7)().default(!1),
                paymentMethod: (0, n.Z_)().required(e.PAYMENT_METHOD_REQUIRED).oneOf(["PIX", "BOLETO", "CREDIT_CARD"]),
                fullName: (0, n.Z_)().required(e.FULL_NAME_REQUIRED).test("is-valid-name", e.FULL_NAME_INVALID, e => {
                    var l;
                    let t = e.trim().split(/\s+/);
                    return t.length >= 2 && (null === (l = t[1]) || void 0 === l ? void 0 : l.length) >= 2
                }),
                phone: (0, n.Z_)().when("isPhoneRequired", {
                    is: !0,
                    then: l => l.required(e.PHONE_REQUIRED).test("is-valid-phone", e.PHONE_INVALID, (e, l) => {
                        if (!e) return !1;
                        try {
                            return (0, o.h)(e, l.parent.locale.split("-")[1])
                        } catch (e) {
                            return !1
                        }
                    }),
                    otherwise: e => e.optional().nullable()
                }),
                email: (0, n.Z_)().email(e.EMAIL_INVALID).when("isEmailRequired", {
                    is: !0,
                    then: l => l.required(e.EMAIL_REQUIRED).test("valid-domain", e.EMAIL_INVALID, e => !!e && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)),
                    otherwise: e => e.optional().nullable()
                }),
                document: (0, n.Z_)().when(["isDocumentRequired", "locale"], {
                    is: e => e,
                    then: l => l.when("locale", {
                        is: "pt-BR",
                        then: l => l.required(e.DOCUMENT_REQUIRED).test("is-valid-cpf-cnpj", e.DOCUMENT_INVALID, e => {
                            if (!e) return !1;
                            let l = e.replace(/\D/g, "");
                            return 11 === l.length ? (0, r.S)(l) : 14 === l.length && (0, a.l)(l)
                        }),
                        otherwise: l => l.required(e.DOCUMENT_REQUIRED).min(1, e.DOCUMENT_INVALID)
                    }),
                    otherwise: e => e.optional().nullable()
                }),
                cep: (0, n.Z_)().when(["paymentMethod", "containsPhysicalProduct"], {
                    is: (e, l) => !!l || "BOLETO" === e,
                    then: l => l.when("locale", {
                        is: "pt-BR",
                        then: l => l.required(e.CEP_REQUIRED).matches(/^\d{5}-\d{3}$/, e.CEP_INVALID),
                        otherwise: l => l.required(e.CEP_REQUIRED)
                    }),
                    otherwise: e => e.optional()
                }),
                number: (0, n.Z_)().when(["paymentMethod", "containsPhysicalProduct"], {
                    is: (e, l) => !!l || "BOLETO" === e,
                    then: l => l.required(e.NUMBER_REQUIRED),
                    otherwise: e => e.optional()
                }),
                street: (0, n.Z_)().when(["paymentMethod", "containsPhysicalProduct"], {
                    is: (e, l) => !!l || "BOLETO" === e,
                    then: l => l.required(e.STREET_REQUIRED),
                    otherwise: e => e.optional()
                }),
                complement: (0, n.Z_)().optional(),
                city: (0, n.Z_)().when(["paymentMethod", "containsPhysicalProduct"], {
                    is: (e, l) => !!l || "BOLETO" === e,
                    then: l => l.required(e.CITY_REQUIRED),
                    otherwise: e => e.optional()
                }),
                state: (0, n.Z_)().when(["paymentMethod", "containsPhysicalProduct"], {
                    is: (e, l) => !!l || "BOLETO" === e,
                    then: l => l.required(e.STATE_REQUIRED),
                    otherwise: e => e.optional()
                }),
                shipping: (0, n.Z_)().when("containsPhysicalProduct", {
                    is: e => e,
                    then: l => l.required(e.SHIPPING_REQUIRED),
                    otherwise: e => e.optional()
                }),
                payerCpf: (0, n.Z_)().when(["paymentMethod", "isStripe"], {
                    is: (e, l) => "CREDIT_CARD" === e && !l,
                    then: l => l.required(e.DOCUMENT_REQUIRED).test("is-valid-cpf", e.DOCUMENT_INVALID, e => {
                        if (!e) return !1;
                        let l = e.replace(/\D/g, "");
                        return (0, r.S)(l)
                    }),
                    otherwise: e => e.optional()
                }),
                cardHolder: (0, n.Z_)().when(["paymentMethod", "isStripe"], {
                    is: (e, l) => "CREDIT_CARD" === e && !l,
                    then: l => l.required(e.CARD_HOLDER_REQUIRED).test("is-valid-name", e.CARD_HOLDER_INVALID, e => !!e && e.trim().split(/\s+/).length >= 2),
                    otherwise: e => e.optional()
                }),
                cardNumber: (0, n.Z_)().when(["paymentMethod", "isStripe"], {
                    is: (e, l) => "CREDIT_CARD" === e && !l,
                    then: l => l.required(e.CARD_NUMBER_REQUIRED).matches(/^(\d{4} \d{4} \d{4} \d{4})$/, e.CARD_NUMBER_INVALID),
                    otherwise: e => e.optional()
                }),
                cvc: (0, n.Z_)().when(["paymentMethod", "isStripe"], {
                    is: (e, l) => "CREDIT_CARD" === e && !l,
                    then: l => l.required(e.CVC_REQUIRED).matches(/^\d{3,4}$/, e.CVC_INVALID),
                    otherwise: e => e.optional()
                }),
                expirationDate: (0, n.Z_)().when(["paymentMethod", "isStripe"], {
                    is: (e, l) => "CREDIT_CARD" === e && !l,
                    then: l => l.required(e.EXPIRATION_DATE_REQUIRED).matches(/^(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/, e.EXPIRATION_DATE_INVALID),
                    otherwise: e => e.optional()
                }),
                installments: (0, n.Rx)().when("paymentMethod", {
                    is: "CREDIT_CARD",
                    then: l => l.required(e.INSTALLMENTS_REQUIRED).positive(e.INSTALLMENTS_POSITIVE).integer(e.INSTALLMENTS_INTEGER).min(1, e.INSTALLMENTS_MIN).max(12, e.INSTALLMENTS_MAX),
                    otherwise: e => e.optional()
                }),
                billingCep: (0, n.Z_)().when(["paymentMethod", "useShippingAsBilling", "containsPhysicalProduct"], {
                    is: (e, l, t) => "CREDIT_CARD" === e && !l,
                    then: l => l.when("locale", {
                        is: "pt-BR",
                        then: l => l.required(e.CEP_REQUIRED).matches(/^\d{5}-\d{3}$/, e.CEP_INVALID),
                        otherwise: l => l.required(e.CEP_REQUIRED)
                    }),
                    otherwise: e => e.optional()
                }),
                billingNumber: (0, n.Z_)().when(["paymentMethod", "useShippingAsBilling", "containsPhysicalProduct"], {
                    is: (e, l, t) => "CREDIT_CARD" === e && !l,
                    then: l => l.required(e.NUMBER_REQUIRED),
                    otherwise: e => e.optional()
                }),
                billingStreet: (0, n.Z_)().when(["paymentMethod", "useShippingAsBilling", "containsPhysicalProduct"], {
                    is: (e, l, t) => "CREDIT_CARD" === e && !l,
                    then: l => l.required(e.STREET_REQUIRED),
                    otherwise: e => e.optional()
                }),
                billingComplement: (0, n.Z_)().optional(),
                billingCity: (0, n.Z_)().when(["paymentMethod", "useShippingAsBilling", "containsPhysicalProduct"], {
                    is: (e, l, t) => "CREDIT_CARD" === e && !l,
                    then: l => l.required(e.CITY_REQUIRED),
                    otherwise: e => e.optional()
                }),
                billingState: (0, n.Z_)().when(["paymentMethod", "useShippingAsBilling", "containsPhysicalProduct", "locale"], {
                    is: (e, l, t) => "CREDIT_CARD" === e && !l,
                    then: l => l.when("locale", {
                        is: "pt-BR",
                        then: l => l.required(e.STATE_REQUIRED).oneOf(i.$q.map(e => e.sigla), e.STATE_INVALID),
                        otherwise: l => l.required(e.STATE_REQUIRED)
                    }),
                    otherwise: e => e.optional()
                }),
                billingNeighborhood: (0, n.Z_)().when(["paymentMethod", "useShippingAsBilling", "containsPhysicalProduct"], {
                    is: (e, l, t) => "CREDIT_CARD" === e && !l,
                    then: l => l.required(e.NEIGHBORHOOD_REQUIRED),
                    otherwise: e => e.optional()
                }),
                useShippingAsBilling: (0, n.O7)().default(!0),
                quantity: (0, n.Rx)().default(1),
                quantitySelectorEnabled: (0, n.O7)().default(!1),
                containsPhysicalProduct: (0, n.O7)().default(!1),
                isPhoneRequired: (0, n.O7)().default(!0),
                isDocumentRequired: (0, n.O7)().default(!0),
                isEmailRequired: (0, n.O7)().default(!0)
            })
        },
        8458: function(e, l, t) {
            "use strict";
            t.d(l, {
                E: function() {
                    return r
                }
            });
            var n = t(57437),
                i = t(48059),
                o = t.n(i);
            let r = (0, t(2265).forwardRef)(function(e, l) {
                var t, i, r, a, s, d, c, u, m, p, v, h, x, y, f, g, C, b, E, N, j, R, _, D, w, I, P, A, S, T, L, O, k, M, B, U, q, X, V, F, H, G, Q, W, Z, Y, z, K, J, $, ee, el, et, en, ei, eo, er, ea, es, ed, ec, eu, em, ep;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("div", {
                        className: o().dynamic([
                            ["1e47ff7c7bb0fcc", [null !== (k = null === (t = e.theme) || void 0 === t ? void 0 : t.primaryColor) && void 0 !== k ? k : "#081D30", null !== (M = null === (i = e.theme) || void 0 === i ? void 0 : i.primaryColor) && void 0 !== M ? M : "#081D30", null !== (B = null === (r = e.theme) || void 0 === r ? void 0 : r.primaryColor) && void 0 !== B ? B : "#081D30", null !== (U = null === (a = e.theme) || void 0 === a ? void 0 : a.primaryColor) && void 0 !== U ? U : "#081D30"]]
                        ]) + " inline-flex items-center",
                        children: (0, n.jsxs)("label", {
                            htmlFor: e.id,
                            className: o().dynamic([
                                ["1e47ff7c7bb0fcc", [null !== (q = null === (s = e.theme) || void 0 === s ? void 0 : s.primaryColor) && void 0 !== q ? q : "#081D30", null !== (X = null === (d = e.theme) || void 0 === d ? void 0 : d.primaryColor) && void 0 !== X ? X : "#081D30", null !== (V = null === (c = e.theme) || void 0 === c ? void 0 : c.primaryColor) && void 0 !== V ? V : "#081D30", null !== (F = null === (u = e.theme) || void 0 === u ? void 0 : u.primaryColor) && void 0 !== F ? F : "#081D30"]]
                            ]) + " relative flex items-center p-3 rounded-full cursor-pointer",
                            children: [(0, n.jsx)("input", {
                                ref: l,
                                type: "radio",
                                id: e.id,
                                ...e,
                                className: o().dynamic([
                                    ["1e47ff7c7bb0fcc", [null !== (H = null === (m = e.theme) || void 0 === m ? void 0 : m.primaryColor) && void 0 !== H ? H : "#081D30", null !== (G = null === (p = e.theme) || void 0 === p ? void 0 : p.primaryColor) && void 0 !== G ? G : "#081D30", null !== (Q = null === (v = e.theme) || void 0 === v ? void 0 : v.primaryColor) && void 0 !== Q ? Q : "#081D30", null !== (W = null === (h = e.theme) || void 0 === h ? void 0 : h.primaryColor) && void 0 !== W ? W : "#081D30"]]
                                ]) + " " + (e && null != e.className && e.className || "before:content[''] bg-white peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border border-primary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:bg-primary checked:before:bg-primary hover:before:opacity-10")
                            }), (0, n.jsx)("span", {
                                className: o().dynamic([
                                    ["1e47ff7c7bb0fcc", [null !== (Z = null === (x = e.theme) || void 0 === x ? void 0 : x.primaryColor) && void 0 !== Z ? Z : "#081D30", null !== (Y = null === (y = e.theme) || void 0 === y ? void 0 : y.primaryColor) && void 0 !== Y ? Y : "#081D30", null !== (z = null === (f = e.theme) || void 0 === f ? void 0 : f.primaryColor) && void 0 !== z ? z : "#081D30", null !== (K = null === (g = e.theme) || void 0 === g ? void 0 : g.primaryColor) && void 0 !== K ? K : "#081D30"]]
                                ]) + " absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100",
                                children: (0, n.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeWidth: "1",
                                    className: o().dynamic([
                                        ["1e47ff7c7bb0fcc", [null !== (J = null === (C = e.theme) || void 0 === C ? void 0 : C.primaryColor) && void 0 !== J ? J : "#081D30", null !== ($ = null === (b = e.theme) || void 0 === b ? void 0 : b.primaryColor) && void 0 !== $ ? $ : "#081D30", null !== (ee = null === (E = e.theme) || void 0 === E ? void 0 : E.primaryColor) && void 0 !== ee ? ee : "#081D30", null !== (el = null === (N = e.theme) || void 0 === N ? void 0 : N.primaryColor) && void 0 !== el ? el : "#081D30"]]
                                    ]) + " h-3.5 w-3.5",
                                    children: (0, n.jsx)("path", {
                                        fillRule: "evenodd",
                                        d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                        clipRule: "evenodd",
                                        className: o().dynamic([
                                            ["1e47ff7c7bb0fcc", [null !== (et = null === (j = e.theme) || void 0 === j ? void 0 : j.primaryColor) && void 0 !== et ? et : "#081D30", null !== (en = null === (R = e.theme) || void 0 === R ? void 0 : R.primaryColor) && void 0 !== en ? en : "#081D30", null !== (ei = null === (_ = e.theme) || void 0 === _ ? void 0 : _.primaryColor) && void 0 !== ei ? ei : "#081D30", null !== (eo = null === (D = e.theme) || void 0 === D ? void 0 : D.primaryColor) && void 0 !== eo ? eo : "#081D30"]]
                                        ])
                                    })
                                })
                            })]
                        })
                    }, e.id), (0, n.jsx)(o(), {
                        id: "1e47ff7c7bb0fcc",
                        dynamic: [null !== (er = null === (w = e.theme) || void 0 === w ? void 0 : w.primaryColor) && void 0 !== er ? er : "#081D30", null !== (ea = null === (I = e.theme) || void 0 === I ? void 0 : I.primaryColor) && void 0 !== ea ? ea : "#081D30", null !== (es = null === (P = e.theme) || void 0 === P ? void 0 : P.primaryColor) && void 0 !== es ? es : "#081D30", null !== (ed = null === (A = e.theme) || void 0 === A ? void 0 : A.primaryColor) && void 0 !== ed ? ed : "#081D30"],
                        children: "input.__jsx-style-dynamic-selector{border-color:".concat(null !== (ec = null === (S = e.theme) || void 0 === S ? void 0 : S.primaryColor) && void 0 !== ec ? ec : "#081D30", "!important}input.__jsx-style-dynamic-selector:checked{background-color:").concat(null !== (eu = null === (T = e.theme) || void 0 === T ? void 0 : T.primaryColor) && void 0 !== eu ? eu : "#081D30", "!important;border-color:").concat(null !== (em = null === (L = e.theme) || void 0 === L ? void 0 : L.primaryColor) && void 0 !== em ? em : "#081D30", "!important}input.__jsx-style-dynamic-selector:checked:before{background-color:").concat(null !== (ep = null === (O = e.theme) || void 0 === O ? void 0 : O.primaryColor) && void 0 !== ep ? ep : "#081D30", "!important}")
                    })]
                })
            })
        },
        75036: function(e, l, t) {
            "use strict";
            t.d(l, {
                g: function() {
                    return r
                }
            });
            var n = t(57437),
                i = t(2265),
                o = t(31877);
            let r = (0, i.forwardRef)((e, l) => {
                let {
                    isStripeAndInfo: t,
                    locale: r = "auto",
                    currency: a,
                    dict: s,
                    showLabels: d = !1
                } = e, c = (0, i.useRef)(null), u = (0, i.useRef)(null), m = (0, i.useRef)(null), p = (0, i.useRef)(null), v = (0, i.useRef)(null), h = (0, i.useRef)(null), x = (0, i.useRef)(null), [y, f] = (0, i.useState)({}), [g, C] = (0, i.useState)({
                    cardNumber: !1,
                    cardExpiry: !1,
                    cardCvc: !1
                }), [b, E] = (0, i.useState)(!1), [N, j] = (0, i.useState)(null);
                return (0, i.useEffect)(() => {
                    window.Stripe && E(!0)
                }, []), (0, i.useEffect)(() => {
                    if (!t || !t.clientId) {
                        f({
                            cardNumber: "Configura\xe7\xe3o do Stripe inv\xe1lida"
                        });
                        return
                    }
                    if (b && window.Stripe) {
                        let e = window.Stripe(t.clientId);
                        c.current = e;
                        let l = e.elements({
                                locale: r
                            }),
                            n = l.create("cardNumber", {
                                style: {
                                    base: {
                                        fontSize: "16px",
                                        color: "#32325d",
                                        "::placeholder": {
                                            color: "#aab7c4"
                                        }
                                    }
                                }
                            }),
                            i = l.create("cardExpiry", {
                                style: {
                                    base: {
                                        fontSize: "16px",
                                        color: "#32325d",
                                        "::placeholder": {
                                            color: "#aab7c4"
                                        }
                                    }
                                }
                            }),
                            o = l.create("cardCvc", {
                                style: {
                                    base: {
                                        fontSize: "16px",
                                        color: "#32325d",
                                        "::placeholder": {
                                            color: "#aab7c4"
                                        }
                                    }
                                }
                            });
                        return u.current && m.current && p.current ? (n.mount(u.current), v.current = n, i.mount(m.current), h.current = i, o.mount(p.current), x.current = o) : (console.error("Erro: Um ou mais refs dos elementos do cart\xe3o n\xe3o est\xe3o dispon\xedveis"), f({
                            cardNumber: "Erro ao montar elementos do cart\xe3o"
                        })), n.on("change", e => {
                            C(l => ({
                                ...l,
                                cardNumber: e.complete
                            })), f(l => ({
                                ...l,
                                cardNumber: e.error ? e.error.message : e.complete ? void 0 : s.CARD_NUMBER_REQUIRED || "N\xfamero do cart\xe3o \xe9 obrigat\xf3rio"
                            }))
                        }), i.on("change", e => {
                            C(l => ({
                                ...l,
                                cardExpiry: e.complete
                            })), f(l => ({
                                ...l,
                                cardExpiry: e.error ? e.error.message : e.complete ? void 0 : s.EXPIRATION_DATE_REQUIRED || "Data de expira\xe7\xe3o \xe9 obrigat\xf3ria"
                            }))
                        }), o.on("change", e => {
                            C(l => ({
                                ...l,
                                cardCvc: e.complete
                            })), f(l => ({
                                ...l,
                                cardCvc: e.error ? e.error.message : e.complete ? void 0 : s.CVC_REQUIRED || "CVC \xe9 obrigat\xf3rio"
                            }))
                        }), n.on("ready", () => console.log("Elemento cardNumber pronto")), i.on("ready", () => console.log("Elemento cardExpiry pronto")), o.on("ready", () => console.log("Elemento cardCvc pronto")), () => {
                            console.log("Desmontando elementos do Stripe"), n.unmount(), i.unmount(), o.unmount()
                        }
                    }
                }, [b, t, r, s]), (0, i.useImperativeHandle)(l, () => ({
                    generateCardToken: async () => {
                        if (!c.current || !v.current) return console.error("Erro: Stripe ou elemento do cart\xe3o n\xe3o inicializado"), {
                            token: null,
                            error: Error("Stripe ou elemento do cart\xe3o n\xe3o inicializado")
                        };
                        if (!g.cardNumber || !g.cardExpiry || !g.cardCvc) {
                            let e = {};
                            return g.cardNumber || (e.cardNumber = s.CARD_NUMBER_REQUIRED || "N\xfamero do cart\xe3o \xe9 obrigat\xf3rio"), g.cardExpiry || (e.cardExpiry = s.EXPIRATION_DATE_REQUIRED || "Data de expira\xe7\xe3o \xe9 obrigat\xf3ria"), g.cardCvc || (e.cardCvc = s.CVC_REQUIRED || "CVC \xe9 obrigat\xf3rio"), f(e), {
                                token: null,
                                error: Error("Campos do cart\xe3o incompletos")
                            }
                        }
                        try {
                            console.log("Gerando token do cart\xe3o...");
                            let {
                                token: e,
                                error: l
                            } = await c.current.createToken(v.current);
                            if (l) return console.error("Erro ao gerar token:", l), {
                                token: null,
                                error: l
                            };
                            return console.log("Token gerado com sucesso:", null == e ? void 0 : e.id), {
                                token: e ? e.id : null,
                                error: l,
                                currency: a
                            }
                        } catch (e) {
                            return console.error("Erro inesperado ao gerar token:", e), {
                                token: null,
                                error: e,
                                currency: a
                            }
                        }
                    }
                })), (0, n.jsxs)(n.Fragment, {
                    children: [!b && (0, n.jsx)(o.default, {
                        src: "https://js.stripe.com/v3/",
                        strategy: "afterInteractive",
                        onLoad: () => {
                            console.log("Stripe.js carregado com sucesso!"), E(!0), j(null)
                        },
                        onError: e => {
                            console.error("Erro ao carregar Stripe.js:", e), j("Falha ao carregar o script do Stripe. Tente novamente.")
                        }
                    }), N && (0, n.jsx)("div", {
                        className: "text-red-400 text-sm mb-6",
                        children: N
                    }), (0, n.jsxs)("div", {
                        className: "mb-6",
                        children: [d && (0, n.jsx)("span", {
                            className: "text-gray-800 mb-1 inline-block",
                            children: s.CARD_NUMBER || "N\xfamero do cart\xe3o"
                        }), (0, n.jsx)("div", {
                            className: "bg-white w-full px-3 py-4 rounded-xl border",
                            "data-testid": "stripeCardNumberInputContainer",
                            ref: u,
                            style: {
                                minHeight: "40px"
                            }
                        }), y.cardNumber && (0, n.jsx)("p", {
                            className: "text-red-400 text-sm mt-1",
                            children: y.cardNumber
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "mb-6",
                        children: [d && (0, n.jsx)("span", {
                            className: "text-gray-800 mb-1 inline-block",
                            children: s.EXPIRATION_DATE || "Data de expira\xe7\xe3o"
                        }), (0, n.jsx)("div", {
                            className: "bg-white w-full px-3 py-4 rounded-xl border",
                            "data-testid": "stripeCardExpiryInputContainer",
                            ref: m,
                            style: {
                                minHeight: "40px"
                            }
                        }), y.cardExpiry && (0, n.jsx)("p", {
                            className: "text-red-400 text-sm mt-1",
                            children: y.cardExpiry
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "mb-6",
                        children: [d && (0, n.jsx)("span", {
                            className: "text-gray-800 mb-1 inline-block",
                            children: s.CVC || "CVC"
                        }), (0, n.jsx)("div", {
                            className: "bg-white w-full px-3 py-4 rounded-xl border",
                            "data-testid": "stripeCardCvcInputContainer",
                            ref: p,
                            style: {
                                minHeight: "40px"
                            }
                        }), y.cardCvc && (0, n.jsx)("p", {
                            className: "text-red-400 text-sm mt-1",
                            children: y.cardCvc
                        })]
                    })]
                })
            });
            r.displayName = "StripeComponent"
        },
        85856: function(e, l, t) {
            "use strict";
            t.d(l, {
                z: function() {
                    return r
                }
            });
            var n = t(57437),
                i = t(48059),
                o = t.n(i);
            let r = (0, t(2265).forwardRef)(function(e, l) {
                var t, i, r, a, s, d, c, u, m, p, v, h, x, y, f, g, C, b, E, N, j, R, _, D;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("button", {
                        ...e,
                        ref: l,
                        className: o().dynamic([
                            ["21ac677f528d78f7", [null !== (x = null == e ? void 0 : null === (t = e.theme) || void 0 === t ? void 0 : t.primaryColor) && void 0 !== x ? x : "#081D30", null !== (y = null == e ? void 0 : null === (i = e.theme) || void 0 === i ? void 0 : i.textColor) && void 0 !== y ? y : "white", null !== (f = null == e ? void 0 : null === (r = e.theme) || void 0 === r ? void 0 : r.primaryColor) && void 0 !== f ? f : "#081D30", null !== (g = null == e ? void 0 : null === (a = e.theme) || void 0 === a ? void 0 : a.primaryColor) && void 0 !== g ? g : "#081D30"]]
                        ]) + " " + (e && null != e.className && e.className || ""),
                        children: e.children
                    }), (0, n.jsx)(o(), {
                        id: "21ac677f528d78f7",
                        dynamic: [null !== (C = null == e ? void 0 : null === (s = e.theme) || void 0 === s ? void 0 : s.primaryColor) && void 0 !== C ? C : "#081D30", null !== (b = null == e ? void 0 : null === (d = e.theme) || void 0 === d ? void 0 : d.textColor) && void 0 !== b ? b : "white", null !== (E = null == e ? void 0 : null === (c = e.theme) || void 0 === c ? void 0 : c.primaryColor) && void 0 !== E ? E : "#081D30", null !== (N = null == e ? void 0 : null === (u = e.theme) || void 0 === u ? void 0 : u.primaryColor) && void 0 !== N ? N : "#081D30"],
                        children: "button.__jsx-style-dynamic-selector{background-color:".concat(null !== (j = null == e ? void 0 : null === (m = e.theme) || void 0 === m ? void 0 : m.primaryColor) && void 0 !== j ? j : "#081D30", ";color:").concat(null !== (R = null == e ? void 0 : null === (p = e.theme) || void 0 === p ? void 0 : p.textColor) && void 0 !== R ? R : "white", ";border-color:").concat(null !== (_ = null == e ? void 0 : null === (v = e.theme) || void 0 === v ? void 0 : v.primaryColor) && void 0 !== _ ? _ : "#081D30", "}button.__jsx-style-dynamic-selector:hover{color:#081D30;background-color:transparent;border-color:").concat(null !== (D = null == e ? void 0 : null === (h = e.theme) || void 0 === h ? void 0 : h.primaryColor) && void 0 !== D ? D : "#081D30", "}")
                    })]
                })
            })
        },
        50137: function(e, l, t) {
            "use strict";
            t.d(l, {
                X: function() {
                    return c
                }
            });
            var n = t(57437),
                i = t(2265),
                o = t(16356),
                r = t(64451),
                a = t(45973),
                s = t(51549),
                d = t(84450);
            let c = (0, i.forwardRef)(function(e, l) {
                let {
                    checkout: t,
                    totalValue: c,
                    onClose: u,
                    onClickPayWithPix: m
                } = e, [p, v] = (0, i.useState)(!1), {
                    setInstantRecoveryDiscountValue: h
                } = (0, s.p)(), x = (0, i.useMemo)(() => {
                    if (!(null == t ? void 0 : t.instantRecoveryDiscountValue) || !t.instantRecoveryDiscountValue) return 0;
                    let e = 0;
                    return (null == t ? void 0 : t.instantRecoveryDiscountType) === r.Lb.FIXED ? e = t.instantRecoveryDiscountValue : t.instantRecoveryDiscountType === r.Lb.PERCENTUAL && (e = t.instantRecoveryDiscountValue / 100 * c), e
                }, [null == t ? void 0 : t.instantRecoveryDiscountType, null == t ? void 0 : t.instantRecoveryDiscountValue, c]), {
                    dict: y,
                    countryCode: f
                } = (0, d.g)(), g = () => {
                    v(!1), u && u()
                };
                return ((0, i.useImperativeHandle)(l, () => ({
                    toggle() {
                        v(!p)
                    }
                }), [p]), (0, i.useEffect)(() => {
                    document.body.style.overflowY = p ? "hidden" : "auto"
                }, [p]), p) ? (0, n.jsx)("div", {
                    className: "bg-black bg-opacity-30 fixed top-0 left-0 w-full h-full p-4 z-50 flex flex-col justify-center items-center",
                    children: (0, n.jsxs)("div", {
                        className: "bg-white rounded-xl p-6 overflow-y-auto max-w-md",
                        children: [(0, n.jsxs)("header", {
                            children: [(0, n.jsx)("div", {
                                className: "flex justify-end",
                                children: (0, n.jsx)("button", {
                                    type: "button",
                                    onClick: g,
                                    children: (0, n.jsx)(o.FU5, {
                                        size: 24
                                    })
                                })
                            }), (0, n.jsxs)("div", {
                                className: "mt-2",
                                children: [(0, n.jsx)("h5", {
                                    className: "text-center text-2xl font-medium",
                                    children: y.CARD_REFUSED_TITLE
                                }), x > 0 ? (0, n.jsxs)("p", {
                                    className: "text-center mt-4 text-lg text-gray-700",
                                    children: [y.CARD_REFUSED_PIX_OFFER, " ", (0, n.jsx)("span", {
                                        className: "text-green-500 font-medium",
                                        children: (0, a.x)(x, f)
                                    }), " ", y.CARD_REFUSED_DISCOUNT]
                                }) : (0, n.jsx)("p", {
                                    className: "text-center mt-4 text-lg text-gray-700",
                                    children: y.CARD_REFUSED_PIX_OFFER_NO_DISCOUNT
                                }), x > 0 ? (0, n.jsxs)("div", {
                                    className: "flex items-center justify-center gap-x-2 mt-2",
                                    children: [(0, n.jsxs)("span", {
                                        className: "line-through text-red-400",
                                        children: [y.CARD_REFUSED_FROM, " ", (0, a.x)(c, f)]
                                    }), (0, n.jsxs)("span", {
                                        className: "font-medium text-green-500 text-lg",
                                        children: [y.CARD_REFUSED_TO, " ", (0, a.x)(c - x, f)]
                                    })]
                                }) : null]
                            })]
                        }), (0, n.jsx)("div", {
                            className: "mt-4",
                            children: (0, n.jsx)("button", {
                                type: "button",
                                onClick: () => {
                                    h(x), m()
                                },
                                className: "bg-green-500 py-3 rounded-lg font-semibold text-white w-full shadow",
                                children: y.BUY_WITH_PIX_BUTTON
                            })
                        }), (0, n.jsx)("button", {
                            type: "button",
                            onClick: g,
                            className: "w-full mt-4 text-gray-700",
                            children: y.FINISH_WITH_CARD
                        })]
                    })
                }) : null
            })
        },
        14904: function(e, l, t) {
            "use strict";
            t.d(l, {
                default: function() {
                    return ec
                }
            });
            var n = t(57437),
                i = t(66648),
                o = {
                    src: "/_next/static/media/backArrow.37f7fbc0.svg",
                    height: 200,
                    width: 200,
                    blurWidth: 0,
                    blurHeight: 0
                },
                r = t(50137),
                a = t(48059),
                s = t.n(a),
                d = {
                    src: "/_next/static/media/paymentInfoIcon.159ee015.svg",
                    height: 161,
                    width: 161,
                    blurWidth: 0,
                    blurHeight: 0
                },
                c = {
                    src: "/_next/static/media/personalInfoIcon.f9768d62.svg",
                    height: 167,
                    width: 166,
                    blurWidth: 0,
                    blurHeight: 0
                },
                u = {
                    src: "/_next/static/media/shipping.9e073049.svg",
                    height: 1206,
                    width: 1206,
                    blurWidth: 0,
                    blurHeight: 0
                };
            let m = e => {
                var l, t, o, r, a, m, p, v, h, x, y, f, g, C, b, E, N, j, R, _, D, w, I, P, A, S, T, L, O, k, M, B, U, q, X, V, F, H, G, Q;
                let {
                    containsPhysicalProduct: W,
                    step: Z,
                    theme: Y
                } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: s().dynamic([
                            ["fcee4daf0d794c97", [null !== (l = null == Y ? void 0 : Y.primaryColor) && void 0 !== l ? l : "#0f172a", null !== (t = null == Y ? void 0 : Y.primaryColor) && void 0 !== t ? t : "#0f172a", Z > 1 ? null !== (o = null == Y ? void 0 : Y.primaryColor) && void 0 !== o ? o : "#0f172a" : "#cbd5e1", W && Z > 2 ? null !== (r = null == Y ? void 0 : Y.primaryColor) && void 0 !== r ? r : "#0f172a" : Z > 1 && !W ? null !== (a = null == Y ? void 0 : Y.primaryColor) && void 0 !== a ? a : "#0f172a" : "#cbd5e1"]]
                        ]) + " relative flex items-center justify-between w-full",
                        children: [(0, n.jsx)("div", {
                            className: s().dynamic([
                                ["fcee4daf0d794c97", [null !== (m = null == Y ? void 0 : Y.primaryColor) && void 0 !== m ? m : "#0f172a", null !== (p = null == Y ? void 0 : Y.primaryColor) && void 0 !== p ? p : "#0f172a", Z > 1 ? null !== (v = null == Y ? void 0 : Y.primaryColor) && void 0 !== v ? v : "#0f172a" : "#cbd5e1", W && Z > 2 ? null !== (h = null == Y ? void 0 : Y.primaryColor) && void 0 !== h ? h : "#0f172a" : Z > 1 && !W ? null !== (x = null == Y ? void 0 : Y.primaryColor) && void 0 !== x ? x : "#0f172a" : "#cbd5e1"]]
                            ]) + " absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-300"
                        }), (0, n.jsx)("div", {
                            id: "step-line",
                            className: s().dynamic([
                                ["fcee4daf0d794c97", [null !== (y = null == Y ? void 0 : Y.primaryColor) && void 0 !== y ? y : "#0f172a", null !== (f = null == Y ? void 0 : Y.primaryColor) && void 0 !== f ? f : "#0f172a", Z > 1 ? null !== (g = null == Y ? void 0 : Y.primaryColor) && void 0 !== g ? g : "#0f172a" : "#cbd5e1", W && Z > 2 ? null !== (C = null == Y ? void 0 : Y.primaryColor) && void 0 !== C ? C : "#0f172a" : Z > 1 && !W ? null !== (b = null == Y ? void 0 : Y.primaryColor) && void 0 !== b ? b : "#0f172a" : "#cbd5e1"]]
                            ]) + " absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-900 transition-all duration-500"
                        }), (0, n.jsx)("div", {
                            id: "first-step",
                            className: s().dynamic([
                                ["fcee4daf0d794c97", [null !== (E = null == Y ? void 0 : Y.primaryColor) && void 0 !== E ? E : "#0f172a", null !== (N = null == Y ? void 0 : Y.primaryColor) && void 0 !== N ? N : "#0f172a", Z > 1 ? null !== (j = null == Y ? void 0 : Y.primaryColor) && void 0 !== j ? j : "#0f172a" : "#cbd5e1", W && Z > 2 ? null !== (R = null == Y ? void 0 : Y.primaryColor) && void 0 !== R ? R : "#0f172a" : Z > 1 && !W ? null !== (_ = null == Y ? void 0 : Y.primaryColor) && void 0 !== _ ? _ : "#0f172a" : "#cbd5e1"]]
                            ]) + " relative z-10 grid w-10 h-10 font-bold transition-all duration-300 bg-gray-900 rounded-full place-items-center",
                            children: (0, n.jsx)(i.default, {
                                src: c,
                                alt: "\xcdcone de informa\xe7\xf5es pessoais no checkout",
                                width: 20,
                                height: 20
                            })
                        }), W ? (0, n.jsx)("div", {
                            id: "second-step",
                            className: s().dynamic([
                                ["fcee4daf0d794c97", [null !== (D = null == Y ? void 0 : Y.primaryColor) && void 0 !== D ? D : "#0f172a", null !== (w = null == Y ? void 0 : Y.primaryColor) && void 0 !== w ? w : "#0f172a", Z > 1 ? null !== (I = null == Y ? void 0 : Y.primaryColor) && void 0 !== I ? I : "#0f172a" : "#cbd5e1", W && Z > 2 ? null !== (P = null == Y ? void 0 : Y.primaryColor) && void 0 !== P ? P : "#0f172a" : Z > 1 && !W ? null !== (A = null == Y ? void 0 : Y.primaryColor) && void 0 !== A ? A : "#0f172a" : "#cbd5e1"]]
                            ]) + " relative z-10 grid w-10 h-10 font-bold transition-all duration-300 bg-gray-300 rounded-full place-items-center step",
                            children: (0, n.jsx)(i.default, {
                                src: u,
                                alt: "\xcdcone de frete no checkout",
                                width: 20,
                                height: 20
                            })
                        }) : null, (0, n.jsx)("div", {
                            id: "third-step",
                            className: s().dynamic([
                                ["fcee4daf0d794c97", [null !== (S = null == Y ? void 0 : Y.primaryColor) && void 0 !== S ? S : "#0f172a", null !== (T = null == Y ? void 0 : Y.primaryColor) && void 0 !== T ? T : "#0f172a", Z > 1 ? null !== (L = null == Y ? void 0 : Y.primaryColor) && void 0 !== L ? L : "#0f172a" : "#cbd5e1", W && Z > 2 ? null !== (O = null == Y ? void 0 : Y.primaryColor) && void 0 !== O ? O : "#0f172a" : Z > 1 && !W ? null !== (k = null == Y ? void 0 : Y.primaryColor) && void 0 !== k ? k : "#0f172a" : "#cbd5e1"]]
                            ]) + " relative z-10 grid w-10 h-10 font-bold transition-all duration-300 rounded-full place-items-center bg-gray-300",
                            children: (0, n.jsx)(i.default, {
                                src: d,
                                alt: "\xcdcone de informa\xe7\xf5es do pagamento no checkout",
                                width: 20,
                                height: 20
                            })
                        })]
                    }), (0, n.jsx)(s(), {
                        id: "fcee4daf0d794c97",
                        dynamic: [null !== (M = null == Y ? void 0 : Y.primaryColor) && void 0 !== M ? M : "#0f172a", null !== (B = null == Y ? void 0 : Y.primaryColor) && void 0 !== B ? B : "#0f172a", Z > 1 ? null !== (U = null == Y ? void 0 : Y.primaryColor) && void 0 !== U ? U : "#0f172a" : "#cbd5e1", W && Z > 2 ? null !== (q = null == Y ? void 0 : Y.primaryColor) && void 0 !== q ? q : "#0f172a" : Z > 1 && !W ? null !== (X = null == Y ? void 0 : Y.primaryColor) && void 0 !== X ? X : "#0f172a" : "#cbd5e1"],
                        children: "#step-line.__jsx-style-dynamic-selector{background-color:".concat(null !== (V = null == Y ? void 0 : Y.primaryColor) && void 0 !== V ? V : "#0f172a", "}#first-step.__jsx-style-dynamic-selector{background-color:").concat(null !== (F = null == Y ? void 0 : Y.primaryColor) && void 0 !== F ? F : "#0f172a", "}#second-step.__jsx-style-dynamic-selector{background-color:").concat(Z > 1 ? null !== (H = null == Y ? void 0 : Y.primaryColor) && void 0 !== H ? H : "#0f172a" : "#cbd5e1", "}#third-step.__jsx-style-dynamic-selector{background-color:").concat(W && Z > 2 ? null !== (G = null == Y ? void 0 : Y.primaryColor) && void 0 !== G ? G : "#0f172a" : Z > 1 && !W ? null !== (Q = null == Y ? void 0 : Y.primaryColor) && void 0 !== Q ? Q : "#0f172a" : "#cbd5e1", "}")
                    })]
                })
            };
            var p = t(30554),
                v = t(46541),
                h = t(9292),
                x = t(80182),
                y = t(58063),
                f = t(19433),
                g = t(62235),
                C = t(19957),
                b = t(39700),
                E = t(50237),
                N = t(41254),
                j = t(6056),
                R = t(62432),
                _ = t(89167),
                D = t(29467),
                w = t(51549),
                I = t(64451),
                P = t(11374),
                A = t(9034),
                S = t(33514),
                T = t(90923),
                L = t(86103),
                O = t(67753),
                k = t(72778),
                M = t(80042),
                B = t.n(M),
                U = t(16463),
                q = t(2265),
                X = t(39343),
                V = t(23580),
                F = t(19563),
                H = t(89164),
                G = t(85856),
                Q = t(14245),
                W = t(61387),
                Z = t(48809),
                Y = t(84259),
                z = t(50095);
            let K = e => (0, Q.Ry)().shape({
                locale: (0, Q.Z_)().required(e.LOCALE_REQUIRED),
                isStripe: (0, Q.O7)().default(!1),
                paymentMethod: (0, Q.Z_)().required(e.PAYMENT_METHOD_REQUIRED).oneOf(["PIX", "BOLETO", "CREDIT_CARD"]),
                fullName: (0, Q.Z_)().required(e.FULL_NAME_REQUIRED).test("is-valid-name", e.FULL_NAME_INVALID, e => {
                    var l;
                    let t = e.trim().split(/\s+/);
                    return t.length >= 2 && (null === (l = t[1]) || void 0 === l ? void 0 : l.length) >= 2
                }),
                phone: (0, Q.Z_)().when("isPhoneRequired", {
                    is: !0,
                    then: l => l.required(e.PHONE_REQUIRED).test("is-valid-phone", e.PHONE_INVALID, (e, l) => {
                        if (!e) return !1;
                        try {
                            return (0, z.h)(e, l.parent.locale.split("-")[1])
                        } catch (e) {
                            return !1
                        }
                    }),
                    otherwise: e => e.optional().nullable()
                }),
                email: (0, Q.Z_)().email(e.EMAIL_INVALID).when("isEmailRequired", {
                    is: !0,
                    then: l => l.required(e.EMAIL_REQUIRED).test("valid-domain", e.EMAIL_INVALID, e => !!e && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)),
                    otherwise: e => e.optional().nullable()
                }),
                document: (0, Q.Z_)().when(["isDocumentRequired", "locale"], {
                    is: e => e,
                    then: l => l.when("locale", {
                        is: "pt-BR",
                        then: l => l.required(e.DOCUMENT_REQUIRED).test("is-valid-cpf-cnpj", e.DOCUMENT_INVALID, e => {
                            if (!e) return !1;
                            let l = e.replace(/\D/g, "");
                            return 11 === l.length ? (0, W.S)(l) : 14 === l.length && (0, Z.l)(l)
                        }),
                        otherwise: l => l.required(e.DOCUMENT_REQUIRED).min(1, e.DOCUMENT_INVALID)
                    }),
                    otherwise: e => e.optional().nullable()
                }),
                cep: (0, Q.Z_)().when(["paymentMethod", "containsPhysicalProduct", "step", "locale"], {
                    is: (e, l, t, n) => !!l && 2 === t || "BOLETO" === e && (2 === t || 3 === t) && "pt-BR" === n,
                    then: l => l.when("locale", {
                        is: "pt-BR",
                        then: l => l.required(e.CEP_REQUIRED).matches(/^\d{5}-\d{3}$/, e.CEP_INVALID),
                        otherwise: l => l.required(e.CEP_REQUIRED)
                    }),
                    otherwise: e => e.optional()
                }),
                number: (0, Q.Z_)().when(["paymentMethod", "containsPhysicalProduct", "step"], {
                    is: (e, l, t) => !!l && 2 === t || "BOLETO" === e && (2 === t || 3 === t),
                    then: l => l.required(e.NUMBER_REQUIRED),
                    otherwise: e => e.optional()
                }),
                street: (0, Q.Z_)().when(["paymentMethod", "containsPhysicalProduct", "step"], {
                    is: (e, l, t) => !!l && 2 === t || "BOLETO" === e && (2 === t || 3 === t),
                    then: l => l.required(e.STREET_REQUIRED),
                    otherwise: e => e.optional()
                }),
                complement: (0, Q.Z_)().optional(),
                city: (0, Q.Z_)().when(["paymentMethod", "containsPhysicalProduct", "step"], {
                    is: (e, l, t) => !!l && 2 === t || "BOLETO" === e && (2 === t || 3 === t),
                    then: l => l.required(e.CITY_REQUIRED),
                    otherwise: e => e.optional()
                }),
                state: (0, Q.Z_)().when(["paymentMethod", "containsPhysicalProduct", "step", "locale"], {
                    is: (e, l, t, n) => !!l && 2 === t || "BOLETO" === e && (2 === t || 3 === t),
                    then: l => l.when("locale", {
                        is: "pt-BR",
                        then: l => l.required(e.STATE_REQUIRED).oneOf(Y.$q.map(e => e.sigla), e.STATE_INVALID),
                        otherwise: l => l.required(e.STATE_REQUIRED)
                    }),
                    otherwise: e => e.optional()
                }),
                shipping: (0, Q.Z_)().when(["step", "containsPhysicalProduct"], {
                    is: (e, l) => 2 === e && l,
                    then: l => l.required(e.SHIPPING_REQUIRED),
                    otherwise: e => e.optional()
                }),
                payerCpf: (0, Q.Z_)().when(["paymentMethod", "isStripe", "step", "containsPhysicalProduct"], {
                    is: (e, l, t, n) => !l && "CREDIT_CARD" === e && (!!n && 3 === t || !n && 2 === t),
                    then: l => l.required(e.DOCUMENT_REQUIRED).test("is-valid-cpf", e.DOCUMENT_INVALID, e => {
                        if (!e) return !1;
                        let l = e.replace(/\D/g, "");
                        return (0, W.S)(l)
                    }),
                    otherwise: e => e.optional()
                }),
                cardHolder: (0, Q.Z_)().when(["paymentMethod", "step", "containsPhysicalProduct", "isStripe"], {
                    is: (e, l, t, n) => !n && ("CREDIT_CARD" === e && !!t && 3 === l || "CREDIT_CARD" === e && !t && 2 === l),
                    then: l => l.required(e.CARD_HOLDER_REQUIRED).test("is-valid-name", e.CARD_HOLDER_INVALID, e => e.trim().split(/\s+/).length >= 2),
                    otherwise: e => e.optional()
                }),
                cardNumber: (0, Q.Z_)().when(["paymentMethod", "step", "containsPhysicalProduct", "isStripe"], {
                    is: (e, l, t, n) => !n && ("CREDIT_CARD" === e && !!t && 3 === l || "CREDIT_CARD" === e && !t && 2 === l),
                    then: l => l.required(e.CARD_NUMBER_REQUIRED).matches(/^(\d{4} \d{4} \d{4} \d{4})$/, e.CARD_NUMBER_INVALID),
                    otherwise: e => e.optional()
                }),
                cvc: (0, Q.Z_)().when(["paymentMethod", "step", "containsPhysicalProduct", "isStripe"], {
                    is: (e, l, t, n) => !n && ("CREDIT_CARD" === e && !!t && 3 === l || "CREDIT_CARD" === e && !t && 2 === l),
                    then: l => l.required(e.CVC_REQUIRED).matches(/^\d{3,4}$/, e.CVC_INVALID),
                    otherwise: e => e.optional()
                }),
                expirationDate: (0, Q.Z_)().when(["paymentMethod", "step", "containsPhysicalProduct", "isStripe"], {
                    is: (e, l, t, n) => !n && ("CREDIT_CARD" === e && !!t && 3 === l || "CREDIT_CARD" === e && !t && 2 === l),
                    then: l => l.required(e.EXPIRATION_DATE_REQUIRED).matches(/^(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/, e.EXPIRATION_DATE_INVALID),
                    otherwise: e => e.optional()
                }),
                installments: (0, Q.Rx)().when(["paymentMethod", "step", "containsPhysicalProduct"], {
                    is: (e, l, t) => "CREDIT_CARD" === e && !!t && 3 === l || "CREDIT_CARD" === e && !t && 2 === l,
                    then: l => l.required(e.INSTALLMENTS_REQUIRED).positive(e.INSTALLMENTS_POSITIVE).integer(e.INSTALLMENTS_INTEGER).min(1, e.INSTALLMENTS_MIN).max(12, e.INSTALLMENTS_MAX),
                    otherwise: e => e.optional()
                }),
                billingCep: (0, Q.Z_)().when(["paymentMethod", "step", "useShippingAsBilling", "containsPhysicalProduct", "locale"], {
                    is: (e, l, t, n) => "CREDIT_CARD" === e && n && !t && 3 === l || "CREDIT_CARD" === e && !n && 2 === l,
                    then: l => l.when("locale", {
                        is: "pt-BR",
                        then: l => l.required(e.CEP_REQUIRED).matches(/^\d{5}-\d{3}$/, e.CEP_INVALID),
                        otherwise: l => l.required(e.CEP_REQUIRED)
                    }),
                    otherwise: e => e.optional()
                }),
                billingNumber: (0, Q.Z_)().when(["paymentMethod", "step", "useShippingAsBilling", "containsPhysicalProduct"], {
                    is: (e, l, t, n) => "CREDIT_CARD" === e && n && !t && 3 === l || "CREDIT_CARD" === e && !n && 2 === l,
                    then: l => l.required(e.NUMBER_REQUIRED),
                    otherwise: e => e.optional()
                }),
                billingStreet: (0, Q.Z_)().when(["paymentMethod", "step", "useShippingAsBilling", "containsPhysicalProduct"], {
                    is: (e, l, t, n) => "CREDIT_CARD" === e && n && !t && 3 === l || "CREDIT_CARD" === e && !n && 2 === l,
                    then: l => l.required(e.STREET_REQUIRED),
                    otherwise: e => e.optional()
                }),
                billingComplement: (0, Q.Z_)().optional(),
                billingCity: (0, Q.Z_)().when(["paymentMethod", "step", "useShippingAsBilling", "containsPhysicalProduct"], {
                    is: (e, l, t, n) => "CREDIT_CARD" === e && n && !t && 3 === l || "CREDIT_CARD" === e && !n && 2 === l,
                    then: l => l.required(e.CITY_REQUIRED),
                    otherwise: e => e.optional()
                }),
                billingState: (0, Q.Z_)().when(["paymentMethod", "step", "useShippingAsBilling", "containsPhysicalProduct", "locale"], {
                    is: (e, l, t, n) => "CREDIT_CARD" === e && n && !t && 3 === l || "CREDIT_CARD" === e && !n && 2 === l,
                    then: l => l.when("locale", {
                        is: "pt-BR",
                        then: l => l.required(e.STATE_REQUIRED).oneOf(Y.$q.map(e => e.sigla), e.STATE_INVALID),
                        otherwise: l => l.required(e.STATE_REQUIRED)
                    }),
                    otherwise: e => e.optional()
                }),
                billingNeighborhood: (0, Q.Z_)().when(["paymentMethod", "step", "useShippingAsBilling", "containsPhysicalProduct"], {
                    is: (e, l, t, n) => "CREDIT_CARD" === e && n && !t && 3 === l || "CREDIT_CARD" === e && !n && 2 === l,
                    then: l => l.required(e.NEIGHBORHOOD_REQUIRED),
                    otherwise: e => e.optional()
                }),
                useShippingAsBilling: (0, Q.O7)().default(!0),
                step: (0, Q.Rx)().default(1),
                quantity: (0, Q.Rx)().default(1),
                quantitySelectorEnabled: (0, Q.O7)().default(!1),
                containsPhysicalProduct: (0, Q.O7)().default(!1),
                isPhoneRequired: (0, Q.O7)().default(!0),
                isDocumentRequired: (0, Q.O7)().default(!0),
                isEmailRequired: (0, Q.O7)().default(!0)
            });
            var J = t(84450),
                $ = t(31877),
                ee = t(64878),
                el = t(23974),
                et = t(34781),
                en = t(85873),
                ei = t(26057),
                eo = t(7316),
                er = t(46311);
            let ea = !1,
                es = !1,
                ed = e => {
                    var l;
                    let {
                        salesPlan: t,
                        checkout: i,
                        orderBumps: o,
                        shippings: r,
                        containsPhysicalProduct: a,
                        pixels: s,
                        creditCardAcquirer: d,
                        token: c,
                        discounts: u
                    } = e, {
                        dict: m,
                        language: M,
                        countryCode: Q,
                        currency: W
                    } = (0, J.g)(), Z = null === (l = t.store.registeredAcquires) || void 0 === l ? void 0 : l.find(e => void 0 !== e.clientId && "STRIPE" === e.acquirer.name && e.acquirer._id === (null == i ? void 0 : i.CREDIT_CARD)), Y = (0, q.useMemo)(() => ({
                        isPhoneRequired: void 0 === (null == i ? void 0 : i.isPhoneRequired) || (null == i ? void 0 : i.isPhoneRequired),
                        isDocumentRequired: void 0 === (null == i ? void 0 : i.isDocumentRequired) || (null == i ? void 0 : i.isDocumentRequired),
                        isEmailRequired: void 0 === (null == i ? void 0 : i.isEmailRequired) || (null == i ? void 0 : i.isEmailRequired)
                    }), [null == i ? void 0 : i.isDocumentRequired, null == i ? void 0 : i.isEmailRequired, null == i ? void 0 : i.isPhoneRequired]), z = (0, q.useRef)(null), {
                        pixelsService: ed
                    } = (0, q.useContext)(v.O), ec = (0, q.useMemo)(() => r.find(e => {
                        let {
                            preSelected: l
                        } = e;
                        return l
                    }), [r]), {
                        control: eu,
                        formState: {
                            isSubmitting: em,
                            errors: ep
                        },
                        watch: ev,
                        setValue: eh,
                        register: ex,
                        handleSubmit: ey
                    } = (0, X.cI)({
                        resolver: (0, O.X)(K(m)),
                        defaultValues: {
                            locale: "".concat(M, "-").concat(Q),
                            isStripe: void 0 !== Z,
                            step: 1,
                            quantity: 1,
                            containsPhysicalProduct: a,
                            installments: 1,
                            phone: "",
                            document: "",
                            number: "",
                            billingCep: "",
                            billingStreet: "",
                            billingNumber: "",
                            billingComplement: "",
                            billingCity: "",
                            billingState: "",
                            billingNeighborhood: "",
                            useShippingAsBilling: a,
                            quantitySelectorEnabled: null == i ? void 0 : i.isQuantitySelectorEnabled,
                            shipping: null == ec ? void 0 : ec._id,
                            paymentMethod: "BR" === Q && (null == i ? void 0 : i.acceptedPaymentMethods.includes(h.XL.PIX)) ? h.XL.PIX : h.XL.CREDIT_CARD,
                            ...Y
                        }
                    }), {
                        qty: ef,
                        additionalSalesPlan: eg,
                        shippingValue: eC,
                        subTotal: eb,
                        total: eE,
                        coupon: eN,
                        setShippingValue: ej,
                        setDiscount: eR
                    } = (0, w.p)(e => {
                        let {
                            qty: l,
                            additionalSalesPlan: t,
                            shippingValue: n,
                            subTotal: i,
                            total: o,
                            coupon: r,
                            discount: a,
                            setShippingValue: s,
                            setDiscount: d
                        } = e;
                        return {
                            qty: l,
                            coupon: r,
                            discount: a,
                            additionalSalesPlan: t,
                            shippingValue: n,
                            subTotal: i,
                            total: o,
                            setShippingValue: s,
                            setDiscount: d
                        }
                    }), [e_, eD] = (0, q.useState)(""), [ew, eI] = (0, q.useState)(), [eP, eA] = (0, q.useState)(), [eS, eT] = (0, q.useState)(), [eL, eO] = (0, q.useState)(), [ek, eM] = (0, q.useState)(), [eB, eU] = (0, q.useState)(), [eq, eX] = (0, q.useState)(), [eV, eF] = (0, q.useState)(!1), [eH, eG] = (0, q.useState)(!1), [eQ, eW] = (0, q.useState)(), [eZ, eY, ez, eK, eJ, e$, e0, e1, e2, e3, e4, e7, e5, e8, e6] = ev(["fullName", "email", "document", "phone", "cep", "state", "city", "street", "number", "complement", "paymentMethod", "shipping", "cardNumber", "step", "useShippingAsBilling"]), e9 = (0, U.useRouter)(), le = (0, q.useRef)(null), ll = (0, q.useMemo)(() => null == o ? void 0 : o.filter(e => {
                        let {
                            onSelectShippings: l
                        } = e;
                        return l.some(e => e === e7 || "all" === e)
                    }), [o, e7]), lt = (0, U.useSearchParams)(), {
                        installments: ln,
                        isFetchingInstallments: li
                    } = (0, y.l)({
                        checkout: i,
                        creditCardAcquirer: d,
                        creditCardNumber: e5,
                        paymentMethod: e4,
                        salesPlan: t,
                        setValue: eh,
                        total: eE,
                        countryCode: Q
                    });
                    (0, N.k)(t._id, t.store._id, c), (0, f.N)({
                        cep: eJ,
                        neighborhood: null == eq ? void 0 : eq.neighborhood,
                        city: e0,
                        complement: e3,
                        containsPhysicalProduct: a,
                        document: ez,
                        email: eY,
                        fullName: eZ,
                        number: e2,
                        phone: eK,
                        selectedShipping: e7,
                        state: e$,
                        street: e1,
                        step: e8,
                        isMultiStep: !0,
                        salesPlanId: t._id,
                        storeId: t.store._id,
                        token: c,
                        dict: m,
                        ...Y
                    }), (0, x.J)(null == i ? void 0 : i.backRedirectUrl), (0, b.L)({
                        email: eY,
                        fullName: eZ,
                        phone: eK,
                        hasGeneratedOrder: eH,
                        payerDocument: ez,
                        salesPlanId: t._id,
                        storeId: t.store._id
                    }), (0, C.u)({
                        pixels: s,
                        storeType: t.store.type
                    }), (0, g.N)({
                        pixels: s,
                        subTotal: eb
                    }), (0, E.W)({
                        setValue: eh
                    });
                    let lo = (0, q.useRef)(),
                        lr = (0, q.useRef)(null),
                        la = (0, q.useMemo)(() => u.find(e => e.active && e.paymentMethod === h.XL.PIX && (e.plansId.includes(t._id) || e.plansId.includes("all"))), [u, t._id]),
                        ls = (0, q.useMemo)(() => la ? la.discountType === I.Lb.PERCENTUAL ? eE * la.discount / 100 : la.discountType === I.Lb.FIXED ? la.discount : 0 : 0, [la, eE]);
                    (0, q.useEffect)(() => {
                        console.log(ep)
                    }, [ep]), (0, q.useEffect)(() => {
                        e4 && (e4 === h.XL.PIX ? eR(ls) : eR(0))
                    }, [e4, ls, eR]);
                    let ld = (0, q.useCallback)(async function(e) {
                            let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            console.log("Busca cep");
                            let t = e.target.value.replace(/\D/g, "");
                            if (eh(l ? "billingCep" : "cep", (0, R.a)(t), {
                                    shouldValidate: !0
                                }), 8 === t.length && /^[0-9]{8}$/.test(t)) try {
                                eF(!0);
                                let {
                                    data: e
                                } = await D.N.findCep(t);
                                l ? (e.logradouro && eh("billingStreet", e.logradouro, {
                                    shouldValidate: !0
                                }), eh("billingState", e.uf, {
                                    shouldValidate: !0
                                }), eh("billingCity", e.localidade, {
                                    shouldValidate: !0
                                }), eh("billingNeighborhood", e.bairro, {
                                    shouldValidate: !0
                                })) : (e.logradouro && eh("street", e.logradouro, {
                                    shouldValidate: !0
                                }), eh("state", e.uf, {
                                    shouldValidate: !0
                                }), eh("city", e.localidade, {
                                    shouldValidate: !0
                                }), eD(e.bairro), eX({
                                    street: e.logradouro,
                                    state: e.uf,
                                    city: e.localidade,
                                    neighborhood: e.bairro,
                                    cep: t
                                }))
                            } catch (e) {
                                V.Am.error(m.CEP_ERROR_MESSAGE, {
                                    autoClose: 3e3,
                                    position: "top-center",
                                    hideProgressBar: !0
                                }), console.error("Erro ao buscar CEP:", e)
                            } finally {
                                eF(!1)
                            }
                        }, [eh, m.CEP_ERROR_MESSAGE]),
                        lc = ey(async e => {
                            if (1 === e.step) {
                                eh("step", 2);
                                return
                            }
                            if (a && 2 === e.step) {
                                eh("step", 3);
                                return
                            }
                            try {
                                var l, n, o, r, c, u, p, v, x, y, f, g, C, b, E, N, R, D, w, I, L, O, B;
                                let a, k, U;
                                if ((null == z ? void 0 : z.current) && Z) {
                                    let {
                                        token: e,
                                        error: l
                                    } = await z.current.generateCardToken();
                                    if (a = null != e ? e : void 0, l) throw l
                                }
                                let q = {};
                                lt.forEach((e, l) => {
                                    l.includes("subid") && (q[l] = e)
                                });
                                try {
                                    k = JSON.parse(null !== (v = (0, A.ej)(t._id)) && void 0 !== v ? v : "")
                                } catch (e) {
                                    console.log("error get cookie")
                                }
                                let {
                                    clearSale: X,
                                    cyberSource: F
                                } = (0, S.E)(), H = e4 === h.XL.CREDIT_CARD ? {
                                    street: e.useShippingAsBilling ? null !== (x = e.street) && void 0 !== x ? x : "" : null !== (y = e.billingStreet) && void 0 !== y ? y : "",
                                    complement: e.useShippingAsBilling ? null !== (f = e.complement) && void 0 !== f ? f : "" : null !== (g = e.billingComplement) && void 0 !== g ? g : "",
                                    number: e.useShippingAsBilling ? Number(e.number) : Number(e.billingNumber),
                                    neighborhood: e.useShippingAsBilling ? null != e_ ? e_ : "" : null !== (C = e.billingNeighborhood) && void 0 !== C ? C : "",
                                    city: e.useShippingAsBilling ? null !== (b = e.city) && void 0 !== b ? b : "" : null !== (E = e.billingCity) && void 0 !== E ? E : "",
                                    state: e.useShippingAsBilling ? null !== (N = e.state) && void 0 !== N ? N : "" : null !== (R = e.billingState) && void 0 !== R ? R : "",
                                    cep: e.useShippingAsBilling ? null !== (D = e.cep) && void 0 !== D ? D : "" : null !== (w = e.billingCep) && void 0 !== w ? w : ""
                                } : void 0, G = null === (l = e.expirationDate) || void 0 === l ? void 0 : l.split("/")[0], Y = "20".concat(null === (n = e.expirationDate) || void 0 === n ? void 0 : n.split("/")[1]);
                                e.paymentMethod === h.XL.CREDIT_CARD && ((null == d ? void 0 : d.name) === h.dU.CODIGUZ || (null == d ? void 0 : d.name) === h.dU.GHOSTS_PAY_V2) && e.cardHolder && e.cvc && e.installments && e.cardNumber && G && Y && (U = await (0, eo.s)({
                                    holderName: e.cardHolder,
                                    amount: eE,
                                    cvv: e.cvc,
                                    expMonth: G,
                                    expYear: Y,
                                    installments: e.installments,
                                    number: e.cardNumber,
                                    creditCardAcquirerName: d.name
                                }));
                                let {
                                    data: K
                                } = await _.Z.create({
                                    payerCpf: null === (o = e.payerCpf) || void 0 === o ? void 0 : o.replace(/\D/g, ""),
                                    payerName: e.fullName,
                                    paymentMethod: e.paymentMethod,
                                    installments: e.installments ? Number(e.installments) : 1,
                                    quantity: e.quantity,
                                    cardholder: e.cardHolder,
                                    cardNumber: null === (r = e.cardNumber) || void 0 === r ? void 0 : r.replace(/\s/g, ""),
                                    expirationMonth: G,
                                    expirationYear: Y,
                                    securityCode: e.cvc,
                                    payerEmail: e.email,
                                    payerPhone: e.phone,
                                    salesPlanId: t._id,
                                    shippingId: e.shipping,
                                    checkoutSessionId: null == k ? void 0 : k.id,
                                    additionalSalesPlans: eg.map(e => {
                                        let {
                                            _id: l
                                        } = e;
                                        return l
                                    }),
                                    templateId: null == lt ? void 0 : lt.get("templateId"),
                                    refusedOrderId: eQ,
                                    kwaiClickId: (0, T._)(),
                                    tiktokClickId: (0, er.j)(),
                                    couponId: null == eN ? void 0 : eN._id,
                                    discountId: e.paymentMethod === h.XL.PIX ? null == la ? void 0 : la._id : void 0,
                                    cyberSource: F,
                                    clearSale: X,
                                    address: {
                                        cep: e.cep,
                                        city: e.city,
                                        number: Number(e.number),
                                        neighborhood: e_,
                                        state: e.state,
                                        street: e.street,
                                        complement: e.complement
                                    },
                                    cardToken: a,
                                    cardId: U,
                                    billingAddress: H,
                                    currency: W,
                                    language: M,
                                    country: Q
                                }, {
                                    utm_campaign: lt.get("utm_campaign"),
                                    utm_medium: lt.get("utm_medium"),
                                    utm_term: lt.get("utm_term"),
                                    utm_source: lt.get("utm_source"),
                                    utm_content: lt.get("utm_content"),
                                    xcod: lt.get("xcod"),
                                    ...q
                                });
                                eT(K.order.value), eG(!0);
                                try {
                                    (0, A.kT)(t._id)
                                } catch (e) {
                                    console.log("error delete cookie")
                                }
                                let J = t.products.map(e => ({
                                    id: e.product._id,
                                    name: e.product.name,
                                    quantity: ef,
                                    value: (0, P.X)(t)
                                }));
                                eg.length > 0 && eg.forEach(e => {
                                    e.products.forEach(l => {
                                        J.push({
                                            id: l.product._id,
                                            name: l.product.name,
                                            value: (0, P.X)(e),
                                            quantity: l.quantity
                                        })
                                    })
                                });
                                let $ = "".concat("https://nextapiv3.com", "/checkout/events/").concat(K.order._id),
                                    ee = new EventSource($),
                                    el = async () => {
                                        var e, l;
                                        if (es) return;
                                        let n = await (0, j.Z)(K.order._id);
                                        if (n && n.status === h.iF.APPROVED) {
                                            if (es = !0, e4 !== h.XL.PIX || ea || (ea = !0, await ed.track({
                                                    event: "CompraPix",
                                                    pixels: s,
                                                    additionalData: {
                                                        total: n.value,
                                                        currency: W,
                                                        paymentMethod: h.XL.PIX,
                                                        contentType: "product",
                                                        quantity: ef,
                                                        subTotal: eb,
                                                        shippingValue: eC,
                                                        transactionId: n._id,
                                                        items: J
                                                    }
                                                })), null == t ? void 0 : null === (l = t.store) || void 0 === l ? void 0 : null === (e = l.checkout) || void 0 === e ? void 0 : e.externalThanksPageLink) {
                                                let e = [{
                                                        key: "nome",
                                                        value: n.payerName
                                                    }, {
                                                        key: "email",
                                                        value: n.payerEmail
                                                    }, {
                                                        key: "telefone",
                                                        value: n.payerPhone
                                                    }, {
                                                        key: "documento",
                                                        value: n.payerCpf
                                                    }, {
                                                        key: "utm_campaign",
                                                        value: lt.get("utm_campaign")
                                                    }, {
                                                        key: "utm_medium",
                                                        value: lt.get("utm_medium")
                                                    }, {
                                                        key: "utm_term",
                                                        value: lt.get("utm_term")
                                                    }, {
                                                        key: "utm_source",
                                                        value: lt.get("utm_source")
                                                    }, {
                                                        key: "utm_content",
                                                        value: lt.get("utm_content")
                                                    }, {
                                                        key: "xcod",
                                                        value: lt.get("xcod")
                                                    }, ...Object.entries(q).map(e => {
                                                        let [l, t] = e;
                                                        return {
                                                            key: l,
                                                            value: t
                                                        }
                                                    })].filter(e => e.value).map(e => "".concat(e.key, "=").concat(encodeURIComponent(e.value))).join("&"),
                                                    l = e ? "".concat(t.store.checkout.externalThanksPageLink, "?").concat(e) : t.store.checkout.externalThanksPageLink;
                                                window.location.replace(l)
                                            } else e9.push("/thanks/".concat(K.order._id))
                                        }
                                    };
                                window.document && (window.document.removeEventListener("visibilitychange", el), window.document.addEventListener("visibilitychange", () => {
                                    "visible" === window.document.visibilityState && el()
                                })), ee.onmessage = async e => {
                                    e.data === "".concat(K.order._id, "-APPROVED") && el()
                                }, (e4 === h.XL.PIX || eQ) && (V.Am.success(m.PIX_SUCCESS_MESSAGE, {
                                    autoClose: 3e3,
                                    position: "top-center",
                                    hideProgressBar: !0
                                }), eI(K.paymentInfo.qrCode), eA(K.paymentInfo.base64QrCode), await ed.track({
                                    event: "PixGerado",
                                    pixels: s
                                })), e4 === h.XL.BOLETO && (V.Am.success(m.BOLETO_SUCCESS_MESSAGE, {
                                    autoClose: 3e3,
                                    position: "top-center",
                                    hideProgressBar: !0
                                }), eO(K.paymentInfo.digitableLine), eM(K.paymentInfo.barCode), eU(K.paymentInfo.boletoDueDate), await ed.track({
                                    event: "BoletoGerado",
                                    pixels: s
                                })), e4 === h.XL.CREDIT_CARD && (null == K ? void 0 : null === (c = K.paymentInfo) || void 0 === c ? void 0 : c.status) === h.iF.APPROVED ? (await ed.track({
                                    event: "CompraCart\xe3o",
                                    pixels: s,
                                    additionalData: {
                                        total: K.order.value,
                                        currency: W,
                                        paymentMethod: h.XL.CREDIT_CARD,
                                        contentType: "product",
                                        quantity: ef,
                                        shippingValue: eC,
                                        subTotal: eb,
                                        transactionId: null == K ? void 0 : K.order._id,
                                        items: J
                                    }
                                }), (null == t ? void 0 : null === (L = t.store) || void 0 === L ? void 0 : null === (I = L.checkout) || void 0 === I ? void 0 : I.externalThanksPageLink) ? window.location.replace(t.store.checkout.externalThanksPageLink) : e9.push("/thanks/".concat(K.order._id))) : e4 === h.XL.CREDIT_CARD && (null == K ? void 0 : null === (u = K.paymentInfo) || void 0 === u ? void 0 : u.status) === h.iF.REFUSED && (null == i ? void 0 : i.instantRecovery) ? (null === (O = lo.current) || void 0 === O || O.toggle(), eW(null == K ? void 0 : null === (B = K.order) || void 0 === B ? void 0 : B._id)) : e4 === h.XL.CREDIT_CARD && (null == K ? void 0 : null === (p = K.paymentInfo) || void 0 === p ? void 0 : p.status) === h.iF.REFUSED && V.Am.error(m.CREDIT_CARD_REFUSED_MESSAGE, {
                                    autoClose: 3e3,
                                    position: "top-center",
                                    hideProgressBar: !0
                                })
                            } catch (l) {
                                k.av({
                                    email: null == e ? void 0 : e.email,
                                    username: null == e ? void 0 : e.fullName
                                }), k.uT("Error ao tentar gerar o pagamento"), k.Tb(l), V.Am.error(m.PAYMENT_ERROR_MESSAGE, {
                                    autoClose: 3e3,
                                    position: "top-center",
                                    hideProgressBar: !0
                                })
                            }
                        }),
                        lu = (0, q.useCallback)(() => {
                            eL && (B()(eL), V.Am.success(m.COPY_SUCCESS_MESSAGE, {
                                autoClose: 3e3,
                                position: "top-center",
                                hideProgressBar: !0
                            }))
                        }, [eL, m]),
                        lm = (0, q.useCallback)(() => {
                            var e, l;
                            null === (e = lo.current) || void 0 === e || e.toggle(), eh("installments", 1), null === (l = lr.current) || void 0 === l || l.click()
                        }, [eh]),
                        lp = (0, q.useCallback)(() => 1 === e8 ? (0, n.jsxs)("div", {
                            children: [Z && (0, n.jsx)($.default, {
                                src: "https://js.stripe.com/v3/",
                                strategy: "lazyOnload",
                                onLoad: () => {
                                    console.log("Stripe.js carregado com sucesso!")
                                },
                                onError: () => {
                                    console.error("Erro ao carregar Stripe.js"), window.location.reload()
                                }
                            }), (0, n.jsx)("div", {
                                className: "flex flex-col gap-y-6",
                                children: (0, n.jsx)(ee.G, {
                                    control: eu,
                                    errors: ep,
                                    register: ex,
                                    checkout: i,
                                    countryCode: Q,
                                    dict: m,
                                    showLabels: !0
                                })
                            }), (0, n.jsx)(G.z, {
                                ref: lr,
                                type: "submit",
                                className: "py-5 w-full rounded-2xl mt-8 font-medium outline-none transaction-all border duration-400 bg-primary text-white hover:border-primary disabled:bg-opacity-30",
                                theme: null == i ? void 0 : i.theme,
                                children: m.CONTINUE_BUTTON
                            }), (0, n.jsx)(en.J, {
                                dict: m,
                                checkout: i,
                                showFooter: L.q,
                                BlueCheckIcon: F.Z,
                                SafeIcon: H.Z
                            })]
                        }) : ew && eS ? (0, n.jsx)(p.l, {
                            pixCode: ew,
                            pixQrCode: eP,
                            isOpen: !!ew,
                            pixValue: eS.toLocaleString("pt-BR", {
                                currency: "BRL",
                                style: "currency"
                            }),
                            theme: null == i ? void 0 : i.theme,
                            onClose: () => {}
                        }) : ek && eL ? (0, n.jsx)(ei.n, {
                            dict: m,
                            boletoDueDate: eB,
                            barCode: ek,
                            digitableLines: eL,
                            copyDigitableLines: lu,
                            checkout: i,
                            barcodeRef: le
                        }) : 2 === e8 && a ? (0, n.jsxs)("div", {
                            children: [(0, n.jsx)("h2", {
                                className: "text-2xl text-blue font-medium lg:text-3xl",
                                children: m.ADDRESS_TITLE
                            }), (0, n.jsx)("p", {
                                className: "text-gray-700",
                                children: m.ADDRESS_SUBTITLE
                            }), (0, n.jsx)(el.z, {
                                control: eu,
                                errors: ep,
                                register: ex,
                                setValue: eh,
                                onCepChange: ld,
                                countryCode: Q,
                                address: eq,
                                shippings: r,
                                checkout: i,
                                dict: m,
                                showLabels: !0,
                                cepWatch: eJ
                            }), (0, n.jsx)(G.z, {
                                ref: lr,
                                type: "submit",
                                disabled: eV,
                                className: "py-5 w-full rounded-2xl mt-8 font-medium outline-none transaction-all border duration-400 bg-primary hover:border-primary text-white disabled:bg-opacity-30",
                                theme: null == i ? void 0 : i.theme,
                                children: m.CONTINUE_BUTTON
                            })]
                        }) : (0, n.jsxs)("div", {
                            children: [(0, n.jsx)(et.Q, {
                                control: eu,
                                errors: ep,
                                register: ex,
                                setValue: eh,
                                paymentMethod: e4,
                                checkout: i,
                                countryCode: Q,
                                currency: W,
                                language: M,
                                installments: ln,
                                isFetchingInstallments: li,
                                selectedPixDiscount: la,
                                filteredOrderBumps: ll,
                                isStripeAndInfo: Z,
                                containsPhysicalProduct: a,
                                dict: m,
                                stripeRef: z,
                                onCepChange: ld,
                                useShippingAsBilling: e6
                            }), (0, n.jsxs)(G.z, {
                                ref: lr,
                                type: "submit",
                                className: "flex justify-center items-center gap-x-4 py-5 w-full rounded-2xl mt-8 font-medium outline-none transaction-all border duration-400 bg-primary text-white hover:border-primary disabled:bg-opacity-30",
                                disabled: em || eV,
                                theme: null == i ? void 0 : i.theme,
                                children: [(null == i ? void 0 : i.payButtonText) && (null == i ? void 0 : i.payButtonText) !== "" ? (0, n.jsx)("span", {
                                    children: i.payButtonText
                                }) : (0, n.jsx)("span", {
                                    children: em ? m.PAYING_BUTTON : m.PAY_BUTTON
                                }), em ? (0, n.jsx)("div", {
                                    className: "flex items-center justify-center",
                                    children: (0, n.jsx)("div", {
                                        className: "w-6 h-6 border-4 border-t-1 border-t-primary border-gray-200 rounded-full animate-spin"
                                    })
                                }) : null]
                            }), (0, n.jsx)("p", {
                                className: "mt-6 text-gray-400 text-center",
                                children: m.TERMS_AGREEMENT
                            })]
                        }), [ek, eB, i, a, eu, lu, eL, m, ll, eV, em, ld, e4, ew, eP, ex, la, e8, eS, Q, eh, Z, W, M, ln, li, ep, eq, r, e6, eJ]);
                    return (0, q.useEffect)(() => {
                        ef && "number" == typeof ef && eh("quantity", ef, {
                            shouldValidate: !0
                        })
                    }, [ef, eh]), {
                        step: e8,
                        pixQrCode: eP,
                        barCode: ek,
                        instantRecoveryModalRef: lo,
                        total: eE,
                        onSubmitHandler: lc,
                        renderContent: lp,
                        onClickPayWithPixHandler: lm,
                        setRefusedOrderId: eW,
                        setValue: eh
                    }
                };
            var ec = e => {
                var l, t;
                let {
                    step: a,
                    pixQrCode: s,
                    barCode: d,
                    instantRecoveryModalRef: c,
                    total: u,
                    onSubmitHandler: p,
                    renderContent: v,
                    onClickPayWithPixHandler: h,
                    setRefusedOrderId: x,
                    setValue: y
                } = ed(e);
                return (0, n.jsxs)("div", {
                    className: "mt-6 bg-white rounded-xl p-6 shadow-md lg:bg-transparent lg:shadow-none lg:pt-14",
                    children: [(0, n.jsx)("div", {
                        className: "relative mb-6 lg:mb-8",
                        children: (0, n.jsx)("div", {
                            className: "w-full px-8",
                            children: (0, n.jsx)(m, {
                                containsPhysicalProduct: e.containsPhysicalProduct,
                                step: a,
                                theme: null === (l = e.checkout) || void 0 === l ? void 0 : l.theme
                            })
                        })
                    }), (0, n.jsxs)("form", {
                        className: "w-full flex flex-col",
                        onSubmit: p,
                        children: [!(a > 1) || s || d ? null : (0, n.jsx)("button", {
                            type: "button",
                            className: "w-fit mb-6",
                            onClick: () => y("step", a - 1),
                            children: (0, n.jsx)(i.default, {
                                src: o,
                                alt: "\xcdcone de voltar",
                                width: 24,
                                height: 24
                            })
                        }), v()]
                    }), (null === (t = e.checkout) || void 0 === t ? void 0 : t.instantRecovery) ? (0, n.jsx)(r.X, {
                        ref: c,
                        checkout: e.checkout,
                        totalValue: u,
                        onClickPayWithPix: h,
                        onClose: () => x(void 0)
                    }) : null]
                })
            }
        },
        84732: function(e, l, t) {
            "use strict";
            t.d(l, {
                YourCart: function() {
                    return m
                }
            });
            var n = t(57437),
                i = t(75741),
                o = t(65194),
                r = t(51549),
                a = t(25787),
                s = t(45973),
                d = t(2265),
                c = t(23958),
                u = t(84450);
            let m = (0, d.memo)(function(e) {
                let {
                    salesPlan: l,
                    containsPhysicalProduct: t,
                    checkout: m
                } = e, {
                    dict: p,
                    countryCode: v
                } = (0, u.g)(), {
                    shippingValue: h,
                    qty: x,
                    total: y,
                    subTotal: f,
                    additionalSalesPlan: g,
                    instantRecoveryDiscountValue: C,
                    coupon: b,
                    discount: E,
                    setTotal: N,
                    setSubTotal: j,
                    setQty: R
                } = (0, r.p)(e => {
                    let {
                        shippingValue: l,
                        qty: t,
                        subTotal: n,
                        total: i,
                        additionalSalesPlan: o,
                        instantRecoveryDiscountValue: r,
                        coupon: a,
                        discount: s,
                        setTotal: d,
                        setSubTotal: c,
                        setQty: u
                    } = e;
                    return {
                        shippingValue: l,
                        qty: t,
                        total: i,
                        subTotal: n,
                        additionalSalesPlan: o,
                        instantRecoveryDiscountValue: r,
                        coupon: a,
                        discount: s,
                        setTotal: d,
                        setSubTotal: c,
                        setQty: u
                    }
                }), _ = (null == m ? void 0 : m.showSubtotal) === void 0 || (null == m ? void 0 : m.showSubtotal), D = (0, d.useMemo)(() => b ? (0, a.s)(y, b) : 0, [b, y]);
                return (0, d.useEffect)(() => {
                    1 === l.products.length && R(l.products[0].quantity)
                }, [l.products, R]), (0, d.useEffect)(() => {
                    let e = 0,
                        t = null != h ? h : 0,
                        n = l.salesPrice * x,
                        i = n + t;
                    g.length > 0 ? (n += e = g.reduce((e, l) => e + l.salesPrice, 0), i += e) : e = 0, C && (i -= C), j(n), N(i)
                }, [g, x, l.salesPrice, h, j, N, C]), (0, n.jsxs)("div", {
                    className: "bg-white shadow-md rounded-xl px-6 py-8 lg:shadow-none lg:bg-transparent lg:max-w-md lg:mx-auto ".concat((null == m ? void 0 : m.logo) ? "pt-16 lg:pt-28" : "pt-6 lg:pt-10"),
                    children: [(null == m ? void 0 : m.showYourCartText) === void 0 || m.showYourCartText ? (0, n.jsxs)("header", {
                        className: "flex items-center justify-between mb-6",
                        children: [(0, n.jsx)("span", {
                            className: "text-lg",
                            children: p.YOUR_CART
                        }), (0, n.jsx)("span", {
                            className: "w-3 h-3 rounded-full bg-primary"
                        })]
                    }) : null, (0, n.jsx)("main", {
                        children: (0, n.jsxs)("ul", {
                            className: "flex flex-col gap-y-4",
                            id: "items",
                            children: [l.products.map(e => {
                                var t;
                                return (0, n.jsxs)("li", {
                                    className: "flex items-center justify-between border-b pb-4",
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex items-center gap-x-3 flex-1",
                                        children: [(0, n.jsx)("div", {
                                            className: "border rounded-xl w-20 h-20 flex-shrink-0 relative",
                                            children: (0, n.jsx)(o.CustomImage, {
                                                src: null === (t = e.product.img) || void 0 === t ? void 0 : t.url,
                                                fullUrl: !0,
                                                className: "rounded-xl object-contain",
                                                priority: !0,
                                                fill: !0,
                                                alt: "".concat(p.PRODUCT_IMAGE_ALT, " ").concat(e.product.name)
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [(0, n.jsx)("span", {
                                                className: "font-medium",
                                                children: e.product.name
                                            }), (0, n.jsx)("span", {
                                                className: "text-gray-500",
                                                children: e.product.description
                                            })]
                                        })]
                                    }), (null == m ? void 0 : m.isQuantitySelectorEnabled) && 1 === l.products.length ? (0, n.jsxs)("div", {
                                        className: "flex items-center gap-x-2",
                                        children: [(0, n.jsx)("button", {
                                            type: "button",
                                            className: "text-3xl text-red-400",
                                            onClick: () => {
                                                1 !== x && R(x - 1)
                                            },
                                            children: "-"
                                        }), (0, n.jsx)("input", {
                                            type: "text",
                                            value: x,
                                            className: "w-8 text-center bg-transparent"
                                        }), (0, n.jsx)("button", {
                                            type: "button",
                                            className: "text-2xl text-green-400",
                                            onClick: () => {
                                                R(x + 1)
                                            },
                                            children: "+"
                                        })]
                                    }) : (0, n.jsxs)("span", {
                                        className: "text-gray-400",
                                        children: [e.quantity, "x"]
                                    })]
                                }, e.product._id)
                            }), g.map(e => {
                                var l, t;
                                return (0, n.jsxs)("li", {
                                    className: "flex items-center justify-between border-b pb-4",
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex items-center gap-x-3 flex-1",
                                        children: [(0, n.jsx)("div", {
                                            className: "border rounded-xl w-20 h-20 flex-shrink-0 relative",
                                            children: (0, n.jsx)(o.CustomImage, {
                                                src: null !== (t = null === (l = e.img) || void 0 === l ? void 0 : l.url) && void 0 !== t ? t : "",
                                                fullUrl: !0,
                                                className: "rounded-xl object-contain",
                                                fill: !0,
                                                alt: "".concat(p.PRODUCT_IMAGE_ALT, " ").concat(e.name)
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [(0, n.jsx)("span", {
                                                className: "font-medium",
                                                children: e.name
                                            }), (0, n.jsx)("span", {
                                                className: "text-gray-500",
                                                children: e.description
                                            })]
                                        })]
                                    }), (0, n.jsx)("span", {
                                        className: "text-gray-400",
                                        children: "1x"
                                    })]
                                }, e._id)
                            })]
                        })
                    }), (0, n.jsxs)("footer", {
                        className: "flex flex-col gap-y-2 mt-6",
                        children: [_ ? (0, n.jsxs)("div", {
                            className: "flex items-center justify-between text-sm text-gray-500",
                            children: [(0, n.jsx)("span", {
                                children: p.SUBTOTAL
                            }), (0, n.jsx)("span", {
                                id: "subTotal",
                                children: (0, s.x)(f, v)
                            })]
                        }) : null, t ? (0, n.jsxs)("div", {
                            className: "flex items-center justify-between text-sm text-gray-500",
                            children: [(0, n.jsx)("span", {
                                children: p.SHIPPING
                            }), "number" == typeof h ? (0, n.jsx)("span", {
                                id: "shippingValue",
                                children: (0, s.x)(h, v)
                            }) : "-"]
                        }) : null, C ? (0, n.jsxs)("div", {
                            className: "flex items-center justify-between text-sm text-gray-500",
                            children: [(0, n.jsx)("span", {
                                children: p.DISCOUNT
                            }), (0, n.jsxs)("span", {
                                className: "text-green-500",
                                id: "discount",
                                children: ["- ", (0, s.x)(C, v)]
                            })]
                        }) : null, E ? (0, n.jsxs)("div", {
                            className: "flex items-center justify-between text-sm text-gray-500",
                            children: [(0, n.jsx)("span", {
                                children: p.PIX_DISCOUNT
                            }), (0, n.jsxs)("span", {
                                className: "text-green-500",
                                id: "discountPixValue",
                                children: ["- ", (0, s.x)(E, v)]
                            })]
                        }) : null, b ? (0, n.jsxs)("div", {
                            className: "flex items-center justify-between text-sm text-gray-500",
                            children: [(0, n.jsx)("span", {
                                children: p.COUPON_DISCOUNT
                            }), (0, n.jsxs)("span", {
                                className: "text-green-500",
                                id: "couponDiscountValue",
                                children: ["- ", (0, s.x)(D, v)]
                            })]
                        }) : null, (0, c.y)(null == m ? void 0 : m.showCoupon) ? (0, n.jsx)(i.w, {
                            salesPlanId: l._id,
                            storeId: l.store._id
                        }) : null, (0, n.jsxs)("div", {
                            className: "flex items-center justify-between mt-4 ".concat(_ || t ? "border-t pt-4" : ""),
                            children: [(0, n.jsx)("span", {
                                className: "text-gray-500",
                                children: p.TOTAL
                            }), (0, n.jsx)("span", {
                                id: "total",
                                children: (0, s.x)(y - D - E, v)
                            })]
                        })]
                    })]
                })
            })
        },
        4437: function(e, l, t) {
            "use strict";
            t.d(l, {
                default: function() {
                    return ev
                }
            });
            var n = t(57437),
                i = t(9292),
                o = t(58063),
                r = t(19433),
                a = t(14488),
                s = t(41254),
                d = t(6056),
                c = t(62432),
                u = t(89167),
                m = t(29467),
                p = t(51549),
                v = t(64451),
                h = t(11374),
                x = t(67753),
                y = t(80042),
                f = t.n(y),
                g = t(28364),
                C = t.n(g),
                b = t(16463),
                E = t(2265),
                N = t(39343),
                j = t(23580),
                R = t(19563),
                _ = t(89164),
                D = t(48059),
                w = t.n(D);
            let I = (0, E.forwardRef)(function(e, l) {
                var t, i, o, r, a, s, d, c, u, m, p, v, h, x, y, f, g, C, b, E, N, j, R, _;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("button", {
                        ...e,
                        ref: l,
                        className: w().dynamic([
                            ["aca21f507e0b6456", [null !== (h = null == e ? void 0 : null === (t = e.theme) || void 0 === t ? void 0 : t.primaryColor) && void 0 !== h ? h : "#32C770", null !== (x = null == e ? void 0 : null === (i = e.theme) || void 0 === i ? void 0 : i.textColor) && void 0 !== x ? x : "white", null !== (y = null == e ? void 0 : null === (o = e.theme) || void 0 === o ? void 0 : o.primaryColor) && void 0 !== y ? y : "#32C770", null !== (f = null == e ? void 0 : null === (r = e.theme) || void 0 === r ? void 0 : r.primaryColor) && void 0 !== f ? f : "#32C770"]]
                        ]) + " " + (e && null != e.className && e.className || ""),
                        children: e.children
                    }), (0, n.jsx)(w(), {
                        id: "aca21f507e0b6456",
                        dynamic: [null !== (g = null == e ? void 0 : null === (a = e.theme) || void 0 === a ? void 0 : a.primaryColor) && void 0 !== g ? g : "#32C770", null !== (C = null == e ? void 0 : null === (s = e.theme) || void 0 === s ? void 0 : s.textColor) && void 0 !== C ? C : "white", null !== (b = null == e ? void 0 : null === (d = e.theme) || void 0 === d ? void 0 : d.primaryColor) && void 0 !== b ? b : "#32C770", null !== (E = null == e ? void 0 : null === (c = e.theme) || void 0 === c ? void 0 : c.primaryColor) && void 0 !== E ? E : "#32C770"],
                        children: "button.__jsx-style-dynamic-selector{background-color:".concat(null !== (N = null == e ? void 0 : null === (u = e.theme) || void 0 === u ? void 0 : u.primaryColor) && void 0 !== N ? N : "#32C770", ";color:").concat(null !== (j = null == e ? void 0 : null === (m = e.theme) || void 0 === m ? void 0 : m.textColor) && void 0 !== j ? j : "white", ";border-color:").concat(null !== (R = null == e ? void 0 : null === (p = e.theme) || void 0 === p ? void 0 : p.primaryColor) && void 0 !== R ? R : "#32C770", "}button.__jsx-style-dynamic-selector:hover{color:#081D30;background-color:transparent;border-color:").concat(null !== (_ = null == e ? void 0 : null === (v = e.theme) || void 0 === v ? void 0 : v.primaryColor) && void 0 !== _ ? _ : "#32C770", "}")
                    })]
                })
            });
            var P = t(80182),
                A = t(39700),
                S = t(19957),
                T = t(62235),
                L = t(50237),
                O = t(72778),
                k = t(50137),
                M = t(90923),
                B = t(33514),
                U = t(86103),
                q = t(46541),
                X = t(30554),
                V = t(84450),
                F = t(31877),
                H = t(9034),
                G = t(40449),
                Q = t(64878),
                W = t(23974),
                Z = t(67933);
            let Y = (0, E.forwardRef)(function(e, l) {
                    var t, i, o, r, a, s, d, c, u, m, p, v, h, x, y, f, g, C, b, E, N, j, R, _, D, I, P, A, S, T, L, O, k, M, B, U, q, X, V, F, H, G, Q, W, Z, Y, z, K, J, $, ee, el, et, en, ei, eo, er, ea, es, ed, ec, eu, em, ep;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: w().dynamic([
                                ["ddfc527538c1b274", [null !== (k = null === (t = e.theme) || void 0 === t ? void 0 : t.primaryColor) && void 0 !== k ? k : "#32C770", null !== (M = null === (i = e.theme) || void 0 === i ? void 0 : i.primaryColor) && void 0 !== M ? M : "#32C770", null !== (B = null === (o = e.theme) || void 0 === o ? void 0 : o.primaryColor) && void 0 !== B ? B : "#32C770", null !== (U = null === (r = e.theme) || void 0 === r ? void 0 : r.primaryColor) && void 0 !== U ? U : "#32C770"]]
                            ]) + " inline-flex items-center",
                            children: (0, n.jsxs)("label", {
                                htmlFor: e.id,
                                className: w().dynamic([
                                    ["ddfc527538c1b274", [null !== (q = null === (a = e.theme) || void 0 === a ? void 0 : a.primaryColor) && void 0 !== q ? q : "#32C770", null !== (X = null === (s = e.theme) || void 0 === s ? void 0 : s.primaryColor) && void 0 !== X ? X : "#32C770", null !== (V = null === (d = e.theme) || void 0 === d ? void 0 : d.primaryColor) && void 0 !== V ? V : "#32C770", null !== (F = null === (c = e.theme) || void 0 === c ? void 0 : c.primaryColor) && void 0 !== F ? F : "#32C770"]]
                                ]) + " relative flex items-center rounded-full cursor-pointer",
                                children: [(0, n.jsx)("input", {
                                    ref: l,
                                    type: "radio",
                                    id: e.id,
                                    ...e,
                                    className: w().dynamic([
                                        ["ddfc527538c1b274", [null !== (H = null === (u = e.theme) || void 0 === u ? void 0 : u.primaryColor) && void 0 !== H ? H : "#32C770", null !== (G = null === (m = e.theme) || void 0 === m ? void 0 : m.primaryColor) && void 0 !== G ? G : "#32C770", null !== (Q = null === (p = e.theme) || void 0 === p ? void 0 : p.primaryColor) && void 0 !== Q ? Q : "#32C770", null !== (W = null === (v = e.theme) || void 0 === v ? void 0 : v.primaryColor) && void 0 !== W ? W : "#32C770"]]
                                    ]) + " " + (e && null != e.className && e.className || "before:content[''] bg-white peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border border-[#32C770] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#32C770] checked:bg-[#32C770] checked:before:bg-[#32C770] hover:before:opacity-10")
                                }), (0, n.jsx)("span", {
                                    className: w().dynamic([
                                        ["ddfc527538c1b274", [null !== (Z = null === (h = e.theme) || void 0 === h ? void 0 : h.primaryColor) && void 0 !== Z ? Z : "#32C770", null !== (Y = null === (x = e.theme) || void 0 === x ? void 0 : x.primaryColor) && void 0 !== Y ? Y : "#32C770", null !== (z = null === (y = e.theme) || void 0 === y ? void 0 : y.primaryColor) && void 0 !== z ? z : "#32C770", null !== (K = null === (f = e.theme) || void 0 === f ? void 0 : f.primaryColor) && void 0 !== K ? K : "#32C770"]]
                                    ]) + " absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100",
                                    children: (0, n.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        stroke: "currentColor",
                                        strokeWidth: "1",
                                        className: w().dynamic([
                                            ["ddfc527538c1b274", [null !== (J = null === (g = e.theme) || void 0 === g ? void 0 : g.primaryColor) && void 0 !== J ? J : "#32C770", null !== ($ = null === (C = e.theme) || void 0 === C ? void 0 : C.primaryColor) && void 0 !== $ ? $ : "#32C770", null !== (ee = null === (b = e.theme) || void 0 === b ? void 0 : b.primaryColor) && void 0 !== ee ? ee : "#32C770", null !== (el = null === (E = e.theme) || void 0 === E ? void 0 : E.primaryColor) && void 0 !== el ? el : "#32C770"]]
                                        ]) + " h-3.5 w-3.5",
                                        children: (0, n.jsx)("path", {
                                            fillRule: "evenodd",
                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                            clipRule: "evenodd",
                                            className: w().dynamic([
                                                ["ddfc527538c1b274", [null !== (et = null === (N = e.theme) || void 0 === N ? void 0 : N.primaryColor) && void 0 !== et ? et : "#32C770", null !== (en = null === (j = e.theme) || void 0 === j ? void 0 : j.primaryColor) && void 0 !== en ? en : "#32C770", null !== (ei = null === (R = e.theme) || void 0 === R ? void 0 : R.primaryColor) && void 0 !== ei ? ei : "#32C770", null !== (eo = null === (_ = e.theme) || void 0 === _ ? void 0 : _.primaryColor) && void 0 !== eo ? eo : "#32C770"]]
                                            ])
                                        })
                                    })
                                })]
                            })
                        }, e.id), (0, n.jsx)(w(), {
                            id: "ddfc527538c1b274",
                            dynamic: [null !== (er = null === (D = e.theme) || void 0 === D ? void 0 : D.primaryColor) && void 0 !== er ? er : "#32C770", null !== (ea = null === (I = e.theme) || void 0 === I ? void 0 : I.primaryColor) && void 0 !== ea ? ea : "#32C770", null !== (es = null === (P = e.theme) || void 0 === P ? void 0 : P.primaryColor) && void 0 !== es ? es : "#32C770", null !== (ed = null === (A = e.theme) || void 0 === A ? void 0 : A.primaryColor) && void 0 !== ed ? ed : "#32C770"],
                            children: "input.__jsx-style-dynamic-selector{border-color:".concat(null !== (ec = null === (S = e.theme) || void 0 === S ? void 0 : S.primaryColor) && void 0 !== ec ? ec : "#32C770", "!important}input.__jsx-style-dynamic-selector:checked{background-color:").concat(null !== (eu = null === (T = e.theme) || void 0 === T ? void 0 : T.primaryColor) && void 0 !== eu ? eu : "#32C770", "!important;border-color:").concat(null !== (em = null === (L = e.theme) || void 0 === L ? void 0 : L.primaryColor) && void 0 !== em ? em : "#32C770", "!important}input.__jsx-style-dynamic-selector:checked:before{background-color:").concat(null !== (ep = null === (O = e.theme) || void 0 === O ? void 0 : O.primaryColor) && void 0 !== ep ? ep : "#32C770", "!important}")
                        })]
                    })
                }),
                z = e => {
                    let {
                        id: l,
                        label: t,
                        theme: i,
                        selectedDiscount: o,
                        countryCode: r,
                        paymentMethod: a,
                        register: s,
                        dict: d
                    } = e;
                    return (0, n.jsxs)("li", {
                        className: "py-4 flex items-center gap-x-2",
                        children: [(0, n.jsx)(Y, {
                            value: l,
                            id: l,
                            theme: i,
                            defaultChecked: a === l,
                            ...s("paymentMethod")
                        }), (0, n.jsx)("label", {
                            htmlFor: l,
                            className: "flex items-center gap-x-4 cursor-pointer",
                            children: (0, n.jsx)("div", {
                                className: "flex flex-col",
                                children: (0, n.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, n.jsx)("span", {
                                        className: "text-blue font-medium text-gray-500",
                                        children: t
                                    }), o && (0, n.jsx)(Z.F, {
                                        dict: d,
                                        type: o.discountType,
                                        discount: o.discount,
                                        countryCode: r
                                    })]
                                })
                            })
                        })]
                    })
                },
                K = e => {
                    var l;
                    let {
                        dict: t,
                        errors: o,
                        checkout: r,
                        countryCode: a,
                        paymentMethod: s,
                        selectedPixDiscount: d,
                        register: c
                    } = e;
                    return (0, n.jsxs)("div", {
                        children: [(0, n.jsx)("h2", {
                            className: "font-medium text-xl",
                            children: t.PAY_WITH_TITLE
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)("span", {
                                className: "text-red-400",
                                children: null === (l = o.paymentMethod) || void 0 === l ? void 0 : l.message
                            }), (0, n.jsxs)("ul", {
                                className: "rounded-2xl flex items-center gap-x-6",
                                children: [(null == r ? void 0 : r.acceptedPaymentMethods.includes(i.XL.PIX)) && "BR" === a ? (0, n.jsx)(z, {
                                    id: i.XL.PIX,
                                    label: t.PIX_LABEL,
                                    theme: r.theme,
                                    selectedDiscount: d,
                                    countryCode: a,
                                    paymentMethod: s,
                                    register: c,
                                    dict: t
                                }) : null, (null == r ? void 0 : r.acceptedPaymentMethods.includes(i.XL.BOLETO)) && "BR" === a ? (0, n.jsx)(z, {
                                    id: i.XL.BOLETO,
                                    label: t.BOLETO_LABEL,
                                    theme: r.theme,
                                    countryCode: a,
                                    paymentMethod: s,
                                    register: c,
                                    dict: t
                                }) : null, (null == r ? void 0 : r.acceptedPaymentMethods.includes(i.XL.CREDIT_CARD)) ? (0, n.jsx)(z, {
                                    id: i.XL.CREDIT_CARD,
                                    label: t.CREDIT_CARD_LABEL,
                                    theme: r.theme,
                                    countryCode: a,
                                    paymentMethod: s,
                                    register: c,
                                    dict: t
                                }) : null]
                            })]
                        })]
                    })
                };
            var J = t(61078),
                $ = t(93176),
                ee = t(90584),
                el = t(16413),
                et = t(75036),
                en = t(16356),
                ei = t(84259),
                eo = t(70488);
            let er = e => {
                var l, t, o, r, a, s, d, c, u, m;
                let {
                    dict: p,
                    errors: v,
                    control: h,
                    register: x,
                    setValue: y,
                    paymentMethod: f,
                    isStripeAndInfo: g,
                    stripeRef: C,
                    currency: b,
                    language: j,
                    countryCode: R,
                    installments: _,
                    isFetchingInstallments: D,
                    containsPhysicalProduct: w,
                    onCepChange: I
                } = e, P = (0, E.useCallback)(e => {
                    "BR" === R ? I(e) : y("cep", e.target.value)
                }, [R, I, y]);
                return f !== i.XL.BOLETO || w ? f !== i.XL.CREDIT_CARD ? null : (0, n.jsxs)(n.Fragment, {
                    children: [g ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("h2", {
                            className: "font-medium text-xl mt-4",
                            children: p.PAYMENT_DATA_TITLE
                        }), (0, n.jsx)(et.g, {
                            isStripeAndInfo: g,
                            ref: C,
                            dict: p,
                            currency: b,
                            locale: "".concat(j, "-").concat(R)
                        }, f)]
                    }) : (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("div", {
                            className: "mt-6",
                            children: [(0, n.jsx)("h2", {
                                className: "font-medium text-xl",
                                children: p.PAYMENT_DATA_TITLE
                            }), (0, n.jsxs)("div", {
                                className: "grid grid-cols-2 gap-4 mt-2",
                                children: [(0, n.jsxs)("div", {
                                    className: "col-span-2",
                                    children: [(0, n.jsx)(N.Qr, {
                                        control: h,
                                        name: "cardNumber",
                                        render: e => {
                                            let {
                                                field: l
                                            } = e;
                                            return (0, n.jsx)("input", {
                                                ...l,
                                                type: "text",
                                                inputMode: "numeric",
                                                className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                                placeholder: p.CARD_NUMBER_PLACEHOLDER,
                                                maxLength: 19,
                                                onChange: e => l.onChange((0, el.y)(e.target.value))
                                            })
                                        }
                                    }), (0, n.jsx)("span", {
                                        className: "text-red-400",
                                        children: null === (l = v.cardNumber) || void 0 === l ? void 0 : l.message
                                    })]
                                }), (0, n.jsx)(ee.M, {
                                    paymentMethod: f,
                                    installments: _,
                                    countryCode: R,
                                    isFetchingInstallments: D,
                                    dict: p,
                                    errors: v,
                                    register: x
                                }), (0, n.jsxs)("div", {
                                    className: "col-span-1",
                                    children: [(0, n.jsx)(N.Qr, {
                                        control: h,
                                        name: "cvc",
                                        render: e => {
                                            let {
                                                field: {
                                                    name: l,
                                                    value: t,
                                                    disabled: i,
                                                    onBlur: o,
                                                    ref: r,
                                                    onChange: a
                                                }
                                            } = e;
                                            return (0, n.jsx)("input", {
                                                ref: r,
                                                name: l,
                                                value: t,
                                                disabled: i,
                                                type: "text",
                                                inputMode: "numeric",
                                                className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                                placeholder: p.CVC_PLACEHOLDER,
                                                onBlur: o,
                                                maxLength: 4,
                                                onChange: e => a(e.target.value.replace(/\D/g, ""))
                                            })
                                        }
                                    }), (0, n.jsx)("span", {
                                        className: "text-red-400",
                                        children: null === (t = v.cvc) || void 0 === t ? void 0 : t.message
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "col-span-1",
                                    children: [(0, n.jsx)(N.Qr, {
                                        control: h,
                                        name: "expirationDate",
                                        render: e => {
                                            let {
                                                field: l
                                            } = e;
                                            return (0, n.jsx)("input", {
                                                type: "text",
                                                inputMode: "numeric",
                                                className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                                placeholder: p.EXPIRATION_DATE_PLACEHOLDER,
                                                ...l,
                                                onChange: e => l.onChange((0, $.B)(e.target.value))
                                            })
                                        }
                                    }), (0, n.jsx)("span", {
                                        className: "text-red-400",
                                        children: null === (o = v.expirationDate) || void 0 === o ? void 0 : o.message
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "col-span-2",
                                    children: [(0, n.jsx)("input", {
                                        type: "text",
                                        className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                        placeholder: p.CARD_HOLDER_PLACEHOLDER,
                                        ...x("cardHolder")
                                    }), (0, n.jsx)("span", {
                                        className: "text-red-400",
                                        children: null === (r = v.cardHolder) || void 0 === r ? void 0 : r.message
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "col-span-2",
                                    children: [(0, n.jsx)(N.Qr, {
                                        control: h,
                                        name: "payerCpf",
                                        render: e => {
                                            let {
                                                field: {
                                                    name: l,
                                                    value: t,
                                                    disabled: i,
                                                    onBlur: o,
                                                    ref: r,
                                                    onChange: a
                                                }
                                            } = e;
                                            return (0, n.jsx)("input", {
                                                ref: r,
                                                name: l,
                                                value: t,
                                                disabled: i,
                                                type: "text",
                                                inputMode: "numeric",
                                                className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                                placeholder: p.PAYER_CPF,
                                                onBlur: o,
                                                onChange: e => a((0, eo.Z)(e.target.value))
                                            })
                                        }
                                    }), (0, n.jsx)("span", {
                                        className: "text-red-400",
                                        children: null === (a = v.payerCpf) || void 0 === a ? void 0 : a.message
                                    })]
                                })]
                            })]
                        })
                    }), w && (0, n.jsx)("div", {
                        className: "col-span-2 mt-4",
                        children: (0, n.jsxs)("label", {
                            className: "flex items-center gap-x-2",
                            children: [(0, n.jsx)(N.Qr, {
                                control: h,
                                name: "useShippingAsBilling",
                                render: e => {
                                    let {
                                        field: {
                                            onChange: l,
                                            value: t,
                                            onBlur: i,
                                            name: o,
                                            ref: r
                                        }
                                    } = e;
                                    return (0, n.jsx)("input", {
                                        type: "checkbox",
                                        className: "h-5 w-5 rounded border-gray-300",
                                        checked: t,
                                        onChange: e => l(e.target.checked),
                                        onBlur: i,
                                        name: o,
                                        ref: r
                                    })
                                }
                            }), (0, n.jsx)("span", {
                                className: "text-gray-800",
                                children: p.USE_SHIPPING_AS_BILLING
                            })]
                        })
                    }), h._formValues && !h._formValues.useShippingAsBilling && (0, n.jsxs)("div", {
                        className: "col-span-2 mt-4 rounded-xl",
                        children: [(0, n.jsx)("h3", {
                            className: "text-xl text-blue font-medium mb-3",
                            children: p.BILLING_ADDRESS_TITLE
                        }), (0, n.jsx)(J.Z, {
                            register: x,
                            errors: v,
                            setValue: y,
                            onCepChange: I,
                            countryCode: R,
                            dict: p
                        })]
                    })]
                }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("h2", {
                        className: "font-medium text-xl mt-4",
                        children: p.ADDRESS_TITLE_SIMPLE
                    }), (0, n.jsxs)("div", {
                        className: "mt-4 grid grid-cols-2 gap-4",
                        children: [(0, n.jsxs)("div", {
                            className: "col-span-1",
                            children: [(0, n.jsx)("input", {
                                type: "text",
                                inputMode: "numeric",
                                className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                placeholder: p.CEP_PLACEHOLDER,
                                ...x("cep", {
                                    onChange: P
                                })
                            }), (0, n.jsx)("span", {
                                className: "text-red-400",
                                children: null === (s = v.cep) || void 0 === s ? void 0 : s.message
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "col-span-1",
                            children: [(0, n.jsx)(N.Qr, {
                                control: h,
                                name: "number",
                                render: e => {
                                    let {
                                        field: l
                                    } = e;
                                    return (0, n.jsx)("input", {
                                        type: "text",
                                        className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                        placeholder: p.NUMBER_PLACEHOLDER,
                                        ...l,
                                        onChange: e => l.onChange(e.target.value.replace(/\D/g, ""))
                                    })
                                }
                            }), (0, n.jsx)("span", {
                                className: "text-red-400",
                                children: null === (d = v.number) || void 0 === d ? void 0 : d.message
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "col-span-2",
                            children: [(0, n.jsx)("input", {
                                type: "text",
                                className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                placeholder: p.STREET_PLACEHOLDER,
                                ...x("street")
                            }), (0, n.jsx)("span", {
                                className: "text-red-400",
                                children: null === (c = v.street) || void 0 === c ? void 0 : c.message
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "col-span-1",
                            children: [(0, n.jsx)("input", {
                                type: "text",
                                className: "bg-white w-full px-3 py-4 rounded-xl border outline-none",
                                placeholder: p.CITY_PLACEHOLDER,
                                ...x("city")
                            }), (0, n.jsx)("span", {
                                className: "text-red-400",
                                children: null === (u = v.city) || void 0 === u ? void 0 : u.message
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "col-span-1",
                            children: [(0, n.jsxs)("div", {
                                className: "relative",
                                children: [(0, n.jsxs)("select", {
                                    className: "bg-white w-full px-3 py-4 rounded-xl border outline-none text-gray-400 block appearance-none hover:border-gray-500",
                                    ...x("state"),
                                    children: [(0, n.jsx)("option", {
                                        value: "",
                                        children: p.STATE_PLACEHOLDER
                                    }), ei.$q.map(e => {
                                        let {
                                            codigo: l,
                                            nome: t,
                                            sigla: i
                                        } = e;
                                        return (0, n.jsx)("option", {
                                            value: i,
                                            children: t
                                        }, l)
                                    })]
                                }), (0, n.jsx)(en.gwH, {
                                    size: 24,
                                    className: "absolute top-1/2 right-3 -translate-y-1/2"
                                })]
                            }), (0, n.jsx)("span", {
                                className: "text-red-400",
                                children: null === (m = v.state) || void 0 === m ? void 0 : m.message
                            })]
                        })]
                    })]
                })
            };
            var ea = t(85873),
                es = t(81228),
                ed = t(26057),
                ec = t(7316),
                eu = t(46311);
            let em = !1,
                ep = !1;
            var ev = e => {
                var l, t;
                let {
                    salesPlan: y,
                    checkout: g,
                    orderBumps: D,
                    shippings: w,
                    containsPhysicalProduct: Z,
                    pixels: Y,
                    creditCardAcquirer: z,
                    token: J,
                    discounts: $
                } = e, {
                    dict: ee,
                    language: el,
                    countryCode: et,
                    currency: en
                } = (0, V.g)(), ei = null === (l = y.store.registeredAcquires) || void 0 === l ? void 0 : l.find(e => void 0 !== e.clientId && "STRIPE" === e.acquirer.name && e.acquirer._id === (null == g ? void 0 : g.CREDIT_CARD)), eo = (0, E.useRef)(null), ev = (0, E.useMemo)(() => ({
                    isPhoneRequired: void 0 === (null == g ? void 0 : g.isPhoneRequired) || (null == g ? void 0 : g.isPhoneRequired),
                    isDocumentRequired: void 0 === (null == g ? void 0 : g.isDocumentRequired) || (null == g ? void 0 : g.isDocumentRequired),
                    isEmailRequired: void 0 === (null == g ? void 0 : g.isEmailRequired) || (null == g ? void 0 : g.isEmailRequired)
                }), [null == g ? void 0 : g.isDocumentRequired, null == g ? void 0 : g.isEmailRequired, null == g ? void 0 : g.isPhoneRequired]), {
                    pixelsService: eh
                } = (0, E.useContext)(q.O), ex = (0, E.useMemo)(() => w.find(e => {
                    let {
                        preSelected: l
                    } = e;
                    return l
                }), [w]), {
                    control: ey,
                    formState: {
                        isSubmitting: ef,
                        errors: eg
                    },
                    watch: eC,
                    setValue: eb,
                    register: eE,
                    handleSubmit: eN
                } = (0, N.cI)({
                    resolver: (0, x.X)((0, G.k)(ee)),
                    defaultValues: {
                        locale: "".concat(el, "-").concat(et),
                        quantity: 1,
                        containsPhysicalProduct: Z,
                        installments: null !== (t = null == g ? void 0 : g.preSelectedInstallment) && void 0 !== t ? t : 1,
                        phone: "",
                        document: "",
                        number: "",
                        quantitySelectorEnabled: null == g ? void 0 : g.isQuantitySelectorEnabled,
                        shipping: null == ex ? void 0 : ex._id,
                        useShippingAsBilling: Z,
                        isStripe: void 0 !== ei,
                        paymentMethod: "BR" === et && (null == g ? void 0 : g.acceptedPaymentMethods.includes(i.XL.PIX)) ? i.XL.PIX : i.XL.CREDIT_CARD,
                        ...ev
                    }
                }), {
                    qty: ej,
                    additionalSalesPlan: eR,
                    shippingValue: e_,
                    subTotal: eD,
                    coupon: ew,
                    setShippingValue: eI,
                    total: eP,
                    setDiscount: eA
                } = (0, p.p)(e => {
                    let {
                        qty: l,
                        additionalSalesPlan: t,
                        shippingValue: n,
                        subTotal: i,
                        coupon: o,
                        setShippingValue: r,
                        total: a,
                        setDiscount: s
                    } = e;
                    return {
                        qty: l,
                        additionalSalesPlan: t,
                        subTotal: i,
                        shippingValue: n,
                        coupon: o,
                        setShippingValue: r,
                        total: a,
                        setDiscount: s
                    }
                }), [eS, eT] = (0, E.useState)(""), [eL, eO] = (0, E.useState)(), [ek, eM] = (0, E.useState)(), [eB, eU] = (0, E.useState)(), [eq, eX] = (0, E.useState)(), [eV, eF] = (0, E.useState)(), [eH, eG] = (0, E.useState)(), [eQ, eW] = (0, E.useState)(), [eZ, eY] = (0, E.useState)(!1), [ez, eK] = (0, E.useState)(!1), [eJ, e$] = (0, E.useState)(), [e0, e1, e2, e3, e4, e7, e5, e8, e6, e9, le, ll, lt, ln] = eC(["fullName", "email", "document", "phone", "cep", "state", "city", "street", "number", "complement", "paymentMethod", "shipping", "cardNumber", "useShippingAsBilling"]), li = (0, b.useRouter)(), lo = (0, E.useRef)(null), lr = (0, E.useMemo)(() => null == D ? void 0 : D.filter(e => {
                    let {
                        onSelectShippings: l
                    } = e;
                    return l.some(e => e === ll || "all" === e)
                }), [D, ll]), la = (0, b.useSearchParams)(), {
                    installments: ls,
                    isFetchingInstallments: ld
                } = (0, o.l)({
                    checkout: g,
                    creditCardAcquirer: z,
                    creditCardNumber: lt,
                    paymentMethod: le,
                    salesPlan: y,
                    setValue: eb,
                    total: eP,
                    countryCode: et
                });
                (0, a.o)(y, {
                    currency: en,
                    subTotal: eD,
                    quantity: ej
                }), (0, s.k)(y._id, y.store._id, J), (0, r.N)({
                    cep: e4,
                    neighborhood: null == eQ ? void 0 : eQ.neighborhood,
                    city: e5,
                    complement: e9,
                    containsPhysicalProduct: Z,
                    document: e2,
                    email: e1,
                    fullName: e0,
                    number: e6,
                    phone: e3,
                    selectedShipping: ll,
                    state: e7,
                    street: e8,
                    salesPlanId: y._id,
                    storeId: y.store._id,
                    token: J,
                    dict: ee,
                    ...ev
                }), (0, P.J)(null == g ? void 0 : g.backRedirectUrl), (0, A.L)({
                    email: e1,
                    fullName: e0,
                    phone: e3,
                    hasGeneratedOrder: ez,
                    payerDocument: e2,
                    salesPlanId: y._id,
                    storeId: y.store._id
                }), (0, S.u)({
                    pixels: Y,
                    storeType: y.store.type
                }), (0, T.N)({
                    pixels: Y,
                    subTotal: eD
                }), (0, L.W)({
                    setValue: eb
                });
                let lc = (0, E.useRef)(),
                    lu = (0, E.useRef)(null),
                    lm = (0, E.useMemo)(() => $.find(e => e.active && e.paymentMethod === i.XL.PIX && (e.plansId.includes(y._id) || e.plansId.includes("all"))), [$, y._id]),
                    lp = (0, E.useMemo)(() => lm ? lm.discountType === v.Lb.PERCENTUAL ? eP * lm.discount / 100 : lm.discountType === v.Lb.FIXED ? lm.discount : 0 : 0, [lm, eP]);
                (0, E.useEffect)(() => {
                    le && (le === i.XL.PIX ? eA(lp) : eA(0))
                }, [le, lp, eA]);
                let lv = (0, E.useCallback)(async function(e) {
                        let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            t = e.target.value.replace(/\D/g, "");
                        if (eb(l ? "billingCep" : "cep", (0, c.a)(t), {
                                shouldValidate: !0
                            }), 8 === t.length && /^[0-9]{8}$/.test(t)) try {
                            eY(!0);
                            let {
                                data: e
                            } = await m.N.findCep(t);
                            l ? (e.logradouro && eb("billingStreet", e.logradouro, {
                                shouldValidate: !0
                            }), eb("billingState", e.uf, {
                                shouldValidate: !0
                            }), eb("billingCity", e.localidade, {
                                shouldValidate: !0
                            }), eb("billingNeighborhood", e.bairro, {
                                shouldValidate: !0
                            })) : (e.logradouro && eb("street", e.logradouro, {
                                shouldValidate: !0
                            }), eb("state", e.uf, {
                                shouldValidate: !0
                            }), eb("city", e.localidade, {
                                shouldValidate: !0
                            }), eT(e.bairro), eW({
                                street: e.logradouro,
                                state: e.uf,
                                city: e.localidade,
                                neighborhood: e.bairro,
                                cep: t
                            }))
                        } catch (e) {
                            j.Am.error(ee.CEP_ERROR_MESSAGE, {
                                autoClose: 3e3,
                                position: "top-center",
                                hideProgressBar: !0
                            }), console.error("Erro ao buscar CEP:", e)
                        } finally {
                            eY(!1)
                        }
                    }, [eb, ee.CEP_ERROR_MESSAGE]),
                    lh = eN(async e => {
                        try {
                            var l, t, n, o, r, a, s, c, m, p, v, x, f, C, b, E, N, R, _, D, w, I, P;
                            let A, S, T;
                            if ((null == eo ? void 0 : eo.current) && ei) {
                                let {
                                    token: e,
                                    error: l
                                } = await eo.current.generateCardToken();
                                if (A = null != e ? e : void 0, l) throw l
                            }
                            let L = {};
                            la.forEach((e, l) => {
                                l.includes("subid") && (L[l] = e)
                            });
                            try {
                                S = JSON.parse(null !== (c = (0, H.ej)(y._id)) && void 0 !== c ? c : "")
                            } catch (e) {
                                console.log("error get cookie")
                            }
                            let {
                                clearSale: O,
                                cyberSource: k
                            } = (0, B.E)(), U = le === i.XL.CREDIT_CARD ? {
                                street: e.useShippingAsBilling ? null !== (m = e.street) && void 0 !== m ? m : "" : null !== (p = e.billingStreet) && void 0 !== p ? p : "",
                                complement: e.useShippingAsBilling ? null !== (v = e.complement) && void 0 !== v ? v : "" : null !== (x = e.billingComplement) && void 0 !== x ? x : "",
                                number: e.useShippingAsBilling ? Number(e.number) : Number(e.billingNumber),
                                neighborhood: e.useShippingAsBilling ? null != eS ? eS : "" : null !== (f = e.billingNeighborhood) && void 0 !== f ? f : "",
                                city: e.useShippingAsBilling ? null !== (C = e.city) && void 0 !== C ? C : "" : null !== (b = e.billingCity) && void 0 !== b ? b : "",
                                state: e.useShippingAsBilling ? null !== (E = e.state) && void 0 !== E ? E : "" : null !== (N = e.billingState) && void 0 !== N ? N : "",
                                cep: e.useShippingAsBilling ? null !== (R = e.cep) && void 0 !== R ? R : "" : null !== (_ = e.billingCep) && void 0 !== _ ? _ : ""
                            } : void 0, q = null === (l = e.expirationDate) || void 0 === l ? void 0 : l.split("/")[0], X = "20".concat(null === (t = e.expirationDate) || void 0 === t ? void 0 : t.split("/")[1]);
                            e.paymentMethod === i.XL.CREDIT_CARD && ((null == z ? void 0 : z.name) === i.dU.CODIGUZ || (null == z ? void 0 : z.name) === i.dU.GHOSTS_PAY_V2) && e.cardHolder && e.cvc && e.installments && e.cardNumber && q && X && (T = await (0, ec.s)({
                                holderName: e.cardHolder,
                                amount: eP,
                                cvv: e.cvc,
                                expMonth: q,
                                expYear: X,
                                installments: e.installments,
                                number: e.cardNumber,
                                creditCardAcquirerName: z.name
                            }));
                            let {
                                data: V
                            } = await u.Z.create({
                                payerCpf: null === (n = e.payerCpf) || void 0 === n ? void 0 : n.replace(/\D/g, ""),
                                payerName: e.fullName,
                                paymentMethod: e.paymentMethod,
                                installments: e.installments ? Number(e.installments) : 1,
                                quantity: e.quantity,
                                cardholder: e.fullName,
                                cardNumber: null === (o = e.cardNumber) || void 0 === o ? void 0 : o.replace(/\s/g, ""),
                                expirationMonth: q,
                                expirationYear: X,
                                securityCode: e.cvc,
                                payerEmail: e.email,
                                payerPhone: e.phone,
                                salesPlanId: y._id,
                                shippingId: e.shipping,
                                checkoutSessionId: null == S ? void 0 : S.id,
                                additionalSalesPlans: eR.map(e => {
                                    let {
                                        _id: l
                                    } = e;
                                    return l
                                }),
                                templateId: null == la ? void 0 : la.get("templateId"),
                                refusedOrderId: eJ,
                                kwaiClickId: (0, M._)(),
                                tiktokClickId: (0, eu.j)(),
                                couponId: null == ew ? void 0 : ew._id,
                                discountId: e.paymentMethod === i.XL.PIX ? null == lm ? void 0 : lm._id : void 0,
                                clearSale: O,
                                cyberSource: k,
                                address: {
                                    cep: e.cep,
                                    city: e.city,
                                    number: Number(e.number),
                                    neighborhood: eS,
                                    state: e.state,
                                    street: e.street,
                                    complement: e.complement
                                },
                                cardToken: A,
                                cardId: T,
                                billingAddress: U,
                                currency: en,
                                language: el,
                                country: et
                            }, {
                                utm_campaign: la.get("utm_campaign"),
                                utm_medium: la.get("utm_medium"),
                                utm_term: la.get("utm_term"),
                                utm_source: la.get("utm_source"),
                                utm_content: la.get("utm_content"),
                                xcod: la.get("xcod"),
                                ...L
                            });
                            eK(!0), eU(V.order.value);
                            try {
                                (0, H.kT)(y._id)
                            } catch (e) {
                                console.log("error delete cookie")
                            }
                            let F = y.products.map(e => ({
                                id: e.product._id,
                                name: e.product.name,
                                quantity: ej,
                                value: (0, h.X)(y)
                            }));
                            eR.length > 0 && eR.forEach(e => {
                                e.products.forEach(l => {
                                    F.push({
                                        id: l.product._id,
                                        name: l.product.name,
                                        value: (0, h.X)(e),
                                        quantity: l.quantity
                                    })
                                })
                            });
                            let G = "".concat("https://nextapiv3.com", "/checkout/events/").concat(V.order._id),
                                Q = new EventSource(G),
                                W = async () => {
                                    var e, l;
                                    if (ep) return;
                                    let t = await (0, d.Z)(V.order._id);
                                    if (t && t.status === i.iF.APPROVED) {
                                        if (ep = !0, le !== i.XL.PIX || em || (em = !0, await eh.track({
                                                event: "CompraPix",
                                                pixels: Y,
                                                additionalData: {
                                                    total: t.value,
                                                    currency: en,
                                                    paymentMethod: i.XL.PIX,
                                                    contentType: "product",
                                                    quantity: ej,
                                                    subTotal: eD,
                                                    shippingValue: e_,
                                                    transactionId: t._id,
                                                    items: F
                                                }
                                            })), null == y ? void 0 : null === (l = y.store) || void 0 === l ? void 0 : null === (e = l.checkout) || void 0 === e ? void 0 : e.externalThanksPageLink) {
                                            let e = [{
                                                    key: "nome",
                                                    value: t.payerName
                                                }, {
                                                    key: "email",
                                                    value: t.payerEmail
                                                }, {
                                                    key: "telefone",
                                                    value: t.payerPhone
                                                }, {
                                                    key: "documento",
                                                    value: t.payerCpf
                                                }, {
                                                    key: "utm_campaign",
                                                    value: la.get("utm_campaign")
                                                }, {
                                                    key: "utm_medium",
                                                    value: la.get("utm_medium")
                                                }, {
                                                    key: "utm_term",
                                                    value: la.get("utm_term")
                                                }, {
                                                    key: "utm_source",
                                                    value: la.get("utm_source")
                                                }, {
                                                    key: "utm_content",
                                                    value: la.get("utm_content")
                                                }, {
                                                    key: "xcod",
                                                    value: la.get("xcod")
                                                }, ...Object.entries(L).map(e => {
                                                    let [l, t] = e;
                                                    return {
                                                        key: l,
                                                        value: t
                                                    }
                                                })].filter(e => e.value).map(e => "".concat(e.key, "=").concat(encodeURIComponent(e.value))).join("&"),
                                                l = e ? "".concat(y.store.checkout.externalThanksPageLink, "?").concat(e) : y.store.checkout.externalThanksPageLink;
                                            window.location.replace(l)
                                        } else li.push("/thanks/".concat(V.order._id))
                                    }
                                };
                            window.document && (window.document.removeEventListener("visibilitychange", W), window.document.addEventListener("visibilitychange", () => {
                                "visible" === window.document.visibilityState && W()
                            })), Q.onmessage = async e => {
                                e.data === "".concat(V.order._id, "-APPROVED") && W()
                            }, (le === i.XL.PIX || eJ) && (j.Am.success(ee.PIX_SUCCESS_MESSAGE, {
                                autoClose: 3e3,
                                position: "top-center",
                                hideProgressBar: !0
                            }), eO(V.paymentInfo.qrCode), eM(V.paymentInfo.base64QrCode), await eh.track({
                                event: "PixGerado",
                                pixels: Y
                            })), le === i.XL.BOLETO && (j.Am.success(ee.BOLETO_SUCCESS_MESSAGE, {
                                autoClose: 3e3,
                                position: "top-center",
                                hideProgressBar: !0
                            }), eX(V.paymentInfo.digitableLine), eF(V.paymentInfo.barCode), eG(V.paymentInfo.boletoDueDate), await eh.track({
                                event: "BoletoGerado",
                                pixels: Y
                            })), le === i.XL.CREDIT_CARD && (null == V ? void 0 : null === (r = V.paymentInfo) || void 0 === r ? void 0 : r.status) === i.iF.APPROVED ? (await eh.track({
                                event: "CompraCart\xe3o",
                                pixels: Y,
                                additionalData: {
                                    total: V.order.value,
                                    currency: en,
                                    paymentMethod: i.XL.CREDIT_CARD,
                                    contentType: "product",
                                    quantity: ej,
                                    shippingValue: e_,
                                    subTotal: eD,
                                    transactionId: null == V ? void 0 : V.order._id,
                                    items: F
                                }
                            }), (null == y ? void 0 : null === (w = y.store) || void 0 === w ? void 0 : null === (D = w.checkout) || void 0 === D ? void 0 : D.externalThanksPageLink) ? window.location.replace(y.store.checkout.externalThanksPageLink) : li.push("/thanks/".concat(V.order._id))) : le === i.XL.CREDIT_CARD && (null == V ? void 0 : null === (a = V.paymentInfo) || void 0 === a ? void 0 : a.status) === i.iF.REFUSED && (null == g ? void 0 : g.instantRecovery) ? (null === (I = lc.current) || void 0 === I || I.toggle(), e$(null == V ? void 0 : null === (P = V.order) || void 0 === P ? void 0 : P._id)) : le === i.XL.CREDIT_CARD && (null == V ? void 0 : null === (s = V.paymentInfo) || void 0 === s ? void 0 : s.status) === i.iF.REFUSED && j.Am.error(ee.CREDIT_CARD_REFUSED_MESSAGE, {
                                autoClose: 3e3,
                                position: "top-center",
                                hideProgressBar: !0
                            })
                        } catch (l) {
                            O.av({
                                email: null == e ? void 0 : e.email,
                                username: null == e ? void 0 : e.fullName
                            }), O.uT(ee.PAYMENT_ERROR_MESSAGE), O.Tb(l), j.Am.error(ee.PAYMENT_ERROR_MESSAGE, {
                                autoClose: 3e3,
                                position: "top-center",
                                hideProgressBar: !0
                            })
                        }
                    }),
                    lx = (0, E.useCallback)(() => {
                        eq && (f()(eq), j.Am.success(ee.COPY_SUCCESS_MESSAGE, {
                            autoClose: 3e3,
                            position: "top-center",
                            hideProgressBar: !0
                        }))
                    }, [eq, ee]),
                    ly = (0, E.useCallback)(() => {
                        var e, l;
                        null === (e = lc.current) || void 0 === e || e.toggle(), eb("installments", 1), null === (l = lu.current) || void 0 === l || l.click()
                    }, [eb]);
                return (0, E.useEffect)(() => {
                    eV && eq && lo.current && C()(lo.current, eV, {
                        format: "CODE128",
                        displayValue: !0,
                        fontSize: 18,
                        margin: 10
                    })
                }, [eV, eq]), (0, E.useEffect)(() => {
                    ej && "number" == typeof ej && eb("quantity", ej, {
                        shouldValidate: !0
                    })
                }, [ej, eb]), (0, n.jsxs)("form", {
                    className: "w-full flex flex-col",
                    onSubmit: lh,
                    children: [ei && (0, n.jsx)(F.default, {
                        src: "https://js.stripe.com/v3/",
                        strategy: "lazyOnload",
                        onLoad: () => {
                            console.log("Stripe.js carregado com sucesso!")
                        },
                        onError: () => {
                            console.error("Erro ao carregar Stripe.js"), window.location.reload()
                        }
                    }), eL && eB ? (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)(X.l, {
                            pixCode: eL,
                            pixQrCode: ek,
                            isOpen: !!eL,
                            pixValue: eB.toLocaleString("pt-BR", {
                                currency: "BRL",
                                style: "currency"
                            }),
                            theme: null == g ? void 0 : g.theme,
                            onClose: () => {}
                        })
                    }) : eV && eq ? (0, n.jsx)(ed.n, {
                        dict: ee,
                        boletoDueDate: eH,
                        barCode: eV,
                        digitableLines: eq,
                        copyDigitableLines: lx,
                        checkout: g,
                        barcodeRef: lo
                    }) : (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(K, {
                            dict: ee,
                            errors: eg,
                            checkout: g,
                            countryCode: et,
                            paymentMethod: le,
                            selectedPixDiscount: lm,
                            register: eE
                        }), (0, n.jsxs)("div", {
                            className: "mt-2",
                            children: [(0, n.jsx)("h2", {
                                className: "font-medium text-xl",
                                children: ee.PERSONAL_DATA_TITLE
                            }), (0, n.jsx)(Q.G, {
                                control: ey,
                                errors: eg,
                                register: eE,
                                checkout: g,
                                countryCode: et,
                                dict: ee,
                                showLabels: !1
                            })]
                        }), Z && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("h2", {
                                className: "font-medium text-xl mt-4",
                                children: ee.ADDRESS_TITLE_SIMPLE
                            }), (0, n.jsx)(W.z, {
                                control: ey,
                                errors: eg,
                                register: eE,
                                setValue: eb,
                                onCepChange: lv,
                                countryCode: et,
                                address: eQ,
                                shippings: w,
                                checkout: g,
                                dict: ee,
                                showLabels: !1,
                                cepWatch: e4
                            })]
                        }), (null == lr ? void 0 : lr.length) ? (0, n.jsx)("div", {
                            className: "mt-6",
                            children: (0, n.jsx)(es.Z, {
                                orderBumps: lr,
                                isStacked: null == g ? void 0 : g.isOrderBumpStacked
                            })
                        }) : null, (0, n.jsx)(er, {
                            dict: ee,
                            errors: eg,
                            control: ey,
                            register: eE,
                            setValue: eb,
                            paymentMethod: le,
                            isStripeAndInfo: ei,
                            stripeRef: eo,
                            currency: en,
                            language: el,
                            countryCode: et,
                            installments: ls,
                            isFetchingInstallments: ld,
                            containsPhysicalProduct: Z,
                            onCepChange: lv
                        }), (0, n.jsxs)(I, {
                            ref: lu,
                            type: "submit",
                            className: "bg-[#32C770] py-4 w-full rounded-2xl mt-8 text-white flex items-center justify-center gap-x-4 font-medium outline-none transaction-all duration-400 border border-[#32C770]",
                            disabled: ef || eZ,
                            theme: null == g ? void 0 : g.theme,
                            children: [(null == g ? void 0 : g.payButtonText) && (null == g ? void 0 : g.payButtonText) !== "" ? (0, n.jsx)("span", {
                                children: g.payButtonText
                            }) : (0, n.jsx)("span", {
                                children: ef ? ee.PAYING_BUTTON : ee.PAY_BUTTON
                            }), ef ? (0, n.jsx)("div", {
                                className: "flex items-center justify-center",
                                children: (0, n.jsx)("div", {
                                    className: "w-6 h-6 border-4 border-t-1 border-t-primary border-gray-200 rounded-full animate-spin"
                                })
                            }) : null]
                        }), (0, n.jsx)(ea.J, {
                            dict: ee,
                            checkout: g,
                            showFooter: U.q,
                            BlueCheckIcon: R.Z,
                            SafeIcon: _.Z
                        })]
                    }), (null == g ? void 0 : g.instantRecovery) ? (0, n.jsx)(k.X, {
                        ref: lc,
                        checkout: g,
                        totalValue: eP,
                        onClickPayWithPix: ly,
                        onClose: () => e$(void 0)
                    }) : null]
                })
            }
        },
        52190: function(e, l, t) {
            "use strict";
            t.d(l, {
                YourCart: function() {
                    return m
                }
            });
            var n = t(57437),
                i = t(51549),
                o = t(45973),
                r = t(2265),
                a = t(65194),
                s = t(75741),
                d = t(25787),
                c = t(23958),
                u = t(84450);
            let m = (0, r.memo)(function(e) {
                let {
                    salesPlan: l,
                    containsPhysicalProduct: t,
                    checkout: m
                } = e, {
                    dict: p,
                    countryCode: v
                } = (0, u.g)(), {
                    shippingValue: h,
                    qty: x,
                    total: y,
                    subTotal: f,
                    additionalSalesPlan: g,
                    instantRecoveryDiscountValue: C,
                    coupon: b,
                    discount: E,
                    setTotal: N,
                    setSubTotal: j,
                    setQty: R
                } = (0, i.p)(e => {
                    let {
                        shippingValue: l,
                        qty: t,
                        subTotal: n,
                        total: i,
                        additionalSalesPlan: o,
                        instantRecoveryDiscountValue: r,
                        coupon: a,
                        discount: s,
                        setTotal: d,
                        setSubTotal: c,
                        setQty: u
                    } = e;
                    return {
                        shippingValue: l,
                        qty: t,
                        total: i,
                        subTotal: n,
                        additionalSalesPlan: o,
                        instantRecoveryDiscountValue: r,
                        coupon: a,
                        discount: s,
                        setTotal: d,
                        setSubTotal: c,
                        setQty: u
                    }
                }), _ = (null == m ? void 0 : m.showSubtotal) === void 0 || (null == m ? void 0 : m.showSubtotal), D = (0, r.useMemo)(() => b ? (0, d.s)(y, b) : 0, [b, y]);
                return (0, r.useEffect)(() => {
                    1 === l.products.length && R(l.products[0].quantity)
                }, [l.products, R]), (0, r.useEffect)(() => {
                    let e = 0,
                        t = null != h ? h : 0,
                        n = l.salesPrice * x,
                        i = n + t;
                    g.length > 0 ? (n += e = g.reduce((e, l) => e + l.salesPrice, 0), i += e) : e = 0, C && (i -= C), j(n), N(i)
                }, [g, x, l.salesPrice, h, j, N, C]), (0, n.jsxs)("div", {
                    className: "pt-6",
                    children: [(0, n.jsx)("main", {
                        className: "border-b-2 pb-6",
                        children: (0, n.jsxs)("ul", {
                            className: "flex flex-col gap-y-6",
                            id: "items",
                            children: [l.products.map(e => {
                                var t;
                                return (0, n.jsxs)("li", {
                                    className: "flex items-center justify-between",
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex items-center gap-x-3 flex-1",
                                        children: [(0, n.jsx)("div", {
                                            className: "border rounded-xl w-20 h-20 flex-shrink-0 relative",
                                            children: (0, n.jsx)(a.CustomImage, {
                                                src: null === (t = e.product.img) || void 0 === t ? void 0 : t.url,
                                                fullUrl: !0,
                                                className: "rounded-xl object-contain",
                                                fill: !0,
                                                priority: !0,
                                                alt: "".concat(p.PRODUCT_IMAGE_ALT, " ").concat(e.product.name)
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [(0, n.jsx)("span", {
                                                className: "font-medium",
                                                children: e.product.name
                                            }), (0, n.jsx)("span", {
                                                className: "text-gray-500",
                                                children: e.product.description
                                            })]
                                        })]
                                    }), (null == m ? void 0 : m.isQuantitySelectorEnabled) && 1 === l.products.length ? (0, n.jsxs)("div", {
                                        className: "flex items-center gap-x-2",
                                        children: [(0, n.jsx)("button", {
                                            type: "button",
                                            className: "text-3xl text-red-400",
                                            onClick: () => {
                                                1 !== x && R(x - 1)
                                            },
                                            children: "-"
                                        }), (0, n.jsx)("input", {
                                            type: "text",
                                            value: x,
                                            className: "w-8 text-center bg-transparent"
                                        }), (0, n.jsx)("button", {
                                            type: "button",
                                            className: "text-2xl text-green-400",
                                            onClick: () => {
                                                R(x + 1)
                                            },
                                            children: "+"
                                        })]
                                    }) : (0, n.jsx)("span", {
                                        className: "text-gray-400",
                                        children: "1x"
                                    })]
                                }, e.product._id)
                            }), g.map(e => {
                                var l, t;
                                return (0, n.jsxs)("li", {
                                    className: "flex items-center justify-between",
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex items-center gap-x-3 flex-1",
                                        children: [(0, n.jsx)("div", {
                                            className: "border rounded-xl w-20 h-20 flex-shrink-0 relative",
                                            children: (0, n.jsx)(a.CustomImage, {
                                                src: null !== (t = null === (l = e.img) || void 0 === l ? void 0 : l.url) && void 0 !== t ? t : "",
                                                fullUrl: !0,
                                                className: "rounded-xl object-contain",
                                                fill: !0,
                                                alt: "".concat(p.PRODUCT_IMAGE_ALT, " ").concat(e.name)
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [(0, n.jsx)("span", {
                                                className: "font-medium",
                                                children: e.name
                                            }), (0, n.jsx)("span", {
                                                className: "text-gray-500",
                                                children: e.description
                                            })]
                                        })]
                                    }), (0, n.jsx)("span", {
                                        className: "text-gray-400",
                                        children: "1x"
                                    })]
                                }, e._id)
                            })]
                        })
                    }), (0, n.jsxs)("footer", {
                        className: "flex flex-col gap-y-2 mt-6",
                        children: [(null == m ? void 0 : m.showSubtotal) === void 0 || (null == m ? void 0 : m.showSubtotal) ? (0, n.jsxs)("div", {
                            className: "flex items-center justify-between font-medium",
                            children: [(0, n.jsx)("span", {
                                children: p.SUBTOTAL
                            }), (0, n.jsx)("span", {
                                id: "subTotal",
                                children: (0, o.x)(f, v)
                            })]
                        }) : null, t ? (0, n.jsxs)("div", {
                            className: "flex items-center justify-between font-medium",
                            children: [(0, n.jsx)("span", {
                                children: p.SHIPPING
                            }), "number" == typeof h ? (0, n.jsx)("span", {
                                id: "shippingValue",
                                children: (0, o.x)(h, v)
                            }) : "-"]
                        }) : null, C ? (0, n.jsxs)("div", {
                            className: "flex items-center justify-between text-sm text-gray-500",
                            children: [(0, n.jsx)("span", {
                                children: p.DISCOUNT
                            }), (0, n.jsxs)("span", {
                                className: "text-green-500",
                                id: "discount",
                                children: ["- ", (0, o.x)(C, v)]
                            })]
                        }) : null, E ? (0, n.jsxs)("div", {
                            className: "flex items-center justify-between text-sm text-gray-500",
                            children: [(0, n.jsx)("span", {
                                children: p.PIX_DISCOUNT
                            }), (0, n.jsxs)("span", {
                                className: "text-green-500",
                                id: "discountPixValue",
                                children: ["- ", (0, o.x)(E, v)]
                            })]
                        }) : null, b ? (0, n.jsxs)("div", {
                            className: "flex items-center justify-between text-sm text-gray-500",
                            children: [(0, n.jsx)("span", {
                                children: p.COUPON_DISCOUNT
                            }), (0, n.jsxs)("span", {
                                className: "text-green-500",
                                id: "couponDiscountValue",
                                children: ["- ", (0, o.x)(D, v)]
                            })]
                        }) : null, (0, c.y)(null == m ? void 0 : m.showCoupon) ? (0, n.jsx)(s.w, {
                            salesPlanId: l._id,
                            storeId: l.store._id
                        }) : null, (0, n.jsxs)("div", {
                            className: "flex items-center justify-between mt-4 ".concat(_ || t ? "border-t-2 pt-4" : ""),
                            children: [(0, n.jsx)("span", {
                                className: "font-medium",
                                children: p.TOTAL
                            }), (0, n.jsx)("span", {
                                className: "text-3xl font-medium",
                                id: "total",
                                children: (0, o.x)(y - D - E, v)
                            })]
                        })]
                    })]
                })
            })
        },
        98272: function(e, l, t) {
            "use strict";
            t.d(l, {
                default: function() {
                    return ei
                }
            });
            var n = t(57437),
                i = t(9292),
                o = t(80182),
                r = t(58063),
                a = t(19433),
                s = t(14488),
                d = t(62235),
                c = t(19957),
                u = t(39700),
                m = t(50237),
                p = t(41254),
                v = t(6056),
                h = t(89167),
                x = t(29467),
                y = t(51549),
                f = t(64451),
                g = t(11374),
                C = t(9034),
                b = t(90923),
                E = t(67753),
                N = t(72778),
                j = t(80042),
                R = t.n(j),
                _ = t(16463),
                D = t(2265),
                w = t(39343),
                I = t(23580),
                P = t(19563),
                A = t(89164),
                S = t(48059),
                T = t.n(S);
            let L = (0, D.forwardRef)(function(e, l) {
                var t, i, o, r, a, s, d, c, u, m, p, v, h, x, y, f, g, C, b, E, N, j, R, _;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("button", {
                        ...e,
                        ref: l,
                        className: T().dynamic([
                            ["21ac677f528d78f7", [null !== (h = null == e ? void 0 : null === (t = e.theme) || void 0 === t ? void 0 : t.primaryColor) && void 0 !== h ? h : "#081D30", null !== (x = null == e ? void 0 : null === (i = e.theme) || void 0 === i ? void 0 : i.textColor) && void 0 !== x ? x : "white", null !== (y = null == e ? void 0 : null === (o = e.theme) || void 0 === o ? void 0 : o.primaryColor) && void 0 !== y ? y : "#081D30", null !== (f = null == e ? void 0 : null === (r = e.theme) || void 0 === r ? void 0 : r.primaryColor) && void 0 !== f ? f : "#081D30"]]
                        ]) + " " + (e && null != e.className && e.className || ""),
                        children: e.children
                    }), (0, n.jsx)(T(), {
                        id: "21ac677f528d78f7",
                        dynamic: [null !== (g = null == e ? void 0 : null === (a = e.theme) || void 0 === a ? void 0 : a.primaryColor) && void 0 !== g ? g : "#081D30", null !== (C = null == e ? void 0 : null === (s = e.theme) || void 0 === s ? void 0 : s.textColor) && void 0 !== C ? C : "white", null !== (b = null == e ? void 0 : null === (d = e.theme) || void 0 === d ? void 0 : d.primaryColor) && void 0 !== b ? b : "#081D30", null !== (E = null == e ? void 0 : null === (c = e.theme) || void 0 === c ? void 0 : c.primaryColor) && void 0 !== E ? E : "#081D30"],
                        children: "button.__jsx-style-dynamic-selector{background-color:".concat(null !== (N = null == e ? void 0 : null === (u = e.theme) || void 0 === u ? void 0 : u.primaryColor) && void 0 !== N ? N : "#081D30", ";color:").concat(null !== (j = null == e ? void 0 : null === (m = e.theme) || void 0 === m ? void 0 : m.textColor) && void 0 !== j ? j : "white", ";border-color:").concat(null !== (R = null == e ? void 0 : null === (p = e.theme) || void 0 === p ? void 0 : p.primaryColor) && void 0 !== R ? R : "#081D30", "}button.__jsx-style-dynamic-selector:hover{color:#081D30;background-color:transparent;border-color:").concat(null !== (_ = null == e ? void 0 : null === (v = e.theme) || void 0 === v ? void 0 : v.primaryColor) && void 0 !== _ ? _ : "#081D30", "}")
                    })]
                })
            });
            var O = t(16356),
                k = t(45973),
                M = t(84450);
            let B = (0, D.forwardRef)(function(e, l) {
                let {
                    checkout: t,
                    totalValue: i,
                    onClose: o,
                    onClickPayWithPix: r
                } = e, [a, s] = (0, D.useState)(!1), {
                    setInstantRecoveryDiscountValue: d
                } = (0, y.p)(), c = (0, D.useMemo)(() => {
                    if (!(null == t ? void 0 : t.instantRecoveryDiscountValue) || !t.instantRecoveryDiscountValue) return 0;
                    let e = 0;
                    return (null == t ? void 0 : t.instantRecoveryDiscountType) === f.Lb.FIXED ? e = t.instantRecoveryDiscountValue : t.instantRecoveryDiscountType === f.Lb.PERCENTUAL && (e = t.instantRecoveryDiscountValue / 100 * i), e
                }, [null == t ? void 0 : t.instantRecoveryDiscountType, null == t ? void 0 : t.instantRecoveryDiscountValue, i]), {
                    dict: u,
                    countryCode: m
                } = (0, M.g)(), p = () => {
                    s(!1), o && o()
                };
                return ((0, D.useImperativeHandle)(l, () => ({
                    toggle() {
                        s(!a)
                    }
                }), [a]), (0, D.useEffect)(() => {
                    document.body.style.overflowY = a ? "hidden" : "auto"
                }, [a]), a) ? (0, n.jsx)("div", {
                    className: "bg-black bg-opacity-30 fixed top-0 left-0 w-full h-full p-4 z-50 flex flex-col justify-center items-center",
                    children: (0, n.jsxs)("div", {
                        className: "bg-white rounded-xl p-6 overflow-y-auto max-w-md",
                        children: [(0, n.jsxs)("header", {
                            children: [(0, n.jsx)("div", {
                                className: "flex justify-end",
                                children: (0, n.jsx)("button", {
                                    type: "button",
                                    onClick: p,
                                    children: (0, n.jsx)(O.FU5, {
                                        size: 24
                                    })
                                })
                            }), (0, n.jsxs)("div", {
                                className: "mt-2",
                                children: [(0, n.jsx)("h5", {
                                    className: "text-center text-2xl font-medium",
                                    children: u.CARD_REFUSED_TITLE
                                }), c > 0 ? (0, n.jsxs)("p", {
                                    className: "text-center mt-4 text-lg text-gray-700",
                                    children: [u.CARD_REFUSED_PIX_OFFER, " ", (0, n.jsx)("span", {
                                        className: "text-green-500 font-medium",
                                        children: (0, k.x)(c, m)
                                    }), " ", u.CARD_REFUSED_DISCOUNT]
                                }) : (0, n.jsx)("p", {
                                    className: "text-center mt-4 text-lg text-gray-700",
                                    children: u.CARD_REFUSED_PIX_OFFER_NO_DISCOUNT
                                }), c > 0 ? (0, n.jsxs)("div", {
                                    className: "flex items-center justify-center gap-x-2 mt-2",
                                    children: [(0, n.jsxs)("span", {
                                        className: "line-through text-red-400",
                                        children: [u.CARD_REFUSED_FROM, " ", (0, k.x)(i, m)]
                                    }), (0, n.jsxs)("span", {
                                        className: "font-medium text-green-500 text-lg",
                                        children: [u.CARD_REFUSED_TO, " ", (0, k.x)(i - c, m)]
                                    })]
                                }) : null]
                            })]
                        }), (0, n.jsx)("div", {
                            className: "mt-4",
                            children: (0, n.jsx)("button", {
                                type: "button",
                                onClick: () => {
                                    d(c), r()
                                },
                                className: "bg-green-500 py-3 rounded-lg font-semibold text-white w-full shadow",
                                children: u.BUY_WITH_PIX_BUTTON
                            })
                        }), (0, n.jsx)("button", {
                            type: "button",
                            onClick: p,
                            className: "w-full mt-4 text-gray-700",
                            children: u.FINISH_WITH_CARD
                        })]
                    })
                }) : null
            });
            var U = t(33514),
                q = t(86103),
                X = t(46541),
                V = t(30554),
                F = t(40449),
                H = t(64878),
                G = t(23974),
                Q = t(41942);
            let W = {
                    USER: (0, n.jsx)(Q.Xws, {
                        size: 14
                    }),
                    PAYMENT: (0, n.jsx)(O.Yi7, {
                        size: 20
                    }),
                    SHIPPING: (0, n.jsx)(O.ili, {
                        size: 16
                    })
                },
                Z = e => {
                    var l, t, i, o, r, a;
                    let {
                        name: s,
                        theme: d
                    } = e;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: T().dynamic([
                                ["64add01ad29e290d", [null !== (l = null == d ? void 0 : d.primaryColor) && void 0 !== l ? l : "#0f172a", null !== (t = null == d ? void 0 : d.textColor) && void 0 !== t ? t : "white"]]
                            ]) + " rounded-xl w-8 h-8 icon-container flex justify-center items-center bg-primary text-white",
                            children: W[s]
                        }), (0, n.jsx)(T(), {
                            id: "64add01ad29e290d",
                            dynamic: [null !== (i = null == d ? void 0 : d.primaryColor) && void 0 !== i ? i : "#0f172a", null !== (o = null == d ? void 0 : d.textColor) && void 0 !== o ? o : "white"],
                            children: ".icon-container.__jsx-style-dynamic-selector{background-color:".concat(null !== (r = null == d ? void 0 : d.primaryColor) && void 0 !== r ? r : "#0f172a", ";color:").concat(null !== (a = null == d ? void 0 : d.textColor) && void 0 !== a ? a : "white", "}")
                        })]
                    })
                },
                Y = e => {
                    let {
                        title: l,
                        iconName: t,
                        theme: i,
                        children: o,
                        className: r = ""
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: "bg-white mb-4 rounded-xl p-6 shadow-md lg:bg-gray-50 ".concat(r),
                        children: [l && (0, n.jsxs)("h2", {
                            className: "text-xl text-blue font-medium flex items-center gap-x-3",
                            children: [t && (0, n.jsx)(Z, {
                                name: t,
                                theme: i
                            }), l]
                        }), (0, n.jsx)("div", {
                            className: "mt-4",
                            children: o
                        })]
                    })
                };
            var z = t(34781),
                K = t(85873),
                J = t(62432),
                $ = t(26057),
                ee = t(7316),
                el = t(46311);
            let et = !1,
                en = !1;
            var ei = e => {
                var l;
                let {
                    salesPlan: t,
                    checkout: j,
                    orderBumps: S,
                    shippings: T,
                    containsPhysicalProduct: O,
                    pixels: k,
                    creditCardAcquirer: Q,
                    token: W,
                    discounts: Z
                } = e, {
                    dict: ei,
                    language: eo,
                    countryCode: er,
                    currency: ea
                } = (0, M.g)(), es = (0, D.useRef)(null), ed = null === (l = t.store.registeredAcquires) || void 0 === l ? void 0 : l.find(e => void 0 !== e.clientId && "STRIPE" === e.acquirer.name && e.acquirer._id === (null == j ? void 0 : j.CREDIT_CARD)), ec = (0, D.useMemo)(() => ({
                    isPhoneRequired: void 0 === (null == j ? void 0 : j.isPhoneRequired) || (null == j ? void 0 : j.isPhoneRequired),
                    isDocumentRequired: void 0 === (null == j ? void 0 : j.isDocumentRequired) || (null == j ? void 0 : j.isDocumentRequired),
                    isEmailRequired: void 0 === (null == j ? void 0 : j.isEmailRequired) || (null == j ? void 0 : j.isEmailRequired)
                }), [null == j ? void 0 : j.isDocumentRequired, null == j ? void 0 : j.isEmailRequired, null == j ? void 0 : j.isPhoneRequired]), {
                    pixelsService: eu
                } = (0, D.useContext)(X.O), em = (0, D.useMemo)(() => T.find(e => {
                    let {
                        preSelected: l
                    } = e;
                    return l
                }), [T]), {
                    control: ep,
                    formState: {
                        isSubmitting: ev,
                        errors: eh
                    },
                    watch: ex,
                    setValue: ey,
                    register: ef,
                    handleSubmit: eg
                } = (0, w.cI)({
                    resolver: (0, E.X)((0, F.k)(ei)),
                    mode: "onSubmit",
                    defaultValues: {
                        locale: "".concat(eo, "-").concat(er),
                        quantity: 1,
                        containsPhysicalProduct: O,
                        installments: 1,
                        phone: "",
                        document: "",
                        number: "",
                        quantitySelectorEnabled: null == j ? void 0 : j.isQuantitySelectorEnabled,
                        shipping: null == em ? void 0 : em._id,
                        useShippingAsBilling: O,
                        isStripe: void 0 !== ed,
                        paymentMethod: "BR" === er && (null == j ? void 0 : j.acceptedPaymentMethods.includes(i.XL.PIX)) ? i.XL.PIX : i.XL.CREDIT_CARD,
                        ...ec
                    }
                }), {
                    qty: eC,
                    additionalSalesPlan: eb,
                    shippingValue: eE,
                    subTotal: eN,
                    total: ej,
                    coupon: eR,
                    setShippingValue: e_,
                    setDiscount: eD
                } = (0, y.p)(e => {
                    let {
                        qty: l,
                        additionalSalesPlan: t,
                        shippingValue: n,
                        subTotal: i,
                        total: o,
                        coupon: r,
                        setShippingValue: a,
                        setDiscount: s
                    } = e;
                    return {
                        qty: l,
                        additionalSalesPlan: t,
                        shippingValue: n,
                        subTotal: i,
                        total: o,
                        coupon: r,
                        setShippingValue: a,
                        setDiscount: s
                    }
                }), [ew, eI] = (0, D.useState)(""), [eP, eA] = (0, D.useState)(), [eS, eT] = (0, D.useState)(), [eL, eO] = (0, D.useState)(), [ek, eM] = (0, D.useState)(), [eB, eU] = (0, D.useState)(), [eq, eX] = (0, D.useState)(), [eV, eF] = (0, D.useState)(), [eH, eG] = (0, D.useState)(!1), [eQ, eW] = (0, D.useState)(!1), [eZ, eY] = (0, D.useState)(), [ez, eK, eJ, e$, e0, e1, e2, e3, e4, e7, e5, e8, e6, e9] = ex(["fullName", "email", "document", "phone", "cep", "state", "city", "street", "number", "complement", "paymentMethod", "shipping", "cardNumber", "useShippingAsBilling"]), le = (0, _.useRouter)(), ll = (0, D.useRef)(null), lt = (0, D.useMemo)(() => null == S ? void 0 : S.filter(e => {
                    let {
                        onSelectShippings: l
                    } = e;
                    return l.some(e => e === e8 || "all" === e)
                }), [S, e8]), ln = (0, _.useSearchParams)(), {
                    installments: li,
                    isFetchingInstallments: lo
                } = (0, r.l)({
                    checkout: j,
                    creditCardAcquirer: Q,
                    creditCardNumber: e6,
                    paymentMethod: e5,
                    salesPlan: t,
                    setValue: ey,
                    total: ej,
                    countryCode: er
                });
                (0, s.o)(t, {
                    currency: ea,
                    subTotal: eN,
                    quantity: eC
                }), (0, p.k)(t._id, t.store._id, W), (0, a.N)({
                    cep: e0,
                    neighborhood: null == eV ? void 0 : eV.neighborhood,
                    city: e2,
                    complement: e7,
                    containsPhysicalProduct: O,
                    document: eJ,
                    email: eK,
                    fullName: ez,
                    number: e4,
                    phone: e$,
                    selectedShipping: e8,
                    state: e1,
                    street: e3,
                    isMultiStep: !1,
                    salesPlanId: t._id,
                    storeId: t.store._id,
                    token: W,
                    dict: ei,
                    ...ec
                }), (0, o.J)(null == j ? void 0 : j.backRedirectUrl), (0, u.L)({
                    email: eK,
                    fullName: ez,
                    phone: e$,
                    hasGeneratedOrder: eQ,
                    payerDocument: eJ,
                    salesPlanId: t._id,
                    storeId: t.store._id
                }), (0, c.u)({
                    pixels: k,
                    storeType: t.store.type
                }), (0, d.N)({
                    pixels: k,
                    subTotal: eN
                }), (0, m.W)({
                    setValue: ey
                });
                let lr = (0, D.useRef)(),
                    la = (0, D.useRef)(null),
                    ls = (0, D.useMemo)(() => Z.find(e => e.active && e.paymentMethod === i.XL.PIX && (e.plansId.includes(t._id) || e.plansId.includes("all"))), [Z, t._id]),
                    ld = (0, D.useMemo)(() => ls ? ls.discountType === f.Lb.PERCENTUAL ? ej * ls.discount / 100 : ls.discountType === f.Lb.FIXED ? ls.discount : 0 : 0, [ls, ej]);
                (0, D.useEffect)(() => {
                    e5 && (e5 === i.XL.PIX ? eD(ld) : eD(0))
                }, [e5, ld, eD]);
                let lc = (0, D.useCallback)(async function(e) {
                        let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            t = e.target.value.replace(/\D/g, "");
                        if (ey(l ? "billingCep" : "cep", (0, J.a)(t), {
                                shouldValidate: !0
                            }), 8 === t.length && /^[0-9]{8}$/.test(t)) try {
                            eG(!0);
                            let {
                                data: e
                            } = await x.N.findCep(t);
                            l ? (e.logradouro && ey("billingStreet", e.logradouro, {
                                shouldValidate: !0
                            }), ey("billingState", e.uf, {
                                shouldValidate: !0
                            }), ey("billingCity", e.localidade, {
                                shouldValidate: !0
                            }), ey("billingNeighborhood", e.bairro, {
                                shouldValidate: !0
                            })) : (e.logradouro && ey("street", e.logradouro, {
                                shouldValidate: !0
                            }), ey("state", e.uf, {
                                shouldValidate: !0
                            }), ey("city", e.localidade, {
                                shouldValidate: !0
                            }), eI(e.bairro), eF({
                                street: e.logradouro,
                                state: e.uf,
                                city: e.localidade,
                                neighborhood: e.bairro,
                                cep: t
                            }))
                        } catch (e) {
                            I.Am.error(ei.CEP_ERROR_MESSAGE, {
                                autoClose: 3e3,
                                position: "top-center",
                                hideProgressBar: !0
                            }), console.error("Erro ao buscar CEP:", e)
                        } finally {
                            eG(!1)
                        }
                    }, [ey, ei.CEP_ERROR_MESSAGE]),
                    lu = eg(async e => {
                        try {
                            var l, n, o, r, a, s, d, c, u, m, p, x, y, f, E, R, _, D, w, P, A, S, T;
                            let N, L, O;
                            if ((null == es ? void 0 : es.current) && ed) {
                                let {
                                    token: e,
                                    error: l
                                } = await es.current.generateCardToken();
                                if (N = null != e ? e : void 0, l) throw l
                            }
                            let M = {};
                            ln.forEach((e, l) => {
                                l.includes("subid") && (M[l] = e)
                            });
                            try {
                                L = JSON.parse(null !== (c = (0, C.ej)(t._id)) && void 0 !== c ? c : "")
                            } catch (e) {
                                console.log("error get cookie")
                            }
                            let B = e5 === i.XL.CREDIT_CARD ? {
                                    street: e.useShippingAsBilling ? null !== (u = e.street) && void 0 !== u ? u : "" : null !== (m = e.billingStreet) && void 0 !== m ? m : "",
                                    complement: e.useShippingAsBilling ? null !== (p = e.complement) && void 0 !== p ? p : "" : null !== (x = e.billingComplement) && void 0 !== x ? x : "",
                                    number: e.useShippingAsBilling ? Number(e.number) : Number(e.billingNumber),
                                    neighborhood: e.useShippingAsBilling ? null != ew ? ew : "" : null !== (y = e.billingNeighborhood) && void 0 !== y ? y : "",
                                    city: e.useShippingAsBilling ? null !== (f = e.city) && void 0 !== f ? f : "" : null !== (E = e.billingCity) && void 0 !== E ? E : "",
                                    state: e.useShippingAsBilling ? null !== (R = e.state) && void 0 !== R ? R : "" : null !== (_ = e.billingState) && void 0 !== _ ? _ : "",
                                    cep: e.useShippingAsBilling ? null !== (D = e.cep) && void 0 !== D ? D : "" : null !== (w = e.billingCep) && void 0 !== w ? w : ""
                                } : void 0,
                                {
                                    clearSale: q,
                                    cyberSource: X
                                } = (0, U.E)(),
                                V = null === (l = e.expirationDate) || void 0 === l ? void 0 : l.split("/")[0],
                                F = "20".concat(null === (n = e.expirationDate) || void 0 === n ? void 0 : n.split("/")[1]);
                            e.paymentMethod === i.XL.CREDIT_CARD && ((null == Q ? void 0 : Q.name) === i.dU.CODIGUZ || (null == Q ? void 0 : Q.name) === i.dU.GHOSTS_PAY_V2) && e.cardHolder && e.cvc && e.installments && e.cardNumber && V && F && (O = await (0, ee.s)({
                                holderName: e.cardHolder,
                                amount: ej,
                                cvv: e.cvc,
                                expMonth: V,
                                expYear: F,
                                installments: e.installments,
                                number: e.cardNumber,
                                creditCardAcquirerName: Q.name
                            }));
                            let {
                                data: H
                            } = await h.Z.create({
                                payerCpf: null === (o = e.payerCpf) || void 0 === o ? void 0 : o.replace(/\D/g, ""),
                                payerName: e.fullName,
                                paymentMethod: e.paymentMethod,
                                installments: e.installments ? Number(e.installments) : 1,
                                quantity: e.quantity,
                                cardholder: e.cardHolder,
                                cardNumber: null === (r = e.cardNumber) || void 0 === r ? void 0 : r.replace(/\s/g, ""),
                                expirationMonth: V,
                                expirationYear: F,
                                securityCode: e.cvc,
                                payerEmail: e.email,
                                payerPhone: e.phone,
                                salesPlanId: t._id,
                                shippingId: e.shipping,
                                checkoutSessionId: null == L ? void 0 : L.id,
                                additionalSalesPlans: eb.map(e => {
                                    let {
                                        _id: l
                                    } = e;
                                    return l
                                }),
                                templateId: null == ln ? void 0 : ln.get("templateId"),
                                refusedOrderId: eZ,
                                kwaiClickId: (0, b._)(),
                                tiktokClickId: (0, el.j)(),
                                couponId: null == eR ? void 0 : eR._id,
                                discountId: e.paymentMethod === i.XL.PIX ? null == ls ? void 0 : ls._id : void 0,
                                clearSale: q,
                                cyberSource: X,
                                address: {
                                    cep: e.cep,
                                    city: e.city,
                                    number: Number(e.number),
                                    neighborhood: ew,
                                    state: e.state,
                                    street: e.street,
                                    complement: e.complement
                                },
                                cardToken: N,
                                cardId: O,
                                billingAddress: B,
                                currency: ea,
                                language: eo,
                                country: er
                            }, {
                                utm_campaign: ln.get("utm_campaign"),
                                utm_medium: ln.get("utm_medium"),
                                utm_term: ln.get("utm_term"),
                                utm_source: ln.get("utm_source"),
                                utm_content: ln.get("utm_content"),
                                xcod: ln.get("xcod"),
                                ...M
                            });
                            eO(H.order.value), eW(!0);
                            try {
                                (0, C.kT)(t._id)
                            } catch (e) {
                                console.log("error delete cookie")
                            }
                            let G = t.products.map(e => ({
                                id: e.product._id,
                                name: e.product.name,
                                quantity: eC,
                                value: (0, g.X)(t)
                            }));
                            eb.length > 0 && eb.forEach(e => {
                                e.products.forEach(l => {
                                    G.push({
                                        id: l.product._id,
                                        name: l.product.name,
                                        value: (0, g.X)(e),
                                        quantity: l.quantity
                                    })
                                })
                            });
                            let W = "".concat("https://nextapiv3.com", "/checkout/events/").concat(H.order._id),
                                Z = new EventSource(W),
                                Y = async () => {
                                    var e, l;
                                    if (en) return;
                                    let n = await (0, v.Z)(H.order._id);
                                    if (n && n.status === i.iF.APPROVED) {
                                        if (en = !0, e5 !== i.XL.PIX || et || (et = !0, await eu.track({
                                                event: "CompraPix",
                                                pixels: k,
                                                additionalData: {
                                                    total: n.value,
                                                    currency: ea,
                                                    paymentMethod: i.XL.PIX,
                                                    contentType: "product",
                                                    quantity: eC,
                                                    subTotal: eN,
                                                    shippingValue: eE,
                                                    transactionId: n._id,
                                                    items: G
                                                }
                                            })), null == t ? void 0 : null === (l = t.store) || void 0 === l ? void 0 : null === (e = l.checkout) || void 0 === e ? void 0 : e.externalThanksPageLink) {
                                            let e = [{
                                                    key: "nome",
                                                    value: n.payerName
                                                }, {
                                                    key: "email",
                                                    value: n.payerEmail
                                                }, {
                                                    key: "telefone",
                                                    value: n.payerPhone
                                                }, {
                                                    key: "documento",
                                                    value: n.payerCpf
                                                }, {
                                                    key: "utm_campaign",
                                                    value: ln.get("utm_campaign")
                                                }, {
                                                    key: "utm_medium",
                                                    value: ln.get("utm_medium")
                                                }, {
                                                    key: "utm_term",
                                                    value: ln.get("utm_term")
                                                }, {
                                                    key: "utm_source",
                                                    value: ln.get("utm_source")
                                                }, {
                                                    key: "utm_content",
                                                    value: ln.get("utm_content")
                                                }, {
                                                    key: "xcod",
                                                    value: ln.get("xcod")
                                                }, ...Object.entries(M).map(e => {
                                                    let [l, t] = e;
                                                    return {
                                                        key: l,
                                                        value: t
                                                    }
                                                })].filter(e => e.value).map(e => "".concat(e.key, "=").concat(encodeURIComponent(e.value))).join("&"),
                                                l = e ? "".concat(t.store.checkout.externalThanksPageLink, "?").concat(e) : t.store.checkout.externalThanksPageLink;
                                            window.location.replace(l)
                                        } else le.push("/thanks/".concat(H.order._id))
                                    }
                                };
                            window.document && (window.document.removeEventListener("visibilitychange", Y), window.document.addEventListener("visibilitychange", () => {
                                "visible" === window.document.visibilityState && Y()
                            })), Z.onmessage = async e => {
                                e.data === "".concat(H.order._id, "-APPROVED") && Y()
                            }, (e5 === i.XL.PIX || eZ) && (I.Am.success(ei.PIX_SUCCESS_MESSAGE, {
                                autoClose: 3e3,
                                position: "top-center",
                                hideProgressBar: !0
                            }), eA(H.paymentInfo.qrCode), eT(H.paymentInfo.base64QrCode), await eu.track({
                                event: "PixGerado",
                                pixels: k
                            })), e5 === i.XL.BOLETO && (I.Am.success(ei.BOLETO_SUCCESS_MESSAGE, {
                                autoClose: 3e3,
                                position: "top-center",
                                hideProgressBar: !0
                            }), eM(H.paymentInfo.digitableLine), eU(H.paymentInfo.barCode), eX(H.paymentInfo.boletoDueDate), await eu.track({
                                event: "BoletoGerado",
                                pixels: k
                            })), e5 === i.XL.CREDIT_CARD && (null == H ? void 0 : null === (a = H.paymentInfo) || void 0 === a ? void 0 : a.status) === i.iF.APPROVED ? (await eu.track({
                                event: "CompraCart\xe3o",
                                pixels: k,
                                additionalData: {
                                    total: H.order.value,
                                    currency: ea,
                                    paymentMethod: i.XL.CREDIT_CARD,
                                    contentType: "product",
                                    quantity: eC,
                                    shippingValue: eE,
                                    subTotal: eN,
                                    transactionId: null == H ? void 0 : H.order._id,
                                    items: G
                                }
                            }), (null == t ? void 0 : null === (A = t.store) || void 0 === A ? void 0 : null === (P = A.checkout) || void 0 === P ? void 0 : P.externalThanksPageLink) ? window.location.replace(t.store.checkout.externalThanksPageLink) : le.push("/thanks/".concat(H.order._id))) : e5 === i.XL.CREDIT_CARD && (null == H ? void 0 : null === (s = H.paymentInfo) || void 0 === s ? void 0 : s.status) === i.iF.REFUSED && (null == j ? void 0 : j.instantRecovery) ? (null === (S = lr.current) || void 0 === S || S.toggle(), eY(null == H ? void 0 : null === (T = H.order) || void 0 === T ? void 0 : T._id)) : e5 === i.XL.CREDIT_CARD && (null == H ? void 0 : null === (d = H.paymentInfo) || void 0 === d ? void 0 : d.status) === i.iF.REFUSED && I.Am.error(ei.CREDIT_CARD_REFUSED_MESSAGE, {
                                autoClose: 3e3,
                                position: "top-center",
                                hideProgressBar: !0
                            })
                        } catch (l) {
                            N.av({
                                email: null == e ? void 0 : e.email,
                                username: null == e ? void 0 : e.fullName
                            }), N.uT(ei.PAYMENT_ERROR_MESSAGE), N.Tb(l), I.Am.error(ei.PAYMENT_ERROR_MESSAGE, {
                                autoClose: 3e3,
                                position: "top-center",
                                hideProgressBar: !0
                            })
                        }
                    }),
                    lm = (0, D.useCallback)(() => {
                        ek && (R()(ek), I.Am.success(ei.COPY_SUCCESS_MESSAGE, {
                            autoClose: 3e3,
                            position: "top-center",
                            hideProgressBar: !0
                        }))
                    }, [ek, ei]),
                    lp = (0, D.useCallback)(() => {
                        var e, l;
                        null === (e = lr.current) || void 0 === e || e.toggle(), ey("installments", 1), null === (l = la.current) || void 0 === l || l.click()
                    }, [ey]),
                    lv = (0, D.useCallback)(() => eP && eL ? (0, n.jsx)(V.l, {
                        pixCode: eP,
                        pixQrCode: eS,
                        isOpen: !!eP,
                        pixValue: eL.toLocaleString("pt-BR", {
                            currency: "BRL",
                            style: "currency"
                        }),
                        theme: null == j ? void 0 : j.theme,
                        onClose: () => {}
                    }) : eB && ek ? (0, n.jsx)($.n, {
                        dict: ei,
                        boletoDueDate: eq,
                        barCode: eB,
                        digitableLines: ek,
                        copyDigitableLines: lm,
                        checkout: j,
                        barcodeRef: ll
                    }) : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(Y, {
                            title: ei.IDENTIFICATION_TITLE,
                            iconName: "USER",
                            theme: null == j ? void 0 : j.theme,
                            children: (0, n.jsx)(H.G, {
                                control: ep,
                                errors: eh,
                                register: ef,
                                checkout: j,
                                countryCode: er,
                                dict: ei,
                                showLabels: !0
                            })
                        }), O && (0, n.jsx)(Y, {
                            title: ei.ADDRESS_TITLE_SIMPLE,
                            iconName: "SHIPPING",
                            theme: null == j ? void 0 : j.theme,
                            children: (0, n.jsx)(G.z, {
                                control: ep,
                                errors: eh,
                                register: ef,
                                setValue: ey,
                                onCepChange: lc,
                                countryCode: er,
                                address: eV,
                                shippings: T,
                                checkout: j,
                                dict: ei,
                                showLabels: !1,
                                cepWatch: e0
                            })
                        }), (0, n.jsxs)("div", {
                            className: "bg-white rounded-xl p-6 mt-6 shadow-md lg:bg-gray-50 lg:pb-4",
                            children: [(0, n.jsx)(z.Q, {
                                control: ep,
                                errors: eh,
                                register: ef,
                                setValue: ey,
                                paymentMethod: e5,
                                checkout: j,
                                countryCode: er,
                                currency: ea,
                                language: eo,
                                installments: li,
                                isFetchingInstallments: lo,
                                selectedPixDiscount: ls,
                                filteredOrderBumps: lt,
                                isStripeAndInfo: ed,
                                containsPhysicalProduct: O,
                                dict: ei,
                                stripeRef: es,
                                onCepChange: lc,
                                useShippingAsBilling: e9
                            }), (0, n.jsxs)(L, {
                                ref: la,
                                type: "submit",
                                className: "flex justify-center items-center gap-x-4 py-5 w-full rounded-2xl mt-2 font-medium outline-none transaction-all border duration-400 bg-primary text-white hover:border-primary disabled:bg-opacity-30",
                                disabled: ev || eH,
                                theme: null == j ? void 0 : j.theme,
                                children: [(null == j ? void 0 : j.payButtonText) && (null == j ? void 0 : j.payButtonText) !== "" ? (0, n.jsx)("span", {
                                    children: j.payButtonText
                                }) : (0, n.jsx)("span", {
                                    children: ev ? ei.PAYING_BUTTON : ei.PAY_BUTTON
                                }), ev ? (0, n.jsx)("div", {
                                    className: "flex items-center justify-center",
                                    children: (0, n.jsx)("div", {
                                        className: "w-6 h-6 border-4 border-t-1 border-t-primary border-gray-200 rounded-full animate-spin"
                                    })
                                }) : null]
                            }), (0, n.jsx)(K.J, {
                                dict: ei,
                                checkout: j,
                                showFooter: q.q,
                                BlueCheckIcon: P.Z,
                                SafeIcon: A.Z
                            })]
                        })]
                    }), [eB, eq, j, ep, lm, ek, eh, lt, li, eH, lo, ev, lc, e5, eP, eS, ef, ls, eL, ei, er, ey, ea, ed, eo, eV, T, O, e9, e0]);
                return (0, D.useEffect)(() => {
                    eC && "number" == typeof eC && ey("quantity", eC, {
                        shouldValidate: !0
                    })
                }, [eC, ey]), (0, n.jsxs)("div", {
                    className: "mt-6 lg:pt-14",
                    children: [(0, n.jsx)("form", {
                        className: "w-full flex flex-col lg:pb-3",
                        onSubmit: lu,
                        children: lv()
                    }), (null == j ? void 0 : j.instantRecovery) ? (0, n.jsx)(B, {
                        ref: lr,
                        checkout: j,
                        totalValue: ej,
                        onClickPayWithPix: lp,
                        onClose: () => eY(void 0)
                    }) : null]
                })
            }
        },
        52658: function(e, l, t) {
            "use strict";
            t.d(l, {
                YourCart: function() {
                    return p
                }
            });
            var n = t(57437),
                i = t(51549),
                o = t(45973),
                r = t(2265),
                a = t(65194),
                s = t(75741),
                d = t(25787),
                c = t(23958),
                u = t(96164),
                m = t(84450);
            let p = (0, r.memo)(function(e) {
                let {
                    salesPlan: l,
                    containsPhysicalProduct: t,
                    checkout: p
                } = e, {
                    dict: v,
                    countryCode: h
                } = (0, m.g)(), {
                    shippingValue: x,
                    qty: y,
                    total: f,
                    subTotal: g,
                    additionalSalesPlan: C,
                    instantRecoveryDiscountValue: b,
                    coupon: E,
                    discount: N,
                    setTotal: j,
                    setSubTotal: R,
                    setQty: _
                } = (0, i.p)(e => {
                    let {
                        shippingValue: l,
                        qty: t,
                        subTotal: n,
                        total: i,
                        additionalSalesPlan: o,
                        instantRecoveryDiscountValue: r,
                        coupon: a,
                        discount: s,
                        setTotal: d,
                        setSubTotal: c,
                        setQty: u
                    } = e;
                    return {
                        shippingValue: l,
                        qty: t,
                        total: i,
                        subTotal: n,
                        additionalSalesPlan: o,
                        instantRecoveryDiscountValue: r,
                        coupon: a,
                        discount: s,
                        setTotal: d,
                        setSubTotal: c,
                        setQty: u
                    }
                }), D = (null == p ? void 0 : p.showSubtotal) === void 0 || (null == p ? void 0 : p.showSubtotal), w = (0, r.useMemo)(() => E ? (0, d.s)(f, E) : 0, [E, f]);
                return (0, r.useEffect)(() => {
                    1 === l.products.length && _(l.products[0].quantity)
                }, [l.products, _]), (0, r.useEffect)(() => {
                    let e = 0,
                        t = null != x ? x : 0,
                        n = l.salesPrice * y,
                        i = n + t;
                    C.length > 0 ? (n += e = C.reduce((e, l) => e + l.salesPrice, 0), i += e) : e = 0, b && (i -= b), R(n), j(i)
                }, [C, y, l.salesPrice, x, R, j, b]), (0, n.jsxs)("div", {
                    className: (0, u.m6)("bg-white shadow-md rounded-xl px-6 py-8 lg:shadow-none lg:bg-transparent lg:max-w-md lg:mx-auto", (null == p ? void 0 : p.logo) ? "pt-16 lg:pt-28" : "pt-6 lg:pt-10"),
                    children: [(null == p ? void 0 : p.showYourCartText) === void 0 || p.showYourCartText ? (0, n.jsxs)("header", {
                        className: "flex items-center justify-between mb-6",
                        children: [(0, n.jsx)("span", {
                            className: "text-lg",
                            children: v.YOUR_CART
                        }), (0, n.jsx)("span", {
                            className: "w-3 h-3 rounded-full bg-primary"
                        })]
                    }) : null, (0, n.jsx)("main", {
                        children: (0, n.jsxs)("ul", {
                            className: "flex flex-col gap-y-4",
                            id: "items",
                            children: [l.products.map(e => {
                                var t;
                                return (0, n.jsxs)("li", {
                                    className: "flex items-center justify-between border-b pb-4",
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex items-center gap-x-3 flex-1",
                                        children: [(0, n.jsx)("div", {
                                            className: "border rounded-xl w-20 h-20 flex-shrink-0 relative",
                                            children: (0, n.jsx)(a.CustomImage, {
                                                src: null === (t = e.product.img) || void 0 === t ? void 0 : t.url,
                                                fullUrl: !0,
                                                className: "rounded-xl object-contain",
                                                priority: !0,
                                                fill: !0,
                                                alt: "".concat(v.PRODUCT_IMAGE_ALT, " ").concat(e.product.name)
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [(0, n.jsx)("span", {
                                                className: "font-medium",
                                                children: e.product.name
                                            }), (0, n.jsx)("span", {
                                                className: "text-gray-500",
                                                children: e.product.description
                                            })]
                                        })]
                                    }), (null == p ? void 0 : p.isQuantitySelectorEnabled) && 1 === l.products.length ? (0, n.jsxs)("div", {
                                        className: "flex items-center gap-x-2",
                                        children: [(0, n.jsx)("button", {
                                            type: "button",
                                            className: "text-3xl text-red-400",
                                            onClick: () => {
                                                1 !== y && _(y - 1)
                                            },
                                            children: "-"
                                        }), (0, n.jsx)("input", {
                                            type: "text",
                                            value: y,
                                            className: "w-8 text-center bg-transparent"
                                        }), (0, n.jsx)("button", {
                                            type: "button",
                                            className: "text-2xl text-green-400",
                                            onClick: () => {
                                                _(y + 1)
                                            },
                                            children: "+"
                                        })]
                                    }) : (null == p ? void 0 : p.showQuantity) === void 0 || (null == p ? void 0 : p.showQuantity) ? (0, n.jsxs)("span", {
                                        className: "text-gray-400",
                                        children: [e.quantity, "x"]
                                    }) : null]
                                }, e.product._id)
                            }), C.map(e => {
                                var l, t;
                                return (0, n.jsxs)("li", {
                                    className: "flex items-center justify-between border-b pb-4",
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex items-center gap-x-3 flex-1",
                                        children: [(0, n.jsx)("div", {
                                            className: "border rounded-xl w-20 h-20 flex-shrink-0 relative",
                                            children: (0, n.jsx)(a.CustomImage, {
                                                src: null !== (t = null === (l = e.img) || void 0 === l ? void 0 : l.url) && void 0 !== t ? t : "",
                                                fullUrl: !0,
                                                className: "rounded-xl object-contain",
                                                fill: !0,
                                                alt: "".concat(v.PRODUCT_IMAGE_ALT, " ").concat(e.name)
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [(0, n.jsx)("span", {
                                                className: "font-medium",
                                                children: e.name
                                            }), (0, n.jsx)("span", {
                                                className: "text-gray-500",
                                                children: e.description
                                            })]
                                        })]
                                    }), (0, n.jsx)("span", {
                                        className: "text-gray-400",
                                        children: "1x"
                                    })]
                                }, e._id)
                            })]
                        })
                    }), (0, n.jsxs)("footer", {
                        className: "flex flex-col gap-y-2 mt-6",
                        children: [(null == p ? void 0 : p.showSubtotal) === void 0 || (null == p ? void 0 : p.showSubtotal) ? (0, n.jsxs)("div", {
                            className: "flex items-center justify-between text-sm text-gray-500",
                            children: [(0, n.jsx)("span", {
                                children: v.SUBTOTAL
                            }), (0, n.jsx)("span", {
                                id: "subTotal",
                                children: (0, o.x)(g, h)
                            })]
                        }) : null, t ? (0, n.jsxs)("div", {
                            className: "flex items-center justify-between text-sm text-gray-500",
                            children: [(0, n.jsx)("span", {
                                children: v.SHIPPING
                            }), "number" == typeof x ? (0, n.jsx)("span", {
                                id: "shippingValue",
                                children: (0, o.x)(x, h)
                            }) : "-"]
                        }) : null, b ? (0, n.jsxs)("div", {
                            className: "flex items-center justify-between text-sm text-gray-500",
                            children: [(0, n.jsx)("span", {
                                children: v.DISCOUNT
                            }), (0, n.jsxs)("span", {
                                className: "text-green-500",
                                id: "discount",
                                children: ["- ", (0, o.x)(b, h)]
                            })]
                        }) : null, N ? (0, n.jsxs)("div", {
                            className: "flex items-center justify-between text-sm text-gray-500",
                            children: [(0, n.jsx)("span", {
                                children: v.PIX_DISCOUNT
                            }), (0, n.jsxs)("span", {
                                className: "text-green-500",
                                id: "discountPixValue",
                                children: ["- ", (0, o.x)(N, h)]
                            })]
                        }) : null, E ? (0, n.jsxs)("div", {
                            className: "flex items-center justify-between text-sm text-gray-500",
                            children: [(0, n.jsx)("span", {
                                children: v.COUPON_DISCOUNT
                            }), (0, n.jsxs)("span", {
                                className: "text-green-500",
                                id: "couponDiscountValue",
                                children: ["- ", (0, o.x)(w, h)]
                            })]
                        }) : null, (0, c.y)(null == p ? void 0 : p.showCoupon) ? (0, n.jsx)(s.w, {
                            salesPlanId: l._id,
                            storeId: l.store._id
                        }) : null, (0, n.jsxs)("div", {
                            className: "flex items-center justify-between mt-4 ".concat(D || t ? "border-t pt-4" : ""),
                            children: [(0, n.jsx)("span", {
                                className: "text-gray-500",
                                children: v.TOTAL
                            }), (0, n.jsx)("span", {
                                id: "total",
                                children: (0, o.x)(f - w - N, h)
                            })]
                        })]
                    })]
                })
            })
        },
        48809: function(e, l, t) {
            "use strict";

            function n(e) {
                if (!e || 14 !== e.length || /^(\d)\1+$/.test(e)) return !1;
                let l = (e, l) => {
                        let t = 0;
                        for (let n = 0; n < l.length; n++) t += parseInt(e[n]) * l[n];
                        let n = t % 11;
                        return n < 2 ? 0 : 11 - n
                    },
                    t = e.slice(0, 12),
                    n = l(t, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]),
                    i = l(t + n, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
                return n === parseInt(e[12]) && i === parseInt(e[13])
            }
            t.d(l, {
                l: function() {
                    return n
                }
            })
        },
        61387: function(e, l, t) {
            "use strict";

            function n(e) {
                if (!e || 11 !== e.length || /^(\d)\1+$/.test(e)) return !1;
                let l = (e, l) => {
                        let t = 0;
                        for (let n = 0; n < e.length; n++) t += parseInt(e[n]) * (l - n);
                        let n = t % 11;
                        return n < 2 ? 0 : 11 - n
                    },
                    t = l(e.slice(0, 9), 10),
                    n = l(e.slice(0, 10), 11);
                return t === parseInt(e[9]) && n === parseInt(e[10])
            }
            t.d(l, {
                S: function() {
                    return n
                }
            })
        },
        75741: function(e, l, t) {
            "use strict";
            t.d(l, {
                w: function() {
                    return c
                }
            });
            var n = t(57437),
                i = t(54438);
            let o = {
                validateCoupon: e => i.h.post("".concat("stores", "/validateCoupon"), e)
            };
            var r = t(2265),
                a = t(23580),
                s = t(51549),
                d = t(84450);
            let c = e => {
                let {
                    salesPlanId: l,
                    storeId: t
                } = e, {
                    dict: i
                } = (0, d.g)(), [c, u] = (0, r.useState)(!1), [m, p] = (0, r.useState)(""), [v, h] = (0, r.useState)(!1), [x, y] = (0, r.useState)(!1), [f, g] = (0, r.useState)(!1), C = x && f, b = (0, s.p)(e => {
                    let {
                        setCoupon: l
                    } = e;
                    return l
                }), E = async () => {
                    if (m) {
                        try {
                            h(!0);
                            let e = await o.validateCoupon({
                                couponName: m,
                                salesPlanId: l,
                                storeId: t
                            });
                            e.data.isValid && e.data.coupon ? (y(!0), a.Am.success(i.COUPON_SUCCESS_MESSAGE), b(e.data.coupon)) : (y(!1), b(void 0), a.Am.error(i.COUPON_INVALID_ERROR))
                        } catch (e) {
                            a.Am.error(i.COUPON_VALIDATION_ERROR), b(void 0)
                        } finally {
                            h(!1)
                        }
                        g(!0)
                    }
                };
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)("button", {
                        type: "button",
                        className: "text-blue-400 font-light text-sm",
                        onClick: () => u(!0),
                        children: i.ADD_COUPON_BUTTON
                    }), c ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            className: "flex items-center gap-x-2 mt-1",
                            children: [(0, n.jsx)("input", {
                                type: "text",
                                name: "cupom",
                                className: "border rounded-lg px-2 py-2 text-sm w-full transition-all duration-400 ".concat(C ? "border-green-500 text-green-500" : f ? "border-red-400 text-red-400" : ""),
                                placeholder: i.COUPON_PLACEHOLDER,
                                value: m,
                                onChange: e => {
                                    p(e.target.value.toUpperCase()), g(!1), y(!1)
                                }
                            }), v ? (0, n.jsx)("div", {
                                className: "w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"
                            }) : (0, n.jsx)("button", {
                                type: "button",
                                disabled: !m || v || x,
                                className: "text-blue-400 font-light text-sm disabled:opacity-40 disabled:cursor-not-allowed",
                                onClick: E,
                                children: i.APPLY_BUTTON
                            })]
                        }), f ? (0, n.jsx)("span", {
                            className: "text-sm ".concat(C ? "text-green-500" : "text-red-400"),
                            children: x ? i.COUPON_APPLIED_MESSAGE : i.COUPON_INVALID_MESSAGE
                        }) : null]
                    }) : null]
                })
            }
        },
        13980: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                Counter: function() {
                    return c
                }
            });
            var n = t(57437),
                i = t(48059),
                o = t.n(i),
                r = t(96164),
                a = t(9034),
                s = t(2265),
                d = e => {
                    let {
                        initialHours: l = 0,
                        initialMinutes: t = 0,
                        initialSeconds: i = 0,
                        countDownTime: o,
                        message: r
                    } = e, [d, c] = (0, s.useState)({
                        hours: l,
                        minutes: t,
                        seconds: i
                    }), u = (0, s.useCallback)(e => {
                        let l = e - new Date().getTime();
                        return l <= 0 ? {
                            hours: 0,
                            minutes: 0,
                            seconds: 0
                        } : {
                            hours: Math.floor(l % 864e5 / 36e5),
                            minutes: Math.floor(l % 36e5 / 6e4),
                            seconds: Math.floor(l % 6e4 / 1e3)
                        }
                    }, []);
                    return ((0, s.useEffect)(() => {
                        let e;
                        let l = (0, a.ej)("targetTime");
                        l ? e = Number(l) : (e = new Date().getTime() + 6e4 * o, (0, a.d8)("targetTime", String(e), o + 20));
                        let t = setInterval(() => {
                            c(u(e));
                            let {
                                hours: l,
                                minutes: n,
                                seconds: i
                            } = u(e);
                            0 === l && 0 === n && 0 === i && clearInterval(t)
                        }, 1e3);
                        return () => clearInterval(t)
                    }, [o, u]), 0 === d.hours && 0 === d.minutes && 0 === d.seconds) ? (0, n.jsx)("p", {
                        children: r
                    }) : (0, n.jsx)("div", {
                        className: "flex flex-col items-center justify-center",
                        children: (0, n.jsxs)("div", {
                            className: "text-4xl",
                            children: [String(d.hours).padStart(2, "0"), ":", String(d.minutes).padStart(2, "0"), ":", String(d.seconds).padStart(2, "0")]
                        })
                    })
                };
            let c = e => {
                var l, t, i, a, s, c, u, m, p, v, h, x, y, f, g, C, b, E, N, j, R, _, D, w, I, P, A;
                let {
                    checkout: S,
                    initialHours: T,
                    initialMinutes: L,
                    initialSeconds: O
                } = e;
                return (null == S ? void 0 : null === (l = S.countdown) || void 0 === l ? void 0 : l.time) ? (0, n.jsxs)("div", {
                    id: "counter",
                    className: o().dynamic([
                        ["98543d0f50a576e5", [null !== (C = null == S ? void 0 : null === (t = S.theme) || void 0 === t ? void 0 : t.primaryColor) && void 0 !== C ? C : "#081D30", null !== (b = null == S ? void 0 : null === (i = S.theme) || void 0 === i ? void 0 : i.textColor) && void 0 !== b ? b : "white", null !== (E = null == S ? void 0 : null === (a = S.theme) || void 0 === a ? void 0 : a.primaryColor) && void 0 !== E ? E : "#081D30"]]
                    ]) + " " + ((0, r.m6)("fixed bottom-0 left-0 w-full bg-primary py-2 flex flex-col justify-center items-center text-white z-50 lg:h-20 lg:max-w-sm lg:py-0 lg:-translate-x-1/2 lg:left-1/2", S.textBar ? "lg:bottom-0 lg:rounded-t-full" : "lg:top-0 lg:rounded-b-full") || ""),
                    children: [(0, n.jsx)("span", {
                        className: o().dynamic([
                            ["98543d0f50a576e5", [null !== (N = null == S ? void 0 : null === (s = S.theme) || void 0 === s ? void 0 : s.primaryColor) && void 0 !== N ? N : "#081D30", null !== (j = null == S ? void 0 : null === (c = S.theme) || void 0 === c ? void 0 : c.textColor) && void 0 !== j ? j : "white", null !== (R = null == S ? void 0 : null === (u = S.theme) || void 0 === u ? void 0 : u.primaryColor) && void 0 !== R ? R : "#081D30"]]
                        ]),
                        children: (null == S ? void 0 : S.counterMessage) || "Esta promo\xe7\xe3o encerra em:"
                    }), (0, n.jsx)(d, {
                        initialHours: T,
                        initialMinutes: L,
                        initialSeconds: O,
                        countDownTime: null == S ? void 0 : null === (m = S.countdown) || void 0 === m ? void 0 : m.time,
                        message: null == S ? void 0 : null === (p = S.countdown) || void 0 === p ? void 0 : p.message
                    }), (0, n.jsx)(o(), {
                        id: "98543d0f50a576e5",
                        dynamic: [null !== (_ = null == S ? void 0 : null === (v = S.theme) || void 0 === v ? void 0 : v.primaryColor) && void 0 !== _ ? _ : "#081D30", null !== (D = null == S ? void 0 : null === (h = S.theme) || void 0 === h ? void 0 : h.textColor) && void 0 !== D ? D : "white", null !== (w = null == S ? void 0 : null === (x = S.theme) || void 0 === x ? void 0 : x.primaryColor) && void 0 !== w ? w : "#081D30"],
                        children: "#counter.__jsx-style-dynamic-selector{background-color:".concat(null !== (I = null == S ? void 0 : null === (y = S.theme) || void 0 === y ? void 0 : y.primaryColor) && void 0 !== I ? I : "#081D30", ";color:").concat(null !== (P = null == S ? void 0 : null === (f = S.theme) || void 0 === f ? void 0 : f.textColor) && void 0 !== P ? P : "white", ";border-color:").concat(null !== (A = null == S ? void 0 : null === (g = S.theme) || void 0 === g ? void 0 : g.primaryColor) && void 0 !== A ? A : "#081D30", "}")
                    })]
                }) : null
            }
        },
        67933: function(e, l, t) {
            "use strict";
            t.d(l, {
                F: function() {
                    return r
                }
            });
            var n = t(57437),
                i = t(64451),
                o = t(45973);
            let r = e => {
                let {
                    type: l,
                    discount: t,
                    dict: r,
                    countryCode: a
                } = e;
                return (0, n.jsxs)("div", {
                    className: "flex items-center gap-2 bg-green-50 rounded-lg px-4 py-2 border border-green-100",
                    children: [(0, n.jsx)("div", {
                        className: "flex-shrink-0",
                        children: (0, n.jsx)("svg", {
                            className: "w-5 h-5 text-green-500",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: (0, n.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                clipRule: "evenodd"
                            })
                        })
                    }), (0, n.jsxs)("div", {
                        className: "flex flex-col",
                        children: [(0, n.jsx)("span", {
                            className: "text-green-700 font-semibold",
                            children: l === i.Lb.PERCENTUAL ? "".concat(t, "% OFF") : "".concat((0, o.x)(t, a), " OFF")
                        }), (0, n.jsx)("span", {
                            className: "text-green-600 text-xs",
                            children: r.PIX_DISCOUNT_TEXT
                        })]
                    })]
                })
            }
        },
        50036: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                GatewayCreditCardScripts: function() {
                    return a
                }
            });
            var n = t(57437),
                i = t(31877),
                o = t(9292),
                r = t(2265);
            let a = e => {
                let {
                    creditCardAcquirerName: l,
                    isCreditCardActive: t,
                    clientId: a
                } = e, s = (0, r.useCallback)(async () => {
                    if (!a) {
                        console.log("Sem client id para o gateway ".concat(l), a);
                        return
                    }
                    await CodiguzHub.setPublicKey(a)
                }, [a, l]), d = (0, r.useCallback)(async () => {
                    if (!a) {
                        console.log("Sem client id para o gateway ".concat(l), a);
                        return
                    }
                    await GhostsPay.setPublicKey(a)
                }, [a, l]);
                return t && l === o.dU.CODIGUZ ? (0, n.jsx)(i.default, {
                    src: "https://gapi.codiguz.com/functions/v1/js",
                    onLoad: s
                }) : t && l === o.dU.GHOSTS_PAY_V2 ? (0, n.jsx)(i.default, {
                    src: "https://api.ghostspaysv2.com/functions/v1/js",
                    onLoad: d
                }) : t && l === o.dU.SAFIRA_PAY ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("input", {
                        type: "hidden",
                        id: "CredPayToken",
                        value: ""
                    }), (0, n.jsx)(i.default, {
                        src: "https://cdn.jsdelivr.net/gh/axisbanking-ofc/axis-scripts/fingerprint.js",
                        strategy: "lazyOnload"
                    }), (0, n.jsx)(i.default, {
                        src: "https://app.safirapag.com/scripts/card-fingerprint/clear-sale.js",
                        strategy: "lazyOnload"
                    })]
                }) : null
            }
        },
        55951: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return d
                }
            });
            var n = t(57437),
                i = t(84776);
            t(43873);
            var o = t(2265),
                r = t(65194);
            let a = e => {
                    let {
                        rating: l
                    } = e;
                    return (0, n.jsx)("div", {
                        className: "flex items-center gap-0.5",
                        children: Array.from({
                            length: 5
                        }).map((e, t) => {
                            let i = Math.floor(l),
                                o = l - i > 0 && t === i;
                            return t < i ? (0, n.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                className: "w-5 h-5 text-yellow-400",
                                children: (0, n.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",
                                    clipRule: "evenodd"
                                })
                            }, t) : o ? (0, n.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                className: "w-5 h-5 text-yellow-400",
                                children: [(0, n.jsx)("defs", {
                                    children: (0, n.jsxs)("linearGradient", {
                                        id: "half",
                                        children: [(0, n.jsx)("stop", {
                                            offset: "50%",
                                            stopColor: "currentColor"
                                        }), (0, n.jsx)("stop", {
                                            offset: "50%",
                                            stopColor: "#E5E7EB"
                                        })]
                                    })
                                }), (0, n.jsx)("path", {
                                    fill: "url(#half)",
                                    d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",
                                    clipRule: "evenodd"
                                })]
                            }, t) : (0, n.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                className: "w-5 h-5 text-gray-200",
                                children: (0, n.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",
                                    clipRule: "evenodd"
                                })
                            }, t)
                        })
                    })
                },
                s = {
                    perView: 1.1,
                    autoplay: 3e3,
                    type: "carousel"
                };
            var d = e => {
                let {
                    reviews: l
                } = e, t = (0, o.useRef)(null);
                return (0, o.useEffect)(() => {
                    if ((null == t ? void 0 : t.current) && l.length > 0) {
                        let e = new i.Z(t.current, s).mount();
                        return () => {
                            e.destroy()
                        }
                    }
                }, [l]), (0, n.jsx)("div", {
                    ref: t,
                    className: "glide",
                    children: (0, n.jsx)("div", {
                        className: "glide__track",
                        "data-glide-el": "track",
                        children: (0, n.jsx)("ul", {
                            className: "glide__slides",
                            children: l.filter(e => {
                                let {
                                    active: l
                                } = e;
                                return l
                            }).map(e => {
                                var l;
                                return (0, n.jsx)("li", {
                                    className: "glide__slide",
                                    children: (0, n.jsxs)("div", {
                                        className: "relative flex w-full flex-col p-4 bg-transparent bg-clip-border text-gray-700 shadow bg-white rounded-3xl mb-1 transition-all duration-500 hover:shadow-md",
                                        children: [(0, n.jsxs)("div", {
                                            className: "relative flex items-center gap-4 pt-0 pb-6 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border",
                                            children: [(0, n.jsx)("div", {
                                                className: "h-[58px] w-[58px] rounded-full flex-shrink-0",
                                                children: (0, n.jsx)(r.CustomImage, {
                                                    src: (null === (l = e.img) || void 0 === l ? void 0 : l.url) ? function(e) {
                                                        let l = new URL(e),
                                                            t = l.pathname;
                                                        if (!t.includes("/reviews")) {
                                                            let e = t.split("/");
                                                            e.splice(1, 0, "reviews"), l.pathname = e.join("/")
                                                        }
                                                        return l.toString()
                                                    }(e.img.url) : "",
                                                    alt: "Avatar da ".concat(e.name),
                                                    width: 58,
                                                    height: 58,
                                                    className: "rounded-full h-[58px] w-[58px] object-cover"
                                                })
                                            }), (0, n.jsx)("div", {
                                                className: "flex w-full flex-col gap-0.5",
                                                children: (0, n.jsxs)("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [(0, n.jsx)("h5", {
                                                        className: "block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900",
                                                        children: e.name
                                                    }), (0, n.jsx)(a, {
                                                        rating: e.rating
                                                    })]
                                                })
                                            })]
                                        }), (0, n.jsx)("div", {
                                            className: "p-0",
                                            children: (0, n.jsx)("p", {
                                                className: "block font-sans text-base antialiased font-light leading-relaxed text-inherit",
                                                children: '"'.concat(e.description, '"')
                                            })
                                        })]
                                    })
                                }, e._id)
                            })
                        })
                    })
                })
            }
        },
        81228: function(e, l, t) {
            "use strict";
            t.d(l, {
                Z: function() {
                    return x
                }
            });
            var n = t(57437),
                i = t(51549),
                o = t(64451),
                r = t(2265),
                a = t(85097);
            t(43034);
            var s = t(36293),
                d = t(53267),
                c = t(65194);
            let u = (e, l, t) => {
                let n;
                return (n = t === o.Lb.FIXED ? e - l : e - l / 100 * e) < 0 && (n = 0), n
            };
            var m = t(45973),
                p = t(96164);
            let v = e => {
                var l;
                let {
                    contains: t,
                    salesPlan: i,
                    orderBump: r,
                    onClick: a,
                    dict: s,
                    countryCode: d
                } = e;
                return (0, n.jsxs)("div", {
                    className: (0, p.m6)("group rounded-2xl px-4 py-4 transition-all border-2 border-dashed duration-500 w-full mx-auto hover:shadow-sm slide_active:border-indigo-600 lg:px-6", t ? "border-green-400" : ""),
                    children: [(0, n.jsxs)("p", {
                        className: "text-lg",
                        children: [(0, n.jsx)("span", {
                            className: "bg-black text-white p-1 rounded-lg font-medium",
                            children: s.EXCLUSIVE_OFFER
                        }), " ", s.EXCLUSIVE_OFFER_FOR_YOU]
                    }), (0, n.jsxs)("div", {
                        className: "flex items-center gap-x-2 border-gray-200 mt-3",
                        children: [(0, n.jsx)("div", {
                            className: "w-20 h-20 rounded-xl border flex-shrink-0 relative",
                            children: (0, n.jsx)(c.CustomImage, {
                                src: null === (l = i.products[0].product.img) || void 0 === l ? void 0 : l.url,
                                alt: "".concat(s.PRODUCT_IMAGE_ALT, " ").concat(i.name),
                                fill: !0,
                                fullUrl: !0,
                                className: "rounded-xl object-contain"
                            })
                        }), (0, n.jsxs)("div", {
                            className: "flex flex-col flex-1",
                            children: [(0, n.jsx)("span", {
                                className: "text-gray-900 font-medium transition-all duration-500",
                                children: i.name
                            }), (0, n.jsx)("span", {
                                className: "text-xs font-light lg:text-sm",
                                children: s.UNMISSABLE_DISCOUNT
                            }), (0, n.jsxs)("span", {
                                className: "line-through text-red-400 text-xs",
                                children: [s.FROM_PRICE, " ", (0, m.x)(i.salesPrice, d)]
                            }), (0, n.jsxs)("div", {
                                className: "flex items-center gap-x-2",
                                children: [r.discountType === o.Lb.FIXED ? (0, n.jsx)("span", {
                                    className: "text-green-500 text-sm font-medium lg:text-base",
                                    children: (0, m.x)(u(i.salesPrice, r.value, r.discountType), d)
                                }) : (0, n.jsx)("span", {
                                    className: "text-green-500 font-medium",
                                    children: (0, m.x)(u(i.salesPrice, r.value, r.discountType), d)
                                }), (0, n.jsx)("div", {
                                    className: "flex justify-end flex-1 gap-x-2",
                                    children: (0, n.jsx)("button", {
                                        type: "button",
                                        onClick: a(i, r),
                                        className: "w-20 py-1 self-end text-sm text-white h-fit rounded-lg font-medium text-center transition-all duration-300 ".concat(t ? "bg-red-400" : "bg-green-500", " border ").concat(t ? "border-red-400" : "border-green-500", " lg:w-28 lg:py-2 hover:bg-transparent ").concat(t ? "hover:text-red-400" : "hover:text-green-500"),
                                        children: t ? s.REMOVE_BUTTON : s.I_WANT_BUTTON
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            };
            var h = t(84450),
                x = (0, r.memo)(function(e) {
                    let {
                        orderBumps: l,
                        isStacked: t
                    } = e, [c, u] = (0, r.useState)(), {
                        additionalSalesPlan: m,
                        setAdditionalSalesPlan: p
                    } = (0, i.p)(e => ({
                        additionalSalesPlan: e.additionalSalesPlan,
                        setAdditionalSalesPlan: e.setAdditionalSalesPlan
                    })), x = (0, r.useMemo)(() => null == l ? void 0 : l.some(e => {
                        let {
                            offerPlans: l
                        } = e;
                        return l.length > 1
                    }), [l]), {
                        dict: y,
                        countryCode: f
                    } = (0, h.g)(), g = (e, l) => () => {
                        if (m.some(l => l._id === e._id)) p(m.filter(l => l._id !== e._id));
                        else {
                            let t = e.salesPrice;
                            (t = l.discountType === o.Lb.FIXED ? e.salesPrice - l.value : e.salesPrice - l.value / 100 * e.salesPrice) < 0 && (t = 0), p([...m, {
                                ...e,
                                salesPrice: t,
                                img: e.products[0].product.img
                            }])
                        }
                    };
                    return t ? (0, n.jsx)("ul", {
                        className: "flex flex-col gap-y-2",
                        children: l.map(e => e.offerPlans.map(l => {
                            let t = m.some(e => {
                                let {
                                    _id: t
                                } = e;
                                return t === l._id
                            });
                            return (0, n.jsx)("li", {
                                children: (0, n.jsx)(v, {
                                    onClick: g,
                                    contains: t,
                                    orderBump: e,
                                    salesPlan: l,
                                    dict: y,
                                    countryCode: f
                                })
                            }, l._id)
                        }))
                    }) : (0, n.jsxs)("div", {
                        className: "relative",
                        children: [(0, n.jsx)(d.tq, {
                            autoplay: !0,
                            loop: !0,
                            modules: [s.pt],
                            slidesPerView: 1,
                            spaceBetween: 10,
                            onInit: u,
                            children: l.map(e => e.offerPlans.map(l => {
                                let t = m.some(e => {
                                    let {
                                        _id: t
                                    } = e;
                                    return t === l._id
                                });
                                return (0, n.jsx)(d.o5, {
                                    children: (0, n.jsx)(v, {
                                        onClick: g,
                                        contains: t,
                                        orderBump: e,
                                        salesPlan: l,
                                        dict: y,
                                        countryCode: f
                                    })
                                }, l._id)
                            }))
                        }), x ? (0, n.jsxs)("div", {
                            className: "flex items-center justify-end gap-x-4 mt-2",
                            children: [(0, n.jsx)("button", {
                                type: "button",
                                className: "bg-gray-100 rounded-full p-2 flex justify-center items-center transition-all duration-500 hover:bg-gray-50",
                                onClick: () => null == c ? void 0 : c.slidePrev(),
                                children: (0, n.jsx)(a.$Ku, {
                                    size: 24,
                                    className: "text-gray-700"
                                })
                            }), (0, n.jsx)("button", {
                                type: "button",
                                className: "bg-gray-100 rounded-full p-2 flex justify-center items-center transition-all duration-500 hover:bg-gray-50",
                                onClick: () => null == c ? void 0 : c.slideNext(),
                                children: (0, n.jsx)(a.mzm, {
                                    size: 24,
                                    className: "text-gray-700"
                                })
                            })]
                        }) : null]
                    })
                })
        },
        30554: function(e, l, t) {
            "use strict";
            t.d(l, {
                l: function() {
                    return d
                }
            });
            var n = t(57437),
                i = t(48059),
                o = t.n(i),
                r = t(66648),
                a = t(2265),
                s = t(7476);
            let d = e => {
                var l, t, i, d, c, u, m, p, v, h, x, y, f, g, C, b, E, N, j, R, _, D, w, I, P, A, S, T, L, O, k, M, B, U, q, X, V, F, H, G, Q, W, Z, Y, z, K, J, $, ee, el, et, en, ei, eo, er, ea, es, ed, ec, eu, em, ep, ev, eh, ex, ey, ef, eg, eC, eb, eE, eN, ej, eR, e_, eD, ew, eI, eP, eA, eS, eT, eL, eO, ek, eM, eB, eU, eq, eX, eV, eF, eH, eG, eQ, eW, eZ, eY, ez, eK, eJ, e$, e0, e1, e2, e3, e4, e7, e5, e8, e6, e9, le, ll, lt, ln, li, lo, lr, la, ls, ld, lc, lu, lm, lp, lv, lh, lx, ly, lf, lg, lC, lb, lE, lN, lj, lR, l_, lD, lw, lI, lP, lA, lS, lT, lL, lO, lk, lM, lB, lU, lq, lX, lV, lF, lH, lG, lQ, lW;
                let {
                    isOpen: lZ,
                    theme: lY,
                    pixCode: lz = "00020126580014br.gov.bcb.pix0136123e4567-e89b-12d3-a456-426614174000520400005303986540510.005802BR5913Recipient Name6008Sao Paulo62070503***63041234",
                    pixQrCode: lK = "iVBORw0KGgoAAAANSUhEUgAABWQAAAVkAQAAAAB79iscAAAOnElEQVR4Xu3XS5ocuwqF0ZjBnf8sPYO4n9kgJFCkq1E6ziz/u5HWA9CK6vm6Pyi/rnryzkF7LmjPBe25oD0XtOeC9lzQngvac0F7LmjPBe25oD0XtOeC9lzQngvac0F7LmjPBe25oD0XtOeC9lzQngvac0F7LmjPBe25oD0XtOeC9lzQngvac0F7LmjPBe25oD0XtOeC9lzQnsusvWr+9/vMfmJb6ubtcutry6926yW//MdvY5UlnuhFmxcetPe+DK2CFq2CFq2CFq2CFq2C9p21eZ5bG3K16Tmp1OXWp2SyOMaXjlKSdR60aBW0aBW0aBW0aBW0aBW0aJUP1+4G+21eXCslz8qLQc54R6R9VfSWrQctWgUtWgUtWgUtWgUtWgUtWuUHav0sLhwV29Z2DUAWL/h5cg4oP8t4D9oLrQXthdaC9kJrQXuhtaC90FrQXmgtP0vrb8c7c93j9CVN27f59Y8MD9olOx5atNst2laH9onhQbtkx0OLdrtF2+rQPjE8aJfseP+qtmx9yDLOb2NcKS5nc3Hc2r9faGtbtP1Zv4hb+/cLbW2Ltj/rF3Fr/36hrW3R9mf9Im7t3y+0tS3a/qxfxK39+4W2tkXbn/WLuLV/v9DWtmj7s34Rt/bvF9raFm1/1i/i1v79Qlvbou3P+kXc2r9faGtbtP1Zv4hb+/cLbW37ydoSm/QXfjoD7Xf9dAba7/rpDLTf9dMZaL/rpzPQftdPZ6D9rp/OQPtdP52B9rt+OgPtd/10xsdr9yn/gYztnBi321qHH9hZeqzObvPnddCiVdCiVdCiVdCiVdCiVdCiVT5Z2yl2PD9hsW2c7drm7Irjg3y8XcRDpWQuRluyK0Z7oUUbsWO0U/wiHkLbAI/ZFaO90KKN2DHaKX4RD6FtgMfsiv85bRliXf4TCYGPa6trdMQXzKOWKW18rMqnZRtatBG0aKMk12grJae08WgzaHWLFq1u0aLVLdq/ro341vDLzGKcz7LYzmLKi5I4m+ctXzq3WdDaWUx5UYIW7Xo2z0Mbk+YztGi3lJjyogQt2vVsnoc2Js1naNFuKTHlRcm/pC2TctVao85j06MuH5svoq0kB5Qv9dsYMOrG0nZo0WqHFq12aNFqhxatdmjRaocWrXafo83BreEx/VvKl7ZPy4SxvZsDli1atNkxlmj1BFq0egItWj2BFq2eQItWT6D9bK2ftYY6bnfhtwves3x9nmWBX+w+Em0Eba7RolXQolXQolXQolXQolU+UDvOa/5UUmSBt7tylpn/QHaRRluVDrR5izbSHlvypxK0tQNt3qKNtMeW/KkEbe1Am7doI+2xJX8qQVs70OYt2kh7bMmfSv6eNp+Yh8Qk6caFF5d3YlXqPMtn+KqXoPVitGhVjBatitGiVTFatCpGi1bFaH+O1mKV5Z0ZECXrkNoxT4nictZuo6RMRos2RqFFixZtTkaLNkahRYsWbU7+QdrG6y+Wz7CU3qzbQX1bUualYC6pJ2i9BC1alaBFqxK0aFWCFq1K0KJVCdpP0s4Do8uTby+KvM0BbVSSLTZ06djfLnVobdNGob3Rxm1eoLWgvdFa0N5oLWhvtBa0N1rLO2sXmaVtH4w5OC/m20gpsTa/uMbfJj8NrQUtWgUtWgUtWgUtWgUtWgXtj9PGOxo5bXN6/OSZT7/b981/giwp0CguH7kZNZa20yXapQRt1KLVxbyNFVq0aNF6KVq0Clq0Ctr30BZj8cwlfeb8BbvtEj9djK/f8KDdbZf4Kdo/TnIPWrTyoEUrD1q08qBFKw9atPL8Fe28zWdjmx9U6ubb3dtL8rYNsNtM/r18m1do0Spo0Spo0Spo0Spo0Spo0SofqPWWqChf4O/YkGXwbIwnvKTIFvx8W/4sdluCFq2CFq2CFq2CFq2CFq2CFq3yudpMmTnjY9s85acUx2rOUuermFwuPGjRKmjRKmjRKmjRKmjRKmjRKh+u9Yrl2Tnlif6ib5dnS/wi3pi35bYErW3RotUWLVpt0aLVFi1abdGi1RbtD9HmysYtZ6loJcsTWeyrXUnIss6v8jMyaCNZ7KtdCdrlDO1U51doSwnaKWgjWeyrXQna5QztVOdXaEsJ2iloI1nsq13JP6PtFTlunpmAfCLIebH7jNK7uyiMGYQ2LtCOpe2mMgtatApatApatApatApatMr7ahsls7y9f7FoLTlvR1m+3gUlyy3aOWgjaOtQtLUJLdrsQjuVuKAELVoFLVoF7V/S9go7cY9t+0VLKcm2wsuPzI4+3g8saNEqaNEqaNEqaNEqaNEqaNEqn6stKP+JrvLi7gty23otS9tcnMne5ceDdtdrQXs/vYgWLdq5ONOhaDP7Xgva++lFtGjRzsWZDkWb2fda/mnt3Sp2W19F5rp4cS7Or7Ji2+YX2Jkl/w5ZXIIWrYIWrYIWrYIWrYIWrYIWrfLJ2miYRqkrpwc+twkoCovNTcWMys+I7Zx8aO4dS9tF2RK00Za3aNGiVdCiVdCiVdCiVdCiVd5La/9aeW5nyvKOFy+P+VmuCjRSpszjYztdxtm6Qzsq0d5oLWhvtBa0N1oL2hutBe2N1oL2/gxtodh2nh/bUjyfLZk/0rIMmDvKQxm7mL9gbkWLVq1o0aoVLVq1okWrVrRo1YoWrVo/SWvJyv02W3Mb3+eyRIV27ljmtZKyWnrRoo2gRRtn8+5u49oWbTXuLvxs3t1tXNuircbdhZ/Nu7uNa1u01bi78LN5d7dxbYu2GncXfjbv7jaubdFW4+7Cz+bd3ca1Ldpq3F342by727i2fRttTsoXk9dWRdGN86j+VfOn5W1pu9CiRRtBi3Y6s/r9s2gzaNGutc2YK7S17UKLFm3kv9davGJpzcGecrv0Ftl8ZunGXUe+MRqtZN7drTa3aKctWg9atApatApatApatApatMo7aH1ITJ+fsNsyJJ+1i8zyRLZ5OnRcTdv2VRa0aBW0aBW0aBW0aBW0aBW0aJUP1/oqGvKdvPD0T5sHLKjWG23z7bJtF342lmh/r9Eu5zYM7RK0aEdbQ6G1oEWroEWroEWrvIPW5vg2Z2b6uPJVzR3xAzt7hPYpaHfvWMZpfQgtWrRoxxna6JqDFq2CFq2CFq3yNtp9/8NtAsoqb+e6QrGzXaxk5hXBukOLVju0aLVDi1Y7tGi1Q4tWO7Rotfs4bTTMM3ePlcGR/NKsmy8s/SGPbZc/1do2lrarQ9pFBG1s0aJFqwu0aHWBFq0u0KLVBVq0uvjr2nu0loZrddtZDl4u/DbfzkRHnnhxn/J0O5ZKDt61ot1OebodSyUH71rRbqc83Y6lkoN3rWi3U55ux1LJwbtWtNspT7djqeTgXSva7ZSn27FUcvCuFe12ytPtWCo5eNeKdjvl6XYslRy8a0W7nfJ0O5ZKDt61ot1OebodSyUH71rfSOsVv3LYuo0v8IvHtpxut4vR6/KPsbw2Fy8/HrRoFbRoFbRoFbRoFbRoFbRolQ/XrpdTf57Nt9e8jZohiwtP+dxlVG7Lt3iJ1+V6numX2qJFqy1atNqiRastWrTaokWrLVq02r6ldhzVrnxs9zMPjp/sKKP8IN+4NmdL8fqnGss8ql359u4Hbd96yVjmUe3Kt3c/aPvWS8Yyj2pXvr37Qdu3XjKWeVS78u3dD9q+9ZKxzKPalW/vftD2rZeMZR7Vrnx794O2b71kLPOoduXbux+0feslY5lHtSvf3v2g7VsvGcs8ql359u4Hbd96yVjmUe3Kt3c/f0k7HunvLCW5avjM7jOsbSmev2AZP5+hRasztGh1hhatztCi1RlatDpDi1ZnP0trQ8q4+QtyptUldDHmgPk2k72Jz4voQOvlaNEqaNEqaNEqaNEqaNEqaH+E1rJexhMLKuvG1Om2fNXuCyzt7/CwnYMWrYIWrYIWrYIWrYIWrYIWrfLx2szC89sFlaXpmaeU74tVkXlxduRPnI22sVRa64UWLVoFLVoFLVoFLVoFLVoF7VtrS0POnG+vWeZbu51nRvqL+4/M5DeXC7/NdQ5GG1PQoh11476j0KIdvWjRqhctWvWiRatetO+itSG2jcEOyM/YdWTJLsso745VKfXEa+vfYSzRjqCN+BYtWm3RotUWLVpt0aLVFi1abd9au0tpKJ5Sl2Q/s5Jy1hUvekvQolXQolXQolXQolXQolXQolU+VyvBlJ0sZ+4UlvRkm5XY9lcb1dqW3nwD7e5FL7EtWgtatApatApatApatApatMqba/M8ti9+InNHPJtb54Wx8Hb4ubcELVoFLVoFLVoFLVoFLVoFLVrlw7U5KX9G7ZT57OEzPH3KWCsv2mLlQVvSp4y18qItVh60JX3KWCsv2mLlQVvSp4y18qItVh60JX3KWCsv2mLlQVvSp4y18qItVh60JX3KWCsv2mLlQVvSp4y18qItVh60JX3KWCsv2mLlQVvSp4y18qItVp6fpr1+T+/QeUhk7li2fmbQ+L62tY7szRXaOCslcxtaC9rKQ2tdaOvWOrI3V2jjrJTMbWgtaCsPrXWhrVvryN5coY2zUjK3obWktvxk8kWfNH1VzsvsLvzsoS3f9aC92rO+7Rd+9tCGdkx6fta3/cLPHtrQjknPz/q2X/jZQxvaMen5Wd/2Cz97aEM7Jj0/69t+4WcPbWjHpOdnfdsv/OyhDe2Y9Pysb/uFnz20oR2Tnp/1bb/ws4c2tGPS87O+7Rd+9tD207Rl62MWqE+fhyzv5G18wVyyZP+5neFBi1ZBi1ZBi1ZBi1ZBi1ZBi1b5ZG1JeTFLyrg4y5/yBVbQvipvl47ZXV5DizYuxhItWs+4XsrQokWbZ/Mt2ixBi3a6KG1o62to/xvt+wftuaA9F7TngvZc0J4L2nNBey5ozwXtuaA9F7TngvZc0J4L2nNBey5ozwXtuaA9F7TngvZc0J4L2nNBey5ozwXtuaA9F7TngvZc0J4L2nNBey5ozwXtuaA9F7TngvZc0J4L2nNBey4fpv0/vR4TLfpi0GcAAAAASUVORK5CYII=",
                    pixValue: lJ = "R$ 150,00",
                    onClose: l$
                } = e, [l0, l1] = (0, a.useState)(!1);
                return lZ ? (0, n.jsxs)("div", {
                    className: o().dynamic([
                        ["f66fe5274cdf7668", [null !== (l = null == lY ? void 0 : lY.primaryColor) && void 0 !== l ? l : "#081D30", null !== (t = null == lY ? void 0 : lY.textColor) && void 0 !== t ? t : "white", null !== (i = null == lY ? void 0 : lY.primaryColor) && void 0 !== i ? i : "#081D30", null !== (d = null == lY ? void 0 : lY.primaryColor) && void 0 !== d ? d : "#081D30", null !== (c = null == lY ? void 0 : lY.textColor) && void 0 !== c ? c : "white"]]
                    ]) + " ",
                    children: [(0, n.jsxs)("div", {
                        className: o().dynamic([
                            ["f66fe5274cdf7668", [null !== (u = null == lY ? void 0 : lY.primaryColor) && void 0 !== u ? u : "#081D30", null !== (m = null == lY ? void 0 : lY.textColor) && void 0 !== m ? m : "white", null !== (p = null == lY ? void 0 : lY.primaryColor) && void 0 !== p ? p : "#081D30", null !== (v = null == lY ? void 0 : lY.primaryColor) && void 0 !== v ? v : "#081D30", null !== (h = null == lY ? void 0 : lY.textColor) && void 0 !== h ? h : "white"]]
                        ]) + " max-w-full sm:max-w-md w-full h-full overflow-y-auto md:h-auto md:rounded-xl",
                        children: [(0, n.jsx)("div", {
                            className: o().dynamic([
                                ["f66fe5274cdf7668", [null !== (x = null == lY ? void 0 : lY.primaryColor) && void 0 !== x ? x : "#081D30", null !== (y = null == lY ? void 0 : lY.textColor) && void 0 !== y ? y : "white", null !== (f = null == lY ? void 0 : lY.primaryColor) && void 0 !== f ? f : "#081D30", null !== (g = null == lY ? void 0 : lY.primaryColor) && void 0 !== g ? g : "#081D30", null !== (C = null == lY ? void 0 : lY.textColor) && void 0 !== C ? C : "white"]]
                            ]) + " flex justify-between items-center mb-4",
                            children: (0, n.jsx)("h2", {
                                className: o().dynamic([
                                    ["f66fe5274cdf7668", [null !== (b = null == lY ? void 0 : lY.primaryColor) && void 0 !== b ? b : "#081D30", null !== (E = null == lY ? void 0 : lY.textColor) && void 0 !== E ? E : "white", null !== (N = null == lY ? void 0 : lY.primaryColor) && void 0 !== N ? N : "#081D30", null !== (j = null == lY ? void 0 : lY.primaryColor) && void 0 !== j ? j : "#081D30", null !== (R = null == lY ? void 0 : lY.textColor) && void 0 !== R ? R : "white"]]
                                ]) + " text-xl font-bold text-gray-800",
                                children: "Escaneie o QR-code ou copie o c\xf3digo."
                            })
                        }), (0, n.jsx)("div", {
                            className: o().dynamic([
                                ["f66fe5274cdf7668", [null !== (_ = null == lY ? void 0 : lY.primaryColor) && void 0 !== _ ? _ : "#081D30", null !== (D = null == lY ? void 0 : lY.textColor) && void 0 !== D ? D : "white", null !== (w = null == lY ? void 0 : lY.primaryColor) && void 0 !== w ? w : "#081D30", null !== (I = null == lY ? void 0 : lY.primaryColor) && void 0 !== I ? I : "#081D30", null !== (P = null == lY ? void 0 : lY.textColor) && void 0 !== P ? P : "white"]]
                            ]) + " border-t border-b border-gray-200 py-4 my-4",
                            children: (0, n.jsxs)("div", {
                                className: o().dynamic([
                                    ["f66fe5274cdf7668", [null !== (A = null == lY ? void 0 : lY.primaryColor) && void 0 !== A ? A : "#081D30", null !== (S = null == lY ? void 0 : lY.textColor) && void 0 !== S ? S : "white", null !== (T = null == lY ? void 0 : lY.primaryColor) && void 0 !== T ? T : "#081D30", null !== (L = null == lY ? void 0 : lY.primaryColor) && void 0 !== L ? L : "#081D30", null !== (O = null == lY ? void 0 : lY.textColor) && void 0 !== O ? O : "white"]]
                                ]) + " flex flex-col items-center justify-center",
                                children: [(0, n.jsx)("div", {
                                    className: o().dynamic([
                                        ["f66fe5274cdf7668", [null !== (k = null == lY ? void 0 : lY.primaryColor) && void 0 !== k ? k : "#081D30", null !== (M = null == lY ? void 0 : lY.textColor) && void 0 !== M ? M : "white", null !== (B = null == lY ? void 0 : lY.primaryColor) && void 0 !== B ? B : "#081D30", null !== (U = null == lY ? void 0 : lY.primaryColor) && void 0 !== U ? U : "#081D30", null !== (q = null == lY ? void 0 : lY.textColor) && void 0 !== q ? q : "white"]]
                                    ]) + " bg-gray-100 p-4 rounded-lg mb-4",
                                    children: (0, n.jsx)(r.default, {
                                        src: "data:image/png;base64,".concat(null == lK ? void 0 : lK.replace("data:image/png;base64,", "")),
                                        alt: "Pix Qr Code",
                                        className: "rounded-2xl object-contain",
                                        width: 150,
                                        height: 150
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: o().dynamic([
                                        ["f66fe5274cdf7668", [null !== (X = null == lY ? void 0 : lY.primaryColor) && void 0 !== X ? X : "#081D30", null !== (V = null == lY ? void 0 : lY.textColor) && void 0 !== V ? V : "white", null !== (F = null == lY ? void 0 : lY.primaryColor) && void 0 !== F ? F : "#081D30", null !== (H = null == lY ? void 0 : lY.primaryColor) && void 0 !== H ? H : "#081D30", null !== (G = null == lY ? void 0 : lY.textColor) && void 0 !== G ? G : "white"]]
                                    ]) + " w-full",
                                    children: [(0, n.jsxs)("div", {
                                        className: o().dynamic([
                                            ["f66fe5274cdf7668", [null !== (Q = null == lY ? void 0 : lY.primaryColor) && void 0 !== Q ? Q : "#081D30", null !== (W = null == lY ? void 0 : lY.textColor) && void 0 !== W ? W : "white", null !== (Z = null == lY ? void 0 : lY.primaryColor) && void 0 !== Z ? Z : "#081D30", null !== (Y = null == lY ? void 0 : lY.primaryColor) && void 0 !== Y ? Y : "#081D30", null !== (z = null == lY ? void 0 : lY.textColor) && void 0 !== z ? z : "white"]]
                                        ]) + " flex justify-between items-center text-gray-700 mb-2",
                                        children: [(0, n.jsx)("span", {
                                            className: o().dynamic([
                                                ["f66fe5274cdf7668", [null !== (K = null == lY ? void 0 : lY.primaryColor) && void 0 !== K ? K : "#081D30", null !== (J = null == lY ? void 0 : lY.textColor) && void 0 !== J ? J : "white", null !== ($ = null == lY ? void 0 : lY.primaryColor) && void 0 !== $ ? $ : "#081D30", null !== (ee = null == lY ? void 0 : lY.primaryColor) && void 0 !== ee ? ee : "#081D30", null !== (el = null == lY ? void 0 : lY.textColor) && void 0 !== el ? el : "white"]]
                                            ]) + " font-medium",
                                            children: "Valor PIX:"
                                        }), (0, n.jsx)("span", {
                                            id: "pixValue",
                                            className: o().dynamic([
                                                ["f66fe5274cdf7668", [null !== (et = null == lY ? void 0 : lY.primaryColor) && void 0 !== et ? et : "#081D30", null !== (en = null == lY ? void 0 : lY.textColor) && void 0 !== en ? en : "white", null !== (ei = null == lY ? void 0 : lY.primaryColor) && void 0 !== ei ? ei : "#081D30", null !== (eo = null == lY ? void 0 : lY.primaryColor) && void 0 !== eo ? eo : "#081D30", null !== (er = null == lY ? void 0 : lY.textColor) && void 0 !== er ? er : "white"]]
                                            ]) + " font-bold text-lg",
                                            children: lJ
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: o().dynamic([
                                            ["f66fe5274cdf7668", [null !== (ea = null == lY ? void 0 : lY.primaryColor) && void 0 !== ea ? ea : "#081D30", null !== (es = null == lY ? void 0 : lY.textColor) && void 0 !== es ? es : "white", null !== (ed = null == lY ? void 0 : lY.primaryColor) && void 0 !== ed ? ed : "#081D30", null !== (ec = null == lY ? void 0 : lY.primaryColor) && void 0 !== ec ? ec : "#081D30", null !== (eu = null == lY ? void 0 : lY.textColor) && void 0 !== eu ? eu : "white"]]
                                        ]) + " ",
                                        children: [(0, n.jsx)("div", {
                                            id: "pixCode",
                                            className: o().dynamic([
                                                ["f66fe5274cdf7668", [null !== (em = null == lY ? void 0 : lY.primaryColor) && void 0 !== em ? em : "#081D30", null !== (ep = null == lY ? void 0 : lY.textColor) && void 0 !== ep ? ep : "white", null !== (ev = null == lY ? void 0 : lY.primaryColor) && void 0 !== ev ? ev : "#081D30", null !== (eh = null == lY ? void 0 : lY.primaryColor) && void 0 !== eh ? eh : "#081D30", null !== (ex = null == lY ? void 0 : lY.textColor) && void 0 !== ex ? ex : "white"]]
                                            ]) + " text-sm text-gray-500 truncate mb-2",
                                            children: lz
                                        }), (0, n.jsxs)("button", {
                                            type: "button",
                                            onClick: () => {
                                                navigator.clipboard.writeText(lz), l1(!0), setTimeout(() => l1(!1), 2e3)
                                            },
                                            id: "copyPix",
                                            className: o().dynamic([
                                                ["f66fe5274cdf7668", [null !== (ey = null == lY ? void 0 : lY.primaryColor) && void 0 !== ey ? ey : "#081D30", null !== (ef = null == lY ? void 0 : lY.textColor) && void 0 !== ef ? ef : "white", null !== (eg = null == lY ? void 0 : lY.primaryColor) && void 0 !== eg ? eg : "#081D30", null !== (eC = null == lY ? void 0 : lY.primaryColor) && void 0 !== eC ? eC : "#081D30", null !== (eb = null == lY ? void 0 : lY.textColor) && void 0 !== eb ? eb : "white"]]
                                            ]) + " w-full py-3 rounded-lg flex items-center justify-center",
                                            children: [l0 ? (0, n.jsx)(s.UgA, {
                                                size: 16,
                                                className: "mr-2"
                                            }) : (0, n.jsx)(s.C3L, {
                                                size: 16,
                                                className: "mr-2"
                                            }), (0, n.jsx)("span", {
                                                className: o().dynamic([
                                                    ["f66fe5274cdf7668", [null !== (eE = null == lY ? void 0 : lY.primaryColor) && void 0 !== eE ? eE : "#081D30", null !== (eN = null == lY ? void 0 : lY.textColor) && void 0 !== eN ? eN : "white", null !== (ej = null == lY ? void 0 : lY.primaryColor) && void 0 !== ej ? ej : "#081D30", null !== (eR = null == lY ? void 0 : lY.primaryColor) && void 0 !== eR ? eR : "#081D30", null !== (e_ = null == lY ? void 0 : lY.textColor) && void 0 !== e_ ? e_ : "white"]]
                                                ]) + " text-sm",
                                                children: l0 ? "Copiado!" : "Copiar PIX"
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        }), (0, n.jsxs)("div", {
                            className: o().dynamic([
                                ["f66fe5274cdf7668", [null !== (eD = null == lY ? void 0 : lY.primaryColor) && void 0 !== eD ? eD : "#081D30", null !== (ew = null == lY ? void 0 : lY.textColor) && void 0 !== ew ? ew : "white", null !== (eI = null == lY ? void 0 : lY.primaryColor) && void 0 !== eI ? eI : "#081D30", null !== (eP = null == lY ? void 0 : lY.primaryColor) && void 0 !== eP ? eP : "#081D30", null !== (eA = null == lY ? void 0 : lY.textColor) && void 0 !== eA ? eA : "white"]]
                            ]) + " space-y-3 text-gray-700",
                            children: [(0, n.jsx)("h3", {
                                className: o().dynamic([
                                    ["f66fe5274cdf7668", [null !== (eS = null == lY ? void 0 : lY.primaryColor) && void 0 !== eS ? eS : "#081D30", null !== (eT = null == lY ? void 0 : lY.textColor) && void 0 !== eT ? eT : "white", null !== (eL = null == lY ? void 0 : lY.primaryColor) && void 0 !== eL ? eL : "#081D30", null !== (eO = null == lY ? void 0 : lY.primaryColor) && void 0 !== eO ? eO : "#081D30", null !== (ek = null == lY ? void 0 : lY.textColor) && void 0 !== ek ? ek : "white"]]
                                ]) + " font-medium",
                                children: "Como pagar:"
                            }), (0, n.jsxs)("ol", {
                                className: o().dynamic([
                                    ["f66fe5274cdf7668", [null !== (eM = null == lY ? void 0 : lY.primaryColor) && void 0 !== eM ? eM : "#081D30", null !== (eB = null == lY ? void 0 : lY.textColor) && void 0 !== eB ? eB : "white", null !== (eU = null == lY ? void 0 : lY.primaryColor) && void 0 !== eU ? eU : "#081D30", null !== (eq = null == lY ? void 0 : lY.primaryColor) && void 0 !== eq ? eq : "#081D30", null !== (eX = null == lY ? void 0 : lY.textColor) && void 0 !== eX ? eX : "white"]]
                                ]) + " space-y-3 text-sm",
                                children: [(0, n.jsxs)("li", {
                                    className: o().dynamic([
                                        ["f66fe5274cdf7668", [null !== (eV = null == lY ? void 0 : lY.primaryColor) && void 0 !== eV ? eV : "#081D30", null !== (eF = null == lY ? void 0 : lY.textColor) && void 0 !== eF ? eF : "white", null !== (eH = null == lY ? void 0 : lY.primaryColor) && void 0 !== eH ? eH : "#081D30", null !== (eG = null == lY ? void 0 : lY.primaryColor) && void 0 !== eG ? eG : "#081D30", null !== (eQ = null == lY ? void 0 : lY.textColor) && void 0 !== eQ ? eQ : "white"]]
                                    ]) + " flex",
                                    children: [(0, n.jsx)("span", {
                                        className: o().dynamic([
                                            ["f66fe5274cdf7668", [null !== (eW = null == lY ? void 0 : lY.primaryColor) && void 0 !== eW ? eW : "#081D30", null !== (eZ = null == lY ? void 0 : lY.textColor) && void 0 !== eZ ? eZ : "white", null !== (eY = null == lY ? void 0 : lY.primaryColor) && void 0 !== eY ? eY : "#081D30", null !== (ez = null == lY ? void 0 : lY.primaryColor) && void 0 !== ez ? ez : "#081D30", null !== (eK = null == lY ? void 0 : lY.textColor) && void 0 !== eK ? eK : "white"]]
                                        ]) + " step bg-opacity-20 rounded-full h-5 w-5 flex items-center justify-center mr-2 shrink-0",
                                        children: "1"
                                    }), (0, n.jsx)("p", {
                                        className: o().dynamic([
                                            ["f66fe5274cdf7668", [null !== (eJ = null == lY ? void 0 : lY.primaryColor) && void 0 !== eJ ? eJ : "#081D30", null !== (e$ = null == lY ? void 0 : lY.textColor) && void 0 !== e$ ? e$ : "white", null !== (e0 = null == lY ? void 0 : lY.primaryColor) && void 0 !== e0 ? e0 : "#081D30", null !== (e1 = null == lY ? void 0 : lY.primaryColor) && void 0 !== e1 ? e1 : "#081D30", null !== (e2 = null == lY ? void 0 : lY.textColor) && void 0 !== e2 ? e2 : "white"]]
                                        ]),
                                        children: "Abra o aplicativo do seu banco e selecione a op\xe7\xe3o de pagamento PIX"
                                    })]
                                }), (0, n.jsxs)("li", {
                                    className: o().dynamic([
                                        ["f66fe5274cdf7668", [null !== (e3 = null == lY ? void 0 : lY.primaryColor) && void 0 !== e3 ? e3 : "#081D30", null !== (e4 = null == lY ? void 0 : lY.textColor) && void 0 !== e4 ? e4 : "white", null !== (e7 = null == lY ? void 0 : lY.primaryColor) && void 0 !== e7 ? e7 : "#081D30", null !== (e5 = null == lY ? void 0 : lY.primaryColor) && void 0 !== e5 ? e5 : "#081D30", null !== (e8 = null == lY ? void 0 : lY.textColor) && void 0 !== e8 ? e8 : "white"]]
                                    ]) + " flex",
                                    children: [(0, n.jsx)("span", {
                                        className: o().dynamic([
                                            ["f66fe5274cdf7668", [null !== (e6 = null == lY ? void 0 : lY.primaryColor) && void 0 !== e6 ? e6 : "#081D30", null !== (e9 = null == lY ? void 0 : lY.textColor) && void 0 !== e9 ? e9 : "white", null !== (le = null == lY ? void 0 : lY.primaryColor) && void 0 !== le ? le : "#081D30", null !== (ll = null == lY ? void 0 : lY.primaryColor) && void 0 !== ll ? ll : "#081D30", null !== (lt = null == lY ? void 0 : lY.textColor) && void 0 !== lt ? lt : "white"]]
                                        ]) + " step bg-opacity-20 rounded-full h-5 w-5 flex items-center justify-center mr-2 shrink-0",
                                        children: "2"
                                    }), (0, n.jsx)("p", {
                                        className: o().dynamic([
                                            ["f66fe5274cdf7668", [null !== (ln = null == lY ? void 0 : lY.primaryColor) && void 0 !== ln ? ln : "#081D30", null !== (li = null == lY ? void 0 : lY.textColor) && void 0 !== li ? li : "white", null !== (lo = null == lY ? void 0 : lY.primaryColor) && void 0 !== lo ? lo : "#081D30", null !== (lr = null == lY ? void 0 : lY.primaryColor) && void 0 !== lr ? lr : "#081D30", null !== (la = null == lY ? void 0 : lY.textColor) && void 0 !== la ? la : "white"]]
                                        ]),
                                        children: "Escolha pagar usando o c\xf3digo QR ou copie o c\xf3digo PIX acima"
                                    })]
                                }), (0, n.jsxs)("li", {
                                    className: o().dynamic([
                                        ["f66fe5274cdf7668", [null !== (ls = null == lY ? void 0 : lY.primaryColor) && void 0 !== ls ? ls : "#081D30", null !== (ld = null == lY ? void 0 : lY.textColor) && void 0 !== ld ? ld : "white", null !== (lc = null == lY ? void 0 : lY.primaryColor) && void 0 !== lc ? lc : "#081D30", null !== (lu = null == lY ? void 0 : lY.primaryColor) && void 0 !== lu ? lu : "#081D30", null !== (lm = null == lY ? void 0 : lY.textColor) && void 0 !== lm ? lm : "white"]]
                                    ]) + " flex",
                                    children: [(0, n.jsx)("span", {
                                        className: o().dynamic([
                                            ["f66fe5274cdf7668", [null !== (lp = null == lY ? void 0 : lY.primaryColor) && void 0 !== lp ? lp : "#081D30", null !== (lv = null == lY ? void 0 : lY.textColor) && void 0 !== lv ? lv : "white", null !== (lh = null == lY ? void 0 : lY.primaryColor) && void 0 !== lh ? lh : "#081D30", null !== (lx = null == lY ? void 0 : lY.primaryColor) && void 0 !== lx ? lx : "#081D30", null !== (ly = null == lY ? void 0 : lY.textColor) && void 0 !== ly ? ly : "white"]]
                                        ]) + " step bg-opacity-20 rounded-full h-5 w-5 flex items-center justify-center mr-2 shrink-0",
                                        children: "3"
                                    }), (0, n.jsx)("p", {
                                        className: o().dynamic([
                                            ["f66fe5274cdf7668", [null !== (lf = null == lY ? void 0 : lY.primaryColor) && void 0 !== lf ? lf : "#081D30", null !== (lg = null == lY ? void 0 : lY.textColor) && void 0 !== lg ? lg : "white", null !== (lC = null == lY ? void 0 : lY.primaryColor) && void 0 !== lC ? lC : "#081D30", null !== (lb = null == lY ? void 0 : lY.primaryColor) && void 0 !== lb ? lb : "#081D30", null !== (lE = null == lY ? void 0 : lY.textColor) && void 0 !== lE ? lE : "white"]]
                                        ]),
                                        children: "Confirme os detalhes do pagamento e o destinat\xe1rio"
                                    })]
                                }), (0, n.jsxs)("li", {
                                    className: o().dynamic([
                                        ["f66fe5274cdf7668", [null !== (lN = null == lY ? void 0 : lY.primaryColor) && void 0 !== lN ? lN : "#081D30", null !== (lj = null == lY ? void 0 : lY.textColor) && void 0 !== lj ? lj : "white", null !== (lR = null == lY ? void 0 : lY.primaryColor) && void 0 !== lR ? lR : "#081D30", null !== (l_ = null == lY ? void 0 : lY.primaryColor) && void 0 !== l_ ? l_ : "#081D30", null !== (lD = null == lY ? void 0 : lY.textColor) && void 0 !== lD ? lD : "white"]]
                                    ]) + " flex",
                                    children: [(0, n.jsx)("span", {
                                        className: o().dynamic([
                                            ["f66fe5274cdf7668", [null !== (lw = null == lY ? void 0 : lY.primaryColor) && void 0 !== lw ? lw : "#081D30", null !== (lI = null == lY ? void 0 : lY.textColor) && void 0 !== lI ? lI : "white", null !== (lP = null == lY ? void 0 : lY.primaryColor) && void 0 !== lP ? lP : "#081D30", null !== (lA = null == lY ? void 0 : lY.primaryColor) && void 0 !== lA ? lA : "#081D30", null !== (lS = null == lY ? void 0 : lY.textColor) && void 0 !== lS ? lS : "white"]]
                                        ]) + " step bg-opacity-20 rounded-full h-5 w-5 flex items-center justify-center mr-2 shrink-0",
                                        children: "4"
                                    }), (0, n.jsx)("p", {
                                        className: o().dynamic([
                                            ["f66fe5274cdf7668", [null !== (lT = null == lY ? void 0 : lY.primaryColor) && void 0 !== lT ? lT : "#081D30", null !== (lL = null == lY ? void 0 : lY.textColor) && void 0 !== lL ? lL : "white", null !== (lO = null == lY ? void 0 : lY.primaryColor) && void 0 !== lO ? lO : "#081D30", null !== (lk = null == lY ? void 0 : lY.primaryColor) && void 0 !== lk ? lk : "#081D30", null !== (lM = null == lY ? void 0 : lY.textColor) && void 0 !== lM ? lM : "white"]]
                                        ]),
                                        children: "Conclua o pagamento e guarde o comprovante (voc\xea ser\xe1 redirecionado automaticamente ap\xf3s o pagamento)"
                                    })]
                                })]
                            })]
                        })]
                    }), (0, n.jsx)(o(), {
                        id: "f66fe5274cdf7668",
                        dynamic: [null !== (lB = null == lY ? void 0 : lY.primaryColor) && void 0 !== lB ? lB : "#081D30", null !== (lU = null == lY ? void 0 : lY.textColor) && void 0 !== lU ? lU : "white", null !== (lq = null == lY ? void 0 : lY.primaryColor) && void 0 !== lq ? lq : "#081D30", null !== (lX = null == lY ? void 0 : lY.primaryColor) && void 0 !== lX ? lX : "#081D30", null !== (lV = null == lY ? void 0 : lY.textColor) && void 0 !== lV ? lV : "white"],
                        children: "#copyPix.__jsx-style-dynamic-selector{background-color:".concat(null !== (lF = null == lY ? void 0 : lY.primaryColor) && void 0 !== lF ? lF : "#081D30", ";color:").concat(null !== (lH = null == lY ? void 0 : lY.textColor) && void 0 !== lH ? lH : "white", ";border-color:").concat(null !== (lG = null == lY ? void 0 : lY.primaryColor) && void 0 !== lG ? lG : "#081D30", "}.step.__jsx-style-dynamic-selector{background-color:").concat(null !== (lQ = null == lY ? void 0 : lY.primaryColor) && void 0 !== lQ ? lQ : "#081D30", ";color:").concat(null !== (lW = null == lY ? void 0 : lY.textColor) && void 0 !== lW ? lW : "white", "}")
                    })]
                }) : null
            }
        },
        46541: function(e, l, t) {
            "use strict";
            t.d(l, {
                O: function() {
                    return n
                }
            });
            let n = (0, t(2265).createContext)({})
        },
        80182: function(e, l, t) {
            "use strict";
            t.d(l, {
                J: function() {
                    return i
                }
            });
            var n = t(2265);
            let i = e => {
                (0, n.useEffect)(() => {
                    if (!e) return;
                    let l = e;
                    l = l = l.trim() + (l.indexOf("?") > 0 ? "&" : "?") + document.location.search.replace("?", "").toString(), history.pushState({}, "", location.href), history.pushState({}, "", location.href);
                    let t = () => {
                        setTimeout(function() {
                            location.href = l
                        }, 1)
                    };
                    return window.addEventListener("popstate", t), () => window.removeEventListener("popstate", t)
                }, [e])
            }
        },
        58063: function(e, l, t) {
            "use strict";
            t.d(l, {
                l: function() {
                    return a
                }
            });
            var n = t(9292),
                i = t(89167),
                o = t(2265),
                r = t(23580);
            let a = e => {
                let {
                    creditCardAcquirer: l,
                    paymentMethod: t,
                    checkout: a,
                    total: s,
                    setValue: d,
                    salesPlan: c,
                    creditCardNumber: u,
                    countryCode: m
                } = e, [p, v] = (0, o.useState)([]), [h, x] = (0, o.useState)(!1), y = (0, o.useCallback)(async e => {
                    try {
                        var l;
                        x(!0);
                        let {
                            data: t
                        } = await i.Z.getInstallments(e);
                        v(t), d("installments", null !== (l = null == a ? void 0 : a.preSelectedInstallment) && void 0 !== l ? l : 1)
                    } catch (e) {
                        r.Am.error("Error ao calcular parcelas")
                    } finally {
                        x(!1)
                    }
                }, [null == a ? void 0 : a.preSelectedInstallment, d]);
                return (0, o.useEffect)(() => {
                    (!m || "BR" === m) && (null == l ? void 0 : l.name) !== n.dU.MERCADO_PAGO && t === n.XL.CREDIT_CARD && s > 0 && y({
                        value: s,
                        salesPlanId: c._id
                    })
                }, [null == l ? void 0 : l.name, y, t, c._id, s, m]), (0, o.useEffect)(() => {
                    if ((!m || "BR" === m) && (null == l ? void 0 : l.name) === n.dU.MERCADO_PAGO && u && u.length >= 7 && t === n.XL.CREDIT_CARD) {
                        y({
                            value: s,
                            salesPlanId: c._id,
                            bin: null == u ? void 0 : u.replace(/\D/g, "")
                        });
                        return
                    }
                }, [null == l ? void 0 : l.name, u, y, t, c._id, s, m]), {
                    installments: p,
                    isFetchingInstallments: h
                }
            }
        },
        19433: function(e, l, t) {
            "use strict";
            t.d(l, {
                N: function() {
                    return u
                }
            });
            var n = t(9292),
                i = t(2265),
                o = t(63070),
                r = t(9034),
                a = t(40449);
            let s = async e => {
                let {
                    fullName: l,
                    document: t,
                    email: i,
                    phone: o,
                    isDocumentRequired: r,
                    isEmailRequired: s,
                    isPhoneRequired: d,
                    dict: c
                } = e;
                try {
                    return await (0, a.k)(c).validate({
                        fullName: l,
                        document: t,
                        email: i,
                        phone: o,
                        paymentMethod: n.XL.PIX,
                        isDocumentRequired: r,
                        isEmailRequired: s,
                        isPhoneRequired: d
                    }, {
                        abortEarly: !0
                    }), !0
                } catch (e) {
                    return !1
                }
            }, d = async e => {
                let {
                    cep: l,
                    state: t,
                    city: n,
                    street: i,
                    number: o,
                    dict: r
                } = e;
                return await Promise.all([c("cep", l, r), c("number", o, r), c("street", i, r), c("state", t, r), c("city", n, r)]).then(e => e.every(e => e))
            }, c = async (e, l, t) => new Promise(n => {
                (0, a.k)(t).validateAt(e, {
                    [e]: l
                }).then(() => n(!0)).catch(() => n(!1))
            }), u = e => {
                let {
                    step: l,
                    isMultiStep: t,
                    fullName: a,
                    document: c,
                    email: u,
                    phone: m,
                    cep: p,
                    street: v,
                    number: h,
                    state: x,
                    city: y,
                    complement: f,
                    selectedShipping: g,
                    neighborhood: C,
                    containsPhysicalProduct: b,
                    salesPlanId: E,
                    storeId: N,
                    token: j,
                    isDocumentRequired: R,
                    isEmailRequired: _,
                    isPhoneRequired: D,
                    dict: w
                } = e, I = (0, i.useCallback)(e => {
                    try {
                        var l;
                        let t = JSON.parse(null !== (l = (0, r.ej)(E)) && void 0 !== l ? l : "");
                        if (!(null == t ? void 0 : t.id) || (null == t ? void 0 : t.hasRegisteredPersonalInformationFilledEvent)) return;
                        o.P.registerEvent(j, {
                            ...e,
                            sessionId: t.id,
                            eventType: n.Rv.PERSONAL_INFORMATION_FILLED
                        }).catch(() => {}), (0, r.d8)(E, JSON.stringify({
                            ...t,
                            hasRegisteredPersonalInformationFilledEvent: !0
                        }), -1, new Date(t.expiresAt))
                    } catch (e) {}
                }, [E, j]), P = (0, i.useCallback)(e => {
                    try {
                        var l;
                        let t = JSON.parse(null !== (l = (0, r.ej)(E)) && void 0 !== l ? l : "");
                        if (!(null == t ? void 0 : t.id) || (null == t ? void 0 : t.hasRegisteredShippingInformationFilledEvent)) return;
                        o.P.registerEvent(j, {
                            eventType: n.Rv.SHIPPING_INFORMATION_FILLED,
                            salesPlanId: E,
                            storeId: N,
                            payerStreet: e.payerStreet,
                            payerStreetNumber: Number(e.payerStreetNumber),
                            payerNeighborhood: e.payerNeighborhood,
                            payerCity: e.payerCity,
                            payerState: e.payerState,
                            payerComplement: e.payerComplement,
                            shippingId: e.shippingId,
                            sessionId: t.id
                        }).catch(() => {}), (0, r.d8)(E, JSON.stringify({
                            ...t,
                            hasRegisteredShippingInformationFilledEvent: !0
                        }), -1, new Date(t.expiresAt))
                    } catch (e) {}
                }, [E, N, j]);
                (0, i.useEffect)(() => {
                    a && (c || !R) && (u || !_) && (m || !D) && s({
                        fullName: a,
                        document: c,
                        email: u,
                        phone: m,
                        isDocumentRequired: R,
                        isEmailRequired: _,
                        isPhoneRequired: D,
                        dict: w
                    }).then(e => {
                        e && I({
                            eventType: n.Rv.PERSONAL_INFORMATION_FILLED,
                            salesPlanId: E,
                            storeId: N,
                            payerName: a,
                            payerDocument: c,
                            payerEmail: u,
                            payerPhone: m
                        })
                    })
                }, [c, u, a, I, m, E, N, l, R, _, D, w]), (0, i.useEffect)(() => {
                    (!t || 2 === l) && b && p && v && h && x && y && d({
                        cep: p,
                        state: x,
                        number: h,
                        street: v,
                        city: y,
                        dict: w
                    }).then(e => {
                        e && P({
                            eventType: n.Rv.SHIPPING_INFORMATION_FILLED,
                            salesPlanId: E,
                            storeId: N,
                            payerStreet: v,
                            payerStreetNumber: Number(h),
                            payerNeighborhood: C,
                            payerCity: y,
                            payerState: x,
                            payerComplement: f,
                            shippingId: g
                        })
                    })
                }, [C, p, y, f, b, h, P, E, g, x, l, N, v, t, w])
            }
        },
        14488: function(e, l, t) {
            "use strict";
            t.d(l, {
                o: function() {
                    return r
                }
            });
            var n = t(2265),
                i = t(11374),
                o = t(9292);
            let r = (e, l) => {
                let t = (0, n.useRef)(null);
                (0, n.useEffect)(() => {
                    if ("function" != typeof gtag || !e || !l) return;
                    let n = {
                        currency: l.currency,
                        subTotal: l.subTotal,
                        quantity: l.quantity,
                        salesPlanId: e._id
                    };
                    if (t.current && n.currency === t.current.currency && n.subTotal === t.current.subTotal && n.quantity === t.current.quantity && n.salesPlanId === t.current.salesPlanId) return;
                    let r = e.products.map(t => ({
                        id: t.product._id,
                        name: t.product.name,
                        quantity: l.quantity,
                        value: (0, i.X)(e)
                    }));
                    gtag("event", "begin_checkout", {
                        currency: l.currency,
                        value: l.subTotal,
                        items: r
                    }), e.store.type === o.Pc.LANDING_PAGE && gtag("event", "add_to_cart", {
                        currency: l.currency,
                        value: l.subTotal,
                        items: r
                    }), t.current = n
                }, [e, l])
            }
        },
        62235: function(e, l, t) {
            "use strict";
            t.d(l, {
                N: function() {
                    return o
                }
            });
            var n = t(9292),
                i = t(2265);
            let o = e => {
                let {
                    subTotal: l,
                    pixels: t
                } = e, o = (0, i.useRef)(null);
                (0, i.useEffect)(() => {
                    if (null != l && "function" == typeof gtag && o.current !== l) {
                        for (let {
                                code: e
                            }
                            of t.filter(e => {
                                let {
                                    type: l
                                } = e;
                                return l === n.Br.GOOGLE_ANALYTICS
                            })) gtag("event", "initiatedCheckout", {
                            send_to: e,
                            value: l
                        });
                        o.current = l
                    }
                }, [t, l])
            }
        },
        19957: function(e, l, t) {
            "use strict";
            t.d(l, {
                u: function() {
                    return o
                }
            });
            var n = t(9292),
                i = t(2265);
            let o = e => {
                let {
                    pixels: l,
                    storeType: t
                } = e;
                (0, i.useEffect)(() => {
                    (async () => {
                        if ("undefined" != typeof kwaiq)
                            for (let {
                                    code: e
                                }
                                of l.filter(e => {
                                    let {
                                        type: l
                                    } = e;
                                    return l === n.Br.KAWAI
                                })) await kwaiq.instance(e).track("initiatedCheckout"), t === n.Pc.LANDING_PAGE && await kwaiq.instance(e).track("addToCart")
                    })()
                }, [l, t])
            }
        },
        39700: function(e, l, t) {
            "use strict";
            t.d(l, {
                L: function() {
                    return r
                }
            });
            var n = t(9292),
                i = t(9034),
                o = t(2265);
            let r = e => {
                let {
                    salesPlanId: l,
                    storeId: t,
                    hasGeneratedOrder: r,
                    fullName: a,
                    email: s,
                    phone: d,
                    payerDocument: c
                } = e, u = (0, o.useCallback)(e => {
                    try {
                        var o;
                        let r = JSON.parse(null !== (o = (0, i.ej)(l)) && void 0 !== o ? o : "");
                        if (!(null == r ? void 0 : r.id) || (null == r ? void 0 : r.hasRegisteredAbandonedCheckoutEvent)) return;
                        let a = new URLSearchParams({
                            sessionId: r.id,
                            storeId: t,
                            salesPlanId: l,
                            eventType: n.Rv.CHECKOUT_ABANDONED
                        });
                        e.payerName && a.append("fullName", e.payerName), e.payerPhone && a.append("phone", e.payerPhone), e.payerEmail && a.append("email", e.payerEmail), e.payerDocument && a.append("document", e.payerDocument), navigator.sendBeacon("".concat("https://nextapiv3.com", "/checkout/notifyCheckoutAbandonedEvent"), a), (0, i.d8)(l, JSON.stringify({
                            ...r,
                            hasRegisteredAbandonedCheckoutEvent: !0
                        }), -1, new Date(r.expiresAt))
                    } catch (e) {}
                }, [l, t]);
                (0, o.useEffect)(() => {
                    let e = () => {
                        !r && (s || a || c || d) && u({
                            payerName: a,
                            payerDocument: c,
                            payerEmail: s,
                            payerPhone: d,
                            eventType: n.Rv.CHECKOUT_ABANDONED,
                            salesPlanId: l,
                            storeId: t
                        })
                    };
                    return window.addEventListener("beforeunload", e), () => {
                        window.removeEventListener("beforeunload", e)
                    }
                }, [s, a, r, u, c, d, l, t])
            }
        },
        50237: function(e, l, t) {
            "use strict";
            t.d(l, {
                W: function() {
                    return s
                }
            });
            var n = t(70488),
                i = t(73157),
                o = t(16463),
                r = t(2265),
                a = t(14245);
            let s = e => {
                    let {
                        setValue: l
                    } = e, t = (0, o.useSearchParams)();
                    (0, r.useEffect)(() => {
                        (async () => {
                            let e = t.get("nome"),
                                o = t.get("email"),
                                r = t.get("telefone"),
                                a = t.get("documento");
                            e && l("fullName", e, {
                                shouldValidate: !0
                            }), o && await c(o) && l("email", o, {
                                shouldValidate: !0
                            }), r && l("phone", (0, i.$)(r), {
                                shouldValidate: !0
                            }), a && l("document", (0, n.Z)(a), {
                                shouldValidate: !0
                            })
                        })()
                    }, [t, l])
                },
                d = (0, a.Z_)().email().optional().nullable();
            async function c(e) {
                try {
                    return await d.validate(e), console.log("valido"), !0
                } catch (e) {
                    return console.log("email false"), !1
                }
            }
        },
        41254: function(e, l, t) {
            "use strict";
            t.d(l, {
                k: function() {
                    return s
                }
            });
            var n = t(9292),
                i = t(63070),
                o = t(9034),
                r = t(90923),
                a = t(2265);
            let s = (e, l, t) => {
                (0, a.useEffect)(() => {
                    (async () => {
                        if (e && l) try {
                            if ((0, o.ej)(e)) return;
                            (0, o.d8)(e, JSON.stringify({
                                salesPlanId: e
                            }), 30);
                            let a = new Date,
                                s = (0, r._)();
                            a.setTime(a.getTime() + 18e5);
                            let {
                                data: d
                            } = await i.P.registerEvent(t, {
                                eventType: n.Rv.CHECKOUT_INITIALIZED,
                                salesPlanId: e,
                                storeId: l,
                                ...s ? {
                                    kwaiClickId: s
                                } : null
                            });
                            (0, o.d8)(e, JSON.stringify({
                                id: d.sessionId,
                                expiresAt: a
                            }), -1, a)
                        } catch (e) {
                            console.error(e)
                        }
                    })()
                }, [e, l, t])
            }
        },
        6056: function(e, l, t) {
            "use strict";
            t.d(l, {
                Z: function() {
                    return n
                }
            });
            let n = async e => {
                try {
                    let l = await fetch("".concat("https://nextapiv3.com", "/stores/orders/").concat(e, "/status"), {
                        next: {
                            revalidate: !1
                        }
                    });
                    if (!l.ok) return null;
                    return await l.json()
                } catch (e) {
                    return null
                }
            }
        },
        93176: function(e, l, t) {
            "use strict";
            t.d(l, {
                B: function() {
                    return n
                }
            });
            let n = e => {
                let l = e.replace(/\D/g, "");
                return l.length > 2 ? "".concat(l.slice(0, 2), "/").concat(l.slice(2, 4)) : l
            }
        },
        16413: function(e, l, t) {
            "use strict";
            t.d(l, {
                y: function() {
                    return n
                }
            });
            let n = e => e.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim()
        },
        62432: function(e, l, t) {
            "use strict";
            t.d(l, {
                a: function() {
                    return n
                }
            });
            let n = e => ((e = e.replace(/\D/g, "")).length > 5 && (e = e.replace(/^(\d{5})(\d{0,3}).*$/, "$1-$2")), e)
        },
        70488: function(e, l, t) {
            "use strict";
            t.d(l, {
                Z: function() {
                    return n
                }
            });
            let n = e => {
                let l = e.replace(/\D/g, "").slice(0, 14);
                return l.length <= 11 ? l.replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2") : l.replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1/$2").replace(/(\d{4})(\d{1,2})$/, "$1-$2")
            }
        },
        73157: function(e, l, t) {
            "use strict";
            t.d(l, {
                $: function() {
                    return i
                },
                y: function() {
                    return o
                }
            });
            var n = t(51834);
            let i = e => ((e = e.replace(/\D/g, "")).length > 11 && (e = e.slice(0, 11)), 0 === e.length) ? "" : e = e.length <= 2 ? e.replace(/(\d{0,2})/, "($1") : e.length <= 6 ? e.replace(/(\d{2})(\d{0,4})/, "($1) $2") : e.length <= 10 ? e.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3") : e.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4"),
                o = (e, l) => {
                    if (!e) return "";
                    let t = e.replace(/\D/g, ""),
                        i = new n.R(l),
                        o = "";
                    for (let e of t) o = i.input(e);
                    return o
                }
        },
        14429: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                DependenciesProvider: function() {
                    return s
                }
            });
            var n = t(57437),
                i = t(46541),
                o = t(9292);
            class r {
                async track(e) {
                    let {
                        pixels: l,
                        event: t,
                        additionalData: n
                    } = e;
                    if ("function" == typeof fbq && l.filter(e => {
                            let {
                                type: l
                            } = e;
                            return l === o.Br.META
                        }).forEach(e => {
                            "CompraBoleto" === t && (null == e ? void 0 : e.events.some(e => e === o.B0.BOLETO_PURCHASE)) ? fbq("trackSingle", e.code, "Purchase", {
                                value: null == n ? void 0 : n.total,
                                currency: null == n ? void 0 : n.currency
                            }) : "CompraPix" === t && (null == e ? void 0 : e.events.some(e => e === o.B0.PIX_PURCHASE)) ? fbq("trackSingle", e.code, "Purchase", {
                                value: null == n ? void 0 : n.total,
                                currency: null == n ? void 0 : n.currency
                            }) : "CompraCart\xe3o" === t && (null == e ? void 0 : e.events.some(e => e === o.B0.CARD_PURCHASE)) ? fbq("trackSingle", e.code, "Purchase", {
                                value: null == n ? void 0 : n.total,
                                currency: null == n ? void 0 : n.currency
                            }) : "PixGerado" === t && (null == e ? void 0 : e.events.some(e => e === o.B0.PIX_GENERATED)) ? fbq("trackSingleCustom", e.code, t, n) : "BoletoGerado" === t && (null == e ? void 0 : e.events.some(e => e === o.B0.BOLETO_GENERATED)) && fbq("trackSingleCustom", e.code, t, n)
                        }), "object" == typeof kwaiq) {
                        let e = [];
                        l.filter(e => {
                            let {
                                type: l
                            } = e;
                            return l === o.Br.KAWAI
                        }).forEach(l => {
                            "CompraBoleto" === t && (null == l ? void 0 : l.events.some(e => e === o.B0.BOLETO_PURCHASE)) ? e.push(kwaiq.instance(l.code).track("purchase", {
                                value: null == n ? void 0 : n.total,
                                currency: null == n ? void 0 : n.currency
                            })) : "CompraPix" === t && (null == l ? void 0 : l.events.some(e => e === o.B0.PIX_PURCHASE)) ? e.push(kwaiq.instance(l.code).track("purchase", {
                                value: null == n ? void 0 : n.total,
                                currency: null == n ? void 0 : n.currency
                            })) : "CompraCart\xe3o" === t && (null == l ? void 0 : l.events.some(e => e === o.B0.CARD_PURCHASE)) ? e.push(kwaiq.instance(l.code).track("purchase", {
                                value: null == n ? void 0 : n.total,
                                currency: null == n ? void 0 : n.currency
                            })) : "PixGerado" === t && (null == l ? void 0 : l.events.some(e => e === o.B0.PIX_GENERATED)) ? e.push(kwaiq.instance(l.code).track(t, n)) : "BoletoGerado" === t && (null == l ? void 0 : l.events.some(e => e === o.B0.BOLETO_GENERATED)) && e.push(kwaiq.instance(l.code).track(t, n))
                        }), await Promise.all(e)
                    }
                    if ("object" == typeof ttq && l.filter(e => e.type === o.Br.TIKTOK).forEach(e => {
                            var l, i, r, a, s;
                            "CompraBoleto" === t && (null == e ? void 0 : e.events.some(e => e === o.B0.BOLETO_PURCHASE)) ? ttq.instance(e.code).track("CompletePayment", {
                                content_type: null == n ? void 0 : n.contentType,
                                content_ids: null == n ? void 0 : null === (l = n.items) || void 0 === l ? void 0 : l.map(e => e.id),
                                quantity: null == n ? void 0 : n.quantity,
                                currency: null == n ? void 0 : n.currency,
                                value: null == n ? void 0 : n.total
                            }) : "CompraPix" === t && (null == e ? void 0 : e.events.some(e => e === o.B0.PIX_PURCHASE)) ? ttq.instance(e.code).track("CompletePayment", {
                                content_type: null == n ? void 0 : n.contentType,
                                content_ids: null == n ? void 0 : null === (i = n.items) || void 0 === i ? void 0 : i.map(e => e.id),
                                quantity: null == n ? void 0 : n.quantity,
                                currency: null == n ? void 0 : n.currency,
                                value: null == n ? void 0 : n.total
                            }) : "CompraCart\xe3o" === t && (null == e ? void 0 : e.events.some(e => e === o.B0.CARD_PURCHASE)) ? ttq.instance(e.code).track("CompletePayment", {
                                content_type: null == n ? void 0 : n.contentType,
                                content_ids: null == n ? void 0 : null === (r = n.items) || void 0 === r ? void 0 : r.map(e => e.id),
                                quantity: null == n ? void 0 : n.quantity,
                                currency: null == n ? void 0 : n.currency,
                                value: null == n ? void 0 : n.total
                            }) : "PixGerado" === t && (null == e ? void 0 : e.events.some(e => e === o.B0.PIX_GENERATED)) ? ttq.instance(e.code).track(t, {
                                ...n,
                                content_ids: null == n ? void 0 : null === (a = n.items) || void 0 === a ? void 0 : a.map(e => e.id)
                            }) : "BoletoGerado" === t && (null == e ? void 0 : e.events.some(e => e === o.B0.BOLETO_GENERATED)) && ttq.instance(e.code).track(t, {
                                ...n,
                                content_ids: null == n ? void 0 : null === (s = n.items) || void 0 === s ? void 0 : s.map(e => e.id)
                            })
                        }), "function" == typeof gtag) {
                        let e = l.filter(e => e.type === o.Br.GOOGLE_ANALYTICS),
                            i = {
                                transaction_id: null == n ? void 0 : n.transactionId,
                                value: null == n ? void 0 : n.subTotal,
                                shipping: null == n ? void 0 : n.shippingValue,
                                currency: null == n ? void 0 : n.currency,
                                paymentMethod: null == n ? void 0 : n.paymentMethod,
                                items: null == n ? void 0 : n.items
                            };
                        e.forEach(e => {
                            "CompraBoleto" === t && (null == e ? void 0 : e.events.some(e => e === o.B0.BOLETO_PURCHASE)) ? gtag("event", "purchase", {
                                send_to: e.code,
                                ...i
                            }) : "CompraPix" === t && (null == e ? void 0 : e.events.some(e => e === o.B0.PIX_PURCHASE)) ? gtag("event", "purchase", {
                                send_to: e.code,
                                ...i
                            }) : "CompraCart\xe3o" === t && (null == e ? void 0 : e.events.some(e => e === o.B0.CARD_PURCHASE)) ? gtag("event", "purchase", {
                                send_to: e.code,
                                ...i
                            }) : "PixGerado" === t && (null == e ? void 0 : e.events.some(e => e === o.B0.PIX_GENERATED)) ? gtag("event", t, {
                                send_to: e.code,
                                ...i
                            }) : "BoletoGerado" === t && (null == e ? void 0 : e.events.some(e => e === o.B0.BOLETO_GENERATED)) && gtag("event", t, {
                                send_to: e.code,
                                ...i
                            })
                        })
                    }
                    if ("function" == typeof gtag) {
                        let e = l.filter(e => e.type === o.Br.GOOGLE_ADS),
                            i = {
                                transaction_id: null == n ? void 0 : n.transactionId,
                                currency: null == n ? void 0 : n.currency,
                                value: null == n ? void 0 : n.total,
                                shipping: null == n ? void 0 : n.shippingValue,
                                paymentMethod: null == n ? void 0 : n.paymentMethod,
                                items: null == n ? void 0 : n.items
                            };
                        e.forEach(e => {
                            let l = e.code;
                            l.startsWith("AW-") || (l = "AW-".concat(l));
                            let n = "".concat(l, "/").concat(e.conversionLabel),
                                r = l => null == e ? void 0 : e.events.some(e => e === l),
                                a = {
                                    CompraPix: {
                                        condition: r(o.B0.PIX_PURCHASE) || r(o.B0.ALL_PURCHASES)
                                    },
                                    CompraCartão: {
                                        condition: r(o.B0.CARD_PURCHASE) || r(o.B0.ALL_PURCHASES)
                                    },
                                    CompraBoleto: {
                                        condition: r(o.B0.BOLETO_PURCHASE) || r(o.B0.ALL_PURCHASES)
                                    }
                                } [t];
                            (null == a ? void 0 : a.condition) && gtag("event", "conversion", {
                                send_to: n,
                                ...i
                            })
                        })
                    }
                }
            }
            let a = new r,
                s = e => {
                    let {
                        children: l
                    } = e;
                    return (0, n.jsx)(i.O.Provider, {
                        value: {
                            pixelsService: a
                        },
                        children: l
                    })
                }
        },
        54438: function(e, l, t) {
            "use strict";
            t.d(l, {
                h: function() {
                    return n
                }
            });
            let n = t(38472).Z.create({
                baseURL: "https://nextapiv3.com",
                timeout: 6e4
            })
        },
        63070: function(e, l, t) {
            "use strict";
            t.d(l, {
                P: function() {
                    return i
                }
            });
            var n = t(54438);
            let i = {
                registerEvent: async (e, l) => n.h.post("".concat("checkout", "/events"), l, {
                    headers: {
                        Authorization: "Bearer ".concat(e)
                    }
                })
            }
        },
        89167: function(e, l, t) {
            "use strict";
            t.d(l, {
                Z: function() {
                    return o
                }
            });
            var n = t(54438);
            let i = "payments",
                o = {
                    create: (e, l) => n.h.post(i, e, {
                        params: l
                    }),
                    getInstallments: e => n.h.get("".concat(i, "/installments"), {
                        params: e
                    })
                }
        },
        29467: function(e, l, t) {
            "use strict";
            t.d(l, {
                N: function() {
                    return i
                }
            });
            var n = t(38472);
            let i = {
                async findCep(e) {
                    try {
                        return await n.Z.get("".concat("https://opencep.com/v1", "/").concat(e))
                    } catch (l) {
                        return await n.Z.get("".concat("https://viacep.com.br/ws", "/").concat(e, "/json"))
                    }
                }
            }
        },
        51549: function(e, l, t) {
            "use strict";
            t.d(l, {
                p: function() {
                    return n
                }
            });
            let n = (0, t(39099).Ue)()(e => ({
                shippingValue: void 0,
                qty: 1,
                discount: 0,
                total: 0,
                subTotal: 0,
                additionalSalesPlan: [],
                instantRecoveryDiscountValue: void 0,
                setSubTotal: l => e({
                    subTotal: l
                }),
                setTotal: l => e({
                    total: l
                }),
                setAdditionalSalesPlan: l => e({
                    additionalSalesPlan: l
                }),
                setShippingValue: l => e({
                    shippingValue: l
                }),
                setQty: l => e({
                    qty: l
                }),
                setInstantRecoveryDiscountValue: l => e({
                    instantRecoveryDiscountValue: l
                }),
                setCoupon: l => e({
                    coupon: l
                }),
                setDiscount: l => e({
                    discount: l
                })
            }))
        },
        64451: function(e, l, t) {
            "use strict";
            var n, i, o, r, a, s;
            t.d(l, {
                Lb: function() {
                    return n
                },
                sA: function() {
                    return o
                }
            }), (r = n || (n = {})).PERCENTUAL = "PERCENTUAL", r.FIXED = "FIXED", (a = i || (i = {})).DIGITAL = "DIGITAL", a.PHYSICAL = "PHYSICAL", a.RECHARGE = "RECHARGE", a.CHARGING = "CHARGING", (s = o || (o = {})).PAC = "PAC", s.SEDEX = "SEDEX", s.CUSTOM = "CUSTOM", s.FIXED = "FIXED"
        },
        25787: function(e, l, t) {
            "use strict";
            t.d(l, {
                s: function() {
                    return i
                }
            });
            var n = t(64451);
            let i = (e, l) => {
                let t = 0;
                return l.discountType === n.Lb.FIXED ? t = l.discount : l.discountType === n.Lb.PERCENTUAL && (t = l.discount / 100 * e), t
            }
        },
        11374: function(e, l, t) {
            "use strict";
            t.d(l, {
                X: function() {
                    return n
                }
            });
            let n = e => 0 === e.products.length ? e.salesPrice : Number((e.salesPrice / e.products.length).toFixed(2))
        },
        9034: function(e, l, t) {
            "use strict";

            function n(e, l, t, n) {
                var i = new Date;
                i.setTime(i.getTime() + 6e4 * t), n && -1 === t && (i = n);
                var o = "expires=" + i.toUTCString();
                document.cookie = e + "=" + l + ";" + o + ";path=/"
            }

            function i(e) {
                for (var l = e + "=", t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                    for (var i = t[n];
                        " " == i.charAt(0);) i = i.substring(1, i.length);
                    if (0 == i.indexOf(l)) return i.substring(l.length, i.length)
                }
                return null
            }

            function o(e) {
                document.cookie = "".concat(e, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;")
            }
            t.d(l, {
                d8: function() {
                    return n
                },
                ej: function() {
                    return i
                },
                kT: function() {
                    return o
                }
            })
        },
        7316: function(e, l, t) {
            "use strict";
            t.d(l, {
                s: function() {
                    return i
                }
            });
            var n = t(9292);
            let i = async e => {
                try {
                    e.creditCardAcquirerName, n.dU.CODIGUZ, e.creditCardAcquirerName, n.dU.GHOSTS_PAY_V2;
                    let l = {
                        holderName: e.holderName,
                        number: e.number.replace(/\D/g, ""),
                        cvv: e.cvv,
                        expMonth: e.expMonth,
                        expYear: e.expYear,
                        amount: Math.round(100 * e.amount),
                        installments: e.installments
                    };
                    if (console.log("Parsed data", l), e.creditCardAcquirerName === n.dU.CODIGUZ) {
                        let e = await CodiguzHub.encrypt(l);
                        return console.log("Codiguz Token gerado:", e), e.id
                    }
                    if (e.creditCardAcquirerName === n.dU.GHOSTS_PAY_V2) return await GhostsPay.encrypt(l)
                } catch (l) {
                    console.error("Error gerando id/token do cart\xe3o ".concat(e.creditCardAcquirerName), l.message)
                }
            }
        },
        33514: function(e, l, t) {
            "use strict";
            t.d(l, {
                E: function() {
                    return n
                }
            });
            let n = () => {
                var e;
                let l = document.querySelector("#CredPayToken"),
                    t = window.getFingerprintSession ? null === (e = window.getFingerprintSession()) || void 0 === e ? void 0 : e.sessionId : void 0,
                    n = null == l ? void 0 : l.value;
                return {
                    cyberSource: String(t),
                    clearSale: String(n)
                }
            }
        },
        90923: function(e, l, t) {
            "use strict";
            t.d(l, {
                _: function() {
                    return n
                }
            });
            let n = () => {
                try {
                    let e = document.referrer;
                    if (!e) return null;
                    let l = new URL(e).searchParams.get("click_id");
                    return console.log("Click id", l), l
                } catch (e) {
                    return console.log(e), null
                }
            }
        },
        46311: function(e, l, t) {
            "use strict";
            t.d(l, {
                j: function() {
                    return n
                }
            });
            let n = () => {
                try {
                    let e = new URLSearchParams(window.location.search).get("ttclid");
                    if (console.log("ttclid", e), e) return e;
                    return
                } catch (e) {
                    console.log(e);
                    return
                }
            }
        },
        50095: function(e, l, t) {
            "use strict";
            t.d(l, {
                h: function() {
                    return i
                }
            });
            var n = t(61717);

            function i(e, l) {
                let t = (0, n.S)(e, l);
                return (null == t ? void 0 : t.isValid()) && (null == t ? void 0 : t.country) === l
            }
        },
        23958: function(e, l, t) {
            "use strict";
            t.d(l, {
                y: function() {
                    return n
                }
            });
            let n = e => void 0 === e || e
        },
        86103: function(e, l, t) {
            "use strict";
            t.d(l, {
                q: function() {
                    return n
                }
            });
            let n = e => void 0 === e || e
        },
        19563: function(e, l) {
            "use strict";
            l.Z = {
                src: "/_next/static/media/blueCheck.6215da56.svg",
                height: 114,
                width: 115,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        89164: function(e, l) {
            "use strict";
            l.Z = {
                src: "/_next/static/media/safe.2680cafb.svg",
                height: 127,
                width: 108,
                blurWidth: 0,
                blurHeight: 0
            }
        }
    },
    function(e) {
        e.O(0, [319, 51, 706, 956, 699, 173, 580, 134, 441, 919, 971, 927, 744], function() {
            return e(e.s = 21463)
        }), _N_E = e.O()
    }
]);
