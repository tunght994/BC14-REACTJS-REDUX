import React, { Component } from "react";
import './style.css';

import BookingInfo from "./Info";
import danhSachGhe from "../data/danhSachGhe.json";
import BookingTicket from "./Ticket";

const soGhe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default class BaiTapBookingMovie extends Component {
    render() {
        return (
            <div className="showInfo">
                <div className="showItem">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8 text-center">
                                <div className="mt-3 text-light display-4">
                                    ĐẶT VÉ XEM FILM CYBERLEARN.VN
                                </div>
                                <div className="mt-3 text-light " style={{ fontSize: "50px" }}>
                                    Màn hình
                                </div>
                                <div
                                    className="mt-2"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        width: "900px",
                                    }}
                                >
                                    <div className="screen"></div>
                                    <div className="text-light text-left mt-2 col-container">
                                        {soGhe.map((item, index) => (
                                            <button className="rowNumber" key={index}>
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                    {danhSachGhe.map((item, index) => (
                                        <BookingTicket
                                            lineNumber={item}
                                            key={index}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="mt-3 text-light display-4 text-center">
                                    DANH SÁCH GHẾ BẠN CHỌN
                                </div>
                                <BookingInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
