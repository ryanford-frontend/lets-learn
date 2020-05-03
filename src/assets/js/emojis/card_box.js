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
				el.appendChild(svg["path"]("M35 20c0 2.209-1.791 2-4 2H5c-2.209 0-4 .209-4-2L3 8c.125-1.917 1.791-4 4-4h22c2.209 0 3.791 2.208 4 4l2 12z", {["fill"]: "#67757F",["d"]: "M35 20c0 2.209-1.791 2-4 2H5c-2.209 0-4 .209-4-2L3 8c.125-1.917 1.791-4 4-4h22c2.209 0 3.791 2.208 4 4l2 12z",}));el.appendChild(svg["path"]("M28 13c0 1.104-.896 2-2 2H10c-1.104 0-2-.896-2-2V5c0-1.105.896-2 2-2h16c1.104 0 2 .895 2 2v8z", {["fill"]: "#CCD6DD",["d"]: "M28 13c0 1.104-.896 2-2 2H10c-1.104 0-2-.896-2-2V5c0-1.105.896-2 2-2h16c1.104 0 2 .895 2 2v8z",}));el.appendChild(svg["path"]("M30 17c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2V9c0-1.104.896-2 2-2h20c1.104 0 2 .896 2 2v8z", {["fill"]: "#E1E8ED",["d"]: "M30 17c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2V9c0-1.104.896-2 2-2h20c1.104 0 2 .896 2 2v8z",}));el.appendChild(svg["path"]("M32 21c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h24c1.104 0 2 .896 2 2v8z", {["fill"]: "#F5F8FA",["d"]: "M32 21c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h24c1.104 0 2 .896 2 2v8z",}));el.appendChild(svg["path"]("M35 31c0 2.209-1.791 4-4 4H5c-2.209 0-4-1.791-4-4V20c0-2.209 1.791-4 4-4h26c2.209 0 4 1.791 4 4v11z", {["fill"]: "#9AAAB4",["d"]: "M35 31c0 2.209-1.791 4-4 4H5c-2.209 0-4-1.791-4-4V20c0-2.209 1.791-4 4-4h26c2.209 0 4 1.791 4 4v11z",}));el.appendChild(svg["path"]("M14 12zm0 0z", {["fill"]: "#67757F",["d"]: "M14 12zm0 0z",}));el.appendChild(svg["path"]("M22 1h-5c-1.104 0-2 .895-2 2v1h4c1.104 0 2 .896 2 2h1c1.104 0 2-.896 2-2V3c0-1.105-.896-2-2-2z", {["fill"]: "#FCAB40",["d"]: "M22 1h-5c-1.104 0-2 .895-2 2v1h4c1.104 0 2 .896 2 2h1c1.104 0 2-.896 2-2V3c0-1.105-.896-2-2-2z",}));el.appendChild(svg["path"]("M18 5h-5c-1.104 0-2 .896-2 2v1h4c1.104 0 2 .896 2 2h1c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2z", {["fill"]: "#5DADEC",["d"]: "M18 5h-5c-1.104 0-2 .896-2 2v1h4c1.104 0 2 .896 2 2h1c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2z",}));el.appendChild(svg["path"]("M16 12c0 1.104-.896 2-2 2H9c-1.104 0-2-.896-2-2v-1c0-1.104.896-2 2-2h5c1.104 0 2 .896 2 2v1z", {["fill"]: "#E75A70",["d"]: "M16 12c0 1.104-.896 2-2 2H9c-1.104 0-2-.896-2-2v-1c0-1.104.896-2 2-2h5c1.104 0 2 .896 2 2v1z",}));el.appendChild(svg["path"]("M25 28c0 1.104-.896 2-2 2H13c-1.104 0-2-.896-2-2v-5c0-1.104.896-2 2-2h10c1.104 0 2 .896 2 2v5zm-11-4z", {["fill"]: "#67757F",["d"]: "M25 28c0 1.104-.896 2-2 2H13c-1.104 0-2-.896-2-2v-5c0-1.104.896-2 2-2h10c1.104 0 2 .896 2 2v5zm-11-4z",}));el.appendChild(svg["path"]("M23 27c0 .553-.447 1-1 1h-8c-.552 0-1-.447-1-1v-3c0-.553.448-1 1-1h8c.553 0 1 .447 1 1v3z", {["fill"]: "#E1E8ED",["d"]: "M23 27c0 .553-.447 1-1 1h-8c-.552 0-1-.447-1-1v-3c0-.553.448-1 1-1h8c.553 0 1 .447 1 1v3z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};