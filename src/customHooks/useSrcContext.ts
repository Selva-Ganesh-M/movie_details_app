import { useContext } from "react";
import { SrcContext } from "../context.ts/srcContext";

const useSrcContext = () => {
  const { src, setSrc, page, setPage } = useContext(SrcContext);
  const res = { src, setSrc, page, setPage };
  return res;
};

export default useSrcContext;
