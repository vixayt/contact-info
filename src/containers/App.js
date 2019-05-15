import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestUsers } from '../actions';
import MainPage from '../components/MainPage';

class App extends Component {
  render() {
    return (
      <MainPage { ...this.props }/>
    )
  }
}

const mapStateToProps = state => {
  return { 
    searchField: state.searchUsers.searchField,
    users: state.requestUsers.users,
    isPending: state.requestUsers.isPending,
    error: state.requestUsers.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestUsers: () => dispatch(requestUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);