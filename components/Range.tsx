import { FC, useEffect, useRef, useState } from "react";


import { StepPoint } from './StepPoint';
interface Props {
  resCalc: number
}

export const Range: FC<Props> = ({ resCalc }) => {
  const [state, setState] = useState({
    range: 0,
    value: 0
  })
  const ref = useRef<any>(null);

  const getRange = (e: any) => {
    setState({ ...state, range: e.target.value })
  };
  useEffect(() => {
    let res: number = parseFloat(resCalc.toFixed(2))
    if (res < 0) {
      res = 0
    } else if (res > 25) {
      res = 25
    }
    else if (isNaN(res)) {
      res = 0
    }


    if (ref.current) {
      const max = ref.current.max
      const min = ref.current.min
      let newValue = 0
      if (res < 1) {
        newValue = ((res - min) * 100 / max)
      } else {
        newValue = ((res - min) * 100 / max) - 10

      }
      setState({ ...state, value: newValue, range: res })

    }
  }, [setState, resCalc, ref]);

  return <>

    <h3 className="text-2xl lg:text-3xl font-bold py-14 ">Tu resultado : <span className="transition ease-in-out delay-150 duration-300">{state.range} %</span> </h3>

    {/* RANGE */}
    <div>
      <div className="relative w-full ">
        <label
          className="transition-all  ease-in-out delay-150 duration-300 absolute"
          style={{
            display: "inline-block",
            top: '-45px',
            left: `${state.value}%`,
          }}>
          <span className="text-lg md:text-2xl label-range select-none "> {state.range} %</span>
        </label>
      </div>
      <input
        disabled={true}
        onChange={getRange}
        className='cursor-pointer'
        ref={ref} type="range" min={0} max={25} value={state.range} />
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
