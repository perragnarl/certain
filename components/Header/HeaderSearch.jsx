import { Search } from "iconoir-react";

export default function HeaderSearch() {
  return (
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
      <Search
        height={32} width={32}
        className="absolute z-10 top-2 left-3 text-zinc-400"
        // color="rgb(113, 113, 122)"
      />
    </div>
  );
}
