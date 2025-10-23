import React, { useState } from "react";
import "./Accordion.css";

export default function Accordion({question, answer}) {
    const [open, setOpen] = useState(false);

    return(
        <div className="accordion-item">
            <button type="button" className="accordion-title" onClick={()=> setOpen(!open)}>
                <span>{question}</span>
                <span>{open ? "-" : "+"}</span>
            </button>
            {open && <div className="accordion-content">{answer}</div>}
        </div>
    )
}