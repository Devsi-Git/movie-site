import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";

export default async function page() {
  const isLoged = await getUser();
  if (!isLoged) {
    redirect("/loginORsignup");
  }
  return <p>hi</p>;
}
