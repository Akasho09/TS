import './App.css'

function App() {

  return (
    <>
  <Todo todos = {
    {  
     id : 1,
     title : "SA" ,
     timeby : 9
    }
  } />
    </>
  )
}

interface TodoIn {
   id : number ,
   title : string ,
   timeby : number
 }

 interface TodoInput {
  todos : TodoIn
 }

function Todo ({todos} : TodoInput) {
    return (
      <div>
        <h4>{todos.id} </h4>
        <h3>{todos.title}</h3><br />
        <h5>Do it by :  {todos.timeby}</h5>
      </div>
    )
}
export default App
