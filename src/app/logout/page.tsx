import { logout } from "@/lib/logout";

export default function page() {
  return (
    <main className="justify-center h-dvh flex items-center">
      <form action={logout}>
        <button type="submit" className="bg-gray-900 px-5 py-4 rounded-xl cursor-pointer" >
          click the here to logout
        </button>
      </form>
    </main>
  );
}
