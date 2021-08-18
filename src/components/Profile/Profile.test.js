import { render, screen } from "@testing-library/react";
import Profile from "./Profile";
import { Provider } from 'react-redux'

describe("Profile", () => {
    it('matches snapshot online', () => {
        <Provider store={store}>
            const component = render(<Profile />)
        </Provider>
        expect(component).toMatchSnapshot()
    })


})