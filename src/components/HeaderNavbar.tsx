export const HeaderNavbar = ({ title }: { title: string }): JSX.Element => {
  return (
    <div className="w-full h-[50px] bg-dark flex items-center justify-start text-white text-xl">
      {title}
    </div>
  );
};
