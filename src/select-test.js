import {getColors} from './colors';

export class Test {
  constructor() {
    this.colors = getColors();

    this.selectedColorName = 'blue';
    this.selectedColorNames = ['aliceblue', 'blue'];
    this.selectedColorNames2 = ['aliceblue', 'blue'];

    this.selectedColor = this.colors[4];
    this.selectedColors = [this.colors[1], this.colors[4]];
    this.selectedColors2 = [this.colors[1], this.colors[4]];

    this.hack = 0;
  }

  randomize() {
    var i = this.random(1, 20),
        items = [];
    while(i--) {
      items[i] = this.colors[this.random(0, this.colors.length - 1)];
    }

    // property assignment.
    this.selectedColorName = items[0].name;
    this.selectedColorNames = items.map(c => c.name);

    this.selectedColor = items[0];
    this.selectedColors = items;

    // property mutation.
    if (this.selectedColorNames2 === null) {
      this.selectedColorNames2 = [];
    }
    if (this.selectedColors2 === null) {
      this.selectedColors2 = [];
    }
    while(this.selectedColorNames2.length) {
      this.selectedColorNames2.pop();
    }
    while(this.selectedColors2.length) {
      this.selectedColors2.pop();
    }
    i = items.length;
    while(i--) {
      this.selectedColorNames2.push(items[i].name);
      this.selectedColors2.push(items[i]);
    }
    // make sure the interpolation bindings related to the push/pop examples refresh.
    this.hack++;
  }

  assignNull() {
    this.selectedColorName = null;
    this.selectedColorNames = null;
    this.selectedColorNames2 = null;

    this.selectedColor = null;
    this.selectedColors = null;
    this.selectedColors2 = null;
  }

  assignEmpty() {
    this.selectedColorName = '';
    this.selectedColorNames = [];
    this.selectedColorNames2 = [];

    this.selectedColor = null;
    this.selectedColors = [];
    this.selectedColors2 = [];
  }

  assignGarbage() {
    this.selectedColorName = 'Garbage';
    this.selectedColorNames = ['Donald Draper', 'Frank Underwood'];
    this.selectedColorNames2 = ['Aurelia', 'Angular', 'Backbone', 'Durandal', 'Ember', 'Knockout'];

    this.selectedColor = { garbabe: 'asdfasdf', foo: true };
    this.selectedColors = [{ name: 'Donald Draper' }, { name: 'Frank Underwood' }];
    this.selectedColors2 = [['Aurelia', 'Angular', 'Backbone', 'Durandal', 'Ember', 'Knockout'], ['Aurelia', 'Angular', 'Backbone', 'Durandal', 'Ember', 'Knockout']];
  }

  randomizeOptions() {
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
