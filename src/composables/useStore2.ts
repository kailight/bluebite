import { createStore, useStore, getItem, setItem } from "src/store";

let storeInitialized = false

const store = () => {

    if (!storeInitialized) {
        createStore({
            variables:  [],
            lists:      [],
            components: []
        })
        storeInitialized = true
    }

    const [variables,   setVariables]   = useStore('variables')
    const [lists,       setLists]       = useStore('lists')
    const [components,  setComponents]  = useStore('components')

    return {
        variables,
        components,
        lists,
        setVariables,
        setComponents,
        setLists,
    }

}

export default store
