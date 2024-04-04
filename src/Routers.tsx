import React, {memo} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Page from 'src/components/Page';

import NotFound from 'src/pages/NotFound';
import Home from 'src/pages/Home';
import Game from 'src/pages/Game';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Page>
        <Home />
      </Page>
    ),
  },
  {
    path: '/game',
    element: (
      <Page>
        <Game />
      </Page>
    ),
  },
  {
    path: '*',
    element: (
      <Page>
        <NotFound />
      </Page>
    ),
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default memo(Routes);
