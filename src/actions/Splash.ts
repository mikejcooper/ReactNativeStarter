import { IAction } from "src/actions"

export const types = {
  INITIALISE_APP_REQUEST: "@/splash/INITIALISE_APP_REQUEST",
  INITIALISE_APP_REQUEST_SUCCESSFUL: "@/splash/INITIALISE_APP_REQUEST_SUCCESSFUL",
}

function initialiseApp(): IAction {
  return {
    type: types.INITIALISE_APP_REQUEST,
    payload: {},
  }
}

export default { initialiseApp }
