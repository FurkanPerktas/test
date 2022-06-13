import React from "react";
import { Button } from "@mantine/core";
/* 
children : ReactNode : Button label
color : MantineColor : Button color from theme
compact : boolean : Reduces vertical and horizontal spacing
disabled : boolean : Disabled state
fullWidth : boolean : Sets button width to 100% of parent element
gradient : MantineGradient : Controls gradient settings in gradient variant only
leftIcon : ReactNode : Adds icon before button label
rightIcon : ReactNode : Adds icon after button label
loaderPosition : "left" | "right" : 	Loader position relative to button label
loaderProps : LoaderProps : Props spread to Loader component
loading : boolean : Indicate loading state
radius : number | "xs" | "sm" | "md" | "lg" | "xl" : Button border-radius from theme or number to set border-radius in px
size : "xs" | "sm" | "md" | "lg" | "xl" : Predefined button size
type : "button" | "reset" | "submit" : Button type attribute
uppercase : boolean : Set text-transform to uppercase
variant : ButtonVariant : Controls button appearance

chiledren : label of button like settings (button)
disabled : button is disabled not clickable
compact : padding is 0
uppercase : TEXT IS UPPERCASE
*/
//https://mantine.dev/core/button/
//https://mantine.dev/theming/extend-theme/
//https://yeun.github.io/open-color/ mantine colors right here
interface Props {
  text: string;
}

export function ButtonFilled({
  text,
}: Props) {
  return (
    <Button children={text}></Button>
  );
}
export function ButtonLight({
  text,
}: Props) {
  return (
    <Button children={text}></Button>
  );
}
export function ButtonOutline({
  text,
}: Props) {
  return (
    <Button children={text}></Button>
  );
}
export function ButtonDefault({
  text,
}: Props) {
  return (
    <Button children={text}></Button>
  );
}
export function ButtonSubtle({
  text,
}: Props) {
  return (
    <Button children={text}></Button>
  );
}
