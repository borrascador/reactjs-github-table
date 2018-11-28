export const USER_FETCH_REQUESTED = "USER_FETCH_REQUESTED";
export const userFetchRequested = (name) => ({
  type: USER_FETCH_REQUESTED,
  name: name
});

export const USER_FETCH_SUCCEEDED = "USER_FETCH_SUCCEEDED";
export const userFetchSucceeded = (name, repos) => ({
  type: USER_FETCH_SUCCEEDED,
  name: name,
  repos: repos
});

export const USER_FETCH_FAILED = "USER_FETCH_FAILED";
export const userFetchFailed = (message) => ({
  type: USER_FETCH_FAILED,
  message: message
});
