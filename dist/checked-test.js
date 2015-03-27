System.register(["./colors"], function (_export) {
  var getColors, _prototypeProperties, _classCallCheck, Test, StringifyValueConverter, InvertColorValueConverter;

  return {
    setters: [function (_colors) {
      getColors = _colors.getColors;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Test = _export("Test", (function () {
        function Test() {
          _classCallCheck(this, Test);

          this.colors = getColors();

          this.selectedColors = [this.colors[82], this.colors[3]];
          this.selectedColor = this.colors[82];

          this.selectedColorNames = [this.colors[82].name, this.colors[3].name];
          this.selectedColorName = this.colors[82].name;

          this.checkedBooleanTest = { a: false, b: true, c: false, d: true };
          this.radioBooleanTest = false;
        }

        _prototypeProperties(Test, null, {
          deselectAll: {
            value: function deselectAll() {
              this.selectedColors = [];
              this.selectedColor = null;
              this.selectedColorNames = [];
              this.selectedColorName = null;

              this.checkedBooleanTest.a = false;
              this.checkedBooleanTest.b = false;
              this.checkedBooleanTest.c = false;
              this.checkedBooleanTest.d = false;

              this.radioBooleanTest = null;
            },
            writable: true,
            configurable: true
          },
          randomizeSelection: {
            value: function randomizeSelection() {
              var _this = this;

              var iterations = arguments[0] === undefined ? 7 : arguments[0];

              var items = this.colors.slice(0),
                  i = items.length;
              while (i--) {
                items[i].sort = this.random(0, items.length - 1);
              }
              items.sort(function (a, b) {
                return a.sort - b.sort;
              });

              i = items.length;
              while (i--) {
                delete items[i].sort;
              }

              items = items.slice(0, this.random(1, items.length));

              this.selectedColor = items[0];
              this.selectedColorName = this.selectedColor.name;

              if (this.selectedColorNames === null) {
                this.selectedColorNames = [];
              }
              if (this.selectedColors === null) {
                this.selectedColors = [];
              }
              while (this.selectedColorNames.length) {
                this.selectedColorNames.pop();
              }
              while (this.selectedColors.length) {
                this.selectedColors.pop();
              }
              i = items.length;
              while (i--) {
                this.selectedColorNames.push(items[i].name);
                this.selectedColors.push(items[i]);
              }

              this.checkedBooleanTest.a = this.random(0, 1) === 1;
              this.checkedBooleanTest.b = this.random(0, 1) === 1;
              this.checkedBooleanTest.c = this.random(0, 1) === 1;
              this.checkedBooleanTest.d = this.random(0, 1) === 1;

              var r = this.random(0, 2);
              switch (r) {
                case 0:
                  this.radioBooleanTest = null;
                  break;
                case 1:
                  this.radioBooleanTest = false;
                  break;
                case 2:
                  this.radioBooleanTest = true;
                  break;
              }

              if (iterations > 0) {
                iterations--;
                setTimeout(function () {
                  return _this.randomizeSelection(iterations);
                }, 100);
              }
            },
            writable: true,
            configurable: true
          },
          randomizeOptions: {
            value: function randomizeOptions() {
              var _this = this;

              var iterations = arguments[0] === undefined ? 7 : arguments[0];

              var colors = this.colors,
                  i = colors.length;
              while (i--) {
                colors[i].sort = this.random(0, colors.length - 1);
              }
              colors.sort(function (a, b) {
                return a.sort - b.sort;
              });

              i = colors.length;
              while (i--) {
                delete colors[i].sort;
              }

              if (iterations > 0) {
                iterations--;
                setTimeout(function () {
                  return _this.randomizeOptions(iterations);
                }, 100);
              }
            },
            writable: true,
            configurable: true
          },
          random: {
            value: function random(min, max) {
              return Math.floor(Math.random() * (max - min + 1) + min);
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
      InvertColorValueConverter = _export("InvertColorValueConverter", (function () {
        function InvertColorValueConverter() {
          _classCallCheck(this, InvertColorValueConverter);
        }

        _prototypeProperties(InvertColorValueConverter, null, {
          hexToRgb: {
            value: function hexToRgb(hex) {
              var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
              return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
              } : null;
            },
            writable: true,
            configurable: true
          },
          toView: {
            value: function toView(hex) {
              var rgb = this.hexToRgb(hex);
              return rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 > 186 ? "#000000" : "#ffffff";
            },
            writable: true,
            configurable: true
          }
        });

        return InvertColorValueConverter;
      })());
    }
  };
});

// function argsArrayToObject(args) {
//   var i = 1, options = {};
//   while(i < args.length) {
//     options[args[i]] = args[i + 1];
//     i += 2;
//   }
//   return options;
// }
//
// export class TestValueConverter {
//   toView(...args) {
//     var value = args[0];
//     args = argsArrayToObject(args);
//
//     console.log(JSON.stringify(args, null, 4));
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrZWQtdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsU0FBUyx5Q0FFSixJQUFJLEVBZ0hKLHVCQUF1QixFQVV2Qix5QkFBeUI7Ozs7QUE1SDlCLGVBQVMsV0FBVCxTQUFTOzs7Ozs7Ozs7QUFFSixVQUFJO0FBQ0osaUJBREEsSUFBSTtnQ0FBSixJQUFJOztBQUViLGNBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxFQUFFLENBQUM7O0FBRTFCLGNBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RCxjQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7O0FBRXJDLGNBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEUsY0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDOztBQUU5QyxjQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDbkUsY0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztTQUMvQjs7NkJBWlUsSUFBSTtBQWNmLHFCQUFXO21CQUFBLHVCQUFHO0FBQ1osa0JBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLGtCQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztBQUMxQixrQkFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztBQUM3QixrQkFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQzs7QUFFOUIsa0JBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ2xDLGtCQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUNsQyxrQkFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDbEMsa0JBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDOztBQUVsQyxrQkFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQzthQUM5Qjs7OztBQUVELDRCQUFrQjttQkFBQSw4QkFBaUI7OztrQkFBaEIsVUFBVSxnQ0FBRyxDQUFDOztBQUMvQixrQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2tCQUM1QixDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUNyQixxQkFBTSxDQUFDLEVBQUUsRUFBRTtBQUNULHFCQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7ZUFDbEQ7QUFDRCxtQkFBSyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO3VCQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUk7ZUFBQSxDQUFDLENBQUM7O0FBRXRDLGVBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ2pCLHFCQUFNLENBQUMsRUFBRSxFQUFFO0FBQ1QsdUJBQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztlQUN0Qjs7QUFFRCxtQkFBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOztBQUVyRCxrQkFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsa0JBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQzs7QUFFakQsa0JBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLElBQUksRUFBRTtBQUNwQyxvQkFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztlQUM5QjtBQUNELGtCQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxFQUFFO0FBQ2hDLG9CQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztlQUMxQjtBQUNELHFCQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUU7QUFDcEMsb0JBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztlQUMvQjtBQUNELHFCQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO0FBQ2hDLG9CQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDO2VBQzNCO0FBQ0QsZUFBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDakIscUJBQU0sQ0FBQyxFQUFFLEVBQUU7QUFDVCxvQkFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUMsb0JBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2VBQ3BDOztBQUVELGtCQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxrQkFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsa0JBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELGtCQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFcEQsa0JBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFCLHNCQUFPLENBQUM7QUFDTixxQkFBSyxDQUFDO0FBQ0osc0JBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7QUFDN0Isd0JBQU07QUFBQSxBQUNSLHFCQUFLLENBQUM7QUFDSixzQkFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztBQUM5Qix3QkFBTTtBQUFBLEFBQ1IscUJBQUssQ0FBQztBQUNKLHNCQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0FBQzdCLHdCQUFNO0FBQUEsZUFDVDs7QUFFRCxrQkFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFO0FBQ2xCLDBCQUFVLEVBQUUsQ0FBQztBQUNiLDBCQUFVLENBQUM7eUJBQU0sTUFBSyxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7aUJBQUEsRUFBRSxHQUFHLENBQUMsQ0FBQztlQUM1RDthQUNGOzs7O0FBRUQsMEJBQWdCO21CQUFBLDRCQUFpQjs7O2tCQUFoQixVQUFVLGdDQUFHLENBQUM7O0FBQzdCLGtCQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtrQkFDcEIsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDdEIscUJBQU0sQ0FBQyxFQUFFLEVBQUU7QUFDVCxzQkFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2VBQ3BEO0FBQ0Qsb0JBQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQzt1QkFBSyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJO2VBQUEsQ0FBQyxDQUFDOztBQUV2QyxlQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNsQixxQkFBTSxDQUFDLEVBQUUsRUFBRTtBQUNULHVCQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7ZUFDdkI7O0FBRUQsa0JBQUksVUFBVSxHQUFHLENBQUMsRUFBRTtBQUNsQiwwQkFBVSxFQUFFLENBQUM7QUFDYiwwQkFBVSxDQUFDO3lCQUFNLE1BQUssZ0JBQWdCLENBQUMsVUFBVSxDQUFDO2lCQUFBLEVBQUUsR0FBRyxDQUFDLENBQUM7ZUFDMUQ7YUFDRjs7OztBQUVELGdCQUFNO21CQUFBLGdCQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDZixxQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQSxBQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDMUQ7Ozs7OztlQTdHVSxJQUFJOztBQWdISiw2QkFBdUI7aUJBQXZCLHVCQUF1QjtnQ0FBdkIsdUJBQXVCOzs7NkJBQXZCLHVCQUF1QjtBQUNsQyxnQkFBTTttQkFBQSxnQkFBQyxLQUFLLEVBQUU7QUFDWixrQkFBSSxLQUFLLEtBQUssSUFBSTtBQUNoQix1QkFBTyxNQUFNLENBQUM7ZUFBQSxBQUNoQixJQUFJLEtBQUssS0FBSyxTQUFTO0FBQ3JCLHVCQUFPLFdBQVcsQ0FBQztlQUFBLEFBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDOzs7Ozs7ZUFQVSx1QkFBdUI7O0FBVXZCLCtCQUF5QjtpQkFBekIseUJBQXlCO2dDQUF6Qix5QkFBeUI7Ozs2QkFBekIseUJBQXlCO0FBQ3BDLGtCQUFRO21CQUFBLGtCQUFDLEdBQUcsRUFBRTtBQUNaLGtCQUFJLE1BQU0sR0FBRywyQ0FBMkMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkUscUJBQU8sTUFBTSxHQUFHO0FBQ1osaUJBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUMxQixpQkFBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0FBQzFCLGlCQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7ZUFDN0IsR0FBRyxJQUFJLENBQUM7YUFDVjs7OztBQUVELGdCQUFNO21CQUFBLGdCQUFDLEdBQUcsRUFBRTtBQUNWLGtCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLHFCQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxTQUFTLEdBQUcsU0FBUyxDQUFDO2FBQ3BGOzs7Ozs7ZUFiVSx5QkFBeUIiLCJmaWxlIjoiY2hlY2tlZC10ZXN0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=