System.register(["knockout"], function (_export) {
  var ko, _prototypeProperties, _classCallCheck, Test, StringifyValueConverter, colorsObject;

  function getColors() {
    var colors = [],
        propertyName;
    for (propertyName in colorsObject) {
      if (colorsObject.hasOwnProperty(propertyName)) {
        colors.push({ hex: colorsObject[propertyName], name: propertyName });
      }
    }
    return colors;
  }

  return {
    setters: [function (_knockout) {
      ko = _knockout["default"];
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Test = _export("Test", (function () {
        function Test() {
          _classCallCheck(this, Test);

          this.colors = ko.observableArray(getColors());

          var index = ko.observable("0");
          var value = ko.observable("test");

          Object.defineProperty(this, "insertIndex", {
            get: function () {
              return index;
            },
            enumerable: true,
            configurable: false
          });

          Object.defineProperty(this, "value", {
            get: function () {
              return value;
            },
            enumerable: true,
            configurable: false
          });

          this.selectedColorName = ko.observable("blue");
          this.selectedColorNames = ko.observableArray(["aliceblue", "blue"]);

          this.selectedColor = ko.observable(null);
          this.selectedColors = ko.observableArray([]);
        }

        _prototypeProperties(Test, null, {
          insert: {
            value: function insert() {
              this.colors.splice(parseInt(this.insertIndex(), 10), 0, { hex: "#000000", name: this.value() });
            },
            writable: true,
            configurable: true
          }
        });

        return Test;
      })());
      StringifyValueConverter = _export("StringifyValueConverter", (function () {
        function StringifyValueConverter() {
          _classCallCheck(this, StringifyValueConverter);
        }

        _prototypeProperties(StringifyValueConverter, null, {
          toView: {
            value: function toView(value) {
              if (value === null) {
                return "null";
              }if (value === undefined) {
                return "undefined";
              }return JSON.stringify(value, null, 2);
            },
            writable: true,
            configurable: true
          }
        });

        return StringifyValueConverter;
      })());
      colorsObject = {
        aqua: "#00ffff",
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        black: "#000000",
        blue: "#0000ff",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgreen: "#006400",
        darkturquoise: "#00ced1",
        deepskyblue: "#00bfff",
        green: "#008000",
        lime: "#00ff00",
        mediumblue: "#0000cd",
        mediumspringgreen: "#00fa9a",
        navy: "#000080",
        springgreen: "#00ff7f",
        teal: "#008080",
        midnightblue: "#191970",
        dodgerblue: "#1e90ff",
        lightseagreen: "#20b2aa",
        forestgreen: "#228b22",
        seagreen: "#2e8b57",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        limegreen: "#32cd32",
        mediumseagreen: "#3cb371",
        turquoise: "#40e0d0",
        royalblue: "#4169e1",
        steelblue: "#4682b4",
        darkslateblue: "#483d8b",
        mediumturquoise: "#48d1cc",
        indigo: "#4b0082",
        darkolivegreen: "#556b2f",
        cadetblue: "#5f9ea0",
        cornflowerblue: "#6495ed",
        mediumaquamarine: "#66cdaa",
        dimgray: "#696969",
        dimgrey: "#696969",
        slateblue: "#6a5acd",
        olivedrab: "#6b8e23",
        slategray: "#708090",
        slategrey: "#708090",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        mediumslateblue: "#7b68ee",
        lawngreen: "#7cfc00",
        aquamarine: "#7fffd4",
        chartreuse: "#7fff00",
        gray: "#808080",
        grey: "#808080",
        maroon: "#800000",
        olive: "#808000",
        purple: "#800080",
        lightskyblue: "#87cefa",
        skyblue: "#87ceeb",
        blueviolet: "#8a2be2",
        darkmagenta: "#8b008b",
        darkred: "#8b0000",
        saddlebrown: "#8b4513",
        darkseagreen: "#8fbc8f",
        lightgreen: "#90ee90",
        mediumpurple: "#9370db",
        darkviolet: "#9400d3",
        palegreen: "#98fb98",
        darkorchid: "#9932cc",
        yellowgreen: "#9acd32",
        sienna: "#a0522d",
        brown: "#a52a2a",
        darkgray: "#a9a9a9",
        darkgrey: "#a9a9a9",
        greenyellow: "#adff2f",
        lightblue: "#add8e6",
        paleturquoise: "#afeeee",
        lightsteelblue: "#b0c4de",
        powderblue: "#b0e0e6",
        firebrick: "#b22222",
        darkgoldenrod: "#b8860b",
        mediumorchid: "#ba55d3",
        rosybrown: "#bc8f8f",
        darkkhaki: "#bdb76b",
        silver: "#c0c0c0",
        mediumvioletred: "#c71585",
        indianred: "#cd5c5c",
        peru: "#cd853f",
        chocolate: "#d2691e",
        tan: "#d2b48c",
        lightgray: "#d3d3d3",
        lightgrey: "#d3d3d3",
        thistle: "#d8bfd8",
        goldenrod: "#daa520",
        orchid: "#da70d6",
        palevioletred: "#db7093",
        crimson: "#dc143c",
        gainsboro: "#dcdcdc",
        plum: "#dda0dd",
        burlywood: "#deb887",
        lightcyan: "#e0ffff",
        lavender: "#e6e6fa",
        darksalmon: "#e9967a",
        palegoldenrod: "#eee8aa",
        violet: "#ee82ee",
        azure: "#f0ffff",
        honeydew: "#f0fff0",
        khaki: "#f0e68c",
        lightcoral: "#f08080",
        sandybrown: "#f4a460",
        beige: "#f5f5dc",
        mintcream: "#f5fffa",
        wheat: "#f5deb3",
        whitesmoke: "#f5f5f5",
        ghostwhite: "#f8f8ff",
        lightgoldenrodyellow: "#fafad2",
        linen: "#faf0e6",
        salmon: "#fa8072",
        oldlace: "#fdf5e6",
        bisque: "#ffe4c4",
        blanchedalmond: "#ffebcd",
        coral: "#ff7f50",
        cornsilk: "#fff8dc",
        darkorange: "#ff8c00",
        deeppink: "#ff1493",
        floralwhite: "#fffaf0",
        fuchsia: "#ff00ff",
        gold: "#ffd700",
        hotpink: "#ff69b4",
        ivory: "#fffff0",
        lavenderblush: "#fff0f5",
        lemonchiffon: "#fffacd",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightyellow: "#ffffe0",
        magenta: "#ff00ff",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        orange: "#ffa500",
        orangered: "#ff4500",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        pink: "#ffc0cb",
        red: "#ff0000",
        seashell: "#fff5ee",
        snow: "#fffafa",
        tomato: "#ff6347",
        white: "#ffffff",
        yellow: "#ffff00",
        rebeccapurple: "#663399"
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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