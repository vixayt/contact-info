import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestUsers } from '../actions';
import Header from '../components/Header';

class App extends Component {
  
  componentDidMount() {
    this.props.onRequestUsers();
  }

  render() {
    console.log(this.props)
    const { searchField, onSearchChange, users, isPending } = this.props;
    const filteredUsers = users.filter(user => {
      return user.username.toLowerCase().includes(searchField.toLowerCase())
    })
    return isPending ? 
      <h1>Loading</h1>
      :
      (
        <div className='tc'>
        <Header />
          <SearchBox 
            searchfield={searchField}
            searchChange={onSearchChange}
          /> 
          <Scroll>
            <ErrorBoundry>
              <CardList users={filteredUsers}/>
            </ErrorBoundry>
          </Scroll>
        </div>
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