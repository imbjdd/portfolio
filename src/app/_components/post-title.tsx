import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-5xl my-8 lg:my-20 font-bold leading-tight md:leading-none text-left md:text-left">
      {children}
    </h1>
  );
}
