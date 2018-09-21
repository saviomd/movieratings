import React from 'react';

const MockWrapper = (props) => (
  <div className="bg-dark p-3 text-white">
    {props.children}
  </div>
);

export default MockWrapper;
