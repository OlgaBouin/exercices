import { openBrowser, goto, text, closeBrowser, click, goBack } from "taiko";
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

test("Test that product page is correctly displayed", async (done) => {
  expect.assertions(3);

  //open application product on port 8081
  await goto("http://localhost:8080");

  //check if name of game "The Legend Of Zelda: Breath of the Wild" is present ont eh page
  const nameTextExists = await text("The Legend Of Zelda: Breath of the Wild").exists();
  expect(nameTextExists).toBe(true);

  //click on "See more" link
  await click("See more");

  //check if text on it includes "Cannot GET"
  const errorTextExists = await text("Cannot GET").exists();
  expect(errorTextExists).toBe(true);

  //go back to previsous page ?
  //??????????????????????????????
  await goBack();

  //click on button "Show screenshots"
  await click("Show screenshot");

  //check that button "X" is present
  const crossCloseWindowExists = await text("X").exists();
  expect(crossCloseWindowExists).toBe(true);

  done();
});
