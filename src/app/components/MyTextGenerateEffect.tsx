import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function TextGenerateEffectDemo({ text = "Hello" }) {
  return <TextGenerateEffect words={text} />;
}
