import Ember from 'ember'
import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import startApp from '../helpers/start-app'
import destroyApp from '../helpers/destroy-app'
import { percySnapshot } from 'ember-percy'

const { $ } = Ember

describe('Acceptance | day', function() {
  let application

  beforeEach(function() {
    application = startApp()
  })

  afterEach(function() {
    destroyApp(application)
  })

  it('can visit /day/2015-12-06', async function() {
    server.loadFixtures('challenges', 'users', 'contributions')

    await visit('/day/2015-12-06')

    percySnapshot('/day/2015-12-06')

    expect(currentURL()).to.equal('/day/2015-12-06')
  })

  it('renders URLs correctly', async function() {
    server.loadFixtures('challenges', 'users', 'contributions')

    await visit('/day/2015-12-01')

    expect($('.avatar-wrapper[href^=http]').length).to.equal(10)
  })
})
