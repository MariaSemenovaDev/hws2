import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {// by name

            const upSortedUsers = [...state].sort((a, b) => a.name.localeCompare(b.name))
            const downSortedUsers = [...state].sort((a, b) => b.name.localeCompare(a.name))

            return action.payload === 'up'
                ?  upSortedUsers
                :  downSortedUsers
        }


        case 'check': {
            return state.filter(user => user.age >= 18)
        }
        default:
            return state
    }
}
