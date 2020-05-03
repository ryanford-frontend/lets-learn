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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M30.174 14.023l-3.301 2.75c.083.396.127.806.127 1.227 0 3.313-2.687 6-6 6h-1.059c.037.329.059.662.059 1 0 1.054-.19 2.06-.523 3H21c5.522 0 10-4.478 10-10 0-1.414-.297-2.758-.826-3.977zM30.2 10L23 4v4h-8C9.477 8 5 12.477 5 18c0 .099.012.194.015.292 1.186-1.059 2.649-1.812 4.273-2.125C10.062 13.75 12.326 12 15 12h8v4l7.2-6z", {["fill"]: "#FFF",["d"]: "M30.174 14.023l-3.301 2.75c.083.396.127.806.127 1.227 0 3.313-2.687 6-6 6h-1.059c.037.329.059.662.059 1 0 1.054-.19 2.06-.523 3H21c5.522 0 10-4.478 10-10 0-1.414-.297-2.758-.826-3.977zM30.2 10L23 4v4h-8C9.477 8 5 12.477 5 18c0 .099.012.194.015.292 1.186-1.059 2.649-1.812 4.273-2.125C10.062 13.75 12.326 12 15 12h8v4l7.2-6z",}));el.appendChild(svg["circle"](11, 25, 12, {["cy"]: "25",["r"]: "6",["fill"]: "#FFF",["cx"]: "11",}));el.appendChild(svg["path"]("M10.201 23.116h-.708c-.576 0-.815-.42-.815-.828 0-.419.3-.827.815-.827h1.703c.516 0 .804.371.804.852v5.752c0 .6-.384.935-.899.935s-.899-.336-.899-.935v-4.949z", {["fill"]: "#3B88C3",["d"]: "M10.201 23.116h-.708c-.576 0-.815-.42-.815-.828 0-.419.3-.827.815-.827h1.703c.516 0 .804.371.804.852v5.752c0 .6-.384.935-.899.935s-.899-.336-.899-.935v-4.949z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};