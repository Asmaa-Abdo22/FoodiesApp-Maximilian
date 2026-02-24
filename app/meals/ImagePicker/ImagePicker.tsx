"use client";
import Image from "next/image";
import { useRef } from "react";
import emptyImage from '@/assets/emptyImage.png'
interface propsValues {
  label: string;
  name: string;
}

const ImagePicker = ({ label, name }: propsValues) => {
  const imageRef = useRef(null);
  const handleImagePick = () => {
    imageRef.current.click();
  };
  return (
    <div className=" rounded-xl overflow-hidden p-2  ">
      <label htmlFor={name}>{label}</label>
      <div className="controls">
        <input
          type="file"
          id={name}
          name={name}
          accept="image/png,image/jpeg"
          className="hidden"
          ref={imageRef}
        />
        <Image
          width={80}
          height={30}
          src={emptyImage}
          alt="picker image"
          className="border-5  border-orange-300  border-dashed rounded-lg"
        />
      </div>
      <button
        className=" cursor-pointer mt-2 px-4 py-1 bg-linear-to-r from-[#0610c4] rounded-xl  to-[#eb0000]"
        type="button"
        onClick={handleImagePick}
      >
        Choose Image{" "}
      </button>
    </div>
  );
};

export default ImagePicker;
