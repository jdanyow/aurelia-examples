System.register(["./colors"], function (_export) {
  var getColors, _prototypeProperties, _classCallCheck, Test, StringifyValueConverter;

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

          this.selectedColorName = "blue";
          this.selectedColorNames = ["aliceblue", "blue"];
          this.selectedColorNames2 = ["aliceblue", "blue"];

          this.selectedColor = this.colors[4];
          this.selectedColors = [this.colors[1], this.colors[4]];
          this.selectedColors2 = [this.colors[1], this.colors[4]];

          this.hack = 0;
        }

        _prototypeProperties(Test, null, {
          randomize: {
            value: function randomize() {
              var i = this.random(1, 20),
                  items = [];
              while (i--) {
                items[i] = this.colors[this.random(0, this.colors.length - 1)];
              }

              // property assignment.
              this.selectedColorName = items[0].name;
              this.selectedColorNames = items.map(function (c) {
                return c.name;
              });

              this.selectedColor = items[0];
              this.selectedColors = items;

              // property mutation.
              if (this.selectedColorNames2 === null) {
                this.selectedColorNames2 = [];
              }
              if (this.selectedColors2 === null) {
                this.selectedColors2 = [];
              }
              while (this.selectedColorNames2.length) {
                this.selectedColorNames2.pop();
              }
              while (this.selectedColors2.length) {
                this.selectedColors2.pop();
              }
              i = items.length;
              while (i--) {
                this.selectedColorNames2.push(items[i].name);
                this.selectedColors2.push(items[i]);
              }
              // make sure the interpolation bindings related to the push/pop examples refresh.
              this.hack++;
            },
            writable: true,
            configurable: true
          },
          assignNull: {
            value: function assignNull() {
              this.selectedColorName = null;
              this.selectedColorNames = null;
              this.selectedColorNames2 = null;

              this.selectedColor = null;
              this.selectedColors = null;
              this.selectedColors2 = null;
            },
            writable: true,
            configurable: true
          },
          assignEmpty: {
            value: function assignEmpty() {
              this.selectedColorName = "";
              this.selectedColorNames = [];
              this.selectedColorNames2 = [];

              this.selectedColor = null;
              this.selectedColors = [];
              this.selectedColors2 = [];
            },
            writable: true,
            configurable: true
          },
          assignGarbage: {
            value: function assignGarbage() {
              this.selectedColorName = "Garbage";
              this.selectedColorNames = ["Donald Draper", "Frank Underwood"];
              this.selectedColorNames2 = ["Aurelia", "Angular", "Backbone", "Durandal", "Ember", "Knockout"];

              this.selectedColor = { garbabe: "asdfasdf", foo: true };
              this.selectedColors = [{ name: "Donald Draper" }, { name: "Frank Underwood" }];
              this.selectedColors2 = [["Aurelia", "Angular", "Backbone", "Durandal", "Ember", "Knockout"], ["Aurelia", "Angular", "Backbone", "Durandal", "Ember", "Knockout"]];
            },
            writable: true,
            configurable: true
          },
          randomizeOptions: {
            value: function randomizeOptions() {
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
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0FBQy9FLGtCQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQ25LOzs7O0FBRUQsMEJBQWdCO21CQUFBLDRCQUFHO0FBQ2pCLGtCQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtrQkFDcEIsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDdEIscUJBQU0sQ0FBQyxFQUFFLEVBQUU7QUFDVCxzQkFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2VBQ3BEO0FBQ0Qsb0JBQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQzt1QkFBSyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJO2VBQUEsQ0FBQyxDQUFDOztBQUV2QyxlQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNsQixxQkFBTSxDQUFDLEVBQUUsRUFBRTtBQUNULHVCQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7ZUFDdkI7YUFDRjs7OztBQUVELGdCQUFNO21CQUFBLGdCQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDZixxQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQSxBQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDMUQ7Ozs7OztlQWpHVSxJQUFJOztBQW9HSiw2QkFBdUI7aUJBQXZCLHVCQUF1QjtnQ0FBdkIsdUJBQXVCOzs7NkJBQXZCLHVCQUF1QjtBQUNsQyxnQkFBTTttQkFBQSxnQkFBQyxLQUFLLEVBQUU7QUFDWixrQkFBSSxLQUFLLEtBQUssSUFBSTtBQUNoQix1QkFBTyxNQUFNLENBQUM7ZUFBQSxBQUNoQixJQUFJLEtBQUssS0FBSyxTQUFTO0FBQ3JCLHVCQUFPLFdBQVcsQ0FBQztlQUFBLEFBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDOzs7Ozs7ZUFQVSx1QkFBdUIiLCJmaWxlIjoic2VsZWN0LXRlc3QuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==