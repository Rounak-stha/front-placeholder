/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['images.pexels.com', 'images.unsplash.com']
	},
	experimental: {
		appDir: true
	}
}

module.exports = nextConfig
