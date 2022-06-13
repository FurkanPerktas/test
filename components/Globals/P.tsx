import React from "react";

interface Props {
  text: string;
}

export function P({ text }: Props) {
  return (
    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 ">
      {text}
    </p>
  );
}
export function PL({ text }: Props) {
  return (
    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-light">
      {text}
    </p>
  );
}
export function PM({ text }: Props) {
  return (
    <p className="font- text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium">
      {text}
    </p>
  );
}
export function PB({ text }: Props) {
  return (
    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-bold">
      {text}
    </p>
  );
}
export function P0({ text }: Props) {
  return (
    <p className="flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg">
      <span className="h-1 w-1 md:h-2 md:w-2 bg-primary rounded-full"></span>{" "}
      {text}
    </p>
  );
}
