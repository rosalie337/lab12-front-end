import React, { Component } from 'react'
import request from 'superagent';


export default class Todo extends Component {
    state = {
        todos: [],
        todo: '',
        completed: false,
        loading: false
    }

    
    

    componentWillMount = async () => {
        await this.fetchTodos()
    }

    fetchTodos = async () => {
        const { token } = this.props;

        await this.setState({ loading: true });
        const response = await request.get('https://fierce-brushlands-89020.herokuapp.com/api/todos')
        .set('Authorization', token)

        await this.setState({ todo: response.body, loading: false })
    }

    handleSubmit = async (e) => {
        const { todo } = this.state;
        const { token } = this.props;

        e.preventDefault();

        const newTodo = {
            todo: todo,

        };

        await this.setState({ loading: true });

        await request.post('https://fierce-brushlands-89020.herokuapp.com/api/todos')
        .send(newTodo)
        .set('Authorization', token);

        await this.fetchTodos();
    }

    handleTodoClick = async (someId) => {
        const { token } = this.props;

        await request.put('https://fierce-brushlands-89020.herokuapp.com/api/todos')
        .set('Authorization', token);

        await this.fetchTodos();
    }

    render() {
        const {
            todo,
            completed, // this value is declared but never used
            loading,
            todos,
        } = this.state;

        return (
            <div>
                To Do List
                <form onSubmit={this.state.handleSubmit}>
                    <label>
                        Add a task:
                        <input value={todo} onChange={(e) => this.setState({ todo: e.target.value})} />
                    </label>
                        <button>
                        Add to List
                        </button>
                </form>
                {
                    loading
                        ? 'LOADING!'
                        : todos.map(todo => <div key={`${item.todo} ${item.id} ${Math.random()}`} style={{
                            textDecoration: item.completed ? 'line-through' : 'none' }
                        }>
                        
                        task: {item.todo}
                        {
                            item.completed ? '' : <button onClick={() => this.handleTodoClick(item.completed)}>
                            Complete
                            </button>
                        }
                        </div>
                }   
            </div>
        )
    }
}
