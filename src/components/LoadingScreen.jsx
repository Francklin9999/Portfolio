import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

export default function LoadingScreen(props) {
    const { started, setStarted } =  props;
    const { progress, total, loaded, item } = useProgress();

    useEffect(() => {
        if (progress === 100) {
            setTimeout(() => {
                setStarted(true);
            }, 500);
        }
    }, [progress, total, loaded, item]);

    return (
        <div className={`loading-screen ${started ? "loading-fade-out" : "loading-fade-in"}`}>
        <div className="loading-text">
            <div className="loading-progress" style={{ width: `${progress}%` }}>
            Franck Fongang
            </div>
            <div className="loading-overlay">Franck Fongang</div>
        </div>
        </div>
    );
}