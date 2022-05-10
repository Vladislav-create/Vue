import TestComponent from "../components/TestComponent.vue";
import { mount } from "../../node_modules/@vue/test-utils";

describe("Test for TestComponentVue", () => {
    test('test props', () => {
        const wrapper = mount(TestComponent, {
            propsData: {
                message: 'Привет Владос'
            }
        })
        expect(wrapper.text()).toContain('The message is: Привет Владос')
    })
})