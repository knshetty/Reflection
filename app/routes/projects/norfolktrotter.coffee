`import Ember from 'ember'`

ProjectsNorfolktrotterRoute = Ember.Route.extend(

	setupController: (controller, model) ->
		demoService_url = 'http://88.114.108.176:1337/city'
		
		# Check 'Demo Service' is alive + Initialise variables
		Ember.$.get(demoService_url).done( ->
			console.log('NorfolkTrotter-Service Available')
			controller.set('demo', true)
			controller.set('demoService_url', demoService_url)
		).fail( ->
			console.log('NorfolkTrotter-Service Not Available!')
			controller.set('demo', false)
		)

)

`export default ProjectsNorfolktrotterRoute`
