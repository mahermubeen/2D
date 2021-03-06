export const callAPIMiddleware = ({ dispatch, getState }) => {
  return next => action => {
    const { types, callAPI, shouldCallAPI = () => true, payload = {} } = action

    if (!types) {
      // Normal action: pass it on
      return next(action)
    }

    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every(type => typeof type === 'string')
    ) {
      throw new Error('Expected an array of three string types.')
    }

    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.')
    }

    if (!shouldCallAPI(getState())) {
      return
    }

    const [requestType, successType, failureType] = types

    dispatch(
      Object.assign({}, payload, {
        type: requestType
      })
    )

    return callAPI().then(
      response => {
        // stripe token sends the error inside the response object, womp womp
        if (response !== undefined && response.error !== undefined) {
          dispatch(
            Object.assign({}, payload, {
              error: response.error,
              type: failureType
            })
          )
          return;
        }

        const res = response === undefined || response.data === undefined ?
          response : response.data;

        dispatch(
          Object.assign({}, payload, {
            payload,
            response: res,
            type: successType
          })
        )
      },
      error => {
        dispatch(
          Object.assign({}, payload, {
            error,
            type: failureType
          })
        )
      }
    )
  }
}