import "ol/ol.css";
import Anchor from "@/Components/Anchor";
import LegendPolySvg from "@/Components/LegendPolySvg";
import { type PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Map, View } from "ol";
import { type FeatureLike } from "ol/Feature";
import GeoJSON from "ol/format/GeoJSON";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { transform } from "ol/proj";
import { OSM } from "ol/source";
import VectorSource from "ol/source/Vector";
import { Circle as CircleStyle, Fill, Stroke, Style, Text } from "ol/style.js";
import { useEffect, useRef } from "react";
import GuestLayout from "../Layouts/GuestLayout";

interface TimeZoneProps {
  tzid: string;
  no_dst: boolean;
  tz_abbrev: string;
  tz_offset_m: number;
}

export default function WebMap({ tzUrl }: PageProps & { tzUrl: string }) {
  const mapRef = useRef<HTMLDivElement>(null);
  let map: Map;

  useEffect(() => {
    let ignore = false;

    const tileLayer = new TileLayer({
      source: new OSM(),
    });
    const mapView = new View({
      center: transform([-97.0, 42.0], "EPSG:4326", "EPSG:3857"),
      zoom: 4,
    });
    map = new Map({
      target: mapRef.current ?? undefined,
      layers: [tileLayer],
      view: mapView,
    });

    tzBoundaryNeLayer(tzUrl)
      .then((layer) => {
        // console.log("add layer", layer);
        map.addLayer(layer);
      })
      .catch((e: unknown) => {
        console.log("make layer error:", e);
      });

    return () => {
      map.setTarget(undefined);
      ignore = true;
    };
  }, []);

  return (
    <GuestLayout>
      <Head title="Demo Map" />
      <div className="flex flex-col">
        <h2 className="pb-4 text-2xl font-bold">Map Demo</h2>
        <div
          ref={mapRef}
          className="relative mx-0 min-h-[30rem] max-w-[80ch] flex-grow bg-slate-900 lg:mx-6"
        >
          <div className="absolute bottom-0 left-0 z-20 bg-slate-700">
            <div className="flex flex-col p-2">
              <h6 className="font-bold">Time Zones</h6>
              <div className="my-2 flex align-middle">
                <LegendPolySvg className="mr-2 w-6" fill="hsl(50, 50%, 70%)" />
                <span>With DST</span>
              </div>
              <div className="my-2 flex align-middle">
                <LegendPolySvg className="mr-2 w-6" fill="hsl(50, 0%, 70%)" />
                <span>Without DST</span>
              </div>
            </div>
          </div>
        </div>

        <div className="prose mt-4">
          <h3>Time Zones</h3>
          <p>
            These timezone boundaries are derived from{" "}
            <Anchor href="https://github.com/evansiroky/timezone-boundary-builder">
              this source
            </Anchor>
            , which are accurate, provide standard TZ names, and include{" "}
            <abbr title="Daylight Savings Time">DST</abbr> boundaries. They
            unfortunately lack other attribution, and the file size and geometry
            detail are excessive for this demo.
          </p>
          <figure className="p-1 outline outline-1 outline-neutral-800">
            <img
              src="/storage/demo/screen_tz_poly_az.png"
              alt="TZ polygon screenshot of Arizona"
            />
            <figcaption>DST Boundaries can be surprising</figcaption>
          </figure>
          <p>
            First, the geometry can be simplified and then reprojected for Web
            Mercator. In QGIS, the Field Calculator can use snippets of Python,
            so I added a couple of fields for labeling. This does increase file
            size, but it&apos;s nice to have these values easily available. The
            provided names are standard, like &quot;America/Los_Angeles&quot;,
            and the Python snippet recognized every name.
          </p>
          <p>
            Finally, I can trim the geometry around North America, then reduce
            coordinate precision for a much better file size.
          </p>
          <p>
            Other timezone boundaries are available from{" "}
            <Anchor href="https://www.naturalearthdata.com/downloads/10m-cultural-vectors/timezones/">
              Natural Earth
            </Anchor>
            . These don&apos;t include the Arizona DST boundaries, but the
            geometries would look nice for a time zone picker UI.
          </p>
          <figure className="p-1 outline outline-1 outline-neutral-800">
            <img
              src="/storage/demo/screen-ne-tz-bndy-world.png"
              alt="TZ polygon screenshot using Near Earth source"
            />
            <figcaption>
              The Near Earth boundaries look clean but lack some detail
            </figcaption>
          </figure>
        </div>
      </div>
    </GuestLayout>
  );
}
// TODO:
// If world, is "no_dst" correct in Asia?
// Show py function, which is in doc/geo/.
// Consider vector tiles, but that needs Geoserver, styles, labels, DB, docker-compose, ...

async function tzBoundaryNeLayer(dataUrl: string) {
  const data = await fetch(dataUrl);
  const geojson: unknown = await data.json();

  const vecSource = new VectorSource({
    features: new GeoJSON().readFeatures(geojson),
  });

  return new VectorLayer({
    source: vecSource,
    style: tzStyle,
  });
}

function tzStyle(feature: FeatureLike) {
  const geomType = feature.getGeometry()?.getType() ?? "";

  const dot = new CircleStyle({
    radius: 3,
    fill: new Fill({ color: "hsl(0, 60%, 50%)" }),
    stroke: new Stroke({ color: "hsl(0, 60%, 15%)", width: 1 }),
  });

  if (geomType.endsWith("Polygon")) {
    const featProps = feature.getProperties() as TimeZoneProps;
    const sat = featProps.no_dst ? "0%" : "60%";
    const offsetHr = (featProps.tz_offset_m / 60).toFixed(2);

    return new Style({
      fill: new Fill({
        color: `hsl(50, ${sat}, 60%, 0.33 )`,
      }),
      stroke: new Stroke({ color: "hsl(20, 10%, 10%)", width: 2 }),
      text: new Text({
        text: `${featProps.tz_abbrev}\n${offsetHr}`,
        textAlign: "center",
        overflow: false,
      }),
    });
  }
  console.log("other geom type", geomType);
  return new Style({ image: dot });
}

// Note: Geom Extents in ol are expressed as // [minX, minY, maxX, maxY]
