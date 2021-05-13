import { openBrowser, goto, text, closeBrowser, click } from "taiko";
import "regenerator-runtime/runtime";

jest.setTimeout(30000);

beforeAll(async () => {
  await openBrowser({
    args: ["--window-size=1440,1000", "--no-sandbox", "--start-maximized", "--disable-dev-shm"],
    headless: false,
    observe: false,
    observeTime: 20000,
  });
});

afterAll(async () => {
  closeBrowser();
});

test("Test that hide button works fine", async (done) => {
  expect.assertions(3);


  await goto("http://localhost:8080");

  // - check that when launching the page, the paragraph "This is my text" is present
  const myTextExists = await text("This is my text").exists();
  expect(myTextExists).toBe(true);

  // - click on the "Hide content" button
  await click("Hide content");

  // - check that the paragraph is no longer there
  const myTextIsGone = await text("This is my text").exists();
  expect(myTextIsGone).toBe(false);

  // - click again on the button
  await click("Reveal content");

  // - check that the paragraph is there again
  const myTextIsBack = await text("This is my text").exists();
  expect(myTextIsBack).toBe(true);

  done();
});
