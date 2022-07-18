import Home from "@/pages/index";
import { render, screen, within } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("testing state and county input", () => {
    it("should render", () => {
        render(<Home />);
        expect(getState()).toBeInTheDocument();
        expect(getCounty()).toBeInTheDocument();
        expect(getSubmitBtn()).toBeInTheDocument();
    });
    it("should give required error", async () => {
        render(<Home />);
        user.click(getSubmitBtn());
        expect(countyError()).toHaveTextContent("this field is required");
        expect(stateError()).toHaveTextContent("this field is required");
    });
    it("should give only text error", async () => {
        render(<Home />);
        user.type(getState(), "1234");
        user.type(getCounty(), "@#");
        user.click(getSubmitBtn());
        expect(countyError()).toHaveTextContent("only text is acceptable");
        expect(stateError()).toHaveTextContent("only text is acceptable");
    });
    it("should give maximum error", async () => {
        render(<Home />);
        user.type(getState(), "qwertyuiopasdfg");
        user.type(getCounty(), "kjs");
        user.click(getSubmitBtn());
        expect(countyError()).toHaveTextContent("");
        expect(stateError()).toHaveTextContent(
            "your state must be in 14 charekter long"
        );
    });
});

// functions
const getState = () => {
    return screen.queryByTestId("state");
};

const getCounty = () => {
    return screen.queryByTestId("county");
};
const getSubmitBtn = () => {
    return screen.queryByTestId("submitBtn");
};
const stateError = () => {
    return screen.queryByTestId("stateError");
};
const countyError = () => {
    return screen.queryByTestId("countyError");
};
const randomSpecialChar = () => {
    // example set of special chars as a string in no particular order
    var s = '!"§$%&/()=?\u{20ac}';

    // generating a random index into the string and extracting the character at that position
    return s.substr(Math.floor(s.length * Math.random()), 10);
};
