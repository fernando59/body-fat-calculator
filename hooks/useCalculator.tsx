import { IBFP } from "../interfaces/BFP";



export const useCalculator = () => {


    const anthropometricIndex = (data: IBFP) => {
        const { weigth, waist, neck, height } = data
        return (height / Math.pow(weigth * waist * neck, 1 / 3)) * 10;

    }

    const calculateForMale = (data: IBFP) => {
        const { weigth, waist, neck, height } = data
        // return (495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height))) - 450
        return anthropometricIndex(data) * -3.30 + 90.41
    }
    const calculateFormFemale = (data: IBFP) => {
        const { waist, neck, height, hip } = data
        // return (495 / (1.29579 - 0.35004 * Math.log10(hip + waist - neck) + 0.22100 * Math.log10(height))) - 450
        return anthropometricIndex(data) * -3.06 + 100.67
    }

    return {
        calculateForMale,
        calculateFormFemale,
        anthropometricIndex
    }
}