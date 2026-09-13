"use client";

import { useEffect, useState } from "react";

const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const HOLD_MS = 1400;

export function TypedRoles({ roles }: { roles: string[] }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">(
    "typing"
  );

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          TYPE_SPEED
        );
      } else {
        timeout = setTimeout(() => setPhase("holding"), HOLD_MS);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("deleting"), HOLD_MS);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          DELETE_SPEED
        );
      } else {
        setPhase("typing");
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, roleIndex, roles]);

  return (
    <span aria-hidden="true" className="inline-flex items-baseline">
      <span className="bg-signal-gradient bg-clip-text text-transparent">
        {text}
      </span>
      <span className="ml-0.5 h-[1em] w-[2px] animate-blink bg-signal-cyan" />
    </span>
  );
}
