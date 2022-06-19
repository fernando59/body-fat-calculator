import { IBFP } from "../interfaces/BFP";



export const useCalculator = () => {


    const anthropometricIndex = (data: IBFP) => {
        const { weigth, waist, neck, height } = data
        return (height / Math.pow(weigth * waist * neck, 1 / 3)) * 10;

    }

    const calculateForMale = (data: IBFP) => {
        const { weigth, waist, neck, height } = data
        let coefficientHeight = Math.log10(height)
        let coefficientWaistNeck = Math.log10(waist-neck)
        let dominator = (1.0324-0.19077*coefficientWaistNeck+0.15456*coefficientHeight)
        return (495/dominator-450)
    }
    const calculateFormFemale = (data: IBFP) => {
        const { waist, neck, height, hip,weigth } = data
        let coefficientWaistNeck = Math.log10(waist+neck+hip)
        let coefficientHeight = Math.log10(height)
        let dominator = (1.29579-0.35004*coefficientWaistNeck+0.22100*coefficientHeight)
        return (495/dominator-450)
    }

    return {
        calculateForMale,
        calculateFormFemale,
        anthropometricIndex
    }
}