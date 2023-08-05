// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr:true,
	app:{
		head: {
			title:"My Blog",
			meta: [
				{ charset:"utf-8"},
				{ name: "viewport", content: "width-device-width, initial-scale=1" },
			],
			link: [
				{rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
				{rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"}
			]
		}
	}
})
