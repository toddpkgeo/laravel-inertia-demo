import "ol/ol.css";
import { Head } from "@inertiajs/react";
import { type PageProps } from "@/types";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { Map, View } from "ol";
import GeoJSON from "ol/format/GeoJSON";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style.js";
import { useEffect, useRef } from "react";
import { transform } from "ol/proj";
import Anchor from "@/Components/Anchor";
import GuestLayout from "../Layouts/GuestLayout";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { type FeatureLike } from "ol/Feature";

// move to new file?

export default function WebMap({ tzUrl }: PageProps & { tzUrl: string }) {
  const mapRef = useRef<HTMLDivElement>(null);
  let map: Map;

  useEffect(() => {
    let ignore = false;

    const tileLayer = new TileLayer({
      source: new OSM(),
    });
    const mapView = new View({
      center: transform([-100.2, 37.8], "EPSG:4326", "EPSG:3857"),
      zoom: 4,
    });
    map = new Map({
      target: mapRef.current ?? undefined,
      layers: [tileLayer],
      view: mapView,
    });

    tzBoundaryNeLayer(tzUrl)
      .then((layer) => {
        // console.log(layer);
        map.addLayer(layer);
      })
      .catch((e: unknown) => {
        console.log("make layer error:", e);
      });
    // Could I get and filter this from backend?
    //   fetch(tzUrl)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log("debug", ignore, data);
    //       // todo: load layer, but it's 6MB
    //     })
    //     .catch((e: unknown) => {
    //       console.log("fetch error:", e);
    //     });

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
          className="mx-0 min-h-[30rem] max-w-[80rem] flex-grow bg-slate-900 lg:mx-6"
        ></div>
        <div className="prose mt-4">
          <aside className="ml-6 italic">
            The polygons are not yet uploaded. The next step is to either (1)
            tile the vectors with a map server or (2) stream the polygons a few
            features at a time.
          </aside>
          {/* NOTE: Remove this aside after solving that issue. */}
          <h3>Time Zones</h3>
          <p>
            Simple timezone boundaries are available from{" "}
            <Anchor href="https://www.naturalearthdata.com/downloads/10m-cultural-vectors/timezones/">
              Natural Earth
            </Anchor>
            . These don&apos;t include the Arizona{" "}
            <abbr title="Daylight Savings Time">DST</abbr> boundaries, which
            would be nice to see. There is another source of boundaries that
            does have that.
          </p>
          <p>
            <Anchor href="https://github.com/evansiroky/timezone-boundary-builder">
              These TZ boundaries
            </Anchor>{" "}
            are better, but they lack attribution other than names. If I want to
            symbolize which TZ boundaries do not observe DST, then I&apos;ll
            need to add that myself.
          </p>
          <p>
            I have the simple Natural Earth boundaries down to 6MB as
            uncompressed JSON. I have the better TZ Boundaries down to 13MB.
            Data like that should be served as Tiles. In the past, I used
            Geoserver and PostgreSQL for this. I might do the same again, but
            Geoserver feels excessive for a demo.
          </p>
          <p>Timezones that do not observe DST appear gray.</p>
          <img
            src="/storage/screen_tz_poly_az.png"
            alt="TZ polygon screenshot"
          />
        </div>
      </div>
    </GuestLayout>
  );
}

async function tzBoundaryNeLayer(dataUrl: string) {
  const data = await fetch(dataUrl);
  const geojson = await data.json() as unknown;

  // const mapExtent = [
  //   ...transform([-180, -90], "EPSG:4326", "EPSG:3857"),
  //   ...transform([180, 90], "EPSG:4326", "EPSG:3857"),
  // ];
  const vecSource = new VectorSource({
    features: new GeoJSON().readFeatures(geojson) /* .filter((feat) => {
      const ext = feat.getGeometry()?.getExtent(); // [minX, minY, maxX, maxY]
      return ext && containsExtent(mapExtent, ext);
    }) */,
  });

  return new VectorLayer({
    source: vecSource,
    style: tzStyle,
  });
}

function tzStyle(feature: FeatureLike, resolution: number) {
  const geomType = feature.getGeometry()?.getType() ?? "";

  const dot = new CircleStyle({
    radius: 3,
    fill: new Fill({ color: "hsl(0, 60%, 50%)" }),
    stroke: new Stroke({ color: "hsl(0, 60%, 15%)", width: 1 }),
  });

  if (geomType.endsWith("Polygon")) {
    const noDsl = feature.getProperties().no_dst === true;
    const sat = noDsl ? "0%" : "60%";
    return new Style({
      fill: new Fill({
        color: `hsl(50, ${sat}, 60%, 0.2 )`,
      }),
      stroke: new Stroke({ color: "hsl(20, 10%, 10%)", width: 2 }),
    });
  }
  console.log("other geom type", geomType);
  return new Style({ image: dot });
}
