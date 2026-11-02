export default function PortfolioFilter({
  filters,
  activeFilter,
  setActiveFilter,
}) {
  return (
    <section className="border-b border-zinc-200">
      <div className="max-w-[1800px] mx-auto">

        <div
          className="
            h-[90px]
            md:h-[110px]
            lg:h-[150px]
            px-5
            sm:px-8
            lg:px-14
            flex
            items-center
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              md:gap-5
              lg:gap-10
              overflow-x-auto
              whitespace-nowrap
              scrollbar-hide
              w-full
            "
          >
            {filters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    shrink-0
                    rounded-full
                    transition-all
                    duration-300
                    px-4
                    md:px-5
                    py-2
                    text-sm
                    sm:text-base
                    lg:text-[20px]

                    ${
                      active
                        ? "border border-zinc-400 text-zinc-700"
                        : "text-zinc-400 hover:text-black"
                    }
                  `}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}