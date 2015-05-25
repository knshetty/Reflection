`import Ember from 'ember'`

ProjectsRoute = Ember.Route.extend(

  setupController: (controller, model) ->

    tabs = [
      Ember.Object.create({ title: 'Hackney Horse - 2015', linkTo: 'projects.hackneyhorse' })
      Ember.Object.create({ title: 'Norfolk Trotter - 2015', linkTo: 'projects.norfolktrotter' })
      Ember.Object.create({ title: 'Markhor - 2014', linkTo: 'projects.markhor' })
      Ember.Object.create({ title: 'Nutcracker - 2012', linkTo: 'projects.nutcracker' })
      Ember.Object.create({ title: 'Manucode - 2012', linkTo: 'projects.manucode' })
      Ember.Object.create({ title: 'Mandarin Duck - 2012', linkTo: 'projects.mandarinduck' })
    ]

    controller.set('tabs', tabs)

  afterModel: ->
    @transitionTo('projects.hackneyhorse')


)

`export default ProjectsRoute`
