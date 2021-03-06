import * as karma from 'karma';

module.exports = function (config: karma.Config) {

  // This extra variable is required because some configuration values (like 'mime')
  // aren't registered in karma.Config and Typescript will complain about it
  const configuration: any = {
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-mocha'),
      require('karma-mocha-reporter'),
      require('karma-chrome-launcher'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    files: [
      {pattern: './src/test.ts', watched: false}
    ],
    preprocessors: {
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    // remapIstanbulReporter: {
    //   dir: require('path').join(__dirname, 'coverage'), reports: {
    //     html: 'coverage',
    //     lcovonly: './coverage/coverage.lcov'
    //   }
    // },
    angularCli: {
      environment: 'dev',
      codeCoverage: true
    },
    reporters: config['angularCli'] && config['angularCli'].codeCoverage
    ? ['coverage-istanbul', 'mocha']
    : ['mocha'],
    mochaReporter: {
      showDiff: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    browsers: ['Chrome'],
  };

  config.set(configuration);
};
