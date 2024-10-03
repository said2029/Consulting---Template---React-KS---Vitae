import { storageFr } from "@/firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import uuid4 from "uuid4";

const useImageUpload = () => {
  const [Image, setImage] = useState("");
  const [isloading, setIsLoadign] = useState(false);
  const uploadImage = async (file) => {
    if (!file) return;
    console.log(file);

    // Create a storage reference
    const storageRef = ref(storageFr, `images/${uuid4()}`);
    setIsLoadign(true);
    const image = await uploadBytes(storageRef, file);
    console.log(`File ${file.name} uploaded to ${image.ref.fullPath}`);
    getDownloadURL(image.ref).then((downloadURL) => {
      console.log("File available at", downloadURL);
      setImage(downloadURL);
      setIsLoadign(false);
    });
    setIsLoadign(false);

    // Start the file upload
  };

  return { uploadImage, Image, isloading,setImage };
};

export default useImageUpload;
