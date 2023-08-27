import React from 'react';

function ChangeTheme() {

    function handleClick(e){
        if(e.target.innerHTML==='☾ Night'){
            e.target.innerHTML='';
            e.target.innerHTML='🌞 Day';
            e.target.classList.add('dark-theme-text')
        }
        else {
            e.target.innerHTML='';
            e.target.innerHTML='☾ Night';
            e.target.classList.remove('dark-theme-text')
        }

        document.body.classList.toggle('dark-theme');
        const h4 = document.querySelectorAll('h4')
        const label = document.querySelectorAll('label')
        document.querySelector('.header__date-title').classList.toggle('dark-theme-text');
        for (let item of h4) {
            item.classList.toggle('dark-theme-text');
        }
        for (let el of label){
            el.classList.toggle('dark-theme-text'); 
        }
        document.querySelector('.add-task-btn').classList.toggle('dark-theme-text');
    }

    return (
        <div className="change-color-mode-btn" type="button" onClick={handleClick}>
            <span>☾ Night</span>
        </div> 
    );
}

export default ChangeTheme;