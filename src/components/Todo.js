import {Component} from "react";
import AddTodo from "./AddTodo";

export default class Todo extends Component{
    state={
        toggle:true,
        todos:[
            {Id :1, Task:'Develop code', Status: 'Completed'},
            {Id:2, Task: 'Commit & Push', Status: 'Pending'}
        ]
    };
    addTodo = (todo)=>{
        this.setState({
            todos: [...this.state.todos,todo]
        });
    }
    deleteTodo = (todo) =>{
        const filteredTodo = this.state.todos.filter(x=>x.Id !== todo.Id);
        this.setState({todos:filteredTodo});
    }
    Toggle= (todo)=>{
        // this.setState(state=>({toggle:!state.toggle})); 
        this.setState(state=>({
            todos : state.todos.map(x =>{
                if(x.Id === todo.Id){
                    return {
                        ...x,
                        Status: x.Status === "Pending" ? "Completed" : "Pending"
                    };                    
                }else{
                    return x;
                }
            })
        }));        
    }
   
   
    render(){
        return(
            <div>
                <AddTodo onAdd={this.addTodo}/>
                 <h1>Todo List</h1>
                 <table class="table table-stripped table-hover">
                     <thead >
                     <tr>
                         <th>Id</th>
                         <th>Task</th>
                         <th>Status</th>
                         <th>Action</th>
                     </tr>
                     </thead>
                     <tbody>
                         {this.state.todos.map(x=>{
                             return(
                                 <tr key={x.Id}>
                                     <td>{x.Id}</td>
                                     <td>{x.Task}</td>
                                     <td onClick={()=>this.Toggle(x)}>{x.Status}</td>
                                     <td><button class="btn btn-danger" onClick={()=>this.deleteTodo(x)}>Delete</button></td>
                                 </tr>
                             );
                         })}
                    </tbody>
                </table>
                
            </div>
        );
    }
}