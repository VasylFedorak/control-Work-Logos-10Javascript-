const getS = selector => document.querySelector(selector)

getS('.edit').onclick = function () {
    getS('.edit_block').classList.add('show')
    getS('.bottom_container').classList.remove('hide')
    getS('.edit_block_textarea').value = getS('.top_container').innerHTML;
    getS('.style_block_wrapper').classList.remove('show')
}

getS('.save').onclick = function () {
    getS('.edit_block').classList.remove('show')
    getS('.top_container').innerHTML = getS('.edit_block_textarea').value
}

getS('.style').onclick = function () {
    getS('.bottom_container').classList.add('hide')
    getS('.style_block_wrapper').classList.add('show')

}

getS('.colors_button').addEventListener('click', function () {
    getS('.color_div_hiden').classList.toggle('show')
})
getS('.colors_button2').addEventListener('click', function () {
    getS('.color_div_hiden').classList.toggle('show')
})

function fontSize() {
    getS('.top_container').style.fontSize = event.target.value;
}

let fontFamily = document.getElementById('font_family');
fontFamily.onchange = function (e) {
    getS('.top_container').style.fontFamily = this.value;
}