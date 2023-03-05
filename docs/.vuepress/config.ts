import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    base: '/smooth-loader-docs/',
    lang: 'en-US',
    title: 'Smooth loader',
    description: 'Smooth loader allows you smoothly lazy load images and background images',
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.png' }],
    ],
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search',
                },
            },
        })
    ],
    theme: defaultTheme({
        logo: '/images/favicon.png',
        navbar: [
            {
                text: 'Docs',
                link: '/documentation',
            },
            {
                text: 'NPM',
                link: 'https://www.npmjs.com/package/smooth-loader',
            },
            {
                text: 'Usage example',
                link: 'https://codesandbox.io/s/smooth-loader-example-usage-5xr6h',
            },
            {
                text: 'GitHub',
                link: 'https://github.com/SerhiiCho/smooth-loader',
            },
            {
                text: '📃 Changelog',
                link: 'https://github.com/SerhiiCho/smooth-loader/blob/master/CHANGELOG.md',
            },
            {
                text: '👨🏻‍💻 Author',
                link: 'https://serhii.io/about-me',
                rel: 'author',
            },
            {
                text: '☕️ By me a coffee',
                link: 'https://www.buymeacoffee.com/serhiicho',
            },
        ],
    }),
})