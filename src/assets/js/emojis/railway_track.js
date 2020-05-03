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
				el.appendChild(svg["path"]("M36 32s0 4-4 4H4s-4 0-4-4V4c0-4 4-4 4-4h28c4 0 4 4 4 4v28z", {["fill"]: "#88C9F9",["d"]: "M36 32s0 4-4 4H4s-4 0-4-4V4c0-4 4-4 4-4h28c4 0 4 4 4 4v28z",}));el.appendChild(svg["path"]("M0 32c0 4 4 4 4 4h28c4 0 4-4 4-4V19H0v13z", {["fill"]: "#77B255",["d"]: "M0 32c0 4 4 4 4 4h28c4 0 4-4 4-4V19H0v13z",}));el.appendChild(svg["path"]("M29.313 4.678c-.274 0-.539.042-.787.119-.296-.843-1.096-1.449-2.04-1.449-1.013 0-1.86.697-2.096 1.637-.25-.189-.559-.306-.898-.306-.827 0-1.497.67-1.497 1.497 0 .201.041.392.114.567-.144-.04-.292-.068-.446-.068C20.744 6.674 20 7.418 20 8.337c0 .919.744 1.663 1.663 1.663h7.65c1.469 0 2.661-1.191 2.661-2.661.001-1.469-1.192-2.661-2.661-2.661z", {["fill"]: "#F5F8FA",["d"]: "M29.313 4.678c-.274 0-.539.042-.787.119-.296-.843-1.096-1.449-2.04-1.449-1.013 0-1.86.697-2.096 1.637-.25-.189-.559-.306-.898-.306-.827 0-1.497.67-1.497 1.497 0 .201.041.392.114.567-.144-.04-.292-.068-.446-.068C20.744 6.674 20 7.418 20 8.337c0 .919.744 1.663 1.663 1.663h7.65c1.469 0 2.661-1.191 2.661-2.661.001-1.469-1.192-2.661-2.661-2.661z",}));el.appendChild(svg["path"]("M22.375 19h-8.75L2.263 35.616C3.167 35.995 4 36 4 36h28c.71 0 1.289-.13 1.77-.338L22.375 19z", {["fill"]: "#C1694F",["d"]: "M22.375 19h-8.75L2.263 35.616C3.167 35.995 4 36 4 36h28c.71 0 1.289-.13 1.77-.338L22.375 19z",}));el.appendChild(svg["path"]("M4 36h28L21.375 19h-6.75z", {["fill"]: "#CCD6DD",["d"]: "M4 36h28L21.375 19h-6.75z",}));el.appendChild(svg["path"]("M6.625 36h22.75l-8.75-17h-5.25z", {["fill"]: "#58595B",["d"]: "M6.625 36h22.75l-8.75-17h-5.25z",}));el.appendChild(svg["path"]("M9.25 36h17.5l-6.875-17h-3.75z", {["fill"]: "#808285",["d"]: "M9.25 36h17.5l-6.875-17h-3.75z",}));el.appendChild(svg["path"]("M28 35c0 .553-.447 1-1 1H9c-.552 0-1-.447-1-1 0-.553.448-1 1-1h18c.553 0 1 .447 1 1zm-2-4c0 .553-.447 1-1 1H11c-.552 0-1-.447-1-1 0-.553.448-1 1-1h14c.553 0 1 .447 1 1zm-2-4c0 .553-.447 1-1 1H13c-.552 0-1-.447-1-1 0-.553.448-1 1-1h10c.553 0 1 .447 1 1zm-2-3.3c0 .387-.224.7-.5.7h-7c-.276 0-.5-.313-.5-.7 0-.387.224-.7.5-.7h7c.276 0 .5.313.5.7zm-1-2.366c0 .221-.18.399-.4.399h-5.2c-.221 0-.4-.179-.4-.399v-.201c0-.221.179-.399.4-.399h5.2c.221 0 .4.179.4.399v.201zm-1-2.102c0 .085-.18.412-.4.412h-3.2c-.221 0-.4-.327-.4-.412v-.078c0-.085.179-.154.4-.154h3.2c.221 0 .4.069.4.154v.078z", {["fill"]: "#A7A9AC",["d"]: "M28 35c0 .553-.447 1-1 1H9c-.552 0-1-.447-1-1 0-.553.448-1 1-1h18c.553 0 1 .447 1 1zm-2-4c0 .553-.447 1-1 1H11c-.552 0-1-.447-1-1 0-.553.448-1 1-1h14c.553 0 1 .447 1 1zm-2-4c0 .553-.447 1-1 1H13c-.552 0-1-.447-1-1 0-.553.448-1 1-1h10c.553 0 1 .447 1 1zm-2-3.3c0 .387-.224.7-.5.7h-7c-.276 0-.5-.313-.5-.7 0-.387.224-.7.5-.7h7c.276 0 .5.313.5.7zm-1-2.366c0 .221-.18.399-.4.399h-5.2c-.221 0-.4-.179-.4-.399v-.201c0-.221.179-.399.4-.399h5.2c.221 0 .4.179.4.399v.201zm-1-2.102c0 .085-.18.412-.4.412h-3.2c-.221 0-.4-.327-.4-.412v-.078c0-.085.179-.154.4-.154h3.2c.221 0 .4.069.4.154v.078z",}));el.appendChild(svg["path"]("M3.562 15.125c2.133 0 3.554 2.252 4.621 2.252 1.067 0 1.207-.502 2.629-.502S12.671 19 14.227 19H0l.005-2.001s1.335-1.874 3.557-1.874zm28.876 1.187c-2.133 0-3.554 1.065-4.621 1.065-1.066 0-1.269-.127-2.691-.127S23.329 19 21.773 19H36l-.006-2.001s-1.334-.687-3.556-.687z", {["d"]: "M3.562 15.125c2.133 0 3.554 2.252 4.621 2.252 1.067 0 1.207-.502 2.629-.502S12.671 19 14.227 19H0l.005-2.001s1.335-1.874 3.557-1.874zm28.876 1.187c-2.133 0-3.554 1.065-4.621 1.065-1.066 0-1.269-.127-2.691-.127S23.329 19 21.773 19H36l-.006-2.001s-1.334-.687-3.556-.687z",["fill"]: "#5C913B",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};