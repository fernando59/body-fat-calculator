import { useForm } from "react-hook-form";
import { BFP } from "../interfaces/BFP";
export const FormCalculator = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<BFP>({
        defaultValues:{
            gender:'m'
        }
    });
    const onHandleSubmit = (data: BFP) => {
        const { gender } = data
        let res: number = 0
        if (gender === 'f')
            res = calculateFormFemale(data)
        else
            res = calculateForMale(data)
        console.log({ res })
    }

    const calculateForMale = (data: BFP) => {
        const { waist, neck, height } = data
        return (495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height))) - 450
    }
    const calculateFormFemale = (data: BFP) => {
        const { waist, neck, height, hip } = data
        return (495 / (1.29579 - 0.35004 * Math.log10(hip + waist - neck) + 0.22100 * Math.log10(height))) - 450
    }
    const gender = watch("gender");
    return <>

        <form onSubmit={handleSubmit(onHandleSubmit)} autoComplete='off'>

            <div className="flex flex-col">

                <span className="font-bold">Género </span>
                <div className="flex ">

                    <label className="flex justify-center items-center gap-1">
                        <input type="radio" value='m'  {...register("gender")} /> <span>Hombre</span>
                    </label>
                    <label className="flex justify-center items-center gap-1">
                        <input type="radio" value='f'  {...register("gender")} /> <span>Mujer</span>

                    </label>
                </div>
            </div>
            <label className="flex flex-col"></label>

            <label className="flex flex-col">
                <span className="font-bold">Altura (cm)</span>
                <input {...register("height", { required: true })} />
                {errors.height?.type === "required" && <span className="text-red-500">El campo altura   es requerido</span>}
            </label>
            <label className="flex flex-col">
                <span className="font-bold">Peso (kg)</span>
                <input {...register("weigth", { required: true })} />
                {errors.weigth?.type === "required" && <span className="text-red-500">El campo peso  es requerido</span>}
            </label>
            <label className="flex flex-col">
                <span className="font-bold">Cintura (cm)</span>
                <input {...register("waist", { required: true })} />
                {errors.waist?.type === "required" && <span className="text-red-500">El campo cintura  es requerido</span>}
            </label>
            <label className="flex flex-col">
                <span className="font-bold">Cuello (cm)</span>
                <input {...register("neck", { required: true })} />
                {errors.neck?.type === "required" && <span className="text-red-500">El campo cuello es requerido</span>}
            </label>
            {
                gender == 'f' &&

                <label className="flex flex-col">
                    <span className="font-bold">Cadera (cm)</span>
                    <input {...register("hip", { required: true })} />
                    {errors.hip?.type === "required" && <span className="text-red-500">El campo cadera es requerido</span>}
                </label>
            }
            <button type="submit" className="bg-[#8667F0] text-white px-8 mt-5 py-2 rounded-xl ">Calc</button>
        </form>
    </>
}
