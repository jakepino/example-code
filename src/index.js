import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  letterContainer: {
    overflow: 'auto',
    marginBottom: '10px',
  },
  letter: {
    float: 'left',
    padding: '10px 10px',
    background: '#c9e4ed',
    borderRadius: '5px',
    marginRight: '5px',
    cursor: 'pointer',
  },
};

function Tile(props) {
  return (
    <button style={style.letter} onClick={props.onClick}>
      {props.letter}
    </button>
  );
}

function Application(props) {
  const [selectedLetters, setSelectedLetters] = useState('');

  const handleTileClick = (ltr) => {
    setSelectedLetters((prevLetters) => {
      const lastTwoLetters = prevLetters.slice(-2);

      if (lastTwoLetters === ltr + ltr) {
        return prevLetters.slice(0, -2) + '_';
      }
      return prevLetters + ltr;
    });
  };

  const letters = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode('A'.charCodeAt(0) + index)
  );

  return (
    <section>
      <aside style={style.letterContainer} id='letterContainer'>
        {letters.map((ltr) => (
          <Tile letter={ltr} key={ltr} onClick={() => handleTileClick(ltr)} />
        ))}
      </aside>
      <div id='outputString'>{selectedLetters}</div>
    </section>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application />);
