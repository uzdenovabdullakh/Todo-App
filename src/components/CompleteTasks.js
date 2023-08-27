import React from 'react';
import PropTypes from 'prop-types'

function CompleteTasks(props) {
    const {name} = props
    return (
        <React.Fragment>
            <li className="task complete-tasks__task">
                <input type="checkbox" name="todo" className="task__input" defaultChecked disabled/>
                <div className="task__caption">
                     <label htmlFor="todo">{name}</label>
                </div>
            </li>
        </React.Fragment>
    );
}

CompleteTasks.propTypes = {
    name: PropTypes.string
}

export default CompleteTasks;