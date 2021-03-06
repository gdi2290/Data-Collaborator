window.app =
  angular.module('PimpMyData', [
    'ngCookies',
    'ngResource',
    'ui.bootstrap',
    'ngRoute',
    'mousetrap',
    /*'restangular',*/
    'pmd.controllers',
    'pmd.directives',
    'pmd.services',
    'blueimp.fileupload'
  ]);

// bundling dependencies
window.angular.module('pmd.controllers', [
  'pmd.controllers.header',
  'pmd.controllers.index',
  'pmd.controllers.vizpick',
  'pmd.controllers.visualsList',
  'pmd.controllers.collaborationPage'
]);
window.angular.module('pmd.services', [
  'pmd.services.global',
  'fundoo.services'
]);
