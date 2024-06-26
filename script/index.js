const txt_bar = document.getElementById('task-name')
const add_bt = document.getElementsByClassName('command-bt')[0]
let txt = document.querySelectorAll(' .set-text')
let tasks = document.getElementsByClassName('tasks')[0]
let check = document.querySelectorAll(' .checkbox')
let counter = 0
const task = document.getElementsByClassName('task')
add_bt.addEventListener('click', function(){
    if(txt_bar.value != ''){
    const new_task = document.createElement('div')
    new_task.classList.add('task')   
    new_task.innerHTML = '<div class = "check-del"><button class="checkbox"><img src="assets and mages/91-918618_checked-checkbox-512-yellow-check-icon-orange-png.png" alt=""></button><button class="del"><p>Delete</p></button></div><div class="set-text">' + txt_bar.value + '</div>'
    tasks.insertBefore(new_task, tasks.firstChild)
    txt_bar.value = ''
    counter += 1
    check = document.querySelectorAll(' .checkbox')
    console.log('Number of checkboxes:', check.length)
    txt = document.querySelectorAll(' .set-text')
    }
})
/*task[i].addEventListener('dblclick', function(){
    txt[i].classList.toggle('crossed')
})*/
tasks.addEventListener('click', function (event) {
    const target = event.target
    const checkbox = target.closest('.checkbox')

    if (checkbox) {
        const index = Array.from(target.closest('.task').parentNode.children).indexOf(target.closest('.task'))
        console.log('Checkbox clicked at index:', index)
        // Now you can manipulate the corresponding set-text element
        const txt = document.querySelectorAll('.set-text')[index]
        txt.classList.toggle('crossed');
        if(checkbox.innerHTML == '<img src="assets and mages/91-918618_checked-checkbox-512-yellow-check-icon-orange-png.png" alt="">'){
        checkbox.innerHTML = '<img src="assets and mages/91-918618_checked-checkbox-512-yellow-check-icon-orange-png (1).png" alt="">'
        }
        else if (checkbox.innerHTML == '<img src="assets and mages/91-918618_checked-checkbox-512-yellow-check-icon-orange-png (1).png" alt="">'){
            checkbox.innerHTML = '<img src="assets and mages/91-918618_checked-checkbox-512-yellow-check-icon-orange-png.png" alt="">'
        }
    }
})

tasks.addEventListener('dblclick', function (event) {
    const target = event.target
    const settxt = target.closest('.set-text')

    if (settxt) {
        const index = Array.from(target.closest('.task').parentNode.children).indexOf(target.closest('.task'))
        console.log('text choosed at index: ', index)
        // Now you can manipulate the corresponding set-text element
        const text = document.querySelectorAll('.set-text')[index]
        //text.classList.toggle('crossed');
        let temp = text.innerText
        text.innerHTML = '<input name="edit-task" id="edit-task" placeholder="" />'
        const edit_txt = document.getElementById('edit-task')
        edit_txt.value = temp
        edit_txt.addEventListener('keypress', function(event){
            if (event.key === "Enter"){
                text.innerHTML = edit_txt.value
            }
        })
    }
})

tasks.addEventListener('click', function(event) {
    const target = event.target
    const del = target.closest('.del')
    if(del){
        const index = Array.from(target.closest('.task').parentNode.children).indexOf(target.closest('.task'))
        const task = document.querySelectorAll('.task')[index]
        tasks.removeChild(task)
        counter -= 1
    }
})

//filter functions
function show_completed(){
    for( let i = 0; i < counter; i++){
        let task = document.querySelectorAll('.task')[i]
        let tasktxt = document.querySelectorAll('.set-text')[i]
        if(tasktxt.classList.contains('crossed')){
            console.log('txt' + i + 'is crosssed')
        }
        else{console.log('txt' + i + 'is not crossed')}
    }
}

const filter = document.getElementsByClassName('filter_bt')[0]
const filter_img = document.getElementsByClassName('filter_img')[0]
const initial_filter_state = filter.innerHTML
filter_img.addEventListener('click', show_completed())
filter_img.addEventListener('click', function(){
    console.log('pressed')
    console.log(filter.innerHTML== initial_filter_state)
    if(filter.innerHTML == initial_filter_state){
        console.log('add')        
        filter.innerHTML += '<div class="filters"><p class="completed">Completed</p><p class="uncompleted">Uncompleted</p></div>'
    }
    else if(filter.innerHTML == (initial_filter_state + '<div class="filters"><p class="completed">Completed</p><p class="uncompleted">Uncompleted</p></div>')){
        console.log('remove')
        filter.innerHTML = initial_filter_state
    }
})
const completed = document.getElementsByClassName('completed')[0]
completed.addEventListener('click', show_completed())