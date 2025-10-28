import React, { useEffect, useState, useMemo } from 'react';
import coldImg from '../assets/cold.png';
import mildImg from '../assets/mild.png';
import sunnyImg from '../assets/sunny.png';

/**
 * Simple weather widget for Halifax using Open-Meteo (no API key).
 * - Fetches current temperature in °C
 * - Chooses icon by °C thresholds:
 *    ≤ 10 -> cold.png
 *    11–19 -> mild.png
 *    ≥ 20 -> sunny.png
 * - Toggle button to show °C or °F
 */
export default function Weather() {
  const [tempC, setTempC] = useState(null);
  const [unit, setUnit] = useState('C'); // 'C' or 'F'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Mexico City coords
  const lat = 19.43;
  const lon = -99.13;

  useEffect(() => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    setLoading(true);
    setError('');
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        const c = data?.current_weather?.temperature;
        if (typeof c !== 'number') throw new Error('No temperature found');
        setTempC(c);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Choose icon based on Celsius thresholds (rubric)
  const icon = useMemo(() => {
    if (tempC === null) return null;
    if (tempC <= 10) return coldImg;
    if (tempC <= 19) return mildImg; // 11–19
    return sunnyImg; // ≥ 20
  }, [tempC]);

  const displayTemp = useMemo(() => {
    if (tempC === null) return '--';
    return unit === 'C' ? Math.round(tempC) : Math.round(tempC * 9/5 + 32);
  }, [tempC, unit]);

  return (
    <div className="weather">
      {loading && <p>Loading weather…</p>}
      {error && <p className="error">Weather error: {error}</p>}
      {!loading && !error && (
        <div className="weather-row">
          {icon && <img src={icon} alt="weather icon" className="weather-icon" />}
          <span className="temp">{displayTemp}°</span>
          <span className="unit">{unit}</span>
          <button className="toggle" onClick={() => setUnit(u => (u === 'C' ? 'F' : 'C'))}>
            Change to °{unit === 'C' ? 'F' : 'C'}
          </button>
        </div>
      )}
    </div>
  );
}
