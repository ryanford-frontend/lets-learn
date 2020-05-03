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
				el.appendChild(svg["path"]("M36 28c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V8c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v20z", {["fill"]: "#269",["d"]: "M36 28c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V8c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v20z",}));el.appendChild(svg["path"]("M34.481 11.183c-.129-.07-1.335-.683-3.851-.683-1.627 0-3.926.74-6.062 2.011C22.509 11.533 20.256 11 18.331 11h-.656c-1.925 0-4.178.533-6.238 1.511C9.301 11.24 7.002 10.5 5.375 10.5c-2.516 0-3.722.613-3.851.683-.48.26-.656.853-.404 1.337.251.484.853.671 1.341.429.009-.005.922-.45 2.914-.45 1.067 0 2.54.438 4.02 1.181-2.421 1.659-4.208 4.019-4.208 6.891 0 4.48 3.652 6.495 6.245 6.495 2.855 0 5.745-2.248 5.745-6.545 0-2.595-1.636-4.908-3.791-6.656 1.461-.556 2.974-.865 4.289-.865h.656c1.316 0 2.829.309 4.288.866-2.154 1.748-3.79 4.061-3.79 6.656 0 4.297 2.89 6.545 5.745 6.545 2.593 0 6.244-2.015 6.244-6.495 0-2.871-1.785-5.232-4.207-6.891 1.479-.743 2.952-1.181 4.02-1.181 1.991 0 2.904.445 2.914.45.488.242 1.09.055 1.341-.429.252-.485.076-1.078-.405-1.338zm-19.304 9.338c0 3.123-1.941 4.545-3.745 4.545-1.641 0-4.245-1.221-4.245-4.495 0-2.363 1.814-4.376 4.148-5.731 2.112 1.486 3.842 3.527 3.842 5.681zm13.641.05c0 3.274-2.604 4.495-4.244 4.495-1.804 0-3.745-1.422-3.745-4.545 0-2.154 1.729-4.196 3.841-5.681 2.335 1.355 4.148 3.368 4.148 5.731z", {["fill"]: "#FFF",["d"]: "M34.481 11.183c-.129-.07-1.335-.683-3.851-.683-1.627 0-3.926.74-6.062 2.011C22.509 11.533 20.256 11 18.331 11h-.656c-1.925 0-4.178.533-6.238 1.511C9.301 11.24 7.002 10.5 5.375 10.5c-2.516 0-3.722.613-3.851.683-.48.26-.656.853-.404 1.337.251.484.853.671 1.341.429.009-.005.922-.45 2.914-.45 1.067 0 2.54.438 4.02 1.181-2.421 1.659-4.208 4.019-4.208 6.891 0 4.48 3.652 6.495 6.245 6.495 2.855 0 5.745-2.248 5.745-6.545 0-2.595-1.636-4.908-3.791-6.656 1.461-.556 2.974-.865 4.289-.865h.656c1.316 0 2.829.309 4.288.866-2.154 1.748-3.79 4.061-3.79 6.656 0 4.297 2.89 6.545 5.745 6.545 2.593 0 6.244-2.015 6.244-6.495 0-2.871-1.785-5.232-4.207-6.891 1.479-.743 2.952-1.181 4.02-1.181 1.991 0 2.904.445 2.914.45.488.242 1.09.055 1.341-.429.252-.485.076-1.078-.405-1.338zm-19.304 9.338c0 3.123-1.941 4.545-3.745 4.545-1.641 0-4.245-1.221-4.245-4.495 0-2.363 1.814-4.376 4.148-5.731 2.112 1.486 3.842 3.527 3.842 5.681zm13.641.05c0 3.274-2.604 4.495-4.244 4.495-1.804 0-3.745-1.422-3.745-4.545 0-2.154 1.729-4.196 3.841-5.681 2.335 1.355 4.148 3.368 4.148 5.731z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};