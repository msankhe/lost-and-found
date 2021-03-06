import * as React from 'react'
import { DashboardContext } from './DashboardContext'
import FoundItemReport from './FoundItemReport'
import ItemListWidget from './ItemListWidget'
import ItemsList from './ItemsList'
import PopupScreen from './PopUpScreen'

interface IDashboardProps {
}

type IDashboardScreen = "" | "report"

const Dashboard: React.FunctionComponent<IDashboardProps> = (props) => {

    let Context = React.useContext(DashboardContext)

    // props 

    // states
    let [screen, setScreen] = React.useState<IDashboardScreen>("")
    let [drivingMode, setDrivingMode] = React.useState<boolean>(true)

    function renderDashboardContent() {
        return (<div className="mda-driver-dashboard">

            <div className="header">
                <div className="logo-cont">
                    <div className="logo"></div>
                </div>
                <div className="title">Experience <span className="dark"> Madinah</span></div>

                <div className="toolbar">
                    <div className="profile">
                        <div className="pic"></div>
                        <div className="name">{Context.profile.user.name}</div>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="item route">
                    <div className="cont">
                        <div className="left">
                            <div className="small">assalamu alaikum</div>
                            <div className="large">Mansoor Bilal</div>
                        </div>
                        <div className="right">
                            <div className="title">
                                <div className="icon-cont">
                                    <div className="icon"></div>
                                </div>
                                <div className="text">your route</div>
                            </div>
                            <div className="route">
                                <div className="from">
                                    <div className="icon-cont">
                                        <div className="icon"></div>
                                    </div>
                                    <div className="label">from</div>
                                    <div className="name">Al-Masjid an-Nabawi</div>
                                    <div className="time">at 12: 45 PM</div>
                                </div>
                                <div className="to">
                                    <div className="icon-cont">
                                        <div className="icon"></div>
                                    </div>

                                    <div className="label">to</div>
                                    <div className="name">Bada'ah</div>
                                    <div className="time">at 12: 45 PM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item alert">
                    <div className="cont">
                        <div className="icon-cont">
                            <div className="icon"></div>
                        </div>
                        <div className="text">Suspicious activity</div>
                    </div>
                </div>
                <div className="item report">
                    <div className="cont">
                        <div className="left">
                            <div className="icon-cont">
                                <div className="icon"></div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="small">assalamu alaikum</div>
                            <div className="large">Report items</div>
                            <button className="btn report" onClick={() => setScreen("report")}>report items found</button>
                        </div>
                    </div>
                </div>
                <div className="item lost-found">
                    <div className="cont">
                        {/* create a widget */}
                        <ItemListWidget />
                    </div>

                </div>
                <div className="item next-stop">
                    <div className="cont">
                        <div className="left">
                            <div className="icon-cont">
                                <div className="icon"></div>
                            </div>
                            <div className="small">next stop</div>
                            <div className="large">Season star hotel</div>
                            <div className="small">at 12:53 PM</div>

                            <button className="btn">on Time</button>
                        </div>

                        <div className="right"></div>
                    </div>
                </div>
                <div className="item violation">
                    <div className="cont">
                        <div className="icon-cont">
                            <div className="icon"></div>
                        </div>
                        <div className="small">covid violation</div>
                        <div className="seat">
                            <div className="large">Seat 23</div>
                            <div className="icon-cont">
                                <div className="icon"></div>
                            </div>
                        </div>
                        <div className="small">Hida mohammad</div>
                        <div className="actions">
                            <button className="btn notify">notify</button>
                            <button className="btn view-all">view all</button>
                        </div>
                    </div>
                </div>
                <div className="item coffee">
                    <div className="cont">
                        <div className="header">
                            <div className="label">TIME</div>
                            <div className="date">12/01/2021</div>
                        </div>
                        <div className="cont">
                            <div className="small">Maghrib</div>
                            <div className="large time">06: 45</div>
                            <div className="medium">time for a coffee break!</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <a href="http://spaceworx.io" target="_blank">powered by spaceworx.io</a>
            </div>

        </div>)
    }

    return (<>
        {screen == "" && renderDashboardContent()}
        <DrivingMode show={drivingMode} onClose={() => setDrivingMode(false)} />
        <FoundItemReport show={screen == "report"} onClose={() => setScreen("")} />
    </>)
}

const DrivingMode: React.FunctionComponent<{ show: boolean, onClose: () => void }> = (props) => {
    return (<PopupScreen show={props.show}>
        <div className="mda-driving-mode-cont">
            <div className="cont">
                <div className="small">vehicle movement detected</div>
                <div className="large">
                    please stop driving <br />
                     while using the tablet
                </div>

                <button className="btn" onClick={props.onClose}>Resume</button>
            </div>
        </div>
    </PopupScreen>)
}

export default Dashboard