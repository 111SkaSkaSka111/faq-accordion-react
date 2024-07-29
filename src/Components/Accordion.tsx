import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";

interface AccordionProps {
    show: boolean;
    onClick: () => void;
    content: string;
    title: string;
    accId: string;
}

const Accordion: React.FC<AccordionProps> = ({ show, onClick, content, title, accId }) => {
    return (
        <div id={accId} onClick={onClick} className={`${show ? "open" : ""} border-b-2 group border-light-pink py-3 h-fit cursor-pointer`}>
            <div className="flex items-center justify-between gap-5">
                <p className="font-semibold text-dark-purple hover:text-purple-700">{title}</p>
                <img src={show ? minus : plus} alt="" className="w-5 h-5" />
            </div>
            <div id="accordion-container" className={`cursor-default`}>
                <p className={`mt-3 text-grayish-purple text-sm px-3`}>{content}</p>
            </div>
        </div>
    );
};

export default Accordion;
