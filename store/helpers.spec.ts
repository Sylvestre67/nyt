import { action, IAction } from "./helpers";

const TESTING = "TESTING";

describe("helpers", () => {
  describe("action creator", () => {
    it("should create a valid action", () => {
      type payload = {
        foo: string;
      };
      const tested: IAction<string, payload> = action(TESTING, {
        foo: "testing"
      });
      expect(tested).toEqual({ type: TESTING, payload: { foo: "testing" } });
    });
  });
});
