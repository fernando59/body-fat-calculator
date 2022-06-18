import { FC, useEffect, useRef, useState } from "react";

interface Props {
  resCalc: number
}

export const Range: FC<Props> = ({ resCalc }) => {
  const [range, setRange] = useState<number>(0)
  const [step, setStep] = useState(0);
  const ref = useRef<any>(null);
  // const ref = useRef(null)  as MutableRefObject<HTMLDivElement>;
  // const ref = useRef<HTMLHeadingElement>(document.createElement("div"));

  const getRange = (e: any) => {
    setRange(e.target.value);
  };
  useEffect(() => {
    let res: number = parseFloat(resCalc.toFixed(2))
    if (res < 0) {
      setRange(0)
    } else if (res > 25) {
      setRange(25)
    }
    else {
      setRange(res)
    }
    const rangeLinePadding = 16
    if (ref.current) {
      const offsetWidth = ref.current.offsetWidth
      console.log({ offsetWidth })
      const max  = ref.current.max
      console.log({max})
      const calcStep = (ref.current.offsetWidth - rangeLinePadding) / ref.current.max;
      console.log({ calcStep })
      setStep(calcStep);
    }
  }, [setRange, resCalc]);

  return <>

    <h3 className="text-2xl">Tu resultado : {range} %</h3>
    <div>
      <label
        htmlFor="range"
        className="transition  ease-in-out delay-150 duration-300"
        style={{
          display: "inline-block",
          transform: `translateX(${range * step}px)`,
        }}>
        <span className="text-2xl label-range select-none "> {range} %</span>
      </label>
      <input
        disabled={true}
        onChange={getRange}
        className='cursor-pointer'
        ref={ref} type="range" min={0} max={25} value={range} />
    </div>

    <div className="inline-flex justify-around w-full">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="bg-[#009FE3] rounded-md w-4 h-4"> </div>
        <span>2-4%</span>
        <span>Esencial</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="bg-[#009C3D] rounded-md w-4 h-4"> </div>
        <span>6-13%</span>
        <span>Deportista</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="bg-[#98C21D] rounded-md w-4 h-4"> </div>
        <span>14-17%</span>
        <span>Fitness</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="bg-[#FECA00] rounded-md w-4 h-4"> </div>
        <span>18-25%</span>
        <span>Aceptable</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="bg-red-400 rounded-md w-4 h-4"> </div>
        <span>25% +</span>
        <span>Obeso</span>
      </div>
    </div>
  </>
}
