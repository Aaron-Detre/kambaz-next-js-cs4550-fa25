import Link from "next/link";

export default async function Zoom({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-zoom">
      <p>
        <Link href="https://piazza.com/" target="_blank">
          Course {cid} Zoom
        </Link>
      </p>
    </div>
  );
}
