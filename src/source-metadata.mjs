function parseJson(bytes) { try { return JSON.parse(bytes.toString()); } catch { return null; } }
export function inspect(bytes) { return { format: 'HPROF', header: bytes.subarray(0, Math.max(0,bytes.indexOf(0))).toString(), sourceBytes: bytes.length }; }
