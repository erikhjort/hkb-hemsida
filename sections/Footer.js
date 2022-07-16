import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <ul className="flex justify-center space-x-5 text-hkbgraydarkmode dark:text-hkbgray">
        <li>
          <Link href="/cookies">
            <a>Cookies</a>
          </Link>
        </li>
        <li>
          <Link href="/gdpr">
            <a>Dataskyddspolicy</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
