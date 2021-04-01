function addObject(todoArr, todo){
  todoArr.push(todo)
}

function removeObject(todoArr, index){
  todoArr.splice(index, 1)
}

const printTodo = function(todo){
  const item = document.createElement('li')
  item.innerText = todo.text
  item.classList.add('todo-item')
  item.id = todos.indexOf(todo)
  if (todo.complete){
      item.classList.add('complete')
  }
  const ol = document.querySelector('ol')
  ol.appendChild(item)
}



function printAll(todoArr){
  for (const todo of todoArr){
      printTodo(todo)
  }
  hide()
  complete()
}

printAll(todos)

function refresh (){
  clear()
  complete()
  printAll(todos)
  hide()
  
  
}

function clear(){
  const ol = document.querySelector('ol')
  ol.innerText = ''
}
const clearButton = document.querySelector('.clear-todos')
clearButton.classList.add('btn')
clearButton.classList.add('btn-danger')
clearButton.addEventListener('click', ()=>{
  clear()
  todos = []
})

const addButton = document.querySelector('.add-todo')
addButton.classList.add('btn')
addButton.classList.add('btn-outline-success')
const inputBox = document.querySelector('.todo-input')
addButton.addEventListener('click', ()=>{
  const input = inputBox.value
  const object = {}
  object.text=input
  object.priority = 2
  object.complete = false
  object.id = todos.length
  addObject(todos, object)
  printTodo(object)
  inputBox.value=''
  refresh()
})

function hide(){
  const listItem = document.querySelectorAll('li')
  const hideShow = document.querySelector('.hide-show')
  hideShow.addEventListener('click', ()=>{
      if(hideShow.innerText === 'Hide completed'){
          for (const li of listItem){
              if(li.classList[1]==='complete'){
                  li.classList.add('hidden')
              }
              
          hideShow.innerText = 'Show all'
          } 
      } else if (hideShow.innerText === 'Show all'){
          for (const li of listItem){
              if(li.classList[1]==='complete'){
                  li.classList.remove('hidden')
              }
          } 
          hideShow.innerText = 'Hide completed'
          }
      })
  }
  


function complete (){
  const hideShow = document.querySelector('.hide-show')
  const listItem = document.querySelectorAll('li')
  for (const li of listItem){
      li.addEventListener('click', (e)=>{
          const line = e.target
          if (hideShow.innerText === 'Show all'){
              for (const todo of todos){
                  if(parseInt(line.id)===todo.id){
                      todo.complete = !todo.complete
                      li.classList.add('complete')
                      li.classList.add('hidden')
                  }
              } 
          } else if (hideShow.innerText ==='Hide completed'){
              if (line.classList[1] === 'complete'){
                  line.classList.remove('complete')
                  line.classList.remove('hidden')
                  for (const todo of todos){
                      if (parseInt(li.id) === todo.id){
                          todo.complete = !todo.complete
                      }
                  }
              } else if (line.classList[1] !== 'complete'){
                  line.classList.add('complete')
                  for (const todo of todos){
                      if (parseInt(li.id) === todo.id){
                          todo.complete = !todo.complete
                      }
                  }
              }
          }
      })       
  }
}   