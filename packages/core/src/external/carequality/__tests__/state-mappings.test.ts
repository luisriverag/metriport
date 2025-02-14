import { USState } from "@metriport/shared";
import { STATE_MAPPINGS } from "../shared";

describe("State Mappings Validation", () => {
  it("should have an entry for every USState", () => {
    const allStates = Object.values(USState);
    const mappedStates = new Set(Object.values(STATE_MAPPINGS));

    allStates.forEach(state => {
      expect(mappedStates.has(state)).toBeTruthy();
    });
  });
});
