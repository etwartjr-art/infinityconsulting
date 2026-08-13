import c1 from "@/assets/clients/client-1.png.asset.json";
import c2 from "@/assets/clients/client-2.png.asset.json";
import c5 from "@/assets/clients/client-5.png.asset.json";
import c6 from "@/assets/clients/client-6.png.asset.json";
import c7 from "@/assets/clients/client-7.png.asset.json";
import c8 from "@/assets/clients/client-8.png.asset.json";
import c9 from "@/assets/clients/client-9.png.asset.json";
import c11 from "@/assets/clients/client-11.png.asset.json";
import c12 from "@/assets/clients/client-12.png.asset.json";
import c14 from "@/assets/clients/client-14.png.asset.json";
import c15 from "@/assets/clients/client-15.png.asset.json";
import c16 from "@/assets/clients/client-16.png.asset.json";
import c17 from "@/assets/clients/client-17.png.asset.json";
import c18 from "@/assets/clients/client-18.png.asset.json";
import c18b from "@/assets/clients/client-18-2.png.asset.json";
import c19 from "@/assets/clients/client-19.png.asset.json";
import c20 from "@/assets/clients/client-20.png.asset.json";
import c21 from "@/assets/clients/client-21.png.asset.json";

const logos = [
  c1,
  c2,
  c5,
  c6,
  c7,
  c8,
  c9,
  c11,
  c12,
  c14,
  c15,
  c16,
  c17,
  c18,
  c18b,
  c19,
  c20,
  c21,
];

export function ClientsMarquee() {
  return (
    <div className="overflow-hidden py-4">
      <div className="marquee-track flex w-max items-center gap-14">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={`${logo.asset_id}-${index}`}
            src={logo.url}
            alt="Cliente Infinity Consulting"
            loading="lazy"
            className="h-16 w-auto shrink-0 object-contain opacity-80 transition-opacity hover:opacity-100"
          />
        ))}
      </div>
    </div>
  );
}
