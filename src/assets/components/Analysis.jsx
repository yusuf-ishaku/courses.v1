import { PiChartLineUpLight } from "react-icons/pi"

export const Analysis = ({head, tally, tag}) =>{
    return (
      <div className="flex flex-row mx-2 rounded-xl shadow-lg bg-white w-80 p-2 h-24">
        <div className="flex-col flex justify-around">
            <h3 className="uppercase text-gray-700">
                {head}
            </h3>
            <span className="font-semibold">
                {tally}
            </span>
            <div className="bg-red-300 flex  flex-row items-center text-red-600 text-[0.65rem] w-fit rounded px-2">
                <PiChartLineUpLight>

                </PiChartLineUpLight>
                <span>
                {tag}
                </span>
            </div>
        </div>
        <div>

        </div>
      </div>
    )
}