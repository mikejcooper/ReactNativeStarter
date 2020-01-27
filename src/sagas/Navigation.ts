import { put, takeLeading } from "redux-saga/effects"
import { types } from "src/actions/Navigation"
import { navigate, push, replace } from "src/config/routes/NavigationService"

export function* handleNavigationPush(action: any) {
  const { route, params } = action.payload
  push(route, params)
  yield put({
    type: types.NAVIGATION_REQUEST_SUCCESSFUL,
  })
}

export function* handleNavigationRequest(action: any) {
  const { route, params } = action.payload
  navigate(route, params)
  yield put({
    type: types.NAVIGATION_REQUEST_SUCCESSFUL,
  })
}

export function* handleNavigationReplace(action: any) {
  const { route, params } = action.payload
  replace(route, params)
  yield put({
    type: types.NAVIGATION_REQUEST_SUCCESSFUL,
  })
}

const navigationSaga = [
  takeLeading(types.NAVIGATION_PUSH, handleNavigationPush),
  takeLeading(types.NAVIGATION_REPLACE, handleNavigationReplace),
  takeLeading(types.NAVIGATION_REQUEST, handleNavigationRequest),
]

export default navigationSaga
