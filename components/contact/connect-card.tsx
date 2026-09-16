"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export default function ConnectCard() {
  return (
    <Card className="w-full h-fit max-w-sm overflow-hidden shadow-lg mt-5">
      <CardContent className="p-8 flex flex-col items-center text-center">
        <h2 className="font-heading text-xl tracking-tight lg:text-3xl">
          Let&#39;s connect
        </h2>
        <p className="mt-2 mb-8 font-heading text-lg text-muted-foreground">
          Prefer a quicker route? Reach out directly.
        </p>
        <div className="flex items-center justify-center gap-4">
          {SocialLinks.map((item, ind) => (
            <CustomTooltip icon={item.icon} text={item.username} key={ind}>
              <Link
                href={item.link}
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "h-10 w-10 p-2"
                )}
              >
                <item.icon className="h-5 w-5" />
              </Link>
            </CustomTooltip>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-8 pb-8 pt-0">
        <Link
          href="/resume"
          target="_blank"
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full py-6"
          )}
        >
          View Resume
        </Link>
      </CardFooter>
    </Card>
  );
}
