import Actions from "src/actions"
import { types } from "src/actions/Settings"

export interface INavigationState {
  email: string,
  fname: string,
  sname: string
}

const initialState: INavigationState = {
  email: "default@email.com",
  fname: "Bob",
  sname: "Smith"
}

export default function settings(state: INavigationState = initialState, action: any = {}) {
  switch (action.type) {

    case "ChangeFName": {
      state.fname = action.value
      return {
        ...state,
        firstName: state.fname,
      }
    }

    case "ChangeSName": {
      state.sname = action.value
      return {
        ...state,
        secondName: state.sname,
      }
    }


    case "ChangeEmail": {
      state.email = action.value
      return {
        ...state,
        email: state.email,
      }
    }

    default:
      return state
  }
}
