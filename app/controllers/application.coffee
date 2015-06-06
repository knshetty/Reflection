`import Ember from 'ember'`

ApplicationController = Ember.Controller.extend(

	aboutModalButtons: [Ember.Object.create({title: 'Close', clicked:"cancel", dismiss: 'modal'})]

	actions:
		showmodal: ->
			Bootstrap.ModalManager.show('aboutModal')

		cancel: ->
			Bootstrap.NM.push('Modal was cancelled', 'info')
)

`export default ApplicationController`
