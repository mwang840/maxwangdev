import React from "react";
//import {Link} from "react-router-dom";
import styles from "./ViewNavbarModule.css";
import data from "./links.json";
const linkToString = JSON.stringify(data);
const links = JSON.parse(linkToString).links;

type Link = {
  label: string;
  href: string;
};

const Links: React.FC<{links: Link[]}> = ({links})=>{
    return(
        <div className={styles["links-container"]}>
            {links.map((link: Link)=>{
                return(
                    <div key={link.href} className={styles["link"]}>
                        <a href={link.href}>
                            {link.label}
                        </a>
                    </div>
                );
            })}
        </div>);
};


// eslint-disable-next-line @typescript-eslint/ban-types
export const ViewNavbar: React.FC<{}> = () => {
    return (
        <nav className={styles.navbar}>
            <Links links={links}/>
        </nav> 
    );
};
