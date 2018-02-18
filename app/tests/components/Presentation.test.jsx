var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var configureStore = require('configureStore');
import {Presentation} from 'Presentation';
import Title from 'Title';

describe('Presentation', () => {
  it('should exist', () => {
    expect(Presentation).toExist();
  });

  it('should render Title', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <Presentation/>
      </Provider>
    );

    var presentation = TestUtils.scryRenderedComponentsWithType(provider, Presentation)[0];
    var title = TestUtils.scryRenderedComponentsWithType(presentation, Title);

    expect(title.length).toEqual(1);
  });
});
