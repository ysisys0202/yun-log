import React from "react";
type Props = {
  align?: "start" | "center" | "end" | "between";
  children: React.ReactNode;
};
const TagList = ({ align = "start", children }: Props) => {
  return <div className={`flex gap-x-1 align-${align}`}>{children}</div>;
};

export default TagList;
