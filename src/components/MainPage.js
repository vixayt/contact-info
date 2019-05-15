import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';

class MainPage extends Component {
  
  componentDidMount() {
    this.props.onRequestUsers();
  }
  filteredUsers = () => {
    return this.props.users.filter(user => {
      return user.username.toLowerCase().includes(this.props.searchField.toLowerCase())
    })
  }
  render() {
    const { onSearchChange, users, isPending } = this.props;

    return isPending ? 
      <h1>Loading</h1>
      :
      (
        <div className='tc'>
        <Header />
          <SearchBox 
            searchChange={onSearchChange}
          /> 
          <Scroll>
            <ErrorBoundry>
              <CardList users={this.filteredUsers}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      )
  }
}

export default MainPage;