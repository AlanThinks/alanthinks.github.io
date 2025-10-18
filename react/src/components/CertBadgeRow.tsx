import React from "react";
import { getCerts } from "@src/data";
import { resolveLegacyAsset } from "@src/utils/asset";

export default function CertBadgeRow() {
  const certs = React.useMemo(() => getCerts(), []);

  if (!certs.length) {
    return null;
  }

  return (
    <div className="cert-badge-row">
      <p className="span-title hidden-sm hidden-xs">Certifications</p>
      <ul className="list-inline">
        {certs.map((cert) => {
          const badgeSrc = cert.image ? resolveLegacyAsset(cert.image) : "";
          return (
            <li
              key={cert.id}
              style={{
                display: "inline-block",
                marginRight: "12px",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              {badgeSrc ? (
                <img
                  src={badgeSrc}
                  alt={`${cert.name} badge`}
                  loading="lazy"
                  style={{ maxHeight: "60px", maxWidth: "120px" }}
                />
              ) : (
                <span>{cert.name}</span>
              )}
              <div className="hidden-sm hidden-xs" style={{ marginTop: "6px" }}>
                <span style={{ display: "block", fontWeight: 600 }}>{cert.name}</span>
                {cert.issuer ? (
                  <span style={{ display: "block", fontSize: "0.85rem", opacity: 0.8 }}>
                    {cert.issuer}
                  </span>
                ) : null}
                {cert.credential_url ? (
                  <a
                    href={cert.credential_url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: "6px",
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                    }}
                  >
                    Verify
                  </a>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
