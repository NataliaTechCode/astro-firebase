import { db } from "../firebase/client";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";

export const loadPosts = async (usuario) => {
  const userFilter = usuario;
  const startDate = new Date("2024-01-01");
  const endDate = new Date("2024-12-31");

  const q = query(
    collection(db, "posts"),
    where("usuario", "==", userFilter),
    where("fecha", ">=", Timestamp.fromDate(startDate)),
    where("fecha", "<=", Timestamp.fromDate(endDate))
  );

  const querySnapshot = await getDocs(q);

  // console.log("sad")
  const posts = querySnapshot.docs.map((doc) => doc.data());

  const posts2 = querySnapshot.size;
  return [posts,posts2];
};


export const allPosts = async () => {
  const q = query(collection(db, "posts"));

  const querySnapshot = await getDocs(q);
  const posts = querySnapshot.docs.map((doc) => doc.data());
  return posts;
};
