import cls from "classnames";

export const FeedNavbar = () => {
  return (
    <ul
      className={cls({
        "w-full h-[32px]": true,
        "bg-secondaryDark": true,
        "flex items-center justify-start": true,
        "text-white": true,
        "rounded-full": true,
      })}
    >
      <li
        className={cls({
          "w-full h-full flex items-center justify-center rounded-full": true,
          "bg-secondaryBlue": true,
        })}
      >
        Мир
      </li>
      <li className="w-full h-full flex items-center justify-center rounded-full">
        Команда
      </li>
      <li className="w-full h-full flex items-center justify-center rounded-full">
        Товарищи
      </li>
    </ul>
  );
};
