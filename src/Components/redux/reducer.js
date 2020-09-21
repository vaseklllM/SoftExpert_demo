import { PLAY_ANIMATION } from "./actions"

const initialState = {
    launge: "eng",
    // laungeService: {},
    pageLoading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LAUNGE-SWITCH":
            return {
                ...state,
                launge: action.launge
            }
        case PLAY_ANIMATION:
            return {
                ...state,
                pageLoading: action.payload
            }
        default:
            return state
    }
}
export default reducer
