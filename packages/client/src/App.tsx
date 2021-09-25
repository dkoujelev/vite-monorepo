import React from "react";
import { Button } from "@workspace/ui";
import { getNiceMessage } from "@workspace/util";

function App() {
  return (
    <div>
      <Button text={getNiceMessage()} />
    </div>
  );
}

export default App;
