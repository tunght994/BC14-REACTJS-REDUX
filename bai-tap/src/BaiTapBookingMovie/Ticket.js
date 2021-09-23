import React, { Component } from "react";
import { connect } from "react-redux";
import { actBooking } from "../redux/action/bookingMovie";

class BookingTicket extends Component {
    InfoTicket = () => {
        return this.props.lineNumber.danhSachGhe.map((item, index) => {
            let gheDuocChon = "";
            let disabled = false;
            if (item.daDat) {
                gheDuocChon = "gheDuocChon";
                disabled = true;
            }

            let gheDangChon = "";
            let indexgheDangDat = this.props.bookingList.findIndex(
                (gheDangDat) => gheDangDat.soGhe === item.soGhe
            );
            if (indexgheDangDat !== -1) {
                gheDangChon = "gheDangChon";
            }

            return (
                <button
                    onClick={() => {
                        this.props.bookingTicket(item);
                    }}
                    disabled={disabled}
                    className={`ghe ${gheDuocChon} ${gheDangChon}`}
                    key={index}
                >
                    {item.soGhe}
                </button>
            );
        });
    };

    render() {
        return (
            <div className="text-light text-left mt-2 lineBooking">
                <div className="row-name">{this.props.lineNumber.hang}</div>
                <div className="seat-container">{this.InfoTicket()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bookingList: state.BookingMovieReducer.bookingList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        bookingTicket: (item) => {
            dispatch(actBooking(item));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingTicket);
