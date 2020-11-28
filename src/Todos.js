import React, { Component } from 'react'
import request from 'superagent';
export default class Todos extends Component {
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
        console.log(response)
        await this.setState({ todos: response.body, loading: false })
    }

    handleSubmit = async (e) => {
        const { todo } = this.state;
        const { token } = this.props;
        e.preventDefault();
        const newTodo = {
            todo: todo,
        };

        console.log('i am here kn teh submit')
        await this.setState({ loading: true });
        await request.post('https://fierce-brushlands-89020.herokuapp.com/api/todos')
            .send(newTodo)
            .set('Authorization', token);
        await this.fetchTodos();
    }

    handleTodoClick = async (someId) => {
        const { token } = this.props;
        await request.put(`https://fierce-brushlands-89020.herokuapp.com/api/todos/${someId}`)
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
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Add a task:
                        <input value={todo} onChange={(e) => this.setState({ todo: e.target.value })} />
                    </label>
                    <button>
                        Add to List
                        </button>
                </form>
                <div>
                    {
                        loading
                            ? 'LOADING!'
                            : todos.map(item => <div key={`${item.name}${item.id}${Math.random()}`} style={{
                                textDecoration: item.completed ? 'line-through' : 'none'
                            }
                            }>
                                name: {item.todo}
                                {
                                    item.completed ? '' : <button
                                        onClick={() => this.handleTodoClick(item.id)}>
                                        completed
                            </button>
                                }
                            </div>
                            )
                    }
                </div>
            </div>
        )
    }
}
