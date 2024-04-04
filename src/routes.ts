enum ROUTES {
  home = 'home',
  game = 'game',
}

const routes: {[key in ROUTES]: string} = {
  home: '/',
  game: '/game',
};

export default routes;
