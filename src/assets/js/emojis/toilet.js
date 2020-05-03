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
				el.appendChild(svg["path"]("M26 18v2H13.293c-.867 0-1.835.896-2.161 2L7.59 34c-.326 1.104.306 2 1.41 2h18c1.104 0 2-.896 2-2V24c0-1.861 1.278-3.412 3-3.858V18h-6z", {["fill"]: "#AAB8C2",["d"]: "M26 18v2H13.293c-.867 0-1.835.896-2.161 2L7.59 34c-.326 1.104.306 2 1.41 2h18c1.104 0 2-.896 2-2V24c0-1.861 1.278-3.412 3-3.858V18h-6z",}));el.appendChild(svg["path"]("M22 21.875C22 25.396 17.522 29 12 29c-5.523 0-10-3.604-10-7.125C2 20 2.833 20 12 20c9.166 0 10 0 10 1.875zM25 19c0 .553-.514 1-1.15 1H3.15C2.515 20 2 19.553 2 19c0-.553.515-1 1.15-1h20.7c.636 0 1.15.447 1.15 1z", {["fill"]: "#E1E8ED",["d"]: "M22 21.875C22 25.396 17.522 29 12 29c-5.523 0-10-3.604-10-7.125C2 20 2.833 20 12 20c9.166 0 10 0 10 1.875zM25 19c0 .553-.514 1-1.15 1H3.15C2.515 20 2 19.553 2 19c0-.553.515-1 1.15-1h20.7c.636 0 1.15.447 1.15 1z",}));el.appendChild(svg["path"]("M18 16H6c-1.104 0-2 .896-2 2h16c0-1.104-.896-2-2-2zm2-16v18c1.104 0 2-1.007 2-2.25V2.25C22 1.007 21.104 0 20 0z", {["fill"]: "#99AAB5",["d"]: "M18 16H6c-1.104 0-2 .896-2 2h16c0-1.104-.896-2-2-2zm2-16v18c1.104 0 2-1.007 2-2.25V2.25C22 1.007 21.104 0 20 0z",}));el.appendChild(svg["path"]("M34 4c0-1.104-.896-2-2-2h-8c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2V4z", {["fill"]: "#E1E8ED",["d"]: "M34 4c0-1.104-.896-2-2-2h-8c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2V4z",}));el.appendChild(svg["circle"](20, 16, 4, {["cy"]: "16",["r"]: "2",["fill"]: "#CCD6DD",["cx"]: "20",}));el.appendChild(svg["path"]("M22 4h12v2H22z", {["fill"]: "#CCD6DD",["d"]: "M22 4h12v2H22z",}));el.appendChild(svg["path"]("M25 21c0 .553-.447 1-1 1H3c-.552 0-1-.447-1-1 0-.553.448-1 1-1h21c.553 0 1 .447 1 1z", {["fill"]: "#AAB8C2",["d"]: "M25 21c0 .553-.447 1-1 1H3c-.552 0-1-.447-1-1 0-.553.448-1 1-1h21c.553 0 1 .447 1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};