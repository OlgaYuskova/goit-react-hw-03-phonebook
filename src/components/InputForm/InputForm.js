import { Component } from 'react';
import { InputForms } from './InputForm.styled';
import { nanoid } from 'nanoid';
class InputForm extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  handleChangeInputsForm = (evt) => {
    const currentInput = evt.target.name
    this.setState({ [currentInput]: evt.target.value })
  }

  handleSubmitContact = (evt) => {
    evt.preventDefault();

    this.props.onSubmit(this.state)

       this.setState({
        name: '',
        number: '',
        id: nanoid(),
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <InputForms onSubmit={this.handleSubmitContact}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={this.handleChangeInputsForm}
          name="name"
          placeholder="Name"
        />

        <label htmlFor="number">Number</label>
        <input
          id="number"
          type="tel"
          value={number}
          onChange={this.handleChangeInputsForm}
          name="number"
          placeholder="123-123-1234"
          title='Phone number must be digits and dashes. Example: 101-010-1010'
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />

        <button type="submit">Add contact</button>
      </InputForms>
    );
  }
}

export default InputForm;