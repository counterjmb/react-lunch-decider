//https://www.npmjs.com/package/@reonomy/react-confetti-explosion

import React from 'react';
import ConfettiExplosion from '@reonomy/react-confetti-explosion';

function Confetti() {
  const [isExploding, setIsExploding] = React.useState(true);
  return (
    <>
      {isExploding && <ConfettiExplosion />}
    </>
  );
}

export default Confetti;