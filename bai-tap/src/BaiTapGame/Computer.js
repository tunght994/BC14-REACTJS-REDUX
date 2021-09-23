import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {

    render() {
        const { computer } = this.props
        return (
            <div className="text-center playerGame mt-5">
                <div className="icon">
                    <img className="mt-3 showIconItem" key={computer.hinhAnh}
                        src={computer.hinhAnh}
                        alt={computer.hinhAnh}
                    />
                </div>
                <div className="speech-bubble"></div>
                <img className="iconComputer"
                    src="./img/gameOanTuTi/playerComputer.png"
                    alt=""
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.oantutiReducer.computer
    }
}


export default connect(mapStateToProps, null)(Computer);
