import * as ActionType from "../constants/bookingMovie"
const initialState = {
    bookingList: [],
};

const BookingMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.BOOKING_TICKET: {
            let bookingListUpdate = [...state.bookingList];
            let index = bookingListUpdate.findIndex(
                (gheDangDat) => gheDangDat.soGhe === action.payload.soGhe
            );

            if (index !== -1) {
                bookingListUpdate.splice(index, 1);
            } else {
                bookingListUpdate.push(action.payload);
            }

            return {
                ...state,
                bookingList: bookingListUpdate,
            };
        }

        case ActionType.CANCEL_ACTION: {
            let bookingListUpdate = [...state.bookingList];
            let index = bookingListUpdate.findIndex(
                (gheDangDat) => gheDangDat.soGhe === action.payload
            );

            if (index !== -1) {
                bookingListUpdate.splice(index, 1);
            }
            return {
                ...state,
                bookingList: bookingListUpdate,
            }
        }

        default:
            return { ...state };
    }
};

export default BookingMovieReducer;
