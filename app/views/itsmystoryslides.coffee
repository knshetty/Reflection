`import Ember from 'ember'`

ItsmystoryslidesView = Ember.View.extend(

  didInsertElement: ->
    @$(".slideshow").focus()

)

`export default ItsmystoryslidesView`
