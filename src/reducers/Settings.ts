import Actions from "src/actions"
import { types } from "src/actions/Settings"

export interface INavigationState {
  firstName: string,
  lastName: string,
  email: string
}

const initialState: INavigationState = {
  firstName: 'John',
  lastName: 'Smith',
  email: 'Johnsmith@gmail.com'
}


export default function settings(state: INavigationState = initialState, action: any = {}) {
  switch (action.type) {
    case types.DO_SOMETHING_REQUEST: {
      const _action = action as ReturnType<typeof Actions.Settings.doSomething>
      const value = _action.payload // do something with value

      return {
        ...state,
        firstName: value[0],
        lastName: value[1],
        email: value[2]
      }

    }
    default:
      return state
  }
}