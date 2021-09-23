import React, { Component } from 'react'
import './style.css'
import { connect } from "react-redux";
import { actIcon } from "../redux/action/gameOanTuTi";

class Player extends Component {
    render() {
        const { listIcon, selectedIcon, getIcon } = this.props;

        const selectedItem = listIcon.find(item => item.id === selectedIcon);

        return (
            <div className="text-center playerGame mt-5">
                <div className="icon">
                    {selectedItem && <img
                        className="mt-3"
                        style={{ width: 150, height: 150, transform: "rotate(90deg)" }}
                        src={selectedItem.hinhAnh}
                        alt={selectedItem.hinhAnh}
                    />}
                </div>
                <div className="speech-bubble"></div>
                <img
                    style={{ width: 200, height: 200 }}
                    src="./img/gameOanTuTi/player.png"
                    alt="./img/gameOanTuTi/player.png"
                />
                <div className="row">
                    {listIcon.map((item) => {
                        return (
                            <div className="col-4" key={item.id}>
                                <button
                                    className={`btnItem ${item.id === selectedIcon ? "active" : ""
                                        }`}
                                    onClick={() => {
                                        getIcon(item);
                                    }}
                                >
                                    <img
                                        style={{ width: 50, height: 50 }}
                                        src={item.hinhAnh}
                                        alt={item.hinhAnh}
                                    />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        listIcon: state.oantutiReducer.listIcon,
        selectedIcon: state.oantutiReducer.selectedIcon,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getIcon: (item) => {
            dispatch(actIcon(item));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player)
