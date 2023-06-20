import { useEffect, useRef, useState } from "react";

export default function Demo2() {
    const [date, setDate] = useState(new Date());
    const timerId = useRef(null);

    const tick = () => setDate(new Date())

    useEffect(() => {
        timerId.current = setInterval(tick, 1000);
    })

    return (
        <div>
            <h1>Hello React!</h1>
            <h2>{date.toLocaleTimeString()}</h2>
        </div>
    )
}

