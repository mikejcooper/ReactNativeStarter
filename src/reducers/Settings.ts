import Actions from "src/actions"
import { types } from "src/actions/Settings"

export interface INavigationState {
  number: number
}

const initialState: INavigationState = {
  number: 0,
}

export default function settings(state: INavigationState = initialState, action: any = {}) {
  switch (action.type) {
    case types.DO_SOMETHING_REQUEST: {
      const _action = action as ReturnType<typeof Actions.Settings.doSomething>
      const value = _action.payload // do something with value
      return {
        ...state,
        number: state.number + 1,
      }
    }
    default:
      return state
  }
}
