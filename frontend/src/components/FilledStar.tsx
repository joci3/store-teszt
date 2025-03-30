export const sizeClasses = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-6 h-6",
};

const FilledStar = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="gold"
      className={`${sizeClasses[size]} cursor-pointer`}>
      <path d="M12 .587l3.668 7.429L24 9.753l-6 5.839 1.415 8.248L12 19.812l-7.415 3.978L6 15.592 0 9.753l8.332-1.737L12 .587z" />
    </svg>
  );
};

export default FilledStar;
