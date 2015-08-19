`import Ember from 'ember'`

ProjectsFriesianhorseController = Ember.Controller.extend(

	actions:
		fire_demo: ->
			window.open(@get('demoSPA_url'))

)

`export default ProjectsFriesianhorseController`
