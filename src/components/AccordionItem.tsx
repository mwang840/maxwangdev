import React, {useRef, useState} from "react";
import {AcordionData} from "./data/LanguagesType";
import { useEffect } from "react";

export function AccordionItem({data, isOpen, btnOnClick}: {data:AcordionData, isOpen:boolean, btnOnClick: ()=>void}) : JSX.Element{
    const containRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number>(0);

    useEffect(()=>{
        if(isOpen){
            const contentEl = containRef.current as HTMLDivElement;
            setHeight(contentEl?.scrollHeight);
        }
        else{
            setHeight(0);
        }
    });

    return(
        <li className={`accordion-item ${isOpen ? "active" : ""}`}>
            <h2 className="accordion-item-title">
                <button className="accordion-item-btn" onClick={btnOnClick}>{data.title}</button>
            </h2>
            <div className="accordion-item-container" style={{height}}>
                <div className="accordion-item-content">{isOpen && data.content}</div>
            </div>
        </li>
    );
}
