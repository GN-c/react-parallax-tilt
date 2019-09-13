import React from 'react';

import TabComponent from '../_SBTabComponent/SBTabComponent';
import Demo from './TiltImg';

const code = `import React from 'react';

import Tilt from '../../src';
import './TiltImg.scss';
import imgNyc from './img/nyc.jpg';

const TiltImg = () => (
  <Tilt
    className="tilt-img"
    tiltMaxAngleX={35}
    tiltMaxAngleY={35}
    perspective={900}
    scale={1.1}
    transitionSpeed={2000}
    gyroscope={true}
  >
    <img src={imgNyc} className="inner-element" alt="pic" />
  </Tilt>
);

export default TiltImg;`;

const SBTabs = () => (
  <TabComponent code={code}>
    <Demo />
  </TabComponent>
);

export default SBTabs;