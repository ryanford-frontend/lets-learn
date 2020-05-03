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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M15.676 11.203h-3.38c-1.488 0-2.108-1.085-2.108-2.139 0-1.085.775-2.14 2.108-2.14h11.411c1.332 0 2.108 1.054 2.108 2.14 0 1.054-.619 2.139-2.108 2.139h-3.381v15.565c0 1.551-.992 2.418-2.325 2.418-1.333 0-2.325-.867-2.325-2.418V11.203z", {["fill"]: "#FFF",["d"]: "M15.676 11.203h-3.38c-1.488 0-2.108-1.085-2.108-2.139 0-1.085.775-2.14 2.108-2.14h11.411c1.332 0 2.108 1.054 2.108 2.14 0 1.054-.619 2.139-2.108 2.139h-3.381v15.565c0 1.551-.992 2.418-2.325 2.418-1.333 0-2.325-.867-2.325-2.418V11.203z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};