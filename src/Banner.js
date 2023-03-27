import React, { useState } from 'react';

function Banner() {
  const [persent, setPersent] = useState(5);
  const [message, setMessage] = useState('parent to child');

  return (
    <div>
      <h1>Tittle</h1>
      <h3>Subtitle</h3>
      <p>
        Description{' '}
        <span>
          we are providing {persent} {message} discount for new users
        </span>
      </p>
      <Child msg={message} />
    </div>
  );
}
function Child() {
  let message = 'messagee to parewnt';
}
export default Banner;
