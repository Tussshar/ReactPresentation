var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
var {Title} = require('Title');

describe('Title', () => {
  it('should exist', () => {
    expect(Title).toExist();
  });
});
