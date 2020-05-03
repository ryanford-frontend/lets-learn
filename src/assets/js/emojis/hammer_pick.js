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
				el.appendChild(svg["path"]("M6.814 33.279c-1.166 1.166-3.021 1.221-4.121.121-1.1-1.1-1.045-2.955.121-4.121L26.079 6.014c1.167-1.167 3.021-1.221 4.121-.121 1.101 1.1 1.046 2.955-.121 4.121L6.814 33.279z", {["fill"]: "#D67909",["d"]: "M6.814 33.279c-1.166 1.166-3.021 1.221-4.121.121-1.1-1.1-1.045-2.955.121-4.121L26.079 6.014c1.167-1.167 3.021-1.221 4.121-.121 1.101 1.1 1.046 2.955-.121 4.121L6.814 33.279z",}));el.appendChild(svg["path"]("M32.585 7.657c.781-.781.781-2.048 0-2.829l-1.414-1.414c-.78-.78-2.047-.78-2.828 0-.781.781-.781 2.048 0 2.829l1.414 1.414c.781.781 2.048.781 2.828 0z", {["fill"]: "#D67909",["d"]: "M32.585 7.657c.781-.781.781-2.048 0-2.829l-1.414-1.414c-.78-.78-2.047-.78-2.828 0-.781.781-.781 2.048 0 2.829l1.414 1.414c.781.781 2.048.781 2.828 0z",}));el.appendChild(svg["path"]("M32.585 7.657c.781-.781.781-2.048 0-2.829l-1.414-1.414c-.78-.78-2.047-.78-2.828 0-.781.781-.781 2.048 0 2.829l1.414 1.414c.781.781 2.048.781 2.828 0z", {["fill"]: "#D67909",["d"]: "M32.585 7.657c.781-.781.781-2.048 0-2.829l-1.414-1.414c-.78-.78-2.047-.78-2.828 0-.781.781-.781 2.048 0 2.829l1.414 1.414c.781.781 2.048.781 2.828 0z",}));el.appendChild(svg["path"]("M35.789 13.424c-.252-1.765-.375-4.354-3.204-7.182l-.707-.708-4.949-4.95c-.781-.781-2.048-.781-2.828 0L20.565 4.12c-.781.781-.781 2.047 0 2.829l6.364 6.364 2.121 2.121 1.414 1.414c1.027 1.027 3.314 3.315 4.718 1.911.773-.772.961-2.86.607-5.335z", {["fill"]: "#66757F",["d"]: "M35.789 13.424c-.252-1.765-.375-4.354-3.204-7.182l-.707-.708-4.949-4.95c-.781-.781-2.048-.781-2.828 0L20.565 4.12c-.781.781-.781 2.047 0 2.829l6.364 6.364 2.121 2.121 1.414 1.414c1.027 1.027 3.314 3.315 4.718 1.911.773-.772.961-2.86.607-5.335z",}));el.appendChild(svg["path"]("M29.185 33.279c1.166 1.166 3.022 1.221 4.121.121 1.1-1.1 1.045-2.955-.121-4.121L9.921 6.014C8.754 4.847 6.899 4.792 5.8 5.893c-1.101 1.1-1.046 2.955.121 4.121l23.264 23.265z", {["fill"]: "#F4900C",["d"]: "M29.185 33.279c1.166 1.166 3.022 1.221 4.121.121 1.1-1.1 1.045-2.955-.121-4.121L9.921 6.014C8.754 4.847 6.899 4.792 5.8 5.893c-1.101 1.1-1.046 2.955.121 4.121l23.264 23.265z",}));el.appendChild(svg["path"]("M3.415 7.657c-.781-.781-.781-2.048 0-2.829l1.414-1.414c.78-.78 2.047-.78 2.828 0 .781.781.781 2.048 0 2.829L6.243 7.657c-.781.781-2.048.781-2.828 0z", {["fill"]: "#F4900C",["d"]: "M3.415 7.657c-.781-.781-.781-2.048 0-2.829l1.414-1.414c.78-.78 2.047-.78 2.828 0 .781.781.781 2.048 0 2.829L6.243 7.657c-.781.781-2.048.781-2.828 0z",}));el.appendChild(svg["path"]("M4.122 15.436c.78.78 2.047.78 2.828 0l8.485-8.485c.781-.781.781-2.048 0-2.829L11.899.587c-.78-.781-2.047-.781-2.828 0L.586 9.071c-.781.781-.781 2.047 0 2.828l3.536 3.537z", {["fill"]: "#66757F",["d"]: "M4.122 15.436c.78.78 2.047.78 2.828 0l8.485-8.485c.781-.781.781-2.048 0-2.829L11.899.587c-.78-.781-2.047-.781-2.828 0L.586 9.071c-.781.781-.781 2.047 0 2.828l3.536 3.537z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};