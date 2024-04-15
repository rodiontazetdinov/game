import { Link, useLocation } from "react-router-dom";
import cls from "classnames";

import feedIcon from "../assets/feed-icon.svg";
import feedIconActive from "../assets/feed-icon-active.svg";
import teamIconActive from "../assets/team-icon-active.svg";
import questIconActive from "../assets/quest-icon-active.svg";
import profileIconActive from "../assets/profile-icon-active.svg";
import teamIcon from "../assets/team-icon.svg";
import questIcon from "../assets/quest-icon.svg";
import profileIcon from "../assets/profile-icon.svg";

const FooterNavbar = () => {
  const location = useLocation().pathname;
  const isFeed = location === "/feed";
  const isTeam = location === "/team";
  const isQuest = location === "/quests";
  const isProfile = location === "/profile";
  return (
    <nav
      className={cls({
        "fixed bottom-0 left-0 right-0 px-8 py-2 w-full h-[60px]": true,
        "flex flex-row justify-between items-center": true,
        "rounded-t-xl": true,
        "bg-secondaryDark": true,
      })}
    >
      <Link className="flex flex-col items-center space-y-1" to="/feed">
        <img src={isFeed ? feedIconActive : feedIcon} alt="иконка ленты" />
        <p
          className={cls({
            "text-s": true,
            "text-secondaryBlue": isFeed,
            "text-white": !isFeed,
          })}
        >
          Лента
        </p>
      </Link>
      <Link className="flex flex-col items-center space-y-1" to="/team">
        <img src={isTeam ? teamIconActive : teamIcon} alt="иконка команд" />
        <p
          className={cls({
            "text-s": true,
            "text-secondaryBlue": isTeam,
            "text-white": !isTeam,
          })}
        >
          Команда
        </p>
      </Link>
      <Link className="flex flex-col items-center space-y-1" to="/quests">
        <img src={isQuest ? questIconActive : questIcon} alt="иконка квест" />
        <p
          className={cls({
            "text-s": true,
            "text-secondaryBlue": isQuest,
            "text-white": !isQuest,
          })}
        >
          Квесты
        </p>
      </Link>
      <Link className="flex flex-col items-center space-y-1" to="/profile">
        <img
          src={isProfile ? profileIconActive : profileIcon}
          alt="иконка профиль"
        />
        <p
          className={cls({
            "text-s": true,
            "text-secondaryBlue": isProfile,
            "text-white": !isProfile,
          })}
        >
          Профиль
        </p>
      </Link>
    </nav>
  );
};

export default FooterNavbar;
