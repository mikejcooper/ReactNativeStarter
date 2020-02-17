export const types = {
  Change_firstName: "@/settings/Change_firstName",
  Change_secondName: "@/settings/Change_secondName",
  Change_email: "@/settings/Change_email",
}

function changeFirstName(value: String) {
  return {
    type: types.Change_firstName,
    payload: value,
  }
}

function changeSecondName(value: String) {
  return {
    type: types.Change_secondName,
    payload: value,
  }
}

function changeEmail(value: String) {
  return {
    type: types.Change_email,
    payload: value,
  }
}

export default { changeFirstName, changeSecondName, changeEmail }
