import React, {Component} from 'react';
import './App.css';


class Todo extends Component{
    constructor (){
      super()
      this.state = {
        todos: ["TODO APP"],
        value: ''
      }
    }
    add_todo =() =>{
      this.setState({
        todos: [...this.state.todos,this.state.value],
        value: " "
      })
    }
    delete_todo = (index)=>{
      this.state.todos.splice(index, 1);
      this.setState({
        todos: this.state.todos
      })
  }
     Edit_todo = (index)=>{
       let updatedValue = prompt("Enter Value");
       this.state.todos[index] = updatedValue
       this.setState({
        todos: this.state.todos
      })
      }
    render(){
      let { todos, value} = this.state;
      return (
        <header className='App-header'>
        <div className='Hello'>
          <input value={value} onChange={(e) => this.setState({value: e.target.value})} className="innp" type="text" placeholder="enter value"/>
          <button className='Addbtn' onClick={this.add_todo}>+</button>
          <ul>
            {this.state.todos.map((v,i)=>{
              return <li key={i}>{v}
              <button className='Dellbtn' onClick={()=>this.Edit_todo(i)}>Edit</button>
              <button className='Editbtn' onClick={()=>this.delete_todo(i)}>Delete</button>
              </li>
            })}
          </ul>
        </div>
        </header>
      )
    }
  }
  export default Todo