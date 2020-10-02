import Navigation from "src/actions/Navigation"
import Settings from "src/actions/Settings"
import Splash from "src/actions/Splash"
import Edit from "src/actions/Edit"

const Actions = {
  Settings,
  Navigation,
  Splash,
  Edit,
}
export default Actions

export interface IAction {
  type: string
  payload: any
}
