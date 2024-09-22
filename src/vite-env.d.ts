interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_USERNAME: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}