import { Search } from "iconoir-react";

export default function HeaderSearch() {
  return (
    <div className="relative h-12 w-72">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        className="border border-zinc-300 rounded-full outline-none focus:border-black hover:border-black transition-all py-3 pl-14 pr-6 placeholder-zinc-400"
      />
      <Search
        height={32} width={32}
        className="absolute z-10 top-2 left-3 text-zinc-400"
      />
    </div>
  );
}
