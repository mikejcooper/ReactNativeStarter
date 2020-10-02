export const types = {
  CHANGE_F_NAME: "@/settings/CHANGE_F_NAME",
  CHANGE_S_NAME: "@/settings/CHANGE_S_NAME",
  CHANGE_EMAIL: "@/settings/CHANGE_EMAIL",
}

function changeFirstName(value: number) {
  return {
    type: types.CHANGE_F_NAME,
    payload: value,
  }
}

function changeSecondName(value: number) {
  return {
    type: types.CHANGE_S_NAME,
    payload: value,
  }
}

function changeEmail(value: number) {
  return {
    type: types.CHANGE_EMAIL,
    payload: value,
  }
}

export default { changeFirstName, changeSecondName, changeEmail }