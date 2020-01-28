import { useState, useEffect } from "react";

function useWindowSize() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const hendleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener("resize", hendleResize);

        return () => {
            window.removeEventListener("resize", hendleResize);
        };
    }, []);

    return {
        size
    };
};

export default useWindowSize;