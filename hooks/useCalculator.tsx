import { IBFP } from "../interfaces/BFP";



export const useCalculator = () => {


    const anthropometricIndex = (data: IBFP) => {
        const { weigth, waist,  height,hip } = data
        return (height / Math.pow(weigth * waist * hip, 1 / 3)) * 10;

    }

    const calculateForMale = (data: IBFP) => {
        return anthropometricIndex(data) * -3.30 + 90.41
    }
    const calculateFormFemale = (data: IBFP) => {
        return anthropometricIndex(data) * -3.06 + 100.67
    }

    return {
        calculateForMale,
        calculateFormFemale,
        anthropometricIndex
    }
}