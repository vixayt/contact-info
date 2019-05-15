import React from 'react';
import Card from './Card';

const CardList = ({ users }) => {
  console.log('u', users )
  return (
    <div>
      {users.map((user, i) => {
        return (
          <Card 
            key={users[i].id}
            id={users[i].id} 
            name={users[i].name} 
            username={users[i].username}
            email={users[i].email}
          />
          )
        })
      }
    </div>
  );
}
export default CardList;