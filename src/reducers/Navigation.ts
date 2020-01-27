import { types } from "src/actions/Navigation"

export interface INavigationState {
  routeName: string
}

const initialState: INavigationState = {
  routeName: "",
}

export default function navigation(state: INavigationState = initialState, action: any = {}) {
  switch (action.type) {
    case types.UPDATE_ROUTE_NAME_REQUEST:
      return {
        ...state,
        routeName: action.payload,
      }
    default:
      return state
  }
}
