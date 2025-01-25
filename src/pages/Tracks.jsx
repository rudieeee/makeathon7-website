import React, { useState, useCallback } from 'react';
import styles from './Tracks.module.css';


const TRACK_BUTTONS = [
  { id: 1, icon: 'Compass', label: 'This is Track 1' },
  { id: 2, icon: 'Search_Magnifying_Glass', label: 'This is Track 2' },
  { id: 3, icon: 'Close_Square', label: 'This is Track 3' },
  { id: 4, icon: 'Swatches_Palette', label: 'This is Track 4' },
  { id: 5, icon: 'Clock', label: 'This is Track 5' },
];

const Tracks = () => {
  const [trackText, setTrackText] = useState("TRACKS");
  const [clickedButton, setClickedButton] = useState(null);
  const [fadeClass, setFadeClass] = useState("fadeIn");

  const handleButtonClick = useCallback((trackNumber) => {
    setFadeClass("fadeOut");
    setTimeout(() => {
      setTrackText(`TRACK ${trackNumber}`);
      setClickedButton(trackNumber);
      setFadeClass("fadeIn");
    }, 500);
  }, []);

  const handleReset = useCallback(() => {
    setFadeClass("fadeOut");
    setTimeout(() => {
      setTrackText("TRACKS");
      setClickedButton(null);
      setFadeClass("fadeIn");
    }, 500);
  }, []);

  return (
    <div className={styles.tracksContainer}>
      <div className={styles.tracks}>
        <h1
          className={`${styles.text} ${styles[fadeClass]}`}
          style={clickedButton !== null ? { top: '284px' } : {}}
        >
          {trackText}
        </h1>
        {clickedButton === null && (
          <>
            <div className={`${styles.line} ${styles[fadeClass]}`}></div>
            <div className={`${styles.box1} ${styles[fadeClass]}`}>
              <div className={styles.removebgPreview}></div>
              <div className={`${styles.text1} ${styles[fadeClass]}`}>
                <p>Greetings Agent!</p>
                <p>Choose Your Mission</p>
              </div>
            </div>
          </>
        )}
        {clickedButton !== null && (
          <div className={`${styles.text3} ${styles[fadeClass]}`}>
            Additional Information for {trackText}
          </div>
        )}
        <div
          className={`${styles.buttonContainer} ${styles[fadeClass]}`}
          style={clickedButton !== null ? { top: '75px' } : {}}
        >
          {TRACK_BUTTONS.map((button) => (
            <button
              key={button.id}
              className={styles[`button${button.id}`]} // Fixed class name interpolation
              aria-label={`Track ${button.id}`} // Corrected aria-label
              onClick={() => handleButtonClick(button.id)}
              data-tooltip={button.label}
            />
          ))}
        </div>
        {clickedButton !== null && (
          <button className={styles.button6} onClick={handleReset} aria-label="Reset"></button>
        )}
      </div>
    </div>
  );
};

export default Tracks;
