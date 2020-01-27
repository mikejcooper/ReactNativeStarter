import { all } from "redux-saga/effects"
import navigationSaga from "./Navigation"
import appSaga from "./Settings"
import splashSaga from "./Splash"

export default function* rootSaga() {
  yield all([...navigationSaga, ...splashSaga, ...appSaga])
}
