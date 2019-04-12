#!/usr/bin/env node

import { gameEngine } from '..';
import getEvenGameData from '../games/even-game';

gameEngine(getEvenGameData);
