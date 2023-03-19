import useStore from "src/composables/useStore";

import type {
    IVariable,
} from "../types";

const useVariables = () => {

    const { variables, setVariables } = useStore()

    const setVariable = (variableName:string, variableValue:string) => {
        console.info('setVariable()', variableName, variableValue);

        let variableIndex = variables.findIndex( (variable:IVariable) => {
            return variable.name === variableName
        })

        if (variableIndex === undefined) {
            console.error('Variable not found')
            return
        }
        variables[variableIndex].value = variableValue

        setVariables([...variables])
    }

    return {
        variables,
        setVariable
    }

}

export default useVariables
