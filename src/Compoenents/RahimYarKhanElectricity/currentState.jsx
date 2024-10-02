import React from 'react';
import LightsOn from '../LightsOn';
import LightsOff from '../LightsOff';

const CurrentStateRahimYarKhan = ({ electricityStatus }) => {
  return electricityStatus ? <LightsOn /> : <LightsOff />;
};

export default CurrentStateRahimYarKhan;
