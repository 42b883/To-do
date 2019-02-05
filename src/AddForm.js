import React, {Component} from 'react';

class AddForm extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({
            content: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.content !== ''){
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    }

    render() {
        
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                        <input type="text" name="addTodo"
                        placeholder="Add a task" 
                        onChange={this.handleChange}
                        value={this.state.content}/>
                    <button className="center btn-floating btn waves-effect waves-light green accent-5">+</button>
                </form>
            </div>
        )
    }
}

export default AddForm