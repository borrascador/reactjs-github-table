import React from 'react';

export default class SubmitButton extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        onClick={e => {
          e.preventDefault();
          onClick();
        }}
      >
        Submit
      </button>
    );
  }
}
