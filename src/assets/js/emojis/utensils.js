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
				el.appendChild(svg["path"]("M19 1.5c0-.829-.672-1.5-1.5-1.5-.829 0-1.5.671-1.5 1.5V11c0 .552-.448 1-1 1s-1-.448-1-1V1.5c0-.829-.671-1.5-1.5-1.5S11 .671 11 1.5V11c0 .552-.448 1-1 1s-1-.448-1-1V1.5C9 .671 8.329 0 7.5 0S6 .671 6 1.5v9c0 .127.021.249.051.367-.03.207-.051.417-.051.633 0 2.316 1.75 5.957 4 6.442V33.5c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5V17.942c2.25-.485 4-4.126 4-6.442 0-.216-.021-.426-.051-.633.03-.118.051-.24.051-.367v-9zM27.5 0c-.104 0-.204.019-.306.031C27.13.021 27.067 0 27 0c-2.209 0-5 5.477-5 11 0 4.658 1.275 8.56 3 9.672V33.5c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5v-31C30 1.119 28.881 0 27.5 0z", {["fill"]: "#99AAB5",["d"]: "M19 1.5c0-.829-.672-1.5-1.5-1.5-.829 0-1.5.671-1.5 1.5V11c0 .552-.448 1-1 1s-1-.448-1-1V1.5c0-.829-.671-1.5-1.5-1.5S11 .671 11 1.5V11c0 .552-.448 1-1 1s-1-.448-1-1V1.5C9 .671 8.329 0 7.5 0S6 .671 6 1.5v9c0 .127.021.249.051.367-.03.207-.051.417-.051.633 0 2.316 1.75 5.957 4 6.442V33.5c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5V17.942c2.25-.485 4-4.126 4-6.442 0-.216-.021-.426-.051-.633.03-.118.051-.24.051-.367v-9zM27.5 0c-.104 0-.204.019-.306.031C27.13.021 27.067 0 27 0c-2.209 0-5 5.477-5 11 0 4.658 1.275 8.56 3 9.672V33.5c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5v-31C30 1.119 28.881 0 27.5 0z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};