webpackJsonp([10], [function (e, t, r) {
  e.exports = r(5)(11)
}, function (e, t, r) {
  e.exports = r(84)()
}, function (e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function (e, t, r) {
    return r ? [e, t] : e
  }, e.exports = t.default
}, function (e, t, r) {
  e.exports = r(5)(9)
}, function (e, t, r) {
  "use strict";
  var o = this && this.__extends || function (e, t) {
      function r() {
        this.constructor = e
      }
      for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    },
    n = this && this.__assign || Object.assign || function (e) {
      for (var t, r = 1, o = arguments.length; r < o; r++) {
        t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      }
      return e
    },
    i = this && this.__rest || function (e, t) {
      var r = {};
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)
        for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && (r[o[n]] = e[o[n]]);
      return r
    },
    a = r(0),
    s = r(1),
    l = r(42),
    c = l.default;
  t.icons = c;
  var u = function () {},
    d = function (e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.state = {
          hovered: !1
        }, t.handleMouseEnter = function (e) {
          t.props.onMouseEnter(e), t.setState({
            hovered: !0
          })
        }, t.handleMouseLeave = function (e) {
          t.props.onMouseLeave(e), t.setState({
            hovered: !1
          })
        }, t
      }
      return o(t, e), t.prototype.render = function () {
        var e = this.props,
          t = e.style,
          r = e.hoverStyle,
          o = e.children,
          s = i(e, ["style", "hoverStyle", "children"]),
          l = this.context.theme,
          u = this.state.hovered;
        return a.createElement("span", n({}, s, {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          style: l.prepareStyles(n({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "0 0 auto",
            verticalAlign: "middle",
            fontFamily: l.iconFontFamily,
            transition: "all .25s",
            border: "none",
            outline: "none",
            userSelect: "none",
            fontSize: "inherit",
            cursor: "inherit",
            color: l.baseHigh
          }, u ? r : {}, t))
        }), c[o] || o)
      }, t
    }(a.Component);
  d.defaultProps = {
    onMouseEnter: u,
    onMouseLeave: u
  }, d.contextTypes = {
    theme: s.object
  }, t.Icon = d, Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = d
}, function (e, t) {
  e.exports = vendor_prod_lib
}, function (e, t, r) {
  "use strict";

  function o(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function (e, t) {
    var r = arguments.length <= 2 || void 0 === arguments[2] ? function (e, t) {
      return e + t
    } : arguments[2];
    return o({}, e, ["-webkit-", "-moz-", ""].map(function (e) {
      return r(e, t)
    }))
  }, e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e, t) {
    void 0 === e && (e = "Dark"), void 0 === t && (t = "#0078D7");
    var r = "Dark" === e,
      o = r ? "#fff" : "#000",
      n = r ? "#000" : "#fff";
    return {
      themeName: e,
      fontFamily: "Microsoft YaHei, Open Sans, sans-serif, Hiragino Sans GB, Arial, Lantinghei SC, STHeiti, WenQuanYi Micro Hei, SimSun",
      iconFontFamily: "Segoe MDL2 Assets",
      accent: t,
      accentLighter1: i.lighten(t, .5),
      accentLighter2: i.lighten(t, .7),
      accentLighter3: i.lighten(t, .9),
      accentDarker1: i.darken(t, .5),
      accentDarker2: i.darken(t, .7),
      accentDarker3: i.darken(t, .9),
      baseLow: i.fade(o, .2),
      baseMediumLow: i.fade(o, .4),
      baseMedium: i.fade(o, .6),
      baseMediumHigh: i.fade(o, .8),
      baseHigh: o,
      altLow: i.fade(n, .2),
      altMediumLow: i.fade(n, .4),
      altMedium: i.fade(n, .6),
      altMediumHigh: i.fade(n, .8),
      altHigh: n,
      listLow: i.fade(o, .1),
      listMedium: i.fade(o, .2),
      listAccentLow: i.fade(t, .6),
      listAccentMedium: i.fade(t, .8),
      listAccentHigh: i.fade(t, .9),
      chromeLow: r ? "#171717" : "#f2f2f2",
      chromeMediumLow: r ? "#2b2b2b" : "f2f2f2",
      chromeMedium: r ? "#1f1f1f" : "#e6e6e6",
      chromeHigh: r ? "#767676" : "#ccc",
      chromeAltLow: r ? "#f2f2f2" : "#171717",
      chromeDisabledLow: r ? "#858585" : "#7a7a7a",
      chromeDisabledHigh: r ? "#333" : "#ccc",
      chromeBlackLow: i.fade("#000", .2),
      chromeBlackMediumLow: i.fade("#000", .4),
      chromeBlackMedium: i.fade("#000", .8),
      chromeBlackHigh: "#000",
      chromeWhite: "#fff",
      isDarkTheme: r,
      prepareStyles: a.default(),
      zIndex: {
        flyout: 100,
        tooltip: 200,
        dropDownMenu: 110,
        listView: 10,
        contentDialog: 15,
        calendarView: 20
      }
    }
  }
  var n = r(30);
  t.ThemeType = n.default;
  var i = r(25);
  r(46);
  var a = r(44);
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o
}, function (e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function (e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
  }, e.exports = t.default
}, function (e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function (e) {
    return Array.isArray(e) && (e = e.join(",")), null !== e.match(/-webkit-|-moz-|-ms-/)
  }, e.exports = t.default
}, function (e, t, r) {
  e.exports = r(5)(108)
}, function (e, t, r) {
  "use strict";

  function o(e, t) {
    void 0 === t && (t = document.styleSheets[0]);
    var r = function (t) {
      try {
        Array.isArray(e) ? e.forEach(function (e) {
          t.insertRule(e, 0)
        }) : t.insertRule(e, 0)
      } catch (e) {}
    };
    if (t) r(t);
    else {
      var o = document.head,
        n = document.createElement,
        i = n("link");
      i.type = "text/css", i.rel = "stylesheet", t = i.sheet, r(t), o.appendChild(i)
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o
}, function (e, t, r) {
  "use strict";
  var o = this && this.__extends || function (e, t) {
      function r() {
        this.constructor = e
      }
      for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    },
    n = this && this.__assign || Object.assign || function (e) {
      for (var t, r = 1, o = arguments.length; r < o; r++) {
        t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      }
      return e
    },
    i = r(0),
    a = r(3),
    s = r(43),
    l = r(39),
    c = r(37),
    u = r(7),
    d = r(33),
    f = r(23),
    p = r(26),
    h = r(32),
    y = function () {},
    m = function (e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.state = {}, t.resize = function (e) {
          var r = window.innerWidth;
          if (r < 960) {
            var o = "phone";
            t.updateRenderContentWidth("100%", o)
          } else if (r >= 960 && r < 1366) {
            var o = "tablet";
            t.updateRenderContentWidth(960, o)
          } else if (r >= 1366 && r < 1920) {
            var o = "laptop";
            t.updateRenderContentWidth(1280, o)
          } else {
            var o = "pc";
            t.updateRenderContentWidth(1600, o)
          }
        }, t.updateRenderContentWidth = function (e, r) {
          t.state.renderContentWidth !== e && (t.props.onChangeRenderContentWidth(e, r), t.setState({
            renderContentWidth: e,
            screenType: r
          }))
        }, t
      }
      return o(t, e), t.prototype.componentWillMount = function () {
        this.resize()
      }, t.prototype.componentDidMount = function () {
        h.default(), window.addEventListener("resize", this.resize)
      }, t.prototype.componentWillUnmount = function () {
        window.removeEventListener("resize", this.resize)
      }, t.prototype.render = function () {
        var e = this.props,
          t = e.className,
          r = e.id,
          o = e.style,
          a = (e.path, e.children),
          h = this.state.renderContentWidth,
          y = this.context.theme;
        return i.createElement("div", {
          className: t,
          id: r,
          style: y.prepareStyles(n({
            display: "flex",
            flexDirection: "column",
            color: y.baseMediumHigh,
            background: y.chromeLow
          }, o))
        }, i.createElement(l.default, {
          docVersion: d.default(),
          headerHeight: 60,
          renderContentWidth: h
        }), i.createElement("div", {
          style: {
            margin: "0 auto",
            width: "100%",
            minHeight: "calc(100vh - 380px)"
          }
        }, a), i.createElement(c.default, {
          footerHeight: 320,
          renderContentWidth: h
        }), i.createElement("div", {
          style: {
            position: "fixed",
            right: 20,
            bottom: 40,
            zIndex: 2e3
          }
        }, i.createElement(p.default, {
          topNode: i.createElement(f.default, {
            hoverStyle: {
              color: "#fff",
              background: y.accent
            },
            onClick: function () {
              return location.href = "/"
            }
          }, "Home"),
          bottomNode: [i.createElement(f.default, {
            style: {
              color: "#fff"
            },
            hoverStyle: {},
            onClick: function () {
              y.saveTheme(u.default(y.isDarkTheme ? "Light" : "Dark", y.accent))
            }
          }, y.isDarkTheme ? "Brightness" : "QuietHours"), i.createElement(f.default, {
            style: {
              background: y.accent,
              color: "#fff"
            },
            hoverStyle: {
              color: "#fff",
              background: y.accent
            },
            onClick: function () {
              return s.default(0)
            }
          }, "ScrollChevronUpLegacy")],
          floatNavWidth: 200
        })))
      }, t
    }(i.Component);
  m.defaultProps = {
    onChangeRenderContentWidth: y
  }, m.contextTypes = {
    theme: a.object
  }, Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = m
}, function (e, t, r) {
  "use strict";

  function o(e) {
    return e in a ? a[e] : a[e] = e.replace(n, "-$&").toLowerCase().replace(i, "-ms-")
  }
  var n = /[A-Z]/g,
    i = /^ms-/,
    a = {};
  e.exports = o
}, function (e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    Webkit: {
      transform: !0,
      transformOrigin: !0,
      transformOriginX: !0,
      transformOriginY: !0,
      backfaceVisibility: !0,
      perspective: !0,
      perspectiveOrigin: !0,
      transformStyle: !0,
      transformOriginZ: !0,
      animation: !0,
      animationDelay: !0,
      animationDirection: !0,
      animationFillMode: !0,
      animationDuration: !0,
      animationIterationCount: !0,
      animationName: !0,
      animationPlayState: !0,
      animationTimingFunction: !0,
      appearance: !0,
      userSelect: !0,
      fontKerning: !0,
      textEmphasisPosition: !0,
      textEmphasis: !0,
      textEmphasisStyle: !0,
      textEmphasisColor: !0,
      boxDecorationBreak: !0,
      clipPath: !0,
      maskImage: !0,
      maskMode: !0,
      maskRepeat: !0,
      maskPosition: !0,
      maskClip: !0,
      maskOrigin: !0,
      maskSize: !0,
      maskComposite: !0,
      mask: !0,
      maskBorderSource: !0,
      maskBorderMode: !0,
      maskBorderSlice: !0,
      maskBorderWidth: !0,
      maskBorderOutset: !0,
      maskBorderRepeat: !0,
      maskBorder: !0,
      maskType: !0,
      textDecorationStyle: !0,
      textDecorationSkip: !0,
      textDecorationLine: !0,
      textDecorationColor: !0,
      filter: !0,
      fontFeatureSettings: !0,
      breakAfter: !0,
      breakBefore: !0,
      breakInside: !0,
      columnCount: !0,
      columnFill: !0,
      columnGap: !0,
      columnRule: !0,
      columnRuleColor: !0,
      columnRuleStyle: !0,
      columnRuleWidth: !0,
      columns: !0,
      columnSpan: !0,
      columnWidth: !0,
      flex: !0,
      flexBasis: !0,
      flexDirection: !0,
      flexGrow: !0,
      flexFlow: !0,
      flexShrink: !0,
      flexWrap: !0,
      alignContent: !0,
      alignItems: !0,
      alignSelf: !0,
      justifyContent: !0,
      order: !0,
      transition: !0,
      transitionDelay: !0,
      transitionDuration: !0,
      transitionProperty: !0,
      transitionTimingFunction: !0,
      backdropFilter: !0,
      scrollSnapType: !0,
      scrollSnapPointsX: !0,
      scrollSnapPointsY: !0,
      scrollSnapDestination: !0,
      scrollSnapCoordinate: !0,
      shapeImageThreshold: !0,
      shapeImageMargin: !0,
      shapeImageOutside: !0,
      hyphens: !0,
      flowInto: !0,
      flowFrom: !0,
      regionFragment: !0,
      textSizeAdjust: !0
    },
    Moz: {
      appearance: !0,
      userSelect: !0,
      boxSizing: !0,
      textAlignLast: !0,
      textDecorationStyle: !0,
      textDecorationSkip: !0,
      textDecorationLine: !0,
      textDecorationColor: !0,
      tabSize: !0,
      hyphens: !0,
      fontFeatureSettings: !0,
      breakAfter: !0,
      breakBefore: !0,
      breakInside: !0,
      columnCount: !0,
      columnFill: !0,
      columnGap: !0,
      columnRule: !0,
      columnRuleColor: !0,
      columnRuleStyle: !0,
      columnRuleWidth: !0,
      columns: !0,
      columnSpan: !0,
      columnWidth: !0
    },
    ms: {
      flex: !0,
      flexBasis: !1,
      flexDirection: !0,
      flexGrow: !1,
      flexFlow: !0,
      flexShrink: !1,
      flexWrap: !0,
      alignContent: !1,
      alignItems: !1,
      alignSelf: !1,
      justifyContent: !1,
      order: !1,
      transform: !0,
      transformOrigin: !0,
      transformOriginX: !0,
      transformOriginY: !0,
      userSelect: !0,
      wrapFlow: !0,
      wrapThrough: !0,
      wrapMargin: !0,
      scrollSnapType: !0,
      scrollSnapPointsX: !0,
      scrollSnapPointsY: !0,
      scrollSnapDestination: !0,
      scrollSnapCoordinate: !0,
      touchAction: !0,
      hyphens: !0,
      flowInto: !0,
      flowFrom: !0,
      breakBefore: !0,
      breakAfter: !0,
      breakInside: !0,
      regionFragment: !0,
      gridTemplateColumns: !0,
      gridTemplateRows: !0,
      gridTemplateAreas: !0,
      gridTemplate: !0,
      gridAutoColumns: !0,
      gridAutoRows: !0,
      gridAutoFlow: !0,
      grid: !0,
      gridRowStart: !0,
      gridColumnStart: !0,
      gridRowEnd: !0,
      gridRow: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnGap: !0,
      gridRowGap: !0,
      gridArea: !0,
      gridGap: !0,
      textSizeAdjust: !0
    }
  }, e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e) {
    return Object.keys(e).sort(function (e, t) {
      return (0, i.default)(e) && !(0, i.default)(t) ? -1 : !(0, i.default)(e) && (0, i.default)(t) ? 1 : 0
    }).reduce(function (t, r) {
      return t[r] = e[r], t
    }, {})
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var n = r(82),
    i = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n);
  e.exports = t.default
}, function (e, t, r) {
  e.exports = r(5)(109)
}, function (e, t, r) {
  "use strict";
  var o = r(0),
    n = r(10);
  r(49);
  var i = r(41),
    a = n.render,
    s = document.getElementById("app");
  ! function (e, t) {
    void 0 === t && (t = i.default), e ? a(o.createElement(e, null, o.createElement(t, null)), s) : a(o.createElement(i.default, null), s)
  }()
}, function (e, t) {
  function r(e, t) {
    var r = e[1] || "",
      n = e[3];
    if (!n) return r;
    if (t && "function" == typeof btoa) {
      var i = o(n);
      return [r].concat(n.sources.map(function (e) {
        return "/*# sourceURL=" + n.sourceRoot + e + " */"
      })).concat([i]).join("\n")
    }
    return [r].join("\n")
  }

  function o(e) {
    return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
  }
  e.exports = function (e) {
    var t = [];
    return t.toString = function () {
      return this.map(function (t) {
        var o = r(t, e);
        return t[2] ? "@media " + t[2] + "{" + o + "}" : o
      }).join("")
    }, t.i = function (e, r) {
      "string" == typeof e && (e = [
        [null, e, ""]
      ]);
      for (var o = {}, n = 0; n < this.length; n++) {
        var i = this[n][0];
        "number" == typeof i && (o[i] = !0)
      }
      for (n = 0; n < e.length; n++) {
        var a = e[n];
        "number" == typeof a[0] && o[a[0]] || (r && !a[2] ? a[2] = r : r && (a[2] = "(" + a[2] + ") and (" + r + ")"), t.push(a))
      }
    }, t
  }
}, function (e, t, r) {
  function o(e, t) {
    for (var r = 0; r < e.length; r++) {
      var o = e[r],
        n = h[o.id];
      if (n) {
        n.refs++;
        for (var i = 0; i < n.parts.length; i++) n.parts[i](o.parts[i]);
        for (; i < o.parts.length; i++) n.parts.push(u(o.parts[i], t))
      } else {
        for (var a = [], i = 0; i < o.parts.length; i++) a.push(u(o.parts[i], t));
        h[o.id] = {
          id: o.id,
          refs: 1,
          parts: a
        }
      }
    }
  }

  function n(e) {
    for (var t = [], r = {}, o = 0; o < e.length; o++) {
      var n = e[o],
        i = n[0],
        a = n[1],
        s = n[2],
        l = n[3],
        c = {
          css: a,
          media: s,
          sourceMap: l
        };
      r[i] ? r[i].parts.push(c) : t.push(r[i] = {
        id: i,
        parts: [c]
      })
    }
    return t
  }

  function i(e, t) {
    var r = m(e.insertInto);
    if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
    var o = b[b.length - 1];
    if ("top" === e.insertAt) o ? o.nextSibling ? r.insertBefore(t, o.nextSibling) : r.appendChild(t) : r.insertBefore(t, r.firstChild), b.push(t);
    else {
      if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
      r.appendChild(t)
    }
  }

  function a(e) {
    e.parentNode.removeChild(e);
    var t = b.indexOf(e);
    t >= 0 && b.splice(t, 1)
  }

  function s(e) {
    var t = document.createElement("style");
    return e.attrs.type = "text/css", c(t, e.attrs), i(e, t), t
  }

  function l(e) {
    var t = document.createElement("link");
    return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", c(t, e.attrs), i(e, t), t
  }

  function c(e, t) {
    Object.keys(t).forEach(function (r) {
      e.setAttribute(r, t[r])
    })
  }

  function u(e, t) {
    var r, o, n;
    if (t.singleton) {
      var i = v++;
      r = g || (g = s(t)), o = d.bind(null, r, i, !1), n = d.bind(null, r, i, !0)
    } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (r = l(t), o = p.bind(null, r, t), n = function () {
      a(r), r.href && URL.revokeObjectURL(r.href)
    }) : (r = s(t), o = f.bind(null, r), n = function () {
      a(r)
    });
    return o(e),
      function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          o(e = t)
        } else n()
      }
  }

  function d(e, t, r, o) {
    var n = r ? "" : o.css;
    if (e.styleSheet) e.styleSheet.cssText = w(t, n);
    else {
      var i = document.createTextNode(n),
        a = e.childNodes;
      a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
    }
  }

  function f(e, t) {
    var r = t.css,
      o = t.media;
    if (o && e.setAttribute("media", o), e.styleSheet) e.styleSheet.cssText = r;
    else {
      for (; e.firstChild;) e.removeChild(e.firstChild);
      e.appendChild(document.createTextNode(r))
    }
  }

  function p(e, t, r) {
    var o = r.css,
      n = r.sourceMap,
      i = void 0 === t.convertToAbsoluteUrls && n;
    (t.convertToAbsoluteUrls || i) && (o = S(o)), n && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
    var a = new Blob([o], {
        type: "text/css"
      }),
      s = e.href;
    e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
  }
  var h = {},
    y = function (e) {
      var t;
      return function () {
        return void 0 === t && (t = e.apply(this, arguments)), t
      }
    }(function () {
      return window && document && document.all && !window.atob
    }),
    m = function (e) {
      var t = {};
      return function (r) {
        return void 0 === t[r] && (t[r] = e.call(this, r)), t[r]
      }
    }(function (e) {
      return document.querySelector(e)
    }),
    g = null,
    v = 0,
    b = [],
    S = r(48);
  e.exports = function (e, t) {
    if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
    t = t || {}, t.attrs = "object" == typeof t.attrs ? t.attrs : {}, void 0 === t.singleton && (t.singleton = y()), void 0 === t.insertInto && (t.insertInto = "head"), void 0 === t.insertAt && (t.insertAt = "bottom");
    var r = n(e);
    return o(r, t),
      function (e) {
        for (var i = [], a = 0; a < r.length; a++) {
          var s = r[a],
            l = h[s.id];
          l.refs--, i.push(l)
        }
        e && o(n(e), t);
        for (var a = 0; a < i.length; a++) {
          var l = i[a];
          if (0 === l.refs) {
            for (var c = 0; c < l.parts.length; c++) l.parts[c]();
            delete h[l.id]
          }
        }
      }
  };
  var w = function () {
    var e = [];
    return function (t, r) {
      return e[t] = r, e.filter(Boolean).join("\n")
    }
  }()
}, function (e, t, r) {
  "use strict";
  var o = this && this.__extends || function (e, t) {
      function r() {
        this.constructor = e
      }
      for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    },
    n = this && this.__assign || Object.assign || function (e) {
      for (var t, r = 1, o = arguments.length; r < o; r++) {
        t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      }
      return e
    },
    i = this && this.__rest || function (e, t) {
      var r = {};
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)
        for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && (r[o[n]] = e[o[n]]);
      return r
    },
    a = r(0),
    s = r(10),
    l = r(1),
    c = r(45),
    u = function () {},
    d = function (e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.visitedStyle = {}, t.setStyle = function (e) {
          c.default(t.currentDOM, t.context.theme.prepareStyles(n({}, t.props.style, e)))
        }, t.hover = function () {
          t.setStyle(t.props.hoverStyle), t.props.onMouseEnter(), t.props.onHover()
        }, t.unHover = function () {
          t.resetStyle(), t.props.onMouseLeave(), t.props.unHover()
        }, t.active = function () {
          t.setStyle(t.props.activeStyle), t.props.onMouseDown(), t.props.onActive()
        }, t.unActive = function () {
          t.resetStyle(), t.props.onMouseUp(), t.props.unActive()
        }, t.focus = function () {
          t.setStyle(t.props.focusStyle), t.props.onFocus()
        }, t.unFocus = function () {
          t.resetStyle(), t.props.unFocus()
        }, t.visited = function () {
          t.setStyle(t.props.visitedStyle), t.props.onClick(), t.props.onVisited(), t.visitedStyle = t.props.visitedStyle
        }, t.unVisited = function () {
          t.resetStyle(!0), t.props.onClick(), t.props.unVisited()
        }, t.resetStyle = function (e) {
          void 0 === e && (e = !1), e && (t.visitedStyle = void 0), c.default(t.currentDOM, n({}, t.props.style, t.visitedStyle), !0)
        }, t.getDOM = function () {
          return t.currentDOM
        }, t
      }
      return o(t, e), t.prototype.componentDidMount = function () {
        this.currentDOM = s.findDOMNode(this)
      }, t.prototype.componentDidUpdate = function () {
        this.currentDOM = s.findDOMNode(this)
      }, t.prototype.render = function () {
        var e = this.props,
          t = e.style,
          r = e.hoverStyle,
          o = e.focusStyle,
          s = e.activeStyle,
          l = e.visitedStyle,
          c = e.onMouseEnter,
          u = e.onMouseLeave,
          d = e.onMouseDown,
          f = e.onMouseUp,
          p = e.onClick,
          h = (e.onHover, e.onFocus),
          y = (e.onActive, e.onVisited, e.unHover, e.unFocus, e.unActive, e.unVisited, e.visited, e.children),
          m = i(e, ["style", "hoverStyle", "focusStyle", "activeStyle", "visitedStyle", "onMouseEnter", "onMouseLeave", "onMouseDown", "onMouseUp", "onClick", "onHover", "onFocus", "onActive", "onVisited", "unHover", "unFocus", "unActive", "unVisited", "visited", "children"]);
        return a.cloneElement(y, n({}, m, {
          style: this.context.theme.prepareStyles(t),
          onMouseEnter: r ? this.hover : c,
          onMouseLeave: r ? this.unHover : u,
          onMouseDown: s ? this.active : d,
          onMouseUp: s ? this.unActive : f,
          onClick: l ? this.visited : p,
          onFocus: o ? this.focus : h
        }))
      }, t
    }(a.Component);
  d.defaultProps = {
    onHover: u,
    onFocus: u,
    onActive: u,
    onVisited: u,
    unHover: u,
    unFocus: u,
    unActive: u,
    unVisited: u,
    onMouseEnter: u,
    onMouseLeave: u,
    onMouseDown: u,
    onMouseUp: u,
    onClick: u
  }, d.contextTypes = {
    theme: l.object
  }, Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = d
}, function (e, t, r) {
  "use strict";

  function o(e) {
    var t = e.context,
      r = e.props,
      o = r.style,
      n = r.iconSize,
      a = e.state.showListSource,
      s = t.theme;
    return {
      root: s.prepareStyles(i({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "6px 10px",
        paddingRight: n + "px"
      }, o, {
        position: "relative"
      })),
      listView: s.prepareStyles({
        position: "absolute",
        width: "100%",
        top: "100%",
        left: 0,
        zIndex: 2,
        border: "1px solid " + s.baseLow,
        transform: "translate3D(0, " + (a ? 0 : "-10px") + ", 0)",
        opacity: a ? 1 : 0,
        pointerEvents: a ? void 0 : "none",
        transition: "all .25s"
      }),
      iconsStyles: {
        style: {
          position: "absolute",
          top: 0,
          right: 0,
          cursor: "pointer",
          height: n,
          width: n,
          color: "#a9a9a9"
        },
        hoverStyle: {
          color: s.accent
        }
      }
    }
  }
  var n = this && this.__extends || function (e, t) {
      function r() {
        this.constructor = e
      }
      for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    },
    i = this && this.__assign || Object.assign || function (e) {
      for (var t, r = 1, o = arguments.length; r < o; r++) {
        t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      }
      return e
    },
    a = this && this.__rest || function (e, t) {
      var r = {};
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)
        for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && (r[o[n]] = e[o[n]]);
      return r
    },
    s = r(0),
    l = r(1),
    c = r(4),
    u = r(24),
    d = r(27),
    f = function (e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.state = {
          currListSource: t.props.listSource
        }, t.inputTimer = null, t.originBodyOnClick = function () {}, t.originBodyOnKeydown = function () {}, t.checkLayerClick = function (e) {
          t.originBodyOnClick(e), t.state.typing, t.refs.input.rootElm.contains(e.target) || t.setState({
            showListSource: !1
          })
        }, t.checkLayerKeydown = function (e) {
          t.originBodyOnKeydown(e);
          var r = e.keyCode;
          t.state.typing, t.refs.input.input.matches(":focus") && 27 === r && t.setState({
            showListSource: !1
          })
        }, t.toggleShowListSource = function (e) {
          "boolean" == typeof e ? e !== t.state.showListSource && t.setState({
            showListSource: e
          }) : t.setState(function (e, t) {
            return {
              showListSource: !e.showListSource
            }
          })
        }, t.showListSource = function () {
          return t.setState({
            showListSource: !0
          })
        }, t.handleChange = function (e) {
          var r;
          r = e;
          var o = r.currentTarget.value;
          t.props.onChangeValue(o), clearTimeout(t.inputTimer), t.inputTimer = setTimeout(function () {
            o ? t.setState({
              typing: !0,
              showListSource: !0
            }) : t.setState({
              typing: !1,
              showListSource: !1
            })
          }, 150)
        }, t.getValue = function () {
          return t.refs.input.getValue()
        }, t.setValue = function (e) {
          return t.refs.input.setValue(e)
        }, t.handleButtonAction = function (e) {
          t.state.typing ? (t.setValue(""), t.setState({
            typing: !1,
            showListSource: !1
          }), t.refs.input.input.focus()) : t.props.searchAction(t.getValue())
        }, t.handleChooseItem = function (e) {
          var r = setTimeout(function () {
              t.toggleShowListSource(!1), clearTimeout(r)
            }, 250),
            o = t.props.listSource[e];
          t.setValue("object" == typeof o ? o.props.value : o)
        }, t.handleInputKeyDown = function (e) {
          var r, o = e.keyCode,
            n = t.state,
            i = n.focusListSourceIndex,
            a = n.currListSource,
            s = n.showListSource,
            l = t.props.searchAction;
          if (a && (r = a.length) && s) switch (o) {
            case 38:
              void 0 === i ? t.setState({
                focusListSourceIndex: r - 1
              }) : (i -= 1, i < 0 && (i += r), t.setState({
                focusListSourceIndex: i % r
              }));
              break;
            case 40:
              void 0 === i ? t.setState({
                focusListSourceIndex: 0
              }) : (i += 1, i > r && (i -= r), t.setState({
                focusListSourceIndex: i % r
              }));
              break;
            case 13:
              void 0 === i ? (l(t.getValue()), t.setState({
                showListSource: !1
              })) : (t.handleChooseItem(i), t.setState({
                focusListSourceIndex: void 0
              }))
          } else 13 === o && l(t.getValue())
        }, t
      }
      return n(t, e), t.prototype.componentDidMount = function () {
        var e = document.body,
          t = e.onclick,
          r = e.onkeydown;
        t && (this.originBodyOnClick = t), r && (this.originBodyOnKeydown = r), document.body.onclick = this.checkLayerClick, document.body.onkeydown = this.checkLayerKeydown
      }, t.prototype.componentWillReceiveProps = function (e) {
        this.setState({
          currListSource: e.listSource
        })
      }, t.prototype.componentWillUnmount = function () {
        document.body.onclick = this.originBodyOnClick, document.body.onkeydown = this.originBodyOnKeydown
      }, t.prototype.render = function () {
        var e = this,
          t = this.props,
          r = (t.onChangeValue, t.searchAction, t.listSource, t.iconSize, t.children, a(t, ["onChangeValue", "searchAction", "listSource", "iconSize", "children"])),
          n = this.state,
          l = n.typing,
          f = n.currListSource,
          p = n.focusListSourceIndex,
          h = o(this);
        return s.createElement(u.default, i({}, r, {
          ref: "input",
          style: h.root,
          onClick: this.showListSource,
          onKeyDown: this.handleInputKeyDown,
          rightNode: s.createElement(c.default, i({}, h.iconsStyles, {
            onClick: this.handleButtonAction
          }), l ? "CancelLegacy" : "Search"),
          onChange: this.handleChange
        }), f && f.length > 0 && s.createElement(d.default, {
          ref: function (t) {
            return e.listView = t
          },
          style: h.listView,
          items: f.map(function (e, t) {
            return {
              itemNode: e,
              focus: t === p
            }
          }),
          itemStyle: {
            fontSize: 12
          },
          onChooseItem: this.handleChooseItem
        }))
      }, t
    }(s.Component);
  f.defaultProps = {
    onChangeValue: function () {},
    searchAction: function () {},
    iconSize: 32
  }, f.contextTypes = {
    theme: l.object
  }, t.AutoSuggestBox = f, Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = f
}, function (e, t, r) {
  "use strict";
  var o = this && this.__extends || function (e, t) {
      function r() {
        this.constructor = e
      }
      for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    },
    n = this && this.__assign || Object.assign || function (e) {
      for (var t, r = 1, o = arguments.length; r < o; r++) {
        t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      }
      return e
    },
    i = this && this.__rest || function (e, t) {
      var r = {};
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)
        for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && (r[o[n]] = e[o[n]]);
      return r
    },
    a = r(0),
    s = r(1),
    l = r(31),
    c = r(7),
    u = "__react-uwp__",
    d = function (e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.saveTheme = function (e) {
          e.saveTheme = t.saveTheme, localStorage.setItem(u, JSON.stringify({
            themeName: e.themeName,
            accent: e.accent
          })), t.setState({
            theme: e
          })
        }, t.getDefaultTheme = function () {
          var e;
          if (t.props.autoSaveTheme) {
            var r = localStorage.getItem(u);
            if (r) {
              var o = {};
              try {
                o = JSON.parse(r), e = c.default(o.themeName, o.accent)
              } catch (t) {
                e = l.default
              }
            } else e = l.default;
            e.saveTheme = t.saveTheme
          } else e = t.props.theme || l.default;
          return e
        }, t.state = {
          theme: t.getDefaultTheme()
        }, t
      }
      return o(t, e), t.prototype.getChildContext = function () {
        return {
          theme: this.state.theme
        }
      }, t.prototype.render = function () {
        var e = this.props,
          t = (e.autoSaveTheme, e.children),
          r = (e.theme, e.style),
          o = i(e, ["autoSaveTheme", "children", "theme", "style"]);
        return a.createElement("div", n({}, o, {
          style: l.default.prepareStyles(n({
            width: "100%",
            height: "100%"
          }, r))
        }), t)
      }, t
    }(a.Component);
  d.childContextTypes = {
    theme: s.object
  }, Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = d
}, function (e, t, r) {
  "use strict";
  var o = this && this.__extends || function (e, t) {
      function r() {
        this.constructor = e
      }
      for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    },
    n = this && this.__assign || Object.assign || function (e) {
      for (var t, r = 1, o = arguments.length; r < o; r++) {
        t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      }
      return e
    },
    i = this && this.__rest || function (e, t) {
      var r = {};
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)
        for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && (r[o[n]] = e[o[n]]);
      return r
    },
    a = r(0),
    s = r(1),
    l = r(20),
    c = r(4),
    u = function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this
      }
      return o(t, e), t.prototype.render = function () {
        var e = this.props,
          t = e.style,
          r = e.hoverStyle,
          o = e.activeStyle,
          s = e.children,
          u = i(e, ["style", "hoverStyle", "activeStyle", "children"]),
          d = this.context.theme;
        return a.createElement(l.default, n({}, u, {
          style: n({
            display: "inline-block",
            fontFamily: "Segoe MDL2 Assets",
            transition: "all .25s 0s ease-in-out",
            userSelect: "none",
            background: "none",
            border: "none",
            outline: "none",
            fontSize: 24,
            width: 48,
            height: 48,
            cursor: "pointer",
            color: d.baseHigh,
            padding: 4
          }, t),
          hoverStyle: n({
            background: d[d.isDarkTheme ? "accentDarker1" : "accentLighter1"]
          }, r),
          activeStyle: n({
            background: d.accent
          }, o)
        }), a.createElement("button", null, a.createElement(c.default, null, s)))
      }, t
    }(a.Component);
  u.contextTypes = {
    theme: s.object
  }, Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = u
}, function (e, t, r) {
  "use strict";
  var o = this && this.__extends || function (e, t) {
      function r() {
        this.constructor = e
      }
      for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    },
    n = this && this.__assign || Object.assign || function (e) {
      for (var t, r = 1, o = arguments.length; r < o; r++) {
        t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      }
      return e
    },
    i = this && this.__rest || function (e, t) {
      var r = {};
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)
        for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && (r[o[n]] = e[o[n]]);
      return r
    },
    a = r(0),
    s = r(1),
    l = function () {},
    c = function (e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.state = {}, t.handleClick = function (e) {
          t.setState({
            hovered: !1
          })
        }, t.handleHover = function (e) {
          t.setState({
            hovered: !0
          }), t.handleBlur = function () {}
        }, t.handleUnHover = function (e) {
          t.setState({
            hovered: !1
          }), t.handleBlur = function (e) {
            t.setState({
              focused: !1
            }), t.props.onBlur(e)
          }
        }, t.handleFocus = function (e) {
          t.setState({
            focused: !0
          }), t.props.onFocus(e)
        }, t.handleBlur = function (e) {
          t.setState({
            focused: !1
          }), t.props.onBlur(e)
        }, t.setValue = function (e) {
          return t.input.value = e
        }, t.getValue = function () {
          return t.input.value
        }, t
      }
      return o(t, e), t.prototype.render = function () {
        var e = this,
          t = this.props,
          r = (t.hoverStyle, t.focusStyle, t.leftNode),
          o = t.rightNode,
          s = t.style,
          l = t.inputStyle,
          c = t.onChangeValue,
          u = t.children,
          d = t.background,
          f = i(t, ["hoverStyle", "focusStyle", "leftNode", "rightNode", "style", "inputStyle", "onChangeValue", "children", "background"]),
          p = this.state,
          h = p.hovered,
          y = p.focused,
          m = r || o,
          g = this.context.theme,
          v = void 0 === d ? g.altHigh : d;
        return a.createElement("div", {
          onMouseEnter: this.handleHover,
          onMouseLeave: this.handleUnHover,
          ref: function (t) {
            return e.rootElm = t
          },
          style: g.prepareStyles(n({
            height: 32,
            width: 296,
            padding: m ? "0 10px" : void 0,
            fontSize: 15,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "#000",
            background: y ? "#fff" : v,
            boxShadow: y ? "inset 0px 0px 0 2px " + this.context.theme.accent : h ? "inset 0px 0px 0 2px " + g.baseMedium : "inset 0px 0px 0 2px " + g.baseLow,
            transition: "all .25s"
          }, s)),
          onClick: this.handleClick
        }, r, a.createElement("input", n({
          ref: function (t) {
            return e.input = t
          }
        }, f, {
          style: g.prepareStyles(n({
            color: y ? "#000" : g.baseMediumHigh,
            width: "100%",
            height: "100%",
            background: "none",
            border: "none",
            outline: "none",
            transition: "all .25s"
          }, l)),
          onChange: function (e) {
            c(e.currentTarget.value), f.onChange(e)
          },
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        })), o, u)
      }, t
    }(a.Component);
  c.defaultProps = {
    inputStyle: {
      fontSize: "inherit",
      outline: "none",
      transition: "all .25s"
    },
    onFocus: l,
    onBlur: l,
    onChange: l,
    onChangeValue: l
  }, c.contextTypes = {
    theme: s.object
  }, Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = c
}, function (e, t, r) {
  "use strict";

  function o(e, t, r) {
    return e < t ? t : e > r ? r : e
  }

  function n(e) {
    var t = e.type,
      r = e.values;
    if (t.indexOf("rgb") > -1)
      for (var o = 0; o < 3; o++) r[o] = parseInt(r[o]);
    var n;
    return n = t.indexOf("hsl") > -1 ? e.type + "(" + r[0] + ", " + r[1] + "%, " + r[2] + "%" : e.type + "(" + r[0] + ", " + r[1] + ", " + r[2], 4 === r.length ? n += ", " + e.values[3] + ")" : n += ")", n
  }

  function i(e) {
    if (4 === e.length) {
      for (var t = "#", r = 1; r < e.length; r++) t += e.charAt(r) + e.charAt(r);
      e = t
    }
    var o = {
      r: parseInt(e.substr(1, 2), 16),
      g: parseInt(e.substr(3, 2), 16),
      b: parseInt(e.substr(5, 2), 16)
    };
    return "rgb(" + o.r + ", " + o.g + ", " + o.b + ")"
  }

  function a(e) {
    if ("#" === e.charAt(0)) return a(i(e));
    var t = e.indexOf("("),
      r = e.substring(0, t),
      o = e.substring(t + 1, e.length - 1).split(",");
    return o = o.map(function (e) {
      return parseFloat(e)
    }), {
      type: r,
      values: o
    }
  }

  function s(e, t) {
    var r = l(e),
      o = l(t),
      n = (Math.max(r, o) + .05) / (Math.min(r, o) + .05);
    return Number(n.toFixed(2))
  }

  function l(e) {
    if (e = a(e), e.type.indexOf("rgb") > -1) {
      var t = e.values.map(function (e) {
        return e /= 255, e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
      });
      return Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3))
    }
    if (e.type.indexOf("hsl") > -1) return e.values[2] / 100
  }

  function c(e, t) {
    return void 0 === t && (t = .15), l(e) > .5 ? d(e, t) : f(e, t)
  }

  function u(e, t) {
    return e = a(e), t = o(t, 0, 1), "rgb" !== e.type && "hsl" !== e.type || (e.type += "a"), e.values[3] = t, n(e)
  }

  function d(e, t) {
    if (e = a(e), t = o(t, 0, 1), e.type.indexOf("hsl") > -1) e.values[2] *= 1 - t;
    else if (e.type.indexOf("rgb") > -1)
      for (var r = 0; r < 3; r++) e.values[r] *= 1 - t;
    return n(e)
  }

  function f(e, t) {
    if (e = a(e), t = o(t, 0, 1), e.type.indexOf("hsl") > -1) e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.indexOf("rgb") > -1)
      for (var r = 0; r < 3; r++) e.values[r] += (255 - e.values[r]) * t;
    return n(e)
  }
  t.convertColorToString = n, t.convertHexToRGB = i, t.decomposeColor = a, t.getContrastRatio = s, t.getLuminance = l, t.emphasize = c, t.fade = u, t.darken = d, t.lighten = f
}, function (e, t, r) {
  "use strict";
  var o = this && this.__extends || function (e, t) {
      function r() {
        this.constructor = e
      }
      for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    },
    n = this && this.__assign || Object.assign || function (e) {
      for (var t, r = 1, o = arguments.length; r < o; r++) {
        t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      }
      return e
    },
    i = this && this.__rest || function (e, t) {
      var r = {};
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)
        for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && (r[o[n]] = e[o[n]]);
      return r
    },
    a = r(0),
    s = r(1),
    l = function (e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.state = {
          currFocusItem: t.props.focusItem,
          hoverItem: null,
          hoverIndexArray: []
        }, t.focusIndex = function (e) {
          return t.setState({
            currFocusItem: e
          })
        }, t.getFocusIndex = function () {
          return t.state.currFocusItem
        }, t.getItems = function () {
          return t.props.items
        }, t
      }
      return o(t, e), t.prototype.componentWillReceiveProps = function (e) {
        this.setState({
          currFocusItem: e.focusItem
        })
      }, t.prototype.shouldComponentUpdate = function (e, t) {
        return e !== this.props || t !== this.state
      }, t.prototype.render = function () {
        var e = this,
          t = this.props,
          r = t.items,
          o = t.onFocusIndex,
          s = t.topNode,
          l = t.bottomNode,
          c = t.isFloatRight,
          u = t.floatNavWidth,
          d = t.width,
          f = (t.focusItem, i(t, ["items", "onFocusIndex", "topNode", "bottomNode", "isFloatRight", "floatNavWidth", "width", "focusItem"])),
          p = this.context.theme,
          h = this.state,
          y = h.currFocusItem,
          m = h.hoverItem,
          g = h.hoverIndexArray,
          v = p.prepareStyles({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            background: p.altHigh,
            transition: "all .25s 0s cubic-bezier(.04, .89, .44, 1.07)",
            fontSize: 12
          });
        return a.createElement("div", n({}, f, {
          style: p.prepareStyles(n({
            width: 40,
            background: p.altHigh
          }, f.style))
        }), a.createElement("div", n({}, f, {
          style: p.prepareStyles({
            width: d,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: c ? "flex-end" : "flex-start"
          })
        }), a.Children.map(s, function (e, t) {
          return a.createElement("div", {
            key: "" + t,
            style: p.prepareStyles(n({}, v, {
              width: d,
              height: d
            }))
          }, a.cloneElement(e, {
            style: n({}, e.props.style, {
              width: d,
              height: d
            })
          }))
        }), r.map(function (t, r) {
          var i = t.showNode,
            s = t.color,
            l = t.title,
            f = y === r,
            h = m === r,
            v = Number.parseInt(d.toString()) / 2;
          return a.createElement("a", {
            onMouseEnter: function (t) {
              g[r] = !0, e.setState({
                hoverItem: r,
                hoverIndexArray: g
              })
            },
            onMouseLeave: function () {
              g[r] = !1, e.setState({
                hoverItem: void 0,
                hoverIndexArray: g
              })
            },
            onClick: function () {
              o(r)
            },
            style: p.prepareStyles({
              overflow: "hidden",
              display: "flex",
              flexDirection: c ? "row" : "row-reverse",
              alignItems: "center",
              justifyContent: h ? "space-between" : "center",
              boxSizing: "border-box",
              transition: "all .25s 0s ease-in-out",
              color: g[r] ? "#fff" : p.baseHigh,
              textDecoration: "none",
              background: f || h ? p.accent || s : p.altHigh,
              width: g[r] ? u : d,
              height: d
            }),
            key: "" + r
          }, h && a.createElement("span", {
            style: {
              cursor: "default",
              color: "#fff",
              margin: "0 " + v + "px"
            }
          }, l), "string" == typeof i ? a.createElement("div", {
            style: p.prepareStyles({
              transition: ["width cubic-bezier(.04, .89, .44, 1.07),", "opacity cubic-bezier(.04, .89, .44, 1.07),", "visibility cubic-bezier(.04, .89, .44, 1.07)"].join(""),
              width: d,
              height: v,
              background: "url(" + i + ") no-repeat center center / contain",
              filter: h ? "brightness(100)" : void 0
            })
          }) : a.cloneElement(i, {
            style: n({}, i.props.style, {
              width: d,
              height: d
            })
          }))
        }), a.Children.map(l, function (e, t) {
          return a.createElement("div", {
            key: "" + t,
            style: p.prepareStyles(n({}, v, {
              width: d,
              height: d
            }))
          }, a.cloneElement(e, {
            style: n({}, e.props.style, {
              width: d,
              height: d
            })
          }))
        })))
      }, t
    }(a.Component);
  l.defaultProps = {
    onFocusIndex: function () {},
    items: [],
    width: 40,
    isFloatRight: !0,
    floatNavWidth: 240
  }, l.contextTypes = {
    theme: s.object
  }, Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l
}, function (e, t, r) {
  "use strict";

  function o(e) {
    var t = e.context,
      r = e.props.itemStyle,
      o = t.theme,
      n = o.prepareStyles;
    return {
      root: {
        width: "100%",
        fontSize: 14,
        padding: "8px 0",
        color: o.baseMediumHigh,
        border: "1px solid " + o.altHigh,
        background: o.chromeLow,
        transition: "all .25s"
      },
      item: n(i({
        cursor: "default",
        padding: 8,
        width: "100%",
        transition: "all 0.25s"
      }, r))
    }
  }
  var n = this && this.__extends || function (e, t) {
      function r() {
        this.constructor = e
      }
      for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    },
    i = this && this.__assign || Object.assign || function (e) {
      for (var t, r = 1, o = arguments.length; r < o; r++) {
        t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      }
      return e
    },
    a = this && this.__rest || function (e, t) {
      var r = {};
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)
        for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && (r[o[n]] = e[o[n]]);
      return r
    },
    s = r(0),
    l = r(1),
    c = r(29);
  c.default.pop(), c.default.map(function (e) {
    return e[0].toUpperCase() + e.slice(1)
  });
  var u = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.state = {
        currItems: t.props.items
      }, t.updateProps2State = function (e) {
        var r = e.items;
        t.setState({
          currItems: r
        })
      }, t
    }
    return n(t, e), t.prototype.componentWillReceiveProps = function (e) {
      this.updateProps2State(e)
    }, t.prototype.render = function () {
      var e = this,
        t = this.props,
        r = (t.items, t.itemStyle, t.onChooseItem),
        n = a(t, ["items", "itemStyle", "onChooseItem"]),
        l = this.context.theme,
        u = this.state.currItems,
        d = o(this);
      return s.createElement("div", i({}, n, {
        style: i({}, d.root, l.prepareStyles(n.style))
      }), u && u.map(function (t, o) {
        var n = t.itemNode,
          a = t.disable,
          f = t.focus,
          p = l.isDarkTheme,
          h = f ? l[p ? "accentDarker2" : "accentLighter2"] : l.chromeLow,
          y = f ? l[p ? "accentDarker1" : "accentLighter1"] : l.chromeMedium,
          m = f ? l.accent : l.chromeHigh;
        return s.createElement("div", {
          style: i({
            background: h,
            color: a ? l.baseLow : l.baseHigh
          }, d.item),
          key: "" + o,
          onMouseEnter: a ? void 0 : function (e) {
            e.currentTarget.style.background = y
          },
          onMouseLeave: a ? void 0 : function (e) {
            e.currentTarget.style.background = h
          },
          onMouseDown: a ? void 0 : function (n) {
            t.focus = !0, e.setState({
              currItems: u
            });
            for (var i = 0, a = c.default; i < a.length; i++) {
              var s = a[i];
              n.currentTarget.style[s + "Transform"] = "scale(0.99)"
            }
            r(o), n.currentTarget.style.transform = "scale(0.99)", n.currentTarget.style.background = m
          },
          onMouseUp: a ? void 0 : function (e) {
            t.focus = !1;
            for (var r = 0, o = c.default; r < o.length; r++) {
              var n = o[r];
              e.currentTarget.style[n + "Transform"] = "scale(1)"
            }
            e.currentTarget.style.transform = "scale(1)", e.currentTarget.style.background = h
          }
        }, n)
      }))
    }, t
  }(s.Component);
  u.defaultProps = {
    onChooseItem: function () {}
  }, u.contextTypes = {
    theme: l.object
  }, Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = u
}, function (e, t, r) {
  "use strict";

  function o(e) {
    var t = e.context,
      r = e.props,
      o = r.iconDirection,
      n = r.listItemHeight,
      a = r.style,
      s = r.titleNodeStyle,
      l = r.background,
      c = "right" === o,
      u = t.theme,
      d = u.prepareStyles;
    return {
      root: d(i({
        fontSize: 14,
        overflowX: "hidden",
        overflowY: "auto",
        color: u.baseMediumHigh,
        background: l,
        padding: "0 20px"
      }, d(a))),
      title: d({
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        width: "100%",
        position: "relative",
        fontSize: 14,
        display: "flex",
        height: n,
        flexDirection: "row" + (c ? "" : "-reverse"),
        alignItems: "center",
        justifyContent: c ? "space-between" : "flex-end",
        transition: "all .25s 0s ease-in-out"
      }),
      titleNode: d(i({
        color: "inherit",
        zIndex: 1,
        width: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
      }, s)),
      parent: d({
        transition: "all .25s 0s ease-in-out"
      }),
      bg: {
        position: "absolute",
        top: 0,
        left: "-100%",
        width: "400%",
        height: "100%"
      }
    }
  }
  var n = this && this.__extends || function (e, t) {
      function r() {
        this.constructor = e
      }
      for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    },
    i = this && this.__assign || Object.assign || function (e) {
      for (var t, r = 1, o = arguments.length; r < o; r++) {
        t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      }
      return e
    },
    a = this && this.__rest || function (e, t) {
      var r = {};
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)
        for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && (r[o[n]] = e[o[n]]);
      return r
    },
    s = r(0),
    l = r(1),
    c = r(4),
    u = function (e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.state = {
          init: !0,
          currListItems: t.props.listItems,
          visitedList: null,
          showFocus: t.props.showFocus
        }, t.handelClick = function (e, r) {
          r.expanded = !r.expanded, t.state.visitedList && !r.children && (t.state.visitedList.visited = !1), r.visited = !0, t.setState({
            init: !1,
            visitedList: r.children ? t.state.visitedList : r,
            showFocus: !1
          }), t.props.onChangeList(t.state.currListItems)
        }, t.renderTree = function () {
          var e = t.state,
            r = e.init,
            n = e.currListItems,
            l = e.showFocus,
            u = t.context.theme,
            d = u.prepareStyles,
            f = t.props,
            p = f.iconDirection,
            h = f.listItemHeight,
            y = "right" === p,
            m = o(t),
            g = t.props,
            v = g.childPadding,
            b = g.iconPadding,
            S = function (e, o, n) {
              var f = e.titleNode,
                p = e.expanded,
                g = e.disable,
                w = e.visited,
                x = e.focus,
                k = e.children,
                L = e.hoverStyle,
                C = a(e, ["titleNode", "expanded", "disable", "visited", "focus", "children", "hoverStyle"]),
                M = Array.isArray(k) && 0 !== k.length,
                O = u["Dark" === u.themeName ? "accentDarker1" : "accentLighter1"],
                P = w && !M || w && M && r;
              return s.createElement("div", {
                style: {
                  paddingLeft: n ? y ? 10 : v : void 0
                },
                key: "" + o
              }, s.createElement("div", {
                style: i({
                  cursor: g ? "not-allowed" : void 0,
                  color: g ? u.baseLow : void 0
                }, m.title),
                onMouseEnter: function (e) {
                  var t = e.currentTarget.querySelector(".react-uwp-tree-view-bg"),
                    r = e.currentTarget.querySelector(".react-uwp-tree-view-title");
                  Object.assign(t.style, {
                    background: P ? u.accent : u.baseLow
                  }), Object.assign(r.style, L)
                },
                onMouseLeave: function (e) {
                  var t = e.currentTarget.querySelector(".react-uwp-tree-view-bg"),
                    r = e.currentTarget.querySelector(".react-uwp-tree-view-title");
                  Object.assign(t.style, {
                    background: P ? O : "none"
                  }), Object.assign(r.style, C.style)
                }
              }, s.createElement("div", i({}, C, {
                className: "react-uwp-tree-view-title",
                style: i({
                  paddingLeft: M ? b : 0
                }, m.titleNode, C.style)
              }), f), M && s.createElement(c.default, {
                onClick: g ? void 0 : function (r) {
                  t.handelClick(r, e)
                },
                style: d({
                  cursor: g ? "not-allowed" : "pointer",
                  color: g ? u.baseLow : void 0,
                  width: y ? void 0 : 20,
                  height: h,
                  fontSize: 14,
                  zIndex: 1,
                  transform: "rotateZ(" + (p ? "-180deg" : y ? "0deg" : "-90deg") + ")"
                })
              }, ""), s.createElement("div", i({}, C, {
                style: d(i({
                  transition: "all 0.25s",
                  zIndex: 0,
                  background: x && l ? u.accent : P ? O : "none"
                }, m.bg, C.style)),
                className: "react-uwp-tree-view-bg"
              }))), M && s.createElement("div", {
                style: i({
                  height: p ? "auto" : 0,
                  transition: "all .25s",
                  display: p ? void 0 : "none",
                  overflow: p ? void 0 : "hidden"
                }, m.parent)
              }, p && k.map(function (e, t) {
                return S(e, t, !0)
              })))
            };
          return n.map(function (e, t) {
            return S(e, t)
          })
        }, t
      }
      return n(t, e), t.prototype.componentWillReceiveProps = function (e) {
        this.setState({
          currListItems: e.listItems,
          showFocus: e.showFocus
        })
      }, t.prototype.render = function () {
        var e = this.props,
          t = (e.listItems, e.iconDirection, e.listItemHeight, e.onChangeList, e.rootStyle, e.titleNodeStyle, e.childPadding, e.iconPadding, e.showFocus, e.background, a(e, ["listItems", "iconDirection", "listItemHeight", "onChangeList", "rootStyle", "titleNodeStyle", "childPadding", "iconPadding", "showFocus", "background"])),
          r = this.state.currListItems,
          n = o(this);
        return s.createElement("div", i({}, t, {
          style: n.root
        }), r ? this.renderTree() : null)
      }, t
    }(s.Component);
  u.defaultProps = {
    listItems: [],
    listItemHeight: 40,
    childPadding: 40,
    iconPadding: 10,
    iconDirection: "left",
    onChangeList: function () {},
    rootStyle: {
      width: 400
    },
    background: "none"
  }, u.contextTypes = {
    theme: l.object
  }, Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = u
}, function (e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = ["webkit", "moz", "ms", "o", ""]
}, function (e, t, r) {
  "use strict"
}, function (e, t, r) {
  "use strict";
  var o = r(7);
  t.ThemeType = o.ThemeType, Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o.default("Dark")
}, function (e, t, r) {
  "use strict";

  function o(e) {
    void 0 === e && (e = "*"), n.default([e + " {\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}", e + "::-webkit-scrollbar {\n  -webkit-appearance: none\n}", e + "::-webkit-scrollbar:vertical {\n  width: 6px;\n}", e + "::-webkit-scrollbar:horizontal {\n  height: 6px\n}", e + "::-webkit-scrollbar-thumb {\n  background-color: rgba(95, 95, 95, 0.5);\n}"])
  }
  var n = r(11);
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o
}, function (e, t, r) {
  "use strict";

  function o() {
    var e = location.pathname.split("/"),
      t = /v\d{1,2}.\d{1,2}.\d{1,2}-?\w*\.?\d{0,2}/,
      r = "",
      o = e[1];
    return t.test(o) && (r = "/" + o), r
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o
}, function (e, t, r) {
  "use strict";
  var o = this && this.__extends || function (e, t) {
      function r() {
        this.constructor = e
      }
      for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    },
    n = this && this.__assign || Object.assign || function (e) {
      for (var t, r = 1, o = arguments.length; r < o; r++) {
        t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      }
      return e
    },
    i = this && this.__rest || function (e, t) {
      var r = {};
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)
        for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && (r[o[n]] = e[o[n]]);
      return r
    },
    a = r(0),
    s = function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this
      }
      return o(t, e), t.prototype.render = function () {
        var e = this.props,
          t = e.fill,
          r = i(e, ["fill"]);
        return a.createElement("svg", n({
          viewBox: "0 0 40 40"
        }, r), a.createElement("g", null, a.createElement("g", null, a.createElement("path", {
          style: {
            fill: t
          },
          d: "M27.7,37.9c-1.8,0-4-0.9-6.3-2.7c-3.2-2.5-6.4-6.3-9-10.8C6.8,14.7,5.8,5.1,10,2.7c4.2-2.4,12,3.2,17.6,12.9c5.6,9.7,6.7,19.2,2.4,21.7l0,0C29.3,37.7,28.6,37.9,27.7,37.9z M12.3,3.7c-0.6,0-1.1,0.1-1.5,0.4c-3,1.7-2.5,10,3,19.6c2.5,4.4,5.6,8,8.6,10.4c2.8,2.2,5.3,2.9,6.8,2l0,0c3-1.7,2.5-10-3-19.6C21.5,8.2,15.7,3.7,12.3,3.7z"
        })), a.createElement("g", null, a.createElement("path", {
          style: {
            fill: t
          },
          d: "M12.2,37.9c-0.8,0-1.6-0.2-2.2-0.6c-4.2-2.5-3.2-12,2.4-21.7c2.6-4.5,5.8-8.4,9-10.8c3.4-2.6,6.4-3.3,8.6-2.1c4.2,2.5,3.2,12-2.4,21.7C22.8,32.6,16.6,37.9,12.2,37.9z M27.7,3.7c-1.5,0-3.3,0.8-5.3,2.4c-3,2.3-6.1,6-8.6,10.4c-5.5,9.6-6,17.8-3,19.6c3,1.7,9.9-2.8,15.4-12.4s6-17.8,3-19.6l0,0C28.8,3.8,28.3,3.7,27.7,3.7z"
        })), a.createElement("g", null, a.createElement("path", {
          style: {
            fill: t
          },
          d: "M20,28.7C8.8,28.7,0,24.9,0,20s8.8-8.7,20-8.7s20,3.8,20,8.7S31.2,28.7,20,28.7z M20,12.8C9,12.8,1.6,16.5,1.6,20S9,27.2,20,27.2s18.4-3.7,18.4-7.2S31,12.8,20,12.8z"
        })), a.createElement("g", null, a.createElement("path", {
          style: {
            fill: t
          },
          d: "M20,16.9c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1C16.9,18.3,18.3,16.9,20,16.9"
        }))))
      }, t
    }(a.PureComponent);
  s.defaultProps = {
    fill: "#0078D7",
    width: 40,
    height: 40
  }, Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s
}, function (e, t, r) {
  "use strict";
  var o = r(0);
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = [{
    titleNode: "Get Started"
  }, {
    titleNode: "Styles",
    children: [{
      titleNode: "Color"
    }, {
      titleNode: "Icons"
    }, {
      titleNode: "Layout",
      children: [{
        titleNode: "Intro to app UI design"
      }, {
        titleNode: "Navigation basics",
        children: [{
          titleNode: "History and backwards navigation"
        }, {
          titleNode: "Navigate between two pages"
        }, {
          titleNode: "Show multiple views"
        }]
      }, {
        titleNode: "Command basics",
        children: [{
          titleNode: "Active canvas"
        }]
      }, {
        titleNode: "Content basics"
      }, {
        titleNode: "Screen sizes and breakpoints"
      }, {
        titleNode: "Define page layouts with XAML"
      }, {
        titleNode: "Layout panels",
        children: [{
          titleNode: "Custom panels"
        }, {
          titleNode: "Custom panel example: BoxPanel"
        }]
      }, {
        titleNode: "Alignment, margins, and padding"
      }, {
        titleNode: "Creating app layouts with Grid and StackPanel"
      }]
    }, {
      titleNode: "Motion"
    }, {
      titleNode: "Typography",
      children: [{
        titleNode: "Fonts"
      }, {
        titleNode: "Segoe MDL2 icons"
      }]
    }, {
      titleNode: "Styling Components",
      children: [{
        titleNode: "Use InlineStyle replace the default style"
      }, {
        titleNode: "Custom theme"
      }]
    }]
  }, {
    titleNode: "Components",
    children: [{
      titleNode: "Intro"
    }, {
      titleNode: "Index of components by function"
    }, {
      titleNode: "CommandBar"
    }, {
      titleNode: "AutoSuggestBox"
    }, {
      titleNode: "Button"
    }, {
      titleNode: "CheckBox"
    }, {
      titleNode: "ColorPicker"
    }, {
      titleNode: "Date Pickers",
      children: [{
        titleNode: "CalendarDatePicker"
      }, {
        titleNode: "CalendarView"
      }, {
        titleNode: "DatePicker"
      }, {
        titleNode: "TimePicker"
      }]
    }, {
      titleNode: "Dialogs and flyouts"
    }, {
      titleNode: "Flip view"
    }, {
      titleNode: "Hub"
    }, {
      titleNode: "Hyperlinks"
    }, {
      titleNode: "Image"
    }, {
      titleNode: "Lists",
      children: [{
        titleNode: "List view and grid view"
      }, {
        titleNode: "List view item templates"
      }, {
        titleNode: "Inverted lists"
      }, {
        titleNode: "Pull-to-refresh"
      }, {
        titleNode: "Nested UI"
      }]
    }, {
      titleNode: "Master/details"
    }, {
      titleNode: "Media playback",
      children: [{
        titleNode: "Custom transport controls"
      }]
    }, {
      titleNode: "Menus and context menus"
    }, {
      titleNode: "NavPane"
    }, {
      titleNode: "Progress"
    }, {
      titleNode: "RadioButton"
    }, {
      titleNode: "Scrolling and panning controls"
    }, {
      titleNode: "Search"
    }, {
      titleNode: "SemanticZoom"
    }, {
      titleNode: "Slider"
    }, {
      titleNode: "SplitView"
    }, {
      titleNode: "Tabs and pivot"
    }, {
      titleNode: "Text",
      children: [{
        titleNode: "Labels"
      }, {
        titleNode: "PasswordBox"
      }, {
        titleNode: "RichEditBox"
      }, {
        titleNode: "Rich text block"
      }, {
        titleNode: "Text block"
      }, {
        titleNode: "TextBox"
      }]
    }, {
      titleNode: "Tiles, badges, and notifications",
      children: [{
        titleNode: "Tiles"
      }, {
        titleNode: "Adaptive tiles",
        children: [{
          titleNode: "Adaptive tiles schema"
        }]
      }, {
        titleNode: "Tile and icon asset guidelines"
      }, {
        titleNode: "Special tile templates"
      }, {
        titleNode: "Adaptive and interactive toast notifications"
      }, {
        titleNode: "Badge notifications"
      }, {
        titleNode: "Notifications visualizer"
      }, {
        titleNode: "Notification delivery methods"
      }, {
        titleNode: "Local tile notfications"
      }, {
        titleNode: "Periodic notifications"
      }, {
        titleNode: "Windows Push Notification Services (WNS)",
        children: [{
          titleNode: "Code generated by the push notification wizard"
        }]
      }, {
        titleNode: "Raw notifications"
      }]
    }, {
      titleNode: "Toggle"
    }, {
      titleNode: "Tooltip"
    }]
  }, {
    titleNode: "Resources"
  }, {
    titleNode: "Examples"
  }, {
    titleNode: o.createElement("a", {
      style: {
        color: "inherit",
        textDecoration: "underline"
      },
      href: "http://fluent.microsoft.com/",
      target: "_blank"
    }, "Fluent Design System")
  }, {
    titleNode: o.createElement("a", {
      style: {
        color: "inherit",
        textDecoration: "underline"
      },
      href: "https://docs.microsoft.com/en-us/windows/uwp/design-downloads/",
      target: "_blank"
    }, "Design Toolkits")
  }]
}, function (e, t, r) {
  "use strict";

  function o(e) {
    void 0 === e && (e = "/");
    var t = y.default,
      r = "/" === e,
      o = r ? "" : "/" + e,
      n = location.pathname.split("/").map(function (e) {
        return e.toLowerCase()
      }),
      i = function (e) {
        if (Array.isArray(e))
          for (var t = 0, r = e; t < r.length; t++) {
            var a = r[t];
            a.parentUrl = o, i(a)
          } else if ("string" == typeof e.titleNode) {
            var s = e.titleNode.toLowerCase().replace(/\s/gim, "-");
            n.includes(s) && (e.expanded = !0, n.slice(-1)[0] === s && (e.visited = !0, m !== e && (m.visited = !1, m = e)));
            var l = e.parentUrl + "/" + e.titleNode.toLowerCase().replace(/\s/gim, "-");
            e.style = {
              cursor: "pointer",
              textDecoration: "inherit"
            }, e.onClick = function () {
              c.browserHistory.push(l)
            }, e.hoverStyle = {
              textDecoration: "underline"
            }, e.children && e.children.forEach(function (e) {
              e.parentUrl = l, i(e)
            })
          }
      };
    i(t)
  }

  function n(e) {
    var t = e.context.theme,
      r = e.props.style;
    return {
      root: (0, t.prepareStyles)(a({
        fontSize: 14,
        color: t.baseMediumHigh,
        background: t.altMediumHigh
      }, r))
    }
  }
  var i = this && this.__extends || function (e, t) {
      function r() {
        this.constructor = e
      }
      for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    },
    a = this && this.__assign || Object.assign || function (e) {
      for (var t, r = 1, o = arguments.length; r < o; r++) {
        t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      }
      return e
    },
    s = this && this.__rest || function (e, t) {
      var r = {};
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)
        for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && (r[o[n]] = e[o[n]]);
      return r
    },
    l = r(0),
    c = r(16),
    u = r(3),
    d = r(12),
    f = r(21),
    p = r(28),
    h = r(4),
    y = r(35),
    m = {},
    g = function (e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.state = {
          showFocus: !0,
          listItems: y.default
        }, t.searchTimeout = null, t.handleChangeValue = function (e) {
          var r = t.state.listItems;
          clearTimeout(t.searchTimeout);
          var o = function (t, n) {
            t.forEach(function (t, i) {
              if (t.prevIndexArr || (t.prevIndexArr = n.concat([i])), e && ("string" == typeof t.titleNode ? t.titleNode : t.titleNode.props.children).toLowerCase().includes(e.toLowerCase()))
                for (var a = r, s = t.prevIndexArr.length, l = 0; l < s; l++) {
                  var c = a[t.prevIndexArr[l]];
                  if (c.disable) return;
                  c.expanded = !0, c.children || (c.focus = !0), a = c.children
                } else t.expanded = !1, t.children || (t.focus = !1);
              t.children && o(t.children, t.prevIndexArr)
            })
          };
          t.searchTimeout = setTimeout(function () {
            o(r, []), t.setState({
              listItems: r,
              showFocus: !0
            })
          }, 200)
        }, t.handleChangeRenderContentWidth = function (e, r) {
          t.setState({
            renderContentWidth: e,
            screenType: r
          })
        }, t
      }
      return i(t, e), t.prototype.render = function () {
        o(this.props.path);
        var e = this.props,
          t = e.children,
          r = (s(e, ["children"]), this.state),
          i = r.listItems,
          a = r.showFocus,
          c = r.renderContentWidth,
          u = r.screenType,
          y = this.context.theme,
          m = (n(this), "phone" !== u && "tablet" !== u);
        return l.createElement(d.default, {
          onChangeRenderContentWidth: this.handleChangeRenderContentWidth
        }, l.createElement("div", {
          style: y.prepareStyles({
            display: "flex",
            flexDirection: "row",
            width: c,
            minHeight: "calc(100vh - 360px)",
            margin: "0 auto"
          })
        }, l.createElement("div", {
          style: {
            width: 320,
            padding: "10px 0",
            display: m ? void 0 : "none"
          }
        }, l.createElement(f.default, {
          background: "none",
          style: {
            height: 32,
            fontSize: 16,
            width: "100%"
          },
          iconSize: 32,
          placeholder: "Search Docs...",
          onChangeValue: this.handleChangeValue
        }), l.createElement(p.default, {
          listItems: i,
          listItemHeight: 32,
          childPadding: 20,
          iconPadding: 2,
          showFocus: a,
          titleNodeStyle: {
            fontSize: 14
          },
          style: {
            maxHeight: "100%"
          }
        })), l.createElement(h.default, {
          style: {
            display: m ? "none" : "flex",
            position: "fixed",
            top: 12,
            left: 12,
            width: 48,
            height: 48,
            fontSize: 24,
            cursor: "pointer"
          },
          hoverStyle: {
            background: y.baseLow
          }
        }, "GlobalNavButton"), l.createElement("div", {
          style: y.prepareStyles({
            width: m ? "calc(100% - 320px)" : "100%",
            padding: "0 10px"
          })
        }, t)))
      }, t
    }(l.Component);
  g.defaultProps = {
    path: "/"
  }, g.contextTypes = {
    theme: u.object
  }, Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = g
}, function (e, t, r) {
  "use strict";

  function o(e) {
    var t = e.context.theme,
      r = e.props,
      o = r.footerHeight,
      n = r.renderContentWidth,
      a = r.style,
      s = t.prepareStyles;
    return {
      root: s(i({
        fontSize: 14,
        color: t.baseHigh,
        background: t.altHigh,
        minHeight: o
      }, a)),
      content: s(i({
        width: n,
        margin: "0 auto",
        padding: "12px 0",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }, a)),
      links: {
        display: "inline-block",
        margin: 40,
        verticalAlign: "top"
      },
      openSource: {
        fontSize: 12,
        color: t.baseHigh,
        alignSelf: "flex-end",
        margin: 40
      }
    }
  }
  var n = this && this.__extends || function (e, t) {
      function r() {
        this.constructor = e
      }
      for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    },
    i = this && this.__assign || Object.assign || function (e) {
      for (var t, r = 1, o = arguments.length; r < o; r++) {
        t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      }
      return e
    },
    a = this && this.__rest || function (e, t) {
      var r = {};
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)
        for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && (r[o[n]] = e[o[n]]);
      return r
    },
    s = r(0),
    l = r(3),
    c = r(38),
    u = function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this
      }
      return n(t, e), t.prototype.render = function () {
        var e = this.props,
          t = (e.footerHeight, e.renderContentWidth, a(e, ["footerHeight", "renderContentWidth"])),
          r = (this.context.theme, o(this));
        return s.createElement("footer", i({}, t, {
          style: r.root
        }), s.createElement("div", {
          style: r.content
        }, s.createElement("div", null, s.createElement(c.default, {
          style: r.links,
          title: "Community Resources",
          links: [{
            children: "UWP Design",
            href: "https://developer.microsoft.com/en-us/windows/apps/design"
          }, {
            children: "Windows Dev Center",
            href: "https://developer.microsoft.com/en-us/windows"
          }, {
            children: "MSDN Forums",
            href: "https://msdn.microsoft.com/en-us/default.aspx"
          }, {
            children: "Fluent Design System",
            href: "http://fluent.microsoft.com/"
          }, {
            children: "Fabric",
            href: "https://dev.office.com/fabric"
          }]
        }), s.createElement(c.default, {
          style: r.links,
          title: "Flow React-UWP",
          links: [{
            children: "Github",
            href: "https://github.com/myxvisual/react-uwp"
          }]
        })), s.createElement("a", {
          href: "https://github.com/myxvisual/react-uwp/blob/master/LICENSE",
          target: "_blank",
          style: r.openSource
        }, "Free & Open Source (MIT)")))
      }, t
    }(s.Component);
  u.defaultProps = {
    footerHeight: 320
  }, u.contextTypes = {
    theme: l.object
  }, Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = u
}, function (e, t, r) {
  "use strict";

  function o(e) {
    var t = e.context.theme,
      r = e.props.style;
    return {
      root: (0, t.prepareStyles)(i({
        fontSize: 14,
        color: t.baseMediumHigh,
        background: t.altMediumHigh
      }, r)),
      title: {
        fontSize: 18,
        fontWeight: "lighter",
        color: t.baseHigh
      },
      link: {
        display: "block",
        fontSize: 12,
        margin: "16px 0",
        fontWeight: "lighter",
        color: t.baseMediumHigh,
        textDecoration: "none"
      }
    }
  }
  var n = this && this.__extends || function (e, t) {
      function r() {
        this.constructor = e
      }
      for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    },
    i = this && this.__assign || Object.assign || function (e) {
      for (var t, r = 1, o = arguments.length; r < o; r++) {
        t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      }
      return e
    },
    a = this && this.__rest || function (e, t) {
      var r = {};
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)
        for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && (r[o[n]] = e[o[n]]);
      return r
    },
    s = r(0),
    l = r(3),
    c = function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this
      }
      return n(t, e), t.prototype.render = function () {
        var e = this.props,
          t = e.title,
          r = e.links,
          n = a(e, ["title", "links"]),
          l = (this.context.theme, o(this));
        return s.createElement("div", i({}, n, {
          style: l.root
        }), s.createElement("p", {
          style: l.title
        }, t), s.createElement("div", {
          style: {
            margin: "8px 0"
          }
        }, r.map(function (e, t) {
          return s.createElement("a", i({
            style: l.link,
            target: "_blank"
          }, e, {
            key: "" + t
          }), e.children)
        })))
      }, t
    }(s.Component);
  c.contextTypes = {
    theme: l.object
  }, Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = c
}, function (e, t, r) {
  "use strict";

  function o(e) {
    var t = e.context.theme,
      r = e.props,
      o = r.style,
      n = r.renderContentWidth,
      a = r.headerHeight,
      s = t.prepareStyles;
    return {
      root: s(i({
        fontSize: 14,
        color: t.baseHigh,
        background: t.altHigh,
        width: "100%",
        height: a,
        position: "fixed",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        left: 0,
        top: 0,
        zIndex: 20
      }, o)),
      content: s({
        display: "flex",
        flexDirection: "row",
        width: n,
        height: "100%"
      }),
      logo: s({
        display: "flex",
        flex: "0 0 auto",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 12,
        color: t.accent,
        fontSize: 15,
        height: a,
        textDecoration: "none"
      })
    }
  }
  var n = this && this.__extends || function (e, t) {
      function r() {
        this.constructor = e
      }
      for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    },
    i = this && this.__assign || Object.assign || function (e) {
      for (var t, r = 1, o = arguments.length; r < o; r++) {
        t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      }
      return e
    },
    a = this && this.__rest || function (e, t) {
      var r = {};
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)
        for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && (r[o[n]] = e[o[n]]);
      return r
    },
    s = r(0),
    l = r(3),
    c = r(40),
    u = r(34),
    d = function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this
      }
      return n(t, e), t.prototype.render = function () {
        var e = this.props,
          t = (e.renderContentWidth, e.headerHeight),
          r = e.docVersion,
          n = a(e, ["renderContentWidth", "headerHeight", "docVersion"]),
          l = this.context.theme,
          d = o(this);
        return s.createElement("header", {
          style: {
            width: "100%",
            height: t
          }
        }, s.createElement("div", i({}, n, {
          style: d.root
        }), s.createElement("div", {
          style: d.content
        }, s.createElement("a", {
          style: d.logo,
          href: r + "/"
        }, s.createElement(u.default, {
          fill: l.accent
        }), s.createElement("p", {
          style: {
            marginLeft: 2
          }
        }, "React UWP")), s.createElement("div", {
          style: {
            marginLeft: 20,
            height: "100%"
          }
        }, s.createElement(c.default, {
          headerHeight: t,
          href: r + "/get-started"
        }, "Get Started"), s.createElement(c.default, {
          headerHeight: t,
          href: r + "/components"
        }, "Documentation"), s.createElement(c.default, {
          headerHeight: t,
          href: r + "/resources"
        }, "Resources"), s.createElement(c.default, {
          headerHeight: t,
          href: r + "/examples"
        }, "Examples")))))
      }, t
    }(s.Component);
  d.defaultProps = {
    headerHeight: 60
  }, d.contextTypes = {
    theme: l.object
  }, Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = d
}, function (e, t, r) {
  "use strict";

  function o(e) {
    var t = e.context.theme,
      r = e.props,
      o = r.style,
      n = r.headerHeight,
      a = e.state.hovered;
    return {
      root: (0, t.prepareStyles)(i({
        display: "inline-block",
        lineHeight: n + "px",
        fontSize: 15,
        color: t.baseMediumHigh,
        background: a ? t.baseLow : "none",
        textDecoration: a ? "underline" : "none",
        padding: "0 26px",
        cursor: "pointer",
        transition: "all .25s"
      }, o))
    }
  }
  var n = this && this.__extends || function (e, t) {
      function r() {
        this.constructor = e
      }
      for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    },
    i = this && this.__assign || Object.assign || function (e) {
      for (var t, r = 1, o = arguments.length; r < o; r++) {
        t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      }
      return e
    },
    a = this && this.__rest || function (e, t) {
      var r = {};
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)
        for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && (r[o[n]] = e[o[n]]);
      return r
    },
    s = r(0),
    l = r(3),
    c = function () {},
    u = function (e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.state = {}, t.handleMouseEnter = function (e) {
          t.state.hovered || t.setState({
            hovered: !0
          }), t.props.onMouseEnter(e)
        }, t.handleMouseLeave = function (e) {
          t.state.hovered && t.setState({
            hovered: !1
          }), t.props.onMouseLeave(e)
        }, t
      }
      return n(t, e), t.prototype.render = function () {
        var e = this.props,
          t = (e.headerHeight, e.children),
          r = a(e, ["headerHeight", "children"]),
          n = (this.context.theme, o(this));
        return s.createElement("a", i({}, r, {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          style: n.root
        }), t)
      }, t
    }(s.Component);
  u.defaultProps = {
    onMouseEnter: c,
    onMouseLeave: c
  }, u.contextTypes = {
    theme: l.object
  }, Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = u
}, function (e, t, r) {
  "use strict";

  function o(e) {
    return void 0 === e && (e = "/"), t.WrapperWithPath = n = function () {
      return function (t) {
        function r() {
          return null !== t && t.apply(this, arguments) || this
        }
        return i(r, t), r.prototype.render = function () {
          var t = this.props.children;
          return a.createElement(l.default, {
            autoSaveTheme: !0
          }, a.createElement(u.default, {
            path: e
          }, t))
        }, r
      }(a.Component)
    }(), {
      path: e,
      indexRoute: {
        getComponent: function (e, t) {
          r.e(0).then(function (e) {
            var o = r(93).default;
            t(null, function () {
              return a.createElement(d, null, a.createElement(o, null))
            })
          }.bind(null, r)).catch(r.oe)
        }
      },
      childRoutes: [{
        component: n,
        path: "components",
        childRoutes: [{
          path: "intro",
          getComponent: function (e, t) {
            r.e(6).then(function (e) {
              t(null, r(92).default)
            }.bind(null, r)).catch(r.oe)
          }
        }, {
          path: "index-of-components-by-function",
          getComponent: function (e, t) {
            r.e(5).then(function (e) {
              t(null, r(91).default)
            }.bind(null, r)).catch(r.oe)
          }
        }, {
          path: "CommandBar",
          getComponent: function (e, t) {
            r.e(3).then(function (e) {
              t(null, r(90).default)
            }.bind(null, r)).catch(r.oe)
          }
        }, {
          path: "AutoSuggestBox",
          getComponent: function (e, t) {
            r.e(1).then(function (e) {
              t(null, r(86).default)
            }.bind(null, r)).catch(r.oe)
          }
        }, {
          path: "Button",
          getComponent: function (e, t) {
            r.e(2).then(function (e) {
              t(null, r(87).default)
            }.bind(null, r)).catch(r.oe)
          }
        }, {
          path: "CheckBox",
          getComponent: function (e, t) {
            r.e(4).then(function (e) {
              t(null, r(88).default)
            }.bind(null, r)).catch(r.oe)
          }
        }, {
          path: "ColorPicker",
          getComponent: function (e, t) {
            r.e(8).then(function (e) {
              t(null, r(89).default)
            }.bind(null, r)).catch(r.oe)
          }
        }]
      }, {
        path: "styles",
        component: n,
        childRoutes: [{
          path: "Icons",
          getComponent: function (e, t) {
            r.e(7).then(function (e) {
              t(null, r(95).default)
            }.bind(null, r)).catch(r.oe)
          }
        }]
      }, {
        path: "*",
        getComponent: function (e, t) {
          r.e(9).then(function (e) {
            var o = r(94).default;
            t(null, function () {
              return a.createElement(d, null, a.createElement(o, null))
            })
          }.bind(null, r)).catch(r.oe)
        }
      }]
    }
  }
  var n, i = this && this.__extends || function (e, t) {
      function r() {
        this.constructor = e
      }
      for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    },
    a = r(0),
    s = r(16),
    l = r(22),
    c = r(12),
    u = r(36);
  t.WrapperWithPath = n;
  var d = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this
    }
    return i(t, e), t.prototype.render = function () {
      var e = this.props.children;
      return a.createElement(l.default, {
        autoSaveTheme: !0
      }, a.createElement(c.default, null, e))
    }, t
  }(a.Component);
  t.getRoutes = o;
  var f, p = location.pathname.split("/"),
    h = /v\d{1,2}.\d{1,2}.\d{1,2}-?\w*\.?\d{0,2}/,
    y = p[1];
  h.test(y) && (f = y);
  var m = o(f);
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function () {
    return a.createElement(s.Router, {
      history: s.browserHistory,
      routes: m
    })
  }
}, function (e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    CheckMarkLegacy: "",
    CheckboxFillLegacy: "",
    CheckboxLegacy: "",
    CheckboxIndeterminateLegacy: "",
    CheckboxCompositeReversedLegacy: "",
    HeartLegacy: "",
    HeartBrokenLegacy: "",
    CheckMarkZeroWidthLegacy: "",
    CheckboxFillZeroWidthLegacy: "",
    RatingStarFillZeroWidthLegacy: "",
    HeartFillZeroWidthLegacy: "",
    HeartBrokenZeroWidthLegacy: "",
    ScrollChevronLeftLegacy: "",
    ScrollChevronRightLegacy: "",
    ScrollChevronUpLegacy: "",
    ScrollChevronDownLegacy: "",
    ChevronLeft3Legacy: "",
    ChevronRight3Legacy: "",
    ChevronUp3Legacy: "",
    ChevronDown3Legacy: "",
    ScrollChevronLeftBoldLegacy: "",
    ScrollChevronRightBoldLegacy: "",
    ScrollChevronUpBoldLegacy: "",
    ScrollChevronDownBoldLegacy: "",
    RevealPasswordLegacy: "",
    EaseOfAccessLegacy: "",
    CheckmarkListviewLegacy: "",
    RatingStarFillReducedPaddingHTMLLegacy: "",
    KeyboardStandardLegacy: "",
    KeyboardSplitLegacy: "",
    SearchboxLegacy: "",
    ChevronLeft1Legacy: "",
    ChevronRight1Legacy: "",
    ChevronUp1Legacy: "",
    ChevronDown1Legacy: "",
    ChevronLeft2Legacy: "",
    ChevronRight2Legacy: "",
    ChevronUp2Legacy: "",
    ChevronDown2Legacy: "",
    ChevronLeft4Legacy: "",
    ChevronRight4Legacy: "",
    ChevronUp4Legacy: "",
    ChevronDown4Legacy: "",
    CheckboxCompositeLegacy: "",
    HeartFillLegacy: "",
    BackBttnArrow42Legacy: "",
    BackBttnMirroredArrow42Legacy: "",
    BackBttnMirroredArrow20Legacy: "",
    ArrowHTMLLegacyMirrored: "",
    RatingStarFillLegacy: "",
    RatingStarFillSmallLegacy: "",
    SemanticZoomLegacy: "",
    BackBttnArrow20Legacy: "",
    ArrowHTMLLegacy: "",
    ChevronFlipLeftLegacy: "",
    ChevronFlipRightLegacy: "",
    ChevronFlipUpLegacy: "",
    ChevronFlipDownLegacy: "",
    CheckmarkMenuLegacy: "",
    PreviousLegacy: "",
    NextLegacy: "",
    PlayLegacy: "",
    PauseLegacy: "",
    EditLegacy: "",
    SaveLegacy: "",
    ClearLegacy: "",
    DeleteLegacy: "",
    RemoveLegacy: "",
    AddLegacy: "",
    CancelLegacy: "",
    AcceptLegacy: "",
    MoreLegacy: "",
    RedoLegacy: "",
    UndoLegacy: "",
    HomeLegacy: "",
    UpLegacy: "",
    ForwardLegacy: "",
    BackLegacy: "",
    FavoriteLegacy: "",
    CameraLegacy: "",
    SettingsLegacy: "",
    VideoLegacy: "",
    SyncLegacy: "",
    DownloadLegacy: "",
    MailLegacy: "",
    FindLegacy: "",
    HelpLegacy: "",
    UploadLegacy: "",
    EmojiLegacy: "",
    TwoPageLegacy: "",
    LeaveChatLegacy: "",
    MailForwardLegacy: "",
    ClockLegacy: "",
    SendLegacy: "",
    CropLegacy: "",
    RotateCameraLegacy: "",
    PeopleLegacy: "",
    ClosePaneLegacy: "",
    OpenPaneLegacy: "",
    WorldLegacy: "",
    FlagLegacy: "",
    PreviewLinkLegacy: "",
    GlobeLegacy: "",
    TrimLegacy: "",
    AttachCameraLegacy: "",
    ZoomInLegacy: "",
    BookmarksLegacy: "",
    DocumentLegacy: "",
    ProtectedDocumentLegacy: "",
    PageFillLegacy: "",
    MultiSelectLegacy: "",
    CommentLegacy: "",
    MailFillLegacy: "",
    ContactInfoLegacy: "",
    HangUpLegacy: "",
    ViewAllLegacy: "",
    MapPinLegacy: "",
    PhoneLegacy: "",
    VideoChatLegacy: "",
    SwitchLegacy: "",
    ContactLegacy: "",
    RenameLegacy: "",
    ExpandTileLegacy: "",
    ReduceTileLegacy: "",
    PinLegacy: "",
    MusicInfoLegacy: "",
    GoLegacy: "",
    KeyBoardLegacy: "",
    DockLeftLegacy: "",
    DockRightLegacy: "",
    DockBottomLegacy: "",
    RemoteLegacy: "",
    RefreshLegacy: "",
    RotateLegacy: "",
    ShuffleLegacy: "",
    ListLegacy: "",
    ShopLegacy: "",
    SelectAllLegacy: "",
    OrientationLegacy: "",
    ImportLegacy: "",
    ImportAllLegacy: "",
    ShowAllFiles3Legacy: "",
    ShowAllFiles1Legacy: "",
    ShowAllFilesLegacy: "",
    BrowsePhotosLegacy: "",
    WebcamLegacy: "",
    PictureLegacy: "",
    SaveLocalLegacy: "",
    CaptionLegacy: "",
    StopLegacy: "",
    ShowResultsLegacy: "",
    VolumeLegacy: "",
    RepairLegacy: "",
    MessageLegacy: "",
    PageLegacy: "",
    CalendarDayLegacy: "",
    CalendarWeekLegacy: "",
    CalendarLegacy: "",
    CharactersLegacy: "",
    MailReplyAllLegacy: "",
    ReadLegacy: "",
    LinkLegacy: "",
    AccountsLegacy: "",
    ShowBccLegacy: "",
    HideBccLegacy: "",
    CutLegacy: "",
    AttachLegacy: "",
    PasteLegacy: "",
    FilterLegacy: "",
    CopyLegacy: "",
    Emoji2Legacy: "",
    ImportantLegacy: "",
    MailReplyLegacy: "",
    SlideshowLegacy: "",
    SortLegacy: "",
    ListLegacyMirrored: "",
    ExpandTileLegacyMirrored: "",
    ReduceTileLegacyMirrored: "",
    ManageLegacy: "",
    AllAppsLegacy: "",
    DisconnectDriveLegacy: "",
    MapDriveLegacy: "",
    NewWindowLegacy: "",
    OpenWithLegacy: "",
    ContactPresenceLegacy: "",
    PriorityLegacy: "",
    UploadSkyDriveLegacy: "",
    GotoTodayLegacy: "",
    FontLegacy: "",
    FontColorLegacy: "",
    Contact2Legacy: "",
    FolderLegacy: "",
    AudioLegacy: "",
    PlaceFolderLegacy: "",
    ViewLegacy: "",
    SetlockScreenLegacy: "",
    SetTileLegacy: "",
    CCJapanLegacy: "",
    CCEuroLegacy: "",
    CCLegacy: "",
    StopSlideshowLegacy: "",
    PermissionsLegacy: "",
    HighlightLegacy: "",
    DisableUpdatesLegacy: "",
    UnfavoriteLegacy: "",
    UnpinLegacy: "",
    OpenLocalLegacy: "",
    MuteLegacy: "",
    ItalicLegacy: "",
    UnderlineLegacy: "",
    BoldLegacy: "",
    MoveToFolderLegacy: "",
    LikeDislikeLegacy: "",
    DislikeLegacy: "",
    LikeLegacy: "",
    AlignRightLegacy: "",
    AlignCenterLegacy: "",
    AlignLeftLegacy: "",
    ZoomLegacy: "",
    ZoomOutLegacy: "",
    OpenFileLegacy: "",
    OtherUserLegacy: "",
    AdminLegacy: "",
    MailForwardLegacyMirrored: "",
    GoLegacyMirrored: "",
    DockLeftLegacyMirrored: "",
    DockRightLegacyMirrored: "",
    ImportLegacyMirrored: "",
    ImportAllLegacyMirrored: "",
    MailReplyLegacyMirrored: "",
    ItalicCLegacy: "",
    BoldGLegacy: "",
    UnderlineSLegacy: "",
    BoldFLegacy: "",
    ItalicKLegacy: "",
    UnderlineULegacy: "",
    ItalicILegacy: "",
    BoldNLegacy: "",
    UnderlineRussianLegacy: "",
    BoldRussionLegacy: "",
    FontStyleKoreanLegacy: "",
    UnderlineLKoreanLegacy: "",
    ItalicKoreanLegacy: "",
    BoldKoreanLegacy: "",
    FontColorKoreanLegacy: "",
    ClosePaneLegacyMirrored: "",
    OpenPaneLegacyMirrored: "",
    EditLegacyMirrored: "",
    StreetLegacy: "",
    MapLegacy: "",
    ClearSelectionLegacy: "",
    FontDecreaseLegacy: "",
    FontIncreaseLegacy: "",
    FontSizeLegacy: "",
    CellPhoneLegacy: "",
    ReshareLegacy: "",
    TagLegacy: "",
    RepeatOneLegacy: "",
    RepeatAllLegacy: "",
    OutlineStarLegacy: "",
    SolidStarLegacy: "",
    CalculatorLegacy: "",
    DirectionsLegacy: "",
    LocationLegacy: "",
    LibraryLegacy: "",
    PhoneBookLegacy: "",
    MemoLegacy: "",
    MicrophoneLegacy: "",
    PostUpdateLegacy: "",
    BackToWindowLegacy: "",
    FullScreenLegacy: "",
    NewFolderLegacy: "",
    CalendarReplyLegacy: "",
    CalendarLegacyMirrored: "",
    UnsyncFolderLegacy: "",
    ReportHackedLegacy: "",
    SyncFolderLegacy: "",
    BlockContactLegacy: "",
    SwitchAppsLegacy: "",
    AddFriendLegacy: "",
    TouchPointerLegacy: "",
    GoToStartLegacy: "",
    ZeroBarsLegacy: "",
    OneBarLegacy: "",
    TwoBarsLegacy: "",
    ThreeBarsLegacy: "",
    FourBarsLegacy: "",
    ItalicRussianLegacy: "",
    AllAppsLegacyMirrored: "",
    OpenWithLegacyMirrored: "",
    BookmarksLegacyMirrored: "",
    MultiSelectLegacyMirrored: "",
    ShowResultsLegacyMirrored: "",
    MailReplyAllLegacyMirrored: "",
    HelpLegacyMirrored: "",
    ClearSelectionLegacyMirrored: "",
    RecordLegacy: "",
    LockLegacy: "",
    UnlockLegacy: "",
    DownLegacy: "",
    CommentInlineLegacy: "",
    FavoriteInlineLegacy: "",
    LikeInlineLegacy: "",
    VideoInlineLegacy: "",
    MailMessageLegacy: "",
    PC1Legacy: "",
    DevicesLegacy: "",
    RatingStarLegacy: "",
    ChevronDownSmLegacy: "",
    ReplyLegacy: "",
    Favorite2Legacy: "",
    Unfavorite2Legacy: "",
    MobileContactLegacy: "",
    BlockedLegacy: "",
    TypingIndicatorLegacy: "",
    PresenceChickletVideoLegacy: "",
    PresenceChickletLegacy: "",
    ChevronRightSmLegacy: "",
    ChevronLeftSmLegacy: "",
    SaveAsLegacy: "",
    DecreaseIndentLegacy: "",
    IncreaseIndentLegacy: "",
    BulletedListLegacy: "",
    ScanLegacy: "",
    PreviewLegacy: "",
    DecreaseIndentLegacyMirrored: "",
    IncreaseIndentLegacyMirrored: "",
    BulletedListLegacyMirrored: "",
    PlayOnLegacy: "",
    ResolutionLegacy: "",
    LengthLegacy: "",
    LayoutLegacy: "",
    Contact3Legacy: "",
    TypeLegacy: "",
    ColorLegacy: "",
    SizeLegacy: "",
    ReturnToWindowLegacy: "",
    OpenInNewWindowLegacy: "",
    PrintLegacy: "",
    Printer3DLegacy: "",
    GlobalNavButton: "",
    Wifi: "",
    Bluetooth: "",
    Connect: "",
    InternetSharing: "",
    VPN: "",
    Brightness: "",
    MapPin: "",
    QuietHours: "",
    Airplane: "",
    Tablet: "",
    QuickNote: "",
    RememberedDevice: "",
    ChevronDown: "",
    ChevronUp: "",
    Edit: "",
    Add: "",
    Cancel: "",
    More: "",
    Settings: "",
    Video: "",
    Mail: "",
    People: "",
    Phone: "",
    Pin: "",
    Shop: "",
    Stop: "",
    Link: "",
    Filter: "",
    AllApps: "",
    Zoom: "",
    ZoomOut: "",
    Microphone: "",
    Search: "",
    Camera: "",
    Attach: "",
    Send: "",
    SendFill: "",
    WalkSolid: "",
    InPrivate: "",
    FavoriteList: "",
    PageSolid: "",
    Forward: "",
    Back: "",
    Refresh: "",
    Share: "",
    Lock: "",
    ReportHacked: "",
    FavoriteStar: "",
    FavoriteStarFill: "",
    Remove: "",
    Checkbox: "",
    CheckboxComposite: "",
    CheckboxFill: "",
    CheckboxIndeterminate: "",
    CheckboxCompositeReversed: "",
    CheckMark: "",
    BackToWindow: "",
    FullScreen: "",
    ResizeTouchLarger: "",
    ResizeTouchSmaller: "",
    ResizeMouseSmall: "",
    ResizeMouseMedium: "",
    ResizeMouseWide: "",
    ResizeMouseTall: "",
    ResizeMouseLarge: "",
    SwitchUser: "",
    Print: "",
    Up: "",
    Down: "",
    OEM: "",
    Delete: "",
    Save: "",
    Mute: "",
    BackSpaceQWERTY: "",
    ReturnKey: "",
    UpArrowShiftKey: "",
    Cloud: "",
    Flashlight: "",
    RotationLock: "",
    CommandPrompt: "",
    SIPMove: "",
    SIPUndock: "",
    SIPRedock: "",
    EraseTool: "",
    UnderscoreSpace: "",
    GripperTool: "",
    Dialpad: "",
    PageLeft: "",
    PageRight: "",
    MultiSelect: "",
    KeyboardLeftHanded: "",
    KeyboardRightHanded: "",
    KeyboardClassic: "",
    KeyboardSplit: "",
    Volume: "",
    Play: "",
    Pause: "",
    ChevronLeft: "",
    ChevronRight: "",
    InkingTool: "",
    Emoji2: "",
    GripperBarHorizontal: "",
    System: "",
    Personalize: "",
    Devices: "",
    SearchAndApps: "",
    Globe: "",
    TimeLanguage: "",
    EaseOfAccess: "",
    UpdateRestore: "",
    HangUp: "",
    ContactInfo: "",
    Unpin: "",
    Contact: "",
    Memo: "",
    Paste: "",
    PhoneBook: "",
    LEDLight: "",
    Error: "",
    GripperBarVertical: "",
    Unlock: "",
    Slideshow: "",
    Calendar: "",
    GripperResize: "",
    Megaphone: "",
    Trim: "",
    NewWindow: "",
    SaveLocal: "",
    Color: "",
    DataSense: "",
    SaveAs: "",
    Light: "",
    AspectRatio: "",
    DataSenseBar: "",
    Redo: "",
    Undo: "",
    Crop: "",
    OpenWith: "",
    Rotate: "",
    SetlockScreen: "",
    MapPin2: "",
    Package: "",
    Warning: "",
    ReadingList: "",
    Education: "",
    ShoppingCart: "",
    Train: "",
    Flag: "",
    Page: "",
    Multitask: "",
    BrowsePhotos: "",
    HalfStarLeft: "",
    HalfStarRight: "",
    Record: "",
    TouchPointer: "",
    LangJPN: "",
    Ferry: "",
    Highlight: "",
    ActionCenterNotification: "",
    PowerButton: "",
    ResizeTouchNarrower: "",
    ResizeTouchShorter: "",
    DrivingMode: "",
    RingerSilent: "",
    OtherUser: "",
    Admin: "",
    CC: "",
    SDCard: "",
    CallForwarding: "",
    SettingsDisplaySound: "",
    TVMonitor: "",
    Speakers: "",
    Headphone: "",
    DeviceLaptopPic: "",
    DeviceLaptopNoPic: "",
    DeviceMonitorRightPic: "",
    DeviceMonitorLeftPic: "",
    DeviceMonitorNoPic: "",
    Game: "",
    HorizontalTabKey: "",
    StreetsideSplitMinimize: "",
    StreetsideSplitExpand: "",
    Car: "",
    Walk: "",
    Bus: "",
    TiltUp: "",
    TiltDown: "",
    RotateMapRight: "",
    RotateMapLeft: "",
    Home: "",
    ParkingLocation: "",
    MapCompassTop: "",
    MapCompassBottom: "",
    IncidentTriangle: "",
    Touch: "",
    MapDirections: "",
    StartPoint: "",
    StopPoint: "",
    EndPoint: "",
    History: "",
    Location: "",
    MapLayers: "",
    Accident: "",
    Work: "",
    Construction: "",
    Recent: "",
    Bank: "",
    DownloadMap: "",
    InkingToolFill2: "",
    HighlightFill2: "",
    EraseToolFill: "",
    EraseToolFill2: "",
    Dictionary: "",
    DictionaryAdd: "",
    ToolTip: "",
    ChromeBack: "",
    ProvisioningPackage: "",
    AddRemoteDevice: "",
    Ethernet: "",
    " ShareBroadband": "",
    DirectAccess: "",
    " DialUp": "",
    DefenderApp: "",
    BatteryCharging9: "",
    Battery10: "",
    Pinned: "",
    PinFill: "",
    PinnedFill: "",
    PeriodKey: "",
    PuncKey: "",
    RevToggleKey: "",
    RightArrowKeyTime1: "",
    RightArrowKeyTime2: "",
    LeftQuote: "",
    RightQuote: "",
    DownShiftKey: "",
    UpShiftKey: "",
    PuncKey0: "",
    PuncKeyLeftBottom: "",
    RightArrowKeyTime3: "",
    RightArrowKeyTime4: "",
    Battery0: "",
    Battery1: "",
    Battery2: "",
    Battery3: "",
    Battery4: "",
    Battery5: "",
    Battery6: "",
    Battery7: "",
    Battery8: "",
    Battery9: "",
    BatteryCharging0: "",
    BatteryCharging1: "",
    BatteryCharging2: "",
    BatteryCharging3: "",
    BatteryCharging4: "",
    BatteryCharging5: "",
    BatteryCharging6: "",
    BatteryCharging7: "",
    BatteryCharging8: "",
    BatterySaver0: "",
    BatterySaver1: "",
    BatterySaver2: "",
    BatterySaver3: "",
    BatterySaver4: "",
    BatterySaver5: "",
    BatterySaver6: "",
    BatterySaver7: "",
    BatterySaver8: "",
    SignalBars1: "",
    SignalBars2: "",
    SignalBars3: "",
    SignalBars4: "",
    SignalBars5: "",
    SignalNotConnected: "",
    Wifi1: "",
    Wifi2: "",
    Wifi3: "",
    SIMLock: "",
    SIMMissing: "",
    Vibrate: "",
    RoamingInternational: "",
    RoamingDomestic: "",
    CallForwardInternational: "",
    CallForwardRoaming: "",
    JpnRomanji: "",
    JpnRomanjiLock: "",
    JpnRomanjiShift: "",
    JpnRomanjiShiftLock: "",
    StatusDataTransfer: "",
    StatusDataTransferVPN: "",
    StatusDualSIM2: "",
    StatusDualSIM2VPN: "",
    StatusDualSIM1: "",
    StatusDualSIM1VPN: "",
    StatusSGLTE: "",
    StatusSGLTECell: "",
    StatusSGLTEDataVPN: "",
    StatusVPN: "",
    WifiHotspot: "",
    LanguageKor: "",
    LanguageCht: "",
    LanguageChs: "",
    USB: "",
    InkingToolFill: "",
    View: "",
    HighlightFill: "",
    Previous: "",
    Next: "",
    Clear: "",
    Sync: "",
    Download: "",
    Help: "",
    Upload: "",
    Emoji: "",
    TwoPage: "",
    LeaveChat: "",
    MailForward: "",
    RotateCamera: "",
    ClosePane: "",
    OpenPane: "",
    PreviewLink: "",
    AttachCamera: "",
    ZoomIn: "",
    Bookmarks: "",
    Document: "",
    ProtectedDocument: "",
    OpenInNewWindow: "",
    MailFill: "",
    ViewAll: "",
    VideoChat: "",
    Switch: "",
    Rename: "",
    Go: "",
    SurfaceHub: "",
    Remote: "",
    Click: "",
    Shuffle: "",
    Movies: "",
    SelectAll: "",
    Orientation: "",
    Import: "",
    ImportAll: "",
    Folder: "",
    Webcam: "",
    Picture: "",
    Caption: "",
    ChromeClose: "",
    ShowResults: "",
    Message: "",
    Leaf: "",
    CalendarDay: "",
    CalendarWeek: "",
    Characters: "",
    MailReplyAll: "",
    Read: "",
    ShowBcc: "",
    HideBcc: "",
    Cut: "",
    Copy: "",
    Important: "",
    MailReply: "",
    Sort: "",
    MobileTablet: "",
    DisconnectDrive: "",
    MapDrive: "",
    ContactPresence: "",
    Priority: "",
    GotoToday: "",
    Font: "",
    FontColor: "",
    Contact2: "",
    FolderFill: "",
    Audio: "",
    Permissions: "",
    DisableUpdates: "",
    Unfavorite: "",
    OpenLocal: "",
    Italic: "",
    Underline: "",
    Bold: "",
    MoveToFolder: "",
    LikeDislike: "",
    Dislike: "",
    Like: "",
    AlignRight: "",
    AlignCenter: "",
    AlignLeft: "",
    OpenFile: "",
    ClearSelection: "",
    FontDecrease: "",
    FontIncrease: "",
    FontSize: "",
    CellPhone: "",
    Reshare: "",
    Tag: "",
    RepeatOne: "",
    RepeatAll: "",
    Calculator: "",
    Directions: "",
    Library: "",
    ChatBubbles: "",
    PostUpdate: "",
    NewFolder: "",
    CalendarReply: "",
    UnsyncFolder: "",
    SyncFolder: "",
    BlockContact: "",
    SwitchApps: "",
    AddFriend: "",
    Accept: "",
    GoToStart: "",
    BulletedList: "",
    Scan: "",
    Preview: "",
    ZeroBars: "",
    OneBar: "",
    TwoBars: "",
    ThreeBars: "",
    FourBars: "",
    World: "",
    Comment: "",
    MusicInfo: "",
    DockLeft: "",
    DockRight: "",
    DockBottom: "",
    Repair: "",
    Accounts: "",
    DullSound: "",
    Manage: "",
    Street: "",
    Printer3D: "",
    RadioBullet: "",
    Stopwatch: "",
    Photo: "",
    ActionCenter: "",
    FullCircleMask: "",
    ChromeMinimize: "",
    ChromeMaximize: "",
    ChromeRestore: "",
    Annotation: "",
    BackSpaceQWERTYSm: "",
    BackSpaceQWERTYMd: "",
    Swipe: "",
    Fingerprint: "",
    Handwriting: "",
    ChromeBackToWindow: "",
    ChromeFullScreen: "",
    KeyboardStandard: "",
    KeyboardDismiss: "",
    Completed: "",
    ChromeAnnotate: "",
    Label: "",
    IBeam: "",
    IBeamOutline: "",
    FlickDown: "",
    FlickUp: "",
    FlickLeft: "",
    FlickRight: "",
    FeedbackApp: "",
    MusicAlbum: "",
    Streaming: "",
    Code: "",
    ReturnToWindow: "",
    LightningBolt: "",
    Info: "",
    CalculatorMultiply: "",
    CalculatorAddition: "",
    CalculatorSubtract: "",
    CalculatorDivide: "",
    CalculatorSquareroot: "",
    CalculatorPercentage: "",
    CalculatorNegate: "",
    CalculatorEqualTo: "",
    CalculatorBackspace: "",
    Component: "",
    DMC: "",
    Dock: "",
    MultimediaDMS: "",
    MultimediaDVR: "",
    MultimediaPMP: "",
    PrintfaxPrinterFile: "",
    Sensor: "",
    StorageOptical: "",
    Communications: "",
    Headset: "",
    Projector: "",
    Health: "",
    Webcam2: "",
    Input: "",
    Mouse: "",
    Smartcard: "",
    SmartcardVirtual: "",
    MediaStorageTower: "",
    ReturnKeySm: "",
    GameConsole: "",
    Network: "",
    StorageNetworkWireless: "",
    StorageTape: "",
    ChevronUpSmall: "",
    ChevronDownSmall: "",
    ChevronLeftSmall: "",
    ChevronRightSmall: "",
    ChevronUpMed: "",
    ChevronDownMed: "",
    ChevronLeftMed: "",
    ChevronRightMed: "",
    Devices2: "",
    ExpandTile: "",
    PC1: "",
    PresenceChicklet: "",
    PresenceChickletVideo: "",
    Reply: "",
    SetTile: "",
    Type: "",
    Korean: "",
    HalfAlpha: "",
    FullAlpha: "",
    Key12On: "",
    ChineseChangjie: "",
    QWERTYOn: "",
    QWERTYOff: "",
    ChineseQuick: "",
    Japanese: "",
    FullHiragana: "",
    FullKatakana: "",
    HalfKatakana: "",
    ChineseBoPoMoFo: "",
    ChinesePinyin: "",
    ConstructionCone: "",
    XboxOneConsole: "",
    Volume0: "",
    Volume1: "",
    Volume2: "",
    Volume3: "",
    BatteryUnknown: "",
    WifiAttentionOverlay: "",
    Robot: "",
    TapAndSend: "",
    PasswordKeyShow: "",
    PasswordKeyHide: "",
    BidiLtr: "",
    BidiRtl: "",
    ForwardSm: "",
    CommaKey: "",
    DashKey: "",
    DullSoundKey: "",
    HalfDullSound: "",
    RightDoubleQuote: "",
    LeftDoubleQuote: "",
    PuncKeyRightBottom: "",
    PuncKey1: "",
    PuncKey2: "",
    PuncKey3: "",
    PuncKey4: "",
    PuncKey5: "",
    PuncKey6: "",
    PuncKey9: "",
    PuncKey7: "",
    PuncKey8: "",
    Frigid: "",
    Diagnostic: "",
    Process: "",
    DisconnectDisplay: "",
    Info2: "",
    ActionCenterAsterisk: "",
    Beta: "",
    SaveCopy: "",
    List: "",
    Asterisk: "",
    ErrorBadge: "",
    CircleRing: "",
    CircleFill: "",
    AllAppsMirrored: "",
    BookmarksMirrored: "",
    BulletedListMirrored: "",
    CallForwardInternationalMirrored: "",
    CallForwardRoamingMirrored: "",
    ChromeBackMirrored: "",
    ClearSelectionMirrored: "",
    ClosePaneMirrored: "",
    ContactInfoMirrored: "",
    DockRightMirrored: "",
    DockLeftMirrored: "",
    ExpandTileMirrored: "",
    GoMirrored: "",
    GripperResizeMirrored: "",
    HelpMirrored: "",
    ImportMirrored: "",
    ImportAllMirrored: "",
    LeaveChatMirrored: "",
    ListMirrored: "",
    MailForwardMirrored: "",
    MailReplyMirrored: "",
    MailReplyAllMirrored: "",
    OpenPaneMirrored: "",
    OpenWithMirrored: "",
    ParkingLocationMirrored: "",
    ResizeMouseMediumMirrored: "",
    ResizeMouseSmallMirrored: "",
    ResizeMouseTallMirrored: "",
    ResizeTouchNarrowerMirrored: "",
    SendMirrored: "",
    SendFillMirrored: "",
    ShowResultsMirrored: "",
    Media: "",
    SyncError: "",
    Devices3: "",
    Lightbulb: "",
    StatusCircle: "",
    StatusTriangle: "",
    StatusError: "",
    StatusWarning: "",
    Puzzle: "",
    CalendarSolid: "",
    HomeSolid: "",
    ParkingLocationSolid: "",
    ContactSolid: "",
    ConstructionSolid: "",
    AccidentSolid: "",
    Ringer: "",
    ThoughtBubble: "",
    HeartBroken: "",
    BatteryCharging10: "",
    BatterySaver9: "",
    BatterySaver10: "",
    CallForwardingMirrored: "",
    MultiSelectMirrored: "",
    Broom: "",
    Trackers: "",
    PieSingle: "",
    StockDown: "",
    StockUp: "",
    Drop: "",
    BusSolid: "",
    FerrySolid: "",
    StartPointSolid: "",
    StopPointSolid: "",
    EndPointSolid: "",
    AirplaneSolid: "",
    TrainSolid: "",
    WorkSolid: "",
    ReminderFill: "",
    Reminder: "",
    Heart: "",
    HeartFill: "",
    EthernetError: "",
    EthernetWarning: "",
    StatusConnecting1: "",
    StatusConnecting2: "",
    StatusUnsecure: "",
    WifiError0: "",
    WifiError1: "",
    WifiError2: "",
    WifiError3: "",
    WifiError4: "",
    WifiWarning0: "",
    WifiWarning1: "",
    WifiWarning2: "",
    WifiWarning3: "",
    WifiWarning4: "",
    Devices4: "",
    NUIIris: "",
    NUIFace: "",
    EditMirrored: "",
    NUIFPStartSlideHand: "",
    NUIFPStartSlideAction: "",
    NUIFPContinueSlideHand: "",
    NUIFPContinueSlideAction: "",
    NUIFPRollRightHand: "",
    NUIFPRollRightHandAction: "",
    NUIFPRollLeftHand: "",
    NUIFPRollLeftAction: "",
    NUIFPPressHand: "",
    NUIFPPressAction: "",
    NUIFPPressRepeatHand: "",
    NUIFPPressRepeatAction: "",
    StatusErrorFull: "",
    MultitaskExpanded: "",
    Certificate: "",
    BackSpaceQWERTYLg: "",
    ReturnKeyLg: "",
    FastForward: "",
    Rewind: "",
    Photo2: "",
    " MobBattery0": "",
    " MobBattery1": "",
    " MobBattery2": "",
    " MobBattery3": "",
    " MobBattery4": "",
    " MobBattery5": "",
    " MobBattery6": "",
    " MobBattery7": "",
    " MobBattery8": "",
    " MobBattery9": "",
    MobBattery10: "",
    " MobBatteryCharging0": "",
    " MobBatteryCharging1": "",
    " MobBatteryCharging2": "",
    " MobBatteryCharging3": "",
    " MobBatteryCharging4": "",
    " MobBatteryCharging5": "",
    " MobBatteryCharging6": "",
    " MobBatteryCharging7": "",
    " MobBatteryCharging8": "",
    " MobBatteryCharging9": "",
    " MobBatteryCharging10": "",
    " MobBatterySaver0": "",
    " MobBatterySaver1": "",
    " MobBatterySaver2": "",
    " MobBatterySaver3": "",
    " MobBatterySaver4": "",
    " MobBatterySaver5": "",
    " MobBatterySaver6": "",
    " MobBatterySaver7": "",
    " MobBatterySaver8": "",
    " MobBatterySaver9": "",
    " MobBatterySaver10": "",
    DictionaryCloud: "",
    ResetDrive: "",
    VolumeBars: "",
    Project: "",
    AdjustHologram: "",
    WifiCallBars: "",
    WifiCall0: "",
    WifiCall1: "",
    WifiCall2: "",
    WifiCall3: "",
    WifiCall4: "",
    DeviceDiscovery: "",
    WindDirection: "",
    RightArrowKeyTime0: "",
    TabletMode: "",
    StatusCircleLeft: "",
    StatusTriangleLeft: "",
    StatusErrorLeft: "",
    StatusWarningLeft: "",
    MobBatteryUnknown: "",
    NetworkTower: "",
    CityNext: "",
    CityNext2: "",
    Courthouse: "",
    Groceries: "",
    Sustainable: "",
    BuildingEnergy: "",
    ToggleFilled: "",
    ToggleBorder: "",
    SliderThumb: "",
    ToggleThumb: "",
    MiracastLogoSmall: "",
    MiracastLogoLarge: "",
    PLAP: "",
    Badge: "",
    SignalRoaming: "",
    MobileLocked: "",
    InsiderHubApp: "",
    PersonalFolder: "",
    HomeGroup: "",
    MyNetwork: "",
    KeyboardFull: "",
    MobSignal1: "",
    MobSignal2: "",
    MobSignal3: "",
    MobSignal4: "",
    MobSignal5: "",
    MobWifi1: "",
    MobWifi2: "",
    MobWifi3: "",
    MobWifi4: "",
    MobAirplane: "",
    MobBluetooth: "",
    MobActionCenter: "",
    MobLocation: "",
    MobWifiHotspot: "",
    LanguageJpn: "",
    MobQuietHours: "",
    MobDrivingMode: "",
    SpeedOff: "",
    SpeedMedium: "",
    SpeedHigh: "",
    ThisPC: "",
    MusicNote: "",
    FileExplorer: "",
    FileExplorerApp: "",
    LeftArrowKeyTime0: "",
    MicOff: "",
    MicSleep: "",
    MicError: "",
    PlaybackRate1x: "",
    PlaybackRateOther: "",
    CashDrawer: "",
    BarcodeScanner: "",
    ReceiptPrinter: "",
    MagStripeReader: "",
    CompletedSolid: "",
    CompanionApp: "",
    SwipeRevealArt: "",
    MicOn: "",
    MicClipping: "",
    TabletSelected: "",
    MobileSelected: "",
    LaptopSelected: "",
    TVMonitorSelected: "",
    DeveloperTools: "",
    MobCallForwarding: "",
    MobCallForwardingMirrored: "",
    BodyCam: "",
    PoliceCar: "",
    Draw: "",
    DrawSolid: "",
    LowerBrightness: "",
    ScrollUpDown: "",
    DateTime: "",
    Tiles: "",
    PartyLeader: "",
    AppIconDefault: "",
    AddSurfaceHub: "",
    DevUpdate: "",
    Unit: "",
    AddTo: "",
    RemoveFrom: "",
    RadioBtnOff: "",
    RadioBtnOn: "",
    RadioBullet2: "",
    ExploreContent: "",
    ScrollMode: "",
    ZoomMode: "",
    PanMode: "",
    "WiredUSB ": "",
    WirelessUSB: "",
    USBSafeConnect: "",
    ActionCenterNotificationMirrored: "",
    ActionCenterMirrored: "",
    ResetDevice: "",
    Feedback: "",
    Subtitles: "",
    SubtitlesAudio: "",
    CalendarMirrored: "",
    eSIM: "",
    eSIMNoProfile: "",
    eSIMLocked: "",
    eSIMBusy: "",
    SignalError: "",
    StreamingEnterprise: "",
    Headphone0: "",
    Headphone1: "",
    Headphone2: "",
    Headphone3: "",
    KeyboardBrightness: "",
    KeyboardLowerBrightness: "",
    SkipBack10: "",
    SkipForward30: "",
    TreeFolderFolder: "",
    TreeFolderFolderFill: "",
    TreeFolderFolderOpen: "",
    TreeFolderFolderOpenFill: "",
    MultimediaDMP: "",
    KeyboardOneHanded: "",
    Narrator: "",
    EmojiTabPeople: "",
    EmojiTabSmilesAnimals: "",
    EmojiTabCelebrationObjects: "",
    EmojiTabFoodPlants: "",
    EmojiTabTransitPlaces: "",
    EmojiTabSymbols: "",
    EmojiTabTextSmiles: "",
    EmojiTabFavorites: "",
    EmojiSwatch: "",
    ConnectApp: "",
    CompanionDeviceFramework: "",
    Ruler: "",
    FingerInking: "",
    StrokeErase: "",
    PointErase: "",
    ClearAllInk: "",
    Pencil: "",
    Marker: "",
    InkingCaret: "",
    InkingColorOutline: "",
    InkingColorFill: "",
    HardDrive: "",
    NetworkAdapter: "",
    Touchscreen: "",
    NetworkPrinter: "",
    CloudPrinter: "",
    KeyboardShortcut: "",
    BrushSize: "",
    NarratorForward: "",
    NarratorForwardMirrored: "",
    SyncBadge12: "",
    RingerBadge12: "",
    AsteriskBadge12: "",
    ErrorBadge12: "",
    CircleRingBadge12: "",
    CircleFillBadge12: "",
    ImportantBadge12: "",
    MailBadge12: "",
    PauseBadge12: "",
    PlayBadge12: "",
    PenWorkspace: "",
    Export: "",
    ExportMirrored: "",
    CaligraphyPen: "",
    ReplyMirrored: "",
    LockscreenDesktop: "",
    Multitask16: "",
    Play36: "",
    PenPalette: "",
    GuestUser: "",
    SettingsBattery: "",
    TaskbarPhone: "",
    LockScreenGlance: "",
    ImageExport: "",
    WifiEthernet: "",
    ActionCenterQuiet: "",
    ActionCenterQuietNotification: "",
    TrackersMirrored: "",
    DateTimeMirrored: "",
    Wheel: "",
    PenWorkspaceMirrored: "",
    PenPaletteMirrored: "",
    StrokeEraseMirrored: "",
    PointEraseMirrored: "",
    ClearAllInkMirrored: "",
    BackgroundToggle: "",
    Marquee: ""
  }
}, function (e, t, r) {
  "use strict";
  var o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
      return window.setTimeout(e, 1e3 / 60)
    },
    n = {
      easeOutSine: function (e) {
        return Math.sin(e * (Math.PI / 2))
      },
      easeInOutSine: function (e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
      },
      easeInOutQuint: function (e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
      }
    },
    i = function (e, t, r, i, a) {
      function s() {
        c += 1 / 60;
        var t = c / u,
          i = n[r](t);
        t < 1 ? (d(l + (e - l) * i), o(s)) : d(e), a()
      }
      void 0 === e && (e = 0), void 0 === t && (t = 2e3), void 0 === r && (r = "easeOutSine"), void 0 === i && (i = null), void 0 === a && (a = function () {});
      var l = window.scrollY,
        c = 0,
        u = Math.max(.1, Math.min(Math.abs(l - e) / t, .8));
      i && (l = i.scrollTop);
      var d = function (e) {
        i ? i.scrollTop = e : window.scrollTo(0, e)
      };
      s()
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i
}, function (e, t, r) {
  "use strict";
  var o = r(58),
    n = function () {
      var e = (navigator || {}).userAgent,
        t = void 0 === window;
      if (void 0 === e) return function (e) {
        if (!e) return {};
        if (t) {
          var r = o.prefixAll(e);
          return ["flex", "inline-flex"].includes(e.display) && (r.display = r.display.join("; display: ") + ";"), r
        }
      };
      var r = new o({
        userAgent: e
      });
      return function (e) {
        if (e) return r.prefix(e)
      }
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n
}, function (e, t, r) {
  "use strict";

  function o(e, t, r) {
    void 0 === r && (r = !1);
    var o = "";
    if (r) {
      for (var i in t) {
        var a = [].map.call(i, function (e) {
            return e === e.toUpperCase() ? "-" + e.toLowerCase() : e
          }).join(""),
          s = t[i];
        if ("number" != typeof s || n.includes(i) || (s += "px"), "object" == typeof s) {
          if (!Array.isArray(s)) throw Error(a + ": " + s + " is Wrong!");
          s = s[s.length - 1]
        }
        o += a + ": " + s + ";"
      }
      e.style.cssText = o
    } else {
      for (var i in t) {
        var s = t[i];
        "number" != typeof s || n.includes(i) || (t[i] = s + "px")
      }
      Object.assign(e.style, t)
    }
  }
  var n = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridRow", "gridColumn", "fontWeight", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fillOpacity", "floodOpacity", "stopOpacity", "strokeDasharray", "strokeDashoffset", "strokeMiterlimit", "strokeOpacity", "strokeWidth"];
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o
}, function (e, t, r) {
  "use strict";
  r(11).default("@font-face {\n  font-family: 'Segoe MDL2 Assets';\n  src:\n    local('Segoe MDL2 Assets'),\n    url(\"" + r(50) + '"); /* For IE6-8 */\n    url("' + r(53) + "\") format('woff2'),\n    url(\"" + r(52) + "\") format('woff'),\n    url('webfont.svg#SegoeMDL2Assets') format('svg'),\n    url(\"" + r(51) + "\") format('truetype');\n}")
}, function (e, t, r) {
  t = e.exports = r(18)(void 0), t.push([e.i, "*{margin:0;padding:0}*,:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:16px;-webkit-text-size-adjust:none}body{font-family:Microsoft YaHei,Open Sans,sans-serif;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}input,textarea{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;-webkit-border-radius:none;-moz-border-radius:none;border-radius:none}", ""])
}, function (e, t) {
  e.exports = function (e) {
    var t = "undefined" != typeof window && window.location;
    if (!t) throw new Error("fixUrls requires window.location");
    if (!e || "string" != typeof e) return e;
    var r = t.protocol + "//" + t.host,
      o = r + t.pathname.replace(/\/[^\/]*$/, "/");
    return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
      var n = t.trim().replace(/^"(.*)"$/, function (e, t) {
        return t
      }).replace(/^'(.*)'$/, function (e, t) {
        return t
      });
      if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(n)) return e;
      var i;
      return i = 0 === n.indexOf("//") ? n : 0 === n.indexOf("/") ? r + n : o + n.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")"
    })
  }
}, function (e, t, r) {
  var o = r(47);
  "string" == typeof o && (o = [
    [e.i, o, ""]
  ]), r(19)(o, {}), o.locals && (e.exports = o.locals)
}, function (e, t, r) {
  e.exports = r.p + "fonts/segoe-mdl2-assets.23Abh.eot"
}, function (e, t, r) {
  e.exports = r.p + "fonts/segoe-mdl2-assets.13X8s.ttf"
}, function (e, t, r) {
  e.exports = r.p + "fonts/segoe-mdl2-assets.2gY-H.woff"
}, function (e, t, r) {
  e.exports = r.p + "fonts/segoe-mdl2-assets.2uyyR.woff2"
}, function (e, t) {
  e.exports = function () {
    throw new Error("define cannot be used indirect")
  }
}, function (e, t, r) {
  ! function (t, o, n) {
    void 0 !== e && e.exports ? e.exports = n() : r(54)("bowser", n)
  }(0, 0, function () {
    function e(e) {
      function t(t) {
        var r = e.match(t);
        return r && r.length > 1 && r[1] || ""
      }
      var r, o = t(/(ipod|iphone|ipad)/i).toLowerCase(),
        n = /like android/i.test(e),
        i = !n && /android/i.test(e),
        s = /nexus\s*[0-6]\s*/i.test(e),
        l = !s && /nexus\s*[0-9]+/i.test(e),
        c = /CrOS/.test(e),
        u = /silk/i.test(e),
        d = /sailfish/i.test(e),
        f = /tizen/i.test(e),
        p = /(web|hpw)os/i.test(e),
        h = /windows phone/i.test(e),
        y = (/SamsungBrowser/i.test(e), !h && /windows/i.test(e)),
        m = !o && !u && /macintosh/i.test(e),
        g = !i && !d && !f && !p && /linux/i.test(e),
        v = t(/edge\/(\d+(\.\d+)?)/i),
        b = t(/version\/(\d+(\.\d+)?)/i),
        S = /tablet/i.test(e),
        w = !S && /[^-]mobi/i.test(e),
        x = /xbox/i.test(e);
      /opera/i.test(e) ? r = {
        name: "Opera",
        opera: a,
        version: b || t(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
      } : /opr|opios/i.test(e) ? r = {
        name: "Opera",
        opera: a,
        version: t(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || b
      } : /SamsungBrowser/i.test(e) ? r = {
        name: "Samsung Internet for Android",
        samsungBrowser: a,
        version: b || t(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
      } : /coast/i.test(e) ? r = {
        name: "Opera Coast",
        coast: a,
        version: b || t(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
      } : /yabrowser/i.test(e) ? r = {
        name: "Yandex Browser",
        yandexbrowser: a,
        version: b || t(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
      } : /ucbrowser/i.test(e) ? r = {
        name: "UC Browser",
        ucbrowser: a,
        version: t(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
      } : /mxios/i.test(e) ? r = {
        name: "Maxthon",
        maxthon: a,
        version: t(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
      } : /epiphany/i.test(e) ? r = {
        name: "Epiphany",
        epiphany: a,
        version: t(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
      } : /puffin/i.test(e) ? r = {
        name: "Puffin",
        puffin: a,
        version: t(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
      } : /sleipnir/i.test(e) ? r = {
        name: "Sleipnir",
        sleipnir: a,
        version: t(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
      } : /k-meleon/i.test(e) ? r = {
        name: "K-Meleon",
        kMeleon: a,
        version: t(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
      } : h ? (r = {
        name: "Windows Phone",
        windowsphone: a
      }, v ? (r.msedge = a, r.version = v) : (r.msie = a, r.version = t(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(e) ? r = {
        name: "Internet Explorer",
        msie: a,
        version: t(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      } : c ? r = {
        name: "Chrome",
        chromeos: a,
        chromeBook: a,
        chrome: a,
        version: t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      } : /chrome.+? edge/i.test(e) ? r = {
        name: "Microsoft Edge",
        msedge: a,
        version: v
      } : /vivaldi/i.test(e) ? r = {
        name: "Vivaldi",
        vivaldi: a,
        version: t(/vivaldi\/(\d+(\.\d+)?)/i) || b
      } : d ? r = {
        name: "Sailfish",
        sailfish: a,
        version: t(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      } : /seamonkey\//i.test(e) ? r = {
        name: "SeaMonkey",
        seamonkey: a,
        version: t(/seamonkey\/(\d+(\.\d+)?)/i)
      } : /firefox|iceweasel|fxios/i.test(e) ? (r = {
        name: "Firefox",
        firefox: a,
        version: t(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
      }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e) && (r.firefoxos = a)) : u ? r = {
        name: "Amazon Silk",
        silk: a,
        version: t(/silk\/(\d+(\.\d+)?)/i)
      } : /phantom/i.test(e) ? r = {
        name: "PhantomJS",
        phantom: a,
        version: t(/phantomjs\/(\d+(\.\d+)?)/i)
      } : /slimerjs/i.test(e) ? r = {
        name: "SlimerJS",
        slimer: a,
        version: t(/slimerjs\/(\d+(\.\d+)?)/i)
      } : /blackberry|\bbb\d+/i.test(e) || /rim\stablet/i.test(e) ? r = {
        name: "BlackBerry",
        blackberry: a,
        version: b || t(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      } : p ? (r = {
        name: "WebOS",
        webos: a,
        version: b || t(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      }, /touchpad\//i.test(e) && (r.touchpad = a)) : /bada/i.test(e) ? r = {
        name: "Bada",
        bada: a,
        version: t(/dolfin\/(\d+(\.\d+)?)/i)
      } : f ? r = {
        name: "Tizen",
        tizen: a,
        version: t(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || b
      } : /qupzilla/i.test(e) ? r = {
        name: "QupZilla",
        qupzilla: a,
        version: t(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || b
      } : /chromium/i.test(e) ? r = {
        name: "Chromium",
        chromium: a,
        version: t(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || b
      } : /chrome|crios|crmo/i.test(e) ? r = {
        name: "Chrome",
        chrome: a,
        version: t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      } : i ? r = {
        name: "Android",
        version: b
      } : /safari|applewebkit/i.test(e) ? (r = {
        name: "Safari",
        safari: a
      }, b && (r.version = b)) : o ? (r = {
        name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
      }, b && (r.version = b)) : r = /googlebot/i.test(e) ? {
        name: "Googlebot",
        googlebot: a,
        version: t(/googlebot\/(\d+(\.\d+))/i) || b
      } : {
        name: t(/^(.*)\/(.*) /),
        version: function (t) {
          var r = e.match(t);
          return r && r.length > 1 && r[2] || ""
        }(/^(.*)\/(.*) /)
      }, !r.msedge && /(apple)?webkit/i.test(e) ? (/(apple)?webkit\/537\.36/i.test(e) ? (r.name = r.name || "Blink", r.blink = a) : (r.name = r.name || "Webkit", r.webkit = a), !r.version && b && (r.version = b)) : !r.opera && /gecko\//i.test(e) && (r.name = r.name || "Gecko", r.gecko = a, r.version = r.version || t(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || r.msedge || !i && !r.silk ? r.windowsphone || r.msedge || !o ? m ? r.mac = a : x ? r.xbox = a : y ? r.windows = a : g && (r.linux = a) : (r[o] = a, r.ios = a) : r.android = a;
      var k = "";
      r.windowsphone ? k = t(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o ? (k = t(/os (\d+([_\s]\d+)*) like mac os x/i), k = k.replace(/[_\s]/g, ".")) : i ? k = t(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? k = t(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? k = t(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? k = t(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (k = t(/tizen[\/\s](\d+(\.\d+)*)/i)), k && (r.osversion = k);
      var L = k.split(".")[0];
      return S || l || "ipad" == o || i && (3 == L || L >= 4 && !w) || r.silk ? r.tablet = a : (w || "iphone" == o || "ipod" == o || i || s || r.blackberry || r.webos || r.bada) && (r.mobile = a), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = a : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = a : r.x = a, r
    }

    function t(e) {
      return e.split(".").length
    }

    function r(e, t) {
      var r, o = [];
      if (Array.prototype.map) return Array.prototype.map.call(e, t);
      for (r = 0; r < e.length; r++) o.push(t(e[r]));
      return o
    }

    function o(e) {
      for (var o = Math.max(t(e[0]), t(e[1])), n = r(e, function (e) {
          var n = o - t(e);
          return e += new Array(n + 1).join(".0"), r(e.split("."), function (e) {
            return new Array(20 - e.length).join("0") + e
          }).reverse()
        }); --o >= 0;) {
        if (n[0][o] > n[1][o]) return 1;
        if (n[0][o] !== n[1][o]) return -1;
        if (0 === o) return 0
      }
    }

    function n(t, r, n) {
      var i = s;
      "string" == typeof r && (n = r, r = void 0), void 0 === r && (r = !1), n && (i = e(n));
      var a = "" + i.version;
      for (var l in t)
        if (t.hasOwnProperty(l) && i[l]) {
          if ("string" != typeof t[l]) throw new Error("Browser version in the minVersion map should be a string: " + l + ": " + String(t));
          return o([a, t[l]]) < 0
        }
      return r
    }

    function i(e, t, r) {
      return !n(e, t, r)
    }
    var a = !0,
      s = e("undefined" != typeof navigator ? navigator.userAgent || "" : "");
    return s.test = function (e) {
      for (var t = 0; t < e.length; ++t) {
        var r = e[t];
        if ("string" == typeof r && r in s) return !0
      }
      return !1
    }, s.isUnsupportedBrowser = n, s.compareVersions = o, s.check = i, s._detect = e, s
  })
}, function (e, t, r) {
  "use strict";

  function o(e) {
    return function () {
      return e
    }
  }
  var n = function () {};
  n.thatReturns = o, n.thatReturnsFalse = o(!1), n.thatReturnsTrue = o(!0), n.thatReturnsNull = o(null), n.thatReturnsThis = function () {
    return this
  }, n.thatReturnsArgument = function (e) {
    return e
  }, e.exports = n
}, function (e, t, r) {
  "use strict";

  function o(e, t, r, o, i, a, s, l) {
    if (n(t), !e) {
      var c;
      if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      else {
        var u = [r, o, i, a, s, l],
          d = 0;
        c = new Error(t.replace(/%s/g, function () {
          return u[d++]
        })), c.name = "Invariant Violation"
      }
      throw c.framesToPop = 1, c
    }
  }
  var n = function (e) {};
  e.exports = o
}, function (e, t, r) {
  "use strict";

  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function n(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function i(e) {
    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
      r = arguments[2],
      o = arguments[3];
    Object.keys(t).forEach(function (n) {
      var i = e[n];
      Array.isArray(i) ? [].concat(t[n]).forEach(function (t) {
        -1 === e[n].indexOf(t) && e[n].splice(i.indexOf(r), o ? 0 : 1, t)
      }) : e[n] = t[n]
    })
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, r, o) {
        return r && e(t.prototype, r), o && e(t, o), t
      }
    }(),
    s = r(79),
    l = o(s),
    c = r(80),
    u = o(c),
    d = r(81),
    f = o(d),
    p = r(8),
    h = o(p),
    y = r(15),
    m = o(y),
    g = r(69),
    v = o(g),
    b = r(65),
    S = o(b),
    w = r(59),
    x = o(w),
    k = r(68),
    L = o(k),
    C = r(63),
    M = o(C),
    O = r(60),
    P = o(O),
    B = r(66),
    _ = o(B),
    D = r(64),
    R = o(D),
    F = r(67),
    I = o(F),
    j = r(61),
    T = o(j),
    E = r(62),
    A = o(E),
    N = [S.default, x.default, L.default, M.default, _.default, R.default, I.default, T.default, A.default, P.default],
    W = function () {
      function e() {
        var t = this,
          r = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
        n(this, e);
        var o = "undefined" != typeof navigator ? navigator.userAgent : void 0;
        if (this._userAgent = r.userAgent || o, this._keepUnprefixed = r.keepUnprefixed || !1, this._browserInfo = (0, u.default)(this._userAgent), !this._browserInfo || !this._browserInfo.prefix) return this._usePrefixAllFallback = !0, !1;
        this.cssPrefix = this._browserInfo.prefix.css, this.jsPrefix = this._browserInfo.prefix.inline, this.prefixedKeyframes = (0, f.default)(this._browserInfo);
        var i = this._browserInfo.browser && v.default[this._browserInfo.browser];
        i ? (this._requiresPrefix = Object.keys(i).filter(function (e) {
          return i[e] >= t._browserInfo.version
        }).reduce(function (e, t) {
          return e[t] = !0, e
        }, {}), this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0) : this._usePrefixAllFallback = !0
      }
      return a(e, [{
        key: "prefix",
        value: function (e) {
          var t = this;
          return this._usePrefixAllFallback ? (0, l.default)(e) : this._hasPropsRequiringPrefix ? (Object.keys(e).forEach(function (r) {
            var o = e[r];
            o instanceof Object && !Array.isArray(o) ? e[r] = t.prefix(o) : t._requiresPrefix[r] && (e[t.jsPrefix + (0, h.default)(r)] = o, t._keepUnprefixed || delete e[r])
          }), Object.keys(e).forEach(function (r) {
            [].concat(e[r]).forEach(function (o) {
              N.forEach(function (n) {
                i(e, n({
                  property: r,
                  value: o,
                  styles: e,
                  browserInfo: t._browserInfo,
                  prefix: {
                    js: t.jsPrefix,
                    css: t.cssPrefix,
                    keyframes: t.prefixedKeyframes
                  },
                  keepUnprefixed: t._keepUnprefixed,
                  requiresPrefix: t._requiresPrefix
                }), o, t._keepUnprefixed)
              })
            })
          }), (0, m.default)(e)) : e
        }
      }], [{
        key: "prefixAll",
        value: function (e) {
          return (0, l.default)(e)
        }
      }]), e
    }();
  t.default = W, e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }

  function n(e) {
    var t = e.property,
      r = e.value,
      n = e.browserInfo,
      i = n.browser,
      s = n.version,
      l = e.prefix.css,
      c = e.keepUnprefixed;
    if ("string" == typeof r && r.indexOf("calc(") > -1 && ("firefox" === i && s < 15 || "chrome" === i && s < 25 || "safari" === i && s < 6.1 || "ios_saf" === i && s < 7)) return o({}, t, (0, a.default)(r.replace(/calc\(/g, l + "calc("), r, c))
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  var i = r(2),
    a = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i);
  e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e) {
    var t = e.property,
      r = e.value,
      o = e.browserInfo,
      n = o.browser,
      s = o.version,
      l = e.prefix.css,
      c = e.keepUnprefixed;
    if ("display" === t && a[r] && ("chrome" === n && s < 29 && s > 20 || ("safari" === n || "ios_saf" === n) && s < 9 && s > 6 || "opera" === n && (15 == s || 16 == s))) return {
      display: (0, i.default)(l + r, r, c)
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var n = r(2),
    i = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n),
    a = {
      flex: !0,
      "inline-flex": !0
    };
  e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }

  function n(e) {
    var t = e.property,
      r = e.value,
      n = e.styles,
      i = e.browserInfo,
      c = i.browser,
      u = i.version,
      d = e.prefix.css,
      f = e.keepUnprefixed;
    if ((l[t] || "display" === t && "string" == typeof r && r.indexOf("flex") > -1) && ("ie_mob" === c || "ie" === c) && 10 == u) {
      if (f || Array.isArray(n[t]) || delete n[t], "display" === t && s[r]) return {
        display: (0, a.default)(d + s[r], r, f)
      };
      if (l[t]) return o({}, l[t], s[r] || r)
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  var i = r(2),
    a = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i),
    s = {
      "space-around": "distribute",
      "space-between": "justify",
      "flex-start": "start",
      "flex-end": "end",
      flex: "flexbox",
      "inline-flex": "inline-flexbox"
    },
    l = {
      alignContent: "msFlexLinePack",
      alignSelf: "msFlexItemAlign",
      alignItems: "msFlexAlign",
      justifyContent: "msFlexPack",
      order: "msFlexOrder",
      flexGrow: "msFlexPositive",
      flexShrink: "msFlexNegative",
      flexBasis: "msPreferredSize"
    };
  e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }

  function n(e) {
    var t = e.property,
      r = e.value,
      n = e.styles,
      i = e.browserInfo,
      c = i.browser,
      d = i.version,
      f = e.prefix.css,
      p = e.keepUnprefixed;
    if ((u.indexOf(t) > -1 || "display" === t && "string" == typeof r && r.indexOf("flex") > -1) && ("firefox" === c && d < 22 || "chrome" === c && d < 21 || ("safari" === c || "ios_saf" === c) && d <= 6.1 || "android" === c && d < 4.4 || "and_uc" === c)) {
      if (p || Array.isArray(n[t]) || delete n[t], "flexDirection" === t && "string" == typeof r) return {
        WebkitBoxOrient: r.indexOf("column") > -1 ? "vertical" : "horizontal",
        WebkitBoxDirection: r.indexOf("reverse") > -1 ? "reverse" : "normal"
      };
      if ("display" === t && s[r]) return {
        display: (0, a.default)(f + s[r], r, p)
      };
      if (l[t]) return o({}, l[t], s[r] || r)
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  var i = r(2),
    a = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i),
    s = {
      "space-around": "justify",
      "space-between": "justify",
      "flex-start": "start",
      "flex-end": "end",
      "wrap-reverse": "multiple",
      wrap: "multiple",
      flex: "box",
      "inline-flex": "inline-box"
    },
    l = {
      alignItems: "WebkitBoxAlign",
      justifyContent: "WebkitBoxPack",
      flexWrap: "WebkitBoxLines"
    },
    c = ["alignContent", "alignSelf", "order", "flexGrow", "flexShrink", "flexBasis", "flexDirection"],
    u = Object.keys(l).concat(c);
  e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e) {
    var t = e.property,
      r = e.value,
      o = e.browserInfo.browser,
      n = e.prefix.css,
      s = e.keepUnprefixed;
    if ("cursor" === t && a[r] && ("firefox" === o || "chrome" === o || "safari" === o || "opera" === o)) return {
      cursor: (0, i.default)(n + r, r, s)
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var n = r(2),
    i = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n),
    a = {
      grab: !0,
      grabbing: !0
    };
  e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }

  function n(e) {
    var t = e.property,
      r = e.value,
      n = e.browserInfo,
      i = n.browser,
      l = n.version,
      c = e.prefix.css,
      u = e.keepUnprefixed;
    if ("string" == typeof r && null !== r.match(s) && ("firefox" === i && l < 16 || "chrome" === i && l < 26 || ("safari" === i || "ios_saf" === i) && l < 7 || ("opera" === i || "op_mini" === i) && l < 12.1 || "android" === i && l < 4.4 || "and_uc" === i)) return o({}, t, (0, a.default)(c + r, r, u))
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  var i = r(2),
    a = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i),
    s = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
  e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }

  function n(e) {
    var t = e.property,
      r = e.value,
      n = e.browserInfo.browser,
      i = e.prefix.css,
      s = e.keepUnprefixed;
    if ("position" === t && "sticky" === r && ("safari" === n || "ios_saf" === n)) return o({}, t, (0, a.default)(i + r, r, s))
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  var i = r(2),
    a = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i);
  e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }

  function n(e) {
    var t = e.property,
      r = e.value,
      n = e.prefix.css,
      i = e.keepUnprefixed;
    if (s[t] && l[r]) return o({}, t, (0, a.default)(n + r, r, i))
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  var i = r(2),
    a = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i),
    s = {
      maxHeight: !0,
      maxWidth: !0,
      width: !0,
      height: !0,
      columnWidth: !0,
      minWidth: !0,
      minHeight: !0
    },
    l = {
      "min-content": !0,
      "max-content": !0,
      "fill-available": !0,
      "fit-content": !0,
      "contain-floats": !0
    };
  e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function n(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }

  function i(e) {
    var t = e.property,
      r = e.value,
      o = e.prefix.css,
      i = e.requiresPrefix,
      s = e.keepUnprefixed,
      c = (0, u.default)(t);
    if ("string" == typeof r && d[c]) {
      var f = function () {
        var e = Object.keys(i).map(function (e) {
            return (0, l.default)(e)
          }),
          a = r.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
        return e.forEach(function (e) {
          a.forEach(function (t, r) {
            t.indexOf(e) > -1 && "order" !== e && (a[r] = t.replace(e, o + e) + (s ? "," + t : ""))
          })
        }), {
          v: n({}, t, a.join(","))
        }
      }();
      if ("object" === (void 0 === f ? "undefined" : a(f))) return f.v
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
  };
  t.default = i;
  var s = r(13),
    l = o(s),
    c = r(83),
    u = o(c),
    d = {
      transition: !0,
      transitionProperty: !0
    };
  e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e) {
    var t = e.property,
      r = e.value,
      o = e.browserInfo,
      n = o.browser,
      s = o.version,
      l = e.prefix.css,
      c = e.keepUnprefixed;
    if ("cursor" === t && a[r] && ("firefox" === n && s < 24 || "chrome" === n && s < 37 || "safari" === n && s < 9 || "opera" === n && s < 24)) return {
      cursor: (0, i.default)(l + r, r, c)
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var n = r(2),
    i = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n),
    a = {
      "zoom-in": !0,
      "zoom-out": !0
    };
  e.exports = t.default
}, function (e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    chrome: {
      transform: 35,
      transformOrigin: 35,
      transformOriginX: 35,
      transformOriginY: 35,
      backfaceVisibility: 35,
      perspective: 35,
      perspectiveOrigin: 35,
      transformStyle: 35,
      transformOriginZ: 35,
      animation: 42,
      animationDelay: 42,
      animationDirection: 42,
      animationFillMode: 42,
      animationDuration: 42,
      animationIterationCount: 42,
      animationName: 42,
      animationPlayState: 42,
      animationTimingFunction: 42,
      appearance: 55,
      userSelect: 55,
      fontKerning: 32,
      textEmphasisPosition: 55,
      textEmphasis: 55,
      textEmphasisStyle: 55,
      textEmphasisColor: 55,
      boxDecorationBreak: 55,
      clipPath: 55,
      maskImage: 55,
      maskMode: 55,
      maskRepeat: 55,
      maskPosition: 55,
      maskClip: 55,
      maskOrigin: 55,
      maskSize: 55,
      maskComposite: 55,
      mask: 55,
      maskBorderSource: 55,
      maskBorderMode: 55,
      maskBorderSlice: 55,
      maskBorderWidth: 55,
      maskBorderOutset: 55,
      maskBorderRepeat: 55,
      maskBorder: 55,
      maskType: 55,
      textDecorationStyle: 55,
      textDecorationSkip: 55,
      textDecorationLine: 55,
      textDecorationColor: 55,
      filter: 52,
      fontFeatureSettings: 47,
      breakAfter: 49,
      breakBefore: 49,
      breakInside: 49,
      columnCount: 49,
      columnFill: 49,
      columnGap: 49,
      columnRule: 49,
      columnRuleColor: 49,
      columnRuleStyle: 49,
      columnRuleWidth: 49,
      columns: 49,
      columnSpan: 49,
      columnWidth: 49
    },
    safari: {
      flex: 8,
      flexBasis: 8,
      flexDirection: 8,
      flexGrow: 8,
      flexFlow: 8,
      flexShrink: 8,
      flexWrap: 8,
      alignContent: 8,
      alignItems: 8,
      alignSelf: 8,
      justifyContent: 8,
      order: 8,
      transition: 6,
      transitionDelay: 6,
      transitionDuration: 6,
      transitionProperty: 6,
      transitionTimingFunction: 6,
      transform: 8,
      transformOrigin: 8,
      transformOriginX: 8,
      transformOriginY: 8,
      backfaceVisibility: 8,
      perspective: 8,
      perspectiveOrigin: 8,
      transformStyle: 8,
      transformOriginZ: 8,
      animation: 8,
      animationDelay: 8,
      animationDirection: 8,
      animationFillMode: 8,
      animationDuration: 8,
      animationIterationCount: 8,
      animationName: 8,
      animationPlayState: 8,
      animationTimingFunction: 8,
      appearance: 10,
      userSelect: 10,
      backdropFilter: 10,
      fontKerning: 9,
      scrollSnapType: 10,
      scrollSnapPointsX: 10,
      scrollSnapPointsY: 10,
      scrollSnapDestination: 10,
      scrollSnapCoordinate: 10,
      textEmphasisPosition: 7,
      textEmphasis: 7,
      textEmphasisStyle: 7,
      textEmphasisColor: 7,
      boxDecorationBreak: 10,
      clipPath: 10,
      maskImage: 10,
      maskMode: 10,
      maskRepeat: 10,
      maskPosition: 10,
      maskClip: 10,
      maskOrigin: 10,
      maskSize: 10,
      maskComposite: 10,
      mask: 10,
      maskBorderSource: 10,
      maskBorderMode: 10,
      maskBorderSlice: 10,
      maskBorderWidth: 10,
      maskBorderOutset: 10,
      maskBorderRepeat: 10,
      maskBorder: 10,
      maskType: 10,
      textDecorationStyle: 10,
      textDecorationSkip: 10,
      textDecorationLine: 10,
      textDecorationColor: 10,
      shapeImageThreshold: 10,
      shapeImageMargin: 10,
      shapeImageOutside: 10,
      filter: 9,
      hyphens: 10,
      flowInto: 10,
      flowFrom: 10,
      breakBefore: 8,
      breakAfter: 8,
      breakInside: 8,
      regionFragment: 10,
      columnCount: 8,
      columnFill: 8,
      columnGap: 8,
      columnRule: 8,
      columnRuleColor: 8,
      columnRuleStyle: 8,
      columnRuleWidth: 8,
      columns: 8,
      columnSpan: 8,
      columnWidth: 8
    },
    firefox: {
      appearance: 51,
      userSelect: 51,
      boxSizing: 28,
      textAlignLast: 48,
      textDecorationStyle: 35,
      textDecorationSkip: 35,
      textDecorationLine: 35,
      textDecorationColor: 35,
      tabSize: 51,
      hyphens: 42,
      fontFeatureSettings: 33,
      breakAfter: 51,
      breakBefore: 51,
      breakInside: 51,
      columnCount: 51,
      columnFill: 51,
      columnGap: 51,
      columnRule: 51,
      columnRuleColor: 51,
      columnRuleStyle: 51,
      columnRuleWidth: 51,
      columns: 51,
      columnSpan: 51,
      columnWidth: 51
    },
    opera: {
      flex: 16,
      flexBasis: 16,
      flexDirection: 16,
      flexGrow: 16,
      flexFlow: 16,
      flexShrink: 16,
      flexWrap: 16,
      alignContent: 16,
      alignItems: 16,
      alignSelf: 16,
      justifyContent: 16,
      order: 16,
      transform: 22,
      transformOrigin: 22,
      transformOriginX: 22,
      transformOriginY: 22,
      backfaceVisibility: 22,
      perspective: 22,
      perspectiveOrigin: 22,
      transformStyle: 22,
      transformOriginZ: 22,
      animation: 29,
      animationDelay: 29,
      animationDirection: 29,
      animationFillMode: 29,
      animationDuration: 29,
      animationIterationCount: 29,
      animationName: 29,
      animationPlayState: 29,
      animationTimingFunction: 29,
      appearance: 41,
      userSelect: 41,
      fontKerning: 19,
      textEmphasisPosition: 41,
      textEmphasis: 41,
      textEmphasisStyle: 41,
      textEmphasisColor: 41,
      boxDecorationBreak: 41,
      clipPath: 41,
      maskImage: 41,
      maskMode: 41,
      maskRepeat: 41,
      maskPosition: 41,
      maskClip: 41,
      maskOrigin: 41,
      maskSize: 41,
      maskComposite: 41,
      mask: 41,
      maskBorderSource: 41,
      maskBorderMode: 41,
      maskBorderSlice: 41,
      maskBorderWidth: 41,
      maskBorderOutset: 41,
      maskBorderRepeat: 41,
      maskBorder: 41,
      maskType: 41,
      textDecorationStyle: 41,
      textDecorationSkip: 41,
      textDecorationLine: 41,
      textDecorationColor: 41,
      filter: 39,
      fontFeatureSettings: 34,
      breakAfter: 36,
      breakBefore: 36,
      breakInside: 36,
      columnCount: 36,
      columnFill: 36,
      columnGap: 36,
      columnRule: 36,
      columnRuleColor: 36,
      columnRuleStyle: 36,
      columnRuleWidth: 36,
      columns: 36,
      columnSpan: 36,
      columnWidth: 36
    },
    ie: {
      flex: 10,
      flexDirection: 10,
      flexFlow: 10,
      flexWrap: 10,
      transform: 9,
      transformOrigin: 9,
      transformOriginX: 9,
      transformOriginY: 9,
      userSelect: 11,
      wrapFlow: 11,
      wrapThrough: 11,
      wrapMargin: 11,
      scrollSnapType: 11,
      scrollSnapPointsX: 11,
      scrollSnapPointsY: 11,
      scrollSnapDestination: 11,
      scrollSnapCoordinate: 11,
      touchAction: 10,
      hyphens: 11,
      flowInto: 11,
      flowFrom: 11,
      breakBefore: 11,
      breakAfter: 11,
      breakInside: 11,
      regionFragment: 11,
      gridTemplateColumns: 11,
      gridTemplateRows: 11,
      gridTemplateAreas: 11,
      gridTemplate: 11,
      gridAutoColumns: 11,
      gridAutoRows: 11,
      gridAutoFlow: 11,
      grid: 11,
      gridRowStart: 11,
      gridColumnStart: 11,
      gridRowEnd: 11,
      gridRow: 11,
      gridColumn: 11,
      gridColumnEnd: 11,
      gridColumnGap: 11,
      gridRowGap: 11,
      gridArea: 11,
      gridGap: 11,
      textSizeAdjust: 11
    },
    edge: {
      userSelect: 14,
      wrapFlow: 14,
      wrapThrough: 14,
      wrapMargin: 14,
      scrollSnapType: 14,
      scrollSnapPointsX: 14,
      scrollSnapPointsY: 14,
      scrollSnapDestination: 14,
      scrollSnapCoordinate: 14,
      hyphens: 14,
      flowInto: 14,
      flowFrom: 14,
      breakBefore: 14,
      breakAfter: 14,
      breakInside: 14,
      regionFragment: 14,
      gridTemplateColumns: 14,
      gridTemplateRows: 14,
      gridTemplateAreas: 14,
      gridTemplate: 14,
      gridAutoColumns: 14,
      gridAutoRows: 14,
      gridAutoFlow: 14,
      grid: 14,
      gridRowStart: 14,
      gridColumnStart: 14,
      gridRowEnd: 14,
      gridRow: 14,
      gridColumn: 14,
      gridColumnEnd: 14,
      gridColumnGap: 14,
      gridRowGap: 14,
      gridArea: 14,
      gridGap: 14
    },
    ios_saf: {
      flex: 8.1,
      flexBasis: 8.1,
      flexDirection: 8.1,
      flexGrow: 8.1,
      flexFlow: 8.1,
      flexShrink: 8.1,
      flexWrap: 8.1,
      alignContent: 8.1,
      alignItems: 8.1,
      alignSelf: 8.1,
      justifyContent: 8.1,
      order: 8.1,
      transition: 6,
      transitionDelay: 6,
      transitionDuration: 6,
      transitionProperty: 6,
      transitionTimingFunction: 6,
      transform: 8.1,
      transformOrigin: 8.1,
      transformOriginX: 8.1,
      transformOriginY: 8.1,
      backfaceVisibility: 8.1,
      perspective: 8.1,
      perspectiveOrigin: 8.1,
      transformStyle: 8.1,
      transformOriginZ: 8.1,
      animation: 8.1,
      animationDelay: 8.1,
      animationDirection: 8.1,
      animationFillMode: 8.1,
      animationDuration: 8.1,
      animationIterationCount: 8.1,
      animationName: 8.1,
      animationPlayState: 8.1,
      animationTimingFunction: 8.1,
      appearance: 9.3,
      userSelect: 9.3,
      backdropFilter: 9.3,
      fontKerning: 9.3,
      scrollSnapType: 9.3,
      scrollSnapPointsX: 9.3,
      scrollSnapPointsY: 9.3,
      scrollSnapDestination: 9.3,
      scrollSnapCoordinate: 9.3,
      boxDecorationBreak: 9.3,
      clipPath: 9.3,
      maskImage: 9.3,
      maskMode: 9.3,
      maskRepeat: 9.3,
      maskPosition: 9.3,
      maskClip: 9.3,
      maskOrigin: 9.3,
      maskSize: 9.3,
      maskComposite: 9.3,
      mask: 9.3,
      maskBorderSource: 9.3,
      maskBorderMode: 9.3,
      maskBorderSlice: 9.3,
      maskBorderWidth: 9.3,
      maskBorderOutset: 9.3,
      maskBorderRepeat: 9.3,
      maskBorder: 9.3,
      maskType: 9.3,
      textSizeAdjust: 9.3,
      textDecorationStyle: 9.3,
      textDecorationSkip: 9.3,
      textDecorationLine: 9.3,
      textDecorationColor: 9.3,
      shapeImageThreshold: 9.3,
      shapeImageMargin: 9.3,
      shapeImageOutside: 9.3,
      filter: 9,
      hyphens: 9.3,
      flowInto: 9.3,
      flowFrom: 9.3,
      breakBefore: 8.1,
      breakAfter: 8.1,
      breakInside: 8.1,
      regionFragment: 9.3,
      columnCount: 8.1,
      columnFill: 8.1,
      columnGap: 8.1,
      columnRule: 8.1,
      columnRuleColor: 8.1,
      columnRuleStyle: 8.1,
      columnRuleWidth: 8.1,
      columns: 8.1,
      columnSpan: 8.1,
      columnWidth: 8.1
    },
    android: {
      flex: 4.2,
      flexBasis: 4.2,
      flexDirection: 4.2,
      flexGrow: 4.2,
      flexFlow: 4.2,
      flexShrink: 4.2,
      flexWrap: 4.2,
      alignContent: 4.2,
      alignItems: 4.2,
      alignSelf: 4.2,
      justifyContent: 4.2,
      order: 4.2,
      transition: 4.2,
      transitionDelay: 4.2,
      transitionDuration: 4.2,
      transitionProperty: 4.2,
      transitionTimingFunction: 4.2,
      transform: 4.4,
      transformOrigin: 4.4,
      transformOriginX: 4.4,
      transformOriginY: 4.4,
      backfaceVisibility: 4.4,
      perspective: 4.4,
      perspectiveOrigin: 4.4,
      transformStyle: 4.4,
      transformOriginZ: 4.4,
      animation: 4.4,
      animationDelay: 4.4,
      animationDirection: 4.4,
      animationFillMode: 4.4,
      animationDuration: 4.4,
      animationIterationCount: 4.4,
      animationName: 4.4,
      animationPlayState: 4.4,
      animationTimingFunction: 4.4,
      appearance: 51,
      userSelect: 51,
      fontKerning: 4.4,
      textEmphasisPosition: 51,
      textEmphasis: 51,
      textEmphasisStyle: 51,
      textEmphasisColor: 51,
      boxDecorationBreak: 51,
      clipPath: 51,
      maskImage: 51,
      maskMode: 51,
      maskRepeat: 51,
      maskPosition: 51,
      maskClip: 51,
      maskOrigin: 51,
      maskSize: 51,
      maskComposite: 51,
      mask: 51,
      maskBorderSource: 51,
      maskBorderMode: 51,
      maskBorderSlice: 51,
      maskBorderWidth: 51,
      maskBorderOutset: 51,
      maskBorderRepeat: 51,
      maskBorder: 51,
      maskType: 51,
      filter: 51,
      fontFeatureSettings: 4.4,
      breakAfter: 51,
      breakBefore: 51,
      breakInside: 51,
      columnCount: 51,
      columnFill: 51,
      columnGap: 51,
      columnRule: 51,
      columnRuleColor: 51,
      columnRuleStyle: 51,
      columnRuleWidth: 51,
      columns: 51,
      columnSpan: 51,
      columnWidth: 51
    },
    and_chr: {
      appearance: 51,
      userSelect: 51,
      textEmphasisPosition: 51,
      textEmphasis: 51,
      textEmphasisStyle: 51,
      textEmphasisColor: 51,
      boxDecorationBreak: 51,
      clipPath: 51,
      maskImage: 51,
      maskMode: 51,
      maskRepeat: 51,
      maskPosition: 51,
      maskClip: 51,
      maskOrigin: 51,
      maskSize: 51,
      maskComposite: 51,
      mask: 51,
      maskBorderSource: 51,
      maskBorderMode: 51,
      maskBorderSlice: 51,
      maskBorderWidth: 51,
      maskBorderOutset: 51,
      maskBorderRepeat: 51,
      maskBorder: 51,
      maskType: 51,
      textDecorationStyle: 51,
      textDecorationSkip: 51,
      textDecorationLine: 51,
      textDecorationColor: 51,
      filter: 51
    },
    and_uc: {
      flex: 9.9,
      flexBasis: 9.9,
      flexDirection: 9.9,
      flexGrow: 9.9,
      flexFlow: 9.9,
      flexShrink: 9.9,
      flexWrap: 9.9,
      alignContent: 9.9,
      alignItems: 9.9,
      alignSelf: 9.9,
      justifyContent: 9.9,
      order: 9.9,
      transition: 9.9,
      transitionDelay: 9.9,
      transitionDuration: 9.9,
      transitionProperty: 9.9,
      transitionTimingFunction: 9.9,
      transform: 9.9,
      transformOrigin: 9.9,
      transformOriginX: 9.9,
      transformOriginY: 9.9,
      backfaceVisibility: 9.9,
      perspective: 9.9,
      perspectiveOrigin: 9.9,
      transformStyle: 9.9,
      transformOriginZ: 9.9,
      animation: 9.9,
      animationDelay: 9.9,
      animationDirection: 9.9,
      animationFillMode: 9.9,
      animationDuration: 9.9,
      animationIterationCount: 9.9,
      animationName: 9.9,
      animationPlayState: 9.9,
      animationTimingFunction: 9.9,
      appearance: 9.9,
      userSelect: 9.9,
      fontKerning: 9.9,
      textEmphasisPosition: 9.9,
      textEmphasis: 9.9,
      textEmphasisStyle: 9.9,
      textEmphasisColor: 9.9,
      maskImage: 9.9,
      maskMode: 9.9,
      maskRepeat: 9.9,
      maskPosition: 9.9,
      maskClip: 9.9,
      maskOrigin: 9.9,
      maskSize: 9.9,
      maskComposite: 9.9,
      mask: 9.9,
      maskBorderSource: 9.9,
      maskBorderMode: 9.9,
      maskBorderSlice: 9.9,
      maskBorderWidth: 9.9,
      maskBorderOutset: 9.9,
      maskBorderRepeat: 9.9,
      maskBorder: 9.9,
      maskType: 9.9,
      textSizeAdjust: 9.9,
      filter: 9.9,
      hyphens: 9.9,
      flowInto: 9.9,
      flowFrom: 9.9,
      breakBefore: 9.9,
      breakAfter: 9.9,
      breakInside: 9.9,
      regionFragment: 9.9,
      fontFeatureSettings: 9.9,
      columnCount: 9.9,
      columnFill: 9.9,
      columnGap: 9.9,
      columnRule: 9.9,
      columnRuleColor: 9.9,
      columnRuleStyle: 9.9,
      columnRuleWidth: 9.9,
      columns: 9.9,
      columnSpan: 9.9,
      columnWidth: 9.9
    },
    op_mini: {}
  }, e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function n(e, t) {
    if ("string" == typeof t && !(0, l.default)(t) && t.indexOf("calc(") > -1) return (0, a.default)(e, t, function (e, t) {
      return t.replace(/calc\(/g, e + "calc(")
    })
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  var i = r(6),
    a = o(i),
    s = r(9),
    l = o(s);
  e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e, t) {
    if ("cursor" === e && a[t]) return (0, i.default)(e, t)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var n = r(6),
    i = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n),
    a = {
      "zoom-in": !0,
      "zoom-out": !0,
      grab: !0,
      grabbing: !0
    };
  e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e, t) {
    if ("display" === e && n[t]) return {
      display: ["-webkit-box", "-moz-box", "-ms-" + t + "box", "-webkit-" + t, t]
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var n = {
    flex: !0,
    "inline-flex": !0
  };
  e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }

  function n(e, t) {
    if (a[e]) return o({}, a[e], i[t] || t)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  var i = {
      "space-around": "distribute",
      "space-between": "justify",
      "flex-start": "start",
      "flex-end": "end"
    },
    a = {
      alignContent: "msFlexLinePack",
      alignSelf: "msFlexItemAlign",
      alignItems: "msFlexAlign",
      justifyContent: "msFlexPack",
      order: "msFlexOrder",
      flexGrow: "msFlexPositive",
      flexShrink: "msFlexNegative",
      flexBasis: "msPreferredSize"
    };
  e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }

  function n(e, t) {
    return "flexDirection" === e && "string" == typeof t ? {
      WebkitBoxOrient: t.indexOf("column") > -1 ? "vertical" : "horizontal",
      WebkitBoxDirection: t.indexOf("reverse") > -1 ? "reverse" : "normal"
    } : a[e] ? o({}, a[e], i[t] || t) : void 0
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  var i = {
      "space-around": "justify",
      "space-between": "justify",
      "flex-start": "start",
      "flex-end": "end",
      "wrap-reverse": "multiple",
      wrap: "multiple"
    },
    a = {
      alignItems: "WebkitBoxAlign",
      justifyContent: "WebkitBoxPack",
      flexWrap: "WebkitBoxLines"
    };
  e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function n(e, t) {
    if ("string" == typeof t && !(0, l.default)(t) && null !== t.match(c)) return (0, a.default)(e, t)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  var i = r(6),
    a = o(i),
    s = r(9),
    l = o(s),
    c = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
  e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e, t) {
    if ("position" === e && "sticky" === t) return {
      position: ["-webkit-sticky", "sticky"]
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o, e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e, t) {
    if (a[e] && s[t]) return (0, i.default)(e, t)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var n = r(6),
    i = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n),
    a = {
      maxHeight: !0,
      maxWidth: !0,
      width: !0,
      height: !0,
      columnWidth: !0,
      minWidth: !0,
      minHeight: !0
    },
    s = {
      "min-content": !0,
      "max-content": !0,
      "fill-available": !0,
      "fit-content": !0,
      "contain-floats": !0
    };
  e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function n(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }

  function i(e, t) {
    if ("string" == typeof t && y[e]) {
      var r, o = a(t),
        i = o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (e) {
          return null === e.match(/-moz-|-ms-/)
        }).join(",");
      return e.indexOf("Webkit") > -1 ? n({}, e, i) : (r = {}, n(r, "Webkit" + (0, u.default)(e), i), n(r, e, o), r)
    }
  }

  function a(e) {
    if ((0, f.default)(e)) return e;
    var t = e.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
    return t.forEach(function (e, r) {
      t[r] = Object.keys(h.default).reduce(function (t, r) {
        var o = "-" + r.toLowerCase() + "-";
        return Object.keys(h.default[r]).forEach(function (r) {
          var n = (0, l.default)(r);
          e.indexOf(n) > -1 && "order" !== n && (t = e.replace(n, o + n) + "," + t)
        }), t
      }, e)
    }), t.join(",")
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var s = r(13),
    l = o(s),
    c = r(8),
    u = o(c),
    d = r(9),
    f = o(d),
    p = r(14),
    h = o(p),
    y = {
      transition: !0,
      transitionProperty: !0,
      WebkitTransition: !0,
      WebkitTransitionProperty: !0
    };
  e.exports = t.default
}, function (e, t, r) {
  "use strict";

  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function n(e) {
    return Object.keys(e).forEach(function (t) {
      var r = e[t];
      r instanceof Object && !Array.isArray(r) ? e[t] = n(r) : Object.keys(s.default).forEach(function (o) {
        s.default[o][t] && (e[o + (0, c.default)(t)] = r)
      })
    }), Object.keys(e).forEach(function (t) {
      [].concat(e[t]).forEach(function (r, o) {
        _.forEach(function (o) {
          return i(e, o(t, r))
        })
      })
    }), (0, d.default)(e)
  }

  function i(e) {
    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
    Object.keys(t).forEach(function (r) {
      var o = e[r];
      Array.isArray(o) ? [].concat(t[r]).forEach(function (t) {
        var n = o.indexOf(t);
        n > -1 && e[r].splice(n, 1), e[r].push(t)
      }) : e[r] = t[r]
    })
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  var a = r(14),
    s = o(a),
    l = r(8),
    c = o(l),
    u = r(15),
    d = o(u),
    f = r(76),
    p = o(f),
    h = r(70),
    y = o(h),
    m = r(71),
    g = o(m),
    v = r(72),
    b = o(v),
    S = r(77),
    w = o(S),
    x = r(75),
    k = o(x),
    L = r(78),
    C = o(L),
    M = r(73),
    O = o(M),
    P = r(74),
    B = o(P),
    _ = [p.default, y.default, g.default, w.default, k.default, C.default, O.default, B.default, b.default];
  e.exports = t.default
}, function (e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = r(55),
    n = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(o),
    i = {
      Webkit: ["chrome", "safari", "ios", "android", "phantom", "opera", "webos", "blackberry", "bada", "tizen", "chromium", "vivaldi"],
      Moz: ["firefox", "seamonkey", "sailfish"],
      ms: ["msie", "msedge"]
    },
    a = {
      chrome: [
        ["chrome"],
        ["chromium"]
      ],
      safari: [
        ["safari"]
      ],
      firefox: [
        ["firefox"]
      ],
      edge: [
        ["msedge"]
      ],
      opera: [
        ["opera"],
        ["vivaldi"]
      ],
      ios_saf: [
        ["ios", "mobile"],
        ["ios", "tablet"]
      ],
      ie: [
        ["msie"]
      ],
      op_mini: [
        ["opera", "mobile"],
        ["opera", "tablet"]
      ],
      and_uc: [
        ["android", "mobile"],
        ["android", "tablet"]
      ],
      android: [
        ["android", "mobile"],
        ["android", "tablet"]
      ]
    },
    s = function (e) {
      if (e.firefox) return "firefox";
      var t = "";
      return Object.keys(a).forEach(function (r) {
        a[r].forEach(function (o) {
          var n = 0;
          o.forEach(function (t) {
            e[t] && (n += 1)
          }), o.length === n && (t = r)
        })
      }), t
    };
  t.default = function (e) {
    if (!e) return !1;
    var t = n.default._detect(e);
    return Object.keys(i).forEach(function (e) {
      i[e].forEach(function (r) {
        t[r] && (t.prefix = {
          inline: e,
          css: "-" + e.toLowerCase() + "-"
        })
      })
    }), t.browser = s(t), t.version = t.version ? parseFloat(t.version) : parseInt(parseFloat(t.osversion), 10), t.osversion = parseFloat(t.osversion), "ios_saf" === t.browser && t.version > t.osversion && (t.version = t.osversion, t.safari = !0), "android" === t.browser && t.chrome && t.version > 37 && (t.browser = "and_chr"), "android" === t.browser && t.osversion < 5 && (t.version = t.osversion), t
  }, e.exports = t.default
}, function (e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function (e) {
    var t = e.browser,
      r = e.version,
      o = e.prefix,
      n = "keyframes";
    return ("chrome" === t && r < 43 || ("safari" === t || "ios_saf" === t) && r < 9 || "opera" === t && r < 30 || "android" === t && r <= 4.4 || "and_uc" === t) && (n = o.css + n), n
  }, e.exports = t.default
}, function (e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function (e) {
    return null !== e.match(/^(Webkit|Moz|O|ms)/)
  }, e.exports = t.default
}, function (e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function (e) {
    var t = e.replace(/^(ms|Webkit|Moz|O)/, "");
    return t.charAt(0).toLowerCase() + t.slice(1)
  }, e.exports = t.default
}, function (e, t, r) {
  "use strict";
  var o = r(56),
    n = r(57);
  e.exports = function () {
    function e() {
      n(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
    }

    function t() {
      return e
    }
    e.isRequired = e;
    var r = {
      array: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t
    };
    return r.checkPropTypes = o, r.PropTypes = r, r
  }
}, function (e, t, r) {
  e.exports = r(17)
}], [85]);
