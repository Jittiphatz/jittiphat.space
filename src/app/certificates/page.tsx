import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, certificates } from "@/resources";
import { Certificates } from "@/components/certificates/Certificates";
import LenisComponent from "@/resources/LenisComponent";

export async function generateMetadata() {
  return Meta.generate({
    title: certificates.title,
    description: certificates.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(certificates.title)}`,
    path: certificates.path,
  });
}

export default function CertificatesPage() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <LenisComponent />
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={certificates.path}
        title={certificates.title}
        description={certificates.description}
        image={`/api/og/generate?title=${encodeURIComponent(certificates.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {certificates.title}
      </Heading>
      <Certificates />
    </Column>
  );
}
