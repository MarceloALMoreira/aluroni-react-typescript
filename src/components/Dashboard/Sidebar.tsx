import React, { useEffect, useState } from "react"
import { MdSpaceDashboard } from 'react-icons/md';
import { RiDashboard2Fill } from 'react-icons/ri';
import { FaAddressCard, FaTaxi } from 'react-icons/fa';
import { GiTwirlCenter } from 'react-icons/gi';
import { BsFillChatTextFill } from 'react-icons/bs';
import { IoSettings } from 'react-icons/io5';
import { FiLogOut } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import styles from './Dashboard.module.scss';
import { style } from "@mui/system";




export default function Sidebar() {
    const [currentLink, setCurrentLink] = useState(1)

    return (
        <>
            <div className={styles.section}>
                <div className={styles.section__top}>
                    <div className={styles.section__brand}>
                        <FaTaxi />
                        <span>cliente</span>
                        <hr />
                    </div>
                    <div className={styles.section__toggle}>
                    </div>
                    <div className={styles.section__links}>
                        <ul>
                            <li onClick={() => setCurrentLink(1)}
                                className={currentLink === 1 ? "active" : ""}>
                                <a href="">
                                    <MdSpaceDashboard />
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li onClick={() => setCurrentLink(2)}
                                className={currentLink === 2 ? "active" : ""}>
                                <a href="">
                                    <RiDashboard2Fill />
                                    <span>Riders</span>
                                </a>
                            </li>
                            <li onClick={() => setCurrentLink(3)}
                                className={currentLink === 3 ? "active" : ""}>
                                <a href="">
                                    <FaAddressCard />
                                    <span>Payment Details</span>
                                </a>
                            </li>
                            <li onClick={() => setCurrentLink(4)}
                                className={currentLink === 4 ? "active" : ""}>
                                <a href="">
                                    <GiTwirlCenter />
                                    <span>Learning Center</span>
                                </a>
                            </li>
                            <li onClick={() => setCurrentLink(5)}
                                className={currentLink === 5 ? "active" : ""}>
                                <a href="">
                                    <BsFillChatTextFill />
                                    <span>FAQs</span>
                                </a>
                            </li>
                            <li onClick={() => setCurrentLink(6)}
                                className={currentLink === 6 ? "active" : ""}>
                                <a href="">
                                    <IoSettings />
                                    <span>Settings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="logout">
                    <a href="">
                        <FiLogOut />
                        <span className="logout">Logout</span>
                    </a>
                </div>
            </div>
        </>
    )
}
