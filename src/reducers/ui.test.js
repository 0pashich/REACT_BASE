import { render, screen } from "@testing-library/react";
import uiReducer from "./ui";
import { setCurrentChat } from '../actions/ui'

describe("UI", () => {


    it('returns correct state after SET_CURRENT_CHAT action', () => {
        const initialState = {
            chat1: {
                id: 'chat1',
                name: 'Чат 1',
            },
        }
        const uiStore = uiReducer(initialState, setCurrentChat(initialState));
        expect(uiStore).toMatchSnapshot();
    });


    // it('matches snapshot online', () => {
    //     const component = render(<Message author="Anton" text="Hello" />)

    //     expect(component).toMatchSnapshot()
    // })

    // it("should contain message text 'Hello'", () => {
    //     render(<Message author="Anton" text="Hello" />)

    //     const wrapper = screen.getByText(/Hello/i)

    //     expect(wrapper).toBeInTheDocument()
})
