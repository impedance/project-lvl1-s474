#!/usr/bin/env node

import { gameEngine } from '..';
import getCalcGameData from '../games/calc-game';

gameEngine(getCalcGameData);
