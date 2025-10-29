import React from "react";
import Accordion from "../components/Accordion";

const faqs = [
    {question: "", answer: ""},
];

export default function FAQ() {
    return(
        <section className="faq container">
            <h1>Često postavljena pitanja</h1>
            <div>
                {faqs.map((f,i) => (
                    <Accordion key={i} question={f.question} answer={f.answer} />
                ))}
            </div>
        </section>
    )
}