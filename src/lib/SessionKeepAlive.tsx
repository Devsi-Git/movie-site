"use client";
import { useEffect } from "react";
import { refreshSession } from "./setSession";

export default function SessionKeepAlive() {
  useEffect(() => {
    refreshSession();
    const interval = setInterval(() => {
      refreshSession();
    }, 540000);

    return () => clearInterval(interval);
  }, []);

  return null;
}
