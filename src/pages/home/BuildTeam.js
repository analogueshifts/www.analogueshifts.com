import * as React from "react"
import Data from "./Utilities/BuildTeamData.json"

function BuildTeam() {
  return (
    <section className="bg-gray-200">
      <div className="container mx-auto py-16 px-5 xl:px-28">
        <div className="flex justify-center mb-9">
          <a
            className="text-2xl px-9 py-4 rounded-lg bg-as text-white hover:bg-transparent font-semibold hover:text-as hover:ring-2 ring-as"
            href="https://app.analogueshifts.com/tools/hire"
          >
            Find Top Talents
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Data.BuildTeamData.map(el => (
            <a
              key={el.title}
              href="https://app.analogueshifts.com"
              className="bg-as order border-black rounded p-5 flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-as"
            >
              <div>
                <h2 className="mt-6 text-xl font-semibold text-slate-900">
                  {el.title}
                </h2>

                <p className="mt-4 text-slate-900 text-xs leading-relaxed">
                  {el.datails}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BuildTeam
