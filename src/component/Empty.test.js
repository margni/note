import React from "react";
import { render } from "@testing-library/react";

import { Empty } from "./Empty";

test("renders", () => {
  const { container } = render(<Empty message="TEST" />);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="host"
    >
      <img
        alt=" "
        class="image"
        src="empty.svg"
      />
      TEST
    </div>
  `);
});
