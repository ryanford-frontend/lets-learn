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
				el.appendChild(svg["path"]("M27 33c0 2.209-1.791 3-4 3H13c-2.209 0-4-.791-4-3s3-7 3-13 12-6 12 0 3 10.791 3 13z", {["fill"]: "#99AAB5",["d"]: "M27 33c0 2.209-1.791 3-4 3H13c-2.209 0-4-.791-4-3s3-7 3-13 12-6 12 0 3 10.791 3 13z",}));el.appendChild(svg["path"]("M34.666 11.189l-.001-.002c-.96-2.357-2.404-4.453-4.208-6.182h-.003C27.222 1.904 22.839 0 18 0 13.638 0 9.639 1.541 6.524 4.115c-2.19 1.809-3.941 4.13-5.076 6.785C.518 13.075 0 15.473 0 18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4 0-2.417-.48-4.713-1.334-6.811z", {["fill"]: "#DD2E44",["d"]: "M34.666 11.189l-.001-.002c-.96-2.357-2.404-4.453-4.208-6.182h-.003C27.222 1.904 22.839 0 18 0 13.638 0 9.639 1.541 6.524 4.115c-2.19 1.809-3.941 4.13-5.076 6.785C.518 13.075 0 15.473 0 18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4 0-2.417-.48-4.713-1.334-6.811z",}));el.appendChild(svg["path"]("M7.708 16.583c3.475 0 6.292-2.817 6.292-6.292S11.184 4 7.708 4c-.405 0-.8.042-1.184.115-2.19 1.809-3.941 4.13-5.076 6.785.306 3.189 2.991 5.683 6.26 5.683z", {["d"]: "M7.708 16.583c3.475 0 6.292-2.817 6.292-6.292S11.184 4 7.708 4c-.405 0-.8.042-1.184.115-2.19 1.809-3.941 4.13-5.076 6.785.306 3.189 2.991 5.683 6.26 5.683z",["fill"]: "#F4ABBA",}));el.appendChild(svg["path"]("M7.708 4.25c3.331 0 6.041 2.71 6.041 6.042s-2.71 6.042-6.041 6.042c-3.107 0-5.678-2.314-6.006-5.394 1.097-2.541 2.8-4.817 4.931-6.59.364-.067.726-.1 1.075-.1m0-.25c-.405 0-.8.042-1.184.115-2.19 1.809-3.941 4.13-5.076 6.785.306 3.189 2.992 5.683 6.261 5.683 3.475 0 6.291-2.817 6.291-6.292S11.184 4 7.708 4zM26 9.5c0 2.485 2.015 4.5 4.5 4.5 1.887 0 3.497-1.164 4.166-2.811l-.001-.002c-.96-2.357-2.404-4.453-4.208-6.182C27.992 5.028 26 7.029 26 9.5z", {["d"]: "M7.708 4.25c3.331 0 6.041 2.71 6.041 6.042s-2.71 6.042-6.041 6.042c-3.107 0-5.678-2.314-6.006-5.394 1.097-2.541 2.8-4.817 4.931-6.59.364-.067.726-.1 1.075-.1m0-.25c-.405 0-.8.042-1.184.115-2.19 1.809-3.941 4.13-5.076 6.785.306 3.189 2.992 5.683 6.261 5.683 3.475 0 6.291-2.817 6.291-6.292S11.184 4 7.708 4zM26 9.5c0 2.485 2.015 4.5 4.5 4.5 1.887 0 3.497-1.164 4.166-2.811l-.001-.002c-.96-2.357-2.404-4.453-4.208-6.182C27.992 5.028 26 7.029 26 9.5z",["fill"]: "#F4ABBA",}));el.appendChild(svg["circle"](21.5, 16, 9, {["cy"]: "16",["fill"]: "#F4ABBA",["cx"]: "21.5",["r"]: "4.5",}));el.appendChild(svg["circle"](20, 5, 6, {["cy"]: "5",["fill"]: "#F4ABBA",["cx"]: "20",["r"]: "3",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};