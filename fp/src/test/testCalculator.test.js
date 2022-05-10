import HelloWorld from '../components/HelloWorld.vue'
import { mount } from '@vue/test-utils'

describe('Test Calculator', () => {
    test('test first operand', () => {
        const wrapper = mount(HelloWorld)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')
        expect(wrapper.vm.operand1).toBe(1)
    });

    test('test second operand', () => {
        const wrapper = mount(HelloWorld)
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')
        expect(wrapper.vm.operand2).toBe(2)
    });

    test('test method sum', () => {
        const wrapper = mount(HelloWorld)
        const operand1 = wrapper.find('input[name = operand1]')
        operand1.element.value = '1'
        operand1.trigger("input")

        const operand2 = wrapper.find('input[name = operand2]')
        operand2.setValue('4')

        const btn = wrapper.find('button[name = "+"]')
        btn.trigger("click")

        expect(wrapper.vm.result).toBe(5)
    });

    test('test method sub', () => {
        const wrapper = mount(HelloWorld)
        const operand1 = wrapper.find('input[name = operand1]')
        operand1.element.value = '5'
        operand1.trigger("input")

        const operand2 = wrapper.find('input[name = operand2]')
        operand2.setValue('1')

        const btn = wrapper.find('button[name = "-"]')
        btn.trigger("click")

        expect(wrapper.vm.result).toBe(4)
    });

    test('test method multiply', () => {
        const wrapper = mount(HelloWorld)
        const operand1 = wrapper.find('input[name = operand1]')
        operand1.element.value = '5'
        operand1.trigger("input")

        const operand2 = wrapper.find('input[name = operand2]')
        operand2.setValue('2')

        const btn = wrapper.find('button[name = "*"]')
        btn.trigger("click")

        expect(wrapper.vm.result).toBe(10)
    });

    test('test method divide', () => {
        const wrapper = mount(HelloWorld)
        const operand1 = wrapper.find('input[name = operand1]')
        operand1.element.value = '6'
        operand1.trigger("input")

        const operand2 = wrapper.find('input[name = operand2]')
        operand2.setValue('3')

        const btn = wrapper.find('button[name = "/"]')
        btn.trigger("click")

        expect(wrapper.vm.result).toBe(2)
    });

    test('test method degree', () => {
        const wrapper = mount(HelloWorld)
        const operand1 = wrapper.find('input[name = operand1]')
        operand1.element.value = '2'
        operand1.trigger("input")

        const operand2 = wrapper.find('input[name = operand2]')
        operand2.setValue('3')

        const btn = wrapper.find('button[name = "**"]')
        btn.trigger("click")

        expect(wrapper.vm.result).toBe(8)
    });

    test('test method integer', () => {
        const wrapper = mount(HelloWorld)
        const operand1 = wrapper.find('input[name = operand1]')
        operand1.element.value = '4'
        operand1.trigger("input")

        const operand2 = wrapper.find('input[name = operand2]')
        operand2.setValue('2')

        const btn = wrapper.find('button[name = "//"]')
        btn.trigger("click")

        expect(wrapper.vm.result).toBe(2)
    });

    test('test method slice', () => {
        const wrapper = mount(HelloWorld)
        const operand1 = wrapper.find('input[name = operand1]')
        operand1.element.value = '41'
        operand1.trigger("input")

        const btn = wrapper.find('button[name = "slice"]')
        btn.trigger("click")

        expect(wrapper.vm.operand1).toBe(4)
    });

    test('test click on btn', () => {
        
        const wrapper = mount(HelloWorld)

        const btn = wrapper.find('button[name = "0"]')
        btn.trigger("click")

        
        const operand1 = wrapper.find('input[name = operand1]')

        expect(wrapper.vm.operand1).toBe(0)
    });

});
