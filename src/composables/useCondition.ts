import {
    IVariable
} from "../types";


import useVariables from "./useVariables";


interface Condition {
    name: string
    value: string
}

const useCondition = (condition:Condition) => {
    console.info('useCondition()', condition);

    const variables = useVariables()

    const variable = variables.find( (variable:IVariable) => {
        return condition.name === variable.name
    })

    console.info('useCondition().variable', variable);

    if (condition.value === variable.value) {
        return true
    }

}

export default useCondition
