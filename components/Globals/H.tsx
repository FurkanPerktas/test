import React from "react";

interface Props {
  text: string;
}
// H1N: Header 1 Normal
// ...
// H1S: Header 1 Small in mathematicly half size
// ...

export function H1N({ text }: Props) {
  return (
    <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl text-gray-900 font-bold">
      {text}
    </h1>
  );
}
export function H2N({ text }: Props) {
  return (
    <h2 className="text-lg md:text-xl lg:text-2xl xl:text-4xl text-gray-800 font-bold">
      {text}
    </h2>
  );
}
export function H3N({ text }: Props) {
  return (
    <h1 className="text-base md:text-lg lg:text-xl xl:text-3xl text-gray-700 font-semibold">
      {text}
    </h1>
  );
}
export function H4N({ text }: Props) {
  return (
    <h1 className="text-sm md:text-base lg:text-lg xl:text-2xl text-gray-700 font-semibold">
      {text}
    </h1>
  );
}
export function H1S({ text }: Props) {
  return (
    <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-900 font-bold">
      {text}
    </h1>
  );
}
export function H2S({ text }: Props) {
  return (
    <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-800 font-bold">
      {text}
    </h1>
  );
}
