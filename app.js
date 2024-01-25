function show_answer(id,button){
    let answer = document.getElementById(id)
    answer.setAttribute('class','answer')
    button.innerHTML = '<img src="assets/images/icon-minus.svg" alt="">'
    button.addEventListener('click', () => {
        hide_answer(id, button)
    })
}
function hide_answer(id, button){
    let answer = document.getElementById(id)
    answer.setAttribute('class','hidden_text_animation')
    button.innerHTML = '<img src="assets/images/icon-plus.svg" alt="">'
    button.addEventListener('click', () => {
        show_answer(id, button)
    })
}