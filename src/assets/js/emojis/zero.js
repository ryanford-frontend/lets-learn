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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M9.785 17.962c0-5.054 1.954-11.41 8.216-11.41 6.264 0 8.217 6.356 8.217 11.41s-1.953 11.41-8.217 11.41c-6.262 0-8.216-6.356-8.216-11.41zm11.596 0c0-2.356-.217-7.193-3.379-7.193s-3.379 4.837-3.379 7.193c0 2.201.217 7.193 3.379 7.193s3.379-4.992 3.379-7.193z", {["fill"]: "#FFF",["d"]: "M9.785 17.962c0-5.054 1.954-11.41 8.216-11.41 6.264 0 8.217 6.356 8.217 11.41s-1.953 11.41-8.217 11.41c-6.262 0-8.216-6.356-8.216-11.41zm11.596 0c0-2.356-.217-7.193-3.379-7.193s-3.379 4.837-3.379 7.193c0 2.201.217 7.193 3.379 7.193s3.379-4.992 3.379-7.193z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};