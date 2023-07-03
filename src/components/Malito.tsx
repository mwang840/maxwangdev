import React from "react";

interface Props {
    mailto: string;
    label: string;
}

const Mailto: React.FC<Props> = ({ mailto, label }) => {
    return (
        <a
            href="#"
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </a>
    );
};

export default Mailto;
