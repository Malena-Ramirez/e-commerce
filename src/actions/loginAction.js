import { types } from '../types/types'
import { firebase, google } from "../firebase/firebaseConfig";

export const login = (id, displayName) => {
  return {
    type: types.login,
    payload: {
      id,
      displayName
    }
  }
}

export const loginGoogle = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(google)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          login(user.uid, user.displayName))
      })
  }
}

export const registerEmailPasswordName = (email, pass, name) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, pass)
      .then(async ({ user }) => {
        console.log(user);

        await user.updateProfile({ displayName: name })

        dispatch(
          login(user.uid, user.displayName)
        )
      })
      .catch(e => {
        console.log(e);
      })
  }
}

export const loginEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(
          login(user.uid, user.displayName)
        )
      })
      .catch(e => {
        console.log(e)
      })
  }
}