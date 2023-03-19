interface IList {
    id: any
    components: any
}

interface IVariable {
    name        : string // "show weather"
    type        : string // "string"
    initialValue: string // "show"|"hide"
    value       : string
}

interface IComponent {
    id          : number
    type        : string
    options     : any
    children   ?: any
}

interface IData {
    lists       : Array<IList>
    variables   ?: Array<IVariable>
    components  : Array<IComponent>
}

interface IComponentList {
    id          : number
    components  : Array<IComponentListItem>
}

interface IComponentTree extends Array<IComponentList> {}

interface IComponentListItem {
    type        : 'image'|'weather'|'button'|'condition'
    options     : any
    children    ?: any
}

export type {
    IComponentTree,
    IComponentList,
    IComponentListItem,
    IList,
    IVariable,
    IComponent,
    IData
}
