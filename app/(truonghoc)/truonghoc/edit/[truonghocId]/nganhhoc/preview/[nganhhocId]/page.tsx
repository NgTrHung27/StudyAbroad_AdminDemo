import db from "@/lib/db";
import React from "react";
import Container from "./_components/container";
import { redirect } from "next/navigation";
import ProgramInfo from "./_components/program-info";
import ProgramList from "./_components/program-list";
import GalleryTab from "./_components/gallery-tab";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Gallery from "./_components/gallery";

type Props = {};

const CoSoIdPage = async ({
  params,
}: {
  params: { truonghocId: string; nganhhocId: string };
}) => {
  const program = await db.program.findUnique({
    where: {
      id: params.nganhhocId,
      schoolId: params.truonghocId,
    },
  });

  const otherPrograms = await db.program.findMany({
    where: {
      schoolId: params.truonghocId,
      NOT: {
        id: params.nganhhocId,
      },
    },
  });

  if (!program) {
    return redirect("/truonghoc");
  }

  const images = [
    {
      id: program.Image1,
      url: program.Image1,
    },
    {
      id: program.Image2,
      url: program.Image2,
    },
  ];

  return (
    <div className="bg-white">
      <Container>
        <div className="px-6">
          <Link
            href={`/truonghoc/edit/${params.truonghocId}`}
            className="flex items-center text-sm hover:opacity-75 transition mb-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <Button variant={"link"}>Quay về tùy chỉnh trường học</Button>
          </Link>
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 border shadow-sm p-4">
            {/* Gallery */}
            <Gallery images={images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {/* Info */}
              <ProgramInfo data={program} />
            </div>
          </div>
          <hr className="my-10" />
          <ProgramList title="Ngành học khác" items={otherPrograms} />
        </div>
      </Container>
    </div>
  );
};

export default CoSoIdPage;
