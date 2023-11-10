let txt_bar = document.getElementById('task-name')
let add_bt = document.getElementsByClassName('command-bt')[0]
let txt = document.getElementsByClassName('set-text')[0]
let tasks = document.getElementsByClassName('tasks')[0]
let counter = 0
add_bt.addEventListener('click', function(){
    if(txt_bar.value != ''){
    let new_task = document.createElement('div')
    new_task.setAttribute('class', 'task')
    new_task.innerHTML = '<div class="task"><div class="dot"><img src="" alt=""></div><div class="set-text">' + txt_bar.value + '</div></div>'
    tasks.innerHTML = new_task.innerHTML + tasks.innerHTML
    txt_bar.value = ''
    }
})
