import cls from "classnames";

export const RoundButton = ({
  buttonContent,
  buttonOnClick,
}: {
  buttonContent: string;
  buttonOnClick: () => void;
}) => {
  return (
    <button
      className={cls({
        "w-[46px] h-[46px]": true,
        "rounded-full": true,
        "bg-secondaryBlue": true,
        "flex items-center justify-center": true,
        "absolute bottom-[80px] right-[16px]": true,
      })}
      onClick={buttonOnClick}
    >
      <img className="w-[32px] h-[32px]" src={buttonContent} alt="icon" />
    </button>
  );
};
