import { Notification, SearchNormal1, User } from "iconsax-react";

export default function Header() {
  return (
    <div id="header" className="flex items-center justify-end gap-32 pr-8">
      <div className="relative h-12 w-72">
        <label htmlFor="search" className="invisible">
          Search
        </label>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="absolute w-full h-full left-0 top-0 border border-zinc-300 rounded-full py-3 pl-14 pr-6 placeholder-zinc-400 outline-none focus:border-black hover:border-black transition-all"
        />
        <SearchNormal1
          className="absolute z-10 top-3 left-4"
          color="rgb(113, 113, 122)"
        />
      </div>
      <div className="flex gap-8">
        <Notification size={32} className="cursor-pointer hover:-translate-y-[0.1rem] hover:text-brand transition-all" />
        <User size={32} className="cursor-pointer hover:-translate-y-[0.1rem] hover:text-brand transition-all" />
      </div>
    </div>
  );
}
