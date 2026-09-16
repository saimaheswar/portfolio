import { Metadata } from "next";
import Image from "next/image";

import { AnimatedSection } from "@/components/common/animated-section";
import PageContainer from "@/components/common/page-container";
import { aboutConfig } from "@/config/about";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import profileImg from "@/public/profile-img.jpg";

export const metadata: Metadata = {
  title: pagesConfig.about.metadata.title,
  description: pagesConfig.about.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <PageContainer
      title={pagesConfig.about.title}
      description={pagesConfig.about.description}
    >
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <AnimatedSection
          direction="up"
          className="w-full lg:w-1/3 flex justify-center lg:sticky lg:top-24"
        >
          <Image
            src={profileImg}
            width={280}
            height={280}
            sizes="100vw"
            className="rounded-xl border border-border object-cover w-full max-w-[280px] h-auto"
            alt={siteConfig.authorName}
            priority
          />
        </AnimatedSection>

        <div className="w-full lg:w-2/3 space-y-10">
          <AnimatedSection direction="up" delay={0.1} className="space-y-4">
            {aboutConfig.paragraphs.map((p, i) => (
              <p
                key={i}
                className="leading-relaxed text-muted-foreground sm:text-lg"
              >
                {p}
              </p>
            ))}
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="font-heading text-2xl mb-4">What I Focus On</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {aboutConfig.focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-lg border border-border bg-background p-4 sm:p-6"
                >
                  <h3 className="font-bold mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageContainer>
  );
}
