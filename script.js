const getS = (selector) => document.querySelector(selector);

getS(".edit").onclick = function () {
  getS(".edit_block").classList.add("show");
  getS(".bottom_container").classList.remove("hide");
  getS(".edit_block_textarea").value = getS(".top_container").innerHTML;
  getS(".style_block_wrapper").classList.remove("show");
};

getS(".save").onclick = function () {
  getS(".edit_block").classList.remove("show");
  getS(".top_container").innerHTML = getS(".edit_block_textarea").value;
};

getS(".style").onclick = function () {
  getS(".bottom_container").classList.add("hide");
  getS(".style_block_wrapper").classList.add("show");
};

getS(".colors_button").addEventListener("click", function () {
  getS(".color_div_hiden").classList.toggle("show");
});
getS(".main_color_div").addEventListener("click", function (event) {
  getS(".top_container").style.color = getComputedStyle(
    event.target
  ).backgroundColor;
});
getS(".colors_button2").addEventListener("click", function () {
  getS(".color_div_hiden2").classList.toggle("show");
});
getS(".main_color_div2").addEventListener("click", function (event) {
  getS(".top_container").style.backgroundColor = getComputedStyle(
    event.target
  ).backgroundColor;
});

getS(".add").onclick = function () {
  getS(".first_container").classList.add("hide");
  getS(".choose_container").classList.add("show");
};

document.getElementById("radio_choose").addEventListener("click", function () {
  if (event.target.checked) {
    getS(".choose_container_table").classList.add("show");
    getS(".choose_container").classList.remove("show");
  }
});

document.getElementById("radio_choose2").addEventListener("click", function () {
  if (event.target.checked) {
    getS(".choose_container_list").classList.add("show");
    getS(".choose_container").classList.remove("show");
  }
});
document
  .getElementById("radio_choose_table1")
  .addEventListener("click", function () {
    if (event.target.checked) {
      getS(".choose_container_list").classList.add("show");
      getS(".choose_container_table").classList.remove("show");
      event.target.checked = false
    }
  });
document
  .getElementById("radio_choose_table")
  .addEventListener("click", function () {
    if (event.target.checked) {
      getS(".choose_container_table").classList.add("show");
      getS(".choose_container_list").classList.remove("show");
      event.target.checked = false
    }
  });

document
  .getElementById("radio_choose_list")
  .addEventListener("click", function () {
    if (event.target.checked) {
      getS(".choose_container_table").classList.add("show");
      getS(".choose_container_list").classList.remove("show");
      event.target.checked = false
    }
  });
document
  .getElementById("radio_choose_list2")
  .addEventListener("click", function () {
    if (event.target.checked) {
      getS(".choose_container_list").classList.add("show");
      getS(".choose_container_table").classList.remove("show");
      event.target.checked = false
    }
  });

function fontSize() {
  getS(".top_container").style.fontSize = event.target.value;
}

function fontWeight() {
  if (event.target.checked) {
    getS(".top_container").classList.add("bold");
  } else {
    getS(".top_container").classList.remove("bold");
  }
}

function fontStyle() {
  if (event.target.checked) {
    getS(".top_container").classList.add("cursive");
  } else {
    getS(".top_container").classList.remove("cursive");
  }
}

let fontFamily = document.getElementById("font_family");
fontFamily.onchange = function (e) {
  getS(".top_container").style.fontFamily = event.target.value;
};