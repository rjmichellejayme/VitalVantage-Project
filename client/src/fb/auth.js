import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from './index';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const googleProvider = new GoogleAuthProvider();

export const handleGoogleSignUp = async (setLoginError) => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        const userId = generateUniqueUserId();

        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            alert("You are already signed up.");
        } else {
            let firstName = "No First Name";
            let lastName = "No Last Name";
            if (user.displayName) {
                const nameParts = user.displayName.split(" ");
                firstName = nameParts.slice(0, nameParts.length - 1).join(" ");
                lastName = nameParts[nameParts.length - 1];
            }
            await setDoc(userDocRef, {
                fname: firstName,
                mname: '',
                lname: lastName,
                extention: '', 
                phoneNumber: '',
                email: user.email,
                uniqueID: userId,
            });
            alert("Account created successfully!");
        }
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            setLoginError("This email is already registered. Please try logging in.");
            alert("This email is already registered. Please try logging in.");
        } else {
            setLoginError(error.message);
            alert(`Google Sign-Up Error: ${error.message}`);
        }
    }
};

export const handleSignUp = async (fname, mname, lname, email, password, setLoginError) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const userId = generateUniqueUserId();

        await setDoc(doc(db, "users", user.uid), {
            fname: fname,
            mname: mname || '',
            lname: lname,
            extension: '',
            email: user.email,
            phoneNumber: '',
            uniqueID: userId,
        });
        alert("Account created successfully!");
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            setLoginError("This email is already registered. Please try logging in.");
            alert("This email is already registered. Please try logging in.");
        } else {
            setLoginError(error.message);
            alert(`Sign-Up Error: ${error.message}`);
        }
    }
}

const generateUniqueUserId = () => {
    const today = new Date();
    const date = today.toISOString().split('T')[0].replace(/-/g, ""); 
    const randomNum = Math.floor(Math.random() * 1000); 
    return `${date}${randomNum}`; 
};
