import React from "react"
import { create, act } from "react-test-renderer"
import ProfHead from "./ProfHead"
import { ProfileStatus } from "./ProfHeadFuncComponent"

describe("Profile Header component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfHead status={"testing status"} />)

        const instance = component.getInstance()

        expect(instance.state.inputValue).toBe("testing status")
    })

    test("after creation <span> should be displayed", () => {
        let component

        act(() => {
            component = create(
                <ProfileStatus isMyProfile={true} status={"testing status"} />
            )
        })
        const root = component.root

        const span = root.findByType("span")

        expect(span).not.toBeUndefined()
    })

    test("after creation <input> shouldn't be displayed", () => {
        let component

        act(() => {
            component = create(
                <ProfileStatus isMyProfile={true} status={"testing status"} />
            )
        })
        const root = component.root

        expect(() => root.findByType("input")).toThrow()
    })

    test("after creation <span> should be contains correct status", () => {
        let component

        act(() => {
            component = create(
                <ProfileStatus isMyProfile={true} status={"testing status"} />
            )
        })
        const root = component.root

        const span = root.findByType("span")

        expect(span.children[0]).toBe("testing status")
    })

    test("input should be displayed in editMode instead of span", () => {
        let component

        act(() => {
            component = create(
                <ProfileStatus isMyProfile={true} status={"testing status"} />
            )
        })

        const root = component.root

        const div = root.findByType("div")

        act(() => div.props.onDoubleClick())

        const input = root.findByType("input")

        expect(input.props.value).toBe("testing status")
    })

    test("callback should be called", () => {
        let component
        const mockCallback = jest.fn() // позволяет имитировать и отслеживать функцию

        act(() => {
            component = create(
                <ProfileStatus
                    updateUserStatus={mockCallback}
                    isMyProfile={true}
                    status={"testing status"}
                />
            )
        })
    })
})
