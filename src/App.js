import React, { useEffect, useState } from "react";
import "./scss/style.scss";
import IncompleteTasks from "./components/IncompleteTasks";
import CompleteTasks from "./components/CompleteTasks";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ChangeTheme from "./components/ChangeTheme";

function App() {
  const [click, setClick] = useState(false);
  const [inCompletetasks, setInCompleteTasks] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);

  function addTaskBtn() {
    setClick(true);
  }

  const closeModal = () =>{
    setClick(false);
  }

  const addTodoToPage=()=>{
    //объединение новых и старых todo
    //если oldTodos пустое, то делаем из него массив
    if (localStorage.getItem('oldTodos') === null){
        localStorage.setItem('oldTodos',JSON.stringify([]))
    }
    let newTodos = JSON.parse(localStorage.getItem('newTodos'));
    let oldTodos = JSON.parse(localStorage.getItem('oldTodos'));
     //если новые todo есть то добавляем их в массив всех туду
    if (newTodos !== null){
        oldTodos.push(newTodos)
    }

    localStorage.setItem('oldTodos', JSON.stringify(oldTodos));//перезаписываем oldTodos
    let allTodos = JSON.parse(localStorage.getItem('oldTodos'));
    localStorage.removeItem('newTodos');//удаляем новые todo чтобы не было лишнего добавления
    
    const todos = allTodos.map((element, index) => {
        return (
          <IncompleteTasks key={index} name={element.name} category={element.category}/>
        );
    });
    setInCompleteTasks([...todos])
  }

  const setCompletedTodo=()=>{
    //если completedTodos пустое, то делаем из него массив
    if(localStorage.getItem('completedTodos') === null){
      localStorage.setItem('completedTodos',JSON.stringify([]))
    }
    let completedTodos = JSON.parse(localStorage.getItem('completedTodos'))
    let newCompletedTodos = JSON.parse(localStorage.getItem('newCompletedTodos'));
    //если новые выполненные todo есть то добавляем их в массив всех выполненных todo
    if (newCompletedTodos !== null){
      completedTodos.push(newCompletedTodos) 
    }
    localStorage.setItem('completedTodos', JSON.stringify(completedTodos));//перезаписываем completedTodos
    let allTodos = JSON.parse(localStorage.getItem('completedTodos'));
    localStorage.removeItem('newCompletedTodos');//удаляем новые выполненные todo чтобы не было лишнего добавления

    const todos = allTodos.map((element, index)=>{
      return (
        <CompleteTasks key={index} name={element.name}/>
      );
    })
    setCompleteTasks(todos)
  }

  useEffect(()=>{
    setCompletedTodo();
    addTodoToPage();
  },[])

  return (
    <React.Fragment>
      <ChangeTheme />
      <div className="wrapper">
        <Header />
        <main className="main-container">
        <section className="incomplete-tasks">
          <h4>Incomplete</h4>
          <ul className="tasks" id="incomplete-tasks-list">
            {inCompletetasks}
          </ul>
        </section>
        <section className="complete-tasks">
          <h4>Completed</h4>
          <ul className="tasks" id="completed-tasks-list">
            {completeTasks}
          </ul>
        </section>
        </main>
      </div>
      <div className="add-task-btn">
        <div
          className="add-task-btn__icon"
          type="button"
          onClick={addTaskBtn}
        ></div>
      </div>
      {click ? <Modal closeModal={closeModal} /> : null}
    </React.Fragment>
  );
}

export default App;
