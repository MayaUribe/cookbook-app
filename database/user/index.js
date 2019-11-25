import firebase from '../../config/firebase.config';

const database = firebase.database();

// var userId = firebase.auth().currentUser.uid;
export const getCurrentUser = () => firebase.auth().currentUser;

export const getUserById = (userId) => {
  const path = `/user/${userId}`;

  return database.ref(path).once('value').then((snapshot) => {
    const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    console.log('username', snapshot, username);
  });
};

export const setUserName = (userId, name, lastname) => {
  const path = `/user/${userId}/details`;

  return firebase.database().ref(path).set({
    name,
    lastname
  });
};

export async function signupWithEmail(email, password) {
  try {
    await firebase.auth()
      .createUserWithEmailAndPassword('maria.test2@email.com', 'test123');
    // @Todo: send email to registered user
    // @Todo: Maybe a welcome message with a quick introduction
    // @Todo: Add a loading when saving the data
    const { currentUser } = await firebase.auth();
    setUserName(currentUser.uid, 'Newuser', 'Newlastname');
    console.log('success!!');
  } catch (error) {
    console.log(error.toString());
  }
}

export async function login(email, password) {
  try {
    await firebase.auth()
      .signInWithEmailAndPassword(email, password);
    console.log('logged in!!', email);
    // navigate to home
  } catch (error) {
    console.log(error.toString());
  }
}

export async function logout() {
  try {
    await firebase.auth().signOut();
    // Navigate to login view
  } catch (error) {
    console.log(error);
  }
}
