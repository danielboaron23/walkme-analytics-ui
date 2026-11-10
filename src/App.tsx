import { useState } from "react";
import { AppShell } from "@/layout/AppShell";
import { SystemsOverview } from "@/screens/SystemsOverview";
import { SystemView } from "@/screens/SystemView";

type Screen = { name: "systems" } | { name: "system"; system: string };

export default function App() {
  const [screen, setScreen] = useState<Screen>({ name: "systems" });

  return (
    <AppShell showSearch={screen.name === "systems"}>
      {screen.name === "systems" ? (
        <SystemsOverview
          onSelectSystem={(system) => setScreen({ name: "system", system })}
        />
      ) : (
        <SystemView
          system={screen.system}
          onBackToSystems={() => setScreen({ name: "systems" })}
        />
      )}
    </AppShell>
  );
}
