import { FunctionComponent } from "react";

export const ArrowDownIcon: FunctionComponent = ({ color = "#a1a5ab", scale = 1 }: { color: string; scale: number }) => {

  return (
    <svg width={24 * scale} height={24 * scale} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.29 9.29002C17.68 9.68002 17.68 10.31 17.29 10.7L12.7 15.29C12.31 15.68 11.68 15.68 11.29 15.29L6.69999 10.7C6.30999 10.31 6.30999 9.68002 6.69999 9.29002C7.08999 8.90002 7.71999 8.90002 8.10999 9.29002L12 13.17L15.88 9.29002C16.27 8.90002 16.91 8.91002 17.29 9.29002Z"
        fill={color}
      />
    </svg>
  );
};
