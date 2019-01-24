import React from 'react';
class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
        //this.props.onValueChange(event.target.value);
      }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        const submitted = event.submitted;
      /*if (!props.events) {
        return null;
      }

      return (
        <div className="welcome">
          Welcome Back!
        </div>
      );*/
    }




      render() {
        const value = this.state.value;
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.props.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }
    export default NameForm;
