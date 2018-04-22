import React from "react";
import { render } from "react-dom";
import { Provider } from 'mobx-react';
import DevTools from "mobx-react-devtools";

import AppView from './react/components/AppView.jsx';
import menuStore from './react/stores/MenuStore.jsx';

const stores = {
    menuStore
};

render(
  <div>
  	<Provider {...stores}>
    <AppView />
    </Provider>
  </div>,
  document.getElementById("root")
);