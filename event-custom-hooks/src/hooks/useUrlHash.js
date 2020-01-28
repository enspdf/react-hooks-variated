import { useState, useEffect } from "react";

function useUrlHash() {
    const [hash, setHash] = useState(window.document.location.hash);

    useEffect(() => {
        const handleHashChange = () => {
            setHash(window.document.location.hash);
        };

        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    return {
        hash
    };
};

export default useUrlHash;