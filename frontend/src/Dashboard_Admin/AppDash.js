import React, { useState } from 'react';
import Dashboard from './Dashboard';
import MyComponent from './MyComponent';

const App = () => {
  const [showMyComponent, setShowMyComponent] = useState(false);

  const renderComponent = () => {
    if (showMyComponent) {
      return <MyComponent />;
    } else {
      return <Dashboard onBoxClick={() => setShowMyComponent(true)} />;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default App;
