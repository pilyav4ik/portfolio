"use client";

import { Oswald } from "next/font/google";
import Image from "next/image";

// Загрузка шрифта на уровне модуля
const oswald = Oswald({ subsets: ['latin'] });

type ImageData = {
  url: string;
  text: string;
};

type Props = {
  images: ImageData[];
  interFontClass?: string;
};

export default function ImageGallery({ images }: Props) {
  if (!Array.isArray(images) || images.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div className="image-gallery pt-36">
      {images.map((img, index) =>
        img.url ? (
          <div key={index} className="w-full flex flex-col sm:flex-row">
            <div className="p-2 md:p-5 w-full sm:w-1/2">
              <Image
                src={img.url}
                alt={`Project image ${index + 1}`}
                width={1000}
                height={400}
                className="rounded-3xl w-full"
              />
            </div>
            <div
              className={`text-4xl p-2 md:p-5 w-full sm:w-1/2 ${
                index % 2 === 0 ? "flex items-end sm:order-first" : "sm:order-last"
              } ${oswald.className}`}
            >
              {img.text}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}
