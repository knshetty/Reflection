`import Ember from 'ember'`

ProjectsNorfolktrotterRoute = Ember.Route.extend(

	setupController: (controller, model) ->
		
		Ember.$.get('http://88.114.108.176:1337/exchange').done( ->
			console.log('NorfolkTrotter-Service Available')
			controller.set('demo', true)
		).fail( ->
			console.log('NorfolkTrotter-Service Not Available!')
			controller.set('demo', false)
		)

)

`export default ProjectsNorfolktrotterRoute`
