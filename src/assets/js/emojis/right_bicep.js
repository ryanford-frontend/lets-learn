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
				el.appendChild(svg["path"]("M12.43 22s-.717-3.641.298-10.873c1.4.454 2.814.873 3.272.873 1 0 4-1 4-2s-1-2-1-2l2-1c1-1 0-7-4-7-7 0-9.57 7-9.57 7l.007.011H7.43s-6 10.989-6 20c.065 0-1 5 0 6s5 1 5 1C16.43 38 35 35 35 26c0-13-19.57-10-22.57-4z", {["fill"]: "#FFDC5D",["d"]: "M12.43 22s-.717-3.641.298-10.873c1.4.454 2.814.873 3.272.873 1 0 4-1 4-2s-1-2-1-2l2-1c1-1 0-7-4-7-7 0-9.57 7-9.57 7l.007.011H7.43s-6 10.989-6 20c.065 0-1 5 0 6s5 1 5 1C16.43 38 35 35 35 26c0-13-19.57-10-22.57-4z",}));el.appendChild(svg["path"]("M19.494 32.252c-3.178 0-5.793-1.283-5.941-1.357-.493-.247-.693-.846-.447-1.34.246-.494.845-.695 1.34-.45.042.021 4.241 2.061 7.957.641 2.055-.785 3.625-2.507 4.669-5.116.205-.515.791-.763 1.3-.558.513.205.763.787.558 1.3-1.263 3.155-3.223 5.258-5.827 6.248-1.216.461-2.451.632-3.609.632z", {["fill"]: "#EF9645",["d"]: "M19.494 32.252c-3.178 0-5.793-1.283-5.941-1.357-.493-.247-.693-.846-.447-1.34.246-.494.845-.695 1.34-.45.042.021 4.241 2.061 7.957.641 2.055-.785 3.625-2.507 4.669-5.116.205-.515.791-.763 1.3-.558.513.205.763.787.558 1.3-1.263 3.155-3.223 5.258-5.827 6.248-1.216.461-2.451.632-3.609.632z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};