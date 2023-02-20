import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import React, { useState } from 'react';


function App() {
  const onDelete = (todo) => {
    console.log('I am deleted', todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo = (title, desc) => {
    console.log('I am adding', title, desc);
    let sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title
    } 
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the markets you need to buy computer"
    },
    {
      sno: 2,
      title: "Go to the markets you need to buy Monitor"
    },
    {
      sno: 3,
      title: "Go to the markets you need to buy Mouse"
    }
  ])
  return (
    <>
      <Header title="Todos List" menuBar="Contact" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
