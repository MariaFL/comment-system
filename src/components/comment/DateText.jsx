import React, {useState, useEffect} from "react";

const DateText = ({date}) => {
    const commentDate = new Date(date);
    const [dateNow, setDateNow] = useState(new Date());
    const [dateDiff, setDateDiff] = useState(0);
    const getDate = () => setDateNow(new Date());
    useEffect(() => {
        const timerID = setInterval(getDate, 60000);
        return () => {clearInterval(timerID)};    
    }, []);

    useEffect(() => {
        setDateDiff((dateNow - commentDate) / 60000);
    }, [dateNow, commentDate]);

    

    return (dateDiff/60 <= 1) ? Math.floor(dateDiff) + ' мин. назад' : (dateDiff/(60 * 24) <= 1) ? Math.floor(dateDiff/60) + 'ч. назад' : Math.floor(dateDiff/(60 * 24)) + 'дн. назад';
}

export default DateText;