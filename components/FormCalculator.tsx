import { FC } from "react";
import { useForm } from "react-hook-form";
import { BFP } from "../interfaces/BFP";

interface Props {
    setResCalc: (resCalc: number) => void
}
export const FormCalculator: FC<Props> = ({ setResCalc }) => {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<BFP>({
        defaultValues: {
            gender: 'm'
        }
    });
    const onHandleSubmit = (data: BFP) => {
        const { gender } = data
        let res: number = 0
        if (gender === 'f') {
            res = calculateFormFemale(data)
            setResCalc(res)
        }
        else {
            res = calculateForMale(data)
            setResCalc(res)
        }
    }

    const indiceAntropometrico =(data:BFP)=>{
        const { weigth,waist, neck, height } = data
        return (height/Math.pow(weigth*waist*neck,1/3))*10 ;

    }

    const calculateForMale = (data: BFP) => {
        const { weigth,waist, neck, height } = data
        // first try
        // return (495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height))) - 450
        return indiceAntropometrico(data)*-3.30+90.41
    }
    const calculateFormFemale = (data: BFP) => {
        const { waist, neck, height, hip } = data
        // return (495 / (1.29579 - 0.35004 * Math.log10(hip + waist - neck) + 0.22100 * Math.log10(height))) - 450
        return indiceAntropometrico(data)*-3.06+100.67
    }
    const handleReset = () => {
        reset()
        setResCalc(0)
    }
    const gender = watch("gender");
    return <>

        <form onSubmit={handleSubmit(onHandleSubmit)} autoComplete='off' className="w-[85%] ">

            <div className="flex flex-col">

                <span className="font-bold">Género </span>
                <div className="flex gap-4 ">

                    <label className="flex justify-center items-center gap-1">
                        <input className="accent-[#8667F0]" type="radio" value='m'  {...register("gender")} /> <span>Hombre</span>
                    </label>
                    <label className="flex justify-center items-center gap-1">
                        <input className="accent-[#8667F0]" type="radio" value='f'  {...register("gender")} /> <span>Mujer</span>

                    </label>
                </div>
            </div>
            <label className="flex flex-col"></label>

            <label className="flex flex-col">
                <span className="font-bold">Altura (cm)</span>
                <input {...register("height", { required: true, min: 0 })} />
                {errors.height?.type === "required" && <span className="text-red-500">El campo altura   es requerido</span>}
                {errors.height?.type === "min" && <span className="text-red-500">El valor mínimo es de 0 </span>}
            </label>
            <label className="flex flex-col">
                <span className="font-bold">Peso (kg)</span>
                <input  {...register("weigth", { required: true, min: 0 })} />
                {errors.weigth?.type === "required" && <span className="text-red-500">El campo peso  es requerido</span>}
                {errors.weigth?.type === "min" && <span className="text-red-500">El valor mínimo es de 0 </span>}
            </label>
            <label className="flex flex-col">
                <span className="font-bold">Cintura (cm)</span>
                <input {...register("waist", { required: true, min: 0 })} />
                {errors.waist?.type === "required" && <span className="text-red-500">El campo cintura  es requerido</span>}
                {errors.waist?.type === "min" && <span className="text-red-500">El valor mínimo es de 0 </span>}
            </label>
            <label className="flex flex-col">
                <span className="font-bold">Cuello (cm)</span>
                <input {...register("neck", { required: true, min: 0 })} />
                {errors.neck?.type === "required" && <span className="text-red-500">El campo cuello es requerido</span>}
                {errors.neck?.type === "min" && <span className="text-red-500">El valor mínimo es de 0 </span>}
            </label>
            {
                gender == 'f' &&

                <label className="flex flex-col">
                    <span className="font-bold">Cadera (cm)</span>
                    <input {...register("hip", { required: true, min: 0 })} />
                    {errors.hip?.type === "required" && <span className="text-red-500">El campo cadera es requerido</span>}
                    {errors.hip?.type === "min" && <span className="text-red-500">El valor mínimo es de 0 </span>}
                </label>
            }
            <button type="submit" className="bg-[#8667F0] text-white px-8 mt-5 py-2 rounded-xl ">Calcular</button>
            <button type="button" onClick={handleReset} className=" text-white px-8 mt-5 py-2 rounded-xl ">Limpiar</button>
        </form>
    </>
}
