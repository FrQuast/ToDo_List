/*SELECIONAR ELEMENTOS*/
const todoForm=document.querySelector('#todo-form')
const todoInput=document.querySelector('#todo-input')
const todoList=document.querySelector('#todo-list')
const editForm=document.querySelector('#edit-form')
const editInput=document.querySelector('#edit-input')
const cancelEditBtn=document.querySelector('#cancel-edit-btn')

let oldInputValue;

/*FUNCTIONS*/

const saveTodo=(text)=>{
    const todo=document.createElement('div')
    todo.classList.add('todo')
    console.log(todo)

    const todoTitle=document.createElement('h3')
    todoTitle.innerText=text
    todo.appendChild(todoTitle)

    const doneBtn=document.createElement('button')
    doneBtn.classList.add('finish-todo')
    doneBtn.innerHTML='<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn=document.createElement('button')
    editBtn.classList.add('edit-todo')
    editBtn.innerHTML='<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const deleteBtn=document.createElement('button')
    deleteBtn.classList.add('remove-todo')
    deleteBtn.innerHTML='<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)

    


    todoList.appendChild(todo)
    todoInput.value=''
    todoInput.focus()

}

const toggleForms= ()=>{
    editForm.classList.toggle('hide')
    todoForm.classList.toggle('hide')
    todoList.classList.toggle('hide')
}

const updateTodo=(text)=>{
    
    const todos=document.querySelectorAll('.todo')

    todos.forEach((todo)=>{
        let todoTitle=todo.querySelector('h3')

        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText=text    
        }
    })
}
/*filtra feitos e a fazer*/
const selectOne=document.getElementById('filter-select')

function filtrando(){
    let optionValue= selectOne.options[selectOne.selectedIndex];
	let valor =optionValue.value
    
    const statusSelecionado=selectOne;
    if(valor==='all'){
        
        //console.log('esta no all')
    }else if(valor ==='done'){
        const feito=document.querySelector('#todo-list')
       
        console.log(feito)
        //lista.style.display='none'
        
        //console.log('minha lista todo-list')
    }else if(valor ==='todo'){
        //console.log('esta no todo')
    }

    
    //console.log(statusSelecionado[0])
    
   
}
document.addEventListener('change',filtrando)
filtrando()
/*EVENTO DAS TAREFAS FEITAS*/

/*document.addEventListener('change',(e)=>{
    const targetEl=e.target
    const parentEl=targetEl.closest('div')

})*/

/*Events*/
todoForm.addEventListener('submit',(e)=>{
    
    e.preventDefault()

    
    const inputValue=todoInput.value

    if(inputValue){
        saveTodo(inputValue)
    }
})

document.addEventListener('click',(e)=>{
    const targetEl=e.target
    //encontra o elemento mais proximo
    const parentEl=targetEl.closest('div')

    let todoTitle;

    if(parentEl && parentEl.querySelector('h3')){
        todoTitle= parentEl.querySelector('h3').innerText
    }

    if(targetEl.classList.contains('finish-todo')){
        //toggle adiciona ou remover se o elemento ja estiver na lista retorna false(remove) se não estiver retorna true(adiciona)
        parentEl.classList.toggle('done')
        console.log('clickou')
    }

    if(targetEl.classList.contains('remove-todo')){
        parentEl.remove()
    }

    if(targetEl.classList.contains('edit-todo')){
        toggleForms()

        //editInput.value=todoTitle
        oldInputValue=todoTitle
    }
})




cancelEditBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    toggleForms();
})

editForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const editInputvalue=editInput.value

    if(editInputvalue){
        updateTodo(editInputvalue)
    }

    toggleForms()
})