import { Metadata } from "next";
import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import ChipContainer from "@/components/ui/chip-container";
import { education } from "@/config/education";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.education.metadata.title,
  description: pagesConfig.education.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/education`,
  },
};

// Helper function to extract year from date
const getYear = (date: Date): string => new Date(date).getFullYear().toString();

const getDurationText = (startDate: Date, endDate: Date | "Present"): string => {
  const startYear = getYear(startDate);
  const endYear = typeof endDate === "string" ? "Present" : getYear(endDate);
  return `${startYear} - ${endYear}`;
};

export default function EducationPage() {
  return (
    <PageContainer
      title={pagesConfig.education.title}
      description={pagesConfig.education.description}
    >
      <div className="space-y-8">
        {education.map((edu, index) => (
          <AnimatedSection key={edu.id} delay={0.1 * (index + 1)} direction="up">
            <div className="w-full p-4 sm:p-6 bg-background border border-border rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-foreground">
                    {edu.degree}
                  </h2>
                  <p className="text-sm font-medium text-muted-foreground mt-1">
                    {edu.school} · {edu.location}
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-primary/10 text-primary border border-primary/20 w-fit">
                  {getDurationText(edu.startDate, edu.endDate)}
                </span>
              </div>

              {edu.description && (
                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              )}

              {edu.courses && edu.courses.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                    Relevant Coursework
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {edu.projects && edu.projects.length > 0 && (
                <div className="mt-6 space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    School Projects
                  </h3>
                  {edu.projects.map((project) => (
                    <div
                      key={project.title}
                      className="rounded-lg border border-border bg-muted/40 p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-bold text-foreground">
                          {project.title}
                        </h4>
                        {project.githubLink && (
                          <Link
                            href={project.githubLink}
                            target="_blank"
                            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                          >
                            <Icons.gitHub className="w-5 h-5" />
                          </Link>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="mt-3">
                        <ChipContainer textArr={project.techStack} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </PageContainer>
  );
}
