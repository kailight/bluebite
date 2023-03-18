import { create as createStore } from 'zustand'

import type {
    IVariable,
    IList,
    IComponent
} from 'src/types'

const useStore = createStore((set) => ({
    variables: [],
    lists: [],
    components: [],
    setVariables:  (variables:Array<IVariable>)   => set({ variables }),
    setLists:      (lists:Array<IList>)           => set({ lists }),
    setComponents: (components:Array<IComponent>) => set({ components }),
}))

export default useStore
