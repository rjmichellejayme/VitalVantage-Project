import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../fb/index';

const useFetchUserName = () => {
    const [firstName, setFirstName] = useState('');
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                try {
                    const userDocRef = doc(db, 'users', user.uid);
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        setFirstName(userDoc.data().fname); 
                    } else {
                        console.error('User document not found');
                    }
                } catch (error) {
                    console.error('Error fetching user data: ', error);
                } finally {
                    setLoading(false); 
                }
            } else {
                setLoading(false); 
            }
        });

        return () => unsubscribe(); 
    }, []);

    if (loading) {
        return 'Loading...'; 
    }

    return firstName || 'No name available'; 
};

export default useFetchUserName;
