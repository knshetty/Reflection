`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend
  location: config.locationType

Router.map ->
  # --------------------------------------------
  # Public routes
  # --------------------------------------------
  @route 'mystory'
  @resource 'research', ->
    @resource 'research.software', { path: '/software' }, ->
      @route 'mdsd'
      @route 'dsl'
    @resource 'research.analytics', { path: '/analytics' }, ->
      @route 'algotrading'
      @route 'infovis'
    @route 'robotics'
  @resource 'projects', ->
    @route 'friesianhorse'
    @route 'hackneyhorse'
    @route 'norfolktrotter'
    @route 'markhor'
    @route 'nutcracker'
    @route 'hornet'
    @route 'manucode'

`export default Router`
