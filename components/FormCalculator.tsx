import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import NumberFormat from 'react-number-format';
import { toast, ToastContainer } from 'react-toastify';
import { useCalculator } from "../hooks/useCalculator";
import { IBFP, IBFPForm } from "../interfaces/BFP";
interface Props {
    setResCalc: (resCalc: number) => void
}
export const FormCalculator: FC<Props> = ({ setResCalc }) => {

    const { calculateForMale, calculateFormFemale } = useCalculator();

    const { register, handleSubmit, watch, formState: { errors }, reset, control } = useForm<IBFPForm>({
        defaultValues: {
            gender: 'm',
            height: '',
            hip: '',
            neck: '',
            waist: '',
            weigth: ''
        }
    });
    const gender = watch("gender");
    const generateToast = () => {
        toast.error('Los valores generan un resultado incorrecto', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark'
        });
    }


    const onHandleSubmit = (data: IBFPForm) => {
        const { gender, height, hip, neck, waist, weigth } = data
        let res: number = 0

        // Transform values form to interface
        const dataCalcultator: IBFP = {
            height: parseFloat(height),
            hip: parseFloat(hip),
            neck: parseFloat(neck),
            waist: parseFloat(waist),
            weigth: parseFloat(weigth),

        }
        if (gender === 'f')
            res = calculateFormFemale(dataCalcultator)
        else
            res = calculateForMale(dataCalcultator)

        if (res < 0) {
            generateToast()
        }
        setResCalc(res)
    }


    const handleReset = () => {
        reset({
            height: '',
            weigth: '',
            hip: '',
            gender: 'm',
            neck: '',
            waist: ''
        })
        setResCalc(0)
    }



    return <>

        <form onSubmit={handleSubmit(onHandleSubmit)} autoComplete='off' className=" w-full md:w-[85%] ">

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
                <Controller
                    control={control}
                    name="height"
                    rules={{ required: true, min: 0, max: 400 }}
                    render={({ field }
                    ) => (
                        <NumberFormat
                            decimalSeparator="."
                            {...field}
                            displayType="input"
                            type="text"
                            allowNegative={false} />
                    )}
                />
                {errors.height?.type === "required" && <span className="text-red-500">El campo altura   es requerido</span>}
                {errors.height?.type === "min" && <span className="text-red-500">El valor mínimo es de 0 </span>}
                {errors.height?.type === "max" && <span className="text-red-500">El valor máximo es de 400 cm </span>}
            </label>
            <label className="flex flex-col">
                <span className="font-bold">Peso (kg)</span>
                <Controller
                    control={control}
                    name="weigth"
                    rules={{ required: true, min: 0 }}
                    render={({ field }
                    ) => (
                        <NumberFormat
                            decimalSeparator="."
                            {...field}
                            displayType="input"
                            type="text"
                            allowNegative={false} />
                    )}
                />
                {errors.weigth?.type === "required" && <span className="text-red-500">El campo peso  es requerido</span>}
                {errors.weigth?.type === "min" && <span className="text-red-500">El valor mínimo es de 0 </span>}
            </label>
            <label className="flex flex-col">
                <span className="font-bold">Cintura (cm)</span>
                <Controller
                    control={control}
                    name="waist"
                    rules={{ required: true, min: 0 }}
                    render={({ field }
                    ) => (
                        <NumberFormat
                            decimalSeparator="."
                            {...field}
                            displayType="input"
                            type="text"
                            allowNegative={false} />
                    )}
                />
                {errors.waist?.type === "required" && <span className="text-red-500">El campo cintura  es requerido</span>}
                {errors.waist?.type === "min" && <span className="text-red-500">El valor mínimo es de 0 </span>}
            </label>
            {/* <label className="flex flex-col">
                <span className="font-bold">Cuello (cm)</span>
                <Controller
                    control={control}
                    name="neck"
                    rules={{ required: true, min: 0 }}
                    render={({ field }
                    ) => (
                        <NumberFormat
                            decimalSeparator="."
                            {...field}
                            displayType="input"
                            type="text"
                            allowNegative={false} />
                    )}
                />
                {errors.neck?.type === "required" && <span className="text-red-500">El campo cuello es requerido</span>}
                {errors.neck?.type === "min" && <span className="text-red-500">El valor mínimo es de 0 </span>}
            </label> */}

            <label className="flex flex-col">
                <span className="font-bold">Cadera (cm)</span>
                <Controller
                    control={control}
                    name="hip"
                    rules={{ required: true, min: 0 }}
                    render={({ field }
                    ) => (
                        <NumberFormat
                            decimalSeparator="."
                            {...field}
                            displayType="input"
                            type="text"
                            allowNegative={false} />
                    )}
                />
                {errors.hip?.type === "required" && <span className="text-red-500">El campo cadera es requerido</span>}
                {errors.hip?.type === "min" && <span className="text-red-500">El valor mínimo es de 0 </span>}
            </label>
            <button type="submit" className="bg-[#8667F0] text-white px-8 mt-5 py-2 rounded-3xl  font-semibold">Calcular</button>
            <button type="button" onClick={handleReset} className=" text-white px-8 mt-5 py-2 rounded-3xl font-semibold">Limpiar</button>
            <ToastContainer />
        </form>
    </>
}
