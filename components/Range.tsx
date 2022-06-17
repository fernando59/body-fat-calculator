
export const Range = () => {
  return <>

    <h3 className="text-2xl">Tu resultado : 28.8%</h3>
    <input type="range" />

    <div className="inline-flex justify-evenly w-full">
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
