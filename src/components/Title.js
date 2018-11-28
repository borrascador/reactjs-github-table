import React from 'react';

export default class Title extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <h1>
        {name ? `Repositories by ${name}` : `Search repositories by user`}
      </h1>
    );
  }
}
