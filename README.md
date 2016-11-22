# nodejs-test-example

Simple project for testing nodejs, test and travis.

myrequest.js export two functions:

* makerequest: It has two parameters, two functions.
  *  First parameter: logger: a function with logs information   
  *  Second parameter: callback: the callback that will handle the response of a http-request.

* sum: It trace the call.


index.js uses the two functions of makerequest.js module


The project also has two tests that demostrates the usage of tape tooling test for javascript.



Steps:

* view witch version of node are installed: nvm ls OR nvm current

* install v6.7.0 OR install stable verion: nvm install v6.7.0 OR nvm install stable


* select npm version: nvm use v6.7.0

* initialize project: npm init
 
* install webpack: npm i webpack --save

* create index.js with Hello world

* add script to package.json run-hello




