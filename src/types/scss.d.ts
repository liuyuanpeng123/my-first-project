declare module '*.scss' {
  const content: {
    px2vw: (px: number) => string;
    px2vh: (px: number) => string;
  };
  export default content;
}