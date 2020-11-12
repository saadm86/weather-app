import { AlertState, AlertAction, SET_ALERT } from "../types/weather.types";

export const INITIAL_STATE: AlertState = {
    message: ''
}

export const alertReducer = (state=INITIAL_STATE, action:AlertAction): AlertState => {
    switch(action.type){
        case SET_ALERT:
            return {
                message: action.payload
            }
        default:
            return state
    }
}