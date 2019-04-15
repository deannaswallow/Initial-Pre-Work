// Similar to how the spread operator can unpack an array, you can use
// destructuring to unpack an object. When choosing variables to store the
// info from objects, you can use the provided keys or choose something else. For
// example, if you want to make the variables the same as the keys, you can do
// something like this:
// `const voxel = {x: 3.6, y: 7.4, z: 6.54 };`
// `const { x, y, z } = voxel;`
// To choose different variables, you can do this:
// `const { x : a, y : b, z : c } = voxel;`

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const { tomorrow : tempOfTomorrow } = avgTemperatures;
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
