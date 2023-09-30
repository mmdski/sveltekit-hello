import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('def');

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: undefined,
            precompress: false,
            strict: true
        }),
        paths: {
            base: dev ? '' : process.env.BASE_PATH,
        }
    }
};

export default config;
