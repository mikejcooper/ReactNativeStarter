import { IAction } from "src/actions"

export interface ISplash {
  appInitialised: boolean
}

const initialState = {
  appInitialised: false,
}

export default function splash(state: ISplash = initialState, action: IAction) {
  switch (action.type) {
    default:
      return state
  }
}
