import React from "react";
import { AboutMe } from "../AboutMe";
import { render, screen } from "@testing-library/react";
test("Shows name on website", () => {
    render(<AboutMe/>);
    const linkElement = screen.getByText(/About Me/);
    expect(linkElement).toBeInTheDocument();
});

test("My picture is there", ()=>{
    render(<AboutMe/>);
    const mw = screen.getByRole("img");
    expect(mw).toHaveAttribute("src", "MaxWang.jpg");
    expect(mw).toHaveAttribute("alt", "Maxwell Wang");
});

test("User should see what I like to do besides computer science", ()=>{
    render(<AboutMe/>);
    const brief = screen.getByText(/Greetings, my name is Maxwell Wang and I am a junior year Computer Science Bachelors of Science student concentrating in Artificial Intelligence at the University of Delaware/);
    expect(brief).toBeInTheDocument();
});