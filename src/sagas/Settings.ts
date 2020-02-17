import { takeLeading } from "redux-saga/effects"
import Actions from "src/actions"
import { types } from "src/actions/Settings"

export function* handleDoSomethingRequest(action: Type<typeof Actions.Settings.changeFirstName>) {
  console.log("In the handle function")
  // Typical use: An API call  // try {
  //   const response = yield API.App.getData()
  //   yield put({
  //     type: types.DO_SOMETHING_REQUEST_SUCCESSFUL,
  //     payload: response,
  //   })
  // } catch (e) {
  //   console.warn(e)
  //   yield put({
  //     type: types.DO_SOMETHING_REQUEST_UNSUCCESSFUL,
  //     payload: e,
  //   })
  // }
}

// When DO_SOMETHING_REQUEST fires, call handleDoSomethingRequest
const splashSaga = [takeLeading(types.Change_firstName, handleDoSomethingRequest)]

export default splashSaga
