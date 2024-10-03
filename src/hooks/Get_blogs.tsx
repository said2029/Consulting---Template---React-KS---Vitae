import { db } from "@/firebase/firebase";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export const useGetBlogs = ({
  limit_value = 1000,
}: {
  limit_value?: number;
}) => {
  const [blog, setBlogs] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);

  const Get_blogs = async () => {
    try {
      const q = query(
        collection(db, "blogs"),
        limit(limit_value),
        orderBy("createAt")
      );
      await getDocs(q).then((data) => {
        const newData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setBlogs(newData);
        setLastVisible(data.docs[data.docs.length - 1]);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const loadNextPage = async () => {
    if (!lastVisible) return;
    const q = query(
      collection(db, "blogs"),
      startAfter(lastVisible), // Start after the last document from previous page
      limit(limit_value)
    );
    const data = await getDocs(q);
    const newData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setBlogs(newData);
    setLastVisible(data.docs[data.docs.length - 1]); // Update the last document
  };

  useEffect(() => {
    Get_blogs();
  }, []);
  return { blog, loadNextPage, Get_blogs };
};
