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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M14.747 9.125c.527-1.426 1.736-2.573 3.317-2.573 1.643 0 2.792 1.085 3.318 2.573l6.077 16.867c.186.496.248.931.248 1.147 0 1.209-.992 2.046-2.139 2.046-1.303 0-1.954-.682-2.264-1.611l-.931-2.915h-8.62l-.93 2.884c-.31.961-.961 1.642-2.232 1.642-1.24 0-2.294-.93-2.294-2.17 0-.496.155-.868.217-1.023l6.233-16.867zm.34 11.256h5.891l-2.883-8.992h-.062l-2.946 8.992z", {["fill"]: "#FFF",["d"]: "M14.747 9.125c.527-1.426 1.736-2.573 3.317-2.573 1.643 0 2.792 1.085 3.318 2.573l6.077 16.867c.186.496.248.931.248 1.147 0 1.209-.992 2.046-2.139 2.046-1.303 0-1.954-.682-2.264-1.611l-.931-2.915h-8.62l-.93 2.884c-.31.961-.961 1.642-2.232 1.642-1.24 0-2.294-.93-2.294-2.17 0-.496.155-.868.217-1.023l6.233-16.867zm.34 11.256h5.891l-2.883-8.992h-.062l-2.946 8.992z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};