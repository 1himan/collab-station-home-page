import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ImagesSliderDemo({
  images,
  interval,
  className,
  text,
}) {
  //! integrate direction aware hover in this
  //! set Raleway and Montserrat font easily accessible to whole project
  return (
    <ImagesSlider
      className={`rounded-lg group ${className}`} // Added `group` class
      images={images}
      slideInterval={interval}>
      <motion.div
        initial={{
          opacity: 1,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.6,
        }}
        className="z-50 flex flex-col justify-center items-center">
        <motion.p
          className="font-semibold text-md bg-clip-text 
            text-transparent bg-gradient-to-b
             from-white to-gray-500 py-4 "
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}>
          <Link className="" href="/home">
            <p className="text-center px-2">{text}</p>
          </Link>
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
