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
				el.appendChild(svg["path"]("M13.917 36c-.091 0-.182-.029-.258-.089-.157-.124-.204-.341-.113-.518L17 29h-5.078c-.174 0-.438-.031-.562-.297-.114-.243-.057-.474.047-.703L15 19c.078-.067 6.902.393 7 .393.09 0 .182.029.257.089.157.124.204.341.112.519l-3.817 6h5.032c.174 0 .329.108.391.271.06.163.013.347-.119.461l-9.666 9.166c-.079.067-.176.101-.273.101z", {["fill"]: "#F4900C",["d"]: "M13.917 36c-.091 0-.182-.029-.258-.089-.157-.124-.204-.341-.113-.518L17 29h-5.078c-.174 0-.438-.031-.562-.297-.114-.243-.057-.474.047-.703L15 19c.078-.067 6.902.393 7 .393.09 0 .182.029.257.089.157.124.204.341.112.519l-3.817 6h5.032c.174 0 .329.108.391.271.06.163.013.347-.119.461l-9.666 9.166c-.079.067-.176.101-.273.101z",}));el.appendChild(svg["path"]("M28 4c-.825 0-1.62.125-2.369.357C24.744 1.822 22.338 0 19.5 0c-3.044 0-5.592 2.096-6.299 4.921C12.447 4.351 11.519 4 10.5 4 8.015 4 6 6.015 6 8.5c0 .604.123 1.178.339 1.704C5.91 10.085 5.467 10 5 10c-2.762 0-5 2.238-5 5s2.238 5 5 5h23c4.418 0 8-3.581 8-8 0-4.418-3.582-8-8-8z", {["fill"]: "#E1E8ED",["d"]: "M28 4c-.825 0-1.62.125-2.369.357C24.744 1.822 22.338 0 19.5 0c-3.044 0-5.592 2.096-6.299 4.921C12.447 4.351 11.519 4 10.5 4 8.015 4 6 6.015 6 8.5c0 .604.123 1.178.339 1.704C5.91 10.085 5.467 10 5 10c-2.762 0-5 2.238-5 5s2.238 5 5 5h23c4.418 0 8-3.581 8-8 0-4.418-3.582-8-8-8z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};