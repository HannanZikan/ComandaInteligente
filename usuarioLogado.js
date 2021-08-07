import firebase from "firebase"

export default function usuarioLogado(){
    const user = firebase.auth().currentUser;
    return user
}