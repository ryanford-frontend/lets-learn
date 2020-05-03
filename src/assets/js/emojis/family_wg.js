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
				el.appendChild(svg["path"]("M4 14c.253 3.89 3.521 6.969 7.5 6.969S18.747 17.89 19 14V4H4v10z", {["fill"]: "#FFDC5D",["d"]: "M4 14c.253 3.89 3.521 6.969 7.5 6.969S18.747 17.89 19 14V4H4v10z",}));el.appendChild(svg["path"]("M15.538.808c-.333 0-.657.034-.974.09C13.393.328 12.39 0 11 0 6.093 0 2 4.093 2 9v7c.148 5.223 4.241 9.568 9.5 9.568S20.852 21.223 21 16V6C21 2.878 18.661.808 15.538.808zM19 14c-.253 3.89-3.521 6.969-7.5 6.969S4.253 17.89 4 14V9.663c5.328-.155 8.51-2.343 10.237-4.181C14.652 6.957 15.801 9 19 9v5z", {["fill"]: "#FFAC33",["d"]: "M15.538.808c-.333 0-.657.034-.974.09C13.393.328 12.39 0 11 0 6.093 0 2 4.093 2 9v7c.148 5.223 4.241 9.568 9.5 9.568S20.852 21.223 21 16V6C21 2.878 18.661.808 15.538.808zM19 14c-.253 3.89-3.521 6.969-7.5 6.969S4.253 17.89 4 14V9.663c5.328-.155 8.51-2.343 10.237-4.181C14.652 6.957 15.801 9 19 9v5z",}));el.appendChild(svg["path"]("M19 22H3c-1.779 0-1.945 1.193-1.945 2.973V36H22V24.973C22 23 21 22 19 22z", {["fill"]: "#9268CA",["d"]: "M19 22H3c-1.779 0-1.945 1.193-1.945 2.973V36H22V24.973C22 23 21 22 19 22z",}));el.appendChild(svg["path"]("M17 26h1.028v10H17zM5 26h1.028v10H5z", {["fill"]: "#7450A8",["d"]: "M17 26h1.028v10H17zM5 26h1.028v10H5z",}));el.appendChild(svg["path"]("M9 19v3c0 1.381 1.119 2.5 2.5 2.5S14 23.381 14 22v-3H9z", {["fill"]: "#FFDC5D",["d"]: "M9 19v3c0 1.381 1.119 2.5 2.5 2.5S14 23.381 14 22v-3H9z",}));el.appendChild(svg["path"]("M8.269 17.769h6.462s-.808 1.616-3.231 1.616-3.231-1.616-3.231-1.616z", {["fill"]: "#DA2F47",["d"]: "M8.269 17.769h6.462s-.808 1.616-3.231 1.616-3.231-1.616-3.231-1.616z",}));el.appendChild(svg["path"]("M12 15.5h-1c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1c.276 0 .5.224.5.5s-.224.5-.5.5z", {["fill"]: "#BF6952",["d"]: "M12 15.5h-1c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1c.276 0 .5.224.5.5s-.224.5-.5.5z",}));el.appendChild(svg["path"]("M8 13c-.553 0-1-.448-1-1v-1c0-.552.447-1 1-1s1 .448 1 1v1c0 .552-.447 1-1 1zm7 0c-.553 0-1-.448-1-1v-1c0-.552.447-1 1-1s1 .448 1 1v1c0 .552-.447 1-1 1z", {["fill"]: "#662113",["d"]: "M8 13c-.553 0-1-.448-1-1v-1c0-.552.447-1 1-1s1 .448 1 1v1c0 .552-.447 1-1 1zm7 0c-.553 0-1-.448-1-1v-1c0-.552.447-1 1-1s1 .448 1 1v1c0 .552-.447 1-1 1z",}));el.appendChild(svg["path"]("M32.994 26.047L32.992 26H33v-6h-3.557c-1.018-.574-2.192-.906-3.446-.906s-2.428.332-3.446.906H19v6h.002l-.002.047c0 3.353 2.39 6.152 5.569 6.807.461.095.938.146 1.428.146.492 0 .972-.052 1.435-.148 3.176-.658 5.562-3.454 5.562-6.805z", {["fill"]: "#FFDC5D",["d"]: "M32.994 26.047L32.992 26H33v-6h-3.557c-1.018-.574-2.192-.906-3.446-.906s-2.428.332-3.446.906H19v6h.002l-.002.047c0 3.353 2.39 6.152 5.569 6.807.461.095.938.146 1.428.146.492 0 .972-.052 1.435-.148 3.176-.658 5.562-3.454 5.562-6.805z",}));el.appendChild(svg["path"]("M27.432 32.852c-.264.511-.432.921-.432 1.148 4.656 0 9-3 9-3-1.125-3.688-1.666-8.139-1.666-8.139 0-4.342-3.519-7.861-7.861-7.861-1.245 0-2.418.297-3.464.812-3.33.07-6.009 2.787-6.009 6.133 0 .828.165 1.617.464 2.337-.25 1.611-.733 4.322-1.464 6.718 0 0 4.344 3 9 3 0-.227-.167-.636-.431-1.146C21.39 32.198 19 29.4 19 26.047l.002-.047H19v-3.036c4.856-.18 7.656-1.81 9.204-3.332 1.065 1.257 2.765 2.841 4.796 3.257V26h-.008l.002.047c0 3.351-2.386 6.147-5.562 6.805z", {["fill"]: "#F4900C",["d"]: "M27.432 32.852c-.264.511-.432.921-.432 1.148 4.656 0 9-3 9-3-1.125-3.688-1.666-8.139-1.666-8.139 0-4.342-3.519-7.861-7.861-7.861-1.245 0-2.418.297-3.464.812-3.33.07-6.009 2.787-6.009 6.133 0 .828.165 1.617.464 2.337-.25 1.611-.733 4.322-1.464 6.718 0 0 4.344 3 9 3 0-.227-.167-.636-.431-1.146C21.39 32.198 19 29.4 19 26.047l.002-.047H19v-3.036c4.856-.18 7.656-1.81 9.204-3.332 1.065 1.257 2.765 2.841 4.796 3.257V26h-.008l.002.047c0 3.351-2.386 6.147-5.562 6.805z",}));el.appendChild(svg["path"]("M28 35v-4h-4v4h-1v1h6v-1z", {["fill"]: "#FFDC5D",["d"]: "M28 35v-4h-4v4h-1v1h6v-1z",}));el.appendChild(svg["path"]("M26 36h8.818c-.518-1.602-2.159-3-3.818-3h-3l-2 3z", {["fill"]: "#EA596E",["d"]: "M26 36h8.818c-.518-1.602-2.159-3-3.818-3h-3l-2 3z",}));el.appendChild(svg["path"]("M22 33c-2.493 0-4.276 1.385-4.814 3H26l-2-3h-2z", {["fill"]: "#EA596E",["d"]: "M22 33c-2.493 0-4.276 1.385-4.814 3H26l-2-3h-2z",}));el.appendChild(svg["path"]("M29 30h-6s.583 2 3 2 3-2 3-2zm-3-.5c-.13 0-.26-.05-.35-.15-.1-.09-.15-.22-.15-.35s.05-.26.15-.36c.17-.17.52-.18.71.01.09.09.14.22.14.35s-.05.26-.15.35c-.09.1-.22.15-.35.15z", {["fill"]: "#BF6952",["d"]: "M29 30h-6s.583 2 3 2 3-2 3-2zm-3-.5c-.13 0-.26-.05-.35-.15-.1-.09-.15-.22-.15-.35s.05-.26.15-.36c.17-.17.52-.18.71.01.09.09.14.22.14.35s-.05.26-.15.35c-.09.1-.22.15-.35.15z",}));el.appendChild(svg["path"]("M23 28c-.552 0-1-.447-1-1v-1c0-.553.448-1 1-1s1 .447 1 1v1c0 .553-.448 1-1 1zm6 0c-.553 0-1-.447-1-1v-1c0-.553.447-1 1-1 .553 0 1 .447 1 1v1c0 .553-.447 1-1 1z", {["fill"]: "#662113",["d"]: "M23 28c-.552 0-1-.447-1-1v-1c0-.553.448-1 1-1s1 .447 1 1v1c0 .553-.448 1-1 1zm6 0c-.553 0-1-.447-1-1v-1c0-.553.447-1 1-1 .553 0 1 .447 1 1v1c0 .553-.447 1-1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};