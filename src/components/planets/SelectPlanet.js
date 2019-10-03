import React from 'react'
import { useHttp } from '../../hooks/http';
import constants from '../constants';
import Planet from './Planet'
import {v4} from 'uuid' 

export const setPlanet = (solarSystem, name) => {
    const selectedPlanet = solarSystem.find(x=> x.englishName == name)
    return selectedPlanet
  }