import { UPDATE_ONBOARDING_STATUS } from "../constants";

const initialState = {
    isBoardingDisabled: false,
}

const authReducer = (state = initialState, action) => {
    const { status, type } = action
    switch (type) {
        case UPDATE_ONBOARDING_STATUS:
            return { ...state, isBoardingDisabled: status }

        default:
            return state;
    }
}
export default authReducer