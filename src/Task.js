import React, { useState } from 'react';
import DelTask from './DelTask'

const Task = props => {

    const doIt = (id, status) => {

    }

    return (
        <li key={props.id} className={props.status ? 'didIt' : ''} onClick={doIt(props.id, props.status)}>{props.name} <DelTask id={props.id} /></li>
    )
}


export default Task