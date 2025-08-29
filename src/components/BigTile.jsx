import { Link } from "react-router-dom";

export default function BigTile({
  to,
  title,
  subtitle,
  height = "h-52 md:h-60",
  inner = "pl-16 pt-16",
}) {
  return (
    <Link
      to={to}
      className={`block ${height} rounded-2xl shadow-lg ${inner} transition hover:shadow-xl no-underline text-black focus:outline-none`}
      style={{ backgroundColor: "#d787b0" }}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-xl md:text-2xl font-medium font-serif">{title}</h2>
        {subtitle && (
          <p className="text-lg md:text-[1.35rem] opacity-90 font-serif">
            {subtitle}
          </p>
        )}
      </div>
    </Link>
  );
}
