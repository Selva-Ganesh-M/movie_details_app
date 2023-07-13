import { useContext } from "react";
import { SrcContext } from "../context.ts/srcContext";

const useSrcContext = () => {
  const { src, setSrc } = useContext(SrcContext);
  const res = [src, setSrc];
  return res;
};

export default useSrcContext;
