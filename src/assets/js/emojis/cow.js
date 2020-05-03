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
				el.appendChild(svg["path"]("M34 15c0-2-2.127-4.702-4-4-8 3-19-2-19-2-2.209 0-6.857 9.257-5 10 .277.111.541.227.799.343C4.648 20.087 4.283 21.809 6 22c9 1 6.896 14 8 14 1.344 0 2.685-2.614 3.422-5h9.8c.288 2.354.866 5 1.778 5 .866 0 2.611-3.542 3.794-9.142C33.528 24.232 34 20.326 34 15z", {["fill"]: "#CCD6DD",["d"]: "M34 15c0-2-2.127-4.702-4-4-8 3-19-2-19-2-2.209 0-6.857 9.257-5 10 .277.111.541.227.799.343C4.648 20.087 4.283 21.809 6 22c9 1 6.896 14 8 14 1.344 0 2.685-2.614 3.422-5h9.8c.288 2.354.866 5 1.778 5 .866 0 2.611-3.542 3.794-9.142C33.528 24.232 34 20.326 34 15z",}));el.appendChild(svg["path"]("M10 22c-2 0-4.946.087-6.973.087S-.617 18.609.692 17.305C2 16 6 15 5 11c-.542-2.169 4-3 6-2 4.816 2.408 5 10-2 10 0 0 3 3 1 3zm20-11c-2.586.97-5.485 1.101-8.226.838C20.669 13.231 20 15.031 20 17c0 4.418 3.357 8 7.5 8 2.587 0 4.866-1.396 6.215-3.521.181-1.872.285-4.017.285-6.479 0-2-2.127-4.702-4-4z", {["fill"]: "#31373D",["d"]: "M10 22c-2 0-4.946.087-6.973.087S-.617 18.609.692 17.305C2 16 6 15 5 11c-.542-2.169 4-3 6-2 4.816 2.408 5 10-2 10 0 0 3 3 1 3zm20-11c-2.586.97-5.485 1.101-8.226.838C20.669 13.231 20 15.031 20 17c0 4.418 3.357 8 7.5 8 2.587 0 4.866-1.396 6.215-3.521.181-1.872.285-4.017.285-6.479 0-2-2.127-4.702-4-4z",}));el.appendChild(svg["circle"](17.5, 24.5, 7, {["cy"]: "24.5",["r"]: "3.5",["fill"]: "#31373D",["cx"]: "17.5",}));el.appendChild(svg["circle"](30, 28, 4, {["cy"]: "28",["r"]: "2",["fill"]: "#31373D",["cx"]: "30",}));el.appendChild(svg["path"]("M11 9c0 .552-.671 1-1.5 1S5 7.552 5 7s2.23-.308 3 0c2.5 1 3 1.448 3 2z", {["fill"]: "#CCD6DD",["d"]: "M11 9c0 .552-.671 1-1.5 1S5 7.552 5 7s2.23-.308 3 0c2.5 1 3 1.448 3 2z",}));el.appendChild(svg["circle"](8, 13, 2, {["cy"]: "13",["r"]: "1",["fill"]: "#CCD6DD",["cx"]: "8",}));el.appendChild(svg["path"]("M35 24c-.553 0-1-.447-1-1v-5c0-1.44-.561-2-2-2-.553 0-1-.448-1-1s.447-1 1-1c2.542 0 4 1.458 4 4v5c0 .553-.447 1-1 1z", {["fill"]: "#31373D",["d"]: "M35 24c-.553 0-1-.447-1-1v-5c0-1.44-.561-2-2-2-.553 0-1-.448-1-1s.447-1 1-1c2.542 0 4 1.458 4 4v5c0 .553-.447 1-1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};