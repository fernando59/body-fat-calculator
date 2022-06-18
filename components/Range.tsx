import { FC, useEffect, useRef, useState } from "react";
import { StepPoint } from './StepPoint';
interface Props {
  resCalc: number
}

export const Range: FC<Props> = ({ resCalc }) => {
  const [range, setRange] = useState<number>(0)
  const [step, setStep] = useState(0);
  const ref = useRef<any>(null);

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
      const max = ref.current.max
      console.log({ max })
      const calcStep = (ref.current.offsetWidth - rangeLinePadding) / ref.current.max;
      console.log({ calcStep })
      setStep(calcStep);
    }
  }, [setRange, resCalc]);

  return <>

    <h3 className="text-2xl lg:text-3xl font-bold py-14 ">Tu resultado : <span className="transition ease-in-out delay-150 duration-300">{range} %</span> </h3>

    {/* RANGE */}
    <div>
      <label
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

    {/* POINTS */}

    <div className="inline-flex pt-5 justify-around w-full pb-10">
      <StepPoint color="bg-[#009FE3]" title="Esencial" range="2-4%" />
      <StepPoint color="bg-[#009C3D]" title="Deportista" range="6-13%" />
      <StepPoint color="bg-[#98C21D]" title="Fitness" range="14-17%" />
      <StepPoint color="bg-[#FECA00]" title="Aceptable" range="18-25%" />
      <StepPoint color="bg-red-400" title="Obeso" range="25% +" />


    </div>
  </>
}
