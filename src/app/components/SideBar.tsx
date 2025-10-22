import { getUser } from "@/lib/getUser";
import { GoHeart, GoHome, GoSignIn, GoSignOut } from "react-icons/go";
import SideBarBtn from "./SideBarBtn";

export default async function Aside() {
  const isLoged = await getUser();

  return (
    <aside className="z-20 fixed flex flex-col justify-center gap-8.5 p-4 w-fit min-h-dvh">
      <SideBarBtn route="/">
        <GoHome />
      </SideBarBtn>

      <SideBarBtn route="/dashboard">
        <GoHeart />
      </SideBarBtn>

      <SideBarBtn route={isLoged ? "/logout" : "/loginORsignup"}>
        {isLoged ? <GoSignOut /> : <GoSignIn />}
      </SideBarBtn>
    </aside>
  );
}
