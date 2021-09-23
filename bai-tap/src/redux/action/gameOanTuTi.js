import * as ActionType from "../constants/gameOanTuTi";

const actIcon = (item) => {
    return {
        type: ActionType.SELECTION_ICON,
        payload: item,
    };
};

const actGame = () => {
    return {
        type: ActionType.PLAY_GAME,
    };
};

const actResult = () => {
    return {
        type: ActionType.END_GAME,
    };
};

export { actIcon, actGame, actResult };