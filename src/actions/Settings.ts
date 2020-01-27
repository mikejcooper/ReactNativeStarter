export const types = {
  DO_SOMETHING_REQUEST: "@/settings/DO_SOMETHING_REQUEST",
}

function doSomething(value: number) {
  return {
    type: types.DO_SOMETHING_REQUEST,
    payload: value,
  }
}

export default { doSomething }
