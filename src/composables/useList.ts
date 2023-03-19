import useStore from 'src/composables/useStore'

const useList = (listId:number) => {
    console.info('useList()', listId);

    const { lists } = useStore()

    console.info('useList().lists', lists);

    const list = lists.find( (list:any) => {
        return list.id === listId
    })

    return list

}

export default useList
