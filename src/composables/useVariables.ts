import useStore from "src/composables/useStore";

import type {
    IVariable,
} from "../types";

const useVariables = () => {

    const store = useStore()
    return store.variables

}

export default useVariables
