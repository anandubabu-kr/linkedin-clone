import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, getDoc, getDocs, addDoc, deleteDoc, updateDoc, doc, Timestamp } from "firebase/firestore";
import { db } from './firebase.js'

const postColloctionRef = collection(db, 'posts');
const storage = getStorage();


class PostServices {
    addPost = async (newPost) => {
        newPost.timestamp = Timestamp.now()
        if (newPost.image) {

            const storageRef = ref(storage, 'images/' + newPost.image.name);

            const uploadTask = uploadBytesResumable(storageRef, newPost.image);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');

                },
                (error) => {
                    switch (error.code) {
                        case 'storage/unauthorized':
                            console.log('User doesnt have permission to access the object')
                            break;
                        case 'storage/canceled':
                            console.log('User canceled the upload')
                            break;
                        case 'storage/unknown':
                            console.log('Unknown error occurred, inspect error.serverResponse', error.code)
                            break;
                        default:
                            console.log('Unknown error occurred, inspect error.serverResponse', error.code)
                    }
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        newPost.image = downloadURL;
                        return addDoc(postColloctionRef, newPost)
                    });
                }
            );

        } else {
            return addDoc(postColloctionRef, newPost)
        }

    }

    updatePosts = (id, updateBook) => {
        const postDoc = doc(db, 'posts', id)
        return updateDoc(postDoc, updateBook)
    }

    deletePost = (id) => {
        const postDoc = doc(db, 'posts', id)
        return deleteDoc(postDoc)
    }

    getAllPosts = () => {
        return getDocs(postColloctionRef)
    }

    getPost = (id) => {
        const postDoc = doc(db, 'posts', id)
        return getDoc(postDoc)
    }
}



export default new PostServices()