Package.describe({
  name: 'swydo:blaze-apollo',
  version: '0.0.4',
  summary: 'Blaze integration for the Apollo Client',
  git: 'https://github.com/swydo/blaze-apollo',
  documentation: 'README.md'
});

var packages = [
  'ecmascript',
  'reactive-var',
  'blaze-html-templates'
];

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');

  api.use(packages, 'client');

  api.mainModule('client.js', 'client');
});

Package.onTest(function(api) {
  api.use('swydo:blaze-apollo');

  api.use(packages, 'client');
  api.use(['practicalmeteor:mocha']);

  api.mainModule('client.spec.js', 'client');
});
