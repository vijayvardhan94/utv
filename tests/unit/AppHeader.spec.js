import AppHeader from "@/components/AppHeader";
import { mount } from '@vue/test-utils';

describe("AppHeader", () => {
  test("If user is not logged in do not show logout button", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find("button").isVisible()).toBe(false);
  });

  test("If user is logged in show logout button", async () => {
    const wrapper = mount(AppHeader);
    wrapper.setData({ loggedIn: true });
    //because the assertion happens before it is registered with the dom. So wait,
    //for the dopm updates. This is done via async await.
    await wrapper.vm.$nextTick();
    expect(wrapper.find("button").isVisible()).toBe(true);
  });
});
