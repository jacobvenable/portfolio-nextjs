/*
  Explicitly declare module for files in images folder to fix
  type problems with importing SVGs. Current implementation 
  assumes all images contain only static image data. This may 
  need updated to support inline SVGs.
*/

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

declare module "*.png" {
  const content: StaticImageData;
  export default content;
}
declare module "*.svg" {
  const content: StaticImageData;
  export default content;
}
