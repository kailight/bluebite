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

    const { variables } = useVariables()

    const variable = variables.find( (variable:IVariable) => {
        return condition.name === variable.name
    })

    if (!variable) {
        return false
    }

    console.info('useCondition().variable', variable);
    console.info('useCondition() comparison', condition.value, variable.value);

    if (condition.value === variable.value) {
        return true
    }

    return false

}

export default useCondition
