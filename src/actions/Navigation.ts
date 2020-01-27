import { IAction } from "src/actions"

export const types = {
  NAVIGATION_REQUEST: "@/navigation/NAVIGATION_REQUEST",
  NAVIGATION_REPLACE: "@/navigation/NAVIGATION_REPLACE",
  NAVIGATION_PUSH: "@/navigation/NAVIGATION_PUSH",
  NAVIGATION_REQUEST_SUCCESSFUL: "@/navigation/NAVIGATION_REQUEST_SUCCESSFUL",

  UPDATE_ROUTE_NAME_REQUEST: "@/navigation/UPDATE_ROUTE_NAME_REQUEST",
}

function navigate(nextRoute: string, params: any = {}): IAction {
  return {
    type: types.NAVIGATION_REQUEST,
    payload: { route: nextRoute, params },
  }
}

function replace(nextRoute: string, params: any = {}): IAction {
  return {
    type: types.NAVIGATION_REPLACE,
    payload: { route: nextRoute, params },
  }
}

function push(nextRoute: string, params: any = {}): IAction {
  return {
    type: types.NAVIGATION_PUSH,
    payload: { route: nextRoute, params },
  }
}

function updateCurrentRouteName(payload: string): IAction {
  return {
    type: types.UPDATE_ROUTE_NAME_REQUEST,
    payload,
  }
}

export default { navigate, updateCurrentRouteName, replace, push }
