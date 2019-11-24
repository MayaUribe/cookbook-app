import firebase from '../../config/firebase.config';

const database = firebase.database();

// var userId = firebase.auth().currentUser.uid;
export const getCurrentUser = () => firebase.auth().currentUser;

export const getUserById = (userId) => {
  return database.ref(`/user/${userId}`).once('value').then((snapshot) => {
    const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    console.log('username', snapshot, username);
  });
};

export const setUserName = (userId, name, lastname) => {
  const userPath = `/user/${userId}/details`;

  return firebase.database().ref(userPath).set({
    name,
    lastname
  });
};

export async function signup() {
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

export async function login(email, pass) {
  try {
    await firebase.auth()
      .signInWithEmailAndPassword(email, pass);
    console.log('logged in!!', email);
  } catch (error) {
    console.log(error.toString());
  }
}
