import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { CertificatesCard } from "../CertificatesCard";

interface CertificatesProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Certificates({ range, exclude }: CertificatesProps) {
  let allCertificates = getPosts(["src", "app", "certificates", "certificates"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allCertificates = allCertificates.filter((post) => !exclude.includes(post.slug));
  }

  const sortedCertificates = allCertificates.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedCertificates = range
    ? sortedCertificates.slice(range[0] - 1, range[1] ?? sortedCertificates.length)
    : sortedCertificates;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedCertificates.map((post, index) => (
        <CertificatesCard
          priority={index < 2}
          key={post.slug}
          href={`certificates/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}
