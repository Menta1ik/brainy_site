export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Studio needs full viewport without the site <main> wrapper.
  // The root layout renders SiteMain which skips <main> for /studio paths.
  return <>{children}</>;
}

export const dynamic = "force-dynamic";
