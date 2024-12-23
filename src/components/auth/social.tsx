"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Icons } from "../icons";
import { Button } from "@nextui-org/react";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "github") => {
    void signIn(provider, {
      callbackUrl: callbackUrl ?? DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="bordered"
        onClick={() => onClick("google")}
      >
        <Icons.google className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="bordered"
        onClick={() => onClick("github")}
      >
        <Icons.github className="h-5 w-5" />
      </Button>
    </div>
  );
};
