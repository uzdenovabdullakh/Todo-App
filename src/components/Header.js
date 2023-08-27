import React, { useRef, useEffect } from 'react';

function Header() {
    const headerTitleRef = useRef()
    const headerStatusIncompleteRef = useRef()
    const headerStatusCompleteRef = useRef()

    let date = new Date();
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    useEffect(()=>{
        let presentTime = date.toLocaleString("en-US", options)
        headerTitleRef.current.innerHTML = presentTime;
        // установка количества todo
        let todos = JSON.parse(localStorage.getItem('oldTodos'));
        let completedTodos = JSON.parse(localStorage.getItem('completedTodos'));
        if (todos!==null){
            headerStatusIncompleteRef.current.innerHTML = todos.length
        }
        if (completedTodos!==null){
            headerStatusCompleteRef.current.innerHTML = completedTodos.length
        }
    }, []);

    return (
        <header className="header">
            <h1 className="header__date-title" ref={headerTitleRef}> </h1>
            <p className="header__status">
                <span className="header__status-incomplete" ref={headerStatusIncompleteRef}></span> incomplete, <span className="header__status-complete" ref={headerStatusCompleteRef}></span> completed
            </p>
        </header>
    );
}

export default Header;