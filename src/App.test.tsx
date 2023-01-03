import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
test("Shows name on website", () => {
    render(<App />);
    const linkElement = screen.getByText(/Maxwell Wang/);
    expect(linkElement).toBeInTheDocument();
});



