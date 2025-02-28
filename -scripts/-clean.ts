import { Fs } from "@sys/fs";

await Fs.remove("./node_modules");
await Fs.remove("./sample-vite/.vite");
await Fs.remove("./sample-vite/dist");
