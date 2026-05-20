import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function App() {

  const [page, setPage] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

  const galleryImages = [
  "/1.jpeg",
  "/2.jpeg",
  "/3.jpeg",
  "/4.jpeg",
  "/5.jpeg",
  "/6.jpeg",
  "/8.jpeg",
  "/9.jpeg",
  "/a.jpeg",
"/b.jpeg",
"/c.jpeg",
"/d.jpeg",
"/e.jpeg",
"/f.jpeg",
"/g.jpeg",
"/h.jpeg",
"/i.jpeg",
"/j.jpeg",
"/k.jpeg",
"/l.jpeg",
"/m.jpeg"

];

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="gradient-bg min-h-screen overflow-hidden relative">

      {/* HEART RAIN */}

      {[...Array(40)].map((_, i) => (

        <FaHeart
          key={i}
          className="heart"

          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 10}s`,
            fontSize: `${15 + Math.random() * 30}px`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />

      ))}

      <AnimatePresence mode="wait">

        {/* PAGE 1 */}

        {page === 1 && (

          <motion.section
            key="page1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative z-10"
          >

            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-8xl font-bold text-pink-500 glow cursive"
            >
              Happy Birthday
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-4xl md:text-6xl text-pink-400 mt-4 cursive"
            >
              My Love ❤️
            </motion.h2>

            <div className="mt-10 text-2xl md:text-4xl text-pink-600 font-semibold">

              <TypeAnimation
                sequence={[
                  "You are my happiness ❤️",
                  2000,
                  "You make life beautiful ✨",
                  2000,
                  "Every moment with you is magical 💖",
                  2000
                ]}
                speed={50}
                repeat={Infinity}
              />

            </div>

            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              src="/birthday.jpg"
              className="w-[320px] md:w-[400px] rounded-[30px] mt-12 shadow-2xl border-4 border-pink-200"
            />

              <br></br>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPage(2)}
              className="mt-14 px-16 py-5 bg-pink-400 hover:bg-pink-500 text-white rounded-full text-2xl shadow-2xl transition-all cursive flex items-center justify-center text-center leading-[1.6] tracking-wide min-w-[320px]"
            >
              see how cute you are.. 📸
            </motion.button>
                <div className="h-[250px]"></div>
          </motion.section>

        )}

        {/* PAGE 2 */}

        {page === 2 && (

          <motion.section
            key="page2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="min-h-screen py-20 px-6 pb-40 flex flex-col items-center relative z-10"
          >

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full text-center text-5xl md:text-7xl text-pink-500 cursive mb-16"
            >
              My Cute Chick 📸
            </motion.h2>

            {/* MAIN SLIDESHOW */}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="max-w-3xl w-full glass rounded-[30px] p-6"
            >

              <img
                src={galleryImages[currentImage]}
                className="rounded-[25px] h-[500px] object-cover w-full transition-all duration-1000"
              />

            </motion.div> 

            {/* IMAGE GRID */}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 max-w-5xl w-full">

              {galleryImages.map((img, index) => (

                <motion.img
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  className="rounded-[25px] h-[240px] object-cover w-full shadow-xl border-4 border-pink-100"
                />

              ))}

            </div>
               <br></br>
           <div className="flex gap-6 mt-16 mb-20 flex-wrap justify-center">

  <motion.button
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => setPage(1)}
    className=" mt-12 mb-20 px-16 py-5 bg-white text-pink-500 border-2 border-pink-300 rounded-full text-2xl shadow-2xl transition-all cursive flex items-center justify-center text-center leading-[1.6] tracking-wide min-w-[320px]"
  >
    ← Back
  </motion.button>

  <motion.button
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => setPage(3)}
className="mt-14 px-16 py-5 bg-pink-400 hover:bg-pink-500 text-white rounded-full text-2xl shadow-2xl transition-all cursive flex items-center justify-center text-center leading-[1.6] tracking-wide min-w-[320px]"  >
    My Note 💌
  </motion.button>

</div>
<div className="h-[250px]"></div>
          </motion.section>

        )}

        {/* PAGE 3 */}

        {page === 3 && (

          <motion.section
            key="page3"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="min-h-screen py-20 px-6 pb-40 flex flex-col items-center justify-center text-center relative z-10"
          >

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full text-center text-5xl md:text-7xl text-pink-500 cursive mb-12"
            >
              A Note For You 💌..
            </motion.h2>
            <br></br>
            <div className="flex flex-col items-center w-full">

  {/* TOP PHOTOS */}

  <motion.div

    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}

    transition={{ duration: 1 }}

    className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12 max-w-5xl w-full px-4"
  >

    <img
      src="/7.jpeg"
      className="rounded-[25px] h-[220px] object-cover w-full shadow-2xl border-4 border-pink-100 hover:scale-105 transition-all duration-500"
    />

    <img
      src="/8.jpeg"
      className="rounded-[25px] h-[220px] object-cover w-full shadow-2xl border-4 border-pink-100 hover:scale-105 transition-all duration-500"
    />

    <img
      src="/9.jpeg"
      className="rounded-[25px] h-[220px] object-cover w-full shadow-2xl border-4 border-pink-100 hover:scale-105 transition-all duration-500"
    />

    <img
      src="/10.jpeg"
      className="rounded-[25px] h-[220px] object-cover w-full shadow-2xl border-4 border-pink-100 hover:scale-105 transition-all duration-500"
    />

  </motion.div>

  {/* LETTER */}

  <motion.div

    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}

    transition={{ duration: 1 }}

    className="relative flex items-center justify-center w-full max-w-5xl mx-auto"

  >

    {/* LETTER BACKGROUND */}

    <img
      src="/letter.jpg"
      className="w-full max-w-[750px] object-contain drop-shadow-2xl"
    />

    {/* LETTER TEXT */}

    <div className="absolute inset-0 flex items-center justify-center px-8 md:px-28">

      <p className="text-[13px] md:text-[24px] leading-[28px] md:leading-[46px] text-[#5c1f38] cursive text-center max-w-[500px]">

  Naaa Bngrmmhh🤌🏻💕,

  <br /><br />

  Every moment with you feels like a beautiful dream💭.

  Your smile brightens my darkest days🥰✨,
  your voice calms my heart🎶,
  and your presence makes my life complete💝.

  <br /><br />

  Sometimes I wonder how life became so beautiful,
  and then I realize it’s because you are in it😍.

  <br /><br />
  You are the peace in my chaos😇,
  the warmth in my cold days🤗,
  and the reason behind so many of my smiles💫.

  <br /><br />
  On your special day,
  I just want to remind you how deeply special you are to me...
<br /><br />
  You deserve every happiness💞,
  every success,
  and every beautiful moment in this world💖.

  May your smile never fade💜,
  may your dreams always shine brightly🪐,
  and may your heart always stay as beautiful as it is today❤️.

 <br /><br />
  No matter where life takes us,
  one thing will always remain the same —
  my heart will always choose you🥺🥺.
<br /><br />
  Happy Birthday Nanna💘✨

  <br /><br />

  From Stranger...

</p>

    </div>

  </motion.div>

</div>
          <br>
          </br>
            <motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => setPage(2)}
  className="mt-12 mb-20 px-16 py-5 bg-white text-pink-500 border-2 border-pink-300 rounded-full text-2xl shadow-2xl transition-all cursive flex items-center justify-center text-center leading-[1.6] tracking-wide min-w-[320px]"
>
  ← Back To Memories
</motion.button>
          <div className="h-[250px]"></div>
          </motion.section>

        )}

      </AnimatePresence>

    </div>

  );
}