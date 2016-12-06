class Challenge {

  getFilteredList(array) {
    if (array == null || array.length == 0) {
      return "please enter an array as comma separated string, e.g., 'element','element'";
    }
    if (array.length == 1) {
      return array;
    }

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

  getEmail(rand) {
    return 'a' + rand + '@a.com';
  }
  createList(numberOfUniques) {
    if (numberOfUniques == 0) { return []; }
    if (numberOfUniques == 1) { return [this.getEmail(0)]; }

    var result = [];
    var used = {};

    var i = 0;
    var dupCount = 0;
    var fiftyPct = parseInt(numberOfUniques/2);

    while (i < numberOfUniques * 1.5) {
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
    return result;
  }
}
