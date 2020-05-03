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
				el.appendChild(svg["path"]("M36 7.001c-2 3-2-1-5 2-3-2-3 3-6 0 .899 2.699 3.419 4.574 6.1 4.926-.277 1.789.202 3.946-2.1 6.073-2.008 1.857-3.023.312-8-2.999-3-1.996-5-4-10-3C5.117 15.178 0 20 0 22s3 13.969 21 13.969c2 0 5.243-.664 8-2.969 5.955-4.978 5.882-15.349 4.58-19.456C35.36 12.417 36 9.394 36 7.001z", {["fill"]: "#3B88C3",["d"]: "M36 7.001c-2 3-2-1-5 2-3-2-3 3-6 0 .899 2.699 3.419 4.574 6.1 4.926-.277 1.789.202 3.946-2.1 6.073-2.008 1.857-3.023.312-8-2.999-3-1.996-5-4-10-3C5.117 15.178 0 20 0 22s3 13.969 21 13.969c2 0 5.243-.664 8-2.969 5.955-4.978 5.882-15.349 4.58-19.456C35.36 12.417 36 9.394 36 7.001z",}));el.appendChild(svg["path"]("M30.214 31.812c.149-.165.289-.338.429-.511 1.879-2.351 2.902-5.349 3.355-8.29C31.999 28.008 30.992 33 20 33 9 33 5 20 0 22c0 2 3 13.969 21 13.969 2 0 5.243-.664 8-2.969.318-.266.612-.554.899-.849.107-.111.212-.223.315-.339z", {["fill"]: "#55ACEE",["d"]: "M30.214 31.812c.149-.165.289-.338.429-.511 1.879-2.351 2.902-5.349 3.355-8.29C31.999 28.008 30.992 33 20 33 9 33 5 20 0 22c0 2 3 13.969 21 13.969 2 0 5.243-.664 8-2.969.318-.266.612-.554.899-.849.107-.111.212-.223.315-.339z",}));el.appendChild(svg["circle"](6.5, 21.5, 3, {["cy"]: "21.5",["r"]: "1.5",["fill"]: "#292F33",["cx"]: "6.5",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};