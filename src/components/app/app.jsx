import React from 'react';
import {ColoredUserPic} from '../colored-user-pick/colored-user-pic';

const App = () => {

  return (
    <ColoredUserPic
      src={`img/test.jpg`}
      size={150}
      margin={4}
      backgroundColor={`red`}
      colors={[`green`, `blue`]}
      hoverColors={[`blue`, `green`]}
      colorWidth={20}
    />
  );
};

export {App};
