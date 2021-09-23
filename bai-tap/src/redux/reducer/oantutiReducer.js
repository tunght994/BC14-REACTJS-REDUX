import * as ActionType from "../constants/gameOanTuTi";

const initialState = {
    listIcon: [
        {
            id: "keo",
            hinhAnh: "./img/gameOanTuTi/keo.png",
        },
        {
            id: "bua",
            hinhAnh: "./img/gameOanTuTi/bua.png",
        },
        {
            id: "bao",
            hinhAnh: "./img/gameOanTuTi/bao.png",
        },
    ],
    selectedIcon: undefined,
    ketQua: "",
    soBanThang: 0,
    soBanThua: 0,
    soLuotChoi: 0,
    computer: {
        id: "keo",
        hinhAnh: "./img/gameOanTuTi/keo.png",
    },
};

const oantutiReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SELECTION_ICON: {
            return {
                ...state,
                selectedIcon: action.payload.id,
            };
        }

        case ActionType.PLAY_GAME: {
            const index = Math.floor(Math.random() * 3);
            const ranDom = state.listIcon[index];
            return {
                ...state,
                computer: ranDom,
            };
        }

        case ActionType.END_GAME: {
            let selectedItem = state.listIcon.find(
                (item) => item.id === state.selectedIcon
            );

            let computer = state.computer;
            if (selectedItem.id === computer.id) {
                state.ketQua = "Hòa nha ";
            } else {
                switch (selectedItem.id) {
                    case "keo":
                        if (computer.id === "bao") {
                            state.soBanThang = state.soBanThang + 1;
                            state.ketQua = "Yeahhhh...Thắng rồi !!!";
                        } else {
                            state.soBanThua = state.soBanThua + 1;
                            state.ketQua = "Buồn quá thua rồi !!!";
                        }
                        break;

                    case "bua":
                        if (computer.id === "keo") {
                            state.soBanThang = state.soBanThang + 1;
                            state.ketQua = "Yeahhhh...Thắng rồi !!!";
                        } else {
                            state.soBanThua = state.soBanThua + 1;
                            state.ketQua = "Buồn quá thua rồi !!!";
                        }
                        break;

                    case "bao":
                        if (computer.id === "bua") {
                            state.soBanThang = state.soBanThang + 1;
                            state.ketQua = "Yeahhhh...Thắng rồi !!!";
                        } else {
                            state.soBanThua = state.soBanThua + 1;
                            state.ketQua = "Buồn quá thua rồi !!!";
                        }
                        break;

                    default:
                        state.soBanThang = state.soBanThang + 1;
                        state.ketQua = "Yeahhhh...Thắng rồi !!!";
                }
            }
            state.soLuotChoi = state.soLuotChoi + 1;
            return { ...state };
        }
        default:
            return { ...state };
    }
};

export default oantutiReducer;