const isPages = process.env.GITHUB_PAGES === 'true';
const basePath = isPages ? '/sanjeevani-school-premium-website' : '';
export default {
  poweredByHeader: false,
  ...(isPages ? { output: 'export', basePath, trailingSlash: true, images: { unoptimized: true } } : {}),
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
