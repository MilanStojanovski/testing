import React, {Component} from 'react';
import TextFieldGroup from './common/TextFieldGroup';

class Content extends Component {
    state = {
        name: '',
        list: [],
        isAuthenticated: true
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        this.setState({
            list: [...this.state.list, this.state.name],
            name: ''
        })
    };

    render() {
        let names = this.state.list.map(name => {
            return <li>{name}</li>
        })

        return (
            <div>
                <h1 className="text-center">List</h1>
                <p className="lead text-center">Add items to a list</p>
                <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                        name="name"
                        placeholder="Name"
                        type="name"
                        value={this.state.name}
                        onChange={this.onChange}
                    />
                    <input type="submit" />
                </form>
                <ul>
                    {names}
                </ul>
                {this.state.isAuthenticated ? <button className="logout" onClick={() => this.setState({isAuthenticated: false}) }>LOG OUT</button> : <button className="login" onClick={() => this.setState({isAuthenticated: true}) }>LOG IN</button>}
            </div>
        );
    }
}

export default Content;
