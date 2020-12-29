const getS = selector => document.querySelector(selector)

getS('.edit').onclick = function () {
    getS('.edit_block').classList.add('show')
    getS('.bottom_container').classList.remove('hide')
    getS('.edit_block_textarea').value = getS('.top_container').innerHTML;
}

getS('.save').onclick = function () {
    getS('.edit_block').classList.remove('show')
    getS('.top_container').innerHTML = getS('.edit_block_textarea').value
}

getS('.style').onclick = function () {
    getS('.bottom_container').classList.add('hide')
    getS('.style_block').classList.add('show')




}