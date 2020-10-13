import React from 'react';

const withClass = (WrappingComponent, className) => {
  return props => (
    <div className={className}>
      <WrappingComponent {...props} /> {/*Spread operator here will assign all properties from what's
      contained inside the Wrapped Component. In this case, the Person.js and App.js are contained */}
    </div>
  );
};

export default withClass;