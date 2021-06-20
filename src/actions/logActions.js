import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOGS,
  DELETE_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOGS,
} from './type';

// export const getLogs = () => {
//   return async dispatch => {
//     setLoading();

//     const res = await fetch('/logs');
//     const data = res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data,
//     });
//   };
// };

// Get logs from sersver
export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Add logs from sersver
export const addLogs = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Delete logs from sersver
export const deleteLogs = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/logs/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_LOGS,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Update logs from sersver
export const updateLog = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = res.json();

    dispatch({
      type: UPDATE_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Set Current log
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

// Clear Current log
export const clearCurrent = log => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Set loadingto true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
