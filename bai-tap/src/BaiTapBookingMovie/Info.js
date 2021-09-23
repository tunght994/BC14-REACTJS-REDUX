import React, { Component } from "react";
import { connect } from "react-redux";
import { actCancel } from "../redux/action/bookingMovie";

class BookingInfo extends Component {
    render() {
        return (
            <div>
                <div className="mt-5">
                    <button className="gheDuocChon"></button>
                    <span className="text-light" style={{ fontSize: "25px" }}>
                        {" "}
                        Ghế đã đặt
                    </span>
                    <br />
                    <button className="gheDangChon"></button>
                    <span className="text-light" style={{ fontSize: "25px" }}>
                        {" "}
                        Ghế đang đặt
                    </span>
                    <br />
                    <button className="ghe ml-1"></button>
                    <span className="text-light" style={{ fontSize: "25px" }}>
                        {" "}
                        Ghế chưa đặt
                    </span>
                </div>
                <div className="mt-5">
                    <table className="table" border="2">
                        <thead>
                            <tr className="text-light" style={{ fontSize: "30px" }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody className="text-warning" style={{ fontSize: "20px" }}>
                            {this.props.bookingList.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.soGhe}</td>
                                        <td>{item.gia.toLocaleString()}</td>
                                        <td>
                                            <button
                                                onClick={() => {
                                                    this.props.cancelBooking(item.soGhe);
                                                }}
                                            >
                                                Hủy
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        <tfoot>
                            <tr className="text-warning" style={{ fontSize: "25px" }}>
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>{this.props.bookingList.reduce((tongTien, gheDangDat) => {
                                    return tongTien += gheDangDat.gia
                                }, 0).toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
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
        cancelBooking: (soGhe) => {
            dispatch(actCancel(soGhe));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingInfo);
