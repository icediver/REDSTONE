export function Loader() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
      width={"32"}
      height={"32"}
    >
      <circle cx="32" cy="32" r="28" stroke="#ffd700" strokeWidth={"8"} />
      <circle cx="32" cy="32" r="14" stroke="#1e90ff" strokeWidth={"8"} />
      <path
        d="M32 18 L37 27 L47 30 L37 33 L32 42 L27 33 L17 30 L27 27 Z"
        fill="#ffd700"
      />
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 5 5"
        to="360 5 5"
        dur="1s"
        repeatCount="indefinite"
      />
    </svg>
  );
}
