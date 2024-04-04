import React from 'react';
import ReactDOM from 'react-dom/client';

import Routers from 'src/Routers';

// Global styles
import 'src/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<Routers />);
