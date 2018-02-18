var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');


describe('Reducers', () => {
  describe('Title Reducers', () => {
    it('it should update Title', () => {
      var action = {
          type: 'ADD_TITLE',
          title: 'React Presentation'
      };

      var res = reducers.titleReducer(df(''), df(action));

      expect(res).toEqual(action.title);
    });
  });

  describe('Current Slide Reducer', () => {
    it('it should update currentSlide number', () => {
      var action = {
        type: 'UPDATE_CURRENT_SLIDE',
        slide: [
          {
            pageNumber: '1',
            heading: 'Is switching to React easy?',
            points: [
              {id:'point1', value:'Understanding how it works will take time and will '+
                'slow you down at first (but once you get it, things will start happening much faster)'}
            ]
          }
        ]
      };

      var res = reducers.currentSlideReducer(df(''), df(action));

      expect(res).toEqual(action.slide);
    });
  });


    describe('Current Page Reducer', () => {
      it('it should update current page number', () => {
        var action = {
          type: 'UPDATE_CURRENT_PAGE',
          currentPage: {
            pageNumber: '1',
            heading: 'Is switching to React easy?',
            points: [
              {id:'point1', value:'Understanding how it works will take time and will '+
                'slow you down at first (but once you get it, things will start happening much faster)'}
            ]
          }
        };

        var res = reducers.currentPageReducer(df(''), df(action));

        expect(res).toEqual(action.currentPage);
      });
    });

    describe('Slide Reducer', () => {
      it('it should add to existing slides', () => {
        var pages = [
          {
            pageNumber: '1',
            heading: 'What is React.js',
            points: [
              {id:'It was developed by Facebook', value:'It was developed by Facebook'},
              {id:'It is a view in MVC', value:'Its is a view in MVC'},
              {id:'It is a javascript library', value:'It is a javascript library'}]
          }
        ];

        var slide = {
            slideId: 1,
            heading: 'What is ReactJS',
            hasLeft: undefined,
            hasRight: undefined,
            pages
        };

        var action = {
          type: 'ADD_SLIDE',
          heading: 'What is ReactJS',
          pages
        };

        var res = reducers.slidesReducer(df(''), df(action));

        expect(res.length).toEqual(1);
        expect(res[0]).toEqual(slide);
      });
    });
});
