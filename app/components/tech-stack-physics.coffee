`import Ember from 'ember'`

TechStackPhysicsComponent = Ember.Component.extend(

  # Initialize Matterjs only after ember
  # has rendered its template into DOM
  didInsertElement: ->

    # --- Module aliases ---
    Engine = Matter.Engine
    World = Matter.World
    Body = Matter.Body
    Bodies = Matter.Bodies
    Common = Matter.Common
    Composites = Matter.Composites
    Events = Matter.Events
    Mouse = Matter.Mouse
    MouseConstraint = Matter.MouseConstraint
    Bounds = Matter.Bounds

    # --- Create Matterjs engine ---
    engine = Engine.create(@$('#techstack-physics')[0], {
              render:
                options:
                  showAngleIndicator: true
                  wireframes: true
                  height: 314
                  width: 210
            })

    # -- Add a mouse controlled constraint to the world ---
    mouseConstraint = MouseConstraint.create(engine)
    World.add(engine.world, mouseConstraint)

    # --- Create bodies ---
    offset = 5
    options =
      isStatic: true
      render:
        visible: true

    engine.world.bodies = []

    # --- Create static walls: Define Top, Bottom, Right, Left ---
    World.add(engine.world, [
        Bodies.rectangle(110, -offset, 215 + 2 * offset, 10, options)
        Bodies.rectangle(110, 314 + offset, 215 + 2 * offset, 10, options)
        Bodies.rectangle(210 + offset, 161.5, 10, 312 + 2 * offset, options)
        Bodies.rectangle(-offset, 161.5, 10, 312 + 2 * offset, options)
    ])

    counter = 1
    stack = Composites.stack(25, 20, 3, 4, 0, 0, (x, y) ->
              if counter == 1
                counter += 1
                Bodies.rectangle(x, y, 55, 53, {
                  render:
                    sprite:
                      texture: 'assets/images/emberjs-logo.svg'
                      url: 'http://emberjs.com/'
                      xScale: 0.45
                      yScale: 0.45
                })
              else if counter == 2
                counter += 1
                Bodies.circle(x, y, 27.5, {
                  density: 0.0005
                  frictionAir: 0.06
                  restitution: 0.3
                  friction: 0.01
                  render:
                    sprite:
                      texture: 'assets/images/coffeescript-logo.svg'
                      url: 'http://coffeescript.org/'
                      xScale: 0.375
                      yScale: 0.375
                })
              else if counter == 3
                counter += 1
                Bodies.circle(x, y, 27.5, {
                  density: 0.0005
                  frictionAir: 0.06
                  restitution: 0.3
                  friction: 0.01
                  render:
                    sprite:
                      texture: 'assets/images/broccoli-logo.svg'
                      url: 'http://broccolijs.com/'
                      xScale: 0.1875
                      yScale: 0.1875
                })
              else if counter == 4
                counter += 1
                Bodies.rectangle(x, y, 68.75, 25, {
                  render:
                    sprite:
                      texture: 'assets/images/ember-cli-logo.svg'
                      url: 'http://www.ember-cli.com/'
                      xScale: 0.8125
                      yScale: 0.8125
                })
              else if counter == 5
                counter += 1
                Bodies.circle(x, y, 27.5, {
                  density: 0.0005
                  frictionAir: 0.06
                  restitution: 0.3
                  friction: 0.01
                  render:
                    sprite:
                      texture: 'assets/images/bower-logo.svg'
                      url: 'http://bower.io/'
                      xScale: 0.1125
                      yScale: 0.1125
                })
              else if counter == 6
                counter += 1
                Bodies.rectangle(x, y, 43.75, 50, {
                  render:
                    sprite:
                      texture: 'assets/images/html5-logo.svg'
                      url: 'http://www.w3.org/html/'
                      xScale: 0.1
                      yScale: 0.1
                })
              else if counter == 7
                counter += 1
                Bodies.circle(x, y, 22.75, {
                  density: 0.0005
                  frictionAir: 0.06
                  restitution: 0.3
                  friction: 0.01
                  render:
                    sprite:
                      texture: 'assets/images/handlebars-logo.svg'
                      url: 'http://handlebarsjs.com/'
                      xScale: 0.225
                      yScale: 0.225
                })
              else if counter == 8
                counter += 1
                Bodies.rectangle(x, y, 37.5, 37.5, {
                  render:
                    sprite:
                      texture: 'assets/images/bootstrap-logo.svg'
                      url: 'http://getbootstrap.com/'
                      xScale: 0.2625
                      yScale: 0.2625
                })
              else if counter == 9
                counter += 1
                Bodies.rectangle(x, y, 90, 25, {
                  render:
                    sprite:
                      texture: 'assets/images/jquery-logo.svg'
                      url: 'http://jquery.com/'
                      xScale: 0.2875
                      yScale: 0.2875
                })
              else if counter == 10
                counter += 1
                Bodies.rectangle(x, y, 81.25, 22.5, {
                  render:
                    sprite:
                      texture: 'assets/images/impress-js-logo.svg'
                      url: 'https://github.com/impress/impress.js'
                      xScale: 0.2375
                      yScale: 0.2375
                })
              else if counter == 11
                counter += 1
                Bodies.rectangle(x, y, 56.25, 43.75, {
                  render:
                    sprite:
                      texture: 'assets/images/mapbox-logo.svg'
                      url: 'https://www.mapbox.com/'
                      xScale: 0.25
                      yScale: 0.25
                })
              else if counter == 12
                counter += 1
                Bodies.rectangle(x, y, 62.5, 37.5, {
                  render:
                    sprite:
                      texture: 'assets/images/matter-js-logo.svg'
                      url: 'http://brm.io/matter-js/'
                      xScale: 0.1875
                      yScale: 0.1875
                })
          )

    # --- Add all bodies to the world ---
    World.add(engine.world, stack)

    # --- Setup render ---
    renderOptions = engine.render.options
    renderOptions.background = ''
    renderOptions.showAngleIndicator = false
    renderOptions.wireframes = false

    # --- Setup event handler ---
    Events.on(engine, 'mouseup', (event) ->
      if (!mouseConstraint.bodyB)
        for body in event.source.world.composites[0].bodies
          if Bounds.contains(body.bounds, mouseConstraint.mouse.position)
            bodyUrl = body.render.sprite.url
            if bodyUrl != undefined
              window.open(bodyUrl)
            break
    )

    # --- Run the engine ---
    Engine.run(engine)
)

`export default TechStackPhysicsComponent`
