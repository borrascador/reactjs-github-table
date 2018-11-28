import React from 'react';

export default class TextInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <input value={value} onChange={onChange} />
    )
  }
}
