import React, {memo} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Page from 'src/components/Page';

import GameProvider from 'src/contexts/Game';

import NotFound from 'src/pages/NotFound';
import Home from 'src/pages/Home';
import Game from 'src/pages/Game';

import routes from 'src/routes';

const router = createBrowserRouter([
  {
    path: routes.home,
    element: (
      <Page>
        <Home />
      </Page>
    ),
  },
  {
    path: routes.game,
    element: (
      <Page>
        <GameProvider>
          <Game />
        </GameProvider>
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
