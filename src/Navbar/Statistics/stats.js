import React, { useEffect, useRef, useState } from 'react';
import './stats.css';

const Stats = () => {
    const statsRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    return (
        <div id="stats" ref={statsRef} className={isVisible ? 'visible' : ''}>
            <div id="title">
                <h1>Statistics</h1>
                <div className="stat-item">
                    <div>Data Structures & Analysis</div>
                    <div className="progress-container">
                        <div className={`progress-bar ${isVisible ? 'dsa' : ''}`}></div>
                    </div>
                </div>
                <div className="stat-item">
                    <div>web Development</div>
                    <div className="progress-container">
                        <div className={`progress-bar ${isVisible ? 'webdev' : ''}`}></div>
                    </div>
                </div>
                <div className="stat-item">
                    <div>Linear Algebra</div>
                    <div className="progress-container">
                        <div className={`progress-bar ${isVisible ? 'linear-algebra' : ''}`}></div>
                    </div>
                </div>
                <div className="stat-item">
                    <div>Data Analysis</div>
                    <div className="progress-container">
                        <div className={`progress-bar ${isVisible ? 'data-analysis' : ''}`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
