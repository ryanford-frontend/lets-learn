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
				el.appendChild(svg["path"]("M33 17c0 9.389-2.188 19-15 19S3 26.389 3 17 8.611 3 18 3c9.465 0 15 4.701 15 14z", {["fill"]: "#66757F",["d"]: "M33 17c0 9.389-2.188 19-15 19S3 26.389 3 17 8.611 3 18 3c9.465 0 15 4.701 15 14z",}));el.appendChild(svg["path"]("M32 13.969C32 21.891 30.062 30 18 30S4 21.891 4 13.969C4 6.047 9.237 3 18 3s14 3.047 14 10.969z", {["fill"]: "#99AAB5",["d"]: "M32 13.969C32 21.891 30.062 30 18 30S4 21.891 4 13.969C4 6.047 9.237 3 18 3s14 3.047 14 10.969z",}));el.appendChild(svg["path"]("M29 12.5c0 5.246-4.925 8.5-11 8.5S7 17.746 7 12.5C7 7.253 11.925 3 18 3s11 4.253 11 9.5z", {["fill"]: "#CCD6DD",["d"]: "M29 12.5c0 5.246-4.925 8.5-11 8.5S7 17.746 7 12.5C7 7.253 11.925 3 18 3s11 4.253 11 9.5z",}));el.appendChild(svg["path"]("M28 10c0 5.523-4.478 8-10 8-5.523 0-10-2.477-10-8S12.477 0 18 0c5.522 0 10 4.477 10 10z", {["fill"]: "#744EAA",["d"]: "M28 10c0 5.523-4.478 8-10 8-5.523 0-10-2.477-10-8S12.477 0 18 0c5.522 0 10 4.477 10 10z",}));el.appendChild(svg["path"]("M17 23v4.75c0 1-9.672-1-9.672-6 0-1.375.301-1.973 2.315-.984C14.134 22.969 17 22.452 17 23zm2 0v4.75c0 1 9.672-1 9.672-6 0-1.375-.301-1.973-2.316-.984C21.865 22.969 19 22.452 19 23z", {["fill"]: "#292F33",["d"]: "M17 23v4.75c0 1-9.672-1-9.672-6 0-1.375.301-1.973 2.315-.984C14.134 22.969 17 22.452 17 23zm2 0v4.75c0 1 9.672-1 9.672-6 0-1.375-.301-1.973-2.316-.984C21.865 22.969 19 22.452 19 23z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};