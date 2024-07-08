import { FC } from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import Link from "next/link";

// Define the props type
interface ImagesSliderDemoProps {
  images: string[];
  interval: number;
  className?: string;
  text: string;
}

// Use the FC (Function Component) type from React and the defined props type
const ImagesSliderDemo: FC<ImagesSliderDemoProps> = ({
  images,
  interval,
  className,
  text,
}) => {
  return (
    <ImagesSlider
      className={`rounded-lg group ${className}`} // Added `group` class
      images={images}
      //also this error it says "Type '{ children: Element; className: string; images: string[]; slideInterval: number; }' is not assignable to type 'IntrinsicAttributes & { images: string[]; children: ReactNode; overlay?: ReactNode; overlayClassName?: string | undefined; className?: string | undefined; autoplay?: boolean | undefined; direction?: "up" | ... 1 more ... | undefined; }'.Property 'slideInterval' does not exist on type 'IntrinsicAttributes & { images: string[]; children: ReactNode; overlay?: ReactNode; overlayClassName?: string | undefined; className?: string | undefined; autoplay?: boolean | undefined; direction?: "up" | ... 1 more ... | undefined; "
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
};

export default ImagesSliderDemo;
