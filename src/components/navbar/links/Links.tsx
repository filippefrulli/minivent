import Link from "next/link";

const Links = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "Events", path: "/event" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div>
      {links.map((link) => (
        <Link key={link.path} href={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
