import LoginForm from "@/components/LoginForm";
import { mount } from "@vue/test-utils";

describe("LoginForm", () => {
  it("emits an event with a user payload", () => {
    const wrapper = mount(LoginForm);
    //const input = wrapper.find('input[type="text"]');
    const input = wrapper.find('[data-test-id="name-input"]');

    input.setValue("Adam Jahr");
    wrapper.trigger("submit");
    const formSubittedCalls = wrapper.emitted("formSubmitted");
    expect(formSubittedCalls).toHaveLength(1);
  });
});
