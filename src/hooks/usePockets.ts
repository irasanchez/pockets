// usePockets.ts
import { useEffect, useState } from 'react';
import firebase from '../firebase';

const usePockets = () => {
    const [pockets, setPockets] = useState([]); 

    useEffect(() => { 
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("YOUR_COLLECTION_NAME").get();
            setPockets(data.docs.map(doc => ({ ...doc.data(), id: doc.id})));
        }
        fetchData();
    }, []);

  return pockets;
};

export default usePockets;
