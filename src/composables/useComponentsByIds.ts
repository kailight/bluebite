import useStore from 'src/composables/useStore'

const useComponentsByIds = (componentIds:Array<number>) => {
    console.info('getComponentsByIds()', componentIds);

    const { components } = useStore()

    const filteredComponents = components.filter( (component:any) => {
        return componentIds.includes(component.id)
    })

    return filteredComponents
}

export default useComponentsByIds
