// @flow

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  geoRequest: null,
  geoSuccess: ['lat', 'lon'],
  geoFailure: null
})

export const geoTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  lat: null,
  lon: null,
  fetching: null,
  error: null,
})

/* ------------- Reducers ------------- */

// request the user for a uuid
export const request = (state: Object) =>
  state.merge({ fetching: true })

// successful user lookup
export const success = (state: Object, action: Object) => {
  const { coords } = action
  return state.merge({
    fetching: false,
    error: null,
    lat: coords.latitude,
    lon: coords.longitude
  })
}

// failed to get the user
export const failure = (state: Object) =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GEO_REQUEST]: request,
  [Types.GEO_SUCCESS]: success,
  [Types.GEO_FAILURE]: failure
})
