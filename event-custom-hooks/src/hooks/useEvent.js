import { useEffect } from "react";

function useEvent(eventName, callback) {
    useEffect(() => {
        window.addEventListener(eventName, callback);

        return () => {
            window.removeEventListener(eventName, callback);
        };
    }, [eventName, callback]);
}

export default useEvent;