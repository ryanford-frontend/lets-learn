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
				el.appendChild(svg["path"]("M33.875 35.228c-.314 0-.628-.12-.868-.359L2.366 4.227c-.479-.479-.479-1.257 0-1.736s1.257-.479 1.736 0l30.641 30.641c.479.479.479 1.257 0 1.736-.24.239-.554.36-.868.36z", {["fill"]: "#D99E82",["d"]: "M33.875 35.228c-.314 0-.628-.12-.868-.359L2.366 4.227c-.479-.479-.479-1.257 0-1.736s1.257-.479 1.736 0l30.641 30.641c.479.479.479 1.257 0 1.736-.24.239-.554.36-.868.36z",}));el.appendChild(svg["path"]("M15.254 8.627c0 3.729-3.023 6.752-6.752 6.752-3.729 0-6.752-3.023-6.752-6.752 0-3.729 3.023-6.752 6.752-6.752 3.729 0 6.752 3.023 6.752 6.752z", {["fill"]: "#FCB1E3",["d"]: "M15.254 8.627c0 3.729-3.023 6.752-6.752 6.752-3.729 0-6.752-3.023-6.752-6.752 0-3.729 3.023-6.752 6.752-6.752 3.729 0 6.752 3.023 6.752 6.752z",}));el.appendChild(svg["ellipse"](15.869, 15.994, 13.504, 13.504, {["rx"]: "6.752",["fill"]: "#FFD983",["cy"]: "15.994",["ry"]: "6.752",["cx"]: "15.869",["transform"]: "rotate(-76.714 15.87 15.994)",}));el.appendChild(svg["path"]("M29.987 23.359c0 3.729-3.024 6.753-6.753 6.753s-6.752-3.024-6.752-6.753 3.023-6.752 6.752-6.752 6.753 3.024 6.753 6.752z", {["fill"]: "#A6D388",["d"]: "M29.987 23.359c0 3.729-3.024 6.753-6.753 6.753s-6.752-3.024-6.752-6.753 3.023-6.752 6.752-6.752 6.753 3.024 6.753 6.752z",}));el.appendChild(svg["path"]("M33.875 35.228c-.314 0-.628-.12-.868-.359l-7.52-7.52c-.48-.479-.48-1.257 0-1.736.48-.479 1.256-.479 1.736 0l7.52 7.52c.479.479.479 1.257 0 1.736-.24.238-.554.359-.868.359z", {["fill"]: "#D99E82",["d"]: "M33.875 35.228c-.314 0-.628-.12-.868-.359l-7.52-7.52c-.48-.479-.48-1.257 0-1.736.48-.479 1.256-.479 1.736 0l7.52 7.52c.479.479.479 1.257 0 1.736-.24.238-.554.359-.868.359z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};