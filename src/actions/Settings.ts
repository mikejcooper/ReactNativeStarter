export const types = {
  ChangeFName: "@/settings/ChangeFName",
  ChangeSName: "@/settings/ChangeSName",
  ChangeEmail: "@/settings/ChangeEmail",
  DO_SOMETHING_REQUEST: "@/settings/DO_SOMETHING_REQUEST",
}

function doSomething(value: number) {
  return {
    type: types.DO_SOMETHING_REQUEST,
    payload: value,
  }
}

function changeFName(value: number) {
  return {
    type: types.ChangeFName,
    payload: value,
  }
}

function changeSName(value: number) {
  return {
    type: types.ChangeSName,
    payload: value,
  }
}

function changeEmail(value: number) {
  return {
    type: types.ChangeEmail,
    payload: value,
  }
}

export default { changeFName, changeSName, changeEmail, doSomething }