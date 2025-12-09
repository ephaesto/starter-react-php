import React from 'react';
import ReactDOM from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import '~/assets/css/root.css';
import { setups, orderSetups } from './setups';
import Nest from './components/nest/Nest';

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <Nest containers={setups} containersList={orderSetups}>
      <HydratedRouter />
    </Nest>
  </React.StrictMode>,
);
