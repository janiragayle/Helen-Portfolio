export default function ArrowRight() {
  return (
    <svg
      width="80"
      height="30"
      viewBox="0 0 80 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* slightly uneven line for a hand-drawn feel */}
      <path
        d="M2 15 C25 10, 50 20, 75 15"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M65 7 L77 15 L65 23"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

