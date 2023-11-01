import { data } from "./navList";
const Header = () => {
  return (
    <div className="fixed bg-white w-full z-30">
      <nav className="shadow-sm">
        <ul className="flex justify-center py-8 gap-5 font-semibold">
          {data.map((list) => (
            <li key={list.id}>
              <a
                href={list.link}
                className="cursor-pointer hover:border-yellow-500 hover:text-yellow-500 hover:border-b-2"
              >
                {list.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
