import { React, ReactDOM } from 'https://unpkg.com/es-react';
import htm from 'https://unpkg.com/htm?module'
import Header from './components/header.js';

import Pubsub from './services/pubsub.js';
import Network from './services/network.js';

window.PUBSUB = Pubsub();
window.NETWORK = Network();

const html = htm.bind(React.createElement)

const Route = {
 '/': React.lazy(() => import('./routes/home.js')),
 '/about': React.lazy(() => import('./routes/about.js')),
 '*': React.lazy(() => import('./routes/lost.js')),
}

ReactDOM.render(
  html`
    <${React.Suspense} fallback=${html`<div></div>`}>
      <${Header} />
      <${Route[location.pathname] || Route['*']} />
    <//>
  `,
  document.querySelector('#app')
)