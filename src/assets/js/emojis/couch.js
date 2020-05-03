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
				el.appendChild(svg["path"]("M31 29.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-24c0-.829.672-1.5 1.5-1.5s1.5.671 1.5 1.5v24z", {["fill"]: "#CCD6DD",["d"]: "M31 29.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-24c0-.829.672-1.5 1.5-1.5s1.5.671 1.5 1.5v24z",}));el.appendChild(svg["path"]("M34.882 32c.037-.164.062-.33.062-.5 0-1.933-2.463-3.5-5.5-3.5s-5.5 1.567-5.5 3.5c0 .17.025.336.062.5h10.876z", {["fill"]: "#CCD6DD",["d"]: "M34.882 32c.037-.164.062-.33.062-.5 0-1.933-2.463-3.5-5.5-3.5s-5.5 1.567-5.5 3.5c0 .17.025.336.062.5h10.876z",}));el.appendChild(svg["path"]("M35.944 9c.334 1.125-.896 2-2 2h-9c-1.104 0-2.291-1-2-2l2-7c.25-1.084.896-2 2-2h5c1.105 0 1.75 1.125 2 2l2 7z", {["fill"]: "#FCAB40",["d"]: "M35.944 9c.334 1.125-.896 2-2 2h-9c-1.104 0-2.291-1-2-2l2-7c.25-1.084.896-2 2-2h5c1.105 0 1.75 1.125 2 2l2 7z",}));el.appendChild(svg["path"]("M29.006 29.101c0 1.215-1.017 2.199-2.271 2.199H6.296c-1.254 0-2.271-.984-2.271-2.199v-9.9c0-1.215 1.017-2.2 2.271-2.2h20.439c1.254 0 2.271.985 2.271 2.2v9.9z", {["fill"]: "#5D9040",["d"]: "M29.006 29.101c0 1.215-1.017 2.199-2.271 2.199H6.296c-1.254 0-2.271-.984-2.271-2.199v-9.9c0-1.215 1.017-2.2 2.271-2.2h20.439c1.254 0 2.271.985 2.271 2.2v9.9z",}));el.appendChild(svg["path"]("M27.5 31.3c0 1.215-.985 2.2-2.2 2.2H6.6c-1.215 0-2.2-.985-2.2-2.2v-1.1c0-1.215.985-2.2 2.2-2.2h18.7c1.215 0 2.2.985 2.2 2.2v1.1z", {["fill"]: "#3F7123",["d"]: "M27.5 31.3c0 1.215-.985 2.2-2.2 2.2H6.6c-1.215 0-2.2-.985-2.2-2.2v-1.1c0-1.215.985-2.2 2.2-2.2h18.7c1.215 0 2.2.985 2.2 2.2v1.1z",}));el.appendChild(svg["ellipse"](16.516, 19.125, 24.968, 12.25, {["rx"]: "12.484",["cy"]: "19.125",["ry"]: "6.125",["fill"]: "#5D9040",["cx"]: "16.516",}));el.appendChild(svg["path"]("M6.6 23.601c0 1.822-1.478 3.3-3.3 3.3-1.822 0-3.3-1.478-3.3-3.3C0 21.777 1.478 20.3 3.3 20.3c1.823 0 3.3 1.477 3.3 3.301z", {["fill"]: "#78B159",["d"]: "M6.6 23.601c0 1.822-1.478 3.3-3.3 3.3-1.822 0-3.3-1.478-3.3-3.3C0 21.777 1.478 20.3 3.3 20.3c1.823 0 3.3 1.477 3.3 3.301z",}));el.appendChild(svg["path"]("M6.6 33.5c0 1.215-.985 2.2-2.2 2.2-1.215 0-2.2-.985-2.2-2.2v-9.899c0-1.215.985-2.2 2.2-2.2 1.215 0 2.2.985 2.2 2.2V33.5zm19.8-9.899c0 1.822 1.477 3.3 3.3 3.3 1.821 0 3.3-1.478 3.3-3.3 0-1.823-1.479-3.301-3.3-3.301-1.822 0-3.3 1.477-3.3 3.301z", {["fill"]: "#78B159",["d"]: "M6.6 33.5c0 1.215-.985 2.2-2.2 2.2-1.215 0-2.2-.985-2.2-2.2v-9.899c0-1.215.985-2.2 2.2-2.2 1.215 0 2.2.985 2.2 2.2V33.5zm19.8-9.899c0 1.822 1.477 3.3 3.3 3.3 1.821 0 3.3-1.478 3.3-3.3 0-1.823-1.479-3.301-3.3-3.301-1.822 0-3.3 1.477-3.3 3.301z",}));el.appendChild(svg["path"]("M26.4 33.5c0 1.215.984 2.2 2.199 2.2 1.215 0 2.2-.985 2.2-2.2v-9.899c0-1.215-.985-2.2-2.2-2.2-1.215 0-2.199.985-2.199 2.2V33.5zM16.5 28c0 1.215-.985 2.2-2.2 2.2H8.8c-1.215 0-2.2-.985-2.2-2.2 0-1.215.985-2.2 2.2-2.2h5.5c1.215 0 2.2.985 2.2 2.2zm9.9 0c0 1.215-.985 2.2-2.2 2.2h-5.5c-1.215 0-2.2-.985-2.2-2.2 0-1.215.985-2.2 2.2-2.2h5.5c1.215 0 2.2.985 2.2 2.2z", {["fill"]: "#78B159",["d"]: "M26.4 33.5c0 1.215.984 2.2 2.199 2.2 1.215 0 2.2-.985 2.2-2.2v-9.899c0-1.215-.985-2.2-2.2-2.2-1.215 0-2.199.985-2.199 2.2V33.5zM16.5 28c0 1.215-.985 2.2-2.2 2.2H8.8c-1.215 0-2.2-.985-2.2-2.2 0-1.215.985-2.2 2.2-2.2h5.5c1.215 0 2.2.985 2.2 2.2zm9.9 0c0 1.215-.985 2.2-2.2 2.2h-5.5c-1.215 0-2.2-.985-2.2-2.2 0-1.215.985-2.2 2.2-2.2h5.5c1.215 0 2.2.985 2.2 2.2z",}));el.appendChild(svg["path"]("M6 28h21v3H6z", {["fill"]: "#78B159",["d"]: "M6 28h21v3H6z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};