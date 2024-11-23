import ApplicationLogo from "@/Components/ApplicationLogo";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";

// See storage/app/private for scratch files

export default function LastProject() {
  return (
    <GuestLayout>
      <Head title="FIX Me" />
      <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
        <Link href="/">
          <ApplicationLogo className="h-10 w-12 fill-current text-neutral-500" />
        </Link>
      </header>
      <main>
        <h1 id="previous-project">Previous Project</h1>
        <p>
          I spent 9 years on automations and web interfaces in my last role. For
          7 years, I worked on an interactive web map.
        </p>
        <h2 id="web-map">Web Map</h2>
        <p>
          Having worked on this longer than anyone else, I added or fixed almost
          every feature:
        </p>
        <ul>
          <li>Home page with Login and list of Projects</li>
          <li>
            Each Project has an interactive map for a certain internal group
          </li>
          <li>
            Each map is a <strong>Leaflet</strong> map that
            <ul>
              <li>
                gets map tiles from <strong>GeoServer</strong>
              </li>
              <li>
                gets data from <strong>PostgreSQL</strong>,
                <strong>PostGIS</strong>
              </li>
              <li>
                allows <strong>collaborative editing</strong> of most features
              </li>
              <li>
                provides feature <strong>snapping</strong> options
              </li>
              <li>keyboard shortcuts</li>
              <li>toggles layer groups</li>
              <li>remembers layer selections</li>
              <li>
                has Address Search, and Reverse Geocode (what address is here)
              </li>
              <li>shows Street View</li>
              <li>shows attributes for selected features in a Table</li>
              <li>
                allows <strong>multiple edits</strong> via Table
              </li>
              <li>shows related data and images</li>
              <li>attribute search and filter</li>
              <li>zoom to feature</li>
              <li>encode view extents in URL fragment</li>
              <li>share feature URL</li>
            </ul>
          </li>
          <li>
            Performance improvements with
            <ul>
              <li>caching with Redis</li>
              <li>connection pooling</li>
              <li>load balancing Geoserver instances with nginx</li>
              <li>batching large selections</li>
              <li>improving slow functions</li>
            </ul>
          </li>
          <li>
            Some maps have OSP Fiber management features:
            <ul>
              <li>
                <strong>Splicing UI</strong> for fiber strands
              </li>
              <li>
                <strong>Signal Tracing</strong>
              </li>
              <li>
                <strong>Splice Sheet</strong> exports
              </li>
              <li>Address and Terminal imports</li>
            </ul>
          </li>
          <li>
            An <strong>API</strong> to support
            <ul>
              <li>some map features</li>
              <li>a mobile client</li>
            </ul>
          </li>
          <li>Caching with Redis</li>
          <li>Hosted on Azure with nginx, and docker-compose</li>
        </ul>
      </main>
    </GuestLayout>
  );
}
