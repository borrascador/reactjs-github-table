import regeneratorRuntime from 'regenerator-runtime';
import React from 'react';
import Title from './Title';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';
import Table from './Table';
import { connect } from 'react-redux';
import { userFetchRequested } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { name, dispatch } = this.props;
    dispatch(userFetchRequested(name));
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    const { value } = this.state;
    const { dispatch } = this.props;
    dispatch(userFetchRequested(value));
  }

  render() {
    const { value } = this.state;
    const { name, repos, sending } = this.props;
    return (
      <div>
        <Title name={name} />
        <div className="search-bar">
          <span>Search users:</span>
          <TextInput value={value} onChange={this.handleChange} />
          <SubmitButton onClick={this.handleSubmit} />
        </div>
        {
          sending
            ? <h2>Loading...</h2>
            : Array.isArray(repos)
              ? repos.length > 0
                ? <Table data={repos} />
                : <h2>{name} does not have any repositories yet</h2>
              : <h2>User {name} not found</h2>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  repos: state.repos,
  sending: state.sending
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
