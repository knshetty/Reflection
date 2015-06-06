`import Ember from 'ember'`

ProjectsNorfolktrotterController = Ember.Controller.extend(

	actions:
		fire_demo: ->
			window.open(@get('demoService_url'))

)

`export default ProjectsNorfolktrotterController`
