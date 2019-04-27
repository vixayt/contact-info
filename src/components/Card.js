import React from 'react';

const Card = (props) => {
  const { name, username, id, email} = props;
  return(
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='pic' src={`https://robohash.org/${id}?size=100x100&set=set4&bgset=bg1`} />
      <div>
        <h2>{username}</h2>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );

}
export default Card;