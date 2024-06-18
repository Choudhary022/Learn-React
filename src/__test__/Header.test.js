import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "./../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/store/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should render the Header Component ", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const logInLink=screen.getByRole('link',{name:'login'})

    expect(logInLink).toBeInTheDocument()

})


it("Should ")





