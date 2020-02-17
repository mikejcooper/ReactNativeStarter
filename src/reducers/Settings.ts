import Actions from "src/actions"
import { types } from "src/actions/Settings"
import { State } from "react-native-gesture-handler"

export interface INavigationState {
  firstName: String
  secondName: String
  email: String
}

const initialState: INavigationState = {
  firstName: "John",
  secondName: "Smith",
  email: "john.smith@gmail.com",
}

export default function settings(state: INavigationState = initialState, action: any = {}) {
  console.log(action.type)
  switch (action.type) {
    case "Change_firstName": {
      state.firstName = action.value
      return {
        ...state,
        firstName: state.firstName,
      }
    }
    case "Change_secondName": {
      state.secondName = action.value
      return {
        ...state,
        secondName: state.secondName,
      }
    }

    case "Change_email": {
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
