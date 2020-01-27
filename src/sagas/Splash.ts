import { takeLeading } from "redux-saga/effects"
import { types } from "src/actions/Splash"

export function* handleInitialiseAppRequest() {}

const splashSaga = [takeLeading(types.INITIALISE_APP_REQUEST, handleInitialiseAppRequest)]

export default splashSaga
