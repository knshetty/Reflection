`import Ember from 'ember'`

ProjectsHackneyhorseController = Ember.Controller.extend(

	actions:
		fire_demo: ->
			window.open(@get('demoService_url'))

)

`export default ProjectsHackneyhorseController`
