import { useForm } from "react-hook-form";
export const FormCalculator = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onHandleSubmit = (data: any) => {
        console.log(data)
    }

    const calculateForMale=()=>{

    }
    const calculateFormFemale =()=>{
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
                gender =='f' &&

                <label className="flex flex-col">
                    <span className="font-bold">Cadera (cm)</span>
                    <input {...register("hip", { required: true })} />
                    {errors.hip?.type === "required" && <span className="text-red-500">El campo cadera es requerido</span>}
                </label>
            }
            <button type="submit" className="bg-[#8667F0] text-white px-5 py-2 rounded-md">Calc</button>
        </form>
    </>
}
