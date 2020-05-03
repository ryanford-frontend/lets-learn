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
				el.appendChild(svg["path"]("M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z", {["fill"]: "#C4272F",["d"]: "M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z",}));el.appendChild(svg["path"]("M12 5h12v26H12z", {["fill"]: "#005197",["d"]: "M12 5h12v26H12z",}));el.appendChild(svg["path"]("M1.286 16.429h1.571V29H1.286zm2.395 2.357H8.32v.786H3.681zm5.462-2.357h1.571V29H9.143zm-5.462 9.427H8.32v.786H3.681zm.087-9.427h4.464L6 17.989zm-.087 11.198h4.638L6 29.249zm3.89-15.913c0 .869-.704 1.571-1.571 1.571s-1.571-.703-1.571-1.571c0-.869.704-1.571 1.571-1.571s1.571.703 1.571 1.571zm-.785-2.946c0 .759-.352.982-.786.982s-.786-.223-.786-.982C5.214 8.008 5.754 7 6 7s.786 1.008.786 1.768z", {["d"]: "M1.286 16.429h1.571V29H1.286zm2.395 2.357H8.32v.786H3.681zm5.462-2.357h1.571V29H9.143zm-5.462 9.427H8.32v.786H3.681zm.087-9.427h4.464L6 17.989zm-.087 11.198h4.638L6 29.249zm3.89-15.913c0 .869-.704 1.571-1.571 1.571s-1.571-.703-1.571-1.571c0-.869.704-1.571 1.571-1.571s1.571.703 1.571 1.571zm-.785-2.946c0 .759-.352.982-.786.982s-.786-.223-.786-.982C5.214 8.008 5.754 7 6 7s.786 1.008.786 1.768z",["fill"]: "#F9CF01",}));el.appendChild(svg["path"]("M6 14.404c-1.303 0-2.438-.593-3.084-1.477.271 1.462 1.546 2.567 3.084 2.567s2.813-1.105 3.084-2.566c-.646.883-1.781 1.476-3.084 1.476zm2.569 8.31c0-1.095-.687-2.022-1.649-2.39.299.257.58.447.58 1.062 0 .973-.578 1.496-1.5 1.496v.009c-.642.024-1.158.547-1.158 1.193 0 .645.516 1.167 1.158 1.191v.008c.01 0 .018-.003.028-.003.005 0 .009.003.014.003.015 0 .027-.008.042-.008 1.379-.045 2.485-1.169 2.485-2.561zm-2.94 1.37c0-.229.183-.413.413-.413.229 0 .413.184.413.413 0 .228-.183.414-.413.414-.23 0-.413-.186-.413-.414z", {["d"]: "M6 14.404c-1.303 0-2.438-.593-3.084-1.477.271 1.462 1.546 2.567 3.084 2.567s2.813-1.105 3.084-2.566c-.646.883-1.781 1.476-3.084 1.476zm2.569 8.31c0-1.095-.687-2.022-1.649-2.39.299.257.58.447.58 1.062 0 .973-.578 1.496-1.5 1.496v.009c-.642.024-1.158.547-1.158 1.193 0 .645.516 1.167 1.158 1.191v.008c.01 0 .018-.003.028-.003.005 0 .009.003.014.003.015 0 .027-.008.042-.008 1.379-.045 2.485-1.169 2.485-2.561zm-2.94 1.37c0-.229.183-.413.413-.413.229 0 .413.184.413.413 0 .228-.183.414-.413.414-.23 0-.413-.186-.413-.414z",["fill"]: "#F9CF01",}));el.appendChild(svg["path"]("M6 20.152v-.006l-.021.002-.01-.002c-.011 0-.02.006-.031.006-1.389.034-2.507 1.162-2.507 2.562 0 1.096.687 2.023 1.649 2.391-.299-.257-.557-.448-.557-.999 0-.98.524-1.522 1.43-1.522l.002-.018c.005 0 .009.003.014.003.668 0 1.211-.546 1.211-1.212 0-.659-.527-1.188-1.18-1.205zm-.031 1.62c-.231 0-.417-.188-.417-.417 0-.229.185-.419.417-.419s.417.189.417.419c-.001.229-.186.417-.417.417z", {["d"]: "M6 20.152v-.006l-.021.002-.01-.002c-.011 0-.02.006-.031.006-1.389.034-2.507 1.162-2.507 2.562 0 1.096.687 2.023 1.649 2.391-.299-.257-.557-.448-.557-.999 0-.98.524-1.522 1.43-1.522l.002-.018c.005 0 .009.003.014.003.668 0 1.211-.546 1.211-1.212 0-.659-.527-1.188-1.18-1.205zm-.031 1.62c-.231 0-.417-.188-.417-.417 0-.229.185-.419.417-.419s.417.189.417.419c-.001.229-.186.417-.417.417z",["fill"]: "#F9CF01",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};