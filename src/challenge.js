class Challenge {

  getFilteredList(array_string) {
    if (array_string == null || array_string.length == 0) {
      return "please enter an array as comma separated string, e.g., a@a.a, b@b.b, a@a.a";
    }
    if (array_string.length == 1) {
      return array_string;
    }
    var array = array_string.split(',').map(function(item) { return item.trim(); });

    var result = [];
    var used = {};
    for (var i = 0; i < array.length; i++) {
      if (!(array[i]in used)) {
        result.push(array[i]);
        used[array[i]] = 1;
      }
    }

    return result;
  }

  isEven(n) { return n % 2 == 0; }
  getEmail(rand) { return 'a' + rand + '@a.com'; }
  createList(numberOfUniques) {
    if (numberOfUniques == 0) { return []; }
    if (!this.isEven(numberOfUniques)) { return ['please input even number of unique elements']; }

    Math.seedrandom("hello");
    var result = [];
    var used = {};

    var i = 0;
    var dupCount = 0;
    var fiftyPct = parseInt(numberOfUniques/2);
    var iterations = parseInt(numberOfUniques * 1.5);

    while (i < iterations) {
      var rand = Math.floor(Math.random() * numberOfUniques + 1);
      if (!(rand in used)) {
        result.push(this.getEmail(rand));
        used[rand] = 1;
        i++;
      } else if (used[rand] == 1 && dupCount < fiftyPct) {
        result.push(this.getEmail(rand))
        used[rand] = used[rand] + 1;
        i++;
        dupCount++;
      }
    }
    return result.toString();
  }
}
