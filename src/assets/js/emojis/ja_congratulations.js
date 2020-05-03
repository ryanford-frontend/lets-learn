import { h } from "/assets/js/vendor/hyperapp.js";
import rough from "/assets/js/vendor/rough.js";
import uuid from "/assets/js/vendor/uuid.js";

export default (props = {}) => {
	let proto;
	const new_props = {
		...props,
		key: props.key || uuid(),
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "-1 -1 37 37",
		width: (props.size || 1) * 16,
		height: (props.size || 1) * 16,
		oncreate: el => {
			const svg = rough.svg(el, {
				options: props.options || {
					roughness: 0.1,
					strokeWidth: 0.2,
					fillStyle: "solid",
				}
			});

			if (proto) {
				el.parentNode.replaceChild(proto.cloneNode(true), el);
			} else {
				el.appendChild(svg["path"]("M36 18c0 9.94-8.059 18-18 18S0 27.94 0 18C0 8.059 8.059 0 18 0s18 8.059 18 18z", {["fill"]: "#DD2E44",["d"]: "M36 18c0 9.94-8.059 18-18 18S0 27.94 0 18C0 8.059 8.059 0 18 0s18 8.059 18 18z",}));el.appendChild(svg["path"]("M9.628 22.736c0-1.242.054-2.43.162-3.59-.945.972-1.97 1.943-3.077 2.807-.189.136-.405.217-.621.217-.324 0-.648-.162-.864-.486-.134-.19-.188-.405-.188-.594 0-.324.162-.648.432-.837 2.699-1.862 5.965-5.317 7.261-7.909.081-.135.108-.243.108-.351 0-.189-.162-.297-.486-.297H6.498c-.486 0-.756-.378-.756-.917 0-.54.27-.945.756-.945h3.104V6.001c0-.486.432-.756 1.026-.756.621 0 1.053.27 1.053.756v3.833h1.754c1.053 0 1.727.594 1.727 1.511 0 .351-.108.756-.297 1.188-.675 1.323-1.727 2.861-2.807 4.184 1.295 1.323 2.483 2.241 3.428 2.861.351.216.513.486.513.811 0 .215-.081.404-.216.62-.189.297-.486.433-.756.433-.189 0-.405-.055-.567-.189-.972-.729-1.943-1.674-2.969-2.78.108 1.35.162 2.429.162 3.725v7.396c0 .485-.405.756-1.026.756-.594 0-.999-.297-.999-.756v-6.858zm11.526-5.371c-.107 6.29-1.971 10.176-6.316 12.606-.216.135-.432.216-.621.216-.324 0-.648-.162-.864-.513-.135-.189-.189-.405-.189-.621 0-.324.162-.594.486-.809 3.86-2.159 5.426-5.129 5.533-10.878h-.809c-1.62 0-2.322-.621-2.322-2.132V8.808c0-1.539.702-2.187 2.322-2.187h8.53c1.593 0 2.321.648 2.321 2.187v6.424c0 1.512-.728 2.132-2.321 2.132H25.42v9.798c0 .621.215.729 1.512.729 1.133 0 1.511-.188 1.7-.782.162-.649.27-1.917.297-2.996 0-.486.351-.783.863-.783h.081c.594.027.918.297.918.81v.055c-.027 1.646-.216 3.212-.647 4.211-.162.378-.433.675-.783.891-.513.297-1.377.485-2.537.485h-.459c-2.456-.026-2.942-.594-2.942-1.97V17.365h-2.269zm5.237-1.863c.514 0 .811-.189.811-.783V9.321c0-.621-.297-.755-.811-.755h-7.503c-.54 0-.81.135-.81.755v5.399c0 .594.27.783.81.783h7.503z", {["fill"]: "#FFF",["d"]: "M9.628 22.736c0-1.242.054-2.43.162-3.59-.945.972-1.97 1.943-3.077 2.807-.189.136-.405.217-.621.217-.324 0-.648-.162-.864-.486-.134-.19-.188-.405-.188-.594 0-.324.162-.648.432-.837 2.699-1.862 5.965-5.317 7.261-7.909.081-.135.108-.243.108-.351 0-.189-.162-.297-.486-.297H6.498c-.486 0-.756-.378-.756-.917 0-.54.27-.945.756-.945h3.104V6.001c0-.486.432-.756 1.026-.756.621 0 1.053.27 1.053.756v3.833h1.754c1.053 0 1.727.594 1.727 1.511 0 .351-.108.756-.297 1.188-.675 1.323-1.727 2.861-2.807 4.184 1.295 1.323 2.483 2.241 3.428 2.861.351.216.513.486.513.811 0 .215-.081.404-.216.62-.189.297-.486.433-.756.433-.189 0-.405-.055-.567-.189-.972-.729-1.943-1.674-2.969-2.78.108 1.35.162 2.429.162 3.725v7.396c0 .485-.405.756-1.026.756-.594 0-.999-.297-.999-.756v-6.858zm11.526-5.371c-.107 6.29-1.971 10.176-6.316 12.606-.216.135-.432.216-.621.216-.324 0-.648-.162-.864-.513-.135-.189-.189-.405-.189-.621 0-.324.162-.594.486-.809 3.86-2.159 5.426-5.129 5.533-10.878h-.809c-1.62 0-2.322-.621-2.322-2.132V8.808c0-1.539.702-2.187 2.322-2.187h8.53c1.593 0 2.321.648 2.321 2.187v6.424c0 1.512-.728 2.132-2.321 2.132H25.42v9.798c0 .621.215.729 1.512.729 1.133 0 1.511-.188 1.7-.782.162-.649.27-1.917.297-2.996 0-.486.351-.783.863-.783h.081c.594.027.918.297.918.81v.055c-.027 1.646-.216 3.212-.647 4.211-.162.378-.433.675-.783.891-.513.297-1.377.485-2.537.485h-.459c-2.456-.026-2.942-.594-2.942-1.97V17.365h-2.269zm5.237-1.863c.514 0 .811-.189.811-.783V9.321c0-.621-.297-.755-.811-.755h-7.503c-.54 0-.81.135-.81.755v5.399c0 .594.27.783.81.783h7.503z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};