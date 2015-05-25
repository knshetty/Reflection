`import Ember from 'ember'`

IndexRoute = Ember.Route.extend(

  redirect: ->
    @transitionTo('mystory')

)

`export default IndexRoute`
