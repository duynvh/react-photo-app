import firebase from 'firebase';

const userApi = {
  getMe: () => {
    // TODO: Call API to get current user
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentUser = firebase.auth().currentUser;

        resolve({
          id: currentUser.uid,
          name: currentUser.displayName,
          email: currentUser.email,
          photoUrl: currentUser.photoURL,
        });
      }, 500);
    })
  }
}

export default userApi;
