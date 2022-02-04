//code your solution here

const array = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

// function superbowlWin(array) {
//   array.forEach(function (el) {
//     if (el.result == "W") {
//       console.log(el.year);
//     }
//   });
// }

function superbowlWin(arr) {
  const win = arr.find((res) => {
    return res.result == "W";
  });
  if (win == undefined) {
    return win;
  } else {
    return win.year;
  }
}
