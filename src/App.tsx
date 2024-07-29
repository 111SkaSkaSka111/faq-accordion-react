import Accordion from "./Components/Accordion";
import bg from "./assets/images/background-pattern-desktop.svg";
import star from "./assets/images/icon-star.svg";
import { useState } from "react";

const App = () => {
    const [show, setShow] = useState<string | null>("accordion-one");

    const showAcc = (id: string) => {
        setShow(show === id ? null : id);
    };

    return (
        <div className="min-h-svh relative bg-light-pink flex md:py-10 p-5 justify-center items-center z-[1]">
            <div className="absolute left-0 top-0 w-full z-[-1]">
                <img src={bg} alt="" className="w-full min-h-56 max-h-56 object-cover" />
            </div>
            <div className="bg-white p-5 rounded-xl max-w-[550px] shadow-[0_0px_30px_0_rgb(0,0,0,0.2)]">
                <div className="flex items-center gap-3">
                    <img src={star} alt="" className="w-8 h-8" />
                    <h1 className="text-5xl font-bold font-work-sans">FAQs</h1>
                </div>
                <div className="mt-5 font-work-sans">
                    <Accordion
                        show={show === "accordion-one"}
                        onClick={() => showAcc("accordion-one")}
                        content="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio
                                building."
                        title="What is Frontend Mentor, and how will it help me?"
                        accId="accordion-one"
                    />
                    <Accordion
                        show={show === "accordion-two"}
                        onClick={() => showAcc("accordion-two")}
                        content="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
                        title="Is Frontend Mentor free?"
                        accId="accordion-two"
                    />
                    <Accordion
                        show={show === "accordion-three"}
                        onClick={() => showAcc("accordion-three")}
                        content="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
                        title="Can I use Frontend Mentor projects in my portfolio?"
                        accId="accordion-three"
                    />
                    <Accordion
                        show={show === "accordion-four"}
                        onClick={() => showAcc("accordion-four")}
                        content="Of course! You can use the premium challenges to build your portfolio. You can also use the premium projects to showcase your skills to potential employers."
                        title="Can I use Frontend Mentor projects in my portfolio?"
                        accId="accordion-four"
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
