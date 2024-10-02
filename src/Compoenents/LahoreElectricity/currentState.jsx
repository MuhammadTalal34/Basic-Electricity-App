import React from 'react';
import LightsOn from '../LightsOn';
import LightsOff from '../LightsOff';

const CurrentStateLahore = ({ electricityStatus }) => {
  return electricityStatus ? <LightsOn /> : <LightsOff />;
};

export default CurrentStateLahore;
