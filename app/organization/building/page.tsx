import Link from "next/link";
import { Box, ChevronLeft, FileStack } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import {
  CadGridViz,
  FileStack3DViz,
  IsometricRoomViz,
  Map3DViz,
  SkyscraperBuildingViz,
} from "@/components/viz";

const rooms = [
  { floor: 12, name: "Simulation lab", id: "room-lab", files: ["run-042.glb", "scene.json"] },
  { floor: 8, name: "Product war room", id: "room-product", files: ["roadmap.pdf"] },
  { floor: 8, name: "Finance", id: "room-finance", files: ["model.xlsx"] },
  { floor: 4, name: "Archive", id: "room-archive", files: ["cad-assets.zip"] },
];

export default function OrganizationBuildingPage() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-10">
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/organization"
          className="glass-btn inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-gray-600"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={1.75} />
          Dashboard
        </Link>
      </div>
      <PageHeader
        icon={Box}
        title="Building & rooms"
        subtitle="Skyscraper metaphor: divisions as floors, rooms for files and sessions. Open a room to attach assets — GLB, CAD, and documents."
        subtitleClassName="max-w-2xl"
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <article className="glass-kpi relative overflow-hidden rounded-[1.75rem] p-6">
          <h2 className="mb-4 text-sm font-semibold text-gray-900">
            Tower overview
          </h2>
          <SkyscraperBuildingViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.75rem] p-6">
          <h2 className="mb-4 text-sm font-semibold text-gray-900">
            Isometric map
          </h2>
          <Map3DViz />
        </article>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <article className="glass-kpi rounded-[1.5rem] p-5">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Room shell
          </p>
          <IsometricRoomViz />
        </article>
        <article className="glass-kpi rounded-[1.5rem] p-5">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            CAD shell
          </p>
          <CadGridViz />
        </article>
      </div>

      <section
        id="files"
        className="glass-panel scroll-mt-28 space-y-4 rounded-[1.75rem] p-6 sm:p-8"
      >
        <div className="flex flex-wrap items-center gap-3">
          <FileStack className="h-5 w-5 text-[var(--app-primary)]" strokeWidth={1.75} />
          <h2 className="text-lg font-semibold text-gray-900">3D files & assets</h2>
        </div>
        <p className="text-sm text-gray-600">
          Placeholder for GLB/USDZ/STEP — stack below matches the simulation UI system.
        </p>
        <div className="max-w-md">
          <FileStack3DViz />
        </div>
      </section>

      <div id="rooms" className="scroll-mt-28 space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Rooms</h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {rooms.map((room) => (
            <li
              key={room.id}
              id={room.id}
              className="glass-nav-pill-active scroll-mt-28 rounded-[1.25rem] p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                Floor {room.floor}
              </p>
              <h3 className="mt-1 text-base font-semibold text-gray-900">
                {room.name}
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
                {room.files.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 rounded-lg bg-white/35 px-3 py-2 ring-1 ring-white/40"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--app-primary)]/60" />
                    {f}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
