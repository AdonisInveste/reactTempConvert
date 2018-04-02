import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

import InteractiveModel from '../components/InteractiveModel.react.js';

render(<InteractiveModel />, document.getElementById('app'));
