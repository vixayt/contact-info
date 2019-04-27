import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField } from '../actions';

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }

  render() {
    const { users } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredUsers = users.filter(user => {
      return user.username.toLowerCase().includes(searchField.toLowerCase())
    })
    return !users.length ? 
      <h1>Loading</h1>
      :
      (
        <div className='tc'>
          <h1 className='white fw9'>Cat Squad</h1>
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
    searchField: state.searchField
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);