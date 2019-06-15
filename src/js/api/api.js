const apiUrl = 'http://localhost:3000/'

function makeRequest(endpoint, method = 'GET', body = null) {
  let params = {
      method: method,
      credentials: 'include', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
    }
  if(body) {
    params.body = JSON.stringify(body)
  }
  return fetch(apiUrl + endpoint,params)
    .then(response =>
      response.json()
    ).catch((error) => {});
}

export const getUsers = function() {
  return makeRequest('users')
}

export const updateUser = function(payload) {
  return makeRequest('users', 'POST', payload)
}

export const createUser = function(payload) {
  return makeRequest('users', 'POST', payload)
}

export const restore = function(payload) {
  return makeRequest('auth')
}

export const signIn = function(payload) {
  return makeRequest('auth', 'POST', payload)
}

export const signOut = function() {
  return makeRequest('auth', 'DELETE')
}

export const getCategories = function() {
  return makeRequest('categories')
}
