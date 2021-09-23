import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
    render() {
        const { ketQua, soBanThang, soLuotChoi, soBanThua } = this.props;
        return (
            <div>
                <div className="display-4 text-warning mt-5">{ketQua}</div>
                <div className="display-4 text-success">
                    Số bàn thắng :<span className="text-warning">{soBanThang}</span>
                </div>
                <div className="display-4 text-success">
                    Số bàn thua :<span className="text-warning">{soBanThua}</span>
                </div>
                <div className="display-4 text-warning">
                    Tổng số bàn chơi :<span className="text-warning">{soLuotChoi}</span>
                </div>
            </div>
        );
    } s
}

const mapStateToProps = (state) => {
    return {
        ketQua: state.oantutiReducer.ketQua,
        soBanThang: state.oantutiReducer.soBanThang,
        soBanThua: state.oantutiReducer.soBanThua,
        soLuotChoi: state.oantutiReducer.soLuotChoi,
    };
};

export default connect(mapStateToProps, null)(Result);
