export function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}
