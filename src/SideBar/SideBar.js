import {useState, useRef, useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';

import './SideBar.css';

export const SideBar = ({isOpen = false, overlay = true, className = '', onClose, children}) => {
    const overlayRef = useRef(null);
    const sidebarRef = useRef(null);
    const [openNav, setOpenNav] = useState(isOpen);

    useEffect(() => {
        setOpenNav(isOpen);
    }, [isOpen]);

    const handleCloseNav = () => {
        setOpenNav(false);
        if (onClose) {
            onClose();
        }
    }

    return (
        <>
            <CSSTransition
                in={openNav && overlay}
                nodeRef={overlayRef}
                timeout={500}
                classNames="mobile-nav-overlay"
                unmountOnExit
            >
                <div ref={overlayRef}
                     className="mobile-nav-overlay"
                     onClick={handleCloseNav}
                ></div>
            </CSSTransition>
            <CSSTransition
                in={openNav}
                nodeRef={sidebarRef}
                timeout={500}
                classNames="mobile-nav"
                unmountOnExit
                // onEnter={() => setShowButton(false)}
                // onExited={() => setShowButton(true)}
            >
                <aside className={`mobile-nav ${className}`} ref={sidebarRef}>
                    {children}
                </aside>
            </CSSTransition>
        </>
    )
}
