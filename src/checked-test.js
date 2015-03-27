import {getColors} from './colors';

export class Test {
  constructor() {
    this.colors = getColors();

    this.selectedColors = [this.colors[82], this.colors[3]];
    this.selectedColor = this.colors[82];

    this.selectedColorNames = [this.colors[82].name, this.colors[3].name];
    this.selectedColorName = this.colors[82].name;

    this.checkedBooleanTest = { a: false, b: true, c: false, d: true };
    this.radioBooleanTest = false;
  }

  deselectAll() {
    this.selectedColors = [];
    this.selectedColor = null;
    this.selectedColorNames = [];
    this.selectedColorName = null;

    this.checkedBooleanTest.a = false;
    this.checkedBooleanTest.b = false;
    this.checkedBooleanTest.c = false;
    this.checkedBooleanTest.d = false;

    this.radioBooleanTest = null;
  }

  randomizeSelection(iterations = 7) {
    var items = this.colors.slice(0),
        i = items.length;
    while(i--) {
      items[i].sort = this.random(0, items.length - 1);
    }
    items.sort((a, b) => a.sort - b.sort);

    i = items.length;
    while(i--) {
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
    while(this.selectedColorNames.length) {
      this.selectedColorNames.pop();
    }
    while(this.selectedColors.length) {
      this.selectedColors.pop();
    }
    i = items.length;
    while(i--) {
      this.selectedColorNames.push(items[i].name);
      this.selectedColors.push(items[i]);
    }

    this.checkedBooleanTest.a = this.random(0, 1) === 1;
    this.checkedBooleanTest.b = this.random(0, 1) === 1;
    this.checkedBooleanTest.c = this.random(0, 1) === 1;
    this.checkedBooleanTest.d = this.random(0, 1) === 1;

    var r = this.random(0, 2);
    switch(r) {
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
      setTimeout(() => this.randomizeSelection(iterations), 100);
    }
  }

  randomizeOptions(iterations = 7) {
    var colors = this.colors,
        i = colors.length;
    while(i--) {
      colors[i].sort = this.random(0, colors.length - 1);
    }
    colors.sort((a, b) => a.sort - b.sort);

    i = colors.length;
    while(i--) {
      delete colors[i].sort;
    }

    if (iterations > 0) {
      iterations--;
      setTimeout(() => this.randomizeOptions(iterations), 100);
    }
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

export class StringifyValueConverter {
  toView(value) {
    if (value === null)
      return 'null';
    if (value === undefined)
      return 'undefined';
    return JSON.stringify(value, null, 2);
  }
}

export class InvertColorValueConverter {
  hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  }

  toView(hex) {
    var rgb = this.hexToRgb(hex);
    return rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 > 186 ? '#000000' : '#ffffff';
  }
}

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
