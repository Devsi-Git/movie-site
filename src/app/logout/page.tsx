import { logout } from "@/lib/setSession";

export default function page() {
  return (
    <main className="justify-center h-dvh flex max-[426px]:text-sm items-center">
      <form action={logout}>
        <button
          type="submit"
          className="bg-gray-900 px-5 py-4 rounded-xl cursor-pointer"
        >
          click the here to logout
        </button>
      </form>
    </main>
  );
}
