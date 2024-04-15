import { FeedNavbar } from "../components/FeedNavbar";
import { HeaderNavbar } from "../components/HeaderNavbar";
import { RoundButton } from "../components/RoundButton";

import buttonImage from "../assets/plus-icon.svg";
import { FeedContent } from "../components/FeedContent";

export const Feed = () => {
  return (
    <div className="w-full h-full p-4">
      <HeaderNavbar title="Лента" />
      <FeedNavbar />
      <FeedContent />
      <RoundButton
        buttonContent={buttonImage}
        buttonOnClick={() => {
          console.log("first");
        }}
      />
    </div>
  );
};
