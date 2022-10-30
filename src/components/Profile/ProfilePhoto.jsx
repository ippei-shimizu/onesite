import Image from "next/image";

export const ProfilePhoto = () => {
  const PHOTOS_ITEMS = [
    {
      src: "/hazeru01.jpg",
      alt: "hazeru coffee",
      width: "1200",
      height: "900",
    },
    {
      src: "/hazeru02.jpg",
      alt: "hazeru coffee",
      width: "1200",
      height: "900",
    },
    {
      src: "/shinminato01.jpg",
      alt: "hazeru coffee",
      width: "1200",
      height: "900",
    },
    {
      src: "/toyamaoohashi.jpg",
      alt: "hazeru coffee",
      width: "1200",
      height: "900",
    },
    {
      src: "/pessoa01.jpg",
      alt: "hazeru coffee",
      width: "1200",
      height: "900",
    },
    {
      src: "/pessoa02.jpg",
      alt: "hazeru coffee",
      width: "1200",
      height: "900",
    },
  ];
  return (
    <>
      {/* 写真 */}
      <article
        className={`text-center p-8 pb-10 mt-4 bg-gradient-to-tr from-post-bg-t to-post-bg-b rounded-3xl transition duration-100 dark:from-post-bg-t-dark dark:to-post-bg-b-dark md:px-5 md:py-6`}
      >
        <p
          className={`font-bold text-2xl tracking-wide text-slate-900 dark:text-slate-200`}
        >
          Photo
        </p>
        <p className="text-xs tracking-wides text-slate-900 dark:text-slate-200">
          写真
        </p>
        <div className="mt-7 grid grid-cols-2 gap-4">
          {PHOTOS_ITEMS.map((photo) => {
            return (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
              />
            );
          })}
        </div>
      </article>
    </>
  );
};

export default ProfilePhoto;
