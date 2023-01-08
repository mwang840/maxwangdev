import React from "react";
import { Projects } from "../Projects";
import { render, screen } from "@testing-library/react";
test("Shows Projects on website", () => {
    render(<Projects/>);
    const projElement = screen.getByText(/Projects/);
    expect(projElement).toBeInTheDocument();
});

