import Link from "next/link";

export default async function Piazza({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-piazza">
      <p>
        <Link href="https://piazza.com/" target="_blank">
          Course {cid} Piazza
        </Link>
      </p>
    </div>
  );
}
