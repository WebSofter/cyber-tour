function urls(location) {
  //let isProd = location.hostname.indexOf('localhost') !== -1;
  //return (isProd ? urlsObj.backend : urlsObj.frontend);
  return urlsObj.frontend
}

const hostLocal = 'http://api.homespadesign.ru/wp-json/';
//const hostLocal = 'http://spa-backend.wsofter.com/wp-json/';
const urlsObj = {
  backend: {
    cookie: '/test-data/cookie.php',
    header: '/test-data/header.php',
    footer: '/test-data/footer.php',
    menu: '/test-data/menu.php',
    homepage: '/test-data/homepage.php',
    contacts: '/test-data/contacts.php',
    projects: '/test-data/projects.php',
    project: '/test-data/project.php',
    philosophy: '/test-data/philosophy.php',
    perception: '/test-data/perception.php',
    partnership: '/test-data/partnership.php',
    realization: '/test-data/realization.php',
    form_handler: '/form-handler.php',
  },

  frontend: {
    cookie: hostLocal + 'hs/cookie',
    header: hostLocal + 'hs/header',
    footer: hostLocal + 'hs/footer',
    menu: hostLocal + 'hs/menu',
    homepage: hostLocal + 'hs/homepage',
    contacts: hostLocal + 'hs/contacts',
    projects: hostLocal + 'hs/projects',
    project: hostLocal + 'hs/project',
    philosophy: hostLocal + 'hs/philosophy',
    perception: hostLocal + 'hs/perception',
    partnership: hostLocal + 'hs/partnership',
    realization: hostLocal + 'hs/realization',
    form_handler: hostLocal + 'sau/send-mail/v1/send',
  },
};

export default urls(window.location);
