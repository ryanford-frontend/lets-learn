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
				el.appendChild(svg["path"]("M11 13c0-4.984 1.934-9.505 5.073-12.894C7.039 1.068 0 8.71 0 18c0 9.941 8.06 18 18 18 4.303 0 8.25-1.515 11.348-4.033-7.164-.245-13.306-4.451-16.351-10.484-.622-1.232 2.795-1.201 2.962-3.482C16.113 15.87 11 15.26 11 13", {["fill"]: "#FFD983",["d"]: "M11 13c0-4.984 1.934-9.505 5.073-12.894C7.039 1.068 0 8.71 0 18c0 9.941 8.06 18 18 18 4.303 0 8.25-1.515 11.348-4.033-7.164-.245-13.306-4.451-16.351-10.484-.622-1.232 2.795-1.201 2.962-3.482C16.113 15.87 11 15.26 11 13",}));el.appendChild(svg["circle"](10.5, 28.5, 7, {["cy"]: "28.5",["fill"]: "#FFCC4D",["cx"]: "10.5",["r"]: "3.5",}));el.appendChild(svg["circle"](9, 7, 2, {["cy"]: "7",["fill"]: "#FFCC4D",["cx"]: "9",["r"]: "1",}));el.appendChild(svg["circle"](18, 32, 2, {["cy"]: "32",["fill"]: "#FFCC4D",["cx"]: "18",["r"]: "1",}));el.appendChild(svg["circle"](3, 20, 4, {["cy"]: "20",["fill"]: "#FFCC4D",["cx"]: "3",["r"]: "2",}));el.appendChild(svg["path"]("M16.203 26.023c-.775-.819-1.48-1.705-2.104-2.651-5.449 1.226-7.637-.273-7.316.807.341 1.147 4.797 3.008 9.42 1.844M10 14.5c0 1.381-1.12 2.5-2.5 2.5S5 15.881 5 14.5 6.12 12 7.5 12s2.5 1.119 2.5 2.5", {["d"]: "M16.203 26.023c-.775-.819-1.48-1.705-2.104-2.651-5.449 1.226-7.637-.273-7.316.807.341 1.147 4.797 3.008 9.42 1.844M10 14.5c0 1.381-1.12 2.5-2.5 2.5S5 15.881 5 14.5 6.12 12 7.5 12s2.5 1.119 2.5 2.5",["fill"]: "#292F33",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};