import { sizeClasses } from "./FilledStar";

const EmptyStar = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="gold"
    strokeWidth="2"
    className={`${sizeClasses[size]} cursor-pointer`}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default EmptyStar;
