import React, { useState } from 'react';

const App = () => {
  const [reactTitle, setReactTitle] = useState('React App');
  const [reactUpdates, setReactUpdates] = useState(0);
  const [vanillaUpdates, setVanillaUpdates] = useState(0);

  const changeReactTitle = () => {
    setReactTitle(`React App - ${reactUpdates + 1}`);
    setReactUpdates(reactUpdates + 1);
  };

  const changeVanillaTitle = () => {
    document.title = `Vanilla App - ${vanillaUpdates + 1}`;
    setVanillaUpdates(vanillaUpdates + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Virtual DOM Performance Demo</h1>
      <button onClick={changeVanillaTitle}>Change Title (Vanilla JS)</button>
      <button onClick={changeReactTitle} style={{ marginLeft: '10px' }}>
        Change Title (React)
      </button>
      <p>React Updates: {reactUpdates}</p>
      <p>Vanilla JS Updates: {vanillaUpdates}</p>
    </div>
  );
};

export default App;
