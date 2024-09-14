import React from 'react';
import Child from '../components/child';

const ReactMemoization = () => {
  return (
    <div>
      <h1>React Memoization</h1>
      <Child />
      <Child />
      <Child />
    </div>
  );
};

export default ReactMemoization;
