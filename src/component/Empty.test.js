import React from "react";
import { render } from "@testing-library/react";

import { Empty } from "./Empty";

test("renders", () => {
  const { container } = render(<Empty message="TEST" />);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="Empty"
    >
      <img
        alt=" "
        class="Empty__Image"
        src="empty.svg"
      />
      TEST
    </div>
  `);
});
