let txt_bar = document.getElementById('task-name')
let add_bt = document.getElementsByClassName('command-bt')[0]
let txt = document.getElementsByClassName('set-text')
let tasks = document.getElementsByClassName('tasks')[0]
let check =document.getElementsByClassName('checkbox')
let counter = 0
let i = 0
let task = document.getElementsByClassName('task')
add_bt.addEventListener('click', function(){
    if(txt_bar.value != ''){
    task[counter] = document.createElement('div')
    task[counter].setAttribute('class', 'task')
    task[counter].innerHTML = '<div class="task"><div class="checkbox"><img src="assets and mages/91-918618_checked-checkbox-512-yellow-check-icon-orange-png.png" alt=""></div><div class="set-text">' + txt_bar.value + '</div></div>'
    tasks.innerHTML = task[counter].innerHTML + tasks.innerHTML
    txt[counter].innertext = txt_bar.value
    txt_bar.value = ''
    check[counter].value = true
    counter += 1
    }
})
task[i].addEventListener('dblclick', function(){
    txt[i].classList.toggle('crossed')
})
check[i].addEventListener('click', function(){
    txt[i].classList.toggle('crossed')
})
