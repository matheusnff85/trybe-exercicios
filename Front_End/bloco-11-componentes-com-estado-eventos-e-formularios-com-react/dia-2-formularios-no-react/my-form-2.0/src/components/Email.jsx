import React from "react";

class Email extends React.Component{
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Email:
        <input 
          type="text"
          name="Email"
          maxLength={50}
          value={value}
          onChange={handleChange}
          required
        />
      </label>
    )
  }
}

export default Email;