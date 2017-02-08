import React, {Component, PropTypes} from 'react';

import { Tasks } from '../api/tasks.js';

export default class Task extends Component {
    render(){
        return(
            <li>{this.props.task.text}</li>
        )
    }
}

Task.PropTypes = {
    task: PropTypes.object.isRequired,
}