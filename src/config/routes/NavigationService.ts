import { NavigationActions, StackActions } from "react-navigation"

let navigator: any

export function setTopLevelNavigator(navigatorRef: any) {
  navigator = navigatorRef
}

export function navigate(routeName: any, params: any = {}) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )
}

export function push(routeName: any, params: any = {}) {
  navigator.dispatch(
    StackActions.push({
      routeName,
      params,
    })
  )
}

export function replace(routeName: any, params: any = {}) {
  navigator.dispatch(
    StackActions.replace({
      routeName,
      params,
    })
  )
}

export function getCurrentRouteName(navigationState: any) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]

  if (route.routes) {
    return getCurrentRouteName(route)
  }
  return route.routeName
}

export const Screens = {
  Splash: "Splash",
  Settings: "Settings",
  EditPage: "EditPage"
}
