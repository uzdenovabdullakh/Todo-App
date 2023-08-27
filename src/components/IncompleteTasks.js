import React, { useRef } from 'react';
import PropTypes from 'prop-types'

function IncompleteTasks(props) {
    const {name, category} = props

    const labelRef = useRef();

    function removeTodo(e){
        if (e.target.checked){
            let name = labelRef.current.innerHTML;
            let oldTodos = localStorage.getItem('oldTodos');
            let oldTodosJson = JSON.parse(oldTodos);//JSON версия oldTodo
            oldTodosJson.forEach((item, index)=>{
                if (item.name === name){
                    localStorage.setItem('newCompletedTodos',JSON.stringify(item))//добавление выполненного todo в localStorage
                    oldTodosJson.splice(index, 1);//удаление выбранного todo из массива
                    localStorage.setItem('oldTodos', JSON.stringify(oldTodosJson))//перезапись oldTodos
                    window.location.reload();
                }
            })
        }
    }

    return (
        <React.Fragment>
            <li className="task incomplete-tasks__task">
                <input type="checkbox" name="todo" className="task__input" onClick={removeTodo}/>
                <div className="task__caption">
                    <label htmlFor="todo" className="incomplete-tasks__label" ref={labelRef}>{name}</label>
                    <p>{category}</p>
                </div>
            </li>
        </React.Fragment>
    );
}

IncompleteTasks.propTypes = {
    name: PropTypes.string,
    category: PropTypes.string
}

export default IncompleteTasks;