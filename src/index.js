/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		const responseOptions = {
			1: "Hello! Code Club Session 2 focused on random responses",
			2: "Another example of a random response!",
			3: "Use MDN Docs for more details on functions, objects, properties, and constructors",
			4: "Success! Four different random responses"
		}

		const max = 4;
		const responseInt = Math.ceil(Math.random() * max)

		let randomResponse = responseOptions[responseInt]

		return new Response(randomResponse, { status: 200 })
	},
};
