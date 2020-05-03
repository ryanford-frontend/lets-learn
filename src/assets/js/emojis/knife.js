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
				el.appendChild(svg["path"]("M35.875 34.604L19.796 15.113s-5.637 3.692-7.689 9.676c0 0 4.667 5.292 9.79 8.225 6.368 3.646 11.642 2.855 13.703 2.391.362-.081.511-.513.275-.801z", {["fill"]: "#CCD6DD",["d"]: "M35.875 34.604L19.796 15.113s-5.637 3.692-7.689 9.676c0 0 4.667 5.292 9.79 8.225 6.368 3.646 11.642 2.855 13.703 2.391.362-.081.511-.513.275-.801z",}));el.appendChild(svg["path"]("M18.071 13.005l-4.035 3.559c.066.028.316.45.174 1.107-.402 1.865-2.346 4.288-2.974 5.098-.194.25-.224.691.026 1.007l.845 1.013c1.821-3.964 6.556-8.694 7.689-9.676l-1.725-2.108z", {["fill"]: "#AAB8C2",["d"]: "M18.071 13.005l-4.035 3.559c.066.028.316.45.174 1.107-.402 1.865-2.346 4.288-2.974 5.098-.194.25-.224.691.026 1.007l.845 1.013c1.821-3.964 6.556-8.694 7.689-9.676l-1.725-2.108z",}));el.appendChild(svg["path"]("M18.071 13.005s-3.32-4.216-5.763-6.986S8.208 1.658 6.625.64C5.01-.398 3.285.205 1.981 1.354S-.722 5.082.787 6.793c.826.937 2.785.078 3.791 1.219.683.774 1.031 1.365 3.464 3.859 3.759 3.854 5.994 4.692 5.994 4.692s1.251-1.042 1.932-1.648c.682-.604 2.103-1.91 2.103-1.91z", {["fill"]: "#31373D",["d"]: "M18.071 13.005s-3.32-4.216-5.763-6.986S8.208 1.658 6.625.64C5.01-.398 3.285.205 1.981 1.354S-.722 5.082.787 6.793c.826.937 2.785.078 3.791 1.219.683.774 1.031 1.365 3.464 3.859 3.759 3.854 5.994 4.692 5.994 4.692s1.251-1.042 1.932-1.648c.682-.604 2.103-1.91 2.103-1.91z",}));el.appendChild(svg["circle"](11.618, 10.543, 2.73, {["cy"]: "10.543",["r"]: "1.365",["fill"]: "#F5F8FA",["cx"]: "11.618",}));el.appendChild(svg["circle"](5.903, 4.653, 2.73, {["cy"]: "4.653",["r"]: "1.365",["fill"]: "#F5F8FA",["cx"]: "5.903",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};