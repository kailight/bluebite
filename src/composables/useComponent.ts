import useStore from 'src/composables/useStore'

const useComponent = (componentId:number) => {
    console.info('useComponent()', componentId);

    const { components } = useStore()

    console.info('useComponent().components', components);

    const component = components.find( (component:any) => {
        return component.id === componentId
    })

    return component
}

export default useComponent
