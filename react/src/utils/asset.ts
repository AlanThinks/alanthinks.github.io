export function resolveLegacyAsset(relativePath: string): string {
  if (!relativePath) {
    return "";
  }

  const trimmed = relativePath.replace(/^\/+/, "");
  return new URL(`../../../${trimmed}`, import.meta.url).href;
}

