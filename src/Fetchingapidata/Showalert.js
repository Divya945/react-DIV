import React, { useEffect, useState } from 'react';

export default function Showalert() {
  const [text, setText] = useState('');

  if (text === 'text message') {
    alert('this is your message');
  }
  return (
    <>
      <div className="taskblock">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>
          Hint: It's <strong>text message</strong>
        </p>
      </div>
    </>
  );
}
