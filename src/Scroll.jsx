
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scroll = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
    }, [pathname]); // Triggered whenever the pathname changes

    return null;
};

export default Scroll;
