import React, { Component } from 'react';
import {    createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { Tasks } from '../api/tasks.js';
import Task from './Task.jsx';


class App extends Component {
    handleSubmit(event) {
        event.preventDefault();
        
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        
        Tasks.insert({
            text,
            createdAt: new Date()
        });
        
        ReactDOM.findDOMNode(this.refs.textInput).value = '';        
        
    }
    
    getTasks() {
        return [{
            _id: 1,
            text: 'This is task 1'
        }, {
            _id: 2,
            text: 'This is task 2'
        }, {
            _id: 3,
            text: 'This is task 3'
        }, ];
    }

    renderTasks() {
        return this.props.tasks.map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    render() {
        return (
            <div className="container">
                <header>
                  <h1>Todo List</h1>
                  
                  <form className="new-task" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="textInput" placeholder="Type to add new tasks" />
                    
                  </form>
                </header>
         
                <ul>
                  {this.renderTasks()}
                </ul>
            </div>
        );
    }
}

export default createContainer(() => {
    return {
        tasks: Tasks.find({}, {sort: {createdAt:-1}}).fetch()
    }
}, App);
