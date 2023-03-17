console.log("Linked");

const $container = $(".container");
const $search = $("#search");
const $searchText = $("#searchText");

// $searchText.keypress(function (event) {
//   var keycode = event.keyCode ? event.keyCode : event.which;
//   if (keycode == "13") {
//     var searchText = $searchText.val();
//     console.log(searchText);
//     let url = `https://raw.githubusercontent.com/${searchText}`;
//     console.log(url);
//     $.get(
//       `https://raw.githubusercontent.com/${searchText}/${searchText}/main/README.md`,
//       (data) => {
//         let $readme = $(`<div></div>`);
//         $readme.append(data);
//         $container.append($readme);
//       }
//     );
//   }
// });

$search.on("click", function () {
  var searchText = $searchText.val();
  console.log(searchText);

  $.get(
    `https://raw.githubusercontent.com/${searchText}/${searchText}/main/README.md`,
    (data) => {
      let $readme = $(`<div></div>`);
      let $img = $(`<img src="https://github.com/${searchText}.png"></img>`);
      console.log($img);
      $readme.append(data);
      $container.append($img);
      $container.append($readme);
    }
  );

  $.get(`https://github/com/${searchText}.png`);
});
