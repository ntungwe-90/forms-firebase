import firebase from '../../firebase/firebase';


export function createEmailAccount(email, password){
    return async (dispatch)=>{
        try{
            console.log('create email function');
            const user = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            console.log('after user');
            dispatch(loggedIn(user))
        }catch (error){
            console.log('sign up error');
           dispatch(registerError(error.message));
        }
    };
}


export function loginEmailAccount(email, password){
    return async (dispatch)=>{
        try{
            const user = await  firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            dispatch(loggedIn(user));
        }catch (error){
           dispatch(loginError(error.message));
        }
    };
}




export function logout(){
    return async (dispatch)=>{
        try{
             await firebase.auth().signOut();
            dispatch(loggedOut());
           
        }catch (error){
            console.log(error)
        }
    };
}

 function loggedIn(user){
    return {
        type:"LOGGED_IN",
        payload:user,
    };
}
function loggedOut(user){
    return {
        type:"LOGGED_OUT",
      
    };
}
   
export function registerError(error) {
    return {
      type: "REGISTER_ERROR",
      payload: error,
    };
  }
  
  export function loginError(error) {
    return {
      type: "LOGIN_ERROR",
      payload: error,
    };
  }