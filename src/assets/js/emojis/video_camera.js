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
				el.appendChild(svg["path"]("M29 18H16c-3.668 0-5-2.99-5-5v-2H7c-3 0-3 3-3 3s-2-1-3-1-1 1-1 1v10s0 1 1 1 3-1 3-1v7c0 4 4 4 4 4h18c4 0 4-4 4-4V17.894c-.347.069-.685.106-1 .106z", {["fill"]: "#31373D",["d"]: "M29 18H16c-3.668 0-5-2.99-5-5v-2H7c-3 0-3 3-3 3s-2-1-3-1-1 1-1 1v10s0 1 1 1 3-1 3-1v7c0 4 4 4 4 4h18c4 0 4-4 4-4V17.894c-.347.069-.685.106-1 .106z",}));el.appendChild(svg["path"]("M35 6c-.559 0-2.05.934-3.26 1.76C31.413 6.934 30.674 6 29 6H18s-5 0-5 5v2s0 3 3 3h13s2.075-.006 2.771-1.739C32.976 15.082 34.446 16 35 16c1 0 1-1 1-1V7s0-1-1-1zM9 35v-9s0-3 2.75-3H22s3 0 3 3v9h-2v-9s0-1-1-1H12s-1 0-1 1v9H9z", {["fill"]: "#66757F",["d"]: "M35 6c-.559 0-2.05.934-3.26 1.76C31.413 6.934 30.674 6 29 6H18s-5 0-5 5v2s0 3 3 3h13s2.075-.006 2.771-1.739C32.976 15.082 34.446 16 35 16c1 0 1-1 1-1V7s0-1-1-1zM9 35v-9s0-3 2.75-3H22s3 0 3 3v9h-2v-9s0-1-1-1H12s-1 0-1 1v9H9z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};