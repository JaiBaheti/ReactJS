import { Component } from "react";

export default class AddTodo extends Component{
    state = {Id:0, Task:"", Status:"Pending"};
    
    handleSubmit = (event) =>{
    event.preventDefault();
       this.props.onAdd({Id:this.state.Id, Task:this.state.Task, Status: this.state.Status});
       this.setState({Id:0,Task:"", Status:"Pending"});
   }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <table class="table table-dark">
                    <tr>
                        <td>Task</td>
                        <td><input type="text" 
                         value={this.state.Id} onChange={e=> this.setState({Id:e.target.value})}/></td>
                    </tr>
                    <tr>
                        <td>Task</td>
                        <td><input type="text" value={this.state.Task} onChange={e=> this.setState({Task:e.target.value})}/></td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td><input type="radio" name="status" value="Pending" onClick={e=> this.setState({Status:'Pending'})}/>Pending</td>
                        <td><input type="radio" name="status" value="Completed" onClick={e=> this.setState({Status:'Completed'})}/>Completed</td>
                    </tr>
                    <tr>
                        <button type="submit" class="btn btn-success">Add Task</button>
                    </tr>
                </table>
                    
                        
                        
                </form>
            </div>
        ); 
    }
}