import { FlipWords } from "@/components/ui/flip-words";

export default function MyFlipWords({
  words = [
    "Collaborating",
    "Contributing",
    "Building",
    "Experiencing",
    "Learning",
  ],
}) {
  return (
    <div className="flex justify-center items-center">
      <div className="text-lg font-semibold mx-auto text-slate-600 w-[18rem]">
        Start
        <FlipWords words={words} />
        {/* <br /> */}
        Now
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="inline-block align-middle w-5 h-5 ml-2 mb-[.1rem]">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
