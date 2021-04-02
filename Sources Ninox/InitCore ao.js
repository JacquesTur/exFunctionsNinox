function ao(e) {
    !function (e) {
        if (void 0 === e)
            throw new Error("Missing expected function param");
        var t = null === e ? "auto" : e.getUserDefault("ui.language") || "auto",
            n = "auto" === t ? (("undefined" != typeof navigator ? navigator.language : "en-us") || "en-us").toLowerCase() : t.toLowerCase(),
            r = n.split("-"),
            i = r[0],
            o = r[1] || i;
        if ((h = c[f = p[n] || p[i] || "en"]).LOCALE = f, h.LC = i, h.CC = o, h.groupingSeparator = ",", h.decimalSeparator = ".", h.weekStartMonday = !1, h.firstDayOfWeek = 0, h.dateFormat = "L", h.timeFormat = "LT", h.dateTimeFormat = "L LT", null !== e && "WebApp" !== e.type)
            h.groupingSeparator = e.groupingSeparator(),
                h.decimalSeparator = e.decimalSeparator(),
                h.dateFormat = v(e.dateFormat()),
                h.timeFormat = v(e.timeFormat()),
                h.time24Hours = !/a/i.test(h.timeFormat),
                h.dateTimeFormat = v(e.dateTimeFormat()),
                h.weekStartMonday = e.weekStartMonday(),
                h.firstDayOfWeek = e.firstDayOfWeek();
        else {
            ({
                ae: !0,
                au: !0,
                ca: !0,
                cn: !0,
                eg: !0,
                gb: !0,
                hk: !0,
                il: !0,
                in: !0,
                jp: !0,
                sk: !0,
                th: !0,
                tw: !0,
                us: !0
            })[o] || (!{
                at: !0,
                br: !0,
                de: !0,
                dk: !0,
                es: !0,
                gr: !0,
                it: !0,
                nl: !0,
                pt: !0,
                tr: !0,
                vn: !0
            }[o] ? !{
                bg: !0,
                cz: !0,
                fi: !0,
                fr: !0,
                no: !0,
                pl: !0,
                ru: !0,
                se: !0
            }[o] ? {
                ch: !0
            }[o] && (h.decimalSeparator = ".", h.groupingSeparator = "'") : (h.decimalSeparator = ",", h.groupingSeparator = " ") : (h.decimalSeparator = ",", h.groupingSeparator = "."))
        }
        h.dayNames = [h.day_su, h.day_mo, h.day_tu, h.day_we, h.day_th, h.day_fr, h.day_sa],
            h.dayNamesShort = [h.day_short_su, h.day_short_mo, h.day_short_tu, h.day_short_we, h.day_short_th, h.day_short_fr, h.day_short_sa],
            h.monthNames = [h.month_jan, h.month_feb, h.month_mar, h.month_apr, h.month_may, h.month_jun, h.month_jul, h.month_aug, h.month_sep, h.month_oct, h.month_nov, h.month_dec],
            h.agg = {
                cnt: h.agg_cnt,
                count: h.agg_cnt,
                sum: h.agg_sum,
                avg: h.agg_avg,
                min: h.agg_min,
                max: h.agg_max,
                first: h.agg_first,
                last: h.agg_last,
                concat: h.agg_concat,
                median: h.agg_median,
                sort: h.agg_sort,
                unique: h.agg_unique
            },
            h.types = {
                number: h.type_number,
                string: h.type_string,
                string_multiline: h.type_string_multiline,
                date: h.type_date,
                datx: h.type_datx,
                time: h.type_time,
                timeinterval: h.type_timeinterval,
                timestamp: h.type_timestamp,
                boolean: h.type_boolean,
                choice: h.type_choice,
                multi: h.type_multi,
                list: h.type_list,
                ref: h.type_ref,
                rev: h.type_rev,
                object: h.type_object,
                html: h.type_html,
                fn: h.type_fn,
                tab: h.type_tab,
                head: h.type_head,
                text: h.type_text,
                br: h.type_br,
                space: h.type_space,
                file: h.type_file,
                link: h.type_link,
                email: h.type_email,
                phone: h.type_phone,
                appointment: h.type_appointment,
                user: h.type_user,
                location: h.type_location,
                icon: h.type_icon,
                color: h.type_color,
                custom: h.type_custom,
                button: h.type_button,
                signature: h.type_signature,
                view: h.type_view,
                chart: h.type_chart
            }
    }(e.ninoxDocumentInteraction),
        yi.tnumber = new pr(void 0, void 0, {}),
        yi.tint = new pr(void 0, void 0, {}),
        yi.tstring = new fr(void 0, void 0, {}),
        yi.thtml = new mr(void 0, void 0, {}),
        yi.tboolean = new dr(void 0, void 0, {}),
        yi.tchoice = new ur(void 0, void 0, {
            values: {}
        }),
        yi.tdate = new Or(void 0, void 0, {}),
        yi.tdatx = new Pr(void 0, void 0, {}),
        yi.tappointment = new Wr(void 0, void 0, {}),
        yi.ttimestamp = new _r(void 0, void 0, {}),
        yi.ttimeinterval = new Br(void 0, void 0, {}),
        yi.ttime = new Ur(void 0, void 0, {}),
        yi.tlink = new Yr(void 0, void 0, {}),
        yi.temail = new Hr(void 0, void 0, {}),
        yi.tphone = new zr(void 0, void 0, {}),
        yi.tfile = new Nr(void 0, void 0, {}),
        yi.tlocation = new qr(void 0, void 0, {}),
        yi.tnid = new vr(void 0),
        yi.trid = new yr(void 0),
        yi.tcolor = new Er(void 0, void 0, {}),
        yi.ticon = new xr(void 0, void 0, {}),
        yi.tuser = new br(void 0, void 0, {}),
        yi.tjson = new ai(void 0, void 0, {}),
        yi.tstyled = new Qr(void 0, void 0, {}),
        yi.tstyle = new Cr(void 0, void 0, {}),
        yi.tcomplex = new oi(void 0, void 0, {}),
        yi.tany = new ii(void 0, void 0, {}),
        yi.tvoid = new Vr(void 0, void 0, {}),
        Ln = new kt(null),
        Cn = new kt(!0),
        Dn = new kt(!1),
        new kt(0),
        An = new kt(1),
        En = new kt(void 0, yi.tvoid, !1),
        Pn = new On,
        dt = {
            "number+number": {
                op: "+",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)+(" + n + "||0))"
                }
            },
            "number-number": {
                op: "-",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)-(" + n + "||0))"
                }
            },
            "number*number": {
                op: "*",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)*(" + n + "||0))"
                }
            },
            "number/number": {
                op: "/",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)/(" + n + "||0))"
                }
            },
            "number%number": {
                op: "%",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)%(" + n + "||0))"
                }
            },
            "string+string": {
                op: "+",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return "((" + t + '||"")+(' + n + '||""))'
                }
            },
            "string+number": {
                op: "+",
                isConstant: !1,
                returnType: "a",
                compileSyncJS: function (e, t, n, r, i) {
                    return "((" + t + '||"")+' + e.typeVariable(i) + ".format(" + n + "))"
                }
            },
            "number+string": {
                op: "+",
                isConstant: !1,
                returnType: "b",
                compileSyncJS: function (e, t, n, r, i) {
                    return "(" + e.typeVariable(r) + ".format(" + t + ")+(" + n + '||""))'
                }
            },
            "string+any": {
                op: "+",
                isConstant: !1,
                returnType: "a",
                compileSyncJS: function (e, t, n, r, i) {
                    return "((" + t + '||"")+' + e.typeVariable(i) + ".format(" + n + "))"
                }
            },
            "any+string": {
                op: "+",
                isConstant: !1,
                returnType: "b",
                compileSyncJS: function (e, t, n, r, i) {
                    return "(" + e.typeVariable(r) + ".format(" + t + ")+(" + n + '||""))'
                }
            },
            "any+any": {
                op: "+",
                isConstant: !1,
                returnType: yi.tstring,
                compileSyncJS: function (e, t, n, r, i) {
                    return "(" + e.typeVariable(r) + ".format(" + t + ")+" + e.typeVariable(i) + ".format(" + n + "))"
                }
            },
            "[any]+[any]": {
                op: "+",
                isConstant: !1,
                returnType: yi.tstring,
                compileSyncJS: function (e, t, n, r, i) {
                    return "(ctx.join(" + t + "," + e.typeVariable(r) + ")+ctx.join(" + n + "," + e.typeVariable(i) + "))"
                }
            },
            "[any]+any": {
                op: "+",
                isConstant: !1,
                returnType: yi.tstring,
                compileSyncJS: function (e, t, n, r, i) {
                    return "(ctx.join(" + t + "," + e.typeVariable(r) + ")+" + e.typeVariable(i) + ".format(" + n + "))"
                }
            },
            "any+[any]": {
                op: "+",
                isConstant: !1,
                returnType: yi.tstring,
                compileSyncJS: function (e, t, n, r, i) {
                    return "(" + e.typeVariable(r) + ".format(" + t + ")+ctx.join(" + n + "," + e.typeVariable(i) + "))"
                }
            },
            "date+number": {
                op: "+",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return '(function(a,b){return typeof a!=="number"?undefined:a+Math.floor((b||0)*864e+5)})(' + t + "," + n + ")"
                }
            },
            "number+date": {
                op: "+",
                isConstant: !0,
                returnType: "b",
                compileSyncJS: function (e, t, n) {
                    return '(function(a,b){return typeof b!=="number"?undefined:b+Math.floor((a||0)*864e+5)})(' + t + "," + n + ")"
                }
            },
            "date-number": {
                op: "-",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return '(function(a,b){return typeof a!=="number"?undefined:a-Math.floor((b||0)*864e+5)})(' + t + "," + n + ")"
                }
            },
            "date-date": {
                op: "-",
                isConstant: !0,
                returnType: yi.ttimeinterval,
                compileSyncJS: function (e, t, n) {
                    return '(function(a, b) {return typeof a !== "number" || typeof b !== "number" ? undefined : a - b})(' + t + "," + n + ")"
                }
            },
            "date-timestamp": {
                op: "-",
                isConstant: !0,
                returnType: yi.ttimeinterval,
                compileSyncJS: function (e, t, n) {
                    return '(function(a, b) {return typeof a !== "number" || typeof b !== "number" ? undefined : a - b})(' + t + "," + n + ")"
                }
            },
            "timestamp-date": {
                op: "-",
                isConstant: !0,
                returnType: yi.ttimeinterval,
                compileSyncJS: function (e, t, n) {
                    return '(function(a, b) {return typeof a !== "number" || typeof b !== "number" ? undefined : a - b})(' + t + "," + n + ")"
                }
            },
            "timestamp-timestamp": {
                op: "-",
                isConstant: !0,
                returnType: yi.ttimeinterval,
                compileSyncJS: function (e, t, n) {
                    return '(function(a, b) {return typeof a !== "number" || typeof b !== "number" ? undefined : a - b})(' + t + "," + n + ")"
                }
            },
            "date-timeinterval": {
                op: "-",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return '(function(a,b){return typeof a!=="number"?undefined:a-(b||0)})(' + t + "," + n + ")"
                }
            },
            "date+timeinterval": {
                op: "+",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return '(function(a,b){return typeof a!=="number"?undefined:a+(b||0)})(' + t + "," + n + ")"
                }
            },
            "timeinterval+date": {
                op: "+",
                isConstant: !0,
                returnType: "b",
                compileSyncJS: function (e, t, n) {
                    return '(function(a,b){return typeof b!=="number"?undefined:(a||0)+b})(' + t + "," + n + ")"
                }
            },
            "timeinterval-timeinterval": {
                op: "-",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)-(" + n + "||0))"
                }
            },
            "timeinterval+timeinterval": {
                op: "+",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)+(" + n + "||0))"
                }
            },
            "timeinterval+number": {
                op: "+",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)+(" + n + "||0))"
                }
            },
            "timeinterval-number": {
                op: "-",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)-(" + n + "||0))"
                }
            },
            "timeinterval*number": {
                op: "*",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)*(" + n + "||0))"
                }
            },
            "timeinterval/number": {
                op: "/",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)/(" + n + "||0))"
                }
            },
            "number+timeinterval": {
                op: "+",
                isConstant: !0,
                returnType: "b",
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)+(" + n + "||0))"
                }
            },
            "number-timeinterval": {
                op: "-",
                isConstant: !0,
                returnType: "b",
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)-(" + n + "||0))"
                }
            },
            "number*timeinterval": {
                op: "*",
                isConstant: !0,
                returnType: "b",
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)*(" + n + "||0))"
                }
            },
            "number/timeinterval": {
                op: "/",
                isConstant: !0,
                returnType: "b",
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)/(" + n + "||0))"
                }
            },
            "timestamp+timeinterval": {
                op: "+",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return '(function(a,b){return typeof a!=="number"?undefined:a+(b||0)})(' + t + "," + n + ")"
                }
            },
            "timestamp+number": {
                op: "+",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return '(function(a,b){return typeof a!=="number"?undefined:a+(b||0)})(' + t + "," + n + ")"
                }
            },
            "timestamp-timeinterval": {
                op: "-",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return '(function(a,b){return typeof a!=="number"?undefined:a-(b||0)})(' + t + "," + n + ")"
                }
            },
            "timeinterval+timestamp": {
                op: "+",
                isConstant: !0,
                returnType: "b",
                compileSyncJS: function (e, t, n) {
                    return '(function(a,b){return typeof b!=="number"?undefined:(a||0)+b})(' + t + "," + n + ")"
                }
            },
            "date+time": {
                op: "+",
                isConstant: !0,
                returnType: yi.ttimestamp,
                compileSyncJS: function (e, t, n) {
                    return '(function(a,b){return typeof a!=="number"?undefined:a+(b||0)})(' + t + "," + n + ")"
                }
            },
            "time+date": {
                op: "+",
                isConstant: !0,
                returnType: yi.ttimestamp,
                compileSyncJS: function (e, t, n) {
                    return '(function(a,b){return typeof b!=="number"?undefined:(a||0)+b})(' + t + "," + n + ")"
                }
            },
            "date-time": {
                op: "-",
                isConstant: !0,
                returnType: yi.ttimestamp,
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)-(" + n + "||0))"
                }
            },
            "timestamp+time": {
                op: "+",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return '(function(a,b){return typeof a!=="number"?undefined:a+(b||0)})(' + t + "," + n + ")"
                }
            },
            "time+timestamp": {
                op: "+",
                isConstant: !0,
                returnType: "b",
                compileSyncJS: function (e, t, n) {
                    return '(function(a,b){return typeof b!=="number"?undefined:(a||0)+b})(' + t + "," + n + ")"
                }
            },
            "timestamp-time": {
                op: "-",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return '(function(a,b){return typeof a!=="number"?undefined:a-(b||0)})(' + t + "," + n + ")"
                }
            },
            "timeinterval+time": {
                op: "+",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)+(" + n + "||0))"
                }
            },
            "time+timeinterval": {
                op: "+",
                isConstant: !0,
                returnType: "b",
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)+(" + n + "||0))"
                }
            },
            "timeinterval-time": {
                op: "-",
                isConstant: !0,
                returnType: "a",
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)-(" + n + "||0))"
                }
            },
            "time-timeinterval": {
                op: "-",
                isConstant: !0,
                returnType: "b",
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)-(" + n + "||0))"
                }
            },
            "time-time": {
                op: "-",
                isConstant: !0,
                returnType: yi.ttimeinterval,
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)-(" + n + "||0))"
                }
            },
            "time+time": {
                op: "+",
                isConstant: !0,
                returnType: yi.ttimeinterval,
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)+(" + n + "||0))"
                }
            },
            "time*number": {
                op: "*",
                isConstant: !0,
                returnType: yi.ttimeinterval,
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)*(" + n + "||0))"
                }
            },
            "number*time": {
                op: "*",
                isConstant: !0,
                returnType: yi.ttimeinterval,
                compileSyncJS: function (e, t, n) {
                    return "((" + t + "||0)*(" + n + "||0))"
                }
            }
        },
        function (e) {
            function t(e) {
                return null != e ? String(e) : e
            }
            function n(e) {
                if (null != e) {
                    var t = parseInt(e, 10);
                    return Number.isNaN(t) ? void 0 : t
                }
            }
            function r(t, n, r, i) {
                if (i < r) {
                    var o = i;
                    i = r,
                        r = o
                }
                e.addCalendarEvent(t, new Date(r), new Date(i), !1, n || g().unnamed, (function (t) {
                    t && e.alert(t)
                }))
            }
            Kn("ninoxApp()", yi.tstring, (function () {
                return e.userEnvName
            })),
                Kn("url(string)", yi.tlink, (function (e) {
                    return null == e ? void 0 : String(e)
                })),
                Kn("url(string,any)", yi.tlink, (function (e, t) {
                    if (e) {
                        var n = String(e);
                        if (t) {
                            var r = -1 === n.indexOf("?");
                            for (var i in t)
                                if (t.hasOwnProperty(i)) {
                                    var o = t[i];
                                    n += (r ? "?" : "&") + encodeURIComponent(i) + "=" + encodeURIComponent(o),
                                        r = !1
                                }
                        }
                        return n
                    }
                })),
                Kn("urlEncode(string)", yi.tstring, (function (e) {
                    try {
                        return null == e ? void 0 : encodeURIComponent(e)
                    } catch (e) {
                        return
                    }
                })),
                Kn("urlDecode(string)", yi.tstring, (function (e) {
                    try {
                        return null == e ? void 0 : decodeURIComponent(e)
                    } catch (e) {
                        return
                    }
                })),
                Kn("year(date)", yi.tnumber, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : new Date(e).getFullYear()
                })),
                Kn("year(datx)", yi.tnumber, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : new Date(e).getUTCFullYear()
                })),
                Kn("year(timestamp)", yi.tnumber, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : new Date(e).getFullYear()
                })),
                Kn("year(appointment)", yi.tnumber, (function (e) {
                    if (null != e && "string" == typeof e) {
                        var t = parseInt(e, 10);
                        return new Date(t).getFullYear()
                    }
                })),
                Kn("month(date)", yi.tnumber, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : new Date(e).getMonth() + 1
                })),
                Kn("month(datx)", yi.tnumber, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : new Date(e).getUTCMonth() + 1
                })),
                Kn("month(timestamp)", yi.tnumber, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : new Date(e).getMonth() + 1
                })),
                Kn("month(appointment)", yi.tnumber, (function (e) {
                    if (null != e && "string" == typeof e) {
                        var t = parseInt(e, 10);
                        return new Date(t).getMonth() + 1
                    }
                })),
                Kn("monthName(date)", yi.tstring, (function (e) {
                    return null == e ? void 0 : g().monthNames[new Date(e).getMonth() - 1]
                })),
                Kn("monthName(datx)", yi.tstring, (function (e) {
                    return null == e ? void 0 : g().monthNames[new Date(e).getUTCMonth() - 1]
                })),
                Kn("monthName(number)", yi.tstring, (function (e) {
                    return null == e ? void 0 : g().monthNames[e - 1]
                })),
                Kn("monthIndex(string)", yi.tnumber, (function (e) {
                    if (null != e) {
                        e = String(e).toLocaleLowerCase();
                        for (var t = 0; t < 12; t++) {
                            if (0 === g().monthNames[t].toLocaleLowerCase().indexOf(e))
                                return t + 1
                        }
                    }
                })),
                Kn("weekdayName(number)", yi.tstring, (function (e) {
                    return null == e ? void 0 : g().dayNames[(e + 1) % 7]
                })),
                Kn(["weekdayName(date)", "weekdayName(timestamp)"], yi.tstring, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : g().dayNames[new Date(e).getDay()]
                })),
                Kn("weekdayName(datx)", yi.tstring, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : g().dayNames[new Date(e).getUTCDay()]
                })),
                Kn("weekdayName(appointment)", yi.tstring, (function (e) {
                    if (null != e && "string" == typeof e) {
                        var t = parseInt(e, 10);
                        return g().dayNames[new Date(t).getDay()]
                    }
                })),
                Kn("weekdayIndex(string)", yi.tnumber, (function (e) {
                    if (null != e) {
                        e = String(e).toLocaleLowerCase();
                        for (var t = 0; t < 7; t++) {
                            if (0 === g().dayNames[t].toLocaleLowerCase().indexOf(e))
                                return (t + 6) % 7
                        }
                    }
                })),
                Kn("day(date)", yi.tnumber, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : new Date(e).getDate()
                })),
                Kn("day(datx)", yi.tnumber, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : new Date(e).getUTCDate()
                })),
                Kn("day(timestamp)", yi.tnumber, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : new Date(e).getDate()
                })),
                Kn("day(appointment)", yi.tnumber, (function (e) {
                    if (null != e && "string" == typeof e) {
                        var t = parseInt(e, 10);
                        return new Date(t).getDate()
                    }
                })),
                Kn(["weekday(date)", "weekday(timestamp)"], yi.tnumber, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : (6 + new Date(e).getDay()) % 7
                })),
                Kn("weekday(datx)", yi.tnumber, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : (6 + new Date(e).getUTCDay()) % 7
                })),
                Kn("weekday(appointment)", yi.tnumber, (function (e) {
                    if (null != e && "string" == typeof e) {
                        var t = parseInt(e, 10);
                        return (6 + new Date(t).getDay()) % 7
                    }
                })),
                Kn("today()", yi.tdate, (function () {
                    var e = new Date;
                    return new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime()
                }), !1, !1, !1, !1, !1, !1),
                Kn("now()", yi.ttimestamp, (function () {
                    return (new Date).getTime()
                }), !1, !1, !1, !1, !1, !1),
                Kn("age(date)", yi.tnumber, (function (e) {
                    if (null != e && "number" == typeof e) {
                        var t = new Date,
                            n = new Date(e);
                        return t.getFullYear() - n.getFullYear() + (t.getMonth() > n.getMonth() || t.getMonth() === n.getMonth() && t.getDate() >= n.getDate() ? 0 : -1)
                    }
                })),
                Kn("age(datx)", yi.tnumber, (function (e) {
                    if (null != e && "number" == typeof e) {
                        var t = new Date,
                            n = new Date(e);
                        return t.getUTCFullYear() - n.getUTCFullYear() + (t.getUTCMonth() > n.getUTCMonth() || t.getUTCMonth() === n.getUTCMonth() && t.getUTCDate() >= n.getUTCDate() ? 0 : -1)
                    }
                })),
                Kn("format(date,string)", yi.tstring, (function (e, t) {
                    if (null != e && "number" == typeof e && null != t && "string" == typeof t)
                        return A.formatDate(new Date(e), t)
                })),
                Kn("format(datx,string)", yi.tstring, (function (e, t) {
                    if (null != e && "number" == typeof e && null != t && "string" == typeof t) {
                        var n = new Date(e),
                            r = new Date(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate());
                        return A.formatDate(r, t)
                    }
                })),
                Kn("format(timestamp,string)", yi.tstring, (function (e, t) {
                    if (null != e && "number" == typeof e && null != t && "string" == typeof t)
                        return A.formatDate(new Date(e), t)
                })),
                Kn("format(time,string)", yi.tstring, (function (e, t) {
                    if (null != e && "number" == typeof e && null != t && "string" == typeof t)
                        return A.formatUTCTime(e, t)
                })),
                Kn("format(appointment,string)", yi.tstring, (function (e, t) {
                    if (null != e && "string" == typeof e && null != t && "string" == typeof t) {
                        var n = parseInt(e, 10);
                        return A.formatDate(new Date(n), t)
                    }
                })),
                Kn("format(number,string)", yi.tstring, (function (e, t) {
                    if (null != e && "number" == typeof e && null != t && "string" == typeof t)
                        return A.numberFormatFromString(t)(e)
                })),
                Kn("odd(number)", yi.tnumber, (function (e) {
                    return null == e ? void 0 : e % 2 != 0
                })),
                Kn("even(number)", yi.tnumber, (function (e) {
                    return null == e ? void 0 : e % 2 == 0
                })),
                Kn("round(number)", yi.tnumber, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : Math.round(e)
                })),
                Kn("round(number,number)", yi.tnumber, (function (e, t) {
                    if (null != e && "number" == typeof e && null != t && "number" == typeof t) {
                        var n = Math.pow(10, t);
                        return Math.round(e * n) / n
                    }
                })),
                Kn("floor(number)", yi.tnumber, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : Math.floor(e)
                })),
                Kn("ceil(number)", yi.tnumber, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : Math.ceil(e)
                })),
                Kn("sqrt(number)", yi.tnumber, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : Math.sqrt(e)
                })),
                Kn("sqr(number)", yi.tnumber, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : e * e
                })),
                Kn("sign(number)", yi.tnumber, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : e < 0 ? -1 : e >= 0 ? 1 : void 0
                })),
                Kn("abs(number)", yi.tnumber, (function (e) {
                    if (null != e && "number" == typeof e)
                        return Math.abs(e)
                })),
                Kn("sin(number)", yi.tnumber, (function (e) {
                    if (null != e && "number" == typeof e)
                        return Math.sin(e)
                })),
                Kn("cos(number)", yi.tnumber, (function (e) {
                    if (null != e && "number" == typeof e)
                        return Math.cos(e)
                })),
                Kn("tan(number)", yi.tnumber, (function (e) {
                    if (null != e && "number" == typeof e)
                        return Math.tan(e)
                })),
                Kn("asin(number)", yi.tnumber, (function (e) {
                    if (null != e && "number" == typeof e)
                        return Math.asin(e)
                })),
                Kn("acos(number)", yi.tnumber, (function (e) {
                    if (null != e && "number" == typeof e)
                        return Math.acos(e)
                })),
                Kn("atan(number)", yi.tnumber, (function (e) {
                    if (null != e && "number" == typeof e)
                        return Math.atan(e)
                })),
                Kn("atan2(number)", yi.tnumber, (function (e) {
                    if (null != e && "number" == typeof e)
                        return NaN
                })),
                Kn("atan2(number,number)", yi.tnumber, (function (e, t) {
                    if (null != e && "number" == typeof e)
                        return Math.atan2(e, t)
                })),
                Kn("degrees(number)", yi.tnumber, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : e / Math.PI * 180
                })),
                Kn("radians(number)", yi.tnumber, (function (e) {
                    return null == e || "number" != typeof e ? void 0 : e / 180 * Math.PI
                })),
                Kn("random()", yi.tnumber, (function () {
                    return Math.random()
                }), !1, !1, !1, !1, !1, !1),
                Kn("pow(number,number)", yi.tnumber, (function (e, t) {
                    if (null != e && "number" == typeof e && null != t && "number" == typeof t)
                        return Math.pow(e, t)
                })),
                Kn("exp(number)", yi.tnumber, (function (e) {
                    if (null != e && "number" == typeof e)
                        return Math.exp(e)
                })),
                Kn("log(number,number)", yi.tnumber, (function (e, t) {
                    if (null != e && "number" == typeof e && null != t && "number" == typeof t)
                        return Math.log(e) / Math.log(t)
                })),
                Kn("log(number)", yi.tnumber, (function (e) {
                    if (null != e && "number" == typeof e)
                        return Math.log(e) / Math.LN10
                })),
                Kn("ln(number)", yi.tnumber, (function (e) {
                    if (null != e && "number" == typeof e)
                        return Math.log(e)
                })),
                Kn("trim(string)", yi.tstring, (function (e) {
                    if (null != e && "string" == typeof e)
                        return e.trim()
                })),
                Kn("split(string,string)", yi.tstring, (function (e, t) {
                    return "string" == typeof e && e.split(t) || void 0
                }), !1, !0),
                Kn("splitx(string,string)", yi.tstring, (function (e, t) {
                    if (t) {
                        var n;
                        try {
                            n = new RegExp(t)
                        } catch (e) {
                            console.log("Invalid regexp in splitx: " + t, e)
                        }
                        if (n)
                            return "string" == typeof e && e.split(n) || void 0
                    }
                }), !1, !0),
                Kn("lower(string)", yi.tstring, (function (e) {
                    if (null != e && "string" == typeof e)
                        return e.toLocaleLowerCase()
                })),
                Kn("upper(string)", yi.tstring, (function (e) {
                    if (null != e && "string" == typeof e)
                        return e.toLocaleUpperCase()
                })),
                Kn("lpad(string,number,string)", yi.tstring, (function (e, t, n) {
                    if (null != e && "string" == typeof e && null != t && "number" == typeof t && !(null == n || "string" != typeof n || n.length < 1)) {
                        var r = e.length,
                            i = n.length,
                            o = t - r;
                        if (o > 0) {
                            for (var a = Math.floor(o / i), s = o % i, l = "", u = 0; u < a; u++)
                                l += n;
                            return (l += n.substr(0, s)) + e
                        }
                        return e
                    }
                })),
                Kn("rpad(string,number,string)", yi.tstring, (function (e, t, n) {
                    if (null != e && "string" == typeof e && null != t && "number" == typeof t && !(null == n || "string" != typeof n || n.length < 1)) {
                        var r = e.length,
                            i = n.length,
                            o = t - r;
                        if (o > 0) {
                            for (var a = Math.floor(o / i), s = o % i, l = n.substr(0, s), u = 0; u < a; u++)
                                l += n;
                            return e + l
                        }
                        return e
                    }
                })),
                Kn("substr(string,number,number)", yi.tstring, (function (e, t, n) {
                    if (null != e && "string" == typeof e && null != t && "number" == typeof t && null != n && "number" == typeof n)
                        return e.substr(t, n)
                })),
                Kn("substr(string,number)", yi.tstring, (function (e, t) {
                    if (null != e && "string" == typeof e && null != t && "number" == typeof t)
                        return e.substr(t)
                })),
                Kn("substring(string,number,number)", yi.tstring, (function (e, t, n) {
                    if (null != e && "string" == typeof e && null != t && "number" == typeof t && null != n && "number" == typeof n)
                        return e.substring(t, n)
                })),
                Kn("slice(string,number,number)", yi.tstring, (function (e, t, n) {
                    if (null != e && "string" == typeof e && null != t && "number" == typeof t && null != n && "number" == typeof n)
                        return e.slice(t, n)
                })),
                Kn("contains(string,string)", yi.tboolean, (function (e, t) {
                    if (null != e && "string" == typeof e && null != t && "string" == typeof t)
                        return -1 !== e.indexOf(t)
                })),
                Kn("index(string,string)", yi.tnumber, (function (e, t) {
                    return null == e || "string" != typeof e || null == t || "string" != typeof t ? -1 : e.indexOf(t)
                })),
                Kn("like(string,string)", yi.tboolean, (function (e, t) {
                    if (null != e && "string" == typeof e && null != t && "string" == typeof t)
                        return A.isLike(e, t)
                })),
                Kn("replace(string,string,string)", yi.tstring, (function (e, t, n) {
                    return null == e ? "" : null == t ? "" + e : (null == n && (n = ""), ("" + e).split(t).join(n))
                })),
                Kn("replacex(string,string,string,string)", yi.tstring, (function (e, t, n, r) {
                    if (null == e)
                        return "";
                    if (null == t)
                        return "" + e;
                    null == n && (n = ""),
                        null == r && (r = "");
                    try {
                        var i = new RegExp(t, n);
                        return e.replace(i, r)
                    } catch (e) {
                        return "#ERR: " + String(e)
                    }
                })),
                Kn("replacex(string,string,string)", yi.tstring, (function (e, t, n) {
                    if (null == e)
                        return "";
                    if (null == t)
                        return "" + e;
                    null == n && (n = "");
                    try {
                        var r = new RegExp(t, "g");
                        return e.replace(r, n)
                    } catch (e) {
                        return "#ERR: " + String(e)
                    }
                })),
                Kn("testx(string,string,string)", yi.tboolean, (function (e, t, n) {
                    if (null == e)
                        return "";
                    if (null == t)
                        return "" + e;
                    null == n && (n = "");
                    try {
                        return new RegExp(t, n).test(e)
                    } catch (e) {
                        return !1
                    }
                })),
                Kn("testx(string,string)", yi.tboolean, (function (e, t) {
                    if (null == e)
                        return "";
                    if (null == t)
                        return "" + e;
                    try {
                        return new RegExp(t).test(e)
                    } catch (e) {
                        return !1
                    }
                })),
                Kn("extractx(string,string,string,string)", yi.tstring, (function (e, t, n, r) {
                    if (null == e)
                        return "";
                    if (null == t)
                        return "" + e;
                    null == n && (n = ""),
                        null == r && (r = "");
                    try {
                        var i = new RegExp(t, n).exec(e);
                        if (i) {
                            for (; ;) {
                                var o = /\$([0-9]*)/.exec(r);
                                if (!o)
                                    break;
                                r = r.substr(0, o.index) + i[parseInt(o[1], 10)] + r.substr(o.index + o[0].length)
                            }
                            return r
                        }
                        return
                    } catch (e) {
                        return "#ERR: " + String(e)
                    }
                })),
                Kn("extractx(string,string,string)", yi.tstring, (function (e, t, n) {
                    if (null == e)
                        return "";
                    if (null == t)
                        return "" + e;
                    null == n && (n = "");
                    try {
                        var r = new RegExp(t).exec(e);
                        if (r) {
                            for (; ;) {
                                var i = /\$([0-9]*)/.exec(n);
                                if (!i)
                                    break;
                                n = n.substr(0, i.index) + r[parseInt(i[1], 10)] + n.substr(i.index + i[0].length)
                            }
                            return n
                        }
                        return
                    } catch (e) {
                        return "#ERR: " + String(e)
                    }
                })),
                Kn("extractx(string,string)", yi.tstring, (function (e, t) {
                    if (null == e)
                        return "";
                    if (null == t)
                        return "" + e;
                    try {
                        var n = new RegExp(t).exec(e);
                        return n ? n[0] : void 0
                    } catch (e) {
                        return "#ERR: " + String(e)
                    }
                })),
                Kn("length(string)", yi.tnumber, (function (e) {
                    return null == e || "string" != typeof e ? 0 : e.length
                })),
                Kn("capitalize(string)", yi.tstring, (function (e) {
                    if (null != e)
                        return e.toLocaleLowerCase().replace(/[\w\u0080-\u218F]+/g, (function (e) {
                            return e[0].toLocaleUpperCase() + e.substr(1)
                        }))
                })),
                Kn("yearmonth(date)", yi.tstring, (function (e) {
                    if (null != e && "number" == typeof e) {
                        var t = new Date(e),
                            n = t.getFullYear(),
                            r = t.getMonth() + 1;
                        return n + "/" + (r < 10 ? "0" : "") + r
                    }
                })),
                Kn("yearmonth(datx)", yi.tstring, (function (e) {
                    if (null != e && "number" == typeof e) {
                        var t = new Date(e),
                            n = t.getUTCFullYear(),
                            r = t.getUTCMonth() + 1;
                        return n + "/" + (r < 10 ? "0" : "") + r
                    }
                })),
                Kn("yearmonth(timestamp)", yi.tstring, (function (e) {
                    if (null != e && "number" == typeof e) {
                        var t = new Date(e),
                            n = t.getFullYear(),
                            r = t.getMonth() + 1;
                        return n + "/" + (r < 10 ? "0" : "") + r
                    }
                })),
                Kn("yearmonth(appointment)", yi.tstring, (function (e) {
                    if (null != e && "string" == typeof e) {
                        var t = parseInt(e, 10),
                            n = new Date(t),
                            r = n.getFullYear(),
                            i = n.getMonth() + 1;
                        return r + "/" + (i < 10 ? "0" : "") + i
                    }
                })),
                Kn("quarter(date)", yi.tnumber, (function (e) {
                    if (null != e && "number" == typeof e) {
                        var t = new Date(e);
                        return Math.floor(t.getMonth() / 3) + 1
                    }
                })),
                Kn("quarter(datx)", yi.tnumber, (function (e) {
                    if (null != e && "number" == typeof e) {
                        var t = new Date(e);
                        return Math.floor(t.getUTCMonth() / 3) + 1
                    }
                })),
                Kn(["yearquater(date)", "yearquarter(date)"], yi.tstring, (function (e) {
                    if (null != e && "number" == typeof e) {
                        var t = new Date(e);
                        return t.getFullYear() + " Q" + (Math.floor(t.getMonth() / 3) + 1)
                    }
                })),
                Kn(["yearquater(datx)", "yearquarter(datx)"], yi.tstring, (function (e) {
                    if (null != e && "number" == typeof e) {
                        var t = new Date(e);
                        return t.getUTCFullYear() + " Q" + (Math.floor(t.getUTCMonth() / 3) + 1)
                    }
                })),
                Kn(["yearquater(timestamp)", "yearquarter(timestamp)"], yi.tstring, (function (e) {
                    if (null != e && "number" == typeof e) {
                        var t = new Date(e);
                        return t.getFullYear() + " Q" + (Math.floor(t.getMonth() / 3) + 1)
                    }
                })),
                Kn(["yearquater(appointment)", "yearquarter(appointment)"], yi.tstring, (function (e) {
                    if (null != e && "string" == typeof e) {
                        var t = parseInt(e, 10),
                            n = new Date(t);
                        return n.getFullYear() + " Q" + (Math.floor(n.getMonth() / 3) + 1)
                    }
                })),
                Kn("yearweek(date)", yi.tstring, (function (e) {
                    if (null != e && "number" == typeof e) {
                        var t = new Date(e),
                            n = A.getWeekYear(t),
                            r = A.getWeek(t);
                        return n + "/" + (r < 10 ? "0" : "") + r
                    }
                })),
                Kn("yearweek(datx)", yi.tstring, (function (e) {
                    if (null != e && "number" == typeof e) {
                        var t = new Date(e),
                            n = A.getUTCWeekYear(t),
                            r = A.getUTCWeek(t);
                        return n + "/" + (r < 10 ? "0" : "") + r
                    }
                })),
                Kn("yearweek(timestamp)", yi.tstring, (function (e) {
                    if (null != e && "number" == typeof e) {
                        var t = new Date(e),
                            n = A.getWeekYear(t),
                            r = A.getWeek(t);
                        return n + "/" + (r < 10 ? "0" : "") + r
                    }
                })),
                Kn("yearweek(appointment)", yi.tstring, (function (e) {
                    if (null != e && "string" == typeof e) {
                        var t = parseInt(e, 10),
                            n = new Date(t),
                            r = A.getWeekYear(n),
                            i = A.getWeek(n);
                        return r + "/" + (i < 10 ? "0" : "") + i
                    }
                })),
                Kn("week(date)", yi.tnumber, (function (e) {
                    if (null != e && "number" == typeof e) {
                        var t = new Date(e);
                        return A.getWeek(t)
                    }
                })),
                Kn("week(datx)", yi.tnumber, (function (e) {
                    if (null != e && "number" == typeof e) {
                        var t = new Date(e);
                        return A.getUTCWeek(t)
                    }
                })),
                Kn("week(timestamp)", yi.tnumber, (function (e) {
                    if (null != e && "number" == typeof e) {
                        var t = new Date(e);
                        return A.getWeek(t)
                    }
                })),
                Kn("week(appointment)", yi.tnumber, (function (e) {
                    if (null != e && "string" == typeof e) {
                        var t = parseInt(e, 10),
                            n = new Date(t);
                        return A.getWeek(n)
                    }
                })),
                Kn("start(appointment)", yi.ttimestamp, (function (e) {
                    if (null != e && "string" == typeof e)
                        return parseInt(e, 10)
                })),
                Kn("endof(appointment)", yi.ttimestamp, (function (e) {
                    if (null != e && "string" == typeof e) {
                        var t = e.split("/");
                        if (2 === t.length)
                            return parseInt(t[0], 10) + parseInt(t[1], 10)
                    }
                })),
                Kn("duration(appointment)", yi.ttimeinterval, (function (e) {
                    if (null != e && "string" == typeof e) {
                        var t = e.split("/");
                        if (2 === t.length)
                            return parseInt(t[1], 10)
                    }
                })),
                Kn("date(number,number,number)", yi.tdate, (function (e, t, n) {
                    var r = new Date(parseInt(e, 10), parseInt(t, 10) - 1, parseInt(n, 10)).getTime();
                    return Number.isNaN(r) ? void 0 : r
                })),
                Kn("date(timestamp)", yi.tdate, (function (e) {
                    if (null != e) {
                        var t = new Date(e);
                        t.setHours(0),
                            t.setMinutes(0),
                            t.setSeconds(0),
                            t.setMilliseconds(0);
                        var n = t.getTime();
                        return Number.isNaN(n) ? void 0 : n
                    }
                })),
                Kn("date(number)", yi.tdate, (function (e) {
                    if (null != e) {
                        var t = new Date(e);
                        t.setHours(0),
                            t.setMinutes(0),
                            t.setSeconds(0),
                            t.setMilliseconds(0);
                        var n = t.getTime();
                        return Number.isNaN(n) ? void 0 : n
                    }
                })),
                Kn("time(timestamp)", yi.ttime, (function (e) {
                    if (null != e) {
                        var t = new Date(e),
                            n = 36e5 * t.getHours() + 6e4 * t.getMinutes() + 1e3 * t.getSeconds() + t.getMilliseconds();
                        return Number.isNaN(n) ? void 0 : n
                    }
                })),
                Kn("time()", yi.ttime, (function (e) {
                    var t = new Date;
                    return 36e5 * t.getHours() + 6e4 * t.getMinutes() + 1e3 * t.getSeconds() + t.getMilliseconds()
                })),
                Kn("time(number)", yi.ttime, (function (e) {
                    return e
                })),
                Kn("time(number,number,number,number)", yi.ttime, (function (e, t, n, r) {
                    var i = 36e5 * (null != e ? e : 0) + 6e4 * (null != t ? t : 0) + 1e3 * (null != n ? n : 0) + (null != r ? r : 0);
                    return Number.isNaN(i) ? void 0 : i
                })),
                Kn("time(number,number,number)", yi.ttime, (function (e, t, n) {
                    var r = 36e5 * (null != e ? e : 0) + 6e4 * (null != t ? t : 0) + 1e3 * (null != n ? n : 0);
                    return Number.isNaN(r) ? void 0 : r
                })),
                Kn("time(number,number)", yi.ttime, (function (e, t) {
                    var n = 36e5 * (null != e ? e : 0) + 6e4 * (null != t ? t : 0);
                    return Number.isNaN(n) ? void 0 : n
                })),
                Kn("datetime(number,number,number,number,number,number,number)", yi.ttimestamp, (function (e, t, n, r, i, o, a) {
                    return A.makeTimestamp(e, t, n, r, i, o, a)
                })),
                Kn("datetime(number,number,number,number,number,number)", yi.ttimestamp, (function (e, t, n, r, i, o) {
                    return A.makeTimestamp(e, t, n, r, i, o)
                })),
                Kn("datetime(number,number,number,number,number)", yi.ttimestamp, (function (e, t, n, r, i) {
                    return A.makeTimestamp(e, t, n, r, i)
                })),
                Kn("datetime(number,number,number,number)", yi.ttimestamp, (function (e, t, n, r) {
                    return A.makeTimestamp(e, t, n, r)
                })),
                Kn("datetime(number,number,number)", yi.ttimestamp, (function (e, t, n) {
                    return A.makeTimestamp(e, t, n)
                })),
                Kn("datetime(number)", yi.ttimestamp, (function (e) {
                    return e
                })),
                Kn("datetime(date)", yi.ttimestamp, (function (e) {
                    return e
                })),
                Kn("datetime(datx)", yi.ttimestamp, (function (e) {
                    return e
                })),
                Kn("datetime(date,time)", yi.ttimestamp, (function (e, t) {
                    return (null != e ? e : 0) + (null != t ? t : 0)
                })),
                Kn("datetime(datx,time)", yi.ttimestamp, (function (e, t) {
                    return (null != e ? e : 0) + (null != t ? t : 0)
                })),
                Kn("timeinterval(number)", yi.ttimeinterval, (function (e) {
                    return e
                })),
                Kn("timeinterval(time)", yi.ttimeinterval, (function (e) {
                    return e
                })),
                Kn("days(date,date)", yi.tnumber, (function (e, t) {
                    if (null != e && "number" == typeof e && null != t && "number" == typeof t)
                        return Math.round((t - e) / 864e5)
                })),
                Kn("days(datx,datx)", yi.tnumber, (function (e, t) {
                    if (null != e && "number" == typeof e && null != t && "number" == typeof t)
                        return Math.round((t - e) / 864e5)
                })),
                Kn("workdays(date,date)", yi.tnumber, (function (e, t) {
                    if (null != e && "number" == typeof e && null != t && "number" == typeof t) {
                        if (e > t) {
                            var n = e;
                            e = t,
                                t = n
                        }
                        var r = new Date(e),
                            i = new Date(t),
                            o = 1 + Math.round((i.getTime() - r.getTime()) / 864e5);
                        return o - 2 * Math.floor((o + r.getDay()) / 7) + (6 === i.getDay() ? 1 : 0) - (0 === r.getDay() ? 1 : 0)
                    }
                })),
                Kn("workdays(datx,datx)", yi.tnumber, (function (e, t) {
                    if (null != e && "number" == typeof e && null != t && "number" == typeof t) {
                        if (e > t) {
                            var n = e;
                            e = t,
                                t = n
                        }
                        var r = new Date(e),
                            i = new Date(t),
                            o = 1 + Math.round((i.getTime() - r.getTime()) / 864e5);
                        return o - 2 * Math.floor((o + r.getUTCDay()) / 7) + (6 === i.getUTCDay() ? 1 : 0) - (0 === r.getUTCDay() ? 1 : 0)
                    }
                })),
                Kn("latitude(location)", yi.tnumber, (function (e) {
                    var t = A.RE_LOCATION.exec(e);
                    if (t)
                        return Number(t[2])
                })),
                Kn("longitude(location)", yi.tnumber, (function (e) {
                    var t = A.RE_LOCATION.exec(e);
                    if (t)
                        return Number(t[3])
                })),
                Kn("location(string,number,number)", yi.tlocation, (function (e, t, n) {
                    return A.formatLocation({
                        title: e,
                        latitude: t,
                        longitude: n
                    })
                })),
                Kn("isDatabaseProtected()", yi.tboolean, (function (e) {
                    return e.schema.isProtected
                }), !1, !1, !1, !0, !1, !1),
                Kn("isDatabaseLocked()", yi.tboolean, (function (e) {
                    return e.schema.isProtected && !e.schemaUnlocked
                }), !1, !1, !1, !0, !1, !1),
                Kn("isAdminMode()", yi.tboolean, (function (e) {
                    return e.adminMode
                }), !1, !1, !1, !0, !1, !1),
                Kn("userIsAdmin()", yi.tboolean, (function (e) {
                    return !!e.user.roles.admin
                }), !1, !1, !1, !0, !1, !1),
                Kn("user()", yi.tuser, (function (e) {
                    return e.user.id
                }), !1, !1, !1, !0, !1, !1),
                Kn("user(string)", yi.tuser, (function (e, t) {
                    var n = t.users;
                    for (var r in n)
                        if (n.hasOwnProperty(r)) {
                            var i = n[r];
                            if (i.name === e)
                                return i.id
                        }
                }), !1, !1, !1, !0, !1, !1),
                Kn("userId()", yi.tstring, (function (e) {
                    return e.user.id
                }), !1, !1, !1, !0, !1, !1),
                Kn("userId(user)", yi.tstring, (function (e, t) {
                    var n = t.users[e];
                    return n ? n.id : void 0
                }), !1, !1, !1, !0, !1, !1),
                Kn("userName(user)", yi.tstring, (function (e, t) {
                    var n = t.users[e];
                    if (n)
                        return n.name || n.profile && n.profile.displayName || n.email
                }), !1, !1, !1, !0, !1, !1),
                Kn("userName()", yi.tstring, (function (e) {
                    var t = e.user;
                    return t.name || t.profile && t.profile.displayName || t.email
                }), !1, !1, !1, !0, !1, !1),
                Kn("userFirstName(user)", yi.tstring, (function (e, t) {
                    var n = t.users[e];
                    return n ? n.profile ? n.profile.firstName : n.firstName : void 0
                }), !1, !1, !1, !0, !1, !1),
                Kn("userFirstName()", yi.tstring, (function (e) {
                    var t = e.user;
                    return t ? t.profile ? t.profile.firstName : t.firstName : void 0
                }), !1, !1, !1, !0, !1, !1),
                Kn("userLastName(user)", yi.tstring, (function (e, t) {
                    var n = t.users[e];
                    return n ? n.profile ? n.profile.lastName : n.lastName : void 0
                }), !1, !1, !1, !0, !1, !1),
                Kn("userLastName()", yi.tstring, (function (e) {
                    var t = e.user;
                    return t ? t.profile ? t.profile.lastName : t.lastName : void 0
                }), !1, !1, !1, !0, !1, !1),
                Kn("userFullName(user)", yi.tstring, (function (e, t) {
                    var n = t.users[e];
                    if (n) {
                        var r = [],
                            i = n.profile ? n.profile.firstName : n.firstName,
                            o = n.profile ? n.profile.lastName : n.lastName;
                        return i && r.push(i), o && r.push(o), r.length || r.push(n.name), r.join(" ")
                    }
                }), !1, !1, !1, !0, !1, !1),
                Kn("userFullName()", yi.tstring, (function (e) {
                    var t = e.user,
                        n = [],
                        r = t.profile ? t.profile.firstName : t.firstName,
                        i = t.profile ? t.profile.lastName : t.lastName;
                    return r && n.push(r), i && n.push(i), n.length || n.push(t.name), n.join(" ")
                }), !1, !1, !1, !0, !1, !1),
                Kn("userEmail(user)", yi.tstring, (function (e, t) {
                    var n = t.users[e];
                    return n ? n.email : void 0
                }), !1, !1, !1, !0, !1, !1),
                Kn("userEmail()", yi.tstring, (function (e) {
                    return e.user.email
                }), !1, !1, !1, !0, !1, !1),
                Kn("userHasRole(string)", yi.tboolean, (function (e, t) {
                    return !!(t.user && t.user.roles && t.user.roles[e])
                }), !1, !1, !1, !0, !1, !1),
                Kn("userHasRole(user,string)", yi.tboolean, (function (e, t, n) {
                    var r = n.users[e];
                    return !!r && !!r.roles[t]
                }), !1, !1, !1, !0, !1, !1),
                Kn("userRole()", yi.tstring, (function (e) {
                    return e.user && e.user.roles && Object.keys(e.user.roles)[0]
                }), !1, !1, !1, !0, !1, !1),
                Kn("userRoles()", yi.tstring, (function (e) {
                    return e.user && e.user.roles && Object.keys(e.user.roles) || []
                }), !1, !0, !1, !0, !1, !1),
                Kn("userRole(user)", yi.tstring, (function (e, t) {
                    var n = t.users[e];
                    return n && n.roles && Object.keys(n.roles)[0]
                }), !1, !1, !1, !0, !1, !1),
                Kn("userRoles(user)", yi.tstring, (function (e, t) {
                    var n = t.users[e];
                    return n && n.roles && Object.keys(n.roles) || []
                }), !1, !0, !1, !0, !1, !1),
                Kn("users()", yi.tuser, (function (e) {
                    return oo.map(e.users, (function (e) {
                        return e.id
                    }))
                }), !1, !1, !1, !0, !1, !1),
                Kn("userLang()", yi.tstring, (function (e) {
                    return e.user && e.user.profile && e.user.profile.locale
                }), !1, !1, !1, !0, !1, !1),
                Kn("userLang(user)", yi.tstring, (function (e, t) {
                    var n = t.users[e];
                    return n && n.profile && n.profile.locale
                }), !1, !1, !1, !0, !1, !1),
                Kn("color(string)", yi.tcolor, (function (e) {
                    var t = A.parseColor(e);
                    return t ? A.formatColor(t) : void 0
                })),
                Kn("color(number,number,number)", yi.tcolor, (function (e, t, n) {
                    return e >= 0 ? e <= 255 || (e = 255) : e = 0, t >= 0 ? t <= 255 || (t = 255) : t = 0, n >= 0 ? n <= 255 || (n = 255) : n = 0, A.formatColor([Math.floor(e), Math.floor(t), Math.floor(n)])
                })),
                Kn("color(number,number,number,number)", yi.tcolor, (function (e, t, n, r) {
                    return e >= 0 ? e <= 255 || (e = 255) : e = 0, t >= 0 ? t <= 255 || (t = 255) : t = 0, n >= 0 ? n <= 255 || (n = 255) : n = 0, r >= 0 ? r <= 1 || (r = 1) : r = 0, A.formatColor([Math.floor(e), Math.floor(t), Math.floor(n), r])
                })),
                Kn("color(choice)", yi.tcolor, (function (e, t) {
                    var n = t.getValues()[e];
                    return n && n.color || void 0
                }), !0),
                Kn("number(number)", yi.tnumber, (function (e) {
                    return e || 0
                })),
                Kn("number(string)", yi.tnumber, (function (e) {
                    return Number(e) || 0
                })),
                Kn("number(boolean)", yi.tnumber, (function (e) {
                    return e ? 1 : 0
                })),
                Kn("number(choice)", yi.tnumber, (function (e) {
                    return Number(e) || 0
                })),
                Kn("number(date)", yi.tnumber, (function (e) {
                    return e || 0
                })),
                Kn("number(datx)", yi.tnumber, (function (e) {
                    return e || 0
                })),
                Kn("number(time)", yi.tnumber, (function (e) {
                    return e || 0
                })),
                Kn("number(timestamp)", yi.tnumber, (function (e) {
                    return e || 0
                })),
                Kn("number(timeinterval)", yi.tnumber, (function (e) {
                    return e || 0
                })),
                Kn("number(appointment)", yi.tnumber, (function (e) {
                    return e ? parseInt(e, 10) : void 0
                })),
                Kn("number(node)", yi.tnumber, (function (e) {
                    return e ? yi.ridOf(e._id) : void 0
                })),
                Kn("number(nid)", yi.tnumber, (function (e) {
                    return e ? yi.ridOf(e) : void 0
                })),
                Kn("number(rid)", yi.tnumber, (function (e) {
                    return e
                })),
                Kn(["numbers(multi)", "numbers(dmulti)"], yi.tnumber, (function (e) {
                    return A.multiDecode(e)
                }), !1, !0),
                Kn("debugValueInfo(any)", yi.tstring, (function (e, t) {
                    return (t ? t.base : "undefined") + "(" + JSON.stringify(e) + ")"
                }), !0),
                Kn("printTable(string,string)", yi.tvoid, (function (t, n, r, i, o) {
                    if ("undefined" != typeof window) {
                        var a = o.schema.findType(t);
                        if (!a)
                            return window.$.alert("Table not found: " + t);
                        var s,
                            l = o.views;
                        for (var u in l)
                            if (l.hasOwnProperty(u)) {
                                var d = l[u];
                                if (d.type === a.id && d.caption === n) {
                                    s = d;
                                    break
                                }
                            }
                        if (!s)
                            return e.alert("View not found: " + n);
                        var c = new to(o, s.config, !1);
                        c.load((function (t) {
                            if (t)
                                return e.alert(t);
                            e.printTable(c)
                        }))
                    }
                }), !0, !1, !1, !0, !1, !1),
                Kn("printRecord(nid,string)", yi.tvoid, (function (t, n, r) {
                    t && e.openDesigner({
                        nid: t,
                        reportName: n,
                        printOneAndClose: !0
                    })
                }), !0, !1, !1, !1, !1, !1),
                Kn("printAndSaveRecord(nid,string)", yi.tlink, (function (t, n, r) {
                    t && e.openDesigner({
                        nid: t,
                        reportName: n,
                        saveToFileAndClose: function (e, t) {
                            e && console.log("printAndSaveRecord failed", e),
                                r(t)
                        }
                    })
                }), !1, !1, !1, !1, !0, !1),
                Kn("createTextFile(nid,string,string)", yi.tfile, (function (e, t, n, r, i) {
                    if ("undefined" == typeof window)
                        return i();
                    if (!e)
                        return i();
                    if (!t)
                        return i();
                    if (null != n && !A.isValidFileName(n))
                        return i();
                    if (!r.importFileFromURL)
                        return i();
                    var o = new Blob([t], {
                        type: "text/plain"
                    }),
                        a = new FileReader;
                    a.onload = function (t) {
                        t && t.target && t.target.result ? r.importFileFromURL(e, t.target.result, n, (function (t) {
                            t && console.warn(t),
                                i(e + "/" + n)
                        })) : i()
                    },
                        a.readAsDataURL(o)
                }), !1, !1, !0, !0, !0, !1),
                Kn("importFile(nid,link,string)", yi.tfile, (function (e, t, n, r, i) {
                    return e && t && (null == n || A.isValidFileName(n)) && r.importFileFromURL ? void r.importFileFromURL(e, t, n, (function (t) {
                        t && console.warn(t),
                            i(e + "/" + n)
                    })) : i()
                }), !1, !1, !0, !0, !0, !1),
                Kn("importFile(nid,link)", yi.tfile, (function (e, t, n, r) {
                    if (!e)
                        return r();
                    if (!t)
                        return r();
                    var i = A.fileNameOfURL(t);
                    return (null == i || A.isValidFileName(i)) && n.importFileFromURL ? void n.importFileFromURL(e, t, i, (function (t) {
                        t && console.warn(t),
                            r(e + "/" + i)
                    })) : r()
                }), !1, !1, !0, !0, !0, !1),
                Kn("openPrintLayout(nid,string)", yi.tvoid, (function (t, n) {
                    t && e.openDesigner({
                        nid: t,
                        reportName: n
                    })
                }), !1, !1, !1, !1, !1, !1),
                Kn("openRecord(nid)", yi.tvoid, (function (t) {
                    t && e.openRecord(t)
                }), !1, !1, !1, !1, !1, !1),
                Kn("openRecord(nid,string)", yi.tvoid, (function (t, n) {
                    t && e.openRecord(t, n)
                }), !1, !1, !1, !1, !1, !1),
                Kn("popupRecord(nid)", yi.tvoid, (function (t) {
                    t && e.popupRecord(t)
                }), !1, !1, !1, !1, !1, !1),
                Kn("popupRecord(nid,string)", yi.tvoid, (function (t, n) {
                    t && e.popupRecord(t, n)
                }), !1, !1, !1, !1, !1, !1),
                Kn("openFullscreen(nid)", yi.tvoid, (function (t) {
                    t && e.openFullScreen(t, {})
                }), !1, !1, !1, !1, !1, !1),
                Kn("openFullscreen(nid,string)", yi.tvoid, (function (t, n) {
                    t && e.openFullScreen(t, {}, n)
                }), !1, !1, !1, !1, !1, !1),
                Kn("openFullscreen(nid,any)", yi.tvoid, (function (t, n) {
                    t && e.openFullScreen(t, n || {})
                }), !1, !1, !1, !1, !1, !1),
                Kn("closeFullscreen()", yi.tvoid, (function () {
                    e.closeFullScreen()
                }), !1, !1, !1, !1, !1, !1),
                Kn("openTable(string)", yi.tvoid, (function (t, n) {
                    if (t) {
                        var r = n.schema.findType(t);
                        r && e.openTable(r.id)
                    }
                }), !1, !1, !1, !0, !1, !1),
                Kn("openTable(string,string)", yi.tvoid, (function (t, n, r) {
                    if (t) {
                        var i = r.schema.findType(t);
                        if (i) {
                            var o,
                                a = r.views;
                            for (var s in a)
                                if (a.hasOwnProperty(s)) {
                                    var l = a[s];
                                    l.type === i.id && l.caption.toLowerCase() === n.toLowerCase() && (o = l.id)
                                }
                            e.openTable(i.id, o, void 0)
                        }
                    }
                }), !1, !1, !1, !0, !1, !1),
                Kn("urlOf(nid)", yi.tlink, (function (t, n) {
                    if (t && "string" == typeof t) {
                        var r = A.parseNID(t);
                        return e.getAppURL() + "/#/teams/" + n.account.id + "/database/" + n.id + "/module/" + r[0] + "/view/default/node/" + t
                    }
                }), !1, !1, !1, !0, !1, !1),
                Kn("urlOf(nid,string,string)", yi.tlink, (function (t, n, r, i, o) {
                    var a = e.getAppURL(),
                        s = A.parseNID(t),
                        l = s[0],
                        u = (s[1], "default");
                    if (r) {
                        if ("comments" === r || "files" === r || "history" === r)
                            u = r;
                        else
                            for (var d in i.schema.types[l].uis) {
                                var c = i.schema.types[l].uis[d];
                                if ("tab" === c.base && c.caption.toLowerCase() === r.toLowerCase()) {
                                    u = d;
                                    break
                                }
                            }
                        var p = a + "/#/teams/" + i.account.id + "/database/" + i.id + "/module/" + l + "/view/default/node/" + t + "/tab/" + u;
                        if (!n)
                            return o(p);
                        console.log("Trying to load views"),
                            i.loadViews((function (e, r) {
                                if (console.log("Loaded views", r), e)
                                    return o(p);
                                for (var s = 0, d = r; s < d.length; s++) {
                                    var c = d[s];
                                    if (console.log(c.type, l, c.caption, n), c.type === l && c.caption.toLowerCase() === n.toLowerCase())
                                        return console.log("Expecting to return: ", a + "/#/teams/" + i.account.id + "/database/" + i.id + "/module/" + l + "/view/" + c.id + "/node/" + t + "/tab/" + u), o(a + "/#/teams/" + i.account.id + "/database/" + i.id + "/module/" + l + "/view/" + c.id + "/node/" + t + "/tab/" + u)
                                }
                                return o(p)
                            }))
                    }
                }), !1, !1, !1, !0, !0, !1),
                Kn("urlOf(string,string)", yi.tlink, (function (t, n, r, i) {
                    if (!t || "string" != typeof t)
                        return i();
                    var o = e.getAppURL(),
                        a = r.schema.findType(t);
                    if (!a)
                        return i(void 0);
                    var s = o + "/#/teams/" + r.account.id + "/database/" + r.id + "/module/" + a.id + "/view/default/";
                    if (!n)
                        return i(s);
                    r.loadViews((function (e, t) {
                        if (e)
                            return i(s);
                        for (var l = 0, u = t; l < u.length; l++) {
                            var d = u[l];
                            if (d.type === a.id && d.caption === n)
                                return i(o + "/#/teams/" + r.account.id + "/database/" + r.id + "/module/" + a.id + "/view/" + d.id)
                        }
                        return i(s)
                    }))
                }), !1, !1, !1, !0, !0, !1),
                Kn(["openURL(string)", "openURL(link)"], yi.tvoid, (function (t) {
                    t && e.previewDocument(t, (function () { }))
                }), !1, !1, !1, !1, !1, !1),
                Kn("closeRecord()", yi.tvoid, (function () {
                    e.closeRecord()
                }), !1, !1, !1, !1, !1, !1),
                Kn("closeAllRecords()", yi.tvoid, (function () {
                    e.closeAllRecords()
                }), !1, !1, !1, !1, !1, !1),
                Kn("html(string)", yi.thtml, (function (e) {
                    return e ? String(e) : ""
                })),
                Kn("html(any)", yi.thtml, (function (e, t) {
                    return t.formatHTML ? t.formatHTML(e) : e ? String(e) : ""
                }), !0),
                Kn("icon(string)", yi.ticon, (function (e) {
                    return e
                })),
                Kn("icon(choice)", yi.ticon, (function (e, t) {
                    var n = t.getValues()[e];
                    if (n)
                        return n.icon
                }), !0),
                Kn("chosen(multi,string)", yi.tboolean, (function (e, t, n, r) {
                    if (!e)
                        return !1;
                    var i = A.multiDecode(e);
                    if (!i)
                        return !1;
                    for (var o = n.getValues(), a = 0; a < i.length; a++) {
                        var s = o[i[a]];
                        if (s && s.caption === t)
                            return !0
                    }
                    return !1
                }), !0),
                Kn(["chosen(multi,number)", "chosen(dmulti,number)"], yi.tboolean, (function (e, t, n, r) {
                    return null != t && A.multiHasAll(e, [t])
                }), !0),
                Kn(["chosen(multi,[number])", "chosen(dmulti,[number])"], yi.tboolean, (function (e, t, n, r) {
                    return A.multiHasAll(e, t)
                }), !0),
                Kn("chosen(multi)", yi.tstring, (function (e, t) {
                    if (!e)
                        return [];
                    var n = A.multiDecode(e);
                    if (!n)
                        return [];
                    for (var r = t.getValues(), i = [], o = 0; o < n.length; o++) {
                        var a = r[n[o]];
                        a && i.push(a.caption)
                    }
                    return i
                }), !0, !0),
                Kn("alert(string)", yi.tvoid, (function (t) {
                    "undefined" != typeof window && e.alert(t)
                }), !1, !1, !1, !1, !1, !1),
                Kn("alert(any)", yi.tvoid, (function (t, n) {
                    "undefined" != typeof window && e.alert(n.format(t))
                }), !0, !1, !1, !1, !1, !1),
                Kn("dialog(string,string,[string])", yi.tstring, (function (t, n, r, i) {
                    if (null === e.dialog)
                        return i(void 0);
                    var o = [];
                    if (r)
                        for (var a = function (e) {
                            o.push({
                                caption: r[e] || "#" + (e + 1),
                                callback: function () {
                                    i(r[e])
                                }
                            })
                        }, s = 0; s < r.length && s < 20; s++)
                            a(s);
                    o.length || o.push({
                        caption: g().okay,
                        callback: function () {
                            i(void 0)
                        }
                    }),
                        e.dialog(t, n, o, 11)
                }), !1, !1, !1, !1, !0, !1),
                Kn("barcodeScan()", yi.tstring, (function (t) {
                    if ("undefined" == typeof window)
                        return t();
                    e.barcodeScan((function (e, n) {
                        t(n)
                    }))
                }), !1, !1, !1, !1, !0, !1),
                Kn("join([string],string)", yi.tstring, (function (e, t) {
                    return e && e.join && e.join(t) || ""
                })),
                Kn("range(number)", yi.tnumber, (function (e) {
                    for (var t = [], n = 0; n < e; n++)
                        t.push(n);
                    return t
                }), !1, !0),
                Kn("range(number,number)", yi.tnumber, (function (e, t) {
                    var n,
                        r = [];
                    if (e <= t)
                        for (n = e; n < t; n++)
                            r.push(n);
                    else
                        for (n = e; n > t; n--)
                            r.push(n);
                    return r
                }), !1, !0),
                Kn("range(number,number,number)", yi.tnumber, (function (e, t, n) {
                    var r,
                        i = [];
                    if (n > 0)
                        if (e <= t)
                            for (r = e; r < t; r += n)
                                i.push(r);
                        else
                            for (r = e; r > t; r -= n)
                                i.push(r);
                    else if (n < 0)
                        if (e <= t)
                            for (r = e; r < t; r -= n)
                                i.push(r);
                        else
                            for (r = e; r > t; r += n)
                                i.push(r);
                    return i
                }), !1, !0),
                Kn("slice([any],number,number)", 0, (function (e, t, n) {
                    return e && "function" == typeof e.slice ? e.slice(null == t ? void 0 : parseInt(t, 10), null == n ? void 0 : parseInt(n, 10)) : []
                }), !0, !0),
                Kn("item(any,number)", 0, (function (e, t) {
                    return null == e ? void 0 : e[null == t ? 0 : parseInt(t, 10)]
                }), !0, !1),
                Kn("item(any,string)", 0, (function (e, t) {
                    return null == e ? void 0 : e[t]
                }), !0, !1),
                Kn("item([any],number)", 0, (function (e, t) {
                    return null == e ? void 0 : e[null == t ? 0 : parseInt(t, 10)]
                }), !0, !1),
                Kn("text(any)", yi.tstring, (function (e, t) {
                    return t.format(e)
                }), !0),
                Kn("raw(any)", yi.tstring, (function (e) {
                    return null == e ? "" : String(e)
                })),
                Kn("string(any)", yi.tstring, t),
                Kn("email(any)", yi.temail, t),
                Kn("phone(any)", yi.tphone, t),
                Kn("url(any)", yi.tlink, t),
                Kn("number(any)", yi.tnumber, (function (e) {
                    if (null == e)
                        return;
                    var t = Number(e);
                    return Number.isNaN(t) ? void 0 : t
                })),
                Kn("date(any)", yi.tdate, n),
                Kn("time(any)", yi.ttime, n),
                Kn("timestamp(any)", yi.ttimestamp, n),
                Kn("timeinterval(any)", yi.ttimeinterval, n),
                Kn("debug(string)", yi.tvoid, (function (e) {
                    console.log("NXDEBUG: " + e)
                }), !1, !1, !1, !1, !1, !1),
                Kn("appointment(timestamp,timestamp)", yi.tappointment, (function (e, t) {
                    if (e && t) {
                        if (t < e) {
                            var n = t;
                            t = e,
                                e = n
                        }
                        return e + "/" + (t - e)
                    }
                })),
                Kn(["appointment(timestamp,timeinterval)", "appointment(timestamp,time)", "appointment(timestamp,number)", "appointment(number,number)"], yi.tappointment, (function (e, t) {
                    if (e && t)
                        return t < 0 && (e -= t, t = -t), e + "/" + t
                })),
                Kn("createCalendarEvent(string,string,timestamp,timestamp)", yi.tvoid, (function (e, t, n, i) {
                    "undefined" != typeof window && r(e, t, n, i)
                }), !1, !1, !1, !1, !1, !1),
                Kn("createCalendarEvent(string,timestamp,timestamp)", yi.tvoid, (function (e, t, n) {
                    "undefined" != typeof window && r("", e, t, n)
                }), !1, !1, !1, !1, !1, !1),
                Kn("createCalendarEvent(string,string,appointment)", yi.tvoid, (function (e, t, n) {
                    if ("undefined" != typeof window) {
                        var i = /^(\-?[0-9]+)\/([0-9]+)$/.exec(n);
                        if (i) {
                            var o = parseInt(i[1], 10);
                            r(e, t, o, o + parseInt(i[2], 10))
                        }
                    }
                }), !1, !1, !1, !1, !1, !1),
                Kn("createCalendarEvent(string,appointment)", yi.tvoid, (function (e, t) {
                    if ("undefined" != typeof window) {
                        var n = /^(\-?[0-9]+)\/([0-9]+)$/.exec(t);
                        if (n) {
                            var i = parseInt(n[1], 10);
                            r("", e, i, i + parseInt(n[2], 10))
                        }
                    }
                }), !1, !1, !1, !1, !1, !1),
                Kn("createCalendarReminder(string,string,timestamp,timestamp)", yi.tvoid, (function (e, t, n, r) {
                    "undefined" != typeof window && a(e, t, n, r)
                }), !1, !1, !1, !1, !1, !1),
                Kn("createCalendarReminder(string,timestamp,timestamp)", yi.tvoid, (function (e, t, n) {
                    "undefined" != typeof window && a("", e, t, n)
                }), !1, !1, !1, !1, !1, !1),
                Kn("createCalendarReminder(string,timestamp)", yi.tvoid, (function (e, t) {
                    "undefined" != typeof window && a("", e, null, t)
                }), !1, !1, !1, !1, !1, !1),
                Kn("createCalendarReminder(string)", yi.tvoid, (function (e) {
                    "undefined" != typeof window && a("", e, null, null)
                }), !1, !1, !1, !1, !1, !1),
                Kn("styled(string,color)", yi.tstyled, (function (e, t) {
                    return {
                        text: e || "",
                        color: A.contrastingTextColorTo(t),
                        background: t
                    }
                })),
                Kn("styled(string,any)", yi.tstyled, (function (e, t) {
                    return null != t && "object" == typeof t || (t = {}), {
                        text: e || "",
                        color: t.color,
                        background: t.background,
                        icon: t.icon
                    }
                })),
                Kn("styled(string,color,icon)", yi.tstyled, (function (e, t, n) {
                    return {
                        text: e || "",
                        color: A.contrastingTextColorTo(t),
                        background: t,
                        icon: n
                    }
                })),
                Kn("styled(string,color,color,icon)", yi.tstyled, (function (e, t, n, r) {
                    return {
                        text: e || "",
                        color: n,
                        background: t,
                        icon: r
                    }
                }));
            var i = 1;
            function o(t, n, r, o, a) {
                var s = Date.now(),
                    l = i;
                i++,
                    console.log("HTTP Request #" + l, t, n, r, o),
                    e.loading(!0);
                var u = {
                    body: o || void 0,
                    method: t,
                    url: n,
                    headers: r
                };
                e.httpProvider(u, (function (t, n, r) {
                    e.loading(!1);
                    var i = Date.now();
                    t ? (console.log("HTTP Response #" + l, i - s + "ms", "ERR", n && n.statusCode, t, r), a({
                        error: t
                    })) : (console.log("HTTP Response #" + l, i - s + "ms", "OK", n && n.statusCode, r), a({
                        result: r
                    }))
                }))
            }
            function a(t, n, r, i) {
                e.addCalendarReminder(t, r ? new Date(r) : null, i ? new Date(i) : null, n || g().unnamed, (function (t) {
                    t && e.alert(t)
                }))
            }
            Kn("http(string,string,any,any)", yi.tany, (function (e, t, n, r, i) {
                o(e, t, n, r, i)
            }), !1, !1, !1, !1, !0, !1),
                Kn("http(string,string,any)", yi.tany, (function (e, t, n, r) {
                    o(e, t, void 0, n, r)
                }), !1, !1, !1, !1, !0, !1),
                Kn("http(string,string)", yi.tany, (function (e, t, n) {
                    o(e, t, void 0, void 0, n)
                }), !1, !1, !1, !1, !0, !1),
                Kn("sendEmail(any)", yi.tany, (function (t, n, r) {
                    if (!t || "object" != typeof t)
                        return r();
                    e.sendEmail(t, (function (t) {
                        t && e.alert(t),
                            r(t ? String(t) : void 0)
                    }))
                }), !1, !1, !1, !0, !0, !1),
                Kn("file(nid,string)", yi.tfile, (function (e, t) {
                    if (e && "string" == typeof e && t && "string" == typeof t && A.isValidFileName(t))
                        return e + "/" + t
                })),
                Kn("files(nid)", yi.tfile, (function (e, t, n) {
                    e && t.loadFiles(e, (function (t, r) {
                        t && console.warn(t);
                        var i = [];
                        if (r)
                            for (var o = 0; o < r.length; o++)
                                i.push(e + "/" + r[o].name);
                        n(i)
                    }))
                }), !1, !0, !1, !0, !0, !1),
                Kn("parseXML(string)", yi.tany, (function (t) {
                    return A.xml2json(e.parseXML(t))
                })),
                Kn("formatXML(any)", yi.tstring, (function (e) {
                    return A.json2xml(e, !1)
                })),
                Kn("formatXML(any,boolean)", yi.tstring, (function (e, t) {
                    return A.json2xml(e, !!t)
                })),
                Kn("getVault(string)", yi.tstring, (function (t) {
                    var n = e.vault,
                        r = n && n.get(t);
                    return null != r ? String(r) : void 0
                })),
                Kn("sleep(number)", yi.tvoid, (function (e, t) {
                    setTimeout(t, e)
                }), !1, !1, !1, !1, !0, !1),
                Kn("parseJSON(string)", yi.tany, (function (e) {
                    return A.parseJSON(e)
                })),
                Kn("formatJSON(any)", yi.tstring, (function (e) {
                    return JSON.stringify(e) || ""
                })),
                Kn(["array([any],[any])"], 0, (function (e, t, n, r) {
                    return Tn(n.base, r.base) ? (null != e ? e : []).concat(null != t ? t : []) : []
                }), !0, !0),
                Kn("teamId()", yi.tstring, (function (e) {
                    return e.account && e.account.id || void 0
                }), !1, !1, !1, !0, !1, !1),
                Kn("databaseId()", yi.tstring, (function (e) {
                    return e.id || void 0
                }), !1, !1, !1, !0, !1, !1),
                Kn("tableId(nid)", yi.tstring, (function (e) {
                    return yi.tidOf(e)
                })),
                Kn("tableId(string)", yi.tstring, (function (e, t) {
                    var n = t.schema.findType(e);
                    return n && n.id || void 0
                }), !1, !1, !1, !0, !1, !1),
                Kn("clientLang()", yi.tstring, (function () {
                    if ("undefined" != typeof window)
                        return window.LOCALE
                })),
                Kn("share()", yi.tstring, (function () {
                    console.log("YET TO BE IMPLEMENTED")
                })),
                Kn("eval(string,nid)", yi.tany, (function (e, t, n, r) {
                    var i = n.schema.typeOf(t);
                    if (!i)
                        return r('Table not found for record: "' + t + '"');
                    var o = io.parseHuman(n.schema, i, e);
                    return o.hasErrors() ? r("Failed to parse expression: " + o.errorMessage()) : o.isUpdating() ? r("Updates not allowed in eval() calls.") : void n.loadNode(t, (function (e, i) {
                        return e ? r("Failed to load record: " + e) : i ? void o.evaluate(n, i, (function (e, t) {
                            if (e)
                                return r("Failed to evaluate expression: " + e);
                            r(t)
                        })) : r("Record not found: " + t)
                    }))
                }), !1, !1, !1, !0, !0, !1),
                Kn("invalidate()", yi.tvoid, (function (e) {
                    e._cachedValues = {}
                }), !1, !1, !1, !0, !1, !1)
        }(e)
    }