"use client";

import { useRef, useState } from "react";

const PLACEHOLDER_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='60' viewBox='0 0 80 60'%3E%3Crect fill='%23d1d5db' width='80' height='60'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-size='10' font-family='sans-serif'%3ENo image%3C/text%3E%3C/svg%3E";

interface PropsValues {
  label: string;
  name: string;
}

const ImagePicker = ({ label, name }: PropsValues) => {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);

  const handlePickClick = () => {
    imageRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    setPickedImage(URL.createObjectURL(file));
  };

  return (
    <div className="rounded-xl overflow-hidden p-2">
      <label htmlFor={name}>{label}</label>
      <div className="controls">
        <img
          src={pickedImage ?? PLACEHOLDER_SRC}
          alt={pickedImage ? "Picked meal" : "No image chosen"}
          width={80}
          height={60}
          className={
            pickedImage
              ? "object-cover rounded-lg"
              : "border-[5px] border-orange-300 border-dashed rounded-lg"
          }
        />

        <input
          type="file"
          id={name}
          name={name}
          accept="image/png,image/jpeg"
          className="hidden"
          ref={imageRef}
          required
          onChange={handleImageChange}
        />
      </div>

      <button
        className="cursor-pointer mt-2 px-4 py-1 bg-linear-to-r from-[#ef7e3c] to-[#894106] rounded-xl"
        type="button"
        onClick={handlePickClick}
      >
        Choose Image
      </button>
    </div>
  );
};

export default ImagePicker;
