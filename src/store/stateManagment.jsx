import {create} from 'zustand';
import { onSnapshot, collection } from 'firebase/firestore';
import {db} from '../services/firebase';

const useStore = create((set) => ({
    data: [],
    setData: (newData) => set({ data: newData }),
  }));

  export const fetchFirestoreData = () => {
    const store = useStore.getState();
    const unsubscribe = onSnapshot(collection(db, "cartItems"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      store.setData(data);  // Update Zustand store with Firestore data
    });
    return unsubscribe;  // Optionally return unsubscribe function to stop listening
  };
  
  export default useStore;