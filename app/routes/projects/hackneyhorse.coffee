`import Ember from 'ember'`

ProjectsHackneyhorseRoute = Ember.Route.extend(
	
	setupController: (controller, model) ->
		demoService_url = 'http://88.114.108.176:4201'
		
		# Check 'Demo Service' is alive + Initialise variables
		Ember.$.get(demoService_url).done( ->
			console.log('HackneyHorse-Service Available')
			controller.set('demo', true)
			controller.set('demoService_url', demoService_url)
		).fail( ->
			console.log('HackneyHorse-Service Not Available!')
			controller.set('demo', false)
		)
	
)

`export default ProjectsHackneyhorseRoute`
