"use client";
import * as React from "react";
import { ThemePanel, Theme, ThemePanelProps } from "@radix-ui/themes";
import { SunIcon, MoonIcon, DesktopIcon } from "@radix-ui/react-icons";

export default function RadixThemePanel(props: ThemePanelProps) {
  return (
    <ThemePanel
      style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50 }}
      {...props}
      options={[
        {
          value: "light",
          label: (
            <span className="flex items-center gap-2">
              <SunIcon /> Light
            </span>
          ),
        },
        {
          value: "dark",
          label: (
            <span className="flex items-center gap-2">
              <MoonIcon /> Dark
            </span>
          ),
        },
        {
          value: "system",
          label: (
            <span className="flex items-center gap-2">
              <DesktopIcon /> System
            </span>
          ),
        },
      ]}
    />
  );
}
